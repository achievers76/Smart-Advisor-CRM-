import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDA4QM9h6J-eKQt5_Eil3cldj1qvsWkYcY",
  authDomain: "smart-advisor-crm.firebaseapp.com",
  projectId: "smart-advisor-crm",
  storageBucket: "smart-advisor-crm.firebasestorage.app",
  messagingSenderId: "622298133772",
  appId: "1:622298133772:web:46fa878eab2b13ac810529",
  measurementId: "G-864ZC0HHX4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let currentUser = null;
let advisorProfile = { name: "LIC Advisor", code: "", mobile: "", branch: "" };
let policiesList = [];
let currentCrmFilter = "ALL";
let lastCalculation = null;

let plansDatabase = [
  { id: "936", name: "Jeevan Labh (Table 936)", combos: [{ term: 16, ppt: 10 }, { term: 21, ppt: 15 }, { term: 25, ppt: 16 }], ratesByTerm: { 16: 85.40, 21: 54.95, 25: 47.45 }, ageSlope: 0.42, bonusRate: 47, fab: 20, saRebate: { 500000: 1.25, 1000000: 1.50 } },
  { id: "945", name: "Jeevan Umang (Table 945)", combos: [{ term: 70, ppt: 15 }, { term: 70, ppt: 20 }, { term: 70, ppt: 25 }, { term: 70, ppt: 30 }], ratesByTerm: { 15: 79.65, 20: 57.30, 25: 45.10, 30: 37.85 }, keyByPPT: true, ageSlope: 0.55, bonusRate: 48, fab: 25, saRebate: { 500000: 1.50, 1000000: 2.00 } },
  { id: "871", name: "Jeevan Utsav (Table 871)", combos: [{ term: 70, ppt: 5 }, { term: 70, ppt: 8 }, { term: 70, ppt: 10 }, { term: 70, ppt: 12 }], ratesByTerm: { 5: 218.50, 8: 138.20, 10: 112.40, 12: 95.60 }, keyByPPT: true, ageSlope: 0.35, bonusRate: 40, gaOnlyPPT: true, fab: 0, saRebate: { 1000000: 1.50 } },
  { id: "874", name: "Amritbaal (Table 874)", combos: [{ term: 15, ppt: 5 }, { term: 18, ppt: 6 }, { term: 20, ppt: 7 }, { term: 25, ppt: 10 }], ratesByTerm: { 15: 162.40, 18: 134.80, 20: 116.50, 25: 84.20 }, ageSlope: 0.15, bonusRate: 80, fab: 0, saRebate: { 500000: 1.25 } },
  { id: "915", name: "New Jeevan Anand (Table 915)", combos: [{ term: 15, ppt: 15 }, { term: 20, ppt: 20 }, { term: 25, ppt: 25 }], ratesByTerm: { 15: 76.85, 20: 56.20, 25: 44.65 }, ageSlope: 0.48, bonusRate: 45, fab: 20, saRebate: { 500000: 1.50 } },
  { id: "933", name: "Jeevan Lakshya (Table 933)", combos: [{ term: 15, ppt: 12 }, { term: 18, ppt: 15 }, { term: 21, ppt: 18 }, { term: 25, ppt: 22 }], ratesByTerm: { 15: 74.10, 18: 60.80, 21: 51.65, 25: 43.20 }, ageSlope: 0.45, bonusRate: 46, fab: 20, saRebate: { 500000: 1.25 } },
  { id: "914", name: "New Endowment (Table 914)", combos: [{ term: 15, ppt: 15 }, { term: 20, ppt: 20 }, { term: 25, ppt: 25 }], ratesByTerm: { 15: 69.50, 20: 51.40, 25: 40.85 }, ageSlope: 0.44, bonusRate: 42, fab: 15, saRebate: { 500000: 1.25 } },
  { id: "860", name: "Bima Jyoti (Table 860)", combos: [{ term: 15, ppt: 10 }, { term: 16, ppt: 11 }, { term: 20, ppt: 15 }], ratesByTerm: { 15: 108.40, 16: 101.20, 20: 82.55 }, ageSlope: 0.40, bonusRate: 50, fab: 0, saRebate: { 500000: 1.25 } }
];
let isRegisterMode = false;
document.getElementById("toggleAuthMode").addEventListener("click", () => {
  isRegisterMode = !isRegisterMode;
  document.getElementById("nameFieldGroup").classList.toggle("hidden", !isRegisterMode);
  document.getElementById("codeFieldGroup").classList.toggle("hidden", !isRegisterMode);
  document.getElementById("authSubmitBtn").textContent = isRegisterMode ? "Create Advisor Account" : "Login to Dashboard";
  document.getElementById("toggleAuthMode").textContent = isRegisterMode ? "Already registered? Login here" : "New Advisor? Create Free Account";
});

