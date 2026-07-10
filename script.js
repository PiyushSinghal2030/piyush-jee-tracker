// OPERATIONAL STATE DATA ARRAYS
const PHYSICS_SYLLABUS = {
  "Class 11": [
    "Units and Measurements",
    "Motion in One Dimension",
    "Motion in Two Dimensions",
    "Laws of Motion",
    "Work Energy Power",
    "Center of Mass",
    "Rotational Motion",
    "Gravitation",
    "Mechanical Properties of Solids",
    "Mechanical Properties of Fluids",
    "Thermal Properties",
    "Thermodynamics",
    "Kinetic Theory",
    "Oscillations",
    "Waves",
  ],
  "Class 12": [
    "Electrostatics",
    "Current Electricity",
    "Moving Charges",
    "Magnetism",
    "EMI",
    "AC",
    "EM Waves",
    "Ray Optics",
    "Wave Optics",
    "Dual Nature",
    "Atoms",
    "Nuclei",
    "Semiconductors",
    "Communication",
    "Experimental Skills",
  ],
};

const CHEMISTRY_SYLLABUS = {
  "Class 11": {
    Physical: [
      "Some Basic Concepts",
      "Structure of Atom",
      "Chemical Bonding",
      "Chemical Thermodynamics",
      "Equilibrium",
      "Redox Reactions",
    ],
    Organic: ["Organic Chemistry - Principles & Techniques", "Hydrocarbons"],
    Inorganic: [
      "Classification of Elements",
      "p-Block Elements - Group 13 & 14",
    ],
  },
  "Class 12": {
    Physical: ["Solutions", "Electrochemistry", "Chemical Kinetics"],
    Inorganic: [
      "d and f Block Elements",
      "Coordination Compounds",
      "p-Block Elements - Group 15 to 18",
    ],
    Organic: [
      "Haloalkanes and Haloarenes",
      "Alcohols Phenols and Ethers",
      "Aldehydes Ketones and Carboxylic Acids",
      "Amines",
      "Biomolecules",
      "Polymers",
    ],
  },
};

const MATHS_SYLLABUS = {
  "Class 11": [
    "Sets and Relations",
    "Trigonometric Functions",
    "Complex Numbers",
    "Quadratic Equations",
    "Permutations and Combinations",
    "Binomial Theorem",
    "Sequences and Series",
    "Straight Lines",
    "Conic Sections",
    "Limits and Derivatives",
    "Statistics",
    "Probability",
  ],
  "Class 12": [
    "Relations and Functions",
    "Inverse Trigonometric Functions",
    "Matrices",
    "Determinants",
    "Continuity and Differentiability",
    "Applications of Derivatives",
    "Integrals",
    "Applications of Integrals",
    "Differential Equations",
    "Vector Algebra",
    "Three Dimensional Geometry",
    "Probability Part II",
  ],
};

