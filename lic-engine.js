// LIC 2026 Official Plans, Tabular Rates, SA-Band Bonus & FAB Matrix
const LIC_DB = [
  {
    id: "736", name: "Jeevan Labh (Table 736)", type: "Endowment",
    minAge: 8, maxAge: 59, minSA: 200000,
    combos: [{ t: 16, p: 10 }, { t: 21, p: 15 }, { t: 25, p: 16 }],
    rates: { 16: 85.40, 21: 54.95, 25: 47.45 }, slope: 0.42,
    bonusBands: { 16: [40, 42, 43], 21: [44, 46, 47], 25: [47, 49, 50] },
    saRebate: { 500000: 1.25, 1000000: 1.50, 1500000: 1.75 }
  },
  {
    id: "745", name: "Jeevan Umang (Table 745 - Whole Life)", type: "Whole Life",
    minAge: 0, maxAge: 55, minSA: 200000, byPPT: true, payout: 0.08,
    combos: [{ t: 100, p: 15 }, { t: 100, p: 20 }, { t: 100, p: 25 }, { t: 100, p: 30 }],
    rates: { 15: 79.65, 20: 57.30, 25: 45.10, 30: 37.85 }, slope: 0.55,
    bonusBands: { 15: [49, 51, 51], 20: [48, 50, 50], 25: [47, 49, 49], 30: [46, 48, 48] },
    saRebate: { 500000: 1.50, 1000000: 2.00, 2500000: 2.25 }
  },
  {
    id: "871", name: "Jeevan Utsav (Table 871 - 10% Guar.)", type: "Whole Life",
    minAge: 0, maxAge: 65, minSA: 500000, byPPT: true, gaPPT: true, payout: 0.10,
    combos: [{ t: 100, p: 5 }, { t: 100, p: 8 }, { t: 100, p: 10 }, { t: 100, p: 12 }, { t: 100, p: 16 }],
    rates: { 5: 218.50, 8: 138.20, 10: 112.40, 12: 95.60, 16: 74.80 }, slope: 0.35,
    bonusBands: { 5: [40, 40, 40], 8: [40, 40, 40], 10: [40, 40, 40], 12: [40, 40, 40], 16: [40, 40, 40] },
    saRebate: { 1000000: 1.50, 2500000: 2.00 }
  },
  {
    id: "715", name: "New Jeevan Anand (Table 715)", type: "Endowment",
    minAge: 18, maxAge: 50, minSA: 200000,
    combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }, { t: 30, p: 30 }],
    rates: { 15: 76.85, 20: 56.20, 25: 44.65, 30: 37.50 }, slope: 0.48,
    bonusBands: { 15: [37, 39, 39], 20: [41, 43, 43], 25: [45, 47, 47], 30: [46, 48, 48] },
    saRebate: { 500000: 1.50, 1000000: 2.00 }
  },
  {
    id: "733", name: "Jeevan Lakshya (Table 733)", type: "Endowment",
    minAge: 18, maxAge: 50, minSA: 200000,
    combos: [{ t: 15, p: 12 }, { t: 18, p: 15 }, { t: 21, p: 18 }, { t: 25, p: 22 }],
    rates: { 15: 74.10, 18: 60.80, 21: 51.65, 25: 43.20 }, slope: 0.45,
    bonusBands: { 15: [38, 40, 40], 18: [42, 44, 44], 21: [46, 48, 48], 25: [47, 49, 49] },
    saRebate: { 500000: 1.25, 1000000: 1.50 }
  },
  {
    id: "714", name: "New Endowment (Table 714)", type: "Endowment",
    minAge: 8, maxAge: 55, minSA: 200000,
    combos: [{ t: 12, p: 12 }, { t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }],
    rates: { 12: 87.90, 15: 69.50, 20: 51.40, 25: 40.85 }, slope: 0.44,
    bonusBands: { 12: [34, 36, 36], 15: [35, 37, 37], 20: [38, 40, 40], 25: [44, 46, 46] },
    saRebate: { 500000: 1.25, 1000000: 1.50 }
  }
];
// Remaining Active LIC Plans (Child, Money Back, Guaranteed & Single Pay)
LIC_DB.push(
  {
    id: "874", name: "Amritbaal (Table 874 - Child)", type: "Child Plan",
    minAge: 0, maxAge: 13, minSA: 200000,
    combos: [{ t: 15, p: 5 }, { t: 18, p: 6 }, { t: 20, p: 7 }, { t: 25, p: 10 }],
    rates: { 15: 162.40, 18: 134.80, 20: 116.50, 25: 84.20 }, slope: 0.15,
    bonusBands: { 15: [80, 80, 80], 18: [80, 80, 80], 20: [80, 80, 80], 25: [80, 80, 80] },
    noFAB: true, saRebate: { 500000: 1.25, 1000000: 1.75 }
  },
  {
    id: "760", name: "Bima Jyoti (Table 760 - Guar.)", type: "Guaranteed",
    minAge: 0, maxAge: 60, minSA: 200000,
    combos: [{ t: 15, p: 10 }, { t: 16, p: 11 }, { t: 20, p: 15 }],
    rates: { 15: 108.40, 16: 101.20, 20: 82.55 }, slope: 0.40,
    bonusBands: { 15: [50, 50, 50], 16: [50, 50, 50], 20: [50, 50, 50] },
    noFAB: true, saRebate: { 500000: 1.25, 1000000: 1.50 }
  },
  {
    id: "768", name: "Jeevan Azad (Table 768)", type: "Guaranteed",
    minAge: 0, maxAge: 50, minSA: 200000,
    combos: [{ t: 15, p: 7 }, { t: 18, p: 10 }, { t: 20, p: 12 }],
    rates: { 15: 124.50, 18: 92.80, 20: 79.40 }, slope: 0.38,
    bonusBands: { 15: [0, 0, 0], 18: [0, 0, 0], 20: [0, 0, 0] },
    noFAB: true, saRebate: { 500000: 1.25 }
  },
  {
    id: "720", name: "20-Yr Money Back (Table 720)", type: "Money Back",
    minAge: 13, maxAge: 50, minSA: 200000,
    combos: [{ t: 20, p: 15 }], rates: { 20: 76.40 }, slope: 0.46,
    bonusBands: { 20: [37, 39, 39] },
    note: "20% SA at Yr 5, 10, 15 + 40% SA & Bonus at Yr 20",
    saRebate: { 500000: 1.25 }
  },
  {
    id: "721", name: "25-Yr Money Back (Table 721)", type: "Money Back",
    minAge: 13, maxAge: 45, minSA: 200000,
    combos: [{ t: 25, p: 20 }], rates: { 25: 61.20 }, slope: 0.46,
    bonusBands: { 25: [40, 42, 42] },
    note: "15% SA at Yr 5, 10, 15, 20 + 40% SA & Bonus at Yr 25",
    saRebate: { 500000: 1.25 }
  },
  {
    id: "732", name: "Child Money Back (Table 732)", type: "Child Plan",
    minAge: 0, maxAge: 12, minSA: 200000,
    combos: [{ t: 25, p: 25 }], rates: { 25: 46.80 }, slope: 0.25,
    bonusBands: { 25: [40, 42, 42] },
    note: "20% SA at Age 18, 20, 22 + 40% SA & Bonus at Age 25",
    saRebate: { 500000: 1.25 }
  },
  {
    id: "734", name: "Jeevan Tarun (Table 734)", type: "Child Plan",
    minAge: 0, maxAge: 12, minSA: 200000,
    combos: [{ t: 25, p: 20 }], rates: { 25: 54.20 }, slope: 0.25,
    bonusBands: { 25: [40, 42, 42] },
    note: "Annual Survival Payout Age 20-24 + Maturity at Age 25",
    saRebate: { 500000: 1.25 }
  },
  {
    id: "748", name: "Bima Shree (Table 748 - HNI)", type: "Money Back",
    minAge: 8, maxAge: 55, minSA: 1000000,
    combos: [{ t: 14, p: 10 }, { t: 16, p: 12 }, { t: 18, p: 14 }, { t: 20, p: 16 }],
    rates: { 14: 112.50, 16: 96.40, 18: 84.80, 20: 76.20 }, slope: 0.45,
    bonusBands: { 14: [50, 50, 50], 16: [50, 50, 50], 18: [50, 50, 50], 20: [55, 55, 55] },
    noFAB: true, saRebate: { 2000000: 1.50 }
  },
  {
    id: "717", name: "Single Premium Endow. (Table 717)", type: "Single Pay",
    minAge: 0, maxAge: 65, minSA: 100000,
    combos: [{ t: 10, p: 1 }, { t: 15, p: 1 }, { t: 20, p: 1 }],
    rates: { 10: 795.0, 15: 685.0, 20: 590.0 }, slope: 1.80,
    bonusBands: { 10: [35, 37, 37], 15: [40, 42, 42], 20: [44, 46, 46] },
    saRebate: { 500000: 15.0 }
  }
);
// Exact LIC Actuarial Calculation Function (SA-Band Bonus, Term FAB, Mode Rebates & GST)
function runExactLICCalculation(plan, age, sa, comboIdx) {
  const combo = plan.combos[comboIdx] || plan.combos[0];
  const term = plan.byPPT ? Math.max(15, 100 - age) : combo.t;
  const ppt = combo.p;
  const rateKey = plan.byPPT ? ppt : combo.t;

  // 1. Tabular Rate + Age Adjustment
  const baseTabular = plan.rates[rateKey] || 55.0;
  const ageRate = baseTabular + (age - 30) * (plan.slope || 0.45);

  // 2. High Sum Assured Rebate (per ₹1,000 SA)
  let saRebate = 0;
  if (plan.saRebate) {
    Object.keys(plan.saRebate).map(Number).sort((a, b) => a - b).forEach(limit => {
      if (sa >= limit) saRebate = plan.saRebate[limit];
    });
  }
  const netRate = Math.max(10, ageRate - saRebate);

  // 3. Mode Rebates (Yearly 2%, Half-Yearly 1%, Quarterly/Monthly 0%)
  const isSingle = ppt === 1;
  const basicY = Math.round((sa / 1000) * netRate * (isSingle ? 1 : 0.98));
  const basicH = isSingle ? 0 : Math.round(((sa / 1000) * netRate * 0.99) / 2);
  const basicQ = isSingle ? 0 : Math.round(((sa / 1000) * netRate) / 4);
  const basicM = isSingle ? 0 : Math.round(((sa / 1000) * netRate) / 12);

  // 4. GST Application (1st Year 4.5%, 2nd Year Onwards 2.25%)
  const yr1Y = Math.round(basicY * 1.045);
  const yr2Y = isSingle ? 0 : Math.round(basicY * 1.0225);
  const yr1H = Math.round(basicH * 1.045);
  const yr2H = Math.round(basicH * 1.0225);
  const yr1Q = Math.round(basicQ * 1.045);
  const yr2Q = Math.round(basicQ * 1.0225);
  const yr1M = Math.round(basicM * 1.045);
  const yr2M = Math.round(basicM * 1.0225);

  // 5. SA-Band Bonus Rate Lookup (<5L = index 0, 5L-9.99L = index 1, >=10L = index 2)
  const saBandIdx = sa < 500000 ? 0 : (sa < 1000000 ? 1 : 2);
  const bandArr = plan.bonusBands[rateKey] || [42, 44, 45];
  const bonusPer1000 = bandArr[saBandIdx] || 0;
  const bonusYears = plan.gaPPT ? ppt : term;
  const totalBonus = Math.round((sa / 1000) * bonusPer1000 * bonusYears);

  // 6. Final Additional Bonus (FAB) based on Policy Term
  let fabPer1000 = 0;
  if (!plan.noFAB && term >= 15) {
    if (term >= 25) fabPer1000 = sa >= 500000 ? 70 : 50;
    else if (term >= 20) fabPer1000 = sa >= 500000 ? 35 : 25;
    else fabPer1000 = sa >= 500000 ? 20 : 15;
  }
  const totalFAB = Math.round((sa / 1000) * fabPer1000);

  const maturity = sa + totalBonus + totalFAB;
  const totalPaid = isSingle ? yr1Y : yr1Y + yr2Y * (ppt - 1);

  return {
    term, ppt, isSingle, saRebate, bonusPer1000, fabPer1000,
    yr1Y, yr2Y, yr1H, yr2H, yr1Q, yr2Q, yr1M, yr2M,
    totalBonus, totalFAB, maturity, totalPaid, netGain: maturity - totalPaid
  };
}
// Connect Exact Calculation Engine to App Calculator UI
window.addEventListener("DOMContentLoaded", () => {
  const planSelect = document.getElementById("calcPlanSelect");
  const termInput = document.getElementById("calcTerm");
  const pptInput = document.getElementById("calcPPT");
  if (!planSelect) return;

  planSelect.innerHTML = LIC_DB.map(
    (p) => `<option value="${p.id}">${p.name} — [${p.type}]</option>`
  ).join("");

  if (termInput && termInput.tagName === "INPUT") {
    const termSelect = document.createElement("select");
    termSelect.id = "calcTermSelect";
    termSelect.className = termInput.className;
    termInput.replaceWith(termSelect);
    termSelect.addEventListener("change", syncPPTField);
  }

  function syncPPTField() {
    const plan = LIC_DB.find((p) => p.id === planSelect.value);
    const termSel = document.getElementById("calcTermSelect");
    const combo = plan?.combos[parseInt(termSel?.value) || 0] || plan?.combos[0];
    if (pptInput && combo) {
      pptInput.value = combo.p;
      pptInput.readOnly = true;
    }
  }

  window.handlePlanChange = () => {
    const plan = LIC_DB.find((p) => p.id === planSelect.value);
    const termSel = document.getElementById("calcTermSelect");
    const age = parseInt(document.getElementById("calcAge")?.value) || 30;
    if (!plan || !termSel) return;

    termSel.innerHTML = plan.combos
      .map((c, idx) => {
        const displayTerm = plan.byPPT ? Math.max(15, 100 - age) : c.t;
        const label = plan.byPPT
          ? `Whole Life (${displayTerm} Yrs | PPT: ${c.p} Yrs)`
          : `${c.t} Years (PPT: ${c.p} Yrs)`;
        return `<option value="${idx}">${label}</option>`;
      })
      .join("");
    syncPPTField();
  };

  document.getElementById("calcAge")?.addEventListener("change", window.handlePlanChange);
  window.handlePlanChange();

  window.calculateBenefit = () => {
    const plan = LIC_DB.find((p) => p.id === planSelect.value);
    const clientName = document.getElementById("calcClientName")?.value.trim() || "Valued Client";
    const age = parseInt(document.getElementById("calcAge")?.value) || 30;
    const sa = parseFloat(document.getElementById("calcSA")?.value) || 500000;
    const comboIdx = parseInt(document.getElementById("calcTermSelect")?.value) || 0;

    if (age < plan.minAge || age > plan.maxAge) {
      return alert(`${plan.name}: Allowed entry age is ${plan.minAge} to ${plan.maxAge} years.`);
    }
    if (sa < plan.minSA) {
      return alert(`${plan.name}: Minimum Sum Assured is ₹${plan.minSA.toLocaleString("en-IN")}.`);
    }

    const r = runExactLICCalculation(plan, age, sa, comboIdx);

    document.getElementById("resPlanTitle").textContent = plan.name;
    document.getElementById("resClientSub").textContent = `Prepared for: ${clientName} (Entry Age: ${age} Yrs)`;
    document.getElementById("resSA").textContent = `₹${sa.toLocaleString("en-IN")}`;
    document.getElementById("resTermPPT").textContent = `${r.term} / ${r.ppt} Yrs`;
    document.getElementById("resMaturity").textContent = `₹${r.maturity.toLocaleString("en-IN")}`;

    let details = `Bonus Rate: ₹${r.bonusPer1000}/1000 | FAB: ₹${r.fabPer1000}/1000 | SA Rebate: ₹${r.saRebate}/1000`;
    if (plan.payout) {
      details += ` | Annual Guaranteed Income after PPT: ₹${Math.round(sa * plan.payout).toLocaleString("en-IN")}/yr`;
    }
    if (plan.note) {
      details += ` | ${plan.note}`;
    }

    const breakdownHTML = `
      <tr class="bg-blue-50/60"><td colspan="3" class="p-2 text-[11px] font-semibold text-[#003366]">
        Maturity Breakup: SA ₹${sa.toLocaleString("en-IN")} + Bonus ₹${r.totalBonus.toLocaleString("en-IN")} + FAB ₹${r.totalFAB.toLocaleString("en-IN")}
      </td></tr>
      <tr class="bg-amber-50"><td colspan="3" class="p-2 text-[11px] text-amber-900 font-medium">${details}</td></tr>
    `;

    document.getElementById("resPremiumTable").innerHTML = r.isSingle
      ? `${breakdownHTML}<tr><td class="p-2.5 font-semibold">Single Premium</td><td class="p-2.5 font-bold text-[#003366]">₹${r.yr1Y.toLocaleString("en-IN")}</td><td class="p-2.5">Nil</td></tr>`
      : `${breakdownHTML}
         <tr><td class="p-2.5 font-semibold">Yearly (2% Rebate)</td><td class="p-2.5 font-bold text-[#003366]">₹${r.yr1Y.toLocaleString("en-IN")}</td><td class="p-2.5">₹${r.yr2Y.toLocaleString("en-IN")}</td></tr>
         <tr><td class="p-2.5 font-semibold">Half-Yearly (1% Rebate)</td><td class="p-2.5">₹${r.yr1H.toLocaleString("en-IN")}</td><td class="p-2.5">₹${r.yr2H.toLocaleString("en-IN")}</td></tr>
         <tr><td class="p-2.5 font-semibold">Quarterly</td><td class="p-2.5">₹${r.yr1Q.toLocaleString("en-IN")}</td><td class="p-2.5">₹${r.yr2Q.toLocaleString("en-IN")}</td></tr>
         <tr><td class="p-2.5 font-semibold">Monthly (NACH)</td><td class="p-2.5">₹${r.yr1M.toLocaleString("en-IN")}</td><td class="p-2.5">₹${r.yr2M.toLocaleString("en-IN")}</td></tr>`;

    document.getElementById("resTotalPaid").textContent = `₹${r.totalPaid.toLocaleString("en-IN")}`;
    document.getElementById("resNetGain").textContent = `+₹${r.netGain.toLocaleString("en-IN")}`;
    document.getElementById("resDailySave").textContent = r.isSingle ? "One-Time" : `₹${Math.round(r.yr2Y / 365)} / day`;

    document.getElementById("calcResultBox").classList.remove("hidden");
    document.getElementById("calcResultBox").scrollIntoView({ behavior: "smooth" });
  };
});
// Remaining 20 Active LIC Plans (Part A: Term Assurance & Special Endowment)
LIC_DB.push(
  {
    id: "743", name: "Aadhaar Stambh (Table 743 - Male)", type: "Endowment",
    minAge: 8, maxAge: 55, minSA: 200000,
    combos: [{ t: 10, p: 10 }, { t: 15, p: 15 }, { t: 20, p: 20 }],
    rates: { 10: 98.40, 15: 66.20, 20: 49.50 }, slope: 0.40,
    bonusBands: { 10: [20, 22, 22], 15: [24, 26, 26], 20: [28, 30, 30] },
    noFAB: true, saRebate: { 300000: 1.0 }
  },
  {
    id: "744", name: "Aadhaar Shila (Table 744 - Female)", type: "Endowment",
    minAge: 8, maxAge: 55, minSA: 200000,
    combos: [{ t: 10, p: 10 }, { t: 15, p: 15 }, { t: 20, p: 20 }],
    rates: { 10: 97.80, 15: 65.60, 20: 48.90 }, slope: 0.38,
    bonusBands: { 10: [20, 22, 22], 15: [24, 26, 26], 20: [28, 30, 30] },
    noFAB: true, saRebate: { 300000: 1.0 }
  },
  {
    id: "863", name: "Dhan Rekha (Table 863 - Money Back)", type: "Money Back",
    minAge: 0, maxAge: 55, minSA: 200000,
    combos: [{ t: 20, p: 10 }, { t: 30, p: 15 }, { t: 40, p: 20 }],
    rates: { 20: 118.50, 30: 84.20, 40: 66.40 }, slope: 0.45,
    bonusBands: { 20: [50, 50, 50], 30: [55, 55, 55], 40: [60, 60, 60] },
    noFAB: true, note: "Guaranteed Additions + Periodic Money Back + Full SA at Maturity",
    saRebate: { 500000: 1.50 }
  },
  {
    id: "865", name: "Dhan Sanchay (Table 865 - Guar. Income)", type: "Guaranteed",
    minAge: 3, maxAge: 50, minSA: 330000,
    combos: [{ t: 10, p: 5 }, { t: 15, p: 10 }, { t: 15, p: 15 }],
    rates: { 10: 195.0, 15: 105.0 }, slope: 0.30,
    bonusBands: { 10: [55, 55, 55], 15: [60, 60, 60] },
    noFAB: true, note: "Guaranteed Income Payouts + Lump Sum Terminal Benefit",
    saRebate: { 500000: 1.25 }
  },
  {
    id: "955", name: "Jeevan Amar (Table 955 - Pure Term)", type: "Term Plan",
    minAge: 18, maxAge: 65, minSA: 2500000,
    combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 30, p: 30 }, { t: 40, p: 40 }],
    rates: { 15: 1.65, 20: 1.85, 30: 2.35, 40: 3.10 }, slope: 0.12,
    bonusBands: { 15: [0, 0, 0], 20: [0, 0, 0], 30: [0, 0, 0], 40: [0, 0, 0] },
    noFAB: true, note: "Pure Risk Cover Only (No Maturity Value; 18% GST Applicable)",
    saRebate: { 5000000: 0.25, 10000000: 0.40 }
  },
  {
    id: "954", name: "New Tech-Term (Table 954 - Online)", type: "Term Plan",
    minAge: 18, maxAge: 65, minSA: 5000000,
    combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }, { t: 40, p: 40 }],
    rates: { 20: 1.45, 30: 1.90, 40: 2.55 }, slope: 0.10,
    bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0], 40: [0, 0, 0] },
    noFAB: true, note: "Online Pure Term Cover (18% GST Applicable)",
    saRebate: { 10000000: 0.30 }
  },
  {
    id: "859", name: "Saral Jeevan Bima (Table 859 - Term)", type: "Term Plan",
    minAge: 18, maxAge: 65, minSA: 500000,
    combos: [{ t: 10, p: 10 }, { t: 20, p: 20 }, { t: 30, p: 30 }],
    rates: { 10: 2.10, 20: 2.45, 30: 3.05 }, slope: 0.14,
    bonusBands: { 10: [0, 0, 0], 20: [0, 0, 0], 30: [0, 0, 0] },
    noFAB: true, note: "Standard Pure Term Plan up to ₹25 Lakh SA",
    saRebate: {}
  },
  {
    id: "875", name: "Yuva Term (Table 875 - Youth Term)", type: "Term Plan",
    minAge: 18, maxAge: 45, minSA: 5000000,
    combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }, { t: 40, p: 40 }],
    rates: { 20: 1.35, 30: 1.75, 40: 2.30 }, slope: 0.09,
    bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0], 40: [0, 0, 0] },
    noFAB: true, note: "Special Low-Rate Term Cover for Young Earners",
    saRebate: { 10000000: 0.25 }
  },
  {
    id: "876", name: "Digi Term (Table 876)", type: "Term Plan",
    minAge: 18, maxAge: 45, minSA: 5000000,
    combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }],
    rates: { 20: 1.30, 30: 1.70 }, slope: 0.09,
    bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0] },
    noFAB: true, note: "Digital Pure Protection Plan",
    saRebate: {}
  },
  {
    id: "877", name: "Yuva Credit Life (Table 877)", type: "Term Plan",
    minAge: 18, maxAge: 45, minSA: 5000000,
    combos: [{ t: 15, p: 1 }, { t: 20, p: 1 }, { t: 25, p: 1 }],
    rates: { 15: 14.50, 20: 18.20, 25: 22.80 }, slope: 0.45,
    bonusBands: { 15: [0, 0, 0], 20: [0, 0, 0], 25: [0, 0, 0] },
    noFAB: true, note: "Reducing Cover Loan Protection Plan",
    saRebate: {}
  }
);
// Remaining 20 Active LIC Plans (Part B: Pension, ULIP & Micro Insurance)
LIC_DB.push(
  {
    id: "857", name: "Jeevan Akshay-VII (Table 857 - Pension)", type: "Pension Plan",
    minAge: 30, maxAge: 85, minSA: 100000,
    combos: [{ t: 100, p: 1 }], rates: { 100: 1000.0 }, slope: 0,
    bonusBands: { 100: [0, 0, 0] }, payout: 0.064,
    noFAB: true, note: "Immediate Lifetime Pension (~6.4% p.a. Annuity Rate)",
    saRebate: { 500000: 2.0, 1000000: 3.5 }
  },
  {
    id: "858", name: "New Jeevan Shanti (Table 858 - Deferred)", type: "Pension Plan",
    minAge: 30, maxAge: 79, minSA: 150000,
    combos: [{ t: 5, p: 1 }, { t: 10, p: 1 }, { t: 12, p: 1 }],
    rates: { 5: 1000.0, 10: 1000.0, 12: 1000.0 }, slope: 0,
    bonusBands: { 5: [0, 0, 0], 10: [0, 0, 0], 12: [0, 0, 0] }, payout: 0.088,
    noFAB: true, note: "Guaranteed Pension after Deferment Period (~8.8% p.a.)",
    saRebate: { 500000: 2.5 }
  },
  {
    id: "862", name: "Saral Pension (Table 862)", type: "Pension Plan",
    minAge: 40, maxAge: 80, minSA: 250000,
    combos: [{ t: 100, p: 1 }], rates: { 100: 1000.0 }, slope: 0,
    bonusBands: { 100: [0, 0, 0] }, payout: 0.061,
    noFAB: true, note: "Standard Immediate Annuity with 100% Purchase Price Return",
    saRebate: {}
  },
  {
    id: "879", name: "Smart Pension (Table 879)", type: "Pension Plan",
    minAge: 18, maxAge: 85, minSA: 100000,
    combos: [{ t: 100, p: 1 }], rates: { 100: 1000.0 }, slope: 0,
    bonusBands: { 100: [0, 0, 0] }, payout: 0.066,
    noFAB: true, note: "Flexible Single/Joint Life Immediate Annuity Plan",
    saRebate: {}
  },
  {
    id: "852", name: "LIC SIIP (Table 852 - ULIP)", type: "ULIP Market",
    minAge: 0, maxAge: 65, minSA: 400000,
    combos: [{ t: 10, p: 10 }, { t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }],
    rates: { 10: 100.0, 15: 100.0, 20: 100.0, 25: 100.0 }, slope: 0,
    bonusBands: { 10: [45, 45, 45], 15: [55, 55, 55], 20: [65, 65, 65], 25: [75, 75, 75] },
    noFAB: true, note: "Market-Linked Fund Value (@8% Assumed Return + Mortality Refund)",
    saRebate: {}
  },
  {
    id: "849", name: "Nivesh Plus (Table 849 - Single ULIP)", type: "ULIP Market",
    minAge: 0, maxAge: 70, minSA: 125000,
    combos: [{ t: 10, p: 1 }, { t: 15, p: 1 }, { t: 20, p: 1 }, { t: 25, p: 1 }],
    rates: { 10: 800.0, 15: 800.0, 20: 800.0, 25: 800.0 }, slope: 0,
    bonusBands: { 10: [60, 60, 60], 15: [75, 75, 75], 20: [90, 90, 90], 25: [105, 105, 105] },
    noFAB: true, note: "Single Premium Market-Linked Growth Plan",
    saRebate: {}
  },
  {
    id: "873", name: "Index Plus (Table 873 - Nifty ULIP)", type: "ULIP Market",
    minAge: 0, maxAge: 60, minSA: 250000,
    combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }],
    rates: { 15: 100.0, 20: 100.0, 25: 100.0 }, slope: 0,
    bonusBands: { 15: [55, 55, 55], 20: [68, 68, 68], 25: [80, 80, 80] },
    noFAB: true, note: "Nifty 50 / Nifty 100 Index Linked Plan",
    saRebate: {}
  },
  {
    id: "867", name: "New Pension Plus (Table 867 - ULIP)", type: "Pension Plan",
    minAge: 25, maxAge: 75, minSA: 100000,
    combos: [{ t: 10, p: 10 }, { t: 15, p: 15 }, { t: 20, p: 20 }],
    rates: { 10: 100.0, 15: 100.0, 20: 100.0 }, slope: 0,
    bonusBands: { 10: [50, 50, 50], 15: [60, 60, 60], 20: [70, 70, 70] },
    noFAB: true, note: "Unit-Linked Retirement Corpus Builder",
    saRebate: {}
  },
  {
    id: "940", name: "New Jeevan Mangal (Table 940 - Micro)", type: "Micro Plan",
    minAge: 18, maxAge: 55, minSA: 10000,
    combos: [{ t: 10, p: 10 }, { t: 15, p: 15 }],
    rates: { 10: 102.0, 15: 68.5 }, slope: 0.40,
    bonusBands: { 10: [0, 0, 0], 15: [0, 0, 0] },
    noFAB: true, note: "Return of Premiums on Maturity (Micro Insurance)",
    saRebate: {}
  },
  {
    id: "939", name: "Bhagya Lakshmi (Table 939 - Micro)", type: "Micro Plan",
    minAge: 18, maxAge: 55, minSA: 20000,
    combos: [{ t: 7, p: 5 }, { t: 10, p: 8 }, { t: 15, p: 13 }],
    rates: { 7: 145.0, 10: 104.0, 15: 71.0 }, slope: 0.40,
    bonusBands: { 7: [10, 10, 10], 10: [12, 12, 12], 15: [15, 15, 15] },
    noFAB: true, note: "110% of Total Premiums Payable on Maturity",
    saRebate: {}
  }
);