document.getElementById("authForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const errBox = document.getElementById("authError");
  errBox.classList.add("hidden");
  try {
    if (isRegisterMode) {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "advisors", cred.user.uid), {
        name: document.getElementById("regName").value || "LIC Advisor",
        code: document.getElementById("regCode").value || "",
        mobile: document.getElementById("regMobile").value || "",
        branch: ""
      });
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  } catch (err) {
    errBox.textContent = err.message.replace("Firebase:", "").trim();
    errBox.classList.remove("hidden");
  }
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    document.getElementById("authScreen").classList.add("hidden");
    document.getElementById("appContainer").classList.remove("hidden");
    await loadAdvisorData();
    populatePlansDropdown();
  } else {
    currentUser = null;
    document.getElementById("authScreen").classList.remove("hidden");
    document.getElementById("appContainer").classList.add("hidden");
  }
});

window.logoutUser = () => signOut(auth);

async function loadAdvisorData() {
  const profSnap = await getDoc(doc(db, "advisors", currentUser.uid));
  if (profSnap.exists()) advisorProfile = profSnap.data();
  document.getElementById("headerAdvisorInfo").textContent = `${advisorProfile.name} ${advisorProfile.code ? '• Code: ' + advisorProfile.code : ''}`;
  document.getElementById("profName").value = advisorProfile.name || "";
  document.getElementById("profCode").value = advisorProfile.code || "";
  document.getElementById("profMobile").value = advisorProfile.mobile || "";
  document.getElementById("profBranch").value = advisorProfile.branch || "";

  const customSnap = await getDocs(collection(db, "advisors", currentUser.uid, "customPlans"));
  customSnap.forEach(d => {
    if (!plansDatabase.find(p => p.id === d.id)) {
      const c = d.data();
      plansDatabase.push({ id: d.id, name: c.name, combos: [{ term: 15, ppt: 15 }, { term: 20, ppt: 15 }, { term: 25, ppt: 20 }], ratesByTerm: { 15: c.baseRate * 1.25, 20: c.baseRate, 25: c.baseRate * 0.85 }, ageSlope: 0.45, bonusRate: c.bonusRate, fab: 15, saRebate: { 500000: 1.25 } });
    }
  });
  populatePlansDropdown();
  await fetchPolicies();
}

window.saveAdvisorProfile = async () => {
  advisorProfile = {
    name: document.getElementById("profName").value.trim(),
    code: document.getElementById("profCode").value.trim(),
    mobile: document.getElementById("profMobile").value.trim(),
    branch: document.getElementById("profBranch").value.trim()
  };
  await setDoc(doc(db, "advisors", currentUser.uid), advisorProfile, { merge: true });
  document.getElementById("headerAdvisorInfo").textContent = `${advisorProfile.name} • Code: ${advisorProfile.code}`;
  alert("Profile saved!");
};

window.switchTab = (tabName) => {
  ["dashboard", "calculator", "crm", "profile"].forEach(t => {
    document.getElementById(`tab-${t}`).classList.add("hidden");
    document.getElementById(`nav-${t}`).classList.remove("tab-active");
    document.getElementById(`nav-${t}`).classList.add("text-slate-500");
  });
  document.getElementById(`tab-${tabName}`).classList.remove("hidden");
  document.getElementById(`nav-${tabName}`).classList.add("tab-active");
  document.getElementById(`nav-${tabName}`).classList.remove("text-slate-500");
};

window.openAddPolicyModal = () => document.getElementById("policyModal").classList.remove("hidden");
window.openCustomPlanModal = () => document.getElementById("customPlanModal").classList.remove("hidden");
window.openImportModal = () => { document.getElementById("importStatusBox").classList.add("hidden"); document.getElementById("importModal").classList.remove("hidden"); };
window.closeModal = (id) => document.getElementById(id).classList.add("hidden");

