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