const FALLBACK_QUOTES = [
  "AIR under 1000 demands ruthless consistency, not occasional brilliance.",
"Every unfinished DPP silently increases the distance between you and IIT.",
"Discipline must become your default setting, not your emergency response.",
"The rank you dream about is built by choices nobody notices.",
"Conceptual clarity eliminates panic under examination pressure.",
"The syllabus rewards execution, not intentions.",
"Every distraction carries an invisible rank penalty.",
"Consistency compounds faster than talent.",
"Your preparation is either moving forward or falling behind.",
"Top ranks are earned long before the examination begins.",
"Comfort today becomes regret on result day.",
"Momentum is the strongest weapon in a drop year.",
"One chapter mastered completely outweighs five studied superficially.",
"Precision creates confidence; confidence creates performance.",
"Your notebook should contain solutions, not excuses.",
"Every revision reduces uncertainty and increases accuracy.",
"Discipline removes the need for motivation.",
"The question paper respects preparation, not emotions.",
"Execution under pressure defines elite performers.",
"The toughest competitor is yesterday's version of yourself.",
"Deep work produces extraordinary ranks.",
"Success favors students who finish what they start.",
"Every solved PYQ strengthens your examination instincts.",
"Consistency transforms average days into exceptional results.",
"Elite preparation begins where excuses end.",
"The gap between dreams and reality is disciplined execution.",
"Every focused hour compounds into rank improvement.",
"The syllabus cannot defeat someone who refuses to quit.",
"Master fundamentals until advanced problems feel familiar.",
"Your future IIT seat depends on today's priorities.",
"Confidence is earned through preparation, never imagined.",
"Top performers measure progress, not promises.",
"The examination rewards accuracy before speed.",
"Intensity without consistency produces temporary results.",
"AIR under 1000 is built through thousands of invisible victories.",
"Ignore comparison; dominate your own preparation.",
"Every revision session is an investment in certainty.",
"Discomfort is the admission fee for extraordinary success.",
"Rank follows process with mathematical certainty.",
"Elite students respect every minute because competition never rests.",
"Your habits determine your percentile long before the examination.",
"Ordinary effort cannot produce extraordinary ranks.",
"Focus is the multiplier of intelligence.",
"The strongest preparation leaves no room for luck.",
"Every test exposes weaknesses before the examination does.",
"Long-term consistency defeats short-term intensity.",
"The next question deserves your complete attention.",
"Excellence begins the moment excuses become unacceptable.",
"AIR under 1000 belongs to those who execute without negotiation.",
"Clinical execution separates aspirants from achievers.",
"AIR under 1000 requires clinical execution, absolute focus, and zero emotional dependencies.",
"The mirror reflects your true opponent. Defeat your past self daily.",
"Pain is temporary. An IIT tag is eternal. Execute your daily operations.",
"When you sleep, your competition is writing another test loop. Wake up.",
"Do not stop when you are exhausted. Stop only when the syllabus module terminates completely.",
"AIR under 1000 is the outcome of thousands of disciplined decisions.",
"Every hour wasted today becomes a mark lost tomorrow.",
"Consistency is the currency of elite preparation.",
"The syllabus never defeats a student who refuses to stop.",
"Every solved problem strengthens your competitive advantage.",
"Precision in practice creates confidence in performance.",
"Your future rank is hidden inside today's discipline.",
"Top performers respect the basics more than shortcuts.",
"The examination rewards preparation, not potential.",
"One focused session outweighs ten distracted hours.",
"Excuses never improve percentile.",
"Elite ranks are built in silence, not in public.",
"Progress begins where comfort ends.",
"Every revision sharpens your examination instincts.",
"Momentum is earned through uninterrupted execution.",
"Discipline survives when motivation disappears.",
"Mastery is the accumulation of small improvements.",
"Every concept ignored returns as a difficult question.",
"The best strategy is flawless execution.",
"Success favors those who finish every chapter completely.",
"Every mock test is a rehearsal for excellence.",
"Perfection is impossible, but precision is achievable.",
"Your notebook should reflect effort, not intention.",
"Focused repetition creates permanent understanding.",
"Accuracy is the language of top ranks.",
"Elite students measure output, not effort.",
"Every completed DPP is a step toward IIT.",
"Pressure exposes preparation, not intelligence.",
"Consistency outperforms bursts of motivation.",
"Every solved PYQ reduces uncertainty.",
"Discipline eliminates unnecessary decisions.",
"The strongest preparation leaves nothing to chance.",
"Your rank depends on today's priorities.",
"Deep understanding defeats superficial memorization.",
"Progress compounds through daily execution.",
"Every chapter deserves complete commitment.",
"The result reflects the process.",
"Elite preparation tolerates no excuses.",
"Focus converts effort into results.",
"Every distraction steals competitive momentum.",
"The best investment is another focused study session.",
"Comfort delays success.",
"Every test reveals an opportunity to improve.",
"Preparation creates psychological confidence.",
"Execution defines champions.",
"Small disciplines produce extraordinary outcomes.",
"Master concepts before chasing speed.",
"Your habits silently determine your future.",
"Success is scheduled, not accidental.",
"The strongest competitor is your previous self.",
"Every mistake analyzed becomes future accuracy.",
"The syllabus rewards persistence over brilliance.",
"One disciplined day is never insignificant.",
"Elite minds eliminate unnecessary distractions.",
"Preparation removes the fear of uncertainty.",
"Your daily routine predicts your final rank.",
"Every difficult problem expands your capability.",
"Confidence grows through repeated execution.",
"The examination values consistency over emotion.",
"Every revision strengthens long-term retention.",
"Results respect preparation.",
"The clock rewards disciplined students equally.",
"Success begins with the next focused hour.",
"Every solved question increases your competitive edge.",
"Great ranks demand ordinary discipline every day.",
"The process deserves complete trust.",
"Elite performers embrace repetition.",
"Nothing replaces deliberate practice.",
"Your competition never pauses.",
"Mastery begins with patience.",
"Discipline transforms ambition into achievement.",
"Every minute invested compounds into progress.",
"Hard questions reward calm minds.",
"Clarity is built through repetition.",
"Elite preparation rejects mediocrity.",
"Your future thanks your present discipline.",
"Every focused hour strengthens resilience.",
"The examination cannot surprise the prepared.",
"Execution creates opportunity.",
"Small improvements accumulate into elite performance.",
"Every chapter mastered increases certainty.",
"Success belongs to consistent executors.",
"Preparation is the foundation of confidence.",
"Discipline protects long-term goals.",
"Momentum is too valuable to waste.",
"Elite preparation is emotionally independent.",
"The strongest habits produce the strongest ranks.",
"Precision is the signature of excellence.",
"Every completed task builds competitive confidence.",
"The journey rewards relentless execution.",
"Great performance begins with ordinary routines.",
"The syllabus yields to disciplined persistence.",
"Top ranks respect no shortcuts.",
"Every revision is another layer of certainty.",
"Elite execution demands unwavering focus.",
"The next question deserves your best attention.",
"Consistency removes the need for luck.",
"Preparation determines possibility.",
"AIR under 1000 is earned through disciplined repetition.",
"Clinical execution transforms ambition into achievement.",
];

