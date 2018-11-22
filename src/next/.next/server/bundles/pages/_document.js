module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteDocument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/pages/_document.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SiteDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(SiteDocument, _Document);

  function SiteDocument() {
    _classCallCheck(this, SiteDocument);

    return _possibleConstructorReturn(this, (SiteDocument.__proto__ || Object.getPrototypeOf(SiteDocument)).apply(this, arguments));
  }

  _createClass(SiteDocument, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1, minimum-scale=1, width=device-width, height=device-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/favicon-32x32.png",
        sizes: "32x32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/favicon-16x16.png",
        sizes: "16x16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css?".concat(1542721784611),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        language: "JavaScript",
        type: "text/javascript",
        src: "//family3.justclick.ru/jsapi/click.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "\n          (function (d, w, c) {\n              (w[c] = w[c] || []).push(function() {\n                  try {\n                      w.yaCounter50284909 = new Ya.Metrika2({\n                          id:50284909,\n                          clickmap:true,\n                          trackLinks:true,\n                          accurateTrackBounce:true,\n                          webvisor:true,\n                          trackHash:true\n                      });\n                  } catch(e) { }\n              });\n\n              var n = d.getElementsByTagName(\"script\")[0],\n                  s = d.createElement(\"script\"),\n                  f = function () { n.parentNode.insertBefore(s, n); };\n              s.type = \"text/javascript\";\n              s.async = true;\n              s.src = \"https://mc.yandex.ru/metrika/tag.js\";\n\n              if (w.opera == \"[object Opera]\") {\n                  d.addEventListener(\"DOMContentLoaded\", f, false);\n              } else { f(); }\n          })(document, window, \"yandex_metrika_callbacks2\");\n        "
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://mc.yandex.ru/watch/50284909",
        style: {
          position: 'absolute',
          left: '-9999px'
        },
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "\n          !function(f,b,e,v,n,t,s)\n          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n          n.queue=[];t=b.createElement(e);t.async=!0;\n          t.src=v;s=b.getElementsByTagName(e)[0];\n          s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');\n          fbq('init', '100641093899121');\n          fbq('track', 'PageView');\n        "
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        height: "1",
        width: "1",
        alt: "",
        src: "https://www.facebook.com/tr?id=100641093899121&ev=PageView&noscript=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: "\n          !function() {\n            var t = document.createElement(\"script\");\n            t.type = \"text/javascript\",\n            t.async = !0,\n            t.src = \"https://vk.com/js/api/openapi.js?159\",\n            t.onload = function() {\n              VK.Retargeting.Init(\"VK-RTRG-289575-48n40\"),\n              VK.Retargeting.Hit()\n            },\n            document.head.appendChild(t)\n          }();\n        "
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://vk.com/rtrg?p=VK-RTRG-289575-48n40",
        style: {
          position: 'fixed',
          left: '-999px'
        },
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))));
    }
  }]);

  return SiteDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);



/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map