# ✦ Melo — Your Little Focus Space

**A calmer way to get things done.**

Melo is a calming, aesthetic productivity web application designed to make studying and everyday tasks feel more manageable. It brings task management, focus-time tracking, a calendar activity heatmap, and relaxing sounds together in one peaceful space.

## ✨ Features

### 📝 To-Do List
- Organize tasks in one place.
- Keep track of pending and completed tasks.
- Enjoy a simple, distraction-free task management experience.

### ⏳ Focus Timer
- Use a dedicated space for focused work and study sessions.
- Track active focus time while the browser tab is visible and active.
- Automatically pause active-time tracking when you switch tabs or leave the browser window.
- Review recorded focus sessions.

### 🗓️ Activity Calendar
- View your focus activity through a GitHub-style heatmap.
- See activity intensity based on time spent focusing.
- Review daily, weekly, and monthly activity summaries.
- Track total focus time and active days.

### 🎧 Sounds
- Access a dedicated space for relaxing sounds and background audio while working or studying.

## 🎨 Design Philosophy

Melo follows a soft, calming visual style intended to create a comfortable productivity environment.

- Pastel colours and gentle gradients
- Rounded cards and subtle visual details
- Clean layouts with clear visual hierarchy
- A dreamy, minimal aesthetic
- A consistent design across the application

The goal is to make productivity feel less overwhelming and encourage a more balanced study routine.

## 🛠️ Tech Stack

- **React** — User interface
- **Vite** — Development server and build tool
- **JavaScript** — Application logic
- **CSS** — Styling and responsive layouts
- **Browser localStorage** — Local persistence for supported application data

## 🚀 Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sahana-Ayyalusamy/melo-focus-space.git
   ```

2. Navigate into the project directory:

   ```bash
   cd melo-focus-space
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Production Build

To create a production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 💾 Data and Privacy

Melo is designed as a frontend-focused application. Supported activity and task data are stored locally in the browser using `localStorage`, rather than requiring a backend database.

- Data is associated with the browser and origin where the application runs.
- Clearing browser storage may erase locally saved data.
- Local browser data does not automatically sync across devices.

## ⚠️ Activity Tracking Notes

Focus-time tracking relies on browser visibility and window activity. Time spent with the browser tab inactive is excluded from active tracking.

Tracking is intended for personal productivity insights and should not be treated as a precise system-wide screen-time measurement.

## 🎯 Project Objective

The objective of Melo is to combine essential productivity tools in a single, visually consistent interface while applying human-computer interaction principles such as simplicity, consistency, clear feedback, and reduced cognitive load.

## 🔮 Future Enhancements

Potential improvements include:
- Customisable focus durations and break reminders
- More detailed productivity insights
- Additional ambient sounds
- Export and backup of activity history
- Optional cloud synchronisation

## 👩‍💻 Author

**Sahana Ayyalusamy**  
B.Tech — Computer Science and Engineering  
VIT Chennai

## 📄 License

This project was developed as an academic project. No open-source license has been specified yet.

---

*Find your rhythm. Focus gently. Make space for what matters.* ✦