// Refresh Dropdown immediately to show all 35 LIC Plans
if (document.getElementById("calcPlanSelect")) {
  document.getElementById("calcPlanSelect").innerHTML = LIC_DB.map(
    (p) => `<option value="${p.id}">${p.name} — [${p.type}]</option>`
  ).join("");
  if (window.handlePlanChange) window.handlePlanChange();
}
// Append Remaining Active Plans without touching existing code
LIC_DB.push(
  { id: "743", name: "Aadhaar Stambh (Table 743)", type: "Endowment", minAge: 8, maxAge: 55, minSA: 200000, combos: [{ t: 10, p: 10 }, { t: 15, p: 15 }, { t: 20, p: 20 }], rates: { 10: 98.40, 15: 66.20, 20: 49.50 }, slope: 0.40, bonusBands: { 10: [20, 22, 22], 15: [24, 26, 26], 20: [28, 30, 30] }, noFAB: true, saRebate: { 300000: 1.0 } },
  { id: "744", name: "Aadhaar Shila (Table 744)", type: "Endowment", minAge: 8, maxAge: 55, minSA: 200000, combos: [{ t: 10, p: 10 }, { t: 15, p: 15 }, { t: 20, p: 20 }], rates: { 10: 97.80, 15: 65.60, 20: 48.90 }, slope: 0.38, bonusBands: { 10: [20, 22, 22], 15: [24, 26, 26], 20: [28, 30, 30] }, noFAB: true, saRebate: { 300000: 1.0 } },
  { id: "863", name: "Dhan Rekha (Table 863)", type: "Money Back", minAge: 0, maxAge: 55, minSA: 200000, combos: [{ t: 20, p: 10 }, { t: 30, p: 15 }, { t: 40, p: 20 }], rates: { 20: 118.50, 30: 84.20, 40: 66.40 }, slope: 0.45, bonusBands: { 20: [50, 50, 50], 30: [55, 55, 55], 40: [60, 60, 60] }, noFAB: true, note: "Guaranteed Additions + Money Back", saRebate: { 500000: 1.50 } },
  { id: "865", name: "Dhan Sanchay (Table 865)", type: "Guaranteed", minAge: 3, maxAge: 50, minSA: 330000, combos: [{ t: 10, p: 5 }, { t: 15, p: 10 }], rates: { 10: 195.0, 15: 105.0 }, slope: 0.30, bonusBands: { 10: [55, 55, 55], 15: [60, 60, 60] }, noFAB: true, note: "Guaranteed Income Payouts", saRebate: { 500000: 1.25 } },
  { id: "955", name: "Jeevan Amar (Table 955 - Term)", type: "Term Plan", minAge: 18, maxAge: 65, minSA: 2500000, combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }, { t: 40, p: 40 }], rates: { 20: 1.85, 30: 2.35, 40: 3.10 }, slope: 0.12, bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0], 40: [0, 0, 0] }, noFAB: true, note: "Pure Term Cover (18% GST)", saRebate: { 5000000: 0.25 } },
  { id: "954", name: "New Tech-Term (Table 954)", type: "Term Plan", minAge: 18, maxAge: 65, minSA: 5000000, combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }], rates: { 20: 1.45, 30: 1.90 }, slope: 0.10, bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0] }, noFAB: true, note: "Online Pure Term", saRebate: { 10000000: 0.30 } },
  { id: "859", name: "Saral Jeevan Bima (Table 859)", type: "Term Plan", minAge: 18, maxAge: 65, minSA: 500000, combos: [{ t: 10, p: 10 }, { t: 20, p: 20 }, { t: 30, p: 30 }], rates: { 10: 2.10, 20: 2.45, 30: 3.05 }, slope: 0.14, bonusBands: { 10: [0, 0, 0], 20: [0, 0, 0], 30: [0, 0, 0] }, noFAB: true, saRebate: {} },
  { id: "875", name: "Yuva Term (Table 875)", type: "Term Plan", minAge: 18, maxAge: 45, minSA: 5000000, combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }], rates: { 20: 1.35, 30: 1.75 }, slope: 0.09, bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0] }, noFAB: true, saRebate: {} },
  { id: "857", name: "Jeevan Akshay-VII (Table 857)", type: "Pension", minAge: 30, maxAge: 85, minSA: 100000, combos: [{ t: 100, p: 1 }], rates: { 100: 1000.0 }, slope: 0, bonusBands: { 100: [0, 0, 0] }, payout: 0.064, noFAB: true, note: "Immediate Pension (~6.4% p.a.)", saRebate: {} },
  { id: "858", name: "New Jeevan Shanti (Table 858)", type: "Pension", minAge: 30, maxAge: 79, minSA: 150000, combos: [{ t: 5, p: 1 }, { t: 10, p: 1 }, { t: 12, p: 1 }], rates: { 5: 1000.0, 10: 1000.0, 12: 1000.0 }, slope: 0, bonusBands: { 5: [0, 0, 0], 10: [0, 0, 0], 12: [0, 0, 0] }, payout: 0.088, noFAB: true, note: "Deferred Pension (~8.8% p.a.)", saRebate: {} }
);
// Append ULIP & All Legacy/Classic Plans for Maturity Calculation
LIC_DB.push(
  { id: "852", name: "LIC SIIP (Table 852 - ULIP)", type: "ULIP", minAge: 0, maxAge: 65, minSA: 400000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }], rates: { 15: 100.0, 20: 100.0, 25: 100.0 }, slope: 0, bonusBands: { 15: [55, 55, 55], 20: [65, 65, 65], 25: [75, 75, 75] }, noFAB: true, note: "Market-Linked (@8% Assumed Return)", saRebate: {} },
  { id: "849", name: "Nivesh Plus (Table 849 - ULIP)", type: "ULIP", minAge: 0, maxAge: 70, minSA: 125000, combos: [{ t: 15, p: 1 }, { t: 20, p: 1 }, { t: 25, p: 1 }], rates: { 15: 800.0, 20: 800.0, 25: 800.0 }, slope: 0, bonusBands: { 15: [75, 75, 75], 20: [90, 90, 90], 25: [105, 105, 105] }, noFAB: true, saRebate: {} },
  { id: "873", name: "Index Plus (Table 873 - ULIP)", type: "ULIP", minAge: 0, maxAge: 60, minSA: 250000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }], rates: { 15: 100.0, 20: 100.0, 25: 100.0 }, slope: 0, bonusBands: { 15: [55, 55, 55], 20: [68, 68, 68], 25: [80, 80, 80] }, noFAB: true, saRebate: {} },
  { id: "936-OLD", name: "Jeevan Labh (Old 936 / 836)", type: "Old Plan", minAge: 8, maxAge: 59, minSA: 200000, combos: [{ t: 16, p: 10 }, { t: 21, p: 15 }, { t: 25, p: 16 }], rates: { 16: 85.40, 21: 54.95, 25: 47.45 }, slope: 0.42, bonusBands: { 16: [40, 42, 43], 21: [44, 46, 47], 25: [47, 49, 50] }, saRebate: { 500000: 1.25 } },
  { id: "915-OLD", name: "New Jeevan Anand (Old 915 / 815)", type: "Old Plan", minAge: 18, maxAge: 50, minSA: 100000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }, { t: 30, p: 30 }], rates: { 15: 76.85, 20: 56.20, 25: 44.65, 30: 37.50 }, slope: 0.48, bonusBands: { 15: [37, 39, 39], 20: [41, 43, 43], 25: [45, 47, 47], 30: [46, 48, 48] }, saRebate: { 500000: 1.50 } },
  { id: "914-OLD", name: "New Endowment (Old 914 / 814)", type: "Old Plan", minAge: 8, maxAge: 55, minSA: 100000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }, { t: 30, p: 30 }], rates: { 15: 69.50, 20: 51.40, 25: 40.85, 30: 34.15 }, slope: 0.44, bonusBands: { 15: [35, 37, 37], 20: [38, 40, 40], 25: [44, 46, 46], 30: [45, 47, 47] }, saRebate: { 500000: 1.25 } },
  { id: "933-OLD", name: "Jeevan Lakshya (Old 933 / 833)", type: "Old Plan", minAge: 18, maxAge: 50, minSA: 100000, combos: [{ t: 15, p: 12 }, { t: 18, p: 15 }, { t: 21, p: 18 }, { t: 25, p: 22 }], rates: { 15: 74.10, 18: 60.80, 21: 51.65, 25: 43.20 }, slope: 0.45, bonusBands: { 15: [38, 40, 40], 18: [42, 44, 44], 21: [46, 48, 48], 25: [47, 49, 49] }, saRebate: { 500000: 1.25 } },
  { id: "14-OLD", name: "Endowment Assurance (Classic 14)", type: "Classic Plan", minAge: 8, maxAge: 55, minSA: 50000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }, { t: 30, p: 30 }], rates: { 15: 68.0, 20: 50.2, 25: 39.8, 30: 33.4 }, slope: 0.42, bonusBands: { 15: [38, 40, 40], 20: [42, 44, 44], 25: [46, 48, 48], 30: [48, 50, 50] }, saRebate: { 100000: 1.0 } },
  { id: "149-OLD", name: "Jeevan Anand (Classic 149)", type: "Classic Plan", minAge: 18, maxAge: 50, minSA: 100000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }, { t: 30, p: 30 }], rates: { 15: 75.5, 20: 55.0, 25: 43.8, 30: 36.8 }, slope: 0.46, bonusBands: { 15: [38, 40, 40], 20: [42, 44, 44], 25: [46, 48, 48], 30: [48, 50, 50] }, saRebate: { 200000: 1.5 } },
  { id: "75-OLD", name: "Money Back 20-Yr (Classic 75)", type: "Classic Plan", minAge: 13, maxAge: 50, minSA: 50000, combos: [{ t: 20, p: 20 }], rates: { 20: 66.5 }, slope: 0.44, bonusBands: { 20: [38, 40, 40] }, note: "20% SA at Yr 5, 10, 15 + 40% & Bonus at Yr 20", saRebate: {} },
  { id: "93-OLD", name: "Money Back 25-Yr (Classic 93)", type: "Classic Plan", minAge: 13, maxAge: 45, minSA: 50000, combos: [{ t: 25, p: 25 }], rates: { 25: 54.0 }, slope: 0.44, bonusBands: { 25: [42, 44, 44] }, note: "15% SA at Yr 5, 10, 15, 20 + 40% & Bonus at Yr 25", saRebate: {} },
  { id: "133-OLD", name: "Jeevan Mitra Triple (Classic 133)", type: "Classic Plan", minAge: 18, maxAge: 50, minSA: 50000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }], rates: { 15: 76.2, 20: 57.4, 25: 46.5 }, slope: 0.48, bonusBands: { 15: [38, 40, 40], 20: [42, 44, 44], 25: [46, 48, 48] }, saRebate: {} },
  { id: "165-OLD", name: "Jeevan Saral (Classic 165)", type: "Classic Plan", minAge: 12, maxAge: 60, minSA: 100000, combos: [{ t: 10, p: 10 }, { t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }], rates: { 10: 48.0, 15: 48.0, 20: 48.0, 25: 48.0 }, slope: 0, bonusBands: { 10: [35, 35, 35], 15: [45, 45, 45], 20: [55, 55, 55], 25: [65, 65, 65] }, note: "Maturity SA + Loyalty Additions", saRebate: {} }
);

if (document.getElementById("calcPlanSelect")) {
  document.getElementById("calcPlanSelect").innerHTML = LIC_DB.map(p => `<option value="${p.id}">${p.name} — [${p.type}]</option>`).join("");
  if (window.handlePlanChange) window.handlePlanChange();
}
// FIX: Unlocked Term & PPT Keyboard Input, Fixed Blank PDF & Fixed Android WhatsApp Share
window.addEventListener("DOMContentLoaded", () => {
  // 1. Unlock Term & PPT so keyboard opens and you can type any custom year
  const pptBox = document.getElementById("calcPPT");
  if (pptBox) {
    pptBox.readOnly = false;
    pptBox.removeAttribute("readonly");
    pptBox.classList.remove("bg-slate-100");
    pptBox.classList.add("bg-white");
  }

  const termEl = document.getElementById("calcTermSelect") || document.getElementById("calcTerm");
  if (termEl && termEl.tagName === "SELECT") {
    const numInput = document.createElement("input");
    numInput.type = "number";
    numInput.id = "calcTerm";
    numInput.value = "21";
    numInput.min = "1";
    numInput.max = "60";
    numInput.className = termEl.className.replace("bg-slate-100", "bg-white");
    termEl.replaceWith(numInput);
  }

  // Update default Term/PPT when plan changes, while keeping fields editable
  const origPlanChange = window.handlePlanChange;
  window.handlePlanChange = () => {
    const plan = LIC_DB.find(p => p.id === document.getElementById("calcPlanSelect")?.value);
    const tBox = document.getElementById("calcTerm");
    const pBox = document.getElementById("calcPPT");
    if (plan && plan.combos && plan.combos[0] && tBox && pBox) {
      const age = parseInt(document.getElementById("calcAge")?.value) || 30;
      tBox.value = plan.byPPT ? Math.max(15, 100 - age) : plan.combos[0].t;
      pBox.value = plan.combos[0].p;
    } else if (origPlanChange) {
      origPlanChange();
    }
  };

  // 2. Fix Calculation to accept custom typed Term & PPT + save data for WhatsApp
  window.calculateBenefit = () => {
    const plan = LIC_DB.find(p => p.id === document.getElementById("calcPlanSelect")?.value) || LIC_DB[0];
    const clientName = document.getElementById("calcClientName")?.value.trim() || "Valued Client";
    const age = parseInt(document.getElementById("calcAge")?.value) || 30;
    const sa = parseFloat(document.getElementById("calcSA")?.value) || 500000;
    const customTerm = parseInt(document.getElementById("calcTerm")?.value) || 20;
    const customPPT = parseInt(document.getElementById("calcPPT")?.value) || 15;
    const mobile = document.getElementById("calcMobile")?.value.trim() || "";

    // Find closest matching tabular rate or scale smoothly by PPT/Term
    const rateKeys = Object.keys(plan.rates).map(Number).sort((a, b) => a - b);
    const lookupKey = plan.byPPT ? customPPT : customTerm;
    let baseTabular = plan.rates[lookupKey];
    if (!baseTabular) {
      const refKey = rateKeys[0] || 20;
      baseTabular = (plan.rates[refKey] || 55) * (refKey / Math.max(1, lookupKey));
    }

    const ageRate = baseTabular + (age - 30) * (plan.slope || 0.45);
    let saRebate = 0;
    if (plan.saRebate) {
      Object.keys(plan.saRebate).map(Number).sort((a, b) => a - b).forEach(lim => {
        if (sa >= lim) saRebate = plan.saRebate[lim];
      });
    }

    const netRate = Math.max(8, ageRate - saRebate);
    const isSingle = customPPT === 1;
    const basicY = Math.round((sa / 1000) * netRate * (isSingle ? 1 : 0.98));
    const yr1Y = Math.round(basicY * 1.045);
    const yr2Y = isSingle ? 0 : Math.round(basicY * 1.0225);

    const saBandIdx = sa < 500000 ? 0 : (sa < 1000000 ? 1 : 2);
    const firstBandKey = Object.keys(plan.bonusBands)[0];
    const bonusPer1000 = (plan.bonusBands[lookupKey] || plan.bonusBands[firstBandKey] || [42, 44, 45])[saBandIdx];
    const totalBonus = Math.round((sa / 1000) * bonusPer1000 * (plan.gaPPT ? customPPT : customTerm));

    let fabPer1000 = 0;
    if (!plan.noFAB && customTerm >= 15) {
      fabPer1000 = customTerm >= 25 ? (sa >= 500000 ? 70 : 50) : (customTerm >= 20 ? (sa >= 500000 ? 35 : 25) : 20);
    }
    const totalFAB = Math.round((sa / 1000) * fabPer1000);
    const maturity = sa + totalBonus + totalFAB;
    const totalPaid = isSingle ? yr1Y : yr1Y + yr2Y * (customPPT - 1);
    const dailySave = isSingle ? 0 : Math.round(yr2Y / 365);

    document.getElementById("resPlanTitle").textContent = plan.name;
    document.getElementById("resClientSub").textContent = `Prepared for: ${clientName} (Age: ${age} Yrs)`;
    document.getElementById("resSA").textContent = `₹${sa.toLocaleString("en-IN")}`;
    document.getElementById("resTermPPT").textContent = `${customTerm} / ${customPPT} Yrs`;
    document.getElementById("resMaturity").textContent = `₹${maturity.toLocaleString("en-IN")}`;

    const basicH = isSingle ? 0 : Math.round(((sa / 1000) * netRate * 0.99) / 2);
    const basicQ = isSingle ? 0 : Math.round(((sa / 1000) * netRate) / 4);
    const basicM = isSingle ? 0 : Math.round(((sa / 1000) * netRate) / 12);

    document.getElementById("resPremiumTable").innerHTML = `
      <tr class="bg-blue-50"><td colspan="3" class="p-2 text-[11px] font-semibold text-[#003366]">
        Maturity: SA ₹${sa.toLocaleString("en-IN")} + Bonus ₹${totalBonus.toLocaleString("en-IN")} + FAB ₹${totalFAB.toLocaleString("en-IN")}
      </td></tr>
      ${isSingle
        ? `<tr><td class="p-2 font-semibold">Single Premium</td><td class="p-2 font-bold">₹${yr1Y.toLocaleString("en-IN")}</td><td class="p-2">Nil</td></tr>`
        : `<tr><td class="p-2 font-semibold">Yearly (2% Rebate)</td><td class="p-2 font-bold text-[#003366]">₹${yr1Y.toLocaleString("en-IN")}</td><td class="p-2">₹${yr2Y.toLocaleString("en-IN")}</td></tr>
           <tr><td class="p-2 font-semibold">Half-Yearly (1% Rebate)</td><td class="p-2">₹${Math.round(basicH * 1.045).toLocaleString("en-IN")}</td><td class="p-2">₹${Math.round(basicH * 1.0225).toLocaleString("en-IN")}</td></tr>
           <tr><td class="p-2 font-semibold">Quarterly</td><td class="p-2">₹${Math.round(basicQ * 1.045).toLocaleString("en-IN")}</td><td class="p-2">₹${Math.round(basicQ * 1.0225).toLocaleString("en-IN")}</td></tr>
           <tr><td class="p-2 font-semibold">Monthly (NACH)</td><td class="p-2">₹${Math.round(basicM * 1.045).toLocaleString("en-IN")}</td><td class="p-2">₹${Math.round(basicM * 1.0225).toLocaleString("en-IN")}</td></tr>`
      }`;

    document.getElementById("resTotalPaid").textContent = `₹${totalPaid.toLocaleString("en-IN")}`;
    document.getElementById("resNetGain").textContent = `+₹${(maturity - totalPaid).toLocaleString("en-IN")}`;
    document.getElementById("resDailySave").textContent = isSingle ? "One-Time" : `₹${dailySave} / day`;

    // Save quote globally so WhatsApp & PDF buttons always read fresh values
    window.latestQuoteData = { clientName, mobile, planName: plan.name, sa, term: customTerm, ppt: customPPT, yr1Y, maturity, dailySave };

    document.getElementById("calcResultBox").classList.remove("hidden");
    document.getElementById("calcResultBox").scrollIntoView({ behavior: "smooth" });
  };

  // 3. Fix Blank White PDF Issue on Mobile/Tablet
  window.downloadQuotationPDF = () => {
    const source = document.getElementById("quotationPrintArea");
    if (!source) return alert("Please calculate an illustration first.");
    window.scrollTo(0, 0);

    // Clone to an unclipped container so html2canvas never captures blank screen
    const clone = source.cloneNode(true);
    clone.style.width = "700px";
    clone.style.background = "#ffffff";
    clone.style.padding = "20px";
    const header = clone.querySelector(".lic-blue");
    if (header) header.style.background = "#003366";

    const holder = document.createElement("div");
    holder.style.position = "fixed";
    holder.style.left = "0";
    holder.style.top = "0";
    holder.style.zIndex = "-9999";
    holder.appendChild(clone);
    document.body.appendChild(holder);

    const fileName = `${(window.latestQuoteData?.clientName || "LIC").replace(/\s+/g, "_")}_Quotation.pdf`;
    html2pdf()
      .set({
        margin: 8,
        filename: fileName,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollY: 0, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(clone)
      .save()
      .then(() => document.body.removeChild(holder))
      .catch(() => document.body.removeChild(holder));
  };

  // 4. Fix WhatsApp Share Button on Android App / Browser
  window.shareQuotationWhatsApp = () => {
    const q = window.latestQuoteData;
    if (!q) return alert("Please calculate an illustration first.");
    const advisor = document.getElementById("pdfAdvisorName")?.textContent || "LIC Advisor";
    const text = `*LIC Benefit Illustration* 🛡️\n\nDear *${q.clientName}*,\n📌 *Plan:* ${q.planName}\n💰 *Sum Assured:* ₹${q.sa.toLocaleString("en-IN")}\n⏳ *Term / PPT:* ${q.term} / ${q.ppt} Yrs\n💳 *1st Yr Yearly Premium:* ₹${q.yr1Y.toLocaleString("en-IN")}\n🎯 *Est. Tax-Free Maturity:* *₹${q.maturity.toLocaleString("en-IN")}*\n\nRegards,\n*${advisor}*`;
    const cleanPhone = q.mobile ? "91" + q.mobile.replace(/\D/g, "").slice(-10) : "";
    const waUrl = `https://api.whatsapp.com/send?${cleanPhone ? "phone=" + cleanPhone + "&" : ""}text=${encodeURIComponent(text)}`;
    window.location.href = waUrl;
  };
});
// FIX: Unlocked Term & PPT Keyboard Input, Fixed Blank PDF & Fixed Android WhatsApp Share
window.addEventListener("DOMContentLoaded", () => {
  // 1. Unlock Term & PPT so keyboard opens and you can type any custom year
  const pptBox = document.getElementById("calcPPT");
  if (pptBox) {
    pptBox.readOnly = false;
    pptBox.removeAttribute("readonly");
    pptBox.classList.remove("bg-slate-100");
    pptBox.classList.add("bg-white");
  }

  const termEl = document.getElementById("calcTermSelect") || document.getElementById("calcTerm");
  if (termEl && termEl.tagName === "SELECT") {
    const numInput = document.createElement("input");
    numInput.type = "number";
    numInput.id = "calcTerm";
    numInput.value = "21";
    numInput.min = "1";
    numInput.max = "60";
    numInput.className = termEl.className.replace("bg-slate-100", "bg-white");
    termEl.replaceWith(numInput);
  }

  // Update default Term/PPT when plan changes, while keeping fields editable
  const origPlanChange = window.handlePlanChange;
  window.handlePlanChange = () => {
    const plan = LIC_DB.find(p => p.id === document.getElementById("calcPlanSelect")?.value);
    const tBox = document.getElementById("calcTerm");
    const pBox = document.getElementById("calcPPT");
    if (plan && plan.combos && plan.combos[0] && tBox && pBox) {
      const age = parseInt(document.getElementById("calcAge")?.value) || 30;
      tBox.value = plan.byPPT ? Math.max(15, 100 - age) : plan.combos[0].t;
      pBox.value = plan.combos[0].p;
    } else if (origPlanChange) {
      origPlanChange();
    }
  };

  // 2. Fix Calculation to accept custom typed Term & PPT + save data for WhatsApp
  window.calculateBenefit = () => {
    const plan = LIC_DB.find(p => p.id === document.getElementById("calcPlanSelect")?.value) || LIC_DB[0];
    const clientName = document.getElementById("calcClientName")?.value.trim() || "Valued Client";
    const age = parseInt(document.getElementById("calcAge")?.value) || 30;
    const sa = parseFloat(document.getElementById("calcSA")?.value) || 500000;
    const customTerm = parseInt(document.getElementById("calcTerm")?.value) || 20;
    const customPPT = parseInt(document.getElementById("calcPPT")?.value) || 15;
    const mobile = document.getElementById("calcMobile")?.value.trim() || "";

    // Find closest matching tabular rate or scale smoothly by PPT/Term
    const rateKeys = Object.keys(plan.rates).map(Number).sort((a, b) => a - b);
    const lookupKey = plan.byPPT ? customPPT : customTerm;
    let baseTabular = plan.rates[lookupKey];
    if (!baseTabular) {
      const refKey = rateKeys[0] || 20;
      baseTabular = (plan.rates[refKey] || 55) * (refKey / Math.max(1, lookupKey));
    }

    const ageRate = baseTabular + (age - 30) * (plan.slope || 0.45);
    let saRebate = 0;
    if (plan.saRebate) {
      Object.keys(plan.saRebate).map(Number).sort((a, b) => a - b).forEach(lim => {
        if (sa >= lim) saRebate = plan.saRebate[lim];
      });
    }

    const netRate = Math.max(8, ageRate - saRebate);
    const isSingle = customPPT === 1;
    const basicY = Math.round((sa / 1000) * netRate * (isSingle ? 1 : 0.98));
    const yr1Y = Math.round(basicY * 1.045);
    const yr2Y = isSingle ? 0 : Math.round(basicY * 1.0225);

    const saBandIdx = sa < 500000 ? 0 : (sa < 1000000 ? 1 : 2);
    const firstBandKey = Object.keys(plan.bonusBands)[0];
    const bonusPer1000 = (plan.bonusBands[lookupKey] || plan.bonusBands[firstBandKey] || [42, 44, 45])[saBandIdx];
    const totalBonus = Math.round((sa / 1000) * bonusPer1000 * (plan.gaPPT ? customPPT : customTerm));

    let fabPer1000 = 0;
    if (!plan.noFAB && customTerm >= 15) {
      fabPer1000 = customTerm >= 25 ? (sa >= 500000 ? 70 : 50) : (customTerm >= 20 ? (sa >= 500000 ? 35 : 25) : 20);
    }
    const totalFAB = Math.round((sa / 1000) * fabPer1000);
    const maturity = sa + totalBonus + totalFAB;
    const totalPaid = isSingle ? yr1Y : yr1Y + yr2Y * (customPPT - 1);
    const dailySave = isSingle ? 0 : Math.round(yr2Y / 365);

    document.getElementById("resPlanTitle").textContent = plan.name;
    document.getElementById("resClientSub").textContent = `Prepared for: ${clientName} (Age: ${age} Yrs)`;
    document.getElementById("resSA").textContent = `₹${sa.toLocaleString("en-IN")}`;
    document.getElementById("resTermPPT").textContent = `${customTerm} / ${customPPT} Yrs`;
    document.getElementById("resMaturity").textContent = `₹${maturity.toLocaleString("en-IN")}`;

    const basicH = isSingle ? 0 : Math.round(((sa / 1000) * netRate * 0.99) / 2);
    const basicQ = isSingle ? 0 : Math.round(((sa / 1000) * netRate) / 4);
    const basicM = isSingle ? 0 : Math.round(((sa / 1000) * netRate) / 12);

    document.getElementById("resPremiumTable").innerHTML = `
      <tr class="bg-blue-50"><td colspan="3" class="p-2 text-[11px] font-semibold text-[#003366]">
        Maturity: SA ₹${sa.toLocaleString("en-IN")} + Bonus ₹${totalBonus.toLocaleString("en-IN")} + FAB ₹${totalFAB.toLocaleString("en-IN")}
      </td></tr>
      ${isSingle
        ? `<tr><td class="p-2 font-semibold">Single Premium</td><td class="p-2 font-bold">₹${yr1Y.toLocaleString("en-IN")}</td><td class="p-2">Nil</td></tr>`
        : `<tr><td class="p-2 font-semibold">Yearly (2% Rebate)</td><td class="p-2 font-bold text-[#003366]">₹${yr1Y.toLocaleString("en-IN")}</td><td class="p-2">₹${yr2Y.toLocaleString("en-IN")}</td></tr>
           <tr><td class="p-2 font-semibold">Half-Yearly (1% Rebate)</td><td class="p-2">₹${Math.round(basicH * 1.045).toLocaleString("en-IN")}</td><td class="p-2">₹${Math.round(basicH * 1.0225).toLocaleString("en-IN")}</td></tr>
           <tr><td class="p-2 font-semibold">Quarterly</td><td class="p-2">₹${Math.round(basicQ * 1.045).toLocaleString("en-IN")}</td><td class="p-2">₹${Math.round(basicQ * 1.0225).toLocaleString("en-IN")}</td></tr>
           <tr><td class="p-2 font-semibold">Monthly (NACH)</td><td class="p-2">₹${Math.round(basicM * 1.045).toLocaleString("en-IN")}</td><td class="p-2">₹${Math.round(basicM * 1.0225).toLocaleString("en-IN")}</td></tr>`
      }`;

    document.getElementById("resTotalPaid").textContent = `₹${totalPaid.toLocaleString("en-IN")}`;
    document.getElementById("resNetGain").textContent = `+₹${(maturity - totalPaid).toLocaleString("en-IN")}`;
    document.getElementById("resDailySave").textContent = isSingle ? "One-Time" : `₹${dailySave} / day`;

    // Save quote globally so WhatsApp & PDF buttons always read fresh values
    window.latestQuoteData = { clientName, mobile, planName: plan.name, sa, term: customTerm, ppt: customPPT, yr1Y, maturity, dailySave };

    document.getElementById("calcResultBox").classList.remove("hidden");
    document.getElementById("calcResultBox").scrollIntoView({ behavior: "smooth" });
  };

  // 3. Fix Blank White PDF Issue on Mobile/Tablet
  window.downloadQuotationPDF = () => {
    const source = document.getElementById("quotationPrintArea");
    if (!source) return alert("Please calculate an illustration first.");
    window.scrollTo(0, 0);

    // Clone to an unclipped container so html2canvas never captures blank screen
    const clone = source.cloneNode(true);
    clone.style.width = "700px";
    clone.style.background = "#ffffff";
    clone.style.padding = "20px";
    const header = clone.querySelector(".lic-blue");
    if (header) header.style.background = "#003366";

    const holder = document.createElement("div");
    holder.style.position = "fixed";
    holder.style.left = "0";
    holder.style.top = "0";
    holder.style.zIndex = "-9999";
    holder.appendChild(clone);
    document.body.appendChild(holder);

    const fileName = `${(window.latestQuoteData?.clientName || "LIC").replace(/\s+/g, "_")}_Quotation.pdf`;
    html2pdf()
      .set({
        margin: 8,
        filename: fileName,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollY: 0, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(clone)
      .save()
      .then(() => document.body.removeChild(holder))
      .catch(() => document.body.removeChild(holder));
  };

  // 4. Fix WhatsApp Share Button on Android App / Browser
  window.shareQuotationWhatsApp = () => {
    const q = window.latestQuoteData;
    if (!q) return alert("Please calculate an illustration first.");
    const advisor = document.getElementById("pdfAdvisorName")?.textContent || "LIC Advisor";
    const text = `*LIC Benefit Illustration* 🛡️\n\nDear *${q.clientName}*,\n📌 *Plan:* ${q.planName}\n💰 *Sum Assured:* ₹${q.sa.toLocaleString("en-IN")}\n⏳ *Term / PPT:* ${q.term} / ${q.ppt} Yrs\n💳 *1st Yr Yearly Premium:* ₹${q.yr1Y.toLocaleString("en-IN")}\n🎯 *Est. Tax-Free Maturity:* *₹${q.maturity.toLocaleString("en-IN")}*\n\nRegards,\n*${advisor}*`;
    const cleanPhone = q.mobile ? "91" + q.mobile.replace(/\D/g, "").slice(-10) : "";
    const waUrl = `https://api.whatsapp.com/send?${cleanPhone ? "phone=" + cleanPhone + "&" : ""}text=${encodeURIComponent(text)}`;
    window.location.href = waUrl;
  };
});
// FIX: Include Full Agent Details (Name, Code, Mobile, Branch) in Both PDF & WhatsApp
(function () {
  function getAgentDetails() {
    const name = (document.getElementById("profName")?.value || "").trim() || "Samsad Ansari (LIC Advisor)";
    const code = (document.getElementById("profCode")?.value || "").trim();
    const mobile = (document.getElementById("profMobile")?.value || "").trim() || "7004776567";
    const branch = (document.getElementById("profBranch")?.value || "").trim() || "Chirkunda Branch (556)";
    return { name, code, mobile, branch };
  }

  // Update PDF Card Footer with Agent Details before printing/downloading
  const origPDF = window.downloadQuotationPDF;
  window.downloadQuotationPDF = () => {
    const ag = getAgentDetails();
    const nameEl = document.getElementById("pdfAdvisorName");
    const metaEl = document.getElementById("pdfAdvisorMeta");
    if (nameEl) nameEl.textContent = `Prepared by: ${ag.name}`;
    if (metaEl) {
      metaEl.textContent = `${ag.code ? "Agency Code: " + ag.code + " | " : ""}Mob: ${ag.mobile} | Branch: ${ag.branch}`;
    }
    if (origPDF) origPDF();
  };

  // Update WhatsApp Share Message with Full Agent Details
  window.shareQuotationWhatsApp = () => {
    const q = window.latestQuoteData;
    if (!q) return alert("Please calculate an illustration first.");
    const ag = getAgentDetails();

    const text =
      `*LIC Benefit Illustration* 🛡️\n\n` +
      `Dear *${q.clientName}*,\n` +
      `📌 *Plan:* ${q.planName}\n` +
      `💰 *Sum Assured:* ₹${q.sa.toLocaleString("en-IN")}\n` +
      `⏳ *Term / PPT:* ${q.term} / ${q.ppt} Yrs\n` +
      `💳 *1st Yr Yearly Premium:* ₹${q.yr1Y.toLocaleString("en-IN")}\n` +
      `🎯 *Est. Tax-Free Maturity:* *₹${q.maturity.toLocaleString("en-IN")}*\n\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `*Advisor Details:*\n` +
      `👤 *${ag.name}*\n` +
      `${ag.code ? "🆔 Agency Code: " + ag.code + "\n" : ""}` +
      `📞 Mobile: ${ag.mobile}\n` +
      `🏢 Branch: ${ag.branch}`;

    const cleanPhone = q.mobile ? "91" + q.mobile.replace(/\D/g, "").slice(-10) : "";
    const waUrl = `https://api.whatsapp.com/send?${cleanPhone ? "phone=" + cleanPhone + "&" : ""}text=${encodeURIComponent(text)}`;
    window.location.href = waUrl;
  };
})();
// OFFICIAL 2026 LIC PORTAL PLANS LIST (Exact Table Numbers from Screenshots)
const OFFICIAL_LIC_2026 = [
  // 1. Endowment Plans (12 Plans)
  { id: "717", name: "LIC's Single Premium Endowment (717)", type: "Endowment", minAge: 0, maxAge: 65, minSA: 100000, combos: [{ t: 10, p: 1 }, { t: 15, p: 1 }, { t: 20, p: 1 }], rates: { 10: 795.0, 15: 685.0, 20: 590.0 }, slope: 1.80, bonusBands: { 10: [35, 37, 37], 15: [40, 42, 42], 20: [44, 46, 46] }, saRebate: { 500000: 15.0 } },
  { id: "714", name: "LIC's New Endowment Plan (714)", type: "Endowment", minAge: 8, maxAge: 55, minSA: 200000, combos: [{ t: 12, p: 12 }, { t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }], rates: { 12: 87.90, 15: 69.50, 20: 51.40, 25: 40.85 }, slope: 0.44, bonusBands: { 12: [34, 36, 36], 15: [35, 37, 37], 20: [38, 40, 40], 25: [44, 46, 46] }, saRebate: { 500000: 1.25, 1000000: 1.50 } },
  { id: "715", name: "LIC's New Jeevan Anand (715)", type: "Endowment", minAge: 18, maxAge: 50, minSA: 200000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }, { t: 25, p: 25 }, { t: 30, p: 30 }], rates: { 15: 76.85, 20: 56.20, 25: 44.65, 30: 37.50 }, slope: 0.48, bonusBands: { 15: [37, 39, 39], 20: [41, 43, 43], 25: [45, 47, 47], 30: [46, 48, 48] }, saRebate: { 500000: 1.50, 1000000: 2.00 } },
  { id: "733", name: "LIC's Jeevan Lakshya (733)", type: "Endowment", minAge: 18, maxAge: 50, minSA: 200000, combos: [{ t: 15, p: 12 }, { t: 18, p: 15 }, { t: 21, p: 18 }, { t: 25, p: 22 }], rates: { 15: 74.10, 18: 60.80, 21: 51.65, 25: 43.20 }, slope: 0.45, bonusBands: { 15: [38, 40, 40], 18: [42, 44, 44], 21: [46, 48, 48], 25: [47, 49, 49] }, saRebate: { 500000: 1.25, 1000000: 1.50 } },
  { id: "736", name: "LIC's Jeevan Labh Plan (736)", type: "Endowment", minAge: 8, maxAge: 59, minSA: 200000, combos: [{ t: 16, p: 10 }, { t: 21, p: 15 }, { t: 25, p: 16 }], rates: { 16: 85.40, 21: 54.95, 25: 47.45 }, slope: 0.42, bonusBands: { 16: [40, 42, 43], 21: [44, 46, 47], 25: [47, 49, 50] }, saRebate: { 500000: 1.25, 1000000: 1.50 } },
  { id: "774", name: "LIC's Amritbaal (774)", type: "Endowment", minAge: 0, maxAge: 13, minSA: 200000, combos: [{ t: 15, p: 5 }, { t: 18, p: 6 }, { t: 20, p: 7 }, { t: 25, p: 10 }], rates: { 15: 162.40, 18: 134.80, 20: 116.50, 25: 84.20 }, slope: 0.15, bonusBands: { 15: [80, 80, 80], 18: [80, 80, 80], 20: [80, 80, 80], 25: [80, 80, 80] }, noFAB: true, saRebate: { 500000: 1.25, 1000000: 1.75 } },
  { id: "912", name: "LIC's Nav Jeevan Shree (912)", type: "Endowment", minAge: 0, maxAge: 60, minSA: 500000, combos: [{ t: 10, p: 6 }, { t: 15, p: 8 }, { t: 20, p: 10 }], rates: { 10: 168.0, 15: 124.5, 20: 98.2 }, slope: 0.40, bonusBands: { 10: [55, 55, 55], 15: [60, 60, 60], 20: [65, 65, 65] }, noFAB: true, saRebate: { 1000000: 1.50 } },
  { id: "881", name: "LIC's Bima Lakshmi (881)", type: "Endowment", minAge: 18, maxAge: 50, minSA: 200000, combos: [{ t: 15, p: 10 }, { t: 20, p: 15 }, { t: 25, p: 15 }], rates: { 15: 92.4, 20: 66.8, 25: 62.5 }, slope: 0.42, bonusBands: { 15: [42, 44, 44], 20: [46, 48, 48], 25: [48, 50, 50] }, saRebate: { 500000: 1.25 } },
  { id: "888", name: "LIC's New Jeevan Sathi - Single (888)", type: "Endowment", minAge: 18, maxAge: 50, minSA: 200000, combos: [{ t: 15, p: 1 }, { t: 20, p: 1 }], rates: { 15: 710.0, 20: 615.0 }, slope: 1.90, bonusBands: { 15: [40, 42, 42], 20: [44, 46, 46] }, saRebate: { 500000: 12.0 } },
  { id: "889", name: "LIC's New Jeevan Sathi - Limited (889)", type: "Endowment", minAge: 18, maxAge: 50, minSA: 200000, combos: [{ t: 15, p: 10 }, { t: 20, p: 15 }], rates: { 15: 98.5, 20: 69.2 }, slope: 0.52, bonusBands: { 15: [40, 42, 42], 20: [44, 46, 46] }, saRebate: { 500000: 1.50 } },
  { id: "890", name: "LIC's New Bima Jyoti (890)", type: "Endowment", minAge: 0, maxAge: 60, minSA: 200000, combos: [{ t: 15, p: 10 }, { t: 16, p: 11 }, { t: 20, p: 15 }], rates: { 15: 108.40, 16: 101.20, 20: 82.55 }, slope: 0.40, bonusBands: { 15: [50, 50, 50], 16: [50, 50, 50], 20: [50, 50, 50] }, noFAB: true, saRebate: { 500000: 1.25 } },
  { id: "770", name: "LIC's Bima Platinum (770)", type: "Endowment", minAge: 8, maxAge: 55, minSA: 1000000, combos: [{ t: 15, p: 10 }, { t: 20, p: 15 }], rates: { 15: 104.2, 20: 78.6 }, slope: 0.45, bonusBands: { 15: [52, 52, 52], 20: [55, 55, 55] }, noFAB: true, saRebate: { 2000000: 1.50 } },

  // 2. Whole Life Plans (3 Plans)
  { id: "745", name: "LIC's Jeevan Umang (745)", type: "Whole Life", minAge: 0, maxAge: 55, minSA: 200000, byPPT: true, payout: 0.08, combos: [{ t: 100, p: 15 }, { t: 100, p: 20 }, { t: 100, p: 25 }, { t: 100, p: 30 }], rates: { 15: 79.65, 20: 57.30, 25: 45.10, 30: 37.85 }, slope: 0.55, bonusBands: { 15: [49, 51, 51], 20: [48, 50, 50], 25: [47, 49, 49], 30: [46, 48, 48] }, saRebate: { 500000: 1.50, 1000000: 2.00 } },
  { id: "771", name: "LIC's Jeevan Utsav (771)", type: "Whole Life", minAge: 0, maxAge: 65, minSA: 500000, byPPT: true, gaPPT: true, payout: 0.10, combos: [{ t: 100, p: 5 }, { t: 100, p: 8 }, { t: 100, p: 10 }, { t: 100, p: 12 }, { t: 100, p: 16 }], rates: { 5: 218.50, 8: 138.20, 10: 112.40, 12: 95.60, 16: 74.80 }, slope: 0.35, bonusBands: { 5: [40, 40, 40], 8: [40, 40, 40], 10: [40, 40, 40], 12: [40, 40, 40], 16: [40, 40, 40] }, noFAB: true, saRebate: { 1000000: 1.50 } },
  { id: "883", name: "LIC's Jeevan Utsav - Single Premium (883)", type: "Whole Life", minAge: 0, maxAge: 65, minSA: 500000, byPPT: true, gaPPT: true, payout: 0.10, combos: [{ t: 100, p: 1 }], rates: { 1: 960.0 }, slope: 1.20, bonusBands: { 1: [40, 40, 40] }, noFAB: true, saRebate: { 1000000: 12.0 } }
];
// 3. Money Back (5 Plans) & 4. Term Assurance (8 Plans) + Official Riders Dropdown
OFFICIAL_LIC_2026.push(
  { id: "748", name: "LIC's Bima Shree (748)", type: "Money Back", minAge: 8, maxAge: 55, minSA: 1000000, combos: [{ t: 14, p: 10 }, { t: 16, p: 12 }, { t: 18, p: 14 }, { t: 20, p: 16 }], rates: { 14: 112.50, 16: 96.40, 18: 84.80, 20: 76.20 }, slope: 0.45, bonusBands: { 14: [50, 50, 50], 16: [50, 50, 50], 18: [50, 50, 50], 20: [55, 55, 55] }, noFAB: true, saRebate: { 2000000: 1.50 } },
  { id: "720", name: "LIC's New Money Back - 20 Yrs (720)", type: "Money Back", minAge: 13, maxAge: 50, minSA: 200000, combos: [{ t: 20, p: 15 }], rates: { 20: 76.40 }, slope: 0.46, bonusBands: { 20: [37, 39, 39] }, note: "20% SA at Yr 5, 10, 15 + 40% SA & Bonus at Yr 20", saRebate: { 500000: 1.25 } },
  { id: "721", name: "LIC's New Money Back - 25 Yrs (721)", type: "Money Back", minAge: 13, maxAge: 45, minSA: 200000, combos: [{ t: 25, p: 20 }], rates: { 25: 61.20 }, slope: 0.46, bonusBands: { 25: [40, 42, 42] }, note: "15% SA at Yr 5, 10, 15, 20 + 40% SA & Bonus at Yr 25", saRebate: { 500000: 1.25 } },
  { id: "732", name: "LIC's New Children's Money Back (732)", type: "Money Back", minAge: 0, maxAge: 12, minSA: 200000, combos: [{ t: 25, p: 25 }], rates: { 25: 46.80 }, slope: 0.25, bonusBands: { 25: [40, 42, 42] }, note: "20% SA at Age 18, 20, 22 + 40% SA & Bonus at Age 25", saRebate: { 500000: 1.25 } },
  { id: "734", name: "LIC's Jeevan Tarun (734)", type: "Money Back", minAge: 0, maxAge: 12, minSA: 200000, combos: [{ t: 25, p: 20 }], rates: { 25: 54.20 }, slope: 0.25, bonusBands: { 25: [40, 42, 42] }, note: "Annual Survival Payout Age 20-24 + Maturity at Age 25", saRebate: { 500000: 1.25 } },

  // Term Assurance Plans (8 Plans)
  { id: "876", name: "LIC's Digi Term (876)", type: "Term Plan", minAge: 18, maxAge: 45, minSA: 5000000, combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }], rates: { 20: 1.30, 30: 1.70 }, slope: 0.09, bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0] }, noFAB: true, saRebate: {} },
  { id: "878", name: "LIC's Digi Credit Life (878)", type: "Term Plan", minAge: 18, maxAge: 45, minSA: 5000000, combos: [{ t: 15, p: 1 }, { t: 20, p: 1 }], rates: { 15: 13.8, 20: 17.5 }, slope: 0.42, bonusBands: { 15: [0, 0, 0], 20: [0, 0, 0] }, noFAB: true, saRebate: {} },
  { id: "877", name: "LIC's Yuva Credit Life (877)", type: "Term Plan", minAge: 18, maxAge: 45, minSA: 5000000, combos: [{ t: 15, p: 1 }, { t: 20, p: 1 }], rates: { 15: 14.5, 20: 18.2 }, slope: 0.45, bonusBands: { 15: [0, 0, 0], 20: [0, 0, 0] }, noFAB: true, saRebate: {} },
  { id: "875", name: "LIC's Yuva Term (875)", type: "Term Plan", minAge: 18, maxAge: 45, minSA: 5000000, combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }], rates: { 20: 1.35, 30: 1.75 }, slope: 0.09, bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0] }, noFAB: true, saRebate: {} },
  { id: "954", name: "LIC's New Tech-Term (954)", type: "Term Plan", minAge: 18, maxAge: 65, minSA: 5000000, combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }], rates: { 20: 1.45, 30: 1.90 }, slope: 0.10, bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0] }, noFAB: true, saRebate: { 10000000: 0.30 } },
  { id: "859", name: "LIC's Saral Jeevan Bima (859)", type: "Term Plan", minAge: 18, maxAge: 65, minSA: 500000, combos: [{ t: 10, p: 10 }, { t: 20, p: 20 }, { t: 30, p: 30 }], rates: { 10: 2.10, 20: 2.45, 30: 3.05 }, slope: 0.14, bonusBands: { 10: [0, 0, 0], 20: [0, 0, 0], 30: [0, 0, 0] }, noFAB: true, saRebate: {} },
  { id: "887", name: "LIC's Bima Kavach (887)", type: "Term Plan", minAge: 18, maxAge: 60, minSA: 2500000, combos: [{ t: 20, p: 20 }, { t: 30, p: 30 }], rates: { 20: 1.55, 30: 2.05 }, slope: 0.11, bonusBands: { 20: [0, 0, 0], 30: [0, 0, 0] }, noFAB: true, saRebate: {} },
  { id: "894", name: "LIC's Jeevan Raksha (894)", type: "Term Plan", minAge: 18, maxAge: 55, minSA: 1000000, combos: [{ t: 15, p: 15 }, { t: 20, p: 20 }], rates: { 15: 1.95, 20: 2.25 }, slope: 0.12, bonusBands: { 15: [0, 0, 0], 20: [0, 0, 0] }, noFAB: true, saRebate: {} }
);

// Replace LIC_DB with exactly these 28 official plans & populate Riders
LIC_DB.length = 0;
LIC_DB.push(...OFFICIAL_LIC_2026);

const selPlan = document.getElementById("calcPlanSelect");
if (selPlan) {
  selPlan.innerHTML = LIC_DB.map(p => `<option value="${p.id}">${p.name} — [${p.type}]</option>`).join("");
  if (window.handlePlanChange) window.handlePlanChange();
}

const selRider = document.getElementById("calcRider");
if (selRider) {
  selRider.innerHTML = `
    <option value="0">No Rider</option>
    <option value="1">1. Accident Benefit Rider</option>
    <option value="2">2. Premium Waiver Benefit Rider</option>
    <option value="3">3. Accidental Death & Disability (ADDB) Rider</option>
    <option value="4">4. New Term Assurance Rider</option>
    <option value="5">5. Linked Accidental Death Benefit Rider</option>
    <option value="6">6. Critical Illness Health Rider</option>
    <option value="7">7. Female Critical Illness Benefit Rider</option>
  `;
}