// DATA STRUCTURE CONFIG ENGINE
let coreState = {
  syllabus: {}, // Format: { "subject_chapter_item": true/false }
  tasks: [],
  logs: [],
  accent: "neon-blue",
};

// INITIALIZATION LOGIC OVERRIDES
document.addEventListener("DOMContentLoaded", () => {
  initCanvasParticles();
  loadCoreState();
  registerSystemPWAServiceWorker();
  bootstrapSyllabusDOMs();
  runLiveTimerLoops();
  handleQuoteRotator();
  evaluateGlobalProgressMetrics();
  initializeTaskEngineDOM();
  bindInteractionListeners();

  // Trigger GSAP System Intro Boot Sequences
  gsap.to(".loader-bar", {
    width: "100%",
    duration: 2.2,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to("#ai-loader", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document.getElementById("ai-loader").classList.add("hidden");
          const app = document.querySelector(".app-container");
          app.classList.remove("hidden");
          gsap.from(app, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });
    },
  });
});

// SPOTLIGHT MOUSE COORDINATE DISPATCHER
window.addEventListener("mousemove", (e) => {
  const spotlight = document.querySelector(".mouse-spotlight");
  if (spotlight) {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  }
});

// SYSTEM LOCALSTORAGE ENGINE ACCESSORS
function loadCoreState() {
  const stored = localStorage.getItem("IIT_CORE_AI_STATE");
  if (stored) {
    try {
      coreState = JSON.parse(stored);
      if (coreState.accent) setAccent(coreState.accent);
    } catch (e) {
      console.error("Telemetry structural error. State corrupted.");
    }
  }
}

function saveCoreState() {
  localStorage.setItem("IIT_CORE_AI_STATE", JSON.stringify(coreState));
  evaluateGlobalProgressMetrics();
}

function pushSystemTelemetryLog(subject, chapter, action) {
  const logItem = {
    id: "LOG_" + Date.now(),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    subject,
    chapter,
    action,
  };
  coreState.logs.unshift(logItem);
  saveCoreState();
  renderTimelineLogs();
}

