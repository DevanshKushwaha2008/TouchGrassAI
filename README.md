# 🌿 TouchGrass — Your Offline Outdoor Companion

> **Less scrolling. More living.**
> A simple, privacy-friendly web application that helps people spend less time on screens and more time exploring the real world.

TouchGrass is an offline-friendly outdoor activity planner built with **HTML, CSS, and JavaScript**. It helps users discover outdoor adventures based on their mood, available time, environment, and personal interests.

Instead of endlessly scrolling through apps, users can generate a simple outdoor plan, complete a nature challenge, and track their adventures.

This project was created around the idea that technology should encourage people to experience the world beyond their screens.

---

## 📌 Table of Contents

* [Overview](#-overview)
* [The Problem](#-the-problem)
* [Our Solution](#-our-solution)
* [Features](#-features)
* [Demo](#-demo)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [How to Use](#-how-to-use)
* [How It Works](#-how-it-works)
* [Privacy and Offline Support](#-privacy-and-offline-support)
* [Open-Source AI and Innovation](#-open-source-ai-and-innovation)
* [Limitations](#-limitations)
* [Future Improvements](#-future-improvements)
* [Contributing](#-contributing)
* [License](#-license)
* [Author](#-author)

---

## 🌱 Overview

TouchGrass is a lightweight web application designed to turn free time into meaningful outdoor experiences.

Users select their preferred mood, available time, and surroundings. The application then creates an outdoor activity plan containing actionable steps, a nature observation challenge, and suggestions for what to bring.

The application works directly in a web browser without requiring Python, a backend server, an AI installation, or an API key.

### Project Goals

* Encourage people to spend more time outdoors.
* Make discovering simple outdoor activities easy.
* Promote curiosity about nature and the surrounding environment.
* Provide an accessible experience that works without internet access.
* Keep user preferences and activity statistics on the user's device.
* Explore how technology can support healthier digital habits.

---

## 🧩 The Problem

Digital devices are useful for communication, learning, and productivity, but spending too much time on screens can make it easier to overlook opportunities to explore the physical world.

People may want to go outside but struggle to decide what to do, especially when they have limited time or few resources.

Common obstacles include:

* Not knowing which outdoor activity to choose.
* Assuming outdoor adventures require expensive equipment or travel.
* Spending free time browsing for ideas instead of acting on them.
* Using applications that require accounts, constant connectivity, or unnecessary personal information.

## 💡 Our Solution

TouchGrass simplifies the decision-making process.

The user selects a mood, chooses how much time they have, and picks an outdoor environment. The application generates a practical activity plan with clear steps and a small nature challenge.

The intended experience is simple:

**Choose → Plan → Go Outside → Explore → Reflect**

The goal is to make the screen a starting point for an offline experience, rather than the main activity itself.

---

## ✨ Features

### 🎯 Personalized Activity Planning

Choose from four activity preferences:

* 🌳 **Relaxing:** Quiet walks, observation, and outdoor breaks.
* 🥾 **Adventure:** Exploration and discovery challenges.
* 🐦 **Learning:** Nature observation and curiosity-driven activities.
* 🚴 **Fitness:** Comfortable walking and outdoor movement.

### ⏱️ Flexible Duration

Choose an activity duration that fits your schedule:

* 15 minutes
* 30 minutes
* 1 hour
* 2 hours
* Half a day

### 📍 Multiple Environments

Select an environment for your activity:

* Garden or backyard
* Local park
* Neighborhood
* Forest or trail
* Anywhere outdoors

These options personalize activity suggestions; they do not locate nearby places or verify trail conditions.

### 🔎 Nature Challenges

Each activity includes a small observation task, such as:

* Finding different shades of green.
* Observing plants and natural patterns.
* Listening to the sounds of nature.
* Looking for birds or insects from a respectful distance.

### 📋 Copy Your Plan

Copy your generated activity plan so you can save it or refer to it before going outside.

### 🏆 Activity Tracking

Mark an adventure as completed and track:

* Total adventures marked complete.
* Total minutes associated with those activities.

Statistics are stored in browser local storage on the current device.

### 📱 Responsive Design

The interface adapts to desktop computers, tablets, and mobile screens.

### 🔒 Privacy-Friendly Experience

The application does not require an account, does not need an external API, and does not send activity preferences to a server.

### 📵 Offline-Friendly

Once the project files are available on your device, the core application works without an internet connection.

---

## 🖥️ Demo

To try the application locally, follow the instructions in [Getting Started](#-getting-started).

A live demo can be added here after deploying the project to GitHub Pages or another static hosting service.

**Live Demo:** *Add your deployed website URL here.*

**Screenshots:** *Add screenshots of your homepage, activity planner, and generated activity plan here.*

---

## 🛠️ Technology Stack

| Technology            | Purpose                                                             |
| --------------------- | ------------------------------------------------------------------- |
| HTML5                 | Page structure, forms, and content                                  |
| CSS3                  | Layout, styling, responsive design, and visual effects              |
| JavaScript            | Activity selection, plan generation, event handling, and statistics |
| Browser Local Storage | Saving activity statistics on the device                            |
| Git and GitHub        | Version control and project collaboration                           |

### Why These Technologies?

The project uses standard web technologies to keep the application lightweight, accessible, and easy to modify.

No framework, build tool, backend, database, or AI runtime is required for the current version.

---

## 📁 Project Structure

```text
touchgrass/
│
├── index.html       # Main application and page structure
├── style.css        # Styling and responsive layouts
├── script.js        # Activity generator and application logic
└── README.md        # Project documentation
```

### File Responsibilities

**`index.html`**

Contains the navigation, introduction, activity planner, activity results, nature challenges, statistics, and footer.

**`style.css`**

Defines the color palette, typography, layout, buttons, activity cards, responsive behavior, and visual styling.

**`script.js`**

Contains the predefined activity templates, selection logic, result rendering, clipboard functionality, completion tracking, and local storage operations.

---

## 🚀 Getting Started

### Prerequisites

You only need:

* A modern web browser, such as Chrome, Firefox, or Edge.
* The three project files: `index.html`, `style.css`, and `script.js`.

No software installation is required.

### Option 1: Download the Project

1. Download or copy the project files.
2. Place all three files in the same folder.
3. Open `index.html` in your browser.
4. Start planning your outdoor activities.

### Option 2: Clone from GitHub

After uploading the project to your GitHub repository, run:

```bash
git clone https://github.com/YOUR-USERNAME/touchgrass.git
cd touchgrass
```

Open `index.html` in your browser.

Replace `YOUR-USERNAME` with your GitHub username and `touchgrass` with your actual repository name if different.

### Option 3: Use Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. Open `index.html`.
3. Run it in your browser, or use the Live Server extension if you prefer a local development server.
4. Edit the HTML, CSS, and JavaScript files as needed.

Live Server is optional.

---

## 📖 How to Use

### Step 1: Choose Your Mood

Select the kind of experience you want:

* Relaxing
* Adventure
* Learning
* Fitness

### Step 2: Select Your Available Time

Choose a duration from 15 minutes to half a day.

### Step 3: Choose Your Environment

Select a garden, park, neighborhood, trail, or general outdoor setting.

### Step 4: Add Your Interests

Optionally enter a preference, such as:

* I enjoy birdwatching.
* I like photography.
* I am new to outdoor activities.
* I want to notice more things in nature.

The current version displays this preference in the plan; it does not use AI to interpret it.

### Step 5: Generate Your Plan

Click **Discover my adventure**.

The application selects a predefined activity template and adapts the plan to the selected duration and environment.

### Step 6: Go Outside

Read the instructions, copy the plan if needed, and head outdoors.

Follow local safety guidance, respect wildlife, and avoid disturbing plants or natural habitats.

### Step 7: Record Your Adventure

After completing the activity, click **I completed my adventure**.

The application updates your locally stored activity statistics.

---

## ⚙️ How It Works

The current application uses a lightweight, rule-based activity generation system.

1. The user submits their preferences through an HTML form.
2. JavaScript reads the selected mood, duration, environment, and optional interests.
3. The application chooses an activity from the matching predefined category.
4. The plan is adapted to the available duration.
5. JavaScript updates the page with the activity title, description, steps, and nature challenge.
6. When the user marks the activity complete, the application updates the statistics in local storage.

No server request is made during this process.

### Example

**Input**

* Mood: Learning
* Duration: 30 minutes
* Environment: Local park
* Interest: Birdwatching

**Possible result**

* Activity: Backyard Naturalist
* Goal: Observe your surroundings and notice natural details.
* Challenge: Observe a bird or insect from a respectful distance.
* Equipment: Optional notebook and water.

Results may vary because the application selects from multiple predefined activities.

---

## 🔐 Privacy and Offline Support

Privacy is an important design consideration.

The current version:

* Does not request account registration.
* Does not use an external AI API.
* Does not transmit activity preferences to a backend.
* Does not require an API key.
* Stores activity statistics in browser local storage.
* Can run locally without an internet connection once the files are available.

### What Is Stored?

The application stores a small statistics object containing the number of completed adventures and the total planned minutes associated with those activities.

The information stays in the browser's local storage for that browser profile on that device.

Clearing browser site data may remove the statistics.

### Offline Limitations

The project does not currently include a service worker or installable Progressive Web App functionality. Offline use is supported by opening the local project files, rather than by a full PWA installation.

---

## 🔓 Open-Source AI and Innovation

TouchGrass explores a simple question:

**Can technology help people spend less time using technology?**

The current version demonstrates the product concept using a rule-based activity generator. It does not currently run an AI model or use an open-source AI framework.

This distinction matters for projects submitted to open-weight AI challenges.

The next stage is to integrate an open-weight model that can generate more personalized activities based on user preferences, available time, environmental context, and accessibility needs.

### Planned Open-AI Integration

A future version could use an open-weight language model through a compatible inference service or local runtime.

Potential benefits include:

* **Model choice:** Replace one compatible model with another.
* **Customization:** Adjust prompts and generation behavior.
* **Privacy options:** Support local inference when an appropriate runtime is available.
* **Transparency:** Inspect the integration code and model documentation.
* **Flexibility:** Experiment with different open model families.

An online inference service may require an internet connection, and some services impose usage limits or costs. Local inference may require additional software and suitable hardware.

Open-weight model availability does not automatically mean unrestricted licensing; model terms should be checked before redistribution or commercial use.

The aim is to keep the outdoor experience simple while making the underlying technology flexible and transparent.

---

## ⚠️ Limitations

The current version is a prototype.

* Activity suggestions come from predefined templates rather than generative AI.
* It does not identify birds, plants, or other wildlife.
* It does not use GPS or find nearby parks.
* It does not access live weather information.
* It cannot verify trail safety, opening hours, or current environmental conditions.
* Activity completion is self-reported.
* Statistics are stored locally and are not synchronized between devices.
* Duration is a suggested planning category, not a guaranteed activity duration.

Users should independently check weather, local conditions, and route safety before heading outdoors.

---

## 🛣️ Future Improvements

Potential improvements include:

* [ ] Integrate an open-weight language model.
* [ ] Add optional local inference for AI-generated activity plans.
* [ ] Add weather-aware recommendations.
* [ ] Introduce optional maps and verified nearby outdoor locations.
* [ ] Build a bird-call identification feature using a suitable open-source audio model.
* [ ] Add nature photography and observation journals.
* [ ] Introduce daily challenges and achievement badges.
* [ ] Build an installable Progressive Web App with offline caching.
* [ ] Add accessibility preferences and wheelchair-accessible activity suggestions.
* [ ] Improve activity diversity and duration-aware planning.
* [ ] Add exportable activity history.
* [ ] Create automated tests for activity selection and statistics.

These are planned improvements, not features currently implemented.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

To contribute:

1. Fork the repository.

2. Create a new branch.

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes.

4. Test the application in a browser.

5. Commit your work.

   ```bash
   git add .
   git commit -m "Add your feature"
   ```

6. Push the branch to your fork.

   ```bash
   git push origin feature/your-feature
   ```

7. Open a pull request describing your changes.

Ideas for contributions include new activity templates, improved accessibility, responsive design fixes, nature challenges, and open-source AI integration.

---

## 📄 License

This project can be distributed under the MIT License. Before publishing, add a `LICENSE` file containing the appropriate MIT License text and confirm that you have the rights to distribute all included assets.

---

## 👨‍💻 Author

**Your Name**

* GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
* Project: TouchGrass

Replace the placeholders with your GitHub details before publishing.

---

## 🌍 Final Thought

TouchGrass is built around a simple idea:

**Technology should be a bridge to the real world, not a replacement for it.**

Generate a plan. Close the tab. Step outside. Notice something new.

🌿 **Touch grass. Explore more. Live offline.**
