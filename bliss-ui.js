// ADD-ON: WhatsApp Due Reminder, Birthday Wishes & Agent Commission Tracker
window.addEventListener("DOMContentLoaded", () => {
  const dashGrid = document.querySelector("#tab-dashboard .grid.grid-cols-3");
  if (dashGrid) {
    dashGrid.insertAdjacentHTML(
      "beforeend",
      `
      <button onclick="openProTool('dueToolModal')" class="p-3 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 active:scale-95 transition">
        <div class="w-10 h-10 mx-auto rounded-xl bg-sky-600 text-white flex items-center justify-center text-lg mb-1.5 shadow"><i class="fab fa-whatsapp"></i></div>
        <p class="text-[11px] font-bold text-slate-800">Due Reminder</p>
      </button>
      <button onclick="openProTool('wishToolModal')" class="p-3 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200 active:scale-95 transition">
        <div class="w-10 h-10 mx-auto rounded-xl bg-pink-600 text-white flex items-center justify-center text-lg mb-1.5 shadow"><i class="fas fa-cake-candles"></i></div>
        <p class="text-[11px] font-bold text-slate-800">B'day Wishes</p>
      </button>
      <button onclick="openCommissionTracker()" class="p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 active:scale-95 transition">
        <div class="w-10 h-10 mx-auto rounded-xl bg-amber-600 text-white flex items-center justify-center text-lg mb-1.5 shadow"><i class="fas fa-coins"></i></div>
        <p class="text-[11px] font-bold text-slate-800">Commission</p>
      </button>
      `
    );
  }

  const toolsModalsHTML = `
    <!-- 1. Instant WhatsApp Due Reminder Modal -->
    <div id="dueToolModal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white w-full max-w-md rounded-2xl p-5 space-y-3 shadow-2xl">
        <div class="flex justify-between items-center border-b pb-2">
          <h3 class="font-bold text-[#003366]"><i class="fab fa-whatsapp text-emerald-600 mr-1"></i> LIC Premium Due Reminder</h3>
          <button onclick="document.getElementById('dueToolModal').classList.add('hidden')" class="text-slate-400">✕</button>
        </div>
        <div class="space-y-2 text-xs">
          <input type="text" id="dueClientName" placeholder="Policyholder Name (e.g. Rajesh Kumar)" class="w-full p-2.5 border rounded-xl" />
          <input type="tel" id="dueClientPhone" placeholder="Mobile Number (10 digits)" class="w-full p-2.5 border rounded-xl" />
          <div class="grid grid-cols-2 gap-2">
            <input type="text" id="duePolNo" placeholder="Policy No." class="w-full p-2.5 border rounded-xl" />
            <input type="number" id="dueAmt" placeholder="Premium Amount (₹)" class="w-full p-2.5 border rounded-xl" />
          </div>
          <input type="date" id="dueDateVal" class="w-full p-2.5 border rounded-xl" />
          <button onclick="sendWhatsAppDueReminder()" class="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm">
            <i class="fab fa-whatsapp mr-1"></i> Send Reminder on WhatsApp
          </button>
        </div>
      </div>
    </div>

    <!-- 2. Birthday / Anniversary Greeting Modal -->
    <div id="wishToolModal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white w-full max-w-md rounded-2xl p-5 space-y-3 shadow-2xl">
        <div class="flex justify-between items-center border-b pb-2">
          <h3 class="font-bold text-[#003366]"><i class="fas fa-gift text-pink-600 mr-1"></i> Greeting Card & Wishes</h3>
          <button onclick="document.getElementById('wishToolModal').classList.add('hidden')" class="text-slate-400">✕</button>
        </div>
        <div class="space-y-2 text-xs">
          <select id="wishOccasion" class="w-full p-2.5 border rounded-xl font-semibold">
            <option value="birthday">🎂 Happy Birthday Greeting</option>
            <option value="anniversary">💐 Happy Wedding Anniversary</option>
            <option value="policy">🛡️ Policy Anniversary / Thank You</option>
          </select>
          <input type="text" id="wishName" placeholder="Client Name" class="w-full p-2.5 border rounded-xl" />
          <input type="tel" id="wishPhone" placeholder="Client Mobile (10 digits)" class="w-full p-2.5 border rounded-xl" />
          <button onclick="sendWhatsAppGreeting()" class="w-full bg-pink-600 text-white font-bold py-3 rounded-xl text-sm">
            <i class="fab fa-whatsapp mr-1"></i> Send Greeting on WhatsApp
          </button>
        </div>
      </div>
    </div>

    <!-- 3. Agent Commission & Income Tracker Modal -->
    <div id="commToolModal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white w-full max-w-md rounded-2xl p-5 space-y-3 shadow-2xl">
        <div class="flex justify-between items-center border-b pb-2">
          <h3 class="font-bold text-[#003366]"><i class="fas fa-coins text-amber-500 mr-1"></i> LIC Commission Estimator</h3>
          <button onclick="document.getElementById('commToolModal').classList.add('hidden')" class="text-slate-400">✕</button>
        </div>
        <div id="commSummaryBody" class="space-y-2 text-xs"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", toolsModalsHTML);
});
window.openProTool = (id) => document.getElementById(id)?.classList.remove("hidden");

function getAdvisorSignature() {
  const name = (document.getElementById("profName")?.value || "").trim() || "Samsad Ansari (LIC Advisor)";
  const code = (document.getElementById("profCode")?.value || "").trim();
  const mob = (document.getElementById("profMobile")?.value || "").trim() || "7004776567";
  const branch = (document.getElementById("profBranch")?.value || "").trim() || "Chirkunda Branch (556)";
  return `\n━━━━━━━━━━━━━━━━━━\n*${name}*\n${code ? "Agency Code: " + code + "\n" : ""}📞 ${mob} | 🏢 ${branch}`;
}

window.sendWhatsAppDueReminder = () => {
  const name = document.getElementById("dueClientName").value.trim() || "Valued Policyholder";
  const phone = document.getElementById("dueClientPhone").value.replace(/\D/g, "").slice(-10);
  const pol = document.getElementById("duePolNo").value.trim() || "N/A";
  const amt = parseFloat(document.getElementById("dueAmt").value) || 0;
  const dt = document.getElementById("dueDateVal").value || "Upcoming";

  const msg =
    `*LIC Premium Due Reminder* 🔔\n\n` +
    `Dear *${name}*,\n` +
    `Your LIC policy premium is due for payment:\n\n` +
    `📄 *Policy No.:* ${pol}\n` +
    `📅 *Due Date:* ${dt}\n` +
    `💰 *Premium Amount:* ₹${amt.toLocaleString("en-IN")}\n\n` +
    `Please pay on time to keep your life cover active and avoid late fees.\n` +
    getAdvisorSignature();

  window.location.href = `https://api.whatsapp.com/send?${phone ? "phone=91" + phone + "&" : ""}text=${encodeURIComponent(msg)}`;
};

window.sendWhatsAppGreeting = () => {
  const type = document.getElementById("wishOccasion").value;
  const name = document.getElementById("wishName").value.trim() || "Dear Friend";
  const phone = document.getElementById("wishPhone").value.replace(/\D/g, "").slice(-10);

  let header = "🎂 *Happy Birthday!* 🎉";
  let body = `Wishing you a year filled with good health, happiness, and prosperity!`;
  if (type === "anniversary") {
    header = "💐 *Happy Wedding Anniversary!* ❤️";
    body = `Wishing you both a lifetime of love, togetherness, and endless happiness!`;
  } else if (type === "policy") {
    header = "🛡️ *Happy Policy Anniversary!* 🙏";
    body = `Thank you for trusting LIC of India for your family's financial protection.`;
  }

  const msg = `${header}\n\nDear *${name}*,\n${body}\n\nWarm Regards,\n${getAdvisorSignature()}`;
  window.location.href = `https://api.whatsapp.com/send?${phone ? "phone=91" + phone + "&" : ""}text=${encodeURIComponent(msg)}`;
};

window.openCommissionTracker = () => {
  const modal = document.getElementById("commToolModal");
  const body = document.getElementById("commSummaryBody");
  if (!modal || !body) return;

  // Read live quote or calculate custom commission
  const samplePrem = window.latestQuoteData?.yr1Y || 50000;
  const fyc35 = Math.round(samplePrem * 0.35); // 25% + 40% Bonus Commission = 35%
  const renewal5 = Math.round(samplePrem * 0.05);

  body.innerHTML = `
    <div class="bg-blue-50 p-3 rounded-xl border border-blue-100 space-y-1">
      <p class="font-bold text-[#003366]">Quick Policy Commission Calculator</p>
      <div class="flex gap-2 mt-1">
        <input type="number" id="commPremInput" value="${samplePrem}" class="w-full p-2 border rounded-lg bg-white font-bold" />
        <button onclick="recalcCommBox()" class="bg-[#003366] text-white px-3 rounded-lg font-bold">Calc</button>
      </div>
    </div>
    <div id="commOutput" class="space-y-2 pt-1">
      <div class="flex justify-between p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
        <span class="font-semibold text-emerald-900">1st Year Income (25% + 40% Bonus):</span>
        <strong class="text-emerald-700 text-sm">₹${fyc35.toLocaleString("en-IN")}</strong>
      </div>
      <div class="flex justify-between p-2.5 bg-amber-50 rounded-xl border border-amber-200">
        <span class="font-semibold text-amber-900">2nd & 3rd Year (7.5%):</span>
        <strong class="text-amber-800 text-sm">₹${Math.round(samplePrem * 0.075).toLocaleString("en-IN")} / yr</strong>
      </div>
      <div class="flex justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200">
        <span class="font-semibold text-slate-700">4th Year Onwards Renewal (5%):</span>
        <strong class="text-slate-900 text-sm">₹${renewal5.toLocaleString("en-IN")} / yr</strong>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
};

window.recalcCommBox = () => {
  const p = parseFloat(document.getElementById("commPremInput")?.value) || 0;
  document.getElementById("commOutput").innerHTML = `
    <div class="flex justify-between p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
      <span class="font-semibold text-emerald-900">1st Year Income (35% Total):</span>
      <strong class="text-emerald-700 text-sm">₹${Math.round(p * 0.35).toLocaleString("en-IN")}</strong>
    </div>
    <div class="flex justify-between p-2.5 bg-amber-50 rounded-xl border border-amber-200">
      <span class="font-semibold text-amber-900">2nd & 3rd Year (7.5%):</span>
      <strong class="text-amber-800 text-sm">₹${Math.round(p * 0.075).toLocaleString("en-IN")} / yr</strong>
    </div>
    <div class="flex justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200">
      <span class="font-semibold text-slate-700">4th Year Onwards Renewal (5%):</span>
      <strong class="text-slate-900 text-sm">₹${Math.round(p * 0.05).toLocaleString("en-IN")} / yr</strong>
    </div>
  `;
};