// PROGRAMMATIC SYLLABUS INJECTION SYSTEM
function bootstrapSyllabusDOMs() {
  // Physics Rendering Core Loop
  const physContainer = document.getElementById("physics-accordion");
  const physChecklist = [
    "Live Lectures",
    "Short Notes",
    "DPP",
    "JEE Main PYQs",
    "JEE Main Chapter Test",
    "Objective-2",
    "JEE Advanced PYQs",
  ];
  for (let key in PHYSICS_SYLLABUS) {
    PHYSICS_SYLLABUS[key].forEach((ch) => {
      physContainer.appendChild(
        createChapterCard("Physics", key + " - " + ch, physChecklist),
      );
    });
  }

  // Chemistry Rendering Core Loop
  const chemContainer = document.getElementById("chemistry-accordion");
  const chemChecklist = [
    "Live Lectures",
    "Short Notes",
    "DPP",
    "Concept Builder",
    "Solved Examples",
    "Objective-1",
    "JEE Main PYQs",
    "VK Jaiswal (Inorganic)",
    "MS Chauhan (Organic)",
    "JEE Main Test",
    "Objective-2",
    "JEE Advanced PYQs",
  ];
  for (let cls in CHEMISTRY_SYLLABUS) {
    for (let branch in CHEMISTRY_SYLLABUS[cls]) {
      CHEMISTRY_SYLLABUS[cls][branch].forEach((ch) => {
        chemContainer.appendChild(
          createChapterCard(
            "Chemistry",
            `${cls} [${branch}] - ${ch}`,
            chemChecklist,
          ),
        );
      });
    }
  }

  // Maths Rendering Core Loop
  const mathsContainer = document.getElementById("maths-accordion");
  const mathsChecklist = [
    "Live Lectures",
    "Short Notes",
    "DPP Level 1",
    "Concept Builder",
    "Solved Examples",
    "Objective-1",
    "JEE Main PYQs",
    "JEE Main Test",
    "DPP Level 2",
    "JEE Advanced PYQs",
    "Objective-2",
  ];
  for (let key in MATHS_SYLLABUS) {
    MATHS_SYLLABUS[key].forEach((ch) => {
      mathsContainer.appendChild(
        createChapterCard("Mathematics", key + " - " + ch, mathsChecklist),
      );
    });
  }
}

function createChapterCard(subject, chapterName, checklistItems) {
  const card = document.createElement("div");
  card.className = "accordion-item";

  // Evaluate initial item state variables
  let totalItems = checklistItems.length;
  let completedCount = 0;
  let completedBubblesHTML = ""; // पूरे हुए टास्क के बबल्स को स्टोर करने के लिए

  checklistItems.forEach((item) => {
    if (coreState.syllabus[`${subject}_${chapterName}_${item}`]) {
      completedCount++;
      // अगर पहले से टास्क पूरा है, तो उसका 3D रैक्टेंगुलर बबल यहाँ जोड़ें
      completedBubblesHTML += `<span class="status-bubble">${item}</span>`;
    }
  });
  
  let percentage = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  card.innerHTML = `
        <div class="accordion-header" onclick="toggleAccordionElement(this)">
            <div class="header-left-content">
                <h4>${chapterName}</h4>
                <div class="completed-bubbles-container">${completedBubblesHTML}</div>
            </div>
            <div class="header-right-meta">
                <div class="chapter-progress-wrapper"><div class="chapter-progress-fill" style="width: ${percentage}%;"></div></div>
                <span class="chapter-percentage-lbl">${percentage}%</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
        </div>
        <div class="accordion-content">
            <div class="checklist-grid">
                ${checklistItems
                  .map((item) => {
                    let checked = coreState.syllabus[`${subject}_${chapterName}_${item}`] ? "checked" : "";
                    return `
                        <label class="checkbox-container">
                            <input type="checkbox" ${checked} data-subj="${subject}" data-chap="${chapterName}" data-item="${item}" onchange="handleCheckboxToggle(this)">
                            <div class="custom-box"></div>
                            <span>${item}</span>
                        </label>
                    `;
                  })
                  .join("")}
            </div>
        </div>
    `;
  return card;
}

