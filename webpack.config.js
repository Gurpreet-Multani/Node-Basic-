const path = require("path");

module.exports = {
  target: "node", // Tell webpack this bundle is for Node.js
  mode: "development", // Sets the mode to 'development' to fix the warning
  entry: "./index.js", // Tells webpack to start with your index.js file
  output: {
    filename: "main.js", // The name of the bundled file
    path: path.resolve(__dirname, "dist"), // The folder where the bundled file will be placed
  },
};
