const LIC_MASTER_PLANS = [
  { id: "936", name: "Jeevan Labh (Table 936)", category: "Limited Pay", minAge: 8, maxAge: 59, minSA: 200000, combos: [{ term: 16, ppt: 10 }, { term: 21, ppt: 15 }, { term: 25, ppt: 16 }], rates: { 16: 85.40, 21: 54.95, 25: 47.45 }, ageSlope: 0.42, bonusRate: 47, fab: 20, saRebate: { 500000: 1.25, 1000000: 1.50 } },
  { id: "945", name: "Jeevan Umang (Table 945)", category: "Whole Life 8%", minAge: 0, maxAge: 55, minSA: 200000, keyByPPT: true, combos: [{ term: 100, ppt: 15 }, { term: 100, ppt: 20 }, { term: 100, ppt: 25 }, { term: 100, ppt: 30 }], rates: { 15: 79.65, 20: 57.30, 25: 45.10, 30: 37.85 }, ageSlope: 0.55, bonusRate: 48, fab: 25, survivalRate: 0.08, saRebate: { 500000: 1.50, 1000000: 2.00 } },
  { id: "871", name: "Jeevan Utsav (Table 871)", category: "Whole Life 10%", minAge: 0, maxAge: 65, minSA: 500000, keyByPPT: true, gaOnlyPPT: true, combos: [{ term: 100, ppt: 5 }, { term: 100, ppt: 8 }, { term: 100, ppt: 10 }, { term: 100, ppt: 12 }], rates: { 5: 218.50, 8: 138.20, 10: 112.40, 12: 95.60 }, ageSlope: 0.35, bonusRate: 40, fab: 0, survivalRate: 0.10, saRebate: { 1000000: 1.50 } },
  { id: "874", name: "Amritbaal (Table 874)", category: "Child Plan", minAge: 0, maxAge: 13, minSA: 200000, combos: [{ term: 15, ppt: 5 }, { term: 18, ppt: 6 }, { term: 20, ppt: 7 }, { term: 25, ppt: 10 }], rates: { 15: 162.40, 18: 134.80, 20: 116.50, 25: 84.20 }, ageSlope: 0.15, bonusRate: 80, fab: 0, saRebate: { 500000: 1.25 } },
  { id: "915", name: "New Jeevan Anand (Table 915)", category: "Endowment+Life", minAge: 18, maxAge: 50, minSA: 100000, combos: [{ term: 15, ppt: 15 }, { term: 20, ppt: 20 }, { term: 25, ppt: 25 }, { term: 30, ppt: 30 }], rates: { 15: 76.85, 20: 56.20, 25: 44.65, 30: 37.50 }, ageSlope: 0.48, bonusRate: 45, fab: 20, saRebate: { 500000: 1.50 } },
  { id: "933", name: "Jeevan Lakshya (Table 933)", category: "Kanyadan/Income", minAge: 18, maxAge: 50, minSA: 100000, combos: [{ term: 15, ppt: 12 }, { term: 18, ppt: 15 }, { term: 21, ppt: 18 }, { term: 25, ppt: 22 }], rates: { 15: 74.10, 18: 60.80, 21: 51.65, 25: 43.20 }, ageSlope: 0.45, bonusRate: 46, fab: 20, saRebate: { 500000: 1.25 } },
  { id: "914", name: "New Endowment (Table 914)", category: "Regular", minAge: 8, maxAge: 55, minSA: 100000, combos: [{ term: 12, ppt: 12 }, { term: 15, ppt: 15 }, { term: 20, ppt: 20 }, { term: 25, ppt: 25 }], rates: { 12: 87.90, 15: 69.50, 20: 51.40, 25: 40.85 }, ageSlope: 0.44, bonusRate: 42, fab: 15, saRebate: { 500000: 1.25 } },
  { id: "860", name: "Bima Jyoti (Table 860)", category: "Guaranteed", minAge: 0, maxAge: 60, minSA: 100000, combos: [{ term: 15, ppt: 10 }, { term: 16, ppt: 11 }, { term: 20, ppt: 15 }], rates: { 15: 108.40, 16: 101.20, 20: 82.55 }, ageSlope: 0.40, bonusRate: 50, fab: 0, saRebate: { 500000: 1.25 } },
  { id: "920", name: "20-Yr Money Back (Table 920)", category: "Money Back", minAge: 13, maxAge: 50, minSA: 100000, combos: [{ term: 20, ppt: 15 }], rates: { 20: 76.40 }, ageSlope: 0.46, bonusRate: 40, fab: 15, moneyBackNote: "20% SA at Yr 5, 10, 15 + 40% & Bonus at Yr 20", saRebate: { 500000: 1.25 } },
  { id: "921", name: "25-Yr Money Back (Table 921)", category: "Money Back", minAge: 13, maxAge: 45, minSA: 100000, combos: [{ term: 25, ppt: 20 }], rates: { 25: 61.20 }, ageSlope: 0.46, bonusRate: 42, fab: 15, moneyBackNote: "15% SA at Yr 5, 10, 15, 20 + 40% & Bonus at Yr 25", saRebate: { 500000: 1.25 } },
  { id: "868", name: "Jeevan Azad (Table 868)", category: "Guaranteed", minAge: 0, maxAge: 50, minSA: 200000, combos: [{ term: 15, ppt: 7 }, { term: 18, ppt: 10 }, { term: 20, ppt: 12 }], rates: { 15: 124.50, 18: 92.80, 20: 79.40 }, ageSlope: 0.38, bonusRate: 0, fab: 0, saRebate: { 500000: 1.25 } }
];
window.addEventListener("DOMContentLoaded", () => {
  const planSelect = document.getElementById("calcPlanSelect");
  const termInput = document.getElementById("calcTerm");
  const pptInput = document.getElementById("calcPPT");
  if (!planSelect) return;

  planSelect.innerHTML = LIC_MASTER_PLANS.map(p => `<option value="${p.id}">${p.name} — [${p.category}]</option>`).join("");

  if (termInput && termInput.tagName === "INPUT") {
    const termSelect = document.createElement("select");
    termSelect.id = "calcTermSelect";
    termSelect.className = termInput.className;
    termInput.replaceWith(termSelect);
    termSelect.addEventListener("change", syncCombo);
  }

  function syncCombo() {
    const plan = LIC_MASTER_PLANS.find(p => p.id === planSelect.value);
    const termSel = document.getElementById("calcTermSelect");
    const combo = plan?.combos[parseInt(termSel?.value) || 0] || plan?.combos[0];
    if (pptInput && combo) { pptInput.value = combo.ppt; pptInput.readOnly = true; }
  }

  window.handlePlanChange = () => {
    const plan = LIC_MASTER_PLANS.find(p => p.id === planSelect.value);
    const termSel = document.getElementById("calcTermSelect");
    const age = parseInt(document.getElementById("calcAge")?.value) || 30;
    if (!plan || !termSel) return;
    termSel.innerHTML = plan.combos.map((c, i) => `<option value="${i}">${plan.keyByPPT ? `Whole Life (${Math.max(15, 100 - age)} Yrs | PPT: ${c.ppt})` : `${c.term} Yrs (PPT: ${c.ppt} Yrs)`}</option>`).join("");
    syncCombo();
  };

  document.getElementById("calcAge")?.addEventListener("change", window.handlePlanChange);
  window.handlePlanChange();

  window.calculateBenefit = () => {
    const plan = LIC_MASTER_PLANS.find(p => p.id === planSelect.value);
    const clientName = document.getElementById("calcClientName")?.value.trim() || "Valued Client";
    const age = parseInt(document.getElementById("calcAge")?.value) || 30;
    const sa = parseFloat(document.getElementById("calcSA")?.value) || 500000;
    const combo = plan.combos[parseInt(document.getElementById("calcTermSelect")?.value) || 0] || plan.combos[0];

    if (age < plan.minAge || age > plan.maxAge) return alert(`Allowed entry age: ${plan.minAge} to ${plan.maxAge} years.`);
    if (sa < plan.minSA) return alert(`Minimum Sum Assured: ₹${plan.minSA.toLocaleString("en-IN")}`);

    const term = plan.keyByPPT ? Math.max(15, 100 - age) : combo.term;
    const ppt = combo.ppt;
    const rateKey = plan.keyByPPT ? ppt : combo.term;
    const ageRate = (plan.rates[rateKey] || 55) + (age - 30) * (plan.ageSlope || 0.45);

    let saRebate = 0;
    if (plan.saRebate) Object.keys(plan.saRebate).map(Number).sort((a, b) => a - b).forEach(t => { if (sa >= t) saRebate = plan.saRebate[t]; });
    const netRate = Math.max(10, ageRate - saRebate);

    const basicY = Math.round((sa / 1000) * netRate * 0.98);
    const basicH = Math.round(((sa / 1000) * netRate * 0.99) / 2);
    const basicQ = Math.round(((sa / 1000) * netRate) / 4);
    const basicM = Math.round(((sa / 1000) * netRate) / 12);

    const yr1Y = Math.round(basicY * 1.045), yr2Y = Math.round(basicY * 1.0225);
    const totalBonus = Math.round((sa / 1000) * plan.bonusRate * (plan.gaOnlyPPT ? ppt : term));
    const finalBonus = Math.round((sa / 1000) * (plan.fab || 0));
    const maturity = sa + totalBonus + finalBonus;
    const totalPaid = yr1Y + yr2Y * (ppt - 1);

    document.getElementById("resPlanTitle").textContent = plan.name;
    document.getElementById("resClientSub").textContent = `Prepared for: ${clientName} (Age: ${age} Yrs)`;
    document.getElementById("resSA").textContent = `₹${sa.toLocaleString("en-IN")}`;
    document.getElementById("resTermPPT").textContent = `${term} / ${ppt} Yrs`;
    document.getElementById("resMaturity").textContent = `₹${maturity.toLocaleString("en-IN")}`;

    let note = `Rebates Applied: 2% Yearly + ₹${saRebate.toFixed(2)}/1000 High SA`;
    if (plan.survivalRate) note += ` | Annual Payout after PPT: ₹${Math.round(sa * plan.survivalRate).toLocaleString("en-IN")}/yr`;
    if (plan.moneyBackNote) note += ` | ${plan.moneyBackNote}`;

    document.getElementById("resPremiumTable").innerHTML = `
      <tr><td colspan="3" class="p-2 bg-amber-50 text-amber-900 text-[11px] font-medium">${note}</td></tr>
      <tr><td class="p-2.5 font-semibold">Yearly (2% Rebate)</td><td class="p-2.5 font-bold text-[#003366]">₹${yr1Y.toLocaleString("en-IN")}</td><td class="p-2.5">₹${yr2Y.toLocaleString("en-IN")}</td></tr>
      <tr><td class="p-2.5 font-semibold">Half-Yearly (1% Rebate)</td><td class="p-2.5">₹${Math.round(basicH * 1.045).toLocaleString("en-IN")}</td><td class="p-2.5">₹${Math.round(basicH * 1.0225).toLocaleString("en-IN")}</td></tr>
      <tr><td class="p-2.5 font-semibold">Quarterly</td><td class="p-2.5">₹${Math.round(basicQ * 1.045).toLocaleString("en-IN")}</td><td class="p-2.5">₹${Math.round(basicQ * 1.0225).toLocaleString("en-IN")}</td></tr>
      <tr><td class="p-2.5 font-semibold">Monthly (NACH)</td><td class="p-2.5">₹${Math.round(basicM * 1.045).toLocaleString("en-IN")}</td><td class="p-2.5">₹${Math.round(basicM * 1.0225).toLocaleString("en-IN")}</td></tr>
    `;

    document.getElementById("resTotalPaid").textContent = `₹${totalPaid.toLocaleString("en-IN")}`;
    document.getElementById("resNetGain").textContent = `+₹${(maturity - totalPaid).toLocaleString("en-IN")}`;
    document.getElementById("resDailySave").textContent = `₹${Math.round(yr2Y / 365)} / day`;
    document.getElementById("calcResultBox").classList.remove("hidden");
  };
});