function toggleAccordionElement(headerElement) {
  const content = headerElement.nextElementSibling;
  content.classList.toggle("open");
  const icon = headerElement.querySelector(".fa-chevron-down");
  if (icon)
    icon.style.transform = content.classList.contains("open")
      ? "rotate(180deg)"
      : "rotate(0deg)";
}

function handleCheckboxToggle(checkbox) {
  const { subj, chap, item } = checkbox.dataset;
  const compoundKey = `${subj}_${chap}_${item}`;
  coreState.syllabus[compoundKey] = checkbox.checked;

  pushSystemTelemetryLog(
    subj,
    chap,
    checkbox.checked ? `✔ COMPLETED: ${item}` : `✘ REMOVED: ${item}`,
  );

  const card = checkbox.closest(".accordion-item");
  const boxes = card.querySelectorAll(".checklist-grid input");
  let completed = 0;
  
  // रीयल-टाइम में बाहर बबल्स अपडेट करने का लॉजिक
  const bubblesContainer = card.querySelector(".completed-bubbles-container");
  let newBubblesHTML = "";

  boxes.forEach((b) => {
    if (b.checked) {
      completed++;
      // जो-जो चेकबॉक्स टिक होगा, उसका 3D बबल स्ट्रिंग में जुड़ेगा
      newBubblesHTML += `<span class="status-bubble">${b.dataset.item}</span>`;
    }
  });
  
  // बिना पेज लोड या एकॉर्डियन रीफ्रेश किए तुरंत स्क्रीन पर बबल अपडेट करो
  if (bubblesContainer) {
    bubblesContainer.innerHTML = newBubblesHTML;
  }

  let percentage = Math.round((completed / boxes.length) * 100);
  card.querySelector(".chapter-progress-fill").style.width = `${percentage}%`;
  card.querySelector(".chapter-percentage-lbl").innerText = `${percentage}%`;
}

  // Recalculate local chapter card UI instantly
  const card = checkbox.closest(".accordion-item");
  const boxes = card.querySelectorAll(".checklist-grid input");
  let completed = 0;
  boxes.forEach((b) => {
    if (b.checked) completed++;
  });
  let percentage = Math.round((completed / boxes.length) * 100);
  card.querySelector(".chapter-progress-fill").style.width = `${percentage}%`;
  card.querySelector(".chapter-percentage-lbl").innerText = `${percentage}%`;
}

// COMPREHENSIVE MATHS PERFORMANCE DATA ENGINE METRICS
function evaluateGlobalProgressMetrics() {
  let metrics = {
    Physics: { total: 0, done: 0 },
    Chemistry: { total: 0, done: 0 },
    Mathematics: { total: 0, done: 0 },
  };

  document.querySelectorAll(".checklist-grid input").forEach((input) => {
    let subj = input.dataset.subj;
    if (metrics[subj]) {
      metrics[subj].total++;
      if (input.checked) metrics[subj].done++;
    }
  });

  let globalTotal = 0,
    globalDone = 0;
  for (let s in metrics) {
    let percentage =
      metrics[s].total > 0
        ? Math.round((metrics[s].done / metrics[s].total) * 100)
        : 0;
    updateCircleProgress(`graph-${s.toLowerCase()}`, percentage);
    globalTotal += metrics[s].total;
    globalDone += metrics[s].done;
  }
  let globalPercentage =
    globalTotal > 0 ? Math.round((globalDone / globalTotal) * 100) : 0;
  updateCircleProgress("graph-overall", globalPercentage);
}

function updateCircleProgress(elementId, value) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.setAttribute("data-percent", value);
  container.querySelector(".percentage").innerText = `${value}%`;
  const circle = container.querySelector(".progress-bar-svg");
  let strokeOffset = 314 - (314 * value) / 100;
  circle.style.strokeDashoffset = strokeOffset;
}

// GOOGLE TASKS DRIVEN ENGINE INTEGRATION
function initializeTaskEngineDOM() {
  renderTaskList();

  document
    .getElementById("btn-open-task-modal")
    .addEventListener("click", () => {
      document.getElementById("task-modal").classList.remove("hidden");
    });
  document.getElementById("btn-cancel-task").addEventListener("click", () => {
    document.getElementById("task-modal").classList.add("hidden");
  });
  document.getElementById("btn-save-task").addEventListener("click", () => {
    const title = document.getElementById("modal-task-title").value;
    const priority = document.getElementById("modal-task-priority").value;
    const repeat = document.getElementById("modal-task-repeat").value;
    const date = document.getElementById("modal-task-date").value;
    const time = document.getElementById("modal-task-time").value;

    if (!title || !date || !time)
      return alert("Task initialization parameters incomplete.");

    const newTask = {
      id: "TASK_" + Date.now(),
      title,
      priority,
      repeat,
      date,
      time,
      completed: false,
    };
    coreState.tasks.push(newTask);
    saveCoreState();
    renderTaskList();
    scheduleBrowserNotification(newTask);

    // Reset configuration state inputs
    document.getElementById("modal-task-title").value = "";
    document.getElementById("task-modal").classList.add("hidden");
  });
}

function renderTaskList() {
  const listContainer = document.getElementById("tasks-list");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  let searchVal = document.getElementById("task-search").value.toLowerCase();
  let pFilter = document.getElementById("task-filter-priority").value;
  let sFilter = document.getElementById("task-sort").value;

  let processedTasks = [...coreState.tasks].filter((t) => {
    let matchS = t.title.toLowerCase().includes(searchVal);
    let matchP = pFilter === "ALL" || t.priority === pFilter;
    return matchS && matchP;
  });

  if (sFilter === "DUE") {
    processedTasks.sort(
      (a, b) =>
        new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`),
    );
  } else {
    const weight = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1 };
    processedTasks.sort((a, b) => weight[b.priority] - weight[a.priority]);
  }

  processedTasks.forEach((t) => {
    const div = document.createElement("div");
    div.className = `task-card priority-${t.priority}`;
    div.innerHTML = `
            <div>
                <h4>${t.title}</h4>
                <div class="task-meta">
                    <span><i class="fa-solid fa-triangle-exclamation"></i> PRIORITY: ${t.priority}</span>
                    <span><i class="fa-solid fa-calendar"></i> DUE: ${t.date} @ ${t.time}</span>
                    <span><i class="fa-solid fa-arrows-spin"></i> CYCLE: ${t.repeat}</span>
                </div>
            </div>
            <div class="task-actions">
                <button class="btn-tech alert-btn" onclick="deleteSystemTask('${t.id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    listContainer.appendChild(div);
  });
}

function deleteSystemTask(id) {
  coreState.tasks = coreState.tasks.filter((t) => t.id !== id);
  saveCoreState();
  renderTaskList();
}

// BROWSER NOTIFICATION ENGINES
function scheduleBrowserNotification(task) {
  if (Notification.permission === "granted") {
    const diff = new Date(`${task.date}T${task.time}`) - new Date();
    if (diff > 0) {
      setTimeout(() => {
        new Notification(`⚡ CORE_AI TASK CRITICAL REMINDER`, {
          body: `Objective execution required: ${task.title}`,
          icon: "/assets/icon-192.png",
        });
      }, diff);
    }
  }
}

