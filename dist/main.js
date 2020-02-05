/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/themes/vanessa-sickles/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/themes/vanessa-sickles/assets/js/index.js":
/*!**************************************************************!*\
  !*** ./wp-content/themes/vanessa-sickles/assets/js/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./wp-content/themes/vanessa-sickles/assets/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./wp-content/themes/vanessa-sickles/assets/js/index.js?");

/***/ }),

/***/ "./wp-content/themes/vanessa-sickles/assets/styles/main.css":
/*!******************************************************************!*\
  !*** ./wp-content/themes/vanessa-sickles/assets/styles/main.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/src/index.js):\\nC:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\tailwind.config.js:6\\n      grey: {\\n      ^^^^\\n\\nSyntaxError: Unexpected identifier\\n    at new Script (vm.js:84:7)\\n    at NativeCompileCache._moduleCompile (C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:240:18)\\n    at Module._compile (C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:186:36)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)\\n    at Module.load (internal/modules/cjs/loader.js:815:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:727:14)\\n    at Module.require (internal/modules/cjs/loader.js:852:19)\\n    at require (C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:161:20)\\n    at C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\tailwindcss\\\\lib\\\\index.js:67:122\\n    at C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\tailwindcss\\\\lib\\\\processTailwindFeatures.js:32:20\\n    at LazyResult.run (C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\postcss\\\\lib\\\\lazy-result.js:295:14)\\n    at LazyResult.asyncTick (C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\postcss\\\\lib\\\\lazy-result.js:208:26)\\n    at LazyResult.asyncTick (C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\postcss\\\\lib\\\\lazy-result.js:221:14)\\n    at C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\postcss\\\\lib\\\\lazy-result.js:213:17\\n    at C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at context.callback (C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at C:\\\\Users\\\\vanes\\\\Desktop\\\\Coding Projects\\\\portfolio\\\\node_modules\\\\postcss-loader\\\\src\\\\index.js:208:9\");\n\n//# sourceURL=webpack:///./wp-content/themes/vanessa-sickles/assets/styles/main.css?");

/***/ })

/******/ });