window.downloadSampleExcel = () => {
  const sampleRows = [
    { "Client Name": "Rajesh Kumar", "Mobile": "9876543210", "Policy Number": "512345678", "Plan": "Jeevan Labh 936", "Mode": "Yearly", "Premium": 24500, "FUP": "2026-11-28" },
    { "Client Name": "Sunita Devi", "Mobile": "9123456780", "Policy Number": "512987654", "Plan": "Jeevan Umang 945", "Mode": "Half-Yearly", "Premium": 15200, "FUP": "2026-12-10" }
  ];
  const ws = XLSX.utils.json_to_sheet(sampleRows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Policies");
  XLSX.writeFile(wb, "LIC_Policyholders_Template.xlsx");
};

function normalizeDate(raw) {
  if (!raw) return new Date().toISOString().split("T")[0];
  if (typeof raw === "number") return new Date(Math.round((raw - 25569) * 86400 * 1000)).toISOString().split("T")[0];
  const clean = String(raw).trim().replace(/\//g, "-");
  const parts = clean.split("-");
  if (parts.length === 3 && parts[0].length <= 2 && parts[2].length === 4) return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
  return clean;
}

window.processSpreadsheetImport = async () => {
  const fileInput = document.getElementById("excelFileInput");
  if (!fileInput.files || fileInput.files.length === 0) return alert("Please select an Excel or CSV file first.");
  const btn = document.getElementById("btnRunImport");
  btn.disabled = true; btn.textContent = "Importing Policies...";
  try {
    const data = await fileInput.files[0].arrayBuffer();
    const workbook = XLSX.read(data);
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { defval: "" });
    let added = 0, updated = 0;

    for (const row of rows) {
      const keys = Object.keys(row);
      const findVal = (patterns) => {
        const k = keys.find(key => patterns.some(p => key.toLowerCase().includes(p)));
        return k ? String(row[k]).trim() : "";
      };
      const clientName = findVal(["name", "insured", "holder", "client", "life"]);
      const policyNumber = findVal(["policy", "pol"]);
      if (!clientName || !policyNumber) continue;

      const mobile = findVal(["mobile", "phone", "mob", "contact"]) || "0000000000";
      const planName = findVal(["plan", "table"]) || "LIC Plan";
      const mode = findVal(["mode", "freq"]) || "Yearly";
      const amount = parseFloat(findVal(["premium", "amount", "inst", "prem"]).replace(/[^0-9.]/g, "")) || 0;
      const fup = normalizeDate(row[keys.find(k => ["fup", "due", "date"].some(p => k.toLowerCase().includes(p)))]);

      const existing = policiesList.find(p => String(p.policyNumber).trim() === policyNumber);
      if (existing) {
        await updateDoc(doc(db, "advisors", currentUser.uid, "policies", existing.id), { fup, amount: amount || existing.amount, mobile: mobile !== "0000000000" ? mobile : existing.mobile });
        updated++;
      } else {
        await addDoc(collection(db, "advisors", currentUser.uid, "policies"), { clientName, mobile, policyNumber, planName, mode, amount, fup });
        added++;
      }
    }
    await fetchPolicies();
    const statusBox = document.getElementById("importStatusBox");
    statusBox.textContent = `Success! ${added} new policyholders added & ${updated} updated.`;
    statusBox.classList.remove("hidden");
    fileInput.value = "";
  } catch (err) { alert("Error: " + err.message); }
  btn.disabled = false; btn.textContent = "Upload & Import All Policies";
};
function populatePlansDropdown() {
  const sel = document.getElementById("calcPlanSelect");
  sel.innerHTML = plansDatabase.map(p => `<option value="${p.id}">${p.name}</option>`).join("");
  handlePlanChange();
}

window.handlePlanChange = () => {
  const plan = plansDatabase.find(p => p.id === document.getElementById("calcPlanSelect").value);
  const termSel = document.getElementById("calcTermSelect");
  const age = parseInt(document.getElementById("calcAge").value) || 30;
  if (plan && plan.combos) {
    termSel.innerHTML = plan.combos.map((c, idx) => {
      const actualTerm = plan.keyByPPT ? Math.max(15, 100 - age) : c.term;
      return `<option value="${idx}">${plan.keyByPPT ? `Whole Life (${actualTerm} Yrs | PPT: ${c.ppt})` : `${c.term} Years (PPT: ${c.ppt} Yrs)`}</option>`;
    }).join("");
    syncPPTFromTerm();
  }
};

window.syncPPTFromTerm = () => {
  const plan = plansDatabase.find(p => p.id === document.getElementById("calcPlanSelect").value);
  const combo = plan?.combos[parseInt(document.getElementById("calcTermSelect").value) || 0];
  if (combo) document.getElementById("calcPPT").value = combo.ppt;
};

document.getElementById("customPlanForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const baseRate = parseFloat(document.getElementById("cpRate").value);
  const bonusRate = parseFloat(document.getElementById("cpBonus").value);
  const name = document.getElementById("cpName").value.trim();
  const ref = await addDoc(collection(db, "advisors", currentUser.uid, "customPlans"), { name, baseRate, bonusRate });
  plansDatabase.push({ id: ref.id, name, combos: [{ term: 15, ppt: 15 }, { term: 20, ppt: 15 }, { term: 25, ppt: 20 }], ratesByTerm: { 15: baseRate * 1.25, 20: baseRate, 25: baseRate * 0.85 }, ageSlope: 0.45, bonusRate, fab: 15, saRebate: { 500000: 1.25 } });
  populatePlansDropdown();
  document.getElementById("calcPlanSelect").value = ref.id;
  handlePlanChange();
  closeModal("customPlanModal");
  e.target.reset();
});