// RECENT ACTION TIMELINE LOGGER SYSTEM
function renderTimelineLogs() {
  const container = document.getElementById("timeline-logger");
  if (!container) return;
  container.innerHTML = "";

  let query = document.getElementById("log-search").value.toLowerCase();
  let filtered = coreState.logs.filter((l) =>
    `${l.subject} ${l.chapter} ${l.action}`.toLowerCase().includes(query),
  );

  filtered.forEach((l) => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-time">${l.date} - ${l.time} [ ${l.subject.toUpperCase()} ]</div>
                <div class="timeline-text"><strong>${l.chapter}:</strong> ${l.action}</div>
            </div>
        `;
    container.appendChild(div);
  });
}

// TARGET LIVE REALTIME COUNTDOWN REVERSE LOOPS
// TARGET LIVE REALTIME COUNTDOWN REVERSE LOOPS (OPTIMIZED & BUG-FREE)
function runLiveTimerLoops() {
  const mainTarget = new Date("January 20, 2027 00:00:00").getTime();
  const advTarget = new Date("May 18, 2027 00:00:00").getTime();

  // कैशिंग DOM एलिमेंट्स ताकि हर सेकंड लैग न हो
  const elMainDays = document.getElementById("main-days");
  const elMainHours = document.getElementById("main-hours");
  const elMainMins = document.getElementById("main-mins");
  const elMainSecs = document.getElementById("main-secs");

  const elAdvDays = document.getElementById("adv-days");
  const elAdvHours = document.getElementById("adv-hours");
  const elAdvMins = document.getElementById("adv-mins");
  const elAdvSecs = document.getElementById("adv-secs");
  const elLiveClock = document.getElementById("live-clock");

  function cycle() {
    const now = Date.now();

    // JEE Main Countdown Calculations
    let dMain = mainTarget - now;
    if (dMain > 0) {
      elMainDays.innerText = String(Math.floor(dMain / (1000 * 60 * 60 * 24))).padStart(3, "0");
      elMainHours.innerText = String(Math.floor((dMain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      elMainMins.innerText = String(Math.floor((dMain % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      elMainSecs.innerText = String(Math.floor((dMain % (1000 * 60)) / 1000)).padStart(2, "0");
    }

    // JEE Advanced Countdown Calculations (FIXED MATH)
    let dAdv = advTarget - now;
    if (dAdv > 0) {
      elAdvDays.innerText = String(Math.floor(dAdv / (1000 * 60 * 60 * 24))).padStart(3, "0");
      elAdvHours.innerText = String(Math.floor((dAdv % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      elAdvMins.innerText = String(Math.floor((dAdv % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      elAdvSecs.innerText = String(Math.floor((dAdv % (1000 * 60)) / 1000)).padStart(2, "0");
    }

    if (elLiveClock) elLiveClock.innerText = new Date().toLocaleTimeString();
  }
  
  setInterval(cycle, 1000);
  cycle();
}

// MOTIVATIONAL SYSTEM DAILY QUOTE ENGINE
async function handleQuoteRotator() {
  const lbl = document.getElementById("motivational-quote");
  try {
    let response = await fetch(
      "https://api.quotable.io/random?tags=determination|motivation",
    );
    if (response.ok) {
      let data = await response.json();
      lbl.innerText = `"${data.content.toUpperCase()}"`;
      return;
    }
  } catch (e) {
    /* Network offline, execute graceful array fallback */
  }

  let seed = new Date().getDate() % FALLBACK_QUOTES.length;
  lbl.innerText = `"${FALLBACK_QUOTES[seed]}"`;
}

// GLOBAL BINDINGS CONTROL EVENTS INTERACTION
function bindInteractionListeners() {
  // Navigation Panel Switches
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".nav-item")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".tab-pane")
        .forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
      if (btn.dataset.tab === "updates-tab") renderTimelineLogs();
    });
  });

  // Dynamic Filter Hooks
  document
    .getElementById("task-search")
    .addEventListener("input", renderTaskList);
  document
    .getElementById("task-filter-priority")
    .addEventListener("change", renderTaskList);
  document
    .getElementById("task-sort")
    .addEventListener("change", renderTaskList);
  document
    .getElementById("log-search")
    .addEventListener("input", renderTimelineLogs);

  // CSV Core Exporter Engine Action Hook
  document.getElementById("btn-export-csv").addEventListener("click", () => {
    let csvContent =
      "data:text/csv;charset=utf-8,Date,Time,Subject,Chapter,Action\n" +
      coreState.logs
        .map(
          (l) =>
            `"${l.date}","${l.time}","${l.subject}","${l.chapter}","${l.action}"`,
        )
        .join("\n");
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `IIT_AIR_1000_TELEMETRY_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // State Configuration Backup Mechanics
  document.getElementById("btn-export-backup").addEventListener("click", () => {
    let blob = new Blob([JSON.stringify(coreState)], {
      type: "application/json",
    });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = `CORE_AI_STATE_BACKUP_${Date.now()}.json`;
    a.click();
  });

  document
    .getElementById("btn-import-trigger")
    .addEventListener("click", () => {
      document.getElementById("file-import-json").click();
    });

  document
    .getElementById("file-import-json")
    .addEventListener("change", (e) => {
      let reader = new FileReader();
      reader.onload = (event) => {
        try {
          let parsed = JSON.parse(event.target.result);
          if (parsed.syllabus) {
            coreState = parsed;
            saveCoreState();
            alert(
              "System configuration back-up restored successfully. Rebooting interface.",
            );
            window.location.reload();
          }
        } catch (err) {
          alert(
            "Core parsing violation. Invalid configuration JSON data structure.",
          );
        }
      };
      if (e.target.files[0]) reader.readAsText(e.target.files[0]);
    });

  document.getElementById("btn-clear-logs").addEventListener("click", () => {
    if (
      confirm(
        "Purge execution telemetry logs? Analytical state mappings remain safe.",
      )
    ) {
      coreState.logs = [];
      saveCoreState();
      renderTimelineLogs();
    }
  });

  document.getElementById("btn-reset-all").addEventListener("click", () => {
    if (
      confirm(
        "WARNING: Initiating master clear sequence. All syllabus checkpoints and metrics will be permanently erased. Proceed?",
      )
    ) {
      localStorage.removeItem("IIT_CORE_AI_STATE");
      window.location.reload();
    }
  });

  // Request System Push Interface Permissions
  if (Notification.permission === "default") {
    Notification.requestPermission();
  }
}

function setAccent(theme) {
  document.body.className = "";
  document.body.classList.add("theme-" + theme);
  coreState.accent = theme;
  localStorage.setItem("IIT_CORE_AI_STATE", JSON.stringify(coreState));
}

// CANVAS TECH-MATRIX PARTICLE GENERATOR ANIMATION
function initCanvasParticles() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class NodeParticle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.fill();
    }
  }

  for (let i = 0; i < 60; i++) particles.push(new NodeParticle());

  function renderLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(renderLoop);
  }
  renderLoop();
}

