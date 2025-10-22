# BasicInfo-OdinProject 🌐

## 📜 Project Description

This project is a simple, informational website built as part of **The Odin Project** curriculum. It serves as an introductory demonstration of server-side development using **Node.js** and its native modules.

The application is built **without any external frameworks** (like Express.js) and relies entirely on the **native `http` and `fs` modules** to achieve:

1.  **HTTP Server Creation:** Starting a server that listens on a specific port.
2.  **Basic Routing:** Handling requests for different URL paths (`/`, `/about`, `/contact-me`).
3.  **Static File Serving:** Reading and sending the corresponding HTML files (`index.html`, `about.html`, etc.) to the client.
4.  **Error Handling:** Serving a custom **404 Not Found** page for unknown routes.

***Note:*** *This project includes Webpack configuration files (`package.json`, `webpack.config.js`), but the primary server logic is run directly via `node index.js` using the standard Node.js runtime.*

## 🚀 Getting Started

Follow these steps to set up and run the server locally.

### Prerequisites

You need to have **Node.js** installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [your_repo_url]
    cd BasicInfo-OdinProject
    ```
2.  **Install dependencies (optional):**
    While the server logic itself has no runtime dependencies, running the `build` script or installing all packages (including dev dependencies) will require:
    ```bash
    npm install
    ```

## 🛠️ Usage

### Starting the Server

The main application file is **`index.js`**. You can start the server using the defined `start` script:

```bash
npm start
