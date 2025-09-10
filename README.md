# Finder – Responsive Website with Theme Customization

**Live Demo:** [https://mohamedhossamrt.github.io/Finder/](https://mohamedhossamrt.github.io/Finder/)

---

A **fully responsive** HTML, CSS, and JavaScript project that demonstrates a modern landing page with **light/dark mode**, customizable background colors, and **local storage persistence**.

This project was designed to practice **UI/UX design principles**, responsive layouts, and user personalization features without using external frameworks.

## 🚀 Features

- 📱 **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Light & Dark Mode** – Toggle between light and dark themes with one click
- 🎨 **Theme Customization** – Choose your preferred background color using a color picker
- 💾 **Local Storage Persistence** – User preferences (mode + background color) are saved in the browser and restored on the next visit
- 📂 **Modular Codebase** – Clean separation between HTML, CSS, and JavaScript
- 🍔 **Interactive UI** – Mobile hamburger menu, customizable overlay, and animated UI interactions

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic layout |
| **CSS3** | Styling, responsiveness, and two separate themes (`style.css` for light, `style2.css` for dark) |
| **JavaScript (ES6)** | DOM manipulation, event handling, local storage |

## ⚙️ How It Works

### 🌓 Theme Toggle
- Clicking the mode icon (`fa-circle-half-stroke`) switches between `style.css` and `style2.css`
- The choice is stored in `localStorage` under the key **`mode`**

### 🎨 Background Customization
1. Open the customization menu (**gear icon**)
2. Pick a color from the input, then click **Apply**
3. The background of the hero section + service buttons update **instantly**
4. Saved under **`background_color`** in `localStorage`

### 💾 Local Storage
- On page load, the script checks if a **mode/background color** exists
- If found, it **restores** the saved user preferences automatically

---

## 💡 Key Learnings

> **What I accomplished during this project:**

- ✅ **Implementing responsive design** without frameworks
- ✅ **Using JavaScript localStorage** to persist user settings
- ✅ **Building light/dark themes** with separate CSS files
- ✅ **Creating an interactive customization panel** for better UX

---

### 🎯 Project Highlights

| Feature | Implementation |
|---------|----------------|
| **Theme System** | *Dual CSS files with JavaScript switching* |
| **Persistence** | *localStorage for seamless user experience* |
| **Customization** | *Real-time color picker with instant preview* |
| **Responsive** | *Mobile-first approach with hamburger navigation* |

---

### 🔧 Core JavaScript Functions

- **Theme switching** with dynamic CSS file loading
- **Color picker integration** with real-time updates
- **localStorage management** for user preferences
- **Responsive navigation** with mobile hamburger menu