// PROGRESSIVE WEB APP SERVICE WORKER BOOTSTRAP UNIT
function registerSystemPWAServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() =>
        console.log(
          "CORE_AI Progressive Web Worker pipeline interface standard nominal.",
        ),
      )
      .catch((err) =>
        console.warn("Worker execution denied or system offline.", err),
      );
  }
}
// 1. प्रायोरिटी के हिसाब से स्टार्स काउंट और क्लास का मैप
const priorityMap = {
    'CRITICAL': { stars: 5, className: 'priority-critical' },
    'HIGH':     { stars: 4, className: 'priority-high' },
    'MEDIUM':   { stars: 3, className: 'priority-medium' },
    'LOW':      { stars: 1, className: 'priority-low' }
};

// 2. स्टार्स का HTML जनरेट करने वाला फंक्शन
function generateStarsHTML(starCount) {
    let starsHTML = '';
    // भरे हुए स्टार्स (Filled Stars)
    for (let i = 0; i < starCount; i++) {
        starsHTML += '<i class="fa-solid fa-star star-filled"></i> ';
    }
    // खाली स्टार्स (Empty Stars to make total 5)
    for (let i = starCount; i < 5; i++) {
        starsHTML += '<i class="fa-regular fa-star star-empty"></i> ';
    }
    return `<div class="stars-container">${starsHTML}</div>`;
}

// 3. तुम्हारा टास्क रेंडर करने वाला फंक्शन (उदाहरण स्वरूप)
function renderTaskCard(task) {
    // अगर प्रायोरिटी मैच नहीं होती तो डिफ़ॉल्ट सेटिंग्स लें
    const config = priorityMap[task.priority] || { stars: 0, className: '' };
    const starsHTML = generateStarsHTML(config.stars);

    return `
        <div class="task-card ${config.className}">
            <div class="task-header">
                <h3>${task.title}</h3>
                <span class="badge">${task.priority}</span>
            </div>
            <p>${task.description || 'No description provided.'}</p>
            <!-- स्टार्स रेटिंग यहाँ दिखेगी -->
            ${starsHTML}
        </div>
    `;
}