window.calculateBenefit = () => {
  const plan = plansDatabase.find(p => p.id === document.getElementById("calcPlanSelect").value);
  const clientName = document.getElementById("calcClientName").value.trim() || "Valued Client";
  const age = parseInt(document.getElementById("calcAge").value) || 30;
  const sa = parseFloat(document.getElementById("calcSA").value) || 500000;
  const combo = plan.combos[parseInt(document.getElementById("calcTermSelect").value) || 0];
  const term = plan.keyByPPT ? Math.max(15, 100 - age) : combo.term;
  const ppt = combo.ppt;
  const includeRider = document.getElementById("calcRider").value === "1";
  const mobile = document.getElementById("calcMobile").value.trim();

  const rateKey = plan.keyByPPT ? ppt : combo.term;
  const ageAdjustedRate = (plan.ratesByTerm[rateKey] || 55) + ((age - 30) * (plan.ageSlope || 0.45));
  let saRebate = 0;
  if (plan.saRebate) Object.keys(plan.saRebate).map(Number).sort((a, b) => a - b).forEach(t => { if (sa >= t) saRebate = plan.saRebate[t]; });

  const netRate = Math.max(10, ageAdjustedRate - saRebate);
  const rider = includeRider ? (sa / 1000) : 0;
  const basicY = Math.round(((sa / 1000) * netRate * 0.98) + rider);
  const basicH = Math.round((((sa / 1000) * netRate * 0.99) + rider) / 2);
  const basicQ = Math.round((((sa / 1000) * netRate) + rider) / 4);
  const basicM = Math.round((((sa / 1000) * netRate) + rider) / 12);

  const yr1Y = Math.round(basicY * 1.045), yr2Y = Math.round(basicY * 1.0225);
  const totalBonus = Math.round((sa / 1000) * plan.bonusRate * (plan.gaOnlyPPT ? ppt : term));
  const finalBonus = Math.round((sa / 1000) * (plan.fab || 0));
  const maturity = sa + totalBonus + finalBonus;
  const totalPaid = yr1Y + (yr2Y * (ppt - 1));
  const dailySave = Math.round(yr2Y / 365);

  document.getElementById("resPlanTitle").textContent = plan.name;
  document.getElementById("resClientSub").textContent = `Prepared for: ${clientName} (Age: ${age} Yrs)`;
  document.getElementById("resSA").textContent = `₹${sa.toLocaleString('en-IN')}`;
  document.getElementById("resTermPPT").textContent = `${term} / ${ppt} Yrs`;
  document.getElementById("resMaturity").textContent = `₹${maturity.toLocaleString('en-IN')}`;
  document.getElementById("resRebateInfo").textContent = `Applied: 2% Yearly Rebate + ₹${saRebate.toFixed(2)}/1000 High SA Rebate`;

  document.getElementById("resPremiumTable").innerHTML = `
    <tr><td class="p-2.5 font-semibold">Yearly</td><td class="p-2.5 font-bold text-[#003366]">₹${yr1Y.toLocaleString('en-IN')}</td><td class="p-2.5">₹${yr2Y.toLocaleString('en-IN')}</td></tr>
    <tr><td class="p-2.5 font-semibold">Half-Yearly</td><td class="p-2.5">₹${Math.round(basicH * 1.045).toLocaleString('en-IN')}</td><td class="p-2.5">₹${Math.round(basicH * 1.0225).toLocaleString('en-IN')}</td></tr>
    <tr><td class="p-2.5 font-semibold">Quarterly</td><td class="p-2.5">₹${Math.round(basicQ * 1.045).toLocaleString('en-IN')}</td><td class="p-2.5">₹${Math.round(basicQ * 1.0225).toLocaleString('en-IN')}</td></tr>
    <tr><td class="p-2.5 font-semibold">Monthly</td><td class="p-2.5">₹${Math.round(basicM * 1.045).toLocaleString('en-IN')}</td><td class="p-2.5">₹${Math.round(basicM * 1.0225).toLocaleString('en-IN')}</td></tr>
  `;

  document.getElementById("resBreakSA").textContent = `₹${sa.toLocaleString('en-IN')}`;
  document.getElementById("resBreakBonus").textContent = `₹${totalBonus.toLocaleString('en-IN')}`;
  document.getElementById("resBreakFAB").textContent = `₹${finalBonus.toLocaleString('en-IN')}`;
  document.getElementById("resTotalPaid").textContent = `₹${totalPaid.toLocaleString('en-IN')}`;
  document.getElementById("resNetGain").textContent = `+₹${(maturity - totalPaid).toLocaleString('en-IN')}`;
  document.getElementById("resDailySave").textContent = `₹${dailySave} / day`;
  document.getElementById("pdfAdvisorName").textContent = advisorProfile.name || "Authorized LIC Advisor";
  document.getElementById("pdfAdvisorMeta").textContent = `${advisorProfile.code ? 'Code: ' + advisorProfile.code + ' | ' : ''}${advisorProfile.mobile ? 'Mob: ' + advisorProfile.mobile : ''}`;

  lastCalculation = { clientName, mobile, planName: plan.name, sa, term, ppt, yr1Yearly: yr1Y, maturityAmount: maturity, dailySave };
  document.getElementById("calcResultBox").classList.remove("hidden");
};

window.downloadQuotationPDF = () => {
  html2pdf().set({ margin: 10, filename: `${lastCalculation?.clientName || 'LIC'}_Quotation.pdf`, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4' } }).from(document.getElementById("quotationPrintArea")).save();
};

window.shareQuotationWhatsApp = () => {
  if (!lastCalculation) return;
  const c = lastCalculation;
  const msg = `*LIC Benefit Illustration* 🛡️%0A%0ADear *${c.clientName}*,%0A📌 *Plan:* ${c.planName}%0A💰 *Sum Assured:* ₹${c.sa.toLocaleString('en-IN')}%0A⏳ *Term / PPT:* ${c.term}/${c.ppt} Yrs%0A💳 *1st Yr Premium:* ₹${c.yr1Yearly.toLocaleString('en-IN')}%0A🎯 *Est. Maturity:* *₹${c.maturityAmount.toLocaleString('en-IN')}*%0A%0ARegards, *${advisorProfile.name}*`;
  window.open(`https://wa.me/${c.mobile ? '91' + c.mobile.replace(/\D/g, '').slice(-10) : ''}?text=${msg}`, "_blank");
};

document.getElementById("policyForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  await addDoc(collection(db, "advisors", currentUser.uid, "policies"), {
    clientName: document.getElementById("polClientName").value.trim(),
    mobile: document.getElementById("polMobile").value.trim(),
    policyNumber: document.getElementById("polNumber").value.trim(),
    planName: document.getElementById("polPlan").value.trim(),
    mode: document.getElementById("polMode").value,
    amount: parseFloat(document.getElementById("polAmount").value),
    fup: document.getElementById("polFup").value
  });
  closeModal("policyModal"); e.target.reset(); await fetchPolicies();
});

async function fetchPolicies() {
  const snap = await getDocs(collection(db, "advisors", currentUser.uid, "policies"));
  policiesList = [];
  snap.forEach(d => policiesList.push({ id: d.id, ...d.data() }));
  updateDashboardStats();
  renderPolicies();
}

function getDaysDiff(fupStr) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return Math.ceil((new Date(fupStr) - today) / 86400000);
}

function updateDashboardStats() {
  let dueMonth = 0, overdue = 0;
  const urgent = document.getElementById("urgentRemindersList");
  urgent.innerHTML = "";
  policiesList.forEach(p => {
    const diff = getDaysDiff(p.fup);
    if (diff < 0) overdue++; else if (diff <= 30) dueMonth++;
    if (diff <= 30) {
      urgent.innerHTML += `<div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border"><div><p class="font-bold text-xs">${p.clientName} <span class="text-[10px] px-2 py-0.5 rounded-full ${diff < 0 ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'}">${diff < 0 ? 'Overdue ' + Math.abs(diff) + 'd' : 'Due ' + diff + 'd'}</span></p><p class="text-[11px] text-slate-500">Pol: ${p.policyNumber} • ₹${p.amount.toLocaleString('en-IN')} (${p.fup})</p></div><button onclick="sendRenewalWhatsApp('${p.id}')" class="bg-[#25D366] text-white px-3 py-1.5 rounded-lg text-xs font-bold">Remind</button></div>`;
    }
  });
  if (!urgent.innerHTML) urgent.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">No urgent renewals in the next 30 days.</p>`;
  const total = policiesList.length;
  document.getElementById("statTotalPolicies").textContent = total;
  document.getElementById("statDueMonth").textContent = dueMonth;
  document.getElementById("statOverdue").textContent = overdue;
  document.getElementById("statPersistency").textContent = `${total === 0 ? 100 : Math.round(((total - overdue) / total) * 100)}%`;
}

window.setCrmFilter = (f) => {
  currentCrmFilter = f;
  ["ALL", "DUE", "ACTIVE"].forEach(btn => document.getElementById(`filter-${btn}`).className = btn === f ? "px-3 py-1.5 rounded-full bg-[#003366] text-white font-semibold" : "px-3 py-1.5 rounded-full bg-white text-slate-600 border font-semibold");
  renderPolicies();
};

window.renderPolicies = () => {
  const term = document.getElementById("crmSearch").value.toLowerCase();
  const filtered = policiesList.filter(p => {
    const match = p.clientName.toLowerCase().includes(term) || String(p.policyNumber).includes(term) || p.planName.toLowerCase().includes(term);
    const diff = getDaysDiff(p.fup);
    return currentCrmFilter === "DUE" ? match && diff <= 30 : (currentCrmFilter === "ACTIVE" ? match && diff > 30 : match);
  });
  document.getElementById("crmPolicyList").innerHTML = filtered.length ? filtered.map(p => {
    const diff = getDaysDiff(p.fup);
    return `<div class="bg-white p-4 rounded-2xl shadow-sm border space-y-2"><div class="flex justify-between"><div><h4 class="font-bold text-sm text-[#003366]">${p.clientName}</h4><p class="text-xs text-slate-500">Pol: ${p.policyNumber} • ${p.planName}</p></div><span class="text-[10px] font-bold px-2 py-1 rounded-full ${diff < 0 ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-700'}">${diff < 0 ? 'Overdue' : 'Active'}</span></div><div class="flex justify-between text-xs bg-slate-50 p-2 rounded-xl"><span>₹${p.amount.toLocaleString('en-IN')} (${p.mode})</span><span>FUP: <strong>${p.fup}</strong></span></div><div class="flex gap-2"><button onclick="sendRenewalWhatsApp('${p.id}')" class="flex-1 bg-[#25D366] text-white py-2 rounded-xl text-xs font-bold">WhatsApp</button><button onclick="markPremiumPaid('${p.id}')" class="flex-1 bg-blue-50 text-[#003366] py-2 rounded-xl text-xs font-bold">Mark Paid</button><button onclick="deletePolicy('${p.id}')" class="px-3 bg-red-50 text-red-600 rounded-xl text-xs"><i class="fas fa-trash"></i></button></div></div>`;
  }).join("") : `<p class="text-xs text-slate-400 text-center py-8">No policies found.</p>`;
};

window.sendRenewalWhatsApp = (id) => {
  const p = policiesList.find(x => x.id === id);
  if (!p) return;
  const msg = `*LIC Renewal Reminder* 🔔%0ADear *${p.clientName}*,%0APolicy No: *${p.policyNumber}* (${p.planName})%0AAmount: *₹${p.amount.toLocaleString('en-IN')}*%0ADue Date: *${p.fup}*%0ARegards, *${advisorProfile.name}*`;
  window.open(`https://wa.me/91${String(p.mobile).replace(/\D/g, '').slice(-10)}?text=${msg}`, "_blank");
};

window.markPremiumPaid = async (id) => {
  const p = policiesList.find(x => x.id === id);
  const d = new Date(p.fup);
  d.setMonth(d.getMonth() + (p.mode === "Yearly" ? 12 : p.mode === "Half-Yearly" ? 6 : p.mode === "Quarterly" ? 3 : 1));
  await updateDoc(doc(db, "advisors", currentUser.uid, "policies", id), { fup: d.toISOString().split("T")[0] });
  await fetchPolicies();
};

window.deletePolicy = async (id) => { if (confirm("Delete policy?")) { await deleteDoc(doc(db, "advisors", currentUser.uid, "policies", id)); await fetchPolicies(); } };
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

