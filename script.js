
const form = document.getElementById("adventure-form");
const result = document.getElementById("result");
const statusText = document.getElementById("status");

const activities = {
  Relaxing: [
    {
      title: "The Quiet Nature Walk",
      description: "Slow down and notice the small details around you.",
      steps: [
        "Walk slowly for the first 5 minutes.",
        "Find a comfortable, safe place to sit.",
        "Notice three different sounds in nature.",
        "Look at the clouds, trees, or plants around you."
      ],
      challenge: "Find three different shades of green.",
      bring: "Bring water and comfortable shoes."
    },
    {
      title: "A Little Outdoor Reset",
      description: "Give your mind a break with a peaceful outdoor session.",
      steps: [
        "Choose a quiet outdoor place.",
        "Take a gentle walk without checking your phone.",
        "Notice the breeze and natural sounds.",
        "Sit quietly and enjoy the surroundings."
      ],
      challenge: "Notice one detail you normally overlook.",
      bring: "Bring water and sit somewhere safe."
    }
  ],

  Adventure: [
    {
      title: "The Explorer Challenge",
      description: "Turn an ordinary walk into a mini adventure.",
      steps: [
        "Choose a familiar, safe walking route.",
        "Look for interesting plants and natural patterns.",
        "Notice how the scenery changes along your route.",
        "Return using your planned safe route."
      ],
      challenge: "Find one interesting natural pattern.",
      bring: "Bring water and wear suitable footwear."
    },
    {
      title: "Discover Your Neighborhood",
      description: "Explore familiar surroundings with fresh eyes.",
      steps: [
        "Pick a safe route you have not explored carefully.",
        "Notice gardens, trees, and public green spaces.",
        "Find a new detail about your surroundings.",
        "Head home before it gets dark."
      ],
      challenge: "Notice three things you have never paid attention to.",
      bring: "Bring water and stay aware of traffic."
    }
  ],

  Learning: [
    {
      title: "The Backyard Naturalist",
      description: "Discover the tiny ecosystem around you.",
      steps: [
        "Observe plants without disturbing them.",
        "Look for birds, insects, or fallen leaves.",
        "Notice differences in shape, color, and sound.",
        "Write down one question about something you saw."
      ],
      challenge: "Observe a bird or insect from a respectful distance.",
      bring: "Bring a notebook if you want to record observations."
    },
    {
      title: "Nature Detective",
      description: "Practice observing the world like a scientist.",
      steps: [
        "Find a safe outdoor spot.",
        "Observe the ground, plants, and sky.",
        "Look for repeating shapes or natural textures.",
        "Choose one observation to investigate later."
      ],
      challenge: "Find two leaves with different shapes.",
      bring: "Bring water and avoid touching unknown plants."
    }
  ],

  Fitness: [
    {
      title: "The Green Movement Session",
      description: "Enjoy gentle movement outdoors at your own pace.",
      steps: [
        "Start with a few minutes of easy walking.",
        "Continue walking at a comfortable pace.",
        "Pause to enjoy your surroundings.",
        "Finish with a slow walk and gentle stretches."
      ],
      challenge: "Notice five different things along your route.",
      bring: "Bring water and choose comfortable clothing."
    },
    {
      title: "Walk and Explore",
      description: "Combine movement with discovering your local area.",
      steps: [
        "Choose a safe, accessible route.",
        "Walk at a pace that feels comfortable.",
        "Take a short pause to observe nature.",
        "Return safely and drink some water."
      ],
      challenge: "Spot three different kinds of plants.",
      bring: "Bring water and protect yourself from the weather."
    }
  ]
};

const timeOptions = {
  15: "15-minute mini adventure",
  30: "30-minute nature break",
  60: "One-hour outdoor adventure",
  120: "Two-hour exploration",
  240: "Half-day nature escape"
};

function getRandomActivity(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function makePlan(mood, minutes, place, extra) {
  const activity = getRandomActivity(activities[mood]);
  const planMinutes = Number(minutes);

  let steps = [...activity.steps];

  if (planMinutes <= 15) {
    steps = [
      "Spend 2 minutes settling into your surroundings.",
      "Explore your immediate area at a relaxed pace.",
      "Complete your nature observation challenge.",
      "Finish by noticing one thing you enjoyed."
    ];
  } else if (planMinutes >= 120) {
    steps.push(
      "Take a break, drink water, and return using a safe route."
    );
  }

  const safeExtra = extra.trim();

  return {
    title: activity.title,
    description:
      `${activity.description}\n\n` +
      `Duration: ${timeOptions[minutes]}\n` +
      `Location: ${place}` +
      (safeExtra ? `\nYour interest: ${safeExtra}` : ""),
    steps,
    challenge: activity.challenge,
    bring: activity.bring +
      "\n\nRemember: respect wildlife, leave plants undisturbed, " +
      "and follow local safety guidance."
  };
}

let currentPlan = null;

function displayPlan(plan) {
  document.getElementById("result-title").textContent = plan.title;
  document.getElementById("result-description").textContent =
    plan.description;

  const stepsList = document.getElementById("steps");
  stepsList.replaceChildren();

  plan.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    stepsList.appendChild(item);
  });

  document.getElementById("challenge").textContent = plan.challenge;
  document.getElementById("bring").textContent = plan.bring;

  document.getElementById("completion-message").textContent = "";
  document.getElementById("complete-btn").disabled = false;
  document.getElementById("complete-btn").textContent =
    "✓ I completed my adventure";

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const mood = new FormData(form).get("mood");
  const minutes = document.getElementById("time").value;
  const place = document.getElementById("place").value;
  const extra = document.getElementById("extra").value;

  currentPlan = makePlan(mood, minutes, place, extra);

  displayPlan(currentPlan);
  statusText.textContent =
    "Your adventure is ready. Save your phone battery and enjoy the outdoors!";
});

document.getElementById("copy-btn").addEventListener("click", async () => {
  if (!currentPlan) return;

  const text = [
    currentPlan.title,
    currentPlan.description,
    ...currentPlan.steps.map((step, index) => `${index + 1}. ${step}`),
    `Nature challenge: ${currentPlan.challenge}`,
    currentPlan.bring
  ].join("\n\n");

  try {
    await navigator.clipboard.writeText(text);
    document.getElementById("copy-btn").textContent = "Copied!";
  } catch {
    statusText.textContent =
      "Copying isn't available here. You can select the plan and copy it.";
  }
});

function getStats() {
  try {
    return JSON.parse(
      localStorage.getItem("touchgrass-stats") ||
      '{"completed":0,"minutes":0}'
    );
  } catch {
    return { completed: 0, minutes: 0 };
  }
}

function updateStats() {
  const stats = getStats();
  document.getElementById("adventure-count").textContent =
    stats.completed;
  document.getElementById("minutes-count").textContent =
    stats.minutes;
}

document.getElementById("complete-btn").addEventListener("click", () => {
  if (!currentPlan) return;

  const stats = getStats();
  const minutes = Number(document.getElementById("time").value);

  stats.completed += 1;
  stats.minutes += minutes;

  try {
    localStorage.setItem("touchgrass-stats", JSON.stringify(stats));

    updateStats();

    document.getElementById("complete-btn").disabled = true;
    document.getElementById("complete-btn").textContent =
      "🌿 Adventure recorded!";

    document.getElementById("completion-message").textContent =
      "Great job! Remember, the best part happens away from the screen.";

    statusText.textContent =
      "Adventure marked complete. Enjoy the rest of your day!";
  } catch {
    statusText.textContent =
      "Storage is unavailable. Your adventure could not be saved.";
  }
});

updateStats();