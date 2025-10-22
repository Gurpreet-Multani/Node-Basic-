/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{const http = __webpack_require__(/*! http */ \"http\"); //this is to get access to url\r\nconst fs = __webpack_require__(/*! fs */ \"fs\"); //this is to get access to file systems/aka the files we want\r\n\r\nconst port = 8080; //declared a port number\r\nconst hostname = \"localhost\"; //just a good naming convention but not needed\r\n\r\n//Function/Variable to find FILE\r\nconst HandleFiles = (filepath, statusCode, res) => {\r\n  //Find File\r\n  fs.readFile(filepath, (err, data) => {\r\n    //code here\r\n    if (!err) {\r\n      //code here\r\n      res.writeHead(statusCode, { \"Content-Type\": \"text/html\" });\r\n      res.end(data);\r\n    }\r\n  });\r\n};\r\n\r\n//Server\r\nconst server = http.createServer((req, res) => {\r\n  const url = req.url; // Get the requested path\r\n\r\n  if (url === \"/\") {\r\n    //index.html\r\n    HandleFiles(\"index.html\", 200, res);\r\n  } else if (url === \"/about\") {\r\n    // about.html\r\n    HandleFiles(\"about.html\", 200, res);\r\n  } else if (url === \"/contact-me\") {\r\n    // contact-me.html\r\n    HandleFiles(\"contact-me.html\", 200, res);\r\n  } else {\r\n    // 404.html\r\n    HandleFiles(\"404.html\", 202, res);\r\n  }\r\n});\r\n\r\nserver.listen(port, hostname, () => {\r\n  console.log(`Server running at http://${hostname}:${port}/`);\r\n});\r\n\n\n//# sourceURL=webpack://basicinfo-odinproject/./index.js?\n}");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;