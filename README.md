# BasicInfo-OdinProject 🌐

## 📜 Project Description

This project is a simple, informational website built as part of **The Odin Project** curriculum. It serves as an introductory demonstration of server-side logic and static file serving using the core Node.js modules.

The application is engineered **without any external frameworks** (like Express.js) and relies entirely on the native **`http`** and **`fs`** modules to:

1.  **Create an HTTP Server:** Start a server listening on port `8080`.
2.  **Basic Routing:** Inspect the requested URL (`req.url`) to handle three main paths.
3.  **Static File Serving:** Use `fs.readFile` to load and serve the corresponding HTML files (`index.html`, `about.html`, `contact-me.html`).
4.  **Error Handling:** Serve a custom **404 Not Found** page for all other routes.

---

## 💻 Live Demo

A static version of the HTML files used in this project is deployed on GitHub Pages for immediate viewing.

> **Live Site:** [https://gurpreet-multani.github.io/Node-Basic-/](https://gurpreet-multani.github.io/Node-Basic-/)

***Note:*** *This link serves the HTML/CSS/JS files directly and does **not** run the actual Node.js server or the routing logic defined in `index.js`. The server must be run locally or deployed to a Node.js-compatible host to test the server-side routing.*

---

## 🚀 Getting Started

Follow these steps to set up and run the server locally.

### Prerequisites

You must have **Node.js** installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Gurpreet-Multani/Node-Basic-](https://github.com/Gurpreet-Multani/Node-Basic-)
    cd Node-Basic-
    ```
2.  **Install dependencies (Optional):**
    While the core server logic has no runtime dependencies, the project contains development dependencies (like Webpack) listed in `package.json`:
    ```bash
    npm install
    ```

### Running the Server

Start the application using the defined `start` script:

```bash
npm start
