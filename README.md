# HTML‑CSS‑JavaScript Frontend Developer Portfolio

A curated collection of **pure HTML, CSS and JavaScript** projects that showcase frontend‑developer skills. Each sub‑folder is a self‑contained demo that can be run locally with a simple HTTP server (or opened directly in the browser).

---

## 📁 Project Structure

```
HTML-CSS-JAVASCRIPT-FRONTEND-DEVELOPER/
│   README.md               ← (this file)
│   .gitignore
│
├── Real‑world Simulation   → A mini‑app that simulates a real‑world UI scenario.
├── Responsive layout       → Examples of fluid, mobile‑first layouts.
├── Simple quiz application → Vanilla‑JS quiz with score tracking.
├── Styling product card    → CSS‑only card designs with hover effects.
├── To‑Do List App          → Classic todo app built with plain JS.
└── simple blog             → Static blog pages with navigation.
```

---

## 🚀 How to Run Locally

All projects are **static** – no build tools required. You can open any `index.html` directly in the browser, or serve the whole folder with a lightweight server (recommended for proper routing).

### Option 1 – Open files directly
1. Navigate to the desired folder, e.g. `Responsive layout`.
2. Double‑click `index.html` – the page will open in your default browser.

### Option 2 – Use a local HTTP server (Node.js) 
```bash
# From the repository root
cd "C:\Users\Chitranjan Kumar\New folder\HTML-CSS-JAVASCRIPT-FRONTEND-DEVELOPER"
# Install http‑server globally if you don’t have it
npm install -g http-server   # one‑time
# Serve the repo (port 8080 by default)
http-server .
```
Then open **http://localhost:8080** and browse to any sub‑folder.

---

## 🌐 Live Demo (GitHub Pages)
The repository is configured for **GitHub Pages**. The live site is automatically built from the `main` branch:

```
https://chitranjan-patel.github.io/HTML-CSS-JAVASCRIPT-FRONTEND-DEVELOPER/
```
Each sub‑folder can be accessed directly, e.g.:
```
https://chitranjan-patel.github.io/HTML-CSS-JAVASCRIPT-FRONTEND-DEVELOPER/Responsive%20layout/
```

---

## 📦 Deployment Steps (GitHub Pages)
1. Ensure the repository settings have **Pages** enabled with **Source: main / (root)**.
2. Push any changes to `main`; GitHub will publish automatically.
3. Verify the live URL above.

---

## 🛠️ Development Workflow
1. Make changes in any sub‑folder.
2. Run `git add . && git commit -m "Your message"`.
3. Push with `git push origin main` – GitHub Pages will rebuild.

---

## 👤 Author
**Chitranjan Kumar Patel** – Frontend enthusiast. Feel free to open issues or PRs for improvements.
