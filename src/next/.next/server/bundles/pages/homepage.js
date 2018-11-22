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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../server/map-to-page.js":
/***/ (function(module, exports) {

const pagesMap = {
  'post': '/article',
  'page': '/page',
  'f3_product': '/product',
  'f3_person': '/person',
}

module.exports = (wp, originalQuery = {}) => {
  const template = wp.template || wp.page_template || wp.post_template || ''
  const type = wp.object || wp.type || wp.post_type || 'page'
  const id = wp.object_id || wp.id || wp.ID || null
  const main_id = (wp.acf && wp.acf.main_id) || wp.main_id || null

  const pathname = template !== '' && template !== 'default' ?  `/${ template.replace('.php', '') }` : pagesMap[type] || 'page'

  let pageQuery = {}
  switch (type) {
    case 'post':
      pageQuery = { page_id: String(id), main_id: null }
      break;
    case 'page':
      pageQuery = { page_id: String(id), main_id: String(main_id) }
      break;
    case 'f3_product':
      pageQuery = { page_id: String(id), main_id: null }
      break;
    case 'f3_person':
      pageQuery = { page_id: String(id), main_id: null }
      break;
    default:
      pageQuery = { page_id: String(id), main_id: null }
  }

  return { pathname, query: Object.assign({}, originalQuery, pageQuery) }
}


/***/ }),

/***/ "./components/AppContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/AppContext.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var AppContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext({
  namedWP: function namedWP() {
    return null;
  },
  setRoutingMenu: function setRoutingMenu() {
    return null;
  }
});
/* harmony default export */ __webpack_exports__["a"] = ({
  Provider:
  /*#__PURE__*/
  function (_Component) {
    _inherits(AppContextProvider, _Component);

    function AppContextProvider() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, AppContextProvider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AppContextProvider.__proto__ || Object.getPrototypeOf(AppContextProvider)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {
          routingMenu: [],
          mainMenu: [],
          options: {}
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "setRoutingMenu", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(routingMenu) {
          return routingMenu !== _this.state.routingMenu && _this.setState({
            routingMenu: routingMenu
          });
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "setMainMenu", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(mainMenu) {
          return mainMenu !== _this.state.mainMenu && _this.setState({
            mainMenu: mainMenu
          });
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "setOptions", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(options) {
          return options !== _this.state.options && _this.setState({
            options: options
          });
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "namedWP", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(name) {
          var result = _this.state.routingMenu.filter(function (item) {
            return item.title === name;
          }).reduce(function (_, current) {
            return current;
          }, null); // console.log(name, this.routingMenu, result)


          return result;
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "pageBreadcrumbs", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(id) {
          var reducer = function reducer(result, item, i) {
            // console.log('item.object_id, id', item.object_id, id)
            if (item.object_id === id) {
              return _toConsumableArray(result).concat([item]);
            } else if (item.children) {
              var children = item.children.reduce(reducer, []);

              if (children.length > 0) {
                return _toConsumableArray(result).concat([item], _toConsumableArray(children));
              }
            }

            return result;
          };

          var result = _this.state.mainMenu.reduce(reducer, []); // console.log('pageBreadcrumbs', result)


          return result;
        }
      }), _temp));
    }

    _createClass(AppContextProvider, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AppContext.Provider, {
          value: {
            namedWP: this.namedWP,
            pageBreadcrumbs: this.pageBreadcrumbs,
            setRoutingMenu: this.setRoutingMenu,
            setMainMenu: this.setMainMenu,
            options: this.state.options,
            setOptions: this.setOptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, this.props.children);
      }
    }]);

    return AppContextProvider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]),
  Consumer: AppContext.Consumer
});

/***/ }),

/***/ "./components/Articles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ArticlesListItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageArticlesListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WPLink__ = __webpack_require__("./components/WPLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_utils__ = __webpack_require__("./lib/utils.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Articles.js";






var ArticlesListItem = function ArticlesListItem(_ref) {
  var title = _ref.title,
      image = _ref.image,
      wp = _ref.wp,
      url = _ref.url,
      wide = _ref.wide,
      exclude = _ref.exclude,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Frow__["a" /* default */], {
    container: true,
    gutters: true,
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3508793442", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Frow__["a" /* default */], {
    xs: wide ? "3/4" : "1/1",
    md: wide ? "4/10" : "1/1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3508793442", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "picture"
  }, image && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WPLink__["a" /* default */], {
    wp: wp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3508793442", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: image.file,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3508793442", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]]])
  }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Frow__["a" /* default */], {
    xs: wide ? "1/1" : "1/1",
    md: wide ? "6/10" : "1/1",
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3508793442", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "list-header"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WPLink__["a" /* default */], {
    wp: wp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    dangerouslySetInnerHTML: {
      __html: title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3508793442", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]]])
  }))), !exclude['excerpt'] && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3508793442", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WPLink__["a" /* default */], {
    wp: wp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    dangerouslySetInnerHTML: {
      __html: children
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3508793442", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "text"
  })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3508793442",
    css: ".box.__jsx-style-dynamic-selector{margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), ";}.picture.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), ";}.picture.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.text.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}@media (min-width:992px){.list-header.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), ";}.box.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvQXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJnQixBQUdvRCxBQUlBLEFBSWhDLEFBSVUsQUFLd0IsQUFJQSxXQVovQyxnQ0FSQSxBQUlBLEFBYUUsQUFJQSxPQVRGIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvQXJ0aWNsZXMuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgV1BMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvV1BMaW5rJ1xuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IGRhdGVGb3JtYXR0ZXIgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlc0xpc3RJdGVtID0gKHsgdGl0bGUsIGltYWdlLCB3cCwgdXJsLCB3aWRlLCBleGNsdWRlLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxGcmFnbWVudD5cblxuICAgICAgPEZyb3cgY29udGFpbmVyIGd1dHRlcnMganVzdGlmeT1cInN0YXJ0XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIDxGcm93IHhzPXt3aWRlID8gXCIzLzRcIiA6IFwiMS8xXCIgfSBtZD17d2lkZSA/IFwiNC8xMFwiIDogXCIxLzFcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmVcIj5cbiAgICAgICAgICAgICAge2ltYWdlICYmIDxXUExpbmsgd3A9e3dwfT48YT48aW1nIHNyYz17aW1hZ2UuZmlsZX0gYWx0PVwiXCIgLz48L2E+PC9XUExpbms+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgIDxGcm93IHhzPXt3aWRlID8gXCIxLzFcIiA6IFwiMS8xXCJ9IG1kPXt3aWRlID8gXCI2LzEwXCIgOiBcIjEvMVwifSBodWc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj48V1BMaW5rIHdwPXt3cH0+PGEgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRpdGxlfX0vPjwvV1BMaW5rPjwvaDI+XG4gICAgICAgICAgICB7IWV4Y2x1ZGVbJ2V4Y2VycHQnXSAmJiA8ZGl2PjxXUExpbmsgd3A9e3dwfT48YSBjbGFzc05hbWU9XCJ0ZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjaGlsZHJlbiB9fT48L2E+PC9XUExpbms+PC9kaXY+fVxuICAgICAgICAgIDwvRnJvdz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgfVxuXG4gICAgICAucGljdHVyZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuMjUpIH07XG4gICAgICB9XG5cbiAgICAgIC5waWN0dXJlIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMS4yNSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3gge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEuMjUpIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBIb21lcGFnZUFydGljbGVzTGlzdEl0ZW0gPSAoeyBhcnRpY2xlLCB0aXRsZSwgYXV0aG9yLCBkYXRlLCBpbWFnZSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyB4cz1cIjEvMVwiIG1kPVwiMS8yXCIgaHVnPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZS1vbi1yZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLWJveFwiPlxuICAgICAgICAgIHtpbWFnZSAmJiA8V1BMaW5rIHdwPXthcnRpY2xlfT48YT48ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmVcIiAvPjwvYT48L1dQTGluaz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyLW9uLXJlZFwiPjxXUExpbmsgd3A9e2FydGljbGV9PjxhIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aXRsZX19Lz48L1dQTGluaz48L2gyPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImluZm8tb24tcmVkXCI+e2F1dGhvcn0ge2RhdGUgJiYgZGF0ZUZvcm1hdHRlci5mb3JtYXQobmV3IERhdGUoZGF0ZSkpfTwvZm9vdGVyPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYXJ0aWNsZXMtb24tcmVkIHtcbiAgICAgICAgbWFyZ2luOiAkeyBUaGVtZS54cy52cigtMSkgfSAwO1xuICAgICAgfVxuXG4gICAgICAuYXJ0aWNsZS1vbi1yZWQge1xuICAgICAgICBtYXJnaW46ICR7IFRoZW1lLnhzLnZyKDEpIH0gMDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlci1vbi1yZWQsXG4gICAgICAuaGVhZGVyLW9uLXJlZCBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSkgfTtcbiAgICAgIH1cblxuICAgICAgLmluZm8tb24tcmVkIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG5cbiAgICAgIC5waWN0dXJlLWJveCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYXJ0aWNsZXMtb24tcmVkIHtcbiAgICAgICAgICBtYXJnaW46ICR7IFRoZW1lLm1kLnZyKC0xKSB9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYXJ0aWNsZS1vbi1yZWQge1xuICAgICAgICAgIG1hcmdpbjogJHsgVGhlbWUubWQudnIoMSkgfSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlci1vbi1yZWQsXG4gICAgICAgIC5oZWFkZXItb24tcmVkIGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zMzMzM3JlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBpY3R1cmUtYm94IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBpY3R1cmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpbWFnZS5maWxlfSk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAke2ltYWdlLmhlaWdodCAvIGltYWdlLndpZHRoICogMTAwfSU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5jb25zdCBBcnRpY2xlcyA9ICh7IGl0ZW1zID0gW10sIHdpZGUsIGV4Y2x1ZGUgPSBbXSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyBjb250YWluZXIgZ3V0dGVycyBpdGVtcz1cInN0YXJ0XCIganVzdGlmeT1cInN0YXJ0XCIgaHVnPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICA8RnJvdyBrZXk9e2l9IHhzPVwiMS8xXCIgbWQ9eyB3aWRlID8gJzEvMScgOiAnMS8yJyB9IGh1Zz5cbiAgICAgICAgICA8QXJ0aWNsZXNMaXN0SXRlbSB0aXRsZT17aXRlbS50aXRsZX0gaW1hZ2U9e2l0ZW0uaW1hZ2V9IHdwPXtpdGVtLndwfSB3aWRlPXt3aWRlfSBleGNsdWRlPXtleGNsdWRlfT57aXRlbS5zbmlwcGV0fTwvQXJ0aWNsZXNMaXN0SXRlbT5cbiAgICAgICAgPC9Gcm93PlxuICAgICAgICApICl9XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc1xuIl19 */\n/*@ sourceURL=src/next/components/Articles.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1.25)]
  }));
};
var HomepageArticlesListItem = function HomepageArticlesListItem(_ref2) {
  var article = _ref2.article,
      title = _ref2.title,
      author = _ref2.author,
      date = _ref2.date,
      image = _ref2.image;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Frow__["a" /* default */], {
    xs: "1/1",
    md: "1/2",
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3077633031", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1)]], ["1494171559", [image.file, image.height / image.width * 100]]]) + " " + "article-on-red"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3077633031", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1)]], ["1494171559", [image.file, image.height / image.width * 100]]]) + " " + "picture-box"
  }, image && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WPLink__["a" /* default */], {
    wp: article,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3077633031", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1)]], ["1494171559", [image.file, image.height / image.width * 100]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3077633031", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1)]], ["1494171559", [image.file, image.height / image.width * 100]]]) + " " + "picture"
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3077633031", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1)]], ["1494171559", [image.file, image.height / image.width * 100]]]) + " " + "header-on-red"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WPLink__["a" /* default */], {
    wp: article,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    dangerouslySetInnerHTML: {
      __html: title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3077633031", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1)]], ["1494171559", [image.file, image.height / image.width * 100]]])
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3077633031", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1)]], ["1494171559", [image.file, image.height / image.width * 100]]]) + " " + "info-on-red"
  }, author, " ", date && __WEBPACK_IMPORTED_MODULE_5__lib_utils__["b" /* dateFormatter */].format(new Date(date))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3077633031",
    css: ".articles-on-red.__jsx-style-dynamic-selector{margin:".concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), " 0;}.article-on-red.__jsx-style-dynamic-selector{margin:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), " 0;}.header-on-red.__jsx-style-dynamic-selector,.header-on-red.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:1.25rem;font-weight:300;color:#fff;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), ";}.info-on-red.__jsx-style-dynamic-selector{color:#fff;font-size:0.6875rem;font-style:italic;}.picture-box.__jsx-style-dynamic-selector{display:none;}@media (min-width:992px){.articles-on-red.__jsx-style-dynamic-selector{margin:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), " 0;}.article-on-red.__jsx-style-dynamic-selector{margin:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), " 0;}.header-on-red.__jsx-style-dynamic-selector,.header-on-red.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:1.33333rem;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), ";}.picture-box.__jsx-style-dynamic-selector{display:block;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), ";}.picture.__jsx-style-dynamic-selector{width:100%;background-size:cover;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvQXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VnQixBQUcrQyxBQUlBLEFBS3BCLEFBT1AsQUFNRSxBQUsyQixBQUlBLEFBS2pCLEFBS1AsQUFLSCxXQTdCTyxBQThCSSxFQXhCMUIsQ0FtQitDLElBaEM3QixHQTJCNkIsVUFuQjNCLEVBOEJsQixDQXJDVyxJQVZiLEFBSUEsQUF1QkUsQUFJQSxPQXBCMkMsSUFPN0MsUUF3QkUsT0FMQSx3QkF6QkYiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9BcnRpY2xlcy5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBXUExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9XUExpbmsnXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgZGF0ZUZvcm1hdHRlciB9IGZyb20gJy4uL2xpYi91dGlscydcblxuZXhwb3J0IGNvbnN0IEFydGljbGVzTGlzdEl0ZW0gPSAoeyB0aXRsZSwgaW1hZ2UsIHdwLCB1cmwsIHdpZGUsIGV4Y2x1ZGUsIGNoaWxkcmVuIH0pID0+IChcbiAgPEZyYWdtZW50PlxuXG4gICAgICA8RnJvdyBjb250YWluZXIgZ3V0dGVycyBqdXN0aWZ5PVwic3RhcnRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgPEZyb3cgeHM9e3dpZGUgPyBcIjMvNFwiIDogXCIxLzFcIiB9IG1kPXt3aWRlID8gXCI0LzEwXCIgOiBcIjEvMVwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZVwiPlxuICAgICAgICAgICAgICB7aW1hZ2UgJiYgPFdQTGluayB3cD17d3B9PjxhPjxpbWcgc3JjPXtpbWFnZS5maWxlfSBhbHQ9XCJcIiAvPjwvYT48L1dQTGluaz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICAgPEZyb3cgeHM9e3dpZGUgPyBcIjEvMVwiIDogXCIxLzFcIn0gbWQ9e3dpZGUgPyBcIjYvMTBcIiA6IFwiMS8xXCJ9IGh1Zz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPjxXUExpbmsgd3A9e3dwfT48YSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGl0bGV9fS8+PC9XUExpbms+PC9oMj5cbiAgICAgICAgICAgIHshZXhjbHVkZVsnZXhjZXJwdCddICYmIDxkaXY+PFdQTGluayB3cD17d3B9PjxhIGNsYXNzTmFtZT1cInRleHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoaWxkcmVuIH19PjwvYT48L1dQTGluaz48L2Rpdj59XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJveCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgICB9XG5cbiAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC4yNSkgfTtcbiAgICAgIH1cblxuICAgICAgLnBpY3R1cmUgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0IHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmxpc3QtaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxLjI1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMS4yNSkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IEhvbWVwYWdlQXJ0aWNsZXNMaXN0SXRlbSA9ICh7IGFydGljbGUsIHRpdGxlLCBhdXRob3IsIGRhdGUsIGltYWdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IHhzPVwiMS8xXCIgbWQ9XCIxLzJcIiBodWc+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhcnRpY2xlLW9uLXJlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmUtYm94XCI+XG4gICAgICAgICAge2ltYWdlICYmIDxXUExpbmsgd3A9e2FydGljbGV9PjxhPjxkaXYgY2xhc3NOYW1lPVwicGljdHVyZVwiIC8+PC9hPjwvV1BMaW5rPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXItb24tcmVkXCI+PFdQTGluayB3cD17YXJ0aWNsZX0+PGEgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRpdGxlfX0vPjwvV1BMaW5rPjwvaDI+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiaW5mby1vbi1yZWRcIj57YXV0aG9yfSB7ZGF0ZSAmJiBkYXRlRm9ybWF0dGVyLmZvcm1hdChuZXcgRGF0ZShkYXRlKSl9PC9mb290ZXI+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hcnRpY2xlcy1vbi1yZWQge1xuICAgICAgICBtYXJnaW46ICR7IFRoZW1lLnhzLnZyKC0xKSB9IDA7XG4gICAgICB9XG5cbiAgICAgIC5hcnRpY2xlLW9uLXJlZCB7XG4gICAgICAgIG1hcmdpbjogJHsgVGhlbWUueHMudnIoMSkgfSAwO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyLW9uLXJlZCxcbiAgICAgIC5oZWFkZXItb24tcmVkIGEge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgfVxuXG4gICAgICAuaW5mby1vbi1yZWQge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cblxuICAgICAgLnBpY3R1cmUtYm94IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5hcnRpY2xlcy1vbi1yZWQge1xuICAgICAgICAgIG1hcmdpbjogJHsgVGhlbWUubWQudnIoLTEpIH0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcnRpY2xlLW9uLXJlZCB7XG4gICAgICAgICAgbWFyZ2luOiAkeyBUaGVtZS5tZC52cigxKSB9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLW9uLXJlZCxcbiAgICAgICAgLmhlYWRlci1vbi1yZWQgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjMzMzMzcmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNzUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAucGljdHVyZS1ib3gge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpIH07XG4gICAgICAgIH1cblxuICAgICAgICAucGljdHVyZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucGljdHVyZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2ltYWdlLmZpbGV9KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW1hZ2UuaGVpZ2h0IC8gaW1hZ2Uud2lkdGggKiAxMDB9JTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmNvbnN0IEFydGljbGVzID0gKHsgaXRlbXMgPSBbXSwgd2lkZSwgZXhjbHVkZSA9IFtdIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBndXR0ZXJzIGl0ZW1zPVwic3RhcnRcIiBqdXN0aWZ5PVwic3RhcnRcIiBodWc+XG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgIDxGcm93IGtleT17aX0geHM9XCIxLzFcIiBtZD17IHdpZGUgPyAnMS8xJyA6ICcxLzInIH0gaHVnPlxuICAgICAgICAgIDxBcnRpY2xlc0xpc3RJdGVtIHRpdGxlPXtpdGVtLnRpdGxlfSBpbWFnZT17aXRlbS5pbWFnZX0gd3A9e2l0ZW0ud3B9IHdpZGU9e3dpZGV9IGV4Y2x1ZGU9e2V4Y2x1ZGV9PntpdGVtLnNuaXBwZXR9PC9BcnRpY2xlc0xpc3RJdGVtPlxuICAgICAgICA8L0Zyb3c+XG4gICAgICAgICkgKX1cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzXG4iXX0= */\n/*@ sourceURL=src/next/components/Articles.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(-1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(1)]
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1494171559",
    css: ".picture.__jsx-style-dynamic-selector{background-image:url(".concat(image.file, ");padding-bottom:").concat(image.height / image.width * 100, "%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvQXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUhnQixBQUc0RCxtREFDTiw2Q0FDL0MiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9BcnRpY2xlcy5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBXUExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9XUExpbmsnXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgZGF0ZUZvcm1hdHRlciB9IGZyb20gJy4uL2xpYi91dGlscydcblxuZXhwb3J0IGNvbnN0IEFydGljbGVzTGlzdEl0ZW0gPSAoeyB0aXRsZSwgaW1hZ2UsIHdwLCB1cmwsIHdpZGUsIGV4Y2x1ZGUsIGNoaWxkcmVuIH0pID0+IChcbiAgPEZyYWdtZW50PlxuXG4gICAgICA8RnJvdyBjb250YWluZXIgZ3V0dGVycyBqdXN0aWZ5PVwic3RhcnRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgPEZyb3cgeHM9e3dpZGUgPyBcIjMvNFwiIDogXCIxLzFcIiB9IG1kPXt3aWRlID8gXCI0LzEwXCIgOiBcIjEvMVwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZVwiPlxuICAgICAgICAgICAgICB7aW1hZ2UgJiYgPFdQTGluayB3cD17d3B9PjxhPjxpbWcgc3JjPXtpbWFnZS5maWxlfSBhbHQ9XCJcIiAvPjwvYT48L1dQTGluaz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICAgPEZyb3cgeHM9e3dpZGUgPyBcIjEvMVwiIDogXCIxLzFcIn0gbWQ9e3dpZGUgPyBcIjYvMTBcIiA6IFwiMS8xXCJ9IGh1Zz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPjxXUExpbmsgd3A9e3dwfT48YSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGl0bGV9fS8+PC9XUExpbms+PC9oMj5cbiAgICAgICAgICAgIHshZXhjbHVkZVsnZXhjZXJwdCddICYmIDxkaXY+PFdQTGluayB3cD17d3B9PjxhIGNsYXNzTmFtZT1cInRleHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoaWxkcmVuIH19PjwvYT48L1dQTGluaz48L2Rpdj59XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJveCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgICB9XG5cbiAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC4yNSkgfTtcbiAgICAgIH1cblxuICAgICAgLnBpY3R1cmUgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0IHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmxpc3QtaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxLjI1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMS4yNSkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IEhvbWVwYWdlQXJ0aWNsZXNMaXN0SXRlbSA9ICh7IGFydGljbGUsIHRpdGxlLCBhdXRob3IsIGRhdGUsIGltYWdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IHhzPVwiMS8xXCIgbWQ9XCIxLzJcIiBodWc+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhcnRpY2xlLW9uLXJlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmUtYm94XCI+XG4gICAgICAgICAge2ltYWdlICYmIDxXUExpbmsgd3A9e2FydGljbGV9PjxhPjxkaXYgY2xhc3NOYW1lPVwicGljdHVyZVwiIC8+PC9hPjwvV1BMaW5rPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXItb24tcmVkXCI+PFdQTGluayB3cD17YXJ0aWNsZX0+PGEgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRpdGxlfX0vPjwvV1BMaW5rPjwvaDI+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiaW5mby1vbi1yZWRcIj57YXV0aG9yfSB7ZGF0ZSAmJiBkYXRlRm9ybWF0dGVyLmZvcm1hdChuZXcgRGF0ZShkYXRlKSl9PC9mb290ZXI+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hcnRpY2xlcy1vbi1yZWQge1xuICAgICAgICBtYXJnaW46ICR7IFRoZW1lLnhzLnZyKC0xKSB9IDA7XG4gICAgICB9XG5cbiAgICAgIC5hcnRpY2xlLW9uLXJlZCB7XG4gICAgICAgIG1hcmdpbjogJHsgVGhlbWUueHMudnIoMSkgfSAwO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyLW9uLXJlZCxcbiAgICAgIC5oZWFkZXItb24tcmVkIGEge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgfVxuXG4gICAgICAuaW5mby1vbi1yZWQge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cblxuICAgICAgLnBpY3R1cmUtYm94IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5hcnRpY2xlcy1vbi1yZWQge1xuICAgICAgICAgIG1hcmdpbjogJHsgVGhlbWUubWQudnIoLTEpIH0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcnRpY2xlLW9uLXJlZCB7XG4gICAgICAgICAgbWFyZ2luOiAkeyBUaGVtZS5tZC52cigxKSB9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLW9uLXJlZCxcbiAgICAgICAgLmhlYWRlci1vbi1yZWQgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjMzMzMzcmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNzUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAucGljdHVyZS1ib3gge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpIH07XG4gICAgICAgIH1cblxuICAgICAgICAucGljdHVyZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucGljdHVyZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2ltYWdlLmZpbGV9KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW1hZ2UuaGVpZ2h0IC8gaW1hZ2Uud2lkdGggKiAxMDB9JTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmNvbnN0IEFydGljbGVzID0gKHsgaXRlbXMgPSBbXSwgd2lkZSwgZXhjbHVkZSA9IFtdIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBndXR0ZXJzIGl0ZW1zPVwic3RhcnRcIiBqdXN0aWZ5PVwic3RhcnRcIiBodWc+XG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgIDxGcm93IGtleT17aX0geHM9XCIxLzFcIiBtZD17IHdpZGUgPyAnMS8xJyA6ICcxLzInIH0gaHVnPlxuICAgICAgICAgIDxBcnRpY2xlc0xpc3RJdGVtIHRpdGxlPXtpdGVtLnRpdGxlfSBpbWFnZT17aXRlbS5pbWFnZX0gd3A9e2l0ZW0ud3B9IHdpZGU9e3dpZGV9IGV4Y2x1ZGU9e2V4Y2x1ZGV9PntpdGVtLnNuaXBwZXR9PC9BcnRpY2xlc0xpc3RJdGVtPlxuICAgICAgICA8L0Zyb3c+XG4gICAgICAgICkgKX1cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzXG4iXX0= */\n/*@ sourceURL=src/next/components/Articles.js */"),
    dynamic: [image.file, image.height / image.width * 100]
  }));
};

var Articles = function Articles(_ref3) {
  var _ref3$items = _ref3.items,
      items = _ref3$items === void 0 ? [] : _ref3$items,
      wide = _ref3.wide,
      _ref3$exclude = _ref3.exclude,
      exclude = _ref3$exclude === void 0 ? [] : _ref3$exclude;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Frow__["a" /* default */], {
    container: true,
    gutters: true,
    items: "start",
    justify: "start",
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, items.map(function (item, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Frow__["a" /* default */], {
      key: i,
      xs: "1/1",
      md: wide ? '1/1' : '1/2',
      hug: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ArticlesListItem, {
      title: item.title,
      image: item.image,
      wp: item.wp,
      wide: wide,
      exclude: exclude,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      }
    }, item.snippet));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1223110829",
    css: "@media (min-width:992px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvQXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUlnQiIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL0FydGljbGVzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFdQTGluayBmcm9tICcuLi9jb21wb25lbnRzL1dQTGluaydcbmltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBkYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZXNMaXN0SXRlbSA9ICh7IHRpdGxlLCBpbWFnZSwgd3AsIHVybCwgd2lkZSwgZXhjbHVkZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG5cbiAgICAgIDxGcm93IGNvbnRhaW5lciBndXR0ZXJzIGp1c3RpZnk9XCJzdGFydFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICA8RnJvdyB4cz17d2lkZSA/IFwiMy80XCIgOiBcIjEvMVwiIH0gbWQ9e3dpZGUgPyBcIjQvMTBcIiA6IFwiMS8xXCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlXCI+XG4gICAgICAgICAgICAgIHtpbWFnZSAmJiA8V1BMaW5rIHdwPXt3cH0+PGE+PGltZyBzcmM9e2ltYWdlLmZpbGV9IGFsdD1cIlwiIC8+PC9hPjwvV1BMaW5rPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRnJvdz5cbiAgICAgICAgICA8RnJvdyB4cz17d2lkZSA/IFwiMS8xXCIgOiBcIjEvMVwifSBtZD17d2lkZSA/IFwiNi8xMFwiIDogXCIxLzFcIn0gaHVnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+PFdQTGluayB3cD17d3B9PjxhIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aXRsZX19Lz48L1dQTGluaz48L2gyPlxuICAgICAgICAgICAgeyFleGNsdWRlWydleGNlcnB0J10gJiYgPGRpdj48V1BMaW5rIHdwPXt3cH0+PGEgY2xhc3NOYW1lPVwidGV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hpbGRyZW4gfX0+PC9hPjwvV1BMaW5rPjwvZGl2Pn1cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYm94IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSkgfTtcbiAgICAgIH1cblxuICAgICAgLnBpY3R1cmUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjI1KSB9O1xuICAgICAgfVxuXG4gICAgICAucGljdHVyZSBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAubGlzdC1oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEuMjUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAuYm94IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxLjI1KSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgSG9tZXBhZ2VBcnRpY2xlc0xpc3RJdGVtID0gKHsgYXJ0aWNsZSwgdGl0bGUsIGF1dGhvciwgZGF0ZSwgaW1hZ2UgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEZyb3cgeHM9XCIxLzFcIiBtZD1cIjEvMlwiIGh1Zz5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFydGljbGUtb24tcmVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ib3hcIj5cbiAgICAgICAgICB7aW1hZ2UgJiYgPFdQTGluayB3cD17YXJ0aWNsZX0+PGE+PGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlXCIgLz48L2E+PC9XUExpbms+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlci1vbi1yZWRcIj48V1BMaW5rIHdwPXthcnRpY2xlfT48YSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGl0bGV9fS8+PC9XUExpbms+PC9oMj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJpbmZvLW9uLXJlZFwiPnthdXRob3J9IHtkYXRlICYmIGRhdGVGb3JtYXR0ZXIuZm9ybWF0KG5ldyBEYXRlKGRhdGUpKX08L2Zvb3Rlcj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmFydGljbGVzLW9uLXJlZCB7XG4gICAgICAgIG1hcmdpbjogJHsgVGhlbWUueHMudnIoLTEpIH0gMDtcbiAgICAgIH1cblxuICAgICAgLmFydGljbGUtb24tcmVkIHtcbiAgICAgICAgbWFyZ2luOiAkeyBUaGVtZS54cy52cigxKSB9IDA7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXItb24tcmVkLFxuICAgICAgLmhlYWRlci1vbi1yZWQgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgICB9XG5cbiAgICAgIC5pbmZvLW9uLXJlZCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgfVxuXG4gICAgICAucGljdHVyZS1ib3gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmFydGljbGVzLW9uLXJlZCB7XG4gICAgICAgICAgbWFyZ2luOiAkeyBUaGVtZS5tZC52cigtMSkgfSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFydGljbGUtb24tcmVkIHtcbiAgICAgICAgICBtYXJnaW46ICR7IFRoZW1lLm1kLnZyKDEpIH0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXItb24tcmVkLFxuICAgICAgICAuaGVhZGVyLW9uLXJlZCBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMzMzMzNyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMC43NSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waWN0dXJlLWJveCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1hZ2UuZmlsZX0pO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHtpbWFnZS5oZWlnaHQgLyBpbWFnZS53aWR0aCAqIDEwMH0lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuY29uc3QgQXJ0aWNsZXMgPSAoeyBpdGVtcyA9IFtdLCB3aWRlLCBleGNsdWRlID0gW10gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEZyb3cgY29udGFpbmVyIGd1dHRlcnMgaXRlbXM9XCJzdGFydFwiIGp1c3RpZnk9XCJzdGFydFwiIGh1Zz5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgPEZyb3cga2V5PXtpfSB4cz1cIjEvMVwiIG1kPXsgd2lkZSA/ICcxLzEnIDogJzEvMicgfSBodWc+XG4gICAgICAgICAgPEFydGljbGVzTGlzdEl0ZW0gdGl0bGU9e2l0ZW0udGl0bGV9IGltYWdlPXtpdGVtLmltYWdlfSB3cD17aXRlbS53cH0gd2lkZT17d2lkZX0gZXhjbHVkZT17ZXhjbHVkZX0+e2l0ZW0uc25pcHBldH08L0FydGljbGVzTGlzdEl0ZW0+XG4gICAgICAgIDwvRnJvdz5cbiAgICAgICAgKSApfVxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNcbiJdfQ== */\n/*@ sourceURL=src/next/components/Articles.js */"
  }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Articles);

/***/ }),

/***/ "./components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadMoreButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons__ = __webpack_require__("./components/Icons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WPLink__ = __webpack_require__("./components/WPLink.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Button.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }







var Button = function Button(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      wp = _ref.wp,
      props = _objectWithoutProperties(_ref, ["variant", "wp"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, wp ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WPLink__["a" /* default */], {
    wp: wp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1872243151", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.backgroundGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.backgroundOrange, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.small, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.small, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + (props.className != null && props.className || "".concat(variant))
  }))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1872243151", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.backgroundGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.backgroundOrange, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.small, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.small, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + (props.className != null && props.className || "".concat(variant))
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1872243151",
    css: "button.__jsx-style-dynamic-selector{margin:0;padding:0;border:none;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:background-color 0.2s linear;transition:background-color 0.2s linear;}button.__jsx-style-dynamic-selector:disabled{cursor:not-allowed;background-color:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.gray, ";}.default.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, ";border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";font-size:0.75rem;font-weight:700;text-transform:uppercase;color:#fff;padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), " 2rem;min-width:11.2rem;}.secondary.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, ";border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";color:#fff;padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), " 2rem;min-width:14.3rem;font-size:0.83333rem;font-weight:400;}.narrow.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, ";border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";color:#fff;padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), " 2rem;font-size:0.83333rem;font-weight:400;}.small.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, ";border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";color:#fff;padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), " 0.5rem;font-size:0.83333rem;font-weight:400;}.white.__jsx-style-dynamic-selector{padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), " 1.1rem;background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.backgroundGray, ";border:1px solid #6d6d6d;border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";color:#fff;font-weight:600;}.orange.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.backgroundOrange, ";border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";font-weight:700;color:#fff;padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), " 2rem;}@media (min-width:992px){.default.__jsx-style-dynamic-selector{font-size:0.88889rem;border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, ";padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), " 3.2rem;min-width:18.6rem;}.secondary.__jsx-style-dynamic-selector{font-size:1rem;font-weight:400;border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, ";padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), " 2rem;min-width:14.4rem;}.narrow.__jsx-style-dynamic-selector{font-size:0.88889rem;line-height:1.625;font-weight:600;border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.small, ";padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.25), " 1.2rem;}.small.__jsx-style-dynamic-selector{border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";padding:0 0.6rem;font-size:0.66667rem;font-weight:400;line-height:2.66667;}.white.__jsx-style-dynamic-selector{padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.25), " 1rem;background-color:inherit;border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.small, ";border-color:#7a7a7a;color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, ";font-size:0.66667rem;}.orange.__jsx-style-dynamic-selector{border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, ";padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), " 2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUdrQixBQVVVLEFBSzJCLEFBV0EsQUFVQSxBQVNDLEFBU0YsQUFTRSxBQVd4QixBQU9OLEFBUU0sQUFRdUIsQUFRRCxBQVNDLFNBakhwQyxNQWlGUSxJQWhGTixBQVNrQyxFQWdFQSxBQWUxQixVQXZGTCxBQWdGK0IsUUFRNUIsSUFlUyxDQVJSLEFBaUIwQixDQTVERSxDQW5EbEMsQUFZOEIsQUFXQSxBQVVBLENBU0MsQUFrQkEsUUE0QkUsTUFPdkIsSUF2RnpCLEFBZ0VpRCxHQStCRCxPQXZCRCxPQWdCM0IsS0FnQmxCLEVBbkdrQixBQVdQLEFBVUEsRUFTQSxBQW1CSyxDQVZTLE1BNkNILENBUnlCLENBaEVMLEFBVUEsRUFTRyxLQTlCN0IsQUFpREwsR0FVUyxFQStCRyxLQW5EcUIsQ0FXRCxBQWlCdkIsQUFpQnBCLEVBakd1QixHQWNFLEtBMkR6QixLQStCc0MsR0F2QnRDLE1BeERrQixBQVVHLEVBc0RyQixHQTdDcUIsQ0E3QlYsV0FDK0IsQ0FVckIsQ0EyQlYsQUFZYixFQTdCa0IsS0FTQSxDQTRETyxHQW5EUCxPQWpCbEIsRUFWa0IsR0FtQmxCLElBU0EsRUFtREUsT0E5RUYsSUFYb0Isa0JBaEJzQixBQWlCMUMsd0ZBaEJBIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IExvYWRNb3JlIH0gZnJvbSAnLi9JY29ucydcbmltcG9ydCBXUExpbmsgZnJvbSAnLi9XUExpbmsnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7IHZhcmlhbnQgPSAnZGVmYXVsdCcsIHdwLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICB7d3BcbiAgICAgID8gPFdQTGluayB3cD17d3B9PjxidXR0b24gY2xhc3NOYW1lPXtgJHsgdmFyaWFudCB9YH0gey4uLnByb3BzfS8+PC9XUExpbms+XG4gICAgICA6IDxidXR0b24gY2xhc3NOYW1lPXtgJHsgdmFyaWFudCB9YH0gey4uLnByb3BzfS8+XG4gICAgfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyO1xuICAgICAgfVxuXG4gICAgICBidXR0b246ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuZ3JheSB9O1xuICAgICAgfVxuXG4gICAgICAuZGVmYXVsdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogJHsgVGhlbWUueHMudnIoMC41KX0gMnJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxMS4ycmVtO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS54cy5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogJHsgVGhlbWUueHMudnIoMC41KX0gMnJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxNC4zcmVtO1xuICAgICAgICBmb250LXNpemU6IDAuODMzMzNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXJyb3cge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAkeyBUaGVtZS54cy52cigwLjUpfSAycmVtO1xuICAgICAgICBmb250LXNpemU6IDAuODMzMzNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgIC5zbWFsbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLnhzLnZyKDAuNSl9IDAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjgzMzMzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICAud2hpdGUge1xuICAgICAgICBwYWRkaW5nOiAkeyBUaGVtZS54cy52cigwLjI1KX0gMS4xcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYmFja2dyb3VuZEdyYXkgfTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzZkNmQ2ZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIC5vcmFuZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYmFja2dyb3VuZE9yYW5nZSB9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS54cy5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgICAvKiBmb250LXNpemU6IDAuNzVyZW07ICovXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAkeyBUaGVtZS54cy52cigwLjUpfSAycmVtO1xuICAgICAgICAvKiBtaW4td2lkdGg6IDExLjJyZW07ICovXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZGVmYXVsdCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg4ODg5cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgcGFkZGluZzogJHsgVGhlbWUubWQudnIoMC41KX0gMy4ycmVtO1xuICAgICAgICAgIG1pbi13aWR0aDogMTguNnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmRhcnkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgcGFkZGluZzogJHsgVGhlbWUubWQudnIoMC41KX0gMnJlbTtcbiAgICAgICAgICBtaW4td2lkdGg6IDE0LjRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODg4ODlyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLnNtYWxsIH07XG4gICAgICAgICAgcGFkZGluZzogJHsgVGhlbWUubWQudnIoMC4yNSl9IDEuMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbWFsbCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNnJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNjY2NjdyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi42NjY2NztcbiAgICAgICAgfVxuXG4gICAgICAgIC53aGl0ZSB7XG4gICAgICAgICAgcGFkZGluZzogJHsgVGhlbWUubWQudnIoMC4yNSl9IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS5tZC5ib3JkZXJSYWRpdXMuc21hbGwgfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM3YTdhN2E7XG4gICAgICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy50ZXh0R3JheSB9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42NjY2N3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmFuZ2Uge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgcGFkZGluZzogJHsgVGhlbWUubWQudnIoMC41KX0gMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cbmV4cG9ydCBjb25zdCBMb2FkTW9yZUJ1dHRvbiA9ICh7bG9hZGluZywgYWN0aXZlID0gdHJ1ZSwgLi4ucHJvcHN9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiB7Li4ucHJvcHN9PjxGcm93IGNvbnRhaW5lciByb3c9XCJjZW50ZXJcIj48ZGl2IGNsYXNzTmFtZT1cImJveFwiPjxGcm93PjxkaXYgY2xhc3NOYW1lPXtgaWNvbiR7bG9hZGluZyA/ICcgbG9hZGluZycgOiAnJ31gfT48TG9hZE1vcmUvPjwvZGl2PjwvRnJvdz48RnJvdyBodWc+0JfQsNCz0YDRg9C30LjRgtGMINC10YnRkTwvRnJvdz48L2Rpdj48L0Zyb3c+PC9CdXR0b24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJveCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiA6Z2xvYmFsKHN2Zykge1xuICAgICAgICB3aWR0aDogMS4xcmVtO1xuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGxvYWRlciB7XG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gICAgICAgIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxuICAgICAgfVxuXG4gICAgICAuaWNvbi5sb2FkaW5nIDpnbG9iYWwoc3ZnKXtcbiAgICAgICAgYW5pbWF0aW9uOiBsb2FkZXIgMS41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG4vL1xuLy8gZXhwb3J0IGNvbnN0IEJ1eUJ1dHRvbiA9ICh7IHdwLCB1cmwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4vLyAgIDxGcmFnbWVudD5cbi8vICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZWZhdWx0XCIgey4uLnByb3BzfT57Y2hpbGRyZW4gfHwgJ9Ca0YPQv9C40YLRjCd9PC9CdXR0b24+XG4vLyAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgLmJveCB7XG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuLy8gICAgICAgfVxuLy9cbi8vICAgICAgIC5ib3ggOmdsb2JhbChzdmcpIHtcbi8vICAgICAgICAgd2lkdGg6IDFyZW07XG4vLyAgICAgICAgIGhlaWdodDogMXJlbTtcbi8vICAgICAgICAgZmlsbDogI2ZmZjtcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuLy8gICAgICAgfVxuLy8gICAgIGB9PC9zdHlsZT5cbi8vICAgPC9GcmFnbWVudD5cbi8vIClcbiJdfQ== */\n/*@ sourceURL=src/next/components/Button.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.backgroundGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.backgroundOrange, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.small, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.small, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]
  }));
};

/* harmony default export */ __webpack_exports__["b"] = (Button);
var LoadMoreButton = function LoadMoreButton(_ref2) {
  var loading = _ref2.loading,
      _ref2$active = _ref2.active,
      active = _ref2$active === void 0 ? true : _ref2$active,
      props = _objectWithoutProperties(_ref2, ["loading", "active"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Button, _extends({
    variant: "secondary"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    container: true,
    row: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    className: "jsx-4220978066" + " " + "box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    className: "jsx-4220978066" + " " + "icon".concat(loading ? ' loading' : '')
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons__["p" /* LoadMore */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4220978066",
    css: ".box.jsx-4220978066{line-height:1rem;}.icon.jsx-4220978066 svg{width:1.1rem;height:1.1rem;fill:#fff;margin-right:1rem;}@-webkit-keyframes loader-jsx-4220978066{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes loader-jsx-4220978066{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.icon.loading.jsx-4220978066 svg{-webkit-animation:loader-jsx-4220978066 1.5s infinite linear;animation:loader-jsx-4220978066 1.5s infinite linear;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJZ0IsQUFHMEIsQUFJSixBQU9hLEFBQ0ksQUFJUSxhQVh4QixJQUpoQixVQUtZLFVBQ1Esa0JBQ3BCLDBCQUc2QixNQUNJLDJCQUtQLG9GQUMxQiIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBMb2FkTW9yZSB9IGZyb20gJy4vSWNvbnMnXG5pbXBvcnQgV1BMaW5rIGZyb20gJy4vV1BMaW5rJ1xuXG5jb25zdCBCdXR0b24gPSAoeyB2YXJpYW50ID0gJ2RlZmF1bHQnLCB3cCwgLi4ucHJvcHMgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAge3dwXG4gICAgICA/IDxXUExpbmsgd3A9e3dwfT48YnV0dG9uIGNsYXNzTmFtZT17YCR7IHZhcmlhbnQgfWB9IHsuLi5wcm9wc30vPjwvV1BMaW5rPlxuICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT17YCR7IHZhcmlhbnQgfWB9IHsuLi5wcm9wc30vPlxuICAgIH1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uOmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgVGhlbWUuY29sb3JzLmdyYXkgfTtcbiAgICAgIH1cblxuICAgICAgLmRlZmF1bHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLnhzLnZyKDAuNSl9IDJyZW07XG4gICAgICAgIG1pbi13aWR0aDogMTEuMnJlbTtcbiAgICAgIH1cblxuICAgICAgLnNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLnhzLnZyKDAuNSl9IDJyZW07XG4gICAgICAgIG1pbi13aWR0aDogMTQuM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjgzMzMzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICAubmFycm93IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS54cy5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogJHsgVGhlbWUueHMudnIoMC41KX0gMnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjgzMzMzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICAuc21hbGwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAkeyBUaGVtZS54cy52cigwLjUpfSAwLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MzMzM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cblxuICAgICAgLndoaXRlIHtcbiAgICAgICAgcGFkZGluZzogJHsgVGhlbWUueHMudnIoMC4yNSl9IDEuMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgVGhlbWUuY29sb3JzLmJhY2tncm91bmRHcmF5IH07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZDZkNmQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICAub3JhbmdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgVGhlbWUuY29sb3JzLmJhY2tncm91bmRPcmFuZ2UgfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjc1cmVtOyAqL1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogJHsgVGhlbWUueHMudnIoMC41KX0gMnJlbTtcbiAgICAgICAgLyogbWluLXdpZHRoOiAxMS4ycmVtOyAqL1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmRlZmF1bHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS5tZC5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLm1kLnZyKDAuNSl9IDMuMnJlbTtcbiAgICAgICAgICBtaW4td2lkdGg6IDE4LjZyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2Vjb25kYXJ5IHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS5tZC5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLm1kLnZyKDAuNSl9IDJyZW07XG4gICAgICAgICAgbWluLXdpZHRoOiAxNC40cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdyB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg4ODg5cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5zbWFsbCB9O1xuICAgICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLm1kLnZyKDAuMjUpfSAxLjJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc21hbGwge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgcGFkZGluZzogMCAwLjZyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjY2NjY3cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNjY2Njc7XG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGUge1xuICAgICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLm1kLnZyKDAuMjUpfSAxcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLnNtYWxsIH07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjN2E3YTdhO1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNjY2NjdyZW07XG4gICAgICAgIH1cblxuICAgICAgICAub3JhbmdlIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS5tZC5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLm1kLnZyKDAuNSl9IDJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5leHBvcnQgY29uc3QgTG9hZE1vcmVCdXR0b24gPSAoe2xvYWRpbmcsIGFjdGl2ZSA9IHRydWUsIC4uLnByb3BzfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgey4uLnByb3BzfT48RnJvdyBjb250YWluZXIgcm93PVwiY2VudGVyXCI+PGRpdiBjbGFzc05hbWU9XCJib3hcIj48RnJvdz48ZGl2IGNsYXNzTmFtZT17YGljb24ke2xvYWRpbmcgPyAnIGxvYWRpbmcnIDogJyd9YH0+PExvYWRNb3JlLz48L2Rpdj48L0Zyb3c+PEZyb3cgaHVnPtCX0LDQs9GA0YPQt9C40YLRjCDQtdGJ0ZE8L0Zyb3c+PC9kaXY+PC9Gcm93PjwvQnV0dG9uPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ib3gge1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmljb24gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgd2lkdGg6IDEuMXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsb2FkZXIge1xuICAgICAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbiAgICAgIH1cblxuICAgICAgLmljb24ubG9hZGluZyA6Z2xvYmFsKHN2Zyl7XG4gICAgICAgIGFuaW1hdGlvbjogbG9hZGVyIDEuNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuLy9cbi8vIGV4cG9ydCBjb25zdCBCdXlCdXR0b24gPSAoeyB3cCwgdXJsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuLy8gICA8RnJhZ21lbnQ+XG4vLyAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVmYXVsdFwiIHsuLi5wcm9wc30+e2NoaWxkcmVuIHx8ICfQmtGD0L/QuNGC0YwnfTwvQnV0dG9uPlxuLy8gICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAgIC5ib3gge1xuLy8gICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbi8vICAgICAgIH1cbi8vXG4vLyAgICAgICAuYm94IDpnbG9iYWwoc3ZnKSB7XG4vLyAgICAgICAgIHdpZHRoOiAxcmVtO1xuLy8gICAgICAgICBoZWlnaHQ6IDFyZW07XG4vLyAgICAgICAgIGZpbGw6ICNmZmY7XG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbi8vICAgICAgIH1cbi8vICAgICBgfTwvc3R5bGU+XG4vLyAgIDwvRnJhZ21lbnQ+XG4vLyApXG4iXX0= */\n/*@ sourceURL=src/next/components/Button.js */"
  }));
}; //
// export const BuyButton = ({ wp, url, children, ...props }) => (
//   <Fragment>
//     <Button variant="default" {...props}>{children || 'Купить'}</Button>
//     <style jsx>{`
//       .box {
//         line-height: 1rem;
//       }
//
//       .box :global(svg) {
//         width: 1rem;
//         height: 1rem;
//         fill: #fff;
//         margin-right: 1rem;
//       }
//     `}</style>
//   </Fragment>
// )

/***/ }),

/***/ "./components/Frow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Frow.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




var Frow = function Frow(_ref) {
  var container = _ref.container,
      nonfluid = _ref.nonfluid,
      gutters = _ref.gutters,
      row = _ref.row,
      column = _ref.column,
      centered = _ref.centered,
      justify = _ref.justify,
      items = _ref.items,
      content = _ref.content,
      nowrap = _ref.nowrap,
      inline = _ref.inline,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      visible = _ref.visible,
      hidden = _ref.hidden,
      myself = _ref.myself,
      grow = _ref.grow,
      shrink = _ref.shrink,
      _ref$component = _ref.component,
      Tag = _ref$component === void 0 ? 'div' : _ref$component,
      hug = _ref.hug,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["container", "nonfluid", "gutters", "row", "column", "centered", "justify", "items", "content", "nowrap", "inline", "xs", "sm", "md", "lg", "visible", "hidden", "myself", "grow", "shrink", "component", "hug", "className", "style", "children"]);

  // if(React.Children.count(children) === 0) {
  //   return null
  // }
  var config = [];
  container && config.push(nonfluid ? 'frow-container' : 'frow');
  gutters && config.push('gutters');
  row && config.push(typeof row === 'string' ? "row-".concat(row) : 'direction-row');
  column && config.push(typeof column === 'string' ? "column-".concat(column) : 'direction-column');
  centered && config.push(column ? 'centered-column' : 'centered');
  justify && config.push("justify-".concat(justify));
  items && config.push("items-".concat(items));
  content && config.push("content-".concat(content));
  nowrap && config.push('nowrap');
  inline && config.push('inline');
  xs && config.push("col-xs-".concat(xs === 'auto' ? 'auto' : xs.replace("/", "-")));
  sm && config.push("col-sm-".concat(sm === 'auto' ? 'auto' : sm.replace("/", "-")));
  md && config.push("col-md-".concat(md === 'auto' ? 'auto' : md.replace("/", "-")));
  lg && config.push("col-lg-".concat(lg === 'auto' ? 'auto' : lg.replace("/", "-")));
  visible && visible.forEach(function (item) {
    return config.push("visible-".concat(item));
  });
  hidden && hidden.forEach(function (item) {
    return config.push("hidden-".concat(item));
  });
  myself && config.push("self-".concat(myself));
  className && config.push(className);

  var flexedStyle = _objectSpread({}, style, {
    flexGrow: grow,
    flexShrink: shrink
  });

  if (hug || __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.count(children) > 1) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
      className: config.join(' '),
      style: flexedStyle
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }), children);
  } else {
    var child = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(children);

    var _child$props = child.props,
        childClassName = _child$props.className,
        childStyle = _child$props.style,
        childProps = _objectWithoutProperties(_child$props, ["className", "style"]);

    childClassName && config.push(childClassName);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, _objectSpread({
      className: config.join(' '),
      style: _objectSpread({}, flexedStyle, childStyle)
    }, props, childProps));
  }
};

Frow.propTypes = {
  container: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  nonfluid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  gutters: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['center', 'start', 'end', 'between', 'around'])]),
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['center', 'start', 'end'])]),
  centered: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  justify: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['center', 'start', 'end', 'between', 'around']),
  items: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['center', 'start', 'end', 'stretch', 'baseline']),
  content: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['center', 'start', 'end', 'between', 'around']),
  nowrap: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  xs: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  sm: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  md: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  lg: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element
};
/* harmony default export */ __webpack_exports__["a"] = (Frow);

/***/ }),

/***/ "./components/Head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_config__ = __webpack_require__("next/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_config__);
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Head.js";


 // import { string, object } from 'prop-types'

var _getConfig = __WEBPACK_IMPORTED_MODULE_2_next_config___default()(),
    siteUrl = _getConfig.publicRuntimeConfig.siteUrl;

var defaultDescription = 'Family Tree сделан родителями для родителей. Мы оказываем всестороннюю информационную и психологическую поддержку семьи.';
var defaultOGURL = siteUrl;
var defaultOGImage = "".concat(siteUrl, "/static/family3-logo-1024px.png");

var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Family Tree - ", props.title || ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: (props.description || defaultDescription).replace(/<(\/?|[a-z]+)[^>]+?>/gi, ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: "".concat(siteUrl).concat(props.url === '/index' ? '/' : props.url) || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: "Family Tree".concat(props.title ? ' - ' + props.title : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: (props.description || defaultDescription).replace(/<(\/?|[a-z]+)[^>]+?>/gi, ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:site",
    content: "".concat(siteUrl).concat(props.url === '/index' ? '/' : props.url) || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage && "".concat(siteUrl).concat(props.ogImage.file) || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage && "".concat(siteUrl).concat(props.ogImage.file) || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: props.ogImage && props.ogImage.width || '512',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: props.ogImage && props.ogImage.height || '348',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
}; //
// Head.propTypes = {
//   title: string,
//   description: string,
//   url: string,
//   ogImage: object
// }


/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "./components/HomepageSlider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WPLink__ = __webpack_require__("./components/WPLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_utils__ = __webpack_require__("./lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Slider__ = __webpack_require__("./components/Slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Icons__ = __webpack_require__("./components/Icons.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/HomepageSlider.js";








/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var items = _ref.items;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Slider__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Slider__["a" /* default */].Other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, function (_ref2) {
    var active = _ref2.active;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Frow__["a" /* default */], {
      hidden: ["xs", "sm"],
      container: true,
      row: "center",
      nowrap: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]]) + " " + "dots-box"
    }, items.map(function (_, i) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]]) + " " + "dot".concat(i === active ? " active" : "")
      });
    })));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Slider__["a" /* default */].LeftArrow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, function (_ref3) {
    var onClick = _ref3.onClick,
        active = _ref3.active;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]]) + " " + "left-arrow".concat(active ? " active" : "")
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["l" /* IconSolidArrowLeft */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    })));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Slider__["a" /* default */].Items, {
    xs: "100%",
    md: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, function (_ref4) {
    var active = _ref4.active;
    return items.map(function (item, i) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]]) + " " + "picture".concat(active === i ? " active" : "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WPLink__["a" /* default */], {
        wp: item.wp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Slider__["a" /* default */].Picture, {
        height: "52.4%",
        picture: Object(__WEBPACK_IMPORTED_MODULE_5__lib_utils__["a" /* acfImage */])(item.picture, "large"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]]) + " " + "caption"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]]) + " " + "header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WPLink__["a" /* default */], {
        wp: item.wp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        dangerouslySetInnerHTML: {
          __html: item.title
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]])
      }))), item.info && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, item.info)));
    });
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Slider__["a" /* default */].RightArrow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, function (_ref5) {
    var onClick = _ref5.onClick,
        active = _ref5.active;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]]) + " " + "right-arrow".concat(active ? " active" : "")
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3560683513", [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["m" /* IconSolidArrowRight */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    })));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3560683513",
    css: ".header.__jsx-style-dynamic-selector,.header.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:1.25rem;font-weight:300;color:".concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, ";margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), ";}.left-arrow.__jsx-style-dynamic-selector,.right-arrow.__jsx-style-dynamic-selector{position:absolute;padding-top:calc(26.2% - 1rem);padding-bottom:calc(26.2% - 1rem);width:calc(2rem + 14px);top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:2;opacity:0;-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear;padding-left:7px;padding-right:7px;cursor:pointer;}.left-arrow.active.__jsx-style-dynamic-selector,.right-arrow.active.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear;}.left-arrow.__jsx-style-dynamic-selector{left:0;}.right-arrow.__jsx-style-dynamic-selector{right:0;}.left-arrow.__jsx-style-dynamic-selector button,.right-arrow.__jsx-style-dynamic-selector button{border:none;padding:0;background:none;cursor:pointer;}.left-arrow.__jsx-style-dynamic-selector svg,.right-arrow.__jsx-style-dynamic-selector svg{width:2rem;height:2rem;fill:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, ";}@media (min-width:992px){.header.__jsx-style-dynamic-selector,.header.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:1.33333rem;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), ";}.left-arrow.__jsx-style-dynamic-selector,.right-arrow.__jsx-style-dynamic-selector{width:calc(2.22222rem + 10px);}.left-arrow.__jsx-style-dynamic-selector{padding-left:10px;}.right-arrow.__jsx-style-dynamic-selector{padding-right:10px;}.left-arrow.__jsx-style-dynamic-selector svg,.right-arrow.__jsx-style-dynamic-selector svg{width:2.22222rem;height:2.22222rem;}.caption.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), ";}.dots-box.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;padding-top:calc(56.2% + 1rem);z-index:0;}.dot.__jsx-style-dynamic-selector{position:relative;background-color:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, ";border-radius:0.25rem;width:0.5rem;height:0.5rem;margin:0 0.27778rem;-webkit-transition:background-color 0.2s linear;transition:background-color 0.2s linear;}.dot.active.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvSG9tZXBhZ2VTbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVnQixBQUkyQixBQVFBLEFBa0JSLEFBS0gsQUFJQyxBQUtJLEFBUUQsQUFRWSxBQU1TLEFBSVosQUFJQyxBQUtGLEFBS3VCLEFBSXRCLEFBU0EsQUFVNEIsT0F2RWxELENBSUEsRUFUaUMsQ0FzQm5CLENBUkYsS0FtQ1UsQ0EzRUosQUFRZSxBQTBEL0IsQUFrQlEsQUFTd0MsQ0F2QmhELEVBZDZDLENBZjdCLENBUWtCLENBb0N6QixNQXZCVCxDQXdCYSxHQXJGc0IsQ0EyRW5DLEdBbENlLEVBc0NmLEVBT2lDLElBZ0JqQyxHQTlGa0MsSUFrQ3BDLElBT0EsT0FPRSxBQXFDd0IsS0E1Rm1CLElBc0YvQixPQTdEZCxHQWpCMEIsQUErRXhCLEdBTWUsYUFDQyxRQXJGVixLQVJSLENBU2UsQUFxRlMsb0JBQ29CLHNEQXJGdkIsa0NBc0ZuQiwyREFyRnVCLG1HQUNiLFVBQ0EsVUFDcUIsc0VBQ2QsaUJBQ0Msa0JBQ0gsZUFDakIiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9Ib21lcGFnZVNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBXUExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvV1BMaW5rXCI7XG5pbXBvcnQgRnJvdyBmcm9tIFwiLi9Gcm93XCI7XG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgYWNmSW1hZ2UgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NsaWRlclwiO1xuaW1wb3J0IHsgSWNvblNvbGlkQXJyb3dMZWZ0LCBJY29uU29saWRBcnJvd1JpZ2h0IH0gZnJvbSBcIi4vSWNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgaXRlbXMgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPFNsaWRlcj5cbiAgICAgIDxTbGlkZXIuT3RoZXI+XG4gICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxuICAgICAgICAgIDxGcm93IGhpZGRlbj17W1wieHNcIiwgXCJzbVwiXX0gY29udGFpbmVyIHJvdz1cImNlbnRlclwiIG5vd3JhcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90cy1ib3hcIj5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRvdCR7aSA9PT0gYWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICl9XG4gICAgICA8L1NsaWRlci5PdGhlcj5cbiAgICAgIDxTbGlkZXIuTGVmdEFycm93PlxuICAgICAgICB7KHsgb25DbGljaywgYWN0aXZlIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGVmdC1hcnJvdyR7YWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgPEljb25Tb2xpZEFycm93TGVmdCAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1NsaWRlci5MZWZ0QXJyb3c+XG4gICAgICA8U2xpZGVyLkl0ZW1zIHhzPVwiMTAwJVwiIG1kPVwiMTAwJVwiPlxuICAgICAgICB7KHsgYWN0aXZlIH0pID0+XG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBpY3R1cmUke2FjdGl2ZSA9PT0gaSA/IFwiIGFjdGl2ZVwiIDogXCJcIn1gfSBrZXk9e2l9PlxuICAgICAgICAgICAgICA8V1BMaW5rIHdwPXtpdGVtLndwfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxTbGlkZXIuUGljdHVyZVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1Mi40JVwiXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e2FjZkltYWdlKGl0ZW0ucGljdHVyZSwgXCJsYXJnZVwiKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L1dQTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPFdQTGluayB3cD17aXRlbS53cH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZSB9fSAvPlxuICAgICAgICAgICAgICAgICAgPC9XUExpbms+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICB7aXRlbS5pbmZvICYmIDxGcmFnbWVudD57aXRlbS5pbmZvfTwvRnJhZ21lbnQ+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvU2xpZGVyLkl0ZW1zPlxuICAgICAgPFNsaWRlci5SaWdodEFycm93PlxuICAgICAgICB7KHsgb25DbGljaywgYWN0aXZlIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmlnaHQtYXJyb3cke2FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgIDxJY29uU29saWRBcnJvd1JpZ2h0IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvU2xpZGVyLlJpZ2h0QXJyb3c+XG4gICAgPC9TbGlkZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlYWRlcixcbiAgICAgIC5oZWFkZXIgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICR7VGhlbWUuY29sb3JzLnRleHREYXJrR3JheTJ9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAke1RoZW1lLnhzLnZyKDEpfTtcbiAgICAgIH1cblxuICAgICAgLmxlZnQtYXJyb3csXG4gICAgICAucmlnaHQtYXJyb3cge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDI2LjIlIC0gMXJlbSk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDI2LjIlIC0gMXJlbSk7XG4gICAgICAgIHdpZHRoOiBjYWxjKDJyZW0gKyAxNHB4KTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAubGVmdC1hcnJvdy5hY3RpdmUsXG4gICAgICAucmlnaHQtYXJyb3cuYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgLmxlZnQtYXJyb3cge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAucmlnaHQtYXJyb3cge1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgLmxlZnQtYXJyb3cgOmdsb2JhbChidXR0b24pLFxuICAgICAgLnJpZ2h0LWFycm93IDpnbG9iYWwoYnV0dG9uKSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAubGVmdC1hcnJvdyA6Z2xvYmFsKHN2ZyksXG4gICAgICAucmlnaHQtYXJyb3cgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgZmlsbDogJHtUaGVtZS5jb2xvcnMuYXJyb3dMaWdodEdyYXl9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmhlYWRlcixcbiAgICAgICAgLmhlYWRlciBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMzMzMzNyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtUaGVtZS5tZC52cigwLjI1KX07XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdC1hcnJvdyxcbiAgICAgICAgLnJpZ2h0LWFycm93IHtcbiAgICAgICAgICB3aWR0aDogY2FsYygyLjIyMjIycmVtICsgMTBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdC1hcnJvdyB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0LWFycm93IHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZnQtYXJyb3cgOmdsb2JhbChzdmcpLFxuICAgICAgICAucmlnaHQtYXJyb3cgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICB3aWR0aDogMi4yMjIyMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDIuMjIyMjJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHtUaGVtZS5tZC52cigyKX07XG4gICAgICAgIH1cblxuICAgICAgICAuZG90cy1ib3gge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyg1Ni4yJSArIDFyZW0pO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZG90IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtUaGVtZS5jb2xvcnMuc2xpZGVyRG90fTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIDAuMjc3NzhyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb3QuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1RoZW1lLmNvbG9ycy5zbGlkZXJEb3RBY3RpdmV9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcbiJdfQ== */\n/*@ sourceURL=src/next/components/HomepageSlider.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.textDarkGray2, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.arrowLightGray, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].md.vr(2), __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDot, __WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].colors.sliderDotActive]
  }));
});

/***/ }),

/***/ "./components/HomepageTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WPLink__ = __webpack_require__("./components/WPLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons__ = __webpack_require__("./components/Icons.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/HomepageTitle.js";






/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var title = _ref.title,
      link = _ref.link,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    container: true,
    justify: "between",
    items: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2455506899", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.arrowGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray]]]) + " " + "box ".concat(variant)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    grow: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    dangerouslySetInnerHTML: {
      __html: title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2455506899", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.arrowGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray]]]) + " " + "header list-header"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__WPLink__["a" /* default */], {
    wp: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2455506899", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.arrowGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray]]]) + " " + "all"
  }, "\u0412\u0441\u0435"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__WPLink__["a" /* default */], {
    wp: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2455506899", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.arrowGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray]]]) + " " + "all all-icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icons__["a" /* IconAngleArrowRight */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2455506899",
    css: ".box.__jsx-style-dynamic-selector{margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), ";}.all.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.all.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}.all.__jsx-style-dynamic-selector svg{height:16px;display:inline-block;margin-bottom:-2px;}.all-icon.__jsx-style-dynamic-selector{padding-left:0.6rem;}.header.__jsx-style-dynamic-selector{font-size:1.5rem;color:#000;font-weight:300;margin-bottom:0;line-height:1;}.default.__jsx-style-dynamic-selector .all.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray, ";}.default.__jsx-style-dynamic-selector .all.__jsx-style-dynamic-selector svg{fill:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.arrowGray, ";}.white.__jsx-style-dynamic-selector .header.__jsx-style-dynamic-selector{color:#fff;}.white.__jsx-style-dynamic-selector .all.__jsx-style-dynamic-selector{color:#fff;}.white.__jsx-style-dynamic-selector .all.__jsx-style-dynamic-selector svg{fill:#fff;}@media (min-width:992px){.box.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2.25), ";}.header.__jsx-style-dynamic-selector{font-size:2.22222rem;color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray, ";font-weight:300;}.all.__jsx-style-dynamic-selector{font-size:0.88889rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvSG9tZXBhZ2VUaXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBR29ELEFBSXRCLEFBSUssQUFJZCxBQU1RLEFBSUgsQUFZa0IsQUFJRCxBQUl2QixBQUlBLEFBSUQsQUFLbUMsQUFJdEIsQUFNQSxVQWR6QixDQVJBLEFBSUEsQ0FsQ3VCLEtBVVYsR0FKYixDQXlDdUMsQUFNckMsT0ExQ2dCLEtBVkcsQ0F5QnJCLENBSkEsUUFsQ0EsQUF1REUsQ0EvQmdCLE1BcEJsQixFQVVBLElBOENvQixJQXBEcEIsQUFpQmdCLFlBb0NkLEVBbkNGIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvSG9tZXBhZ2VUaXRsZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgV1BMaW5rIGZyb20gJy4vV1BMaW5rJ1xuaW1wb3J0IHsgSWNvbkFuZ2xlQXJyb3dSaWdodCB9IGZyb20gJy4vSWNvbnMnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBsaW5rLCB2YXJpYW50ID0gJ2RlZmF1bHQnIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBqdXN0aWZ5PVwiYmV0d2VlblwiIGl0ZW1zPVwiZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJveCAkeyB2YXJpYW50IH1gfT5cbiAgICAgICAgPEZyb3cgZ3Jvdz1cIjEwXCI+PGgxIGNsYXNzTmFtZT1cImhlYWRlciBsaXN0LWhlYWRlclwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aXRsZX19Lz48L0Zyb3c+XG4gICAgICAgIDxGcm93PlxuICAgICAgICAgIDxXUExpbmsgd3A9e2xpbmt9PjxhIGNsYXNzTmFtZT1cImFsbFwiPtCS0YHQtTwvYT48L1dQTGluaz5cbiAgICAgICAgPC9Gcm93PlxuICAgICAgICA8RnJvdz5cbiAgICAgICAgICA8V1BMaW5rIHdwPXtsaW5rfT48YSBjbGFzc05hbWU9XCJhbGwgYWxsLWljb25cIj48SWNvbkFuZ2xlQXJyb3dSaWdodC8+PC9hPjwvV1BMaW5rPlxuICAgICAgICA8L0Zyb3c+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJveCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDIpIH07XG4gICAgICB9XG5cbiAgICAgIC5hbGwge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5hbGw6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgLmFsbCA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICAgIH1cblxuICAgICAgLmFsbC1pY29uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgfVxuXG4gICAgICAuZGVmYXVsdCAuaGVhZGVyIHtcblxuICAgICAgfVxuXG4gICAgICAuZGVmYXVsdCAuYWxsIHtcbiAgICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy50ZXh0RGFya0dyYXkgfTtcbiAgICAgIH1cblxuICAgICAgLmRlZmF1bHQgLmFsbCA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYXJyb3dHcmF5IH07XG4gICAgICB9XG5cbiAgICAgIC53aGl0ZSAuaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC53aGl0ZSAuYWxsIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC53aGl0ZSAuYWxsIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYm94IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigyLjI1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjIyMjIycmVtO1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dERhcmtHcmF5IH07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcbiJdfQ== */\n/*@ sourceURL=src/next/components/HomepageTitle.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.arrowGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textDarkGray]
  }));
});

/***/ }),

/***/ "./components/HyperComments.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WidgetCode__ = __webpack_require__("./components/WidgetCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppContext__ = __webpack_require__("./components/AppContext.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/HyperComments.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // class HyperComments extends Component {
//   componentDidMount() {
//     if(process.browser) {
//       this.initHyperComments()
//     }
//   }
//
//   attemptsCount = 0
//
//   initHyperComments = () => {
//     if(window.HC) {
//       window.HC.widget("Stream", { widget_id: hcWidgetId })
//     } else if(this.attemptsCount <= 30) {
//       this.attemptsCount = this.attemptsCount + 1
//       setTimeout(() => this.initHyperComments(), 1000)
//     }
//   }
//
//   render() {
//     return (
//      <AppContext.Consumer>{({ options }) => (
//        (options && options.hypercomments) && <div className="box">
//          <div id="hypercomments_widget"></div>
//        </div>
//      )}</AppContext.Consumer>
//    )
//   }
// }
// class HyperComments extends Component {
//   state = {
//     htmlContent: null,
//   }
//
//   insertedScripts = []
//
//   componentDidMount() {
//     if(process.browser) {
//       this.cleanHyperComments()
//       this.initHyperComments()
//     }
//   }
//
//   componentDidUpdate() {
//     if(process.browser) {
//       this.initHyperComments()
//     }
//   }
//
//   componentWillUnmount() {
//     if(process.browser) {
//       this.cleanHyperComments()
//       this.insertedScripts.forEach(el => el.parentNode && el.parentNode.removeChild(el))
//     }
//   }
//
//   initHyperComments = () => {
//     const { options } = this.props
//
//     // if(options && options.hypercomments) {
//       // console.log(options.hypercomments.match(/<script[\s\S]*?>([\s\S]*)<\/script>/i))
//       // console.log(/<([^/ ]+) ?[^>]+?>/gi.exec(options.hypercomments))
//       // console.log(stringMatchAll(/<([^/ ]+) ?[^>]+?>/gi, options.hypercomments))
//
//       // const scriptTags = stringMatchAll(/<script[\s\S]*?>([\s\S]*)<\/script>/gi, options.hypercomments)
//       // htmlContent = options.hypercomments.replace(/<script[\s\S]*?>[\s\S]*<\/script>/gi, '')
//       // scriptContent = scriptTags.map(script => btoa(script[1])).map(data => `<script defer src="data:text/javascript,${encodeURIComponent(data)}"></script>`).join("\n")
//       // scriptContent = scriptTags.map(script => btoa(script[1])).map(data => `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"></script>`).join("\n")
//
//       // console.log(htmlContent, scriptContent)
//     // }
//
//     if(options && options.hypercomments) {
//       if(!this.state.htmlContent) {
//         const htmlContent = options.hypercomments.replace(/<script[\s\S]*?>[\s\S]*<\/script>/gi, '')
//         this.setState({ htmlContent })
//       }
//        else {
//         // const firstScript = document.getElementsByTagName('script')[0]
//         const bodyEl = document.getElementsByTagName('body')[0]
//         const scriptTags = stringMatchAll(/<script[\s\S]*?>([\s\S]*)<\/script>/gi, options.hypercomments)
//
//         scriptTags.forEach(script => {
//           const scriptEl = document.createElement("script")
//           const scriptTxt = document.createTextNode(script[1])
//           scriptEl.appendChild(scriptTxt)
//
//           this.insertedScripts = [...this.insertedScripts, scriptEl]
//           // firstScript.parentNode.insertBefore(scriptEl, firstScript)
//           bodyEl.appendChild(scriptEl)
//         })
//       }
//     }
//   }
//
//   cleanHyperComments = () => {
//     [...document.getElementsByTagName('script')].filter(el => el.src.match(/hypercomments/)).forEach(el => el.parentNode.removeChild(el));
//     [...document.getElementsByTagName('link')].filter(el => el.href.match(/hypercomments/)).forEach(el => el.parentNode.removeChild(el))
//
//     delete window.HC
//     delete window._hcwp
//     delete window.HC_LOAD_INIT
//   }
//
//   render() {
//     return (
//        <div className="box">
//          {this.state.htmlContent && <div dangerouslySetInnerHTML={{__html: this.state.htmlContent}}/>}
//        </div>
//    )
//   }
// }

/*
<div dangerouslySetInnerHTML={{__html: options.hypercomments}}/>
*/

var cleanupWidget = function cleanupWidget() {
  __WEBPACK_IMPORTED_MODULE_1__WidgetCode__["a" /* default */].cleanupScripts(/hypercomments/);
  __WEBPACK_IMPORTED_MODULE_1__WidgetCode__["a" /* default */].cleanupLinks(/hypercomments/);
  __WEBPACK_IMPORTED_MODULE_1__WidgetCode__["a" /* default */].cleanupGlobals(['HC', '_hcwp', 'HC_LOAD_INIT']);
};

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__AppContext__["a" /* default */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, function (_ref) {
    var options = _ref.options;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WidgetCode__["a" /* default */], _extends({
      code: options && options.hypercomments,
      cleanup: cleanupWidget
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      }
    })));
  });
});

/***/ }),

/***/ "./components/Icons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_facebook_svg_sprite__ = __webpack_require__("./images/facebook.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_instagram_svg_sprite__ = __webpack_require__("./images/instagram.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_odnoklassniki_svg_sprite__ = __webpack_require__("./images/odnoklassniki.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_vk_svg_sprite__ = __webpack_require__("./images/vk.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_youtube_svg_sprite__ = __webpack_require__("./images/youtube.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_menu_svg_sprite__ = __webpack_require__("./images/menu.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_close_rounded_svg_sprite__ = __webpack_require__("./images/close-rounded.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_magnify_svg_sprite__ = __webpack_require__("./images/magnify.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_sliders_svg_sprite__ = __webpack_require__("./images/sliders.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_plus_svg_sprite__ = __webpack_require__("./images/plus.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_minus_svg_sprite__ = __webpack_require__("./images/minus.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_badge_discount_svg_sprite__ = __webpack_require__("./images/badge-discount.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_badge_free_svg_sprite__ = __webpack_require__("./images/badge-free.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_logo_ft_svg_sprite__ = __webpack_require__("./images/logo-ft.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_logo_ftc_svg_sprite__ = __webpack_require__("./images/logo-ftc.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_logo_ftt_svg_sprite__ = __webpack_require__("./images/logo-ftt.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_load_more_svg_sprite__ = __webpack_require__("./images/load-more.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_circle_arrow_left_svg_sprite__ = __webpack_require__("./images/circle-arrow-left.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__images_circle_arrow_right_svg_sprite__ = __webpack_require__("./images/circle-arrow-right.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__images_arrow_left_solid_svg_sprite__ = __webpack_require__("./images/arrow-left-solid.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__images_arrow_right_solid_svg_sprite__ = __webpack_require__("./images/arrow-right-solid.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__images_angle_left_solid_svg_sprite__ = __webpack_require__("./images/angle-left-solid.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__images_angle_right_solid_svg_sprite__ = __webpack_require__("./images/angle-right-solid.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__images_facebook_square_brands_svg_sprite__ = __webpack_require__("./images/facebook-square-brands.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__images_twitter_square_brands_svg_sprite__ = __webpack_require__("./images/twitter-square-brands.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__images_vk_square_brands_svg_sprite__ = __webpack_require__("./images/vk-square-brands.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__images_odnoklassniki_square_brands_svg_sprite__ = __webpack_require__("./images/odnoklassniki-square-brands.svg?sprite");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__images_facebook_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__images_instagram_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__images_odnoklassniki_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__images_vk_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__images_youtube_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__images_menu_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__images_close_rounded_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__images_magnify_svg_sprite__["a"]; });
/* unused harmony reexport IconSliders */
/* unused harmony reexport IconPlus */
/* unused harmony reexport IconMinus */
/* unused harmony reexport BadgeDiscount */
/* unused harmony reexport BadgeFree */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_13__images_logo_ft_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_14__images_logo_ftc_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_15__images_logo_ftt_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_16__images_load_more_svg_sprite__["a"]; });
/* unused harmony reexport IconCircleArrowLeft */
/* unused harmony reexport IconCircleArrowRight */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_19__images_arrow_left_solid_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_20__images_arrow_right_solid_svg_sprite__["a"]; });
/* unused harmony reexport IconAngleArrowLeft */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_22__images_angle_right_solid_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_23__images_facebook_square_brands_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_24__images_twitter_square_brands_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_25__images_vk_square_brands_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_26__images_odnoklassniki_square_brands_svg_sprite__["a"]; });
// import React from 'react'
// import Theme from '../styles/theme'


 // import IconTwitter from '../images/twitter.svg?sprite'



























/***/ }),

/***/ "./components/Modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCloseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalCloseButtonMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transition_group__ = __webpack_require__("react-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Icons__ = __webpack_require__("./components/Icons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Button__ = __webpack_require__("./components/Button.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Modal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var ModalCloseButton = function ModalCloseButton(_ref) {
  var onClick = _ref.onClick;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Frow__["a" /* default */], {
    hidden: ["xs", "sm"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2584963622", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.gray2]]]) + " " + "btn-close"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2584963622", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.gray2]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["b" /* IconClose */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2584963622",
    css: ".btn-close.__jsx-style-dynamic-selector{position:absolute;top:4rem;right:1rem;}.btn-close.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{border:none;margin:0;padding:0;background:none;cursor:pointer;}.btn-close.__jsx-style-dynamic-selector svg{width:1.5rem;height:1.5rem;fill:".concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.gray2, ";}@media (min-width:992px){.btn-close.__jsx-style-dynamic-selector{top:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWdCLEFBRzJCLEFBTU4sQUFRQyxBQU9GLFNBQ1gsR0FmUyxDQVFLLEtBZEwsR0FPQyxNQU5DLEFBY3VCLElBUGxCLE9BTmxCLFNBT2lCLGNBT2pCLENBTkEiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9Nb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IEljb25DbG9zZSB9IGZyb20gJy4vSWNvbnMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5leHBvcnQgY29uc3QgTW9kYWxDbG9zZUJ1dHRvbiA9ICh7IG9uQ2xpY2sgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEZyb3cgaGlkZGVuPXtbXCJ4c1wiLCBcInNtXCJdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNsb3NlXCI+PGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvbkNsb3NlLz48L2J1dHRvbj48L2Rpdj5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJ0bi1jbG9zZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA0cmVtO1xuICAgICAgICByaWdodDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1jbG9zZSBidXR0b24ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuYnRuLWNsb3NlIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuZ3JheTJ9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmJ0bi1jbG9zZSB7XG4gICAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgTW9kYWxDbG9zZUJ1dHRvbk1vYmlsZSA9ICh7IG9uQ2xpY2sgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgICAgIDxGcm93IGhpZGRlbj17W1wibWRcIiwgXCJsZ1wiXX0gaHVnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PtCX0LDQutGA0YvRgtGMPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBpbjogZmFsc2UsXG4gIH1cblxuICBtb3VudE5vZGUgPSBudWxsXG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZihwcm9wcy5vcGVuID09PSBzdGF0ZS5vcGVuKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmKHByb3BzLm9wZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvcGVuOiB0cnVlLCBpbjogdHJ1ZSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbjogZmFsc2UgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmKHRoaXMubW91bnROb2RlICE9PSBudWxsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubW91bnROb2RlKVxuICAgICAgdGhpcy5tb3VudE5vZGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY2xvc2VUYXBwZWQgPSAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbjogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBtb2RhbENsb3NlZCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZighcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmKCF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGlmKHRoaXMubW91bnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb3VudE5vZGUpXG4gICAgICAgIHRoaXMubW91bnROb2RlID0gbnVsbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmKHRoaXMubW91bnROb2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1vdW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubW91bnROb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIGluPXt0aGlzLnN0YXRlLmlufVxuICAgICAgICAgICAgdGltZW91dD17MzAwfVxuICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICBvbkV4aXRlZD17dGhpcy5tb2RhbENsb3NlZH1cbiAgICAgICAgICA+eygpID0+IChcbiAgICAgICAgICAgIDxGcm93IGNvbnRhaW5lciBpdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1tZXJcIiBvbkNsaWNrPXt0aGlzLmNsb3NlVGFwcGVkfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgICl9PC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5kaW1tZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpbW1lciA+IDpnbG9iYWwoKikge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAzNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLWFwcGVhcixcbiAgICAgICAgICAgIC5tb2RhbC1lbnRlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1hcHBlYXItYWN0aXZlLFxuICAgICAgICAgICAgLm1vZGFsLWVudGVyLWFjdGl2ZSxcbiAgICAgICAgICAgIC5tb2RhbC1lbnRlci1kb25lLFxuICAgICAgICAgICAgLm1vZGFsLWV4aXQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtZXhpdC1hY3RpdmUsXG4gICAgICAgICAgICAubW9kYWwtZXhpdC1kb25lIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApLFxuICAgICAgdGhpcy5tb3VudE5vZGUpXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=src/next/components/Modal.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.gray2]
  }));
};
var ModalCloseButtonMobile = function ModalCloseButtonMobile(_ref2) {
  var onClick = _ref2.onClick;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Frow__["a" /* default */], {
    hidden: ["md", "lg"],
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    className: "jsx-4035708399" + " " + "box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Button__["b" /* default */], {
    variant: "white",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4035708399",
    css: ".box.jsx-4035708399{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media (min-width:992px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RnQixBQUdzQiwwRUFDTSw2RkFDSSxtR0FDekIiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9Nb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IEljb25DbG9zZSB9IGZyb20gJy4vSWNvbnMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5leHBvcnQgY29uc3QgTW9kYWxDbG9zZUJ1dHRvbiA9ICh7IG9uQ2xpY2sgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEZyb3cgaGlkZGVuPXtbXCJ4c1wiLCBcInNtXCJdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNsb3NlXCI+PGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvbkNsb3NlLz48L2J1dHRvbj48L2Rpdj5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJ0bi1jbG9zZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA0cmVtO1xuICAgICAgICByaWdodDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1jbG9zZSBidXR0b24ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuYnRuLWNsb3NlIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuZ3JheTJ9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmJ0bi1jbG9zZSB7XG4gICAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgTW9kYWxDbG9zZUJ1dHRvbk1vYmlsZSA9ICh7IG9uQ2xpY2sgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgICAgIDxGcm93IGhpZGRlbj17W1wibWRcIiwgXCJsZ1wiXX0gaHVnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PtCX0LDQutGA0YvRgtGMPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBpbjogZmFsc2UsXG4gIH1cblxuICBtb3VudE5vZGUgPSBudWxsXG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZihwcm9wcy5vcGVuID09PSBzdGF0ZS5vcGVuKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmKHByb3BzLm9wZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvcGVuOiB0cnVlLCBpbjogdHJ1ZSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbjogZmFsc2UgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmKHRoaXMubW91bnROb2RlICE9PSBudWxsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubW91bnROb2RlKVxuICAgICAgdGhpcy5tb3VudE5vZGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY2xvc2VUYXBwZWQgPSAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbjogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBtb2RhbENsb3NlZCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZighcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmKCF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGlmKHRoaXMubW91bnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb3VudE5vZGUpXG4gICAgICAgIHRoaXMubW91bnROb2RlID0gbnVsbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmKHRoaXMubW91bnROb2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1vdW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubW91bnROb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIGluPXt0aGlzLnN0YXRlLmlufVxuICAgICAgICAgICAgdGltZW91dD17MzAwfVxuICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICBvbkV4aXRlZD17dGhpcy5tb2RhbENsb3NlZH1cbiAgICAgICAgICA+eygpID0+IChcbiAgICAgICAgICAgIDxGcm93IGNvbnRhaW5lciBpdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1tZXJcIiBvbkNsaWNrPXt0aGlzLmNsb3NlVGFwcGVkfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgICl9PC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5kaW1tZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpbW1lciA+IDpnbG9iYWwoKikge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAzNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLWFwcGVhcixcbiAgICAgICAgICAgIC5tb2RhbC1lbnRlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1hcHBlYXItYWN0aXZlLFxuICAgICAgICAgICAgLm1vZGFsLWVudGVyLWFjdGl2ZSxcbiAgICAgICAgICAgIC5tb2RhbC1lbnRlci1kb25lLFxuICAgICAgICAgICAgLm1vZGFsLWV4aXQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtZXhpdC1hY3RpdmUsXG4gICAgICAgICAgICAubW9kYWwtZXhpdC1kb25lIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApLFxuICAgICAgdGhpcy5tb3VudE5vZGUpXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=src/next/components/Modal.js */"
  }));
};

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref3;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref3 = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref3, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false,
        in: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "mountNode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(_assertThisInitialized(_this), "closeTapped", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.target === e.currentTarget) {
          _this.setState({
            in: false
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "modalClosed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          open: false
        });

        _this.props.onClose();
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mountNode !== null) {
        document.body.removeChild(this.mountNode);
        this.mountNode = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      if (!process.browser) {
        return null;
      }

      if (!this.state.open) {
        if (this.mountNode !== null) {
          document.body.removeChild(this.mountNode);
          this.mountNode = null;
        }

        return null;
      }

      if (this.mountNode === null) {
        this.mountNode = document.createElement('div');
        document.body.appendChild(this.mountNode);
      }

      return __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.createPortal(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_transition_group__["CSSTransition"], {
        classNames: "modal",
        "in": this.state.in,
        timeout: 300,
        appear: true,
        onExited: this.modalClosed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, function () {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Frow__["a" /* default */], {
          container: true,
          items: "center",
          justify: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          onClick: _this2.closeTapped,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1029915360", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.borderRadius.default]]]) + " " + "dimmer"
        }, children));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1029915360",
        css: ".dimmer.__jsx-style-dynamic-selector{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0.3);z-index:10000;}.dimmer.__jsx-style-dynamic-selector>*{position:relative;border-radius:".concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.borderRadius.default, ";box-shadow:0 12px 36px rgba(0,0,0,0.2);}.modal-appear.__jsx-style-dynamic-selector,.modal-enter.__jsx-style-dynamic-selector{opacity:0;-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear;}.modal-appear-active.__jsx-style-dynamic-selector,.modal-enter-active.__jsx-style-dynamic-selector,.modal-enter-done.__jsx-style-dynamic-selector,.modal-exit.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear;}.modal-exit-active.__jsx-style-dynamic-selector,.modal-exit-done.__jsx-style-dynamic-selector{opacity:0;-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear;}@media (min-width:992px){.box.__jsx-style-dynamic-selector{border-radius:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.borderRadius.default, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUpzQixBQUc4QixBQVVHLEFBT1IsQUFRQSxBQU1BLEFBTW1DLFVBbkJkLEFBUUEsQUFNQSxLQS9CekIsR0FVcUMsR0FUbEMsU0FDRixPQUNDLE1Ba0NSLEVBakM4QixnQkFPUyxXQU56QixRQWFoQixBQVFBLEFBTUEsTUExQkEsY0FNQSIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL01vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgSWNvbkNsb3NlIH0gZnJvbSAnLi9JY29ucydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5cbmV4cG9ydCBjb25zdCBNb2RhbENsb3NlQnV0dG9uID0gKHsgb25DbGljayB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyBoaWRkZW49e1tcInhzXCIsIFwic21cIl19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tY2xvc2VcIj48YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PjxJY29uQ2xvc2UvPjwvYnV0dG9uPjwvZGl2PlxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYnRuLWNsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDRyZW07XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuYnRuLWNsb3NlIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5idG4tY2xvc2UgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5ncmF5Mn07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYnRuLWNsb3NlIHtcbiAgICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBNb2RhbENsb3NlQnV0dG9uTW9iaWxlID0gKHsgb25DbGljayB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICAgICAgPEZyb3cgaGlkZGVuPXtbXCJtZFwiLCBcImxnXCJdfSBodWc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIndoaXRlXCIgb25DbGljaz17b25DbGlja30+0JfQsNC60YDRi9GC0Yw8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGluOiBmYWxzZSxcbiAgfVxuXG4gIG1vdW50Tm9kZSA9IG51bGxcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmKHByb3BzLm9wZW4gPT09IHN0YXRlLm9wZW4pIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYocHJvcHMub3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG9wZW46IHRydWUsIGluOiB0cnVlIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGluOiBmYWxzZSB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYodGhpcy5tb3VudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb3VudE5vZGUpXG4gICAgICB0aGlzLm1vdW50Tm9kZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjbG9zZVRhcHBlZCA9IChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIG1vZGFsQ2xvc2VkID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGlmKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgaWYodGhpcy5tb3VudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1vdW50Tm9kZSlcbiAgICAgICAgdGhpcy5tb3VudE5vZGUgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYodGhpcy5tb3VudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMubW91bnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tb3VudE5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWVzPVwibW9kYWxcIlxuICAgICAgICAgICAgaW49e3RoaXMuc3RhdGUuaW59XG4gICAgICAgICAgICB0aW1lb3V0PXszMDB9XG4gICAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICAgIG9uRXhpdGVkPXt0aGlzLm1vZGFsQ2xvc2VkfVxuICAgICAgICAgID57KCkgPT4gKFxuICAgICAgICAgICAgPEZyb3cgY29udGFpbmVyIGl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbW1lclwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VUYXBwZWR9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICAgKX08L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmRpbW1lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGltbWVyID4gOmdsb2JhbCgqKSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDM2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtYXBwZWFyLFxuICAgICAgICAgICAgLm1vZGFsLWVudGVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLWFwcGVhci1hY3RpdmUsXG4gICAgICAgICAgICAubW9kYWwtZW50ZXItYWN0aXZlLFxuICAgICAgICAgICAgLm1vZGFsLWVudGVyLWRvbmUsXG4gICAgICAgICAgICAubW9kYWwtZXhpdCB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1leGl0LWFjdGl2ZSxcbiAgICAgICAgICAgIC5tb2RhbC1leGl0LWRvbmUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICksXG4gICAgICB0aGlzLm1vdW50Tm9kZSlcbiAgfVxufVxuIl19 */\n/*@ sourceURL=src/next/components/Modal.js */"),
        dynamic: [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.borderRadius.default]
      })), this.mountNode);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.open === state.open) {
        return null;
      }

      if (props.open === true) {
        return _objectSpread({}, state, {
          open: true,
          in: true
        });
      } else {
        return _objectSpread({}, state, {
          in: false
        });
      }
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Object.defineProperty(_default, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    onClose: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired
  }
});


/***/ }),

/***/ "./components/ProductPrices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getMaxActiveDiscount */
/* unused harmony export getActivePrice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListItemPrices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TicketButton__ = __webpack_require__("./components/TicketButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Frow__ = __webpack_require__("./components/Frow.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/ProductPrices.js";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import css from 'styled-jsx/css'
// import { priceFormatter, dateFormatter } from '../lib/utils'

var adaptDiscounts = function adaptDiscounts(discounts) {
  return discounts.map(function (discount) {
    var result = {
      from: discount.from.formatted,
      to: discount.to.formatted,
      status: discount.status
    };

    switch (discount.status) {
      case 'past':
        result = _objectSpread({}, result, {
          variant: 'gray',
          price: {
            formatted: discount.price.formatted,
            classname: 'outdated-price'
          },
          label: {
            classname: 'outdated-label',
            value: 'Просрочено'
          }
        });
        break;

      case 'future':
        result = _objectSpread({}, result, {
          variant: 'gray',
          price: {
            formatted: discount.price.formatted,
            classname: 'future-price'
          },
          label: {
            classname: 'future-label',
            value: 'Скоро'
          }
        });
        break;

      case 'active':
        result = _objectSpread({}, result, {
          price: {
            formatted: discount.price.formatted,
            classname: 'active-price'
          },
          variant: discount.price.value === 0 ? 'green' : 'default',
          label: discount.price.value === 0 ? null : {
            classname: 'active-label',
            value: 'Купить'
          }
        });
        break;

      default:
    }

    return result;
  });
};

var adaptFullPrice = function adaptFullPrice(full_price) {
  return {
    status: full_price.status,
    price: {
      formatted: full_price.price.formatted,
      classname: full_price.status === 'active' ? 'active-price' : 'future-price'
    },
    from: full_price.from && full_price.from.formatted,
    variant: full_price.status !== 'active' ? 'gray' : full_price.price.value === 0 ? 'green' : 'default',
    label: full_price.price.value === 0 ? null : {
      classname: full_price.status === 'active' ? 'active-label' : 'future-label',
      value: full_price.status === 'active' ? 'Купить' : 'Скоро'
    }
  };
};

var getMaxActiveDiscount = function getMaxActiveDiscount(discounts) {
  return discounts.filter(function (discount) {
    return discount.status === 'active';
  }).reduce(function (result, current) {
    return result === null || current.price.value > result.price.value ? current : result;
  }, null);
};
var getActivePrice = function getActivePrice(prices) {
  var activeDiscount = getMaxActiveDiscount(prices.discounts); //prices.discounts.filter(discount => discount.status === 'active').reduce((result, current) => result === null || current.prcie > result.price ? current : result, null)

  return {
    fullPrice: {
      classname: prices.full_price.price.value === 0 ? 'free' : 'number',
      price: _objectSpread({}, prices.full_price.price)
    },
    activeDiscount: activeDiscount === null ? null : {
      classname: activeDiscount.price.value === 0 ? 'free' : 'number',
      price: _objectSpread({}, activeDiscount.price),
      coupon: activeDiscount.coupon
    },
    label: activeDiscount === null ? null : {
      value: "\u0434\u043E ".concat(activeDiscount.to.formatted)
    }
  };
};
var ProductsListItemPrices = function ProductsListItemPrices(_ref) {
  var prices = _ref.prices,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant;

  if (!prices) {
    return null;
  }

  var price = getActivePrice(prices);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    className: "jsx-2530717579" + " " + "box ".concat(variant)
  }, price.activeDiscount ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    className: "jsx-2530717579" + " " + "discounted"
  }, price.fullPrice.price.formatted), "\xA0", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    className: "jsx-2530717579" + " " + (price.activeDiscount.classname || "")
  }, price.activeDiscount.price.formatted)) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    className: "jsx-2530717579" + " " + (price.fullPrice.classname || "")
  }, price.fullPrice.price.formatted), " ", price.label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    className: "jsx-2530717579" + " " + "description"
  }, price.label.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2530717579",
    css: ".default.jsx-2530717579 .box.jsx-2530717579{font-size:1.33333rem;}.default.jsx-2530717579 .discounted.jsx-2530717579{color:#e02e12;font-weight:400;-webkit-text-decoration:line-through;text-decoration:line-through;}.default.jsx-2530717579 .free.jsx-2530717579{color:#198300;font-weight:700;}.default.jsx-2530717579 .number.jsx-2530717579{color:#e02e12;font-weight:700;}.default.jsx-2530717579 .description.jsx-2530717579{color:#737373;}.compact.jsx-2530717579 .box.jsx-2530717579{font-size:1rem;}.compact.jsx-2530717579 .discounted.jsx-2530717579{color:#e02e12;font-weight:400;-webkit-text-decoration:line-through;text-decoration:line-through;}.compact.jsx-2530717579 .free.jsx-2530717579{color:#198300;font-weight:700;}.compact.jsx-2530717579 .number.jsx-2530717579{color:#e02e12;font-weight:700;}.compact.jsx-2530717579 .description.jsx-2530717579{color:#737373;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvUHJvZHVjdFByaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RmtCLEFBR2dDLEFBSVAsQUFNQSxBQUtBLEFBS0EsQUFJQyxBQUlELEFBTUEsQUFLQSxBQUtBLGNBdkNFLEFBTUEsQUFLQSxBQUtsQixBQVFrQixBQU1BLEFBS0EsQUFLbEIsQ0FwQkEsTUF4QkEsU0FLK0IsQUFNL0IsQUFLQSxBQWErQixBQU0vQixBQUtBLGtFQWxDQSxBQXdCQSIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL1Byb2R1Y3RQcmljZXMuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IFRpY2tldEJ1dHRvbiBmcm9tICcuL1RpY2tldEJ1dHRvbidcbmltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbi8vIGltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG4vLyBpbXBvcnQgeyBwcmljZUZvcm1hdHRlciwgZGF0ZUZvcm1hdHRlciB9IGZyb20gJy4uL2xpYi91dGlscydcblxuY29uc3QgYWRhcHREaXNjb3VudHMgPSAoZGlzY291bnRzKSA9PiBkaXNjb3VudHMubWFwKGRpc2NvdW50ID0+IHtcbiAgbGV0IHJlc3VsdCA9IHsgZnJvbTogZGlzY291bnQuZnJvbS5mb3JtYXR0ZWQsIHRvOiBkaXNjb3VudC50by5mb3JtYXR0ZWQsIHN0YXR1czogZGlzY291bnQuc3RhdHVzIH1cblxuICBzd2l0Y2ggKGRpc2NvdW50LnN0YXR1cykge1xuICAgIGNhc2UgJ3Bhc3QnOlxuICAgICAgcmVzdWx0ID0gey4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdncmF5JyxcbiAgICAgICAgICAgICAgICAgIHByaWNlOiB7Zm9ybWF0dGVkOiBkaXNjb3VudC5wcmljZS5mb3JtYXR0ZWQsIGNsYXNzbmFtZTogJ291dGRhdGVkLXByaWNlJ30sXG4gICAgICAgICAgICAgICAgICBsYWJlbDoge2NsYXNzbmFtZTogJ291dGRhdGVkLWxhYmVsJywgdmFsdWU6ICfQn9GA0L7RgdGA0L7Rh9C10L3Qvid9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZnV0dXJlJzpcbiAgICAgIHJlc3VsdCA9IHsuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnZ3JheScsXG4gICAgICAgICAgICAgICAgICBwcmljZToge2Zvcm1hdHRlZDogZGlzY291bnQucHJpY2UuZm9ybWF0dGVkLCBjbGFzc25hbWU6ICdmdXR1cmUtcHJpY2UnfSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiB7Y2xhc3NuYW1lOiAnZnV0dXJlLWxhYmVsJywgdmFsdWU6ICfQodC60L7RgNC+J31cbiAgICAgICAgICAgICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgcmVzdWx0ID0gey4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgIHByaWNlOiB7Zm9ybWF0dGVkOiBkaXNjb3VudC5wcmljZS5mb3JtYXR0ZWQsIGNsYXNzbmFtZTogJ2FjdGl2ZS1wcmljZSd9LFxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogZGlzY291bnQucHJpY2UudmFsdWUgPT09IDAgPyAnZ3JlZW4nIDogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGRpc2NvdW50LnByaWNlLnZhbHVlID09PSAwID8gbnVsbCA6IHtjbGFzc25hbWU6ICdhY3RpdmUtbGFiZWwnLCB2YWx1ZTogJ9Ca0YPQv9C40YLRjCd9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59KVxuXG5jb25zdCBhZGFwdEZ1bGxQcmljZSA9IChmdWxsX3ByaWNlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiBmdWxsX3ByaWNlLnN0YXR1cyxcbiAgICBwcmljZToge1xuICAgICAgZm9ybWF0dGVkOiBmdWxsX3ByaWNlLnByaWNlLmZvcm1hdHRlZCxcbiAgICAgIGNsYXNzbmFtZTogZnVsbF9wcmljZS5zdGF0dXMgPT09ICdhY3RpdmUnID8gJ2FjdGl2ZS1wcmljZScgOiAnZnV0dXJlLXByaWNlJyxcbiAgICB9LFxuICAgIGZyb206IGZ1bGxfcHJpY2UuZnJvbSAmJiBmdWxsX3ByaWNlLmZyb20uZm9ybWF0dGVkLFxuICAgIHZhcmlhbnQ6IGZ1bGxfcHJpY2Uuc3RhdHVzICE9PSAnYWN0aXZlJyA/ICdncmF5JyA6IGZ1bGxfcHJpY2UucHJpY2UudmFsdWUgPT09IDAgPyAnZ3JlZW4nIDogJ2RlZmF1bHQnLFxuICAgIGxhYmVsOiBmdWxsX3ByaWNlLnByaWNlLnZhbHVlID09PSAwID8gbnVsbCA6IHtcbiAgICAgIGNsYXNzbmFtZTogZnVsbF9wcmljZS5zdGF0dXMgPT09ICdhY3RpdmUnID8gJ2FjdGl2ZS1sYWJlbCcgOiAnZnV0dXJlLWxhYmVsJyxcbiAgICAgIHZhbHVlOiBmdWxsX3ByaWNlLnN0YXR1cyA9PT0gJ2FjdGl2ZScgPyAn0JrRg9C/0LjRgtGMJyA6ICfQodC60L7RgNC+JyxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldE1heEFjdGl2ZURpc2NvdW50ID0gKGRpc2NvdW50cykgPT4gZGlzY291bnRzLmZpbHRlcihkaXNjb3VudCA9PiBkaXNjb3VudC5zdGF0dXMgPT09ICdhY3RpdmUnKS5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCkgPT4gcmVzdWx0ID09PSBudWxsIHx8IGN1cnJlbnQucHJpY2UudmFsdWUgPiByZXN1bHQucHJpY2UudmFsdWUgPyBjdXJyZW50IDogcmVzdWx0LCBudWxsKVxuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlUHJpY2UgPSAocHJpY2VzKSA9PiB7XG4gIGNvbnN0IGFjdGl2ZURpc2NvdW50ID0gZ2V0TWF4QWN0aXZlRGlzY291bnQocHJpY2VzLmRpc2NvdW50cykgLy9wcmljZXMuZGlzY291bnRzLmZpbHRlcihkaXNjb3VudCA9PiBkaXNjb3VudC5zdGF0dXMgPT09ICdhY3RpdmUnKS5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCkgPT4gcmVzdWx0ID09PSBudWxsIHx8IGN1cnJlbnQucHJjaWUgPiByZXN1bHQucHJpY2UgPyBjdXJyZW50IDogcmVzdWx0LCBudWxsKVxuXG4gIHJldHVybiB7XG4gICAgZnVsbFByaWNlOiB7XG4gICAgICBjbGFzc25hbWU6IHByaWNlcy5mdWxsX3ByaWNlLnByaWNlLnZhbHVlID09PSAwID8gJ2ZyZWUnIDogJ251bWJlcicsXG4gICAgICBwcmljZTogeyAuLi5wcmljZXMuZnVsbF9wcmljZS5wcmljZSB9LFxuICAgIH0sXG4gICAgYWN0aXZlRGlzY291bnQ6IGFjdGl2ZURpc2NvdW50ID09PSBudWxsID8gbnVsbCA6IHtcbiAgICAgIGNsYXNzbmFtZTogYWN0aXZlRGlzY291bnQucHJpY2UudmFsdWUgPT09IDAgPyAnZnJlZScgOiAnbnVtYmVyJyxcbiAgICAgIHByaWNlOiB7IC4uLmFjdGl2ZURpc2NvdW50LnByaWNlIH0sXG4gICAgICBjb3Vwb246IGFjdGl2ZURpc2NvdW50LmNvdXBvbixcbiAgICB9LFxuICAgIGxhYmVsOiBhY3RpdmVEaXNjb3VudCA9PT0gbnVsbCA/IG51bGwgOiB7XG4gICAgICB2YWx1ZTogYNC00L4gJHthY3RpdmVEaXNjb3VudC50by5mb3JtYXR0ZWR9YCxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzTGlzdEl0ZW1QcmljZXMgPSAoeyBwcmljZXMsIHZhcmlhbnQgPSAnZGVmYXVsdCcgfSkgPT4ge1xuICBpZighcHJpY2VzKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHByaWNlID0gZ2V0QWN0aXZlUHJpY2UocHJpY2VzKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bib3ggJHsgdmFyaWFudCB9YH0+XG4gICAgICB7cHJpY2UuYWN0aXZlRGlzY291bnRcbiAgICAgICAgPyA8RnJhZ21lbnQ+PHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnRlZFwiPntwcmljZS5mdWxsUHJpY2UucHJpY2UuZm9ybWF0dGVkfTwvc3Bhbj4mbmJzcDs8c3BhbiBjbGFzc05hbWU9e3ByaWNlLmFjdGl2ZURpc2NvdW50LmNsYXNzbmFtZX0+e3ByaWNlLmFjdGl2ZURpc2NvdW50LnByaWNlLmZvcm1hdHRlZH08L3NwYW4+PC9GcmFnbWVudD5cbiAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9e3ByaWNlLmZ1bGxQcmljZS5jbGFzc25hbWV9PntwcmljZS5mdWxsUHJpY2UucHJpY2UuZm9ybWF0dGVkfTwvc3Bhbj5cbiAgICAgIH0ge3ByaWNlLmxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3ByaWNlLmxhYmVsLnZhbHVlfTwvc3Bhbj59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5kZWZhdWx0IC5ib3gge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zMzMzM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWZhdWx0IC5kaXNjb3VudGVkIHtcbiAgICAgICAgICBjb2xvcjogI2UwMmUxMjtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlZmF1bHQgLmZyZWUge1xuICAgICAgICAgIGNvbG9yOiAjMTk4MzAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVmYXVsdCAubnVtYmVyIHtcbiAgICAgICAgICBjb2xvcjogI2UwMmUxMjtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlZmF1bHQgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogIzczNzM3MztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYWN0IC5ib3gge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYWN0IC5kaXNjb3VudGVkIHtcbiAgICAgICAgICBjb2xvcjogI2UwMmUxMjtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbXBhY3QgLmZyZWUge1xuICAgICAgICAgIGNvbG9yOiAjMTk4MzAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGFjdCAubnVtYmVyIHtcbiAgICAgICAgICBjb2xvcjogI2UwMmUxMjtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbXBhY3QgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogIzczNzM3MztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHByaWNlcywgb25DbGljayA9ICgpID0+IHt9IH0pID0+IHtcbi8vIGNvbnNvbGUubG9nKHByaWNlcylcbiAgaWYoIXByaWNlcykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBhZGFwdGVkRGlzY291bnRzID0gYWRhcHREaXNjb3VudHMocHJpY2VzLmRpc2NvdW50cyB8fCBbXSlcbiAgY29uc3QgZnVsbFByaWNlID0gYWRhcHRGdWxsUHJpY2UocHJpY2VzLmZ1bGxfcHJpY2UpXG5cbiAgcmV0dXJuIChcbiAgPEZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICA8RnJvdyBjb250YWluZXIgY29sdW1uIHhzPVwiOC8xMFwiIG1kPVwiOC8xMFwiIGp1c3RpZnk9XCJzdGFydFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7YWRhcHRlZERpc2NvdW50cyAmJiBhZGFwdGVkRGlzY291bnRzLm1hcCgoe3ByaWNlLCBmcm9tLCB0bywgdmFyaWFudCwgbGFiZWwsIHN0YXR1cywgY291cG9uIH0sIGkpID0+IChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcnZhbFwiPtCm0LXQvdCwINGBIHtmcm9tfSDQv9C+IHt0b308L2Rpdj5cbiAgICAgICAgICAgICAgPFRpY2tldEJ1dHRvbiB2YXJpYW50PXt2YXJpYW50fSBvbkNsaWNrPXtzdGF0dXMgPT09ICdhY3RpdmUnID8gb25DbGljayA6IHVuZGVmaW5lZH0+PHNwYW4gY2xhc3NOYW1lPXtwcmljZS5jbGFzc25hbWV9PntwcmljZS5mb3JtYXR0ZWR9PC9zcGFuPntsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9e2xhYmVsLmNsYXNzbmFtZX0+e2xhYmVsLnZhbHVlfTwvc3Bhbj59PC9UaWNrZXRCdXR0b24+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtmdWxsUHJpY2UuZnJvbSAmJiA8ZGl2IGNsYXNzTmFtZT1cImludGVydmFsXCI+0KbQtdC90LAg0YEge2Z1bGxQcmljZS5mcm9tfTwvZGl2Pn1cbiAgICAgICAgICA8VGlja2V0QnV0dG9uIHZhcmlhbnQ9e2Z1bGxQcmljZS52YXJpYW50fSBvbkNsaWNrPXtmdWxsUHJpY2Uuc3RhdHVzID09PSAnYWN0aXZlJyA/IG9uQ2xpY2sgOiB1bmRlZmluZWR9PjxzcGFuIGNsYXNzTmFtZT17ZnVsbFByaWNlLnByaWNlLmNsYXNzbmFtZX0+e2Z1bGxQcmljZS5wcmljZS5mb3JtYXR0ZWR9PC9zcGFuPntmdWxsUHJpY2UubGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPXtmdWxsUHJpY2UubGFiZWwuY2xhc3NuYW1lfT57ZnVsbFByaWNlLmxhYmVsLnZhbHVlfTwvc3Bhbj59PC9UaWNrZXRCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gcm93PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJveCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5saXN0IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnByaWNlLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5pbnRlcnZhbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNSkgfTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgOmdsb2JhbCguYnV0dG9uKSArIDpnbG9iYWwoLmJ1dHRvbiksXG4gICAgICA6Z2xvYmFsKC5idXR0b24pIH4gLmludGVydmFsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHsgVGhlbWUubWQudnIoMSkgfTtcbiAgICAgIH1cblxuICAgICAgLm91dGRhdGVkLXByaWNlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICB9XG5cbiAgICAgIC5vdXRkYXRlZC1sYWJlbCxcbiAgICAgIC5mdXR1cmUtbGFiZWwsXG4gICAgICAuYWN0aXZlLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmZ1dHVyZS1wcmljZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUtcHJpY2Uge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICA6Z2xvYmFsKC5idXR0b24pICsgOmdsb2JhbCguYnV0dG9uKSxcbiAgICAgICAgOmdsb2JhbCguYnV0dG9uKSB+IC5pbnRlcnZhbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHsgVGhlbWUubWQudnIoMSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRlcnZhbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzc3NzhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAub3V0ZGF0ZWQtcHJpY2Uge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cblxuICAgICAgICAub3V0ZGF0ZWQtbGFiZWwsXG4gICAgICAgIC5mdXR1cmUtbGFiZWwsXG4gICAgICAgIC5hY3RpdmUtbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZnV0dXJlLXByaWNlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZS1wcmljZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbil9XG4iXX0= */\n/*@ sourceURL=src/next/components/ProductPrices.js */"
  }));
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref2) {
  var prices = _ref2.prices,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? function () {} : _ref2$onClick;

  // console.log(prices)
  if (!prices) {
    return null;
  }

  var adaptedDiscounts = adaptDiscounts(prices.discounts || []);
  var fullPrice = adaptFullPrice(prices.full_price);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["793610440", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    container: true,
    column: true,
    xs: "8/10",
    md: "8/10",
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["793610440", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "list"
  }, adaptedDiscounts && adaptedDiscounts.map(function (_ref3, i) {
    var price = _ref3.price,
        from = _ref3.from,
        to = _ref3.to,
        variant = _ref3.variant,
        label = _ref3.label,
        status = _ref3.status,
        coupon = _ref3.coupon;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["793610440", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "interval"
    }, "\u0426\u0435\u043D\u0430 \u0441 ", from, " \u043F\u043E ", to), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TicketButton__["a" /* default */], {
      variant: variant,
      onClick: status === 'active' ? onClick : undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["793610440", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + (price.classname || "")
    }, price.formatted), label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["793610440", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + (label.classname || "")
    }, label.value)));
  }), fullPrice.from && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["793610440", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "interval"
  }, "\u0426\u0435\u043D\u0430 \u0441 ", fullPrice.from), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TicketButton__["a" /* default */], {
    variant: fullPrice.variant,
    onClick: fullPrice.status === 'active' ? onClick : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["793610440", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + (fullPrice.price.classname || "")
  }, fullPrice.price.formatted), fullPrice.label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["793610440", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + (fullPrice.label.classname || "")
  }, fullPrice.label.value))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "793610440",
    css: ".box.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.list.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.price-item.__jsx-style-dynamic-selector{margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), ";text-align:center;}.interval.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), ";font-weight:600;}.button+.button,.button~.interval.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), ";}.outdated-price.__jsx-style-dynamic-selector{font-weight:400;-webkit-text-decoration:line-through;text-decoration:line-through;}.outdated-label.__jsx-style-dynamic-selector,.future-label.__jsx-style-dynamic-selector,.active-label.__jsx-style-dynamic-selector{font-weight:600;}.future-price.__jsx-style-dynamic-selector{font-weight:400;}.active-price.__jsx-style-dynamic-selector{font-weight:700;}@media (min-width:992px){.box.__jsx-style-dynamic-selector{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.list.__jsx-style-dynamic-selector{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.button+.button,.button~.interval.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), ";}.interval.__jsx-style-dynamic-selector{font-weight:600;font-size:0.77778rem;}.outdated-price.__jsx-style-dynamic-selector{font-weight:400;-webkit-text-decoration:line-through;text-decoration:line-through;}.outdated-label.__jsx-style-dynamic-selector,.future-label.__jsx-style-dynamic-selector,.active-label.__jsx-style-dynamic-selector{font-weight:600;}.future-price.__jsx-style-dynamic-selector{font-weight:400;}.active-price.__jsx-style-dynamic-selector{font-weight:700;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvUHJvZHVjdFByaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3S2dCLEFBR3NCLEFBTU0sQUFJd0IsQUFLQSxBQU1ILEFBSXhCLEFBT0EsQUFJQSxBQUlBLEFBS1MsQUFJQSxBQUtpQixBQUl4QixBQUtBLEFBT0EsQUFJQSxBQUlBLGdCQXBEVyxBQU8vQixBQUlBLEFBSUEsQUFrQnlCLEFBS1EsQUFPL0IsQUFJQSxBQUlBLHFCQW5CQSxHQXRDRixBQWlDRSxHQTVDa0IsQUFLRixnQkFDbEIsRUFMQSxhQVh3QixRQTBCeEIsQUFzQ0UsV0ExREYsZ0JBdUNFLEFBSUEsMkNBaERtQiw2RkFDckIiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9Qcm9kdWN0UHJpY2VzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBUaWNrZXRCdXR0b24gZnJvbSAnLi9UaWNrZXRCdXR0b24nXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG4vLyBpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuLy8gaW1wb3J0IHsgcHJpY2VGb3JtYXR0ZXIsIGRhdGVGb3JtYXR0ZXIgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5cbmNvbnN0IGFkYXB0RGlzY291bnRzID0gKGRpc2NvdW50cykgPT4gZGlzY291bnRzLm1hcChkaXNjb3VudCA9PiB7XG4gIGxldCByZXN1bHQgPSB7IGZyb206IGRpc2NvdW50LmZyb20uZm9ybWF0dGVkLCB0bzogZGlzY291bnQudG8uZm9ybWF0dGVkLCBzdGF0dXM6IGRpc2NvdW50LnN0YXR1cyB9XG5cbiAgc3dpdGNoIChkaXNjb3VudC5zdGF0dXMpIHtcbiAgICBjYXNlICdwYXN0JzpcbiAgICAgIHJlc3VsdCA9IHsuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnZ3JheScsXG4gICAgICAgICAgICAgICAgICBwcmljZToge2Zvcm1hdHRlZDogZGlzY291bnQucHJpY2UuZm9ybWF0dGVkLCBjbGFzc25hbWU6ICdvdXRkYXRlZC1wcmljZSd9LFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IHtjbGFzc25hbWU6ICdvdXRkYXRlZC1sYWJlbCcsIHZhbHVlOiAn0J/RgNC+0YHRgNC+0YfQtdC90L4nfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Z1dHVyZSc6XG4gICAgICByZXN1bHQgPSB7Li4ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ2dyYXknLFxuICAgICAgICAgICAgICAgICAgcHJpY2U6IHtmb3JtYXR0ZWQ6IGRpc2NvdW50LnByaWNlLmZvcm1hdHRlZCwgY2xhc3NuYW1lOiAnZnV0dXJlLXByaWNlJ30sXG4gICAgICAgICAgICAgICAgICBsYWJlbDoge2NsYXNzbmFtZTogJ2Z1dHVyZS1sYWJlbCcsIHZhbHVlOiAn0KHQutC+0YDQvid9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgIHJlc3VsdCA9IHsuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICBwcmljZToge2Zvcm1hdHRlZDogZGlzY291bnQucHJpY2UuZm9ybWF0dGVkLCBjbGFzc25hbWU6ICdhY3RpdmUtcHJpY2UnfSxcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IGRpc2NvdW50LnByaWNlLnZhbHVlID09PSAwID8gJ2dyZWVuJyA6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBkaXNjb3VudC5wcmljZS52YWx1ZSA9PT0gMCA/IG51bGwgOiB7Y2xhc3NuYW1lOiAnYWN0aXZlLWxhYmVsJywgdmFsdWU6ICfQmtGD0L/QuNGC0YwnfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufSlcblxuY29uc3QgYWRhcHRGdWxsUHJpY2UgPSAoZnVsbF9wcmljZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1czogZnVsbF9wcmljZS5zdGF0dXMsXG4gICAgcHJpY2U6IHtcbiAgICAgIGZvcm1hdHRlZDogZnVsbF9wcmljZS5wcmljZS5mb3JtYXR0ZWQsXG4gICAgICBjbGFzc25hbWU6IGZ1bGxfcHJpY2Uuc3RhdHVzID09PSAnYWN0aXZlJyA/ICdhY3RpdmUtcHJpY2UnIDogJ2Z1dHVyZS1wcmljZScsXG4gICAgfSxcbiAgICBmcm9tOiBmdWxsX3ByaWNlLmZyb20gJiYgZnVsbF9wcmljZS5mcm9tLmZvcm1hdHRlZCxcbiAgICB2YXJpYW50OiBmdWxsX3ByaWNlLnN0YXR1cyAhPT0gJ2FjdGl2ZScgPyAnZ3JheScgOiBmdWxsX3ByaWNlLnByaWNlLnZhbHVlID09PSAwID8gJ2dyZWVuJyA6ICdkZWZhdWx0JyxcbiAgICBsYWJlbDogZnVsbF9wcmljZS5wcmljZS52YWx1ZSA9PT0gMCA/IG51bGwgOiB7XG4gICAgICBjbGFzc25hbWU6IGZ1bGxfcHJpY2Uuc3RhdHVzID09PSAnYWN0aXZlJyA/ICdhY3RpdmUtbGFiZWwnIDogJ2Z1dHVyZS1sYWJlbCcsXG4gICAgICB2YWx1ZTogZnVsbF9wcmljZS5zdGF0dXMgPT09ICdhY3RpdmUnID8gJ9Ca0YPQv9C40YLRjCcgOiAn0KHQutC+0YDQvicsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNYXhBY3RpdmVEaXNjb3VudCA9IChkaXNjb3VudHMpID0+IGRpc2NvdW50cy5maWx0ZXIoZGlzY291bnQgPT4gZGlzY291bnQuc3RhdHVzID09PSAnYWN0aXZlJykucmVkdWNlKChyZXN1bHQsIGN1cnJlbnQpID0+IHJlc3VsdCA9PT0gbnVsbCB8fCBjdXJyZW50LnByaWNlLnZhbHVlID4gcmVzdWx0LnByaWNlLnZhbHVlID8gY3VycmVudCA6IHJlc3VsdCwgbnVsbClcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZVByaWNlID0gKHByaWNlcykgPT4ge1xuICBjb25zdCBhY3RpdmVEaXNjb3VudCA9IGdldE1heEFjdGl2ZURpc2NvdW50KHByaWNlcy5kaXNjb3VudHMpIC8vcHJpY2VzLmRpc2NvdW50cy5maWx0ZXIoZGlzY291bnQgPT4gZGlzY291bnQuc3RhdHVzID09PSAnYWN0aXZlJykucmVkdWNlKChyZXN1bHQsIGN1cnJlbnQpID0+IHJlc3VsdCA9PT0gbnVsbCB8fCBjdXJyZW50LnByY2llID4gcmVzdWx0LnByaWNlID8gY3VycmVudCA6IHJlc3VsdCwgbnVsbClcblxuICByZXR1cm4ge1xuICAgIGZ1bGxQcmljZToge1xuICAgICAgY2xhc3NuYW1lOiBwcmljZXMuZnVsbF9wcmljZS5wcmljZS52YWx1ZSA9PT0gMCA/ICdmcmVlJyA6ICdudW1iZXInLFxuICAgICAgcHJpY2U6IHsgLi4ucHJpY2VzLmZ1bGxfcHJpY2UucHJpY2UgfSxcbiAgICB9LFxuICAgIGFjdGl2ZURpc2NvdW50OiBhY3RpdmVEaXNjb3VudCA9PT0gbnVsbCA/IG51bGwgOiB7XG4gICAgICBjbGFzc25hbWU6IGFjdGl2ZURpc2NvdW50LnByaWNlLnZhbHVlID09PSAwID8gJ2ZyZWUnIDogJ251bWJlcicsXG4gICAgICBwcmljZTogeyAuLi5hY3RpdmVEaXNjb3VudC5wcmljZSB9LFxuICAgICAgY291cG9uOiBhY3RpdmVEaXNjb3VudC5jb3Vwb24sXG4gICAgfSxcbiAgICBsYWJlbDogYWN0aXZlRGlzY291bnQgPT09IG51bGwgPyBudWxsIDoge1xuICAgICAgdmFsdWU6IGDQtNC+ICR7YWN0aXZlRGlzY291bnQudG8uZm9ybWF0dGVkfWAsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0c0xpc3RJdGVtUHJpY2VzID0gKHsgcHJpY2VzLCB2YXJpYW50ID0gJ2RlZmF1bHQnIH0pID0+IHtcbiAgaWYoIXByaWNlcykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBwcmljZSA9IGdldEFjdGl2ZVByaWNlKHByaWNlcylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYm94ICR7IHZhcmlhbnQgfWB9PlxuICAgICAge3ByaWNlLmFjdGl2ZURpc2NvdW50XG4gICAgICAgID8gPEZyYWdtZW50PjxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50ZWRcIj57cHJpY2UuZnVsbFByaWNlLnByaWNlLmZvcm1hdHRlZH08L3NwYW4+Jm5ic3A7PHNwYW4gY2xhc3NOYW1lPXtwcmljZS5hY3RpdmVEaXNjb3VudC5jbGFzc25hbWV9PntwcmljZS5hY3RpdmVEaXNjb3VudC5wcmljZS5mb3JtYXR0ZWR9PC9zcGFuPjwvRnJhZ21lbnQ+XG4gICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPXtwcmljZS5mdWxsUHJpY2UuY2xhc3NuYW1lfT57cHJpY2UuZnVsbFByaWNlLnByaWNlLmZvcm1hdHRlZH08L3NwYW4+XG4gICAgICB9IHtwcmljZS5sYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntwcmljZS5sYWJlbC52YWx1ZX08L3NwYW4+fVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZGVmYXVsdCAuYm94IHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMzMzMzNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZGVmYXVsdCAuZGlzY291bnRlZCB7XG4gICAgICAgICAgY29sb3I6ICNlMDJlMTI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWZhdWx0IC5mcmVlIHtcbiAgICAgICAgICBjb2xvcjogIzE5ODMwMDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlZmF1bHQgLm51bWJlciB7XG4gICAgICAgICAgY29sb3I6ICNlMDJlMTI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWZhdWx0IC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGFjdCAuYm94IHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGFjdCAuZGlzY291bnRlZCB7XG4gICAgICAgICAgY29sb3I6ICNlMDJlMTI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYWN0IC5mcmVlIHtcbiAgICAgICAgICBjb2xvcjogIzE5ODMwMDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbXBhY3QgLm51bWJlciB7XG4gICAgICAgICAgY29sb3I6ICNlMDJlMTI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYWN0IC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBwcmljZXMsIG9uQ2xpY2sgPSAoKSA9PiB7fSB9KSA9PiB7XG4vLyBjb25zb2xlLmxvZyhwcmljZXMpXG4gIGlmKCFwcmljZXMpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgYWRhcHRlZERpc2NvdW50cyA9IGFkYXB0RGlzY291bnRzKHByaWNlcy5kaXNjb3VudHMgfHwgW10pXG4gIGNvbnN0IGZ1bGxQcmljZSA9IGFkYXB0RnVsbFByaWNlKHByaWNlcy5mdWxsX3ByaWNlKVxuXG4gIHJldHVybiAoXG4gIDxGcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgPEZyb3cgY29udGFpbmVyIGNvbHVtbiB4cz1cIjgvMTBcIiBtZD1cIjgvMTBcIiBqdXN0aWZ5PVwic3RhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge2FkYXB0ZWREaXNjb3VudHMgJiYgYWRhcHRlZERpc2NvdW50cy5tYXAoKHtwcmljZSwgZnJvbSwgdG8sIHZhcmlhbnQsIGxhYmVsLCBzdGF0dXMsIGNvdXBvbiB9LCBpKSA9PiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJ2YWxcIj7QptC10L3QsCDRgSB7ZnJvbX0g0L/QviB7dG99PC9kaXY+XG4gICAgICAgICAgICAgIDxUaWNrZXRCdXR0b24gdmFyaWFudD17dmFyaWFudH0gb25DbGljaz17c3RhdHVzID09PSAnYWN0aXZlJyA/IG9uQ2xpY2sgOiB1bmRlZmluZWR9PjxzcGFuIGNsYXNzTmFtZT17cHJpY2UuY2xhc3NuYW1lfT57cHJpY2UuZm9ybWF0dGVkfTwvc3Bhbj57bGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPXtsYWJlbC5jbGFzc25hbWV9PntsYWJlbC52YWx1ZX08L3NwYW4+fTwvVGlja2V0QnV0dG9uPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7ZnVsbFByaWNlLmZyb20gJiYgPGRpdiBjbGFzc05hbWU9XCJpbnRlcnZhbFwiPtCm0LXQvdCwINGBIHtmdWxsUHJpY2UuZnJvbX08L2Rpdj59XG4gICAgICAgICAgPFRpY2tldEJ1dHRvbiB2YXJpYW50PXtmdWxsUHJpY2UudmFyaWFudH0gb25DbGljaz17ZnVsbFByaWNlLnN0YXR1cyA9PT0gJ2FjdGl2ZScgPyBvbkNsaWNrIDogdW5kZWZpbmVkfT48c3BhbiBjbGFzc05hbWU9e2Z1bGxQcmljZS5wcmljZS5jbGFzc25hbWV9PntmdWxsUHJpY2UucHJpY2UuZm9ybWF0dGVkfTwvc3Bhbj57ZnVsbFByaWNlLmxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT17ZnVsbFByaWNlLmxhYmVsLmNsYXNzbmFtZX0+e2Z1bGxQcmljZS5sYWJlbC52YWx1ZX08L3NwYW4+fTwvVGlja2V0QnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJvdz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGlzdCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wcmljZS1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSkgfTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaW50ZXJ2YWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjUpIH07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIDpnbG9iYWwoLmJ1dHRvbikgKyA6Z2xvYmFsKC5idXR0b24pLFxuICAgICAgOmdsb2JhbCguYnV0dG9uKSB+IC5pbnRlcnZhbCB7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7IFRoZW1lLm1kLnZyKDEpIH07XG4gICAgICB9XG5cbiAgICAgIC5vdXRkYXRlZC1wcmljZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgfVxuXG4gICAgICAub3V0ZGF0ZWQtbGFiZWwsXG4gICAgICAuZnV0dXJlLWxhYmVsLFxuICAgICAgLmFjdGl2ZS1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIC5mdXR1cmUtcHJpY2Uge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZlLXByaWNlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5ib3gge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpc3Qge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgOmdsb2JhbCguYnV0dG9uKSArIDpnbG9iYWwoLmJ1dHRvbiksXG4gICAgICAgIDpnbG9iYWwoLmJ1dHRvbikgfiAuaW50ZXJ2YWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7IFRoZW1lLm1kLnZyKDEpIH07XG4gICAgICAgIH1cblxuICAgICAgICAuaW50ZXJ2YWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc3Nzc4cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm91dGRhdGVkLXByaWNlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG5cbiAgICAgICAgLm91dGRhdGVkLWxhYmVsLFxuICAgICAgICAuZnV0dXJlLWxhYmVsLFxuICAgICAgICAuYWN0aXZlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1dHVyZS1wcmljZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3RpdmUtcHJpY2Uge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pfVxuIl19 */\n/*@ sourceURL=src/next/components/ProductPrices.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1)]
  }));
});

/***/ }),

/***/ "./components/SelectBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__("./styles/theme.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/SelectBox.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

 // import Frow from './Frow'


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["children", "variant", "style"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: _objectSpread({}, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2631632205", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default]]]) + " " + "select-box ".concat(variant)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2631632205", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default]]]) + " " + (props.className != null && props.className || "")
  }), children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2631632205",
    css: ".select-box.__jsx-style-dynamic-selector{display:inline-block;position:relative;max-width:100%;vertical-align:top;height:calc(2rem + 2px);}.select-box.__jsx-style-dynamic-selector select.__jsx-style-dynamic-selector{display:block;position:relative;vertical-align:top;-webkit-appearance:none;-moz-appearance:none;appearance:none;max-width:100%;padding:calc(0.375rem - 1px) 2.5rem calc(0.375rem - 1px) calc(0.625rem - 1px);height:calc(2rem + 2px);font-size:16px;}.select-box.__jsx-style-dynamic-selector::after{content:' ';display:block;position:absolute;width:0.6rem;height:0.6rem;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;border:2px solid ".concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, ";border-radius:1px;border-right:0;border-top:0;right:1rem;top:0.65rem;z-index:10;}.default.__jsx-style-dynamic-selector select.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, ";font-weight:400;font-size:0.88889rem;background-color:#fff;border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.borderGray, ";border-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, ";}.white.__jsx-style-dynamic-selector select.__jsx-style-dynamic-selector{color:#fff;background:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, ";border:1px solid #fff;text-indent:0.6rem;border-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, ";}.white.__jsx-style-dynamic-selector::after{border-color:#fff;}.white.__jsx-style-dynamic-selector option.__jsx-style-dynamic-selector{color:#000;}@media (min-width:992px){.select-box.__jsx-style-dynamic-selector select.__jsx-style-dynamic-selector{font-size:1rem;}.default.__jsx-style-dynamic-selector select.__jsx-style-dynamic-selector{border-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, ";}.white.__jsx-style-dynamic-selector select.__jsx-style-dynamic-selector{font-size:0.88889rem;height:calc(1.66667rem + 2px);border-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, ";}.white.__jsx-style-dynamic-selector::after{top:0.5rem;right:0.7rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvU2VsZWN0Qm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUc4QixBQVFQLEFBV0YsQUFpQnVCLEFBVXhCLEFBVU8sQUFJUCxBQUtNLEFBSTRCLEFBR3RCLEFBTVYsV0E3QjJCLEFBWTFDLEFBa0JpQixDQTNERCxFQVhJLENBeURsQixHQVRGLEdBeERvQixBQXdFYyxHQU9oQyxFQTNEa0IsTUFYQyxHQTJCSCxJQW5DRCxJQW9FZixDQWhEYSxPQVhHLEFBMkJLLEFBWUMsQUF3QnVCLEdBdkUxQixHQW9CTCxjQUNXLENBZUgsQ0FuQ0UsQUErQ0wsbUJBQ3dCLEVBWkcsQUFtQzlDLEdBdEVGLGVBT2lCLGVBQytELFFBd0NoRixLQVg2QyxrQkFqQm5CLHlCQWtCMUIsc0JBN0IwQix3QkFDVCxhQVcrQixFQVZoRCw0Q0FXb0Isa0JBQ0gsZUFDRixhQUNGLFdBQ0MsWUFDRCxXQUNiIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvU2VsZWN0Qm94LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuLy8gaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHZhcmlhbnQgPSAnZGVmYXVsdCcsIHN0eWxlLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNlbGVjdC1ib3ggJHt2YXJpYW50fWB9IHN0eWxlPXt7Li4uc3R5bGV9fT5cbiAgICAgIDxzZWxlY3Qgey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNlbGVjdC1ib3gge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMnJlbSArIDJweCk7XG4gICAgICB9XG5cbiAgICAgIC5zZWxlY3QtYm94IHNlbGVjdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogY2FsYygwLjM3NXJlbSAtIDFweCkgMi41cmVtIGNhbGMoMC4zNzVyZW0gLSAxcHgpIGNhbGMoMC42MjVyZW0gLSAxcHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMnJlbSArIDJweCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgLnNlbGVjdC1ib3g6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMC42cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuNnJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuZ3JheSB9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgIHRvcDogMC42NXJlbTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICB9XG5cbiAgICAgIC5kZWZhdWx0IHNlbGVjdCB7XG4gICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg4ODg5cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICAvKiB0ZXh0LWluZGVudDogMC42cmVtOyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS54cy5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgfVxuXG4gICAgICAud2hpdGUgc2VsZWN0IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIC8qIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTsgKi9cbiAgICAgICAgYmFja2dyb3VuZDogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB0ZXh0LWluZGVudDogMC42cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS54cy5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgfVxuXG4gICAgICAud2hpdGU6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAud2hpdGUgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuc2VsZWN0LWJveCBzZWxlY3Qge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWZhdWx0IHNlbGVjdCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgfVxuICAgICAgICAud2hpdGUgc2VsZWN0IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODg4ODlyZW07XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEuNjY2NjdyZW0gKyAycHgpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGU6OmFmdGVyIHtcbiAgICAgICAgICB0b3A6IDAuNXJlbTtcbiAgICAgICAgICByaWdodDogMC43cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuIl19 */\n/*@ sourceURL=src/next/components/SelectBox.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default]
  }));
});

/***/ }),

/***/ "./components/Slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme__ = __webpack_require__("./styles/theme.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Slider.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var SliderContext = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createContext({
  onClickLeft: function onClickLeft() {},
  onClickRight: function onClickRight() {},
  setLength: function setLength() {},
  setInfinite: function setInfinite() {},
  // setShift: () => {},
  activeItem: 0,
  animate: true,
  // shift: 0,
  duration: 300,
  activeLeft: false,
  activeRight: true
});

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        activeItem: 0,
        animate: true,
        duration: 300,
        activeLeft: false,
        activeRight: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "contextData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        length: 0,
        // shift: 0,
        infinite: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "swipeData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        startedTimestamp: null,
        startPoint: {},
        lastTimestamp: null,
        lastPoint: {}
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "leftClicked", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var activeItem = _this.state.activeItem - 1;

        if (_this.contextData.infinite) {
          _this.setState({
            activeItem: activeItem
          });

          if (activeItem < 0) {
            setTimeout(function () {
              _this.setState({
                animate: false,
                activeItem: _this.contextData.length - 1
              });

              setTimeout(function () {
                _this.setState({
                  animate: true
                });
              }, 50);
            }, _this.state.duration + 10);
          }
        } else if (activeItem >= 0) {
          _this.setState({
            activeItem: activeItem
          });

          _this.setActiveArrows(activeItem);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "rightClicked", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var activeItem = _this.state.activeItem + 1;

        if (_this.contextData.infinite) {
          _this.setState({
            activeItem: activeItem
          });

          if (activeItem >= _this.contextData.length) {
            setTimeout(function () {
              _this.setState({
                animate: false,
                activeItem: 0
              });

              setTimeout(function () {
                _this.setState({
                  animate: true
                });
              }, 50);
            }, _this.state.duration + 10);
          }
        } else if (activeItem <= _this.contextData.length - 1) {
          _this.setState({
            activeItem: activeItem
          });

          _this.setActiveArrows(activeItem);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "swipeStart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.touches.length !== 1) {
          return;
        }

        var touch = e.touches.item(0);
        _this.swipeData = {
          startedTimestamp: new Date(),
          startPoint: {
            x: touch.screenX,
            y: touch.screenY
          },
          lastTimestamp: new Date(),
          lastPoint: {
            x: touch.screenX,
            y: touch.screenY
          }
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "swipeMove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.touches.length !== 1) {
          return;
        } // e.preventDefault()


        var touch = e.touches.item(0);
        _this.swipeData = _objectSpread({}, _this.swipeData, {
          lastTimestamp: new Date(),
          lastPoint: {
            x: touch.screenX,
            y: touch.screenY
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "swipeEnd", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var deltaX = _this.swipeData.lastPoint.x - _this.swipeData.startPoint.x;
        var deltaY = _this.swipeData.lastPoint.y - _this.swipeData.startPoint.y; // const deltaT = this.swipeData.lastTimestamp - this.swipeData.startedTimestamp

        console.log('deltaY', Math.abs(deltaY), 'deltaX', Math.abs(deltaX));

        if (Math.abs(deltaY) >= Math.abs(deltaX)) {
          return;
        }

        e.preventDefault();

        if (deltaX < 0) {
          _this.rightClicked(e);
        } else {
          _this.leftClicked(e);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setLength", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(length) {
        if (_this.contextData.length === length) {
          return;
        }

        _this.contextData.length = length;
        setTimeout(function () {
          return _this.setActiveArrows(_this.state.activeItem);
        }, 0);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setInfinite", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(infinite) {
        if (_this.contextData.infinite === infinite) {
          return;
        }

        _this.contextData.infinite = infinite;

        _this.setActiveArrows(_this.state.activeItem);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setActiveArrows", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(activeItem) {
        return _this.contextData.infinite === true ? _this.setState({
          activeLeft: true,
          activeRight: true
        }) : _this.setState({
          activeLeft: activeItem > 0,
          activeRight: activeItem < _this.contextData.length - 1
        });
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SliderContext.Provider, {
        value: {
          onClickLeft: this.leftClicked,
          onClickRight: this.rightClicked,
          activeItem: this.state.activeItem,
          setLength: this.setLength,
          setInfinite: this.setInfinite,
          // shift: 0,
          // setShift: this.setShift,
          animate: this.state.animate,
          activeLeft: this.state.activeLeft,
          activeRight: this.state.activeRight
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
        container: true,
        row: "start",
        nowrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        onTouchStart: this.swipeStart,
        onTouchMove: this.swipeMove,
        onTouchEnd: this.swipeEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        className: "jsx-1853486086" + " " + "slider-box"
      }, children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1853486086",
        css: ".slider-box.jsx-1853486086{overflow:hidden;position:relative;width:100%;}@media (min-width:992px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRRc0IsQUFHK0IsZ0JBRUUsa0JBQ1AsV0FDYiIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL1NsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuY29uc3QgU2xpZGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBvbkNsaWNrTGVmdDogKCkgPT4ge30sXG4gIG9uQ2xpY2tSaWdodDogKCkgPT4ge30sXG4gIHNldExlbmd0aDogKCkgPT4ge30sXG4gIHNldEluZmluaXRlOiAoKSA9PiB7fSxcbiAgLy8gc2V0U2hpZnQ6ICgpID0+IHt9LFxuICBhY3RpdmVJdGVtOiAwLFxuICBhbmltYXRlOiB0cnVlLFxuICAvLyBzaGlmdDogMCxcbiAgZHVyYXRpb246IDMwMCxcbiAgYWN0aXZlTGVmdDogZmFsc2UsXG4gIGFjdGl2ZVJpZ2h0OiB0cnVlLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmVJdGVtOiAwLFxuICAgIGFuaW1hdGU6IHRydWUsXG4gICAgZHVyYXRpb246IDMwMCxcbiAgICBhY3RpdmVMZWZ0OiBmYWxzZSxcbiAgICBhY3RpdmVSaWdodDogZmFsc2UsXG4gIH1cblxuICBjb250ZXh0RGF0YSA9IHtcbiAgICBsZW5ndGg6IDAsXG4gICAgLy8gc2hpZnQ6IDAsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICB9XG5cbiAgc3dpcGVEYXRhID0ge1xuICAgIHN0YXJ0ZWRUaW1lc3RhbXA6IG51bGwsXG4gICAgc3RhcnRQb2ludDoge30sXG4gICAgbGFzdFRpbWVzdGFtcDogbnVsbCxcbiAgICBsYXN0UG9pbnQ6IHt9LFxuICB9XG5cbiAgbGVmdENsaWNrZWQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0gLSAxO1xuXG4gICAgaWYodGhpcy5jb250ZXh0RGF0YS5pbmZpbml0ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW0gfSlcblxuICAgICAgaWYoYWN0aXZlSXRlbSA8IDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5pbWF0ZTogZmFsc2UsIGFjdGl2ZUl0ZW06IHRoaXMuY29udGV4dERhdGEubGVuZ3RoIC0gMSB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0pXG4gICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICB9LCB0aGlzLnN0YXRlLmR1cmF0aW9uICsgMTApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGFjdGl2ZUl0ZW0gPj0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW0gfSlcbiAgICAgIHRoaXMuc2V0QWN0aXZlQXJyb3dzKGFjdGl2ZUl0ZW0pXG4gICAgfVxuXG4gIH1cblxuICByaWdodENsaWNrZWQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0gKyAxO1xuXG4gICAgaWYodGhpcy5jb250ZXh0RGF0YS5pbmZpbml0ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW0gfSlcblxuICAgICAgaWYoYWN0aXZlSXRlbSA+PSB0aGlzLmNvbnRleHREYXRhLmxlbmd0aCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiBmYWxzZSwgYWN0aXZlSXRlbTogMCB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0pXG4gICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICB9LCB0aGlzLnN0YXRlLmR1cmF0aW9uICsgMTApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGFjdGl2ZUl0ZW0gPD0gdGhpcy5jb250ZXh0RGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbSB9KVxuICAgICAgdGhpcy5zZXRBY3RpdmVBcnJvd3MoYWN0aXZlSXRlbSlcbiAgICB9XG5cbiAgfVxuXG4gIHN3aXBlU3RhcnQgPSAoZSkgPT4ge1xuICAgIGlmKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzLml0ZW0oMClcblxuICAgIHRoaXMuc3dpcGVEYXRhID0ge1xuICAgICAgc3RhcnRlZFRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgIHN0YXJ0UG9pbnQ6IHt4OiB0b3VjaC5zY3JlZW5YLCB5OiB0b3VjaC5zY3JlZW5ZIH0sXG4gICAgICBsYXN0VGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgICAgbGFzdFBvaW50OiB7eDogdG91Y2guc2NyZWVuWCwgeTogdG91Y2guc2NyZWVuWSB9LFxuICAgIH1cbiAgfVxuXG4gIHN3aXBlTW92ZSA9IChlKSA9PiB7XG4gICAgaWYoZS50b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXMuaXRlbSgwKVxuXG4gICAgdGhpcy5zd2lwZURhdGEgPSB7XG4gICAgICAuLi50aGlzLnN3aXBlRGF0YSxcbiAgICAgIGxhc3RUaW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICBsYXN0UG9pbnQ6IHt4OiB0b3VjaC5zY3JlZW5YLCB5OiB0b3VjaC5zY3JlZW5ZIH0sXG4gICAgfVxuICB9XG5cbiAgc3dpcGVFbmQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMuc3dpcGVEYXRhLmxhc3RQb2ludC54IC0gdGhpcy5zd2lwZURhdGEuc3RhcnRQb2ludC54XG4gICAgY29uc3QgZGVsdGFZID0gdGhpcy5zd2lwZURhdGEubGFzdFBvaW50LnkgLSB0aGlzLnN3aXBlRGF0YS5zdGFydFBvaW50LnlcbiAgICAvLyBjb25zdCBkZWx0YVQgPSB0aGlzLnN3aXBlRGF0YS5sYXN0VGltZXN0YW1wIC0gdGhpcy5zd2lwZURhdGEuc3RhcnRlZFRpbWVzdGFtcFxuXG4gICAgY29uc29sZS5sb2coJ2RlbHRhWScsIE1hdGguYWJzKGRlbHRhWSksICdkZWx0YVgnLCBNYXRoLmFicyhkZWx0YVgpKVxuXG4gICAgaWYoTWF0aC5hYnMoZGVsdGFZKSA+PSBNYXRoLmFicyhkZWx0YVgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihkZWx0YVggPDApIHtcbiAgICAgIHRoaXMucmlnaHRDbGlja2VkKGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVmdENsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICBzZXRMZW5ndGggPSAobGVuZ3RoKSA9PiB7XG4gICAgaWYodGhpcy5jb250ZXh0RGF0YS5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0RGF0YS5sZW5ndGggPSBsZW5ndGhcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0QWN0aXZlQXJyb3dzKHRoaXMuc3RhdGUuYWN0aXZlSXRlbSksIDApXG59XG4gIC8vIHNldFNoaWZ0ID0gKHNoaWZ0KSA9PiBzaGlmdCAhPT0gdGhpcy5zdGF0ZS5zaGlmdCAmJiB0aGlzLnNldFN0YXRlKHsgc2hpZnQgfSlcbiAgc2V0SW5maW5pdGUgPSAoaW5maW5pdGUpID0+IHtcbiAgICBpZih0aGlzLmNvbnRleHREYXRhLmluZmluaXRlID09PSBpbmZpbml0ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0RGF0YS5pbmZpbml0ZSA9IGluZmluaXRlXG4gICAgdGhpcy5zZXRBY3RpdmVBcnJvd3ModGhpcy5zdGF0ZS5hY3RpdmVJdGVtKVxuICB9XG5cbiAgc2V0QWN0aXZlQXJyb3dzID0gKGFjdGl2ZUl0ZW0pID0+IHRoaXMuY29udGV4dERhdGEuaW5maW5pdGUgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUxlZnQ6IHRydWUsIGFjdGl2ZVJpZ2h0OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHthY3RpdmVMZWZ0OiBhY3RpdmVJdGVtID4gMCwgYWN0aXZlUmlnaHQ6IGFjdGl2ZUl0ZW0gPCB0aGlzLmNvbnRleHREYXRhLmxlbmd0aCAtIDEgfSlcblxuICBzdGF0aWMgTGVmdEFycm93ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxTbGlkZXJDb250ZXh0LkNvbnN1bWVyPntcbiAgICAgICh7IG9uQ2xpY2tMZWZ0LCBhY3RpdmVMZWZ0IH0pID0+IGNoaWxkcmVuKHsgb25DbGljazogb25DbGlja0xlZnQsIGFjdGl2ZTogYWN0aXZlTGVmdCB9KVxuICAgIH08L1NsaWRlckNvbnRleHQuQ29uc3VtZXI+XG4gIClcblxuICBzdGF0aWMgUmlnaHRBcnJvdyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8U2xpZGVyQ29udGV4dC5Db25zdW1lcj57XG4gICAgICAoeyBvbkNsaWNrUmlnaHQsIGFjdGl2ZVJpZ2h0IH0pID0+IGNoaWxkcmVuKHsgb25DbGljazogb25DbGlja1JpZ2h0LCBhY3RpdmU6IGFjdGl2ZVJpZ2h0IH0pXG4gICAgfTwvU2xpZGVyQ29udGV4dC5Db25zdW1lcj5cbiAgKVxuXG4gIHN0YXRpYyBPdGhlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8U2xpZGVyQ29udGV4dC5Db25zdW1lcj57KHsgYWN0aXZlSXRlbSB9KSA9PiB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oeyBhY3RpdmU6IGFjdGl2ZUl0ZW0gfSlcbiAgICB9fTwvU2xpZGVyQ29udGV4dC5Db25zdW1lcj5cbiAgKVxuXG4gIHN0YXRpYyBJdGVtcyA9ICh7IGNoaWxkcmVuLCB4cyA9ICcxMDAlJywgc20sIG1kID0gJzEwMCUnLCBsZywgYXVnbWVudCA9IDAsIGluZmluaXRlID0gZmFsc2UgfSkgPT4gKFxuICAgIDxTbGlkZXJDb250ZXh0LkNvbnN1bWVyPntcbiAgICAgICh7IGFjdGl2ZUl0ZW0sIHNldExlbmd0aCwgc2V0SW5maW5pdGUsIGFuaW1hdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbih7IGFjdGl2ZTogYWN0aXZlSXRlbSB9KSlcblxuICAgICAgICBjb25zdCBjaGlsZHJlbkl0ZW1zID0gYXVnbWVudCA+IDAgPyBbLi4uY2hpbGRyZW5BcnJheS5zbGljZSgtYXVnbWVudCksIC4uLmNoaWxkcmVuQXJyYXksIC4uLmNoaWxkcmVuQXJyYXkuc2xpY2UoMCwgYXVnbWVudCldIDogY2hpbGRyZW5BcnJheVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNoaWxkcmVuSXRlbXMpXG5cbiAgICAgICAgc2V0TGVuZ3RoKGNoaWxkcmVuQXJyYXkubGVuZ3RoKVxuICAgICAgICBzZXRJbmZpbml0ZShpbmZpbml0ZSlcbiAgICAgICAgLy8gc2V0U2hpZnQoYXVnbWVudClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPEZyb3cgY29udGFpbmVyIG5vd3JhcCByb3c9XCJzdGFydFwiIGl0ZW1zPVwic3RhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIiBzdHlsZT17eyB0cmFuc2l0aW9uOiBhbmltYXRlID8gJ3RyYW5zZm9ybSAwLjNzIGVhc2Utb3V0JyA6ICdub25lJywgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWChjYWxjKC0keyAxMDAgLyBjaGlsZHJlbkl0ZW1zLmxlbmd0aCB9JSAqICR7IGFjdGl2ZUl0ZW0gKyBhdWdtZW50IH0pKWAgfX0+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbkl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGl0ZW0sIHsgLi4uaXRlbS5wcm9wcywga2V5OiBpIH0pKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRnJvdz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgIC5pdGVtcyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gJHsgeHMgfSAvIDIpO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoJHsgeHMgfSAqICR7IGNoaWxkcmVuSXRlbXMubGVuZ3RoIH0pO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoJHsgeHMgfSAqICR7IGNoaWxkcmVuSXRlbXMubGVuZ3RoIH0pO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbXMgPiA6Z2xvYmFsKCopIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoJHsgeHMgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgICAuaXRlbXMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtICR7IG1kIH0gLyAyKTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoJHsgbWQgfSAqICR7IGNoaWxkcmVuSXRlbXMubGVuZ3RoIH0pO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygkeyBtZCB9ICogJHsgY2hpbGRyZW5JdGVtcy5sZW5ndGggfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaXRlbXMgPiA6Z2xvYmFsKCopIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygkeyBtZCB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgfTwvU2xpZGVyQ29udGV4dC5Db25zdW1lcj5cbiAgKVxuXG4gIHN0YXRpYyBQaWN0dXJlID0gKHsgcGljdHVyZSwgaGVpZ2h0ID0gJzY2LjUlJyB9KSA9PiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiBzdHlsZT17eyAuLi5waWN0dXJlLmZpbGUgJiYge2JhY2tncm91bmRJbWFnZTogYHVybCgkeyBwaWN0dXJlLmZpbGUgfSlgfSB9fS8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkeyBoZWlnaHQgfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgLyogaGVpZ2h0OiA1MTJweDsgKi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApXG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8U2xpZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICBvbkNsaWNrTGVmdDogdGhpcy5sZWZ0Q2xpY2tlZCxcbiAgICAgICAgb25DbGlja1JpZ2h0OiB0aGlzLnJpZ2h0Q2xpY2tlZCxcbiAgICAgICAgYWN0aXZlSXRlbTogdGhpcy5zdGF0ZS5hY3RpdmVJdGVtLFxuICAgICAgICBzZXRMZW5ndGg6IHRoaXMuc2V0TGVuZ3RoLFxuICAgICAgICBzZXRJbmZpbml0ZTogdGhpcy5zZXRJbmZpbml0ZSxcbiAgICAgICAgLy8gc2hpZnQ6IDAsXG4gICAgICAgIC8vIHNldFNoaWZ0OiB0aGlzLnNldFNoaWZ0LFxuICAgICAgICBhbmltYXRlOiB0aGlzLnN0YXRlLmFuaW1hdGUsXG4gICAgICAgIGFjdGl2ZUxlZnQ6IHRoaXMuc3RhdGUuYWN0aXZlTGVmdCxcbiAgICAgICAgYWN0aXZlUmlnaHQ6IHRoaXMuc3RhdGUuYWN0aXZlUmlnaHQsXG4gICAgICB9fT5cbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxGcm93IGNvbnRhaW5lciByb3c9XCJzdGFydFwiIG5vd3JhcD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNsaWRlci1ib3hcIiBvblRvdWNoU3RhcnQ9e3RoaXMuc3dpcGVTdGFydH0gb25Ub3VjaE1vdmU9e3RoaXMuc3dpcGVNb3ZlfSBvblRvdWNoRW5kPXt0aGlzLnN3aXBlRW5kfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvRnJvdz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2xpZGVyLWJveCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMGYzZmY7ICovXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgPC9TbGlkZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=src/next/components/Slider.js */"
      })));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Object.defineProperty(_default, "LeftArrow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref2) {
    var children = _ref2.children;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SliderContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      }
    }, function (_ref3) {
      var onClickLeft = _ref3.onClickLeft,
          activeLeft = _ref3.activeLeft;
      return children({
        onClick: onClickLeft,
        active: activeLeft
      });
    });
  }
});
Object.defineProperty(_default, "RightArrow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref4) {
    var children = _ref4.children;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SliderContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      }
    }, function (_ref5) {
      var onClickRight = _ref5.onClickRight,
          activeRight = _ref5.activeRight;
      return children({
        onClick: onClickRight,
        active: activeRight
      });
    });
  }
});
Object.defineProperty(_default, "Other", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref6) {
    var children = _ref6.children;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SliderContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      }
    }, function (_ref7) {
      var activeItem = _ref7.activeItem;
      return children({
        active: activeItem
      });
    });
  }
});
Object.defineProperty(_default, "Items", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref8) {
    var children = _ref8.children,
        _ref8$xs = _ref8.xs,
        xs = _ref8$xs === void 0 ? '100%' : _ref8$xs,
        sm = _ref8.sm,
        _ref8$md = _ref8.md,
        md = _ref8$md === void 0 ? '100%' : _ref8$md,
        lg = _ref8.lg,
        _ref8$augment = _ref8.augment,
        augment = _ref8$augment === void 0 ? 0 : _ref8$augment,
        _ref8$infinite = _ref8.infinite,
        infinite = _ref8$infinite === void 0 ? false : _ref8$infinite;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SliderContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      }
    }, function (_ref9) {
      var activeItem = _ref9.activeItem,
          setLength = _ref9.setLength,
          setInfinite = _ref9.setInfinite,
          animate = _ref9.animate;
      var childrenArray = __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.toArray(children({
        active: activeItem
      }));
      var childrenItems = augment > 0 ? _toConsumableArray(childrenArray.slice(-augment)).concat(_toConsumableArray(childrenArray), _toConsumableArray(childrenArray.slice(0, augment))) : childrenArray; // console.log(childrenItems)

      setLength(childrenArray.length);
      setInfinite(infinite); // setShift(augment)

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
        container: true,
        nowrap: true,
        row: "start",
        items: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          transition: animate ? 'transform 0.3s ease-out' : 'none',
          transform: "translateX(calc(-".concat(100 / childrenItems.length, "% * ").concat(activeItem + augment, "))")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1443737219", [xs, xs, childrenItems.length, xs, childrenItems.length, xs, md, md, childrenItems.length, md, childrenItems.length, md]]]) + " " + "items"
      }, childrenItems.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(item, _objectSpread({}, item.props, {
          key: i
        }));
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1443737219",
        css: ".items.__jsx-style-dynamic-selector{position:relative;margin-left:calc(50% - ".concat(xs, " / 2);min-width:calc(").concat(xs, " * ").concat(childrenItems.length, ");max-width:calc(").concat(xs, " * ").concat(childrenItems.length, ");z-index:1;}.items.__jsx-style-dynamic-selector>*{width:calc(").concat(xs, ");}@media (min-width:992px){.items.__jsx-style-dynamic-selector{margin-left:calc(50% - ").concat(md, " / 2);min-width:calc(").concat(md, " * ").concat(childrenItems.length, ");max-width:calc(").concat(md, " * ").concat(childrenItems.length, ");}.items.__jsx-style-dynamic-selector>*{width:calc(").concat(md, ");}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtNc0IsQUFJaUMsQUFRdUIsQUFLa0IsQUFNZixrQkFsQmEsdUJBUTNELENBV0UsZUFOOEUsa0JBWkYsMERBYUcsa0JBWkgsMkRBYTVFLGlCQVpVLFVBQ1oiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9TbGlkZXIuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmNvbnN0IFNsaWRlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgb25DbGlja0xlZnQ6ICgpID0+IHt9LFxuICBvbkNsaWNrUmlnaHQ6ICgpID0+IHt9LFxuICBzZXRMZW5ndGg6ICgpID0+IHt9LFxuICBzZXRJbmZpbml0ZTogKCkgPT4ge30sXG4gIC8vIHNldFNoaWZ0OiAoKSA9PiB7fSxcbiAgYWN0aXZlSXRlbTogMCxcbiAgYW5pbWF0ZTogdHJ1ZSxcbiAgLy8gc2hpZnQ6IDAsXG4gIGR1cmF0aW9uOiAzMDAsXG4gIGFjdGl2ZUxlZnQ6IGZhbHNlLFxuICBhY3RpdmVSaWdodDogdHJ1ZSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWN0aXZlSXRlbTogMCxcbiAgICBhbmltYXRlOiB0cnVlLFxuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgYWN0aXZlTGVmdDogZmFsc2UsXG4gICAgYWN0aXZlUmlnaHQ6IGZhbHNlLFxuICB9XG5cbiAgY29udGV4dERhdGEgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIC8vIHNoaWZ0OiAwLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgfVxuXG4gIHN3aXBlRGF0YSA9IHtcbiAgICBzdGFydGVkVGltZXN0YW1wOiBudWxsLFxuICAgIHN0YXJ0UG9pbnQ6IHt9LFxuICAgIGxhc3RUaW1lc3RhbXA6IG51bGwsXG4gICAgbGFzdFBvaW50OiB7fSxcbiAgfVxuXG4gIGxlZnRDbGlja2VkID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5zdGF0ZS5hY3RpdmVJdGVtIC0gMTtcblxuICAgIGlmKHRoaXMuY29udGV4dERhdGEuaW5maW5pdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtIH0pXG5cbiAgICAgIGlmKGFjdGl2ZUl0ZW0gPCAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuaW1hdGU6IGZhbHNlLCBhY3RpdmVJdGVtOiB0aGlzLmNvbnRleHREYXRhLmxlbmd0aCAtIDEgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5pbWF0ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgfSwgdGhpcy5zdGF0ZS5kdXJhdGlvbiArIDEwKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihhY3RpdmVJdGVtID49IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtIH0pXG4gICAgICB0aGlzLnNldEFjdGl2ZUFycm93cyhhY3RpdmVJdGVtKVxuICAgIH1cblxuICB9XG5cbiAgcmlnaHRDbGlja2VkID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5zdGF0ZS5hY3RpdmVJdGVtICsgMTtcblxuICAgIGlmKHRoaXMuY29udGV4dERhdGEuaW5maW5pdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtIH0pXG5cbiAgICAgIGlmKGFjdGl2ZUl0ZW0gPj0gdGhpcy5jb250ZXh0RGF0YS5sZW5ndGgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5pbWF0ZTogZmFsc2UsIGFjdGl2ZUl0ZW06IDAgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5pbWF0ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgfSwgdGhpcy5zdGF0ZS5kdXJhdGlvbiArIDEwKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihhY3RpdmVJdGVtIDw9IHRoaXMuY29udGV4dERhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW0gfSlcbiAgICAgIHRoaXMuc2V0QWN0aXZlQXJyb3dzKGFjdGl2ZUl0ZW0pXG4gICAgfVxuXG4gIH1cblxuICBzd2lwZVN0YXJ0ID0gKGUpID0+IHtcbiAgICBpZihlLnRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlcy5pdGVtKDApXG5cbiAgICB0aGlzLnN3aXBlRGF0YSA9IHtcbiAgICAgIHN0YXJ0ZWRUaW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICBzdGFydFBvaW50OiB7eDogdG91Y2guc2NyZWVuWCwgeTogdG91Y2guc2NyZWVuWSB9LFxuICAgICAgbGFzdFRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgIGxhc3RQb2ludDoge3g6IHRvdWNoLnNjcmVlblgsIHk6IHRvdWNoLnNjcmVlblkgfSxcbiAgICB9XG4gIH1cblxuICBzd2lwZU1vdmUgPSAoZSkgPT4ge1xuICAgIGlmKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzLml0ZW0oMClcblxuICAgIHRoaXMuc3dpcGVEYXRhID0ge1xuICAgICAgLi4udGhpcy5zd2lwZURhdGEsXG4gICAgICBsYXN0VGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgICAgbGFzdFBvaW50OiB7eDogdG91Y2guc2NyZWVuWCwgeTogdG91Y2guc2NyZWVuWSB9LFxuICAgIH1cbiAgfVxuXG4gIHN3aXBlRW5kID0gKGUpID0+IHtcbiAgICBjb25zdCBkZWx0YVggPSB0aGlzLnN3aXBlRGF0YS5sYXN0UG9pbnQueCAtIHRoaXMuc3dpcGVEYXRhLnN0YXJ0UG9pbnQueFxuICAgIGNvbnN0IGRlbHRhWSA9IHRoaXMuc3dpcGVEYXRhLmxhc3RQb2ludC55IC0gdGhpcy5zd2lwZURhdGEuc3RhcnRQb2ludC55XG4gICAgLy8gY29uc3QgZGVsdGFUID0gdGhpcy5zd2lwZURhdGEubGFzdFRpbWVzdGFtcCAtIHRoaXMuc3dpcGVEYXRhLnN0YXJ0ZWRUaW1lc3RhbXBcblxuICAgIGNvbnNvbGUubG9nKCdkZWx0YVknLCBNYXRoLmFicyhkZWx0YVkpLCAnZGVsdGFYJywgTWF0aC5hYnMoZGVsdGFYKSlcblxuICAgIGlmKE1hdGguYWJzKGRlbHRhWSkgPj0gTWF0aC5hYnMoZGVsdGFYKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYoZGVsdGFYIDwwKSB7XG4gICAgICB0aGlzLnJpZ2h0Q2xpY2tlZChlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlZnRDbGlja2VkKGUpXG4gICAgfVxuICB9XG5cbiAgc2V0TGVuZ3RoID0gKGxlbmd0aCkgPT4ge1xuICAgIGlmKHRoaXMuY29udGV4dERhdGEubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY29udGV4dERhdGEubGVuZ3RoID0gbGVuZ3RoXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldEFjdGl2ZUFycm93cyh0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0pLCAwKVxufVxuICAvLyBzZXRTaGlmdCA9IChzaGlmdCkgPT4gc2hpZnQgIT09IHRoaXMuc3RhdGUuc2hpZnQgJiYgdGhpcy5zZXRTdGF0ZSh7IHNoaWZ0IH0pXG4gIHNldEluZmluaXRlID0gKGluZmluaXRlKSA9PiB7XG4gICAgaWYodGhpcy5jb250ZXh0RGF0YS5pbmZpbml0ZSA9PT0gaW5maW5pdGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY29udGV4dERhdGEuaW5maW5pdGUgPSBpbmZpbml0ZVxuICAgIHRoaXMuc2V0QWN0aXZlQXJyb3dzKHRoaXMuc3RhdGUuYWN0aXZlSXRlbSlcbiAgfVxuXG4gIHNldEFjdGl2ZUFycm93cyA9IChhY3RpdmVJdGVtKSA9PiB0aGlzLmNvbnRleHREYXRhLmluZmluaXRlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNldFN0YXRlKHthY3RpdmVMZWZ0OiB0cnVlLCBhY3RpdmVSaWdodDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zZXRTdGF0ZSh7YWN0aXZlTGVmdDogYWN0aXZlSXRlbSA+IDAsIGFjdGl2ZVJpZ2h0OiBhY3RpdmVJdGVtIDwgdGhpcy5jb250ZXh0RGF0YS5sZW5ndGggLSAxIH0pXG5cbiAgc3RhdGljIExlZnRBcnJvdyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8U2xpZGVyQ29udGV4dC5Db25zdW1lcj57XG4gICAgICAoeyBvbkNsaWNrTGVmdCwgYWN0aXZlTGVmdCB9KSA9PiBjaGlsZHJlbih7IG9uQ2xpY2s6IG9uQ2xpY2tMZWZ0LCBhY3RpdmU6IGFjdGl2ZUxlZnQgfSlcbiAgICB9PC9TbGlkZXJDb250ZXh0LkNvbnN1bWVyPlxuICApXG5cbiAgc3RhdGljIFJpZ2h0QXJyb3cgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPFNsaWRlckNvbnRleHQuQ29uc3VtZXI+e1xuICAgICAgKHsgb25DbGlja1JpZ2h0LCBhY3RpdmVSaWdodCB9KSA9PiBjaGlsZHJlbih7IG9uQ2xpY2s6IG9uQ2xpY2tSaWdodCwgYWN0aXZlOiBhY3RpdmVSaWdodCB9KVxuICAgIH08L1NsaWRlckNvbnRleHQuQ29uc3VtZXI+XG4gIClcblxuICBzdGF0aWMgT3RoZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPFNsaWRlckNvbnRleHQuQ29uc3VtZXI+eyh7IGFjdGl2ZUl0ZW0gfSkgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgYWN0aXZlOiBhY3RpdmVJdGVtIH0pXG4gICAgfX08L1NsaWRlckNvbnRleHQuQ29uc3VtZXI+XG4gIClcblxuICBzdGF0aWMgSXRlbXMgPSAoeyBjaGlsZHJlbiwgeHMgPSAnMTAwJScsIHNtLCBtZCA9ICcxMDAlJywgbGcsIGF1Z21lbnQgPSAwLCBpbmZpbml0ZSA9IGZhbHNlIH0pID0+IChcbiAgICA8U2xpZGVyQ29udGV4dC5Db25zdW1lcj57XG4gICAgICAoeyBhY3RpdmVJdGVtLCBzZXRMZW5ndGgsIHNldEluZmluaXRlLCBhbmltYXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4oeyBhY3RpdmU6IGFjdGl2ZUl0ZW0gfSkpXG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW5JdGVtcyA9IGF1Z21lbnQgPiAwID8gWy4uLmNoaWxkcmVuQXJyYXkuc2xpY2UoLWF1Z21lbnQpLCAuLi5jaGlsZHJlbkFycmF5LCAuLi5jaGlsZHJlbkFycmF5LnNsaWNlKDAsIGF1Z21lbnQpXSA6IGNoaWxkcmVuQXJyYXlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGlsZHJlbkl0ZW1zKVxuXG4gICAgICAgIHNldExlbmd0aChjaGlsZHJlbkFycmF5Lmxlbmd0aClcbiAgICAgICAgc2V0SW5maW5pdGUoaW5maW5pdGUpXG4gICAgICAgIC8vIHNldFNoaWZ0KGF1Z21lbnQpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxGcm93IGNvbnRhaW5lciBub3dyYXAgcm93PVwic3RhcnRcIiBpdGVtcz1cInN0YXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCIgc3R5bGU9e3sgdHJhbnNpdGlvbjogYW5pbWF0ZSA/ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCcgOiAnbm9uZScsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoY2FsYygtJHsgMTAwIC8gY2hpbGRyZW5JdGVtcy5sZW5ndGggfSUgKiAkeyBhY3RpdmVJdGVtICsgYXVnbWVudCB9KSlgIH19PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtcy5tYXAoKGl0ZW0sIGkpID0+IFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7IC4uLml0ZW0ucHJvcHMsIGtleTogaSB9KSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAuaXRlbXMge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtICR7IHhzIH0gLyAyKTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiBjYWxjKCR7IHhzIH0gKiAkeyBjaGlsZHJlbkl0ZW1zLmxlbmd0aCB9KTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKCR7IHhzIH0gKiAkeyBjaGlsZHJlbkl0ZW1zLmxlbmd0aCB9KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW1zID4gOmdsb2JhbCgqKSB7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCR7IHhzIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgICAgLml0ZW1zIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAkeyBtZCB9IC8gMik7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBjYWxjKCR7IG1kIH0gKiAkeyBjaGlsZHJlbkl0ZW1zLmxlbmd0aCB9KTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoJHsgbWQgfSAqICR7IGNoaWxkcmVuSXRlbXMubGVuZ3RoIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLml0ZW1zID4gOmdsb2JhbCgqKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoJHsgbWQgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIH08L1NsaWRlckNvbnRleHQuQ29uc3VtZXI+XG4gIClcblxuICBzdGF0aWMgUGljdHVyZSA9ICh7IHBpY3R1cmUsIGhlaWdodCA9ICc2Ni41JScgfSkgPT4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgc3R5bGU9e3sgLi4ucGljdHVyZS5maWxlICYmIHtiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsgcGljdHVyZS5maWxlIH0pYH0gfX0vPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHsgaGVpZ2h0IH07XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgIC8qIGhlaWdodDogNTEycHg7ICovXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgb25DbGlja0xlZnQ6IHRoaXMubGVmdENsaWNrZWQsXG4gICAgICAgIG9uQ2xpY2tSaWdodDogdGhpcy5yaWdodENsaWNrZWQsXG4gICAgICAgIGFjdGl2ZUl0ZW06IHRoaXMuc3RhdGUuYWN0aXZlSXRlbSxcbiAgICAgICAgc2V0TGVuZ3RoOiB0aGlzLnNldExlbmd0aCxcbiAgICAgICAgc2V0SW5maW5pdGU6IHRoaXMuc2V0SW5maW5pdGUsXG4gICAgICAgIC8vIHNoaWZ0OiAwLFxuICAgICAgICAvLyBzZXRTaGlmdDogdGhpcy5zZXRTaGlmdCxcbiAgICAgICAgYW5pbWF0ZTogdGhpcy5zdGF0ZS5hbmltYXRlLFxuICAgICAgICBhY3RpdmVMZWZ0OiB0aGlzLnN0YXRlLmFjdGl2ZUxlZnQsXG4gICAgICAgIGFjdGl2ZVJpZ2h0OiB0aGlzLnN0YXRlLmFjdGl2ZVJpZ2h0LFxuICAgICAgfX0+XG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8RnJvdyBjb250YWluZXIgcm93PVwic3RhcnRcIiBub3dyYXA+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzbGlkZXItYm94XCIgb25Ub3VjaFN0YXJ0PXt0aGlzLnN3aXBlU3RhcnR9IG9uVG91Y2hNb3ZlPXt0aGlzLnN3aXBlTW92ZX0gb25Ub3VjaEVuZD17dGhpcy5zd2lwZUVuZH0+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNsaWRlci1ib3gge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmM2ZmOyAqL1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIDwvU2xpZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=src/next/components/Slider.js */"),
        dynamic: [xs, xs, childrenItems.length, xs, childrenItems.length, xs, md, md, childrenItems.length, md, childrenItems.length, md]
      }));
    });
  }
});
Object.defineProperty(_default, "Picture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref10) {
    var picture = _ref10.picture,
        _ref10$height = _ref10.height,
        height = _ref10$height === void 0 ? '66.5%' : _ref10$height;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      style: _objectSpread({}, picture.file && {
        backgroundImage: "url(".concat(picture.file, ")")
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1769108514", [height]]]) + " " + "img"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "1769108514",
      css: ".img.__jsx-style-dynamic-selector{width:100%;padding-bottom:".concat(height, ";background-repeat:no-repeat no-repeat;background-position:center center;background-size:contain;}@media (min-width:992px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Pa0IsQUFHc0IsV0FDaUMsNENBQ04sc0NBQ0osa0NBQ1Ysd0JBQzFCIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvU2xpZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuXG5jb25zdCBTbGlkZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIG9uQ2xpY2tMZWZ0OiAoKSA9PiB7fSxcbiAgb25DbGlja1JpZ2h0OiAoKSA9PiB7fSxcbiAgc2V0TGVuZ3RoOiAoKSA9PiB7fSxcbiAgc2V0SW5maW5pdGU6ICgpID0+IHt9LFxuICAvLyBzZXRTaGlmdDogKCkgPT4ge30sXG4gIGFjdGl2ZUl0ZW06IDAsXG4gIGFuaW1hdGU6IHRydWUsXG4gIC8vIHNoaWZ0OiAwLFxuICBkdXJhdGlvbjogMzAwLFxuICBhY3RpdmVMZWZ0OiBmYWxzZSxcbiAgYWN0aXZlUmlnaHQ6IHRydWUsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFjdGl2ZUl0ZW06IDAsXG4gICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGFjdGl2ZUxlZnQ6IGZhbHNlLFxuICAgIGFjdGl2ZVJpZ2h0OiBmYWxzZSxcbiAgfVxuXG4gIGNvbnRleHREYXRhID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICAvLyBzaGlmdDogMCxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gIH1cblxuICBzd2lwZURhdGEgPSB7XG4gICAgc3RhcnRlZFRpbWVzdGFtcDogbnVsbCxcbiAgICBzdGFydFBvaW50OiB7fSxcbiAgICBsYXN0VGltZXN0YW1wOiBudWxsLFxuICAgIGxhc3RQb2ludDoge30sXG4gIH1cblxuICBsZWZ0Q2xpY2tlZCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuc3RhdGUuYWN0aXZlSXRlbSAtIDE7XG5cbiAgICBpZih0aGlzLmNvbnRleHREYXRhLmluZmluaXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbSB9KVxuXG4gICAgICBpZihhY3RpdmVJdGVtIDwgMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiBmYWxzZSwgYWN0aXZlSXRlbTogdGhpcy5jb250ZXh0RGF0YS5sZW5ndGggLSAxIH0pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuaW1hdGU6IHRydWUgfSlcbiAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgIH0sIHRoaXMuc3RhdGUuZHVyYXRpb24gKyAxMClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoYWN0aXZlSXRlbSA+PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbSB9KVxuICAgICAgdGhpcy5zZXRBY3RpdmVBcnJvd3MoYWN0aXZlSXRlbSlcbiAgICB9XG5cbiAgfVxuXG4gIHJpZ2h0Q2xpY2tlZCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuc3RhdGUuYWN0aXZlSXRlbSArIDE7XG5cbiAgICBpZih0aGlzLmNvbnRleHREYXRhLmluZmluaXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbSB9KVxuXG4gICAgICBpZihhY3RpdmVJdGVtID49IHRoaXMuY29udGV4dERhdGEubGVuZ3RoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuaW1hdGU6IGZhbHNlLCBhY3RpdmVJdGVtOiAwIH0pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuaW1hdGU6IHRydWUgfSlcbiAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgIH0sIHRoaXMuc3RhdGUuZHVyYXRpb24gKyAxMClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoYWN0aXZlSXRlbSA8PSB0aGlzLmNvbnRleHREYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtIH0pXG4gICAgICB0aGlzLnNldEFjdGl2ZUFycm93cyhhY3RpdmVJdGVtKVxuICAgIH1cblxuICB9XG5cbiAgc3dpcGVTdGFydCA9IChlKSA9PiB7XG4gICAgaWYoZS50b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXMuaXRlbSgwKVxuXG4gICAgdGhpcy5zd2lwZURhdGEgPSB7XG4gICAgICBzdGFydGVkVGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgICAgc3RhcnRQb2ludDoge3g6IHRvdWNoLnNjcmVlblgsIHk6IHRvdWNoLnNjcmVlblkgfSxcbiAgICAgIGxhc3RUaW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICBsYXN0UG9pbnQ6IHt4OiB0b3VjaC5zY3JlZW5YLCB5OiB0b3VjaC5zY3JlZW5ZIH0sXG4gICAgfVxuICB9XG5cbiAgc3dpcGVNb3ZlID0gKGUpID0+IHtcbiAgICBpZihlLnRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlcy5pdGVtKDApXG5cbiAgICB0aGlzLnN3aXBlRGF0YSA9IHtcbiAgICAgIC4uLnRoaXMuc3dpcGVEYXRhLFxuICAgICAgbGFzdFRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgIGxhc3RQb2ludDoge3g6IHRvdWNoLnNjcmVlblgsIHk6IHRvdWNoLnNjcmVlblkgfSxcbiAgICB9XG4gIH1cblxuICBzd2lwZUVuZCA9IChlKSA9PiB7XG4gICAgY29uc3QgZGVsdGFYID0gdGhpcy5zd2lwZURhdGEubGFzdFBvaW50LnggLSB0aGlzLnN3aXBlRGF0YS5zdGFydFBvaW50LnhcbiAgICBjb25zdCBkZWx0YVkgPSB0aGlzLnN3aXBlRGF0YS5sYXN0UG9pbnQueSAtIHRoaXMuc3dpcGVEYXRhLnN0YXJ0UG9pbnQueVxuICAgIC8vIGNvbnN0IGRlbHRhVCA9IHRoaXMuc3dpcGVEYXRhLmxhc3RUaW1lc3RhbXAgLSB0aGlzLnN3aXBlRGF0YS5zdGFydGVkVGltZXN0YW1wXG5cbiAgICBjb25zb2xlLmxvZygnZGVsdGFZJywgTWF0aC5hYnMoZGVsdGFZKSwgJ2RlbHRhWCcsIE1hdGguYWJzKGRlbHRhWCkpXG5cbiAgICBpZihNYXRoLmFicyhkZWx0YVkpID49IE1hdGguYWJzKGRlbHRhWCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKGRlbHRhWCA8MCkge1xuICAgICAgdGhpcy5yaWdodENsaWNrZWQoZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sZWZ0Q2xpY2tlZChlKVxuICAgIH1cbiAgfVxuXG4gIHNldExlbmd0aCA9IChsZW5ndGgpID0+IHtcbiAgICBpZih0aGlzLmNvbnRleHREYXRhLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHREYXRhLmxlbmd0aCA9IGxlbmd0aFxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRBY3RpdmVBcnJvd3ModGhpcy5zdGF0ZS5hY3RpdmVJdGVtKSwgMClcbn1cbiAgLy8gc2V0U2hpZnQgPSAoc2hpZnQpID0+IHNoaWZ0ICE9PSB0aGlzLnN0YXRlLnNoaWZ0ICYmIHRoaXMuc2V0U3RhdGUoeyBzaGlmdCB9KVxuICBzZXRJbmZpbml0ZSA9IChpbmZpbml0ZSkgPT4ge1xuICAgIGlmKHRoaXMuY29udGV4dERhdGEuaW5maW5pdGUgPT09IGluZmluaXRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHREYXRhLmluZmluaXRlID0gaW5maW5pdGVcbiAgICB0aGlzLnNldEFjdGl2ZUFycm93cyh0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0pXG4gIH1cblxuICBzZXRBY3RpdmVBcnJvd3MgPSAoYWN0aXZlSXRlbSkgPT4gdGhpcy5jb250ZXh0RGF0YS5pbmZpbml0ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZXRTdGF0ZSh7YWN0aXZlTGVmdDogdHJ1ZSwgYWN0aXZlUmlnaHQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUxlZnQ6IGFjdGl2ZUl0ZW0gPiAwLCBhY3RpdmVSaWdodDogYWN0aXZlSXRlbSA8IHRoaXMuY29udGV4dERhdGEubGVuZ3RoIC0gMSB9KVxuXG4gIHN0YXRpYyBMZWZ0QXJyb3cgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPFNsaWRlckNvbnRleHQuQ29uc3VtZXI+e1xuICAgICAgKHsgb25DbGlja0xlZnQsIGFjdGl2ZUxlZnQgfSkgPT4gY2hpbGRyZW4oeyBvbkNsaWNrOiBvbkNsaWNrTGVmdCwgYWN0aXZlOiBhY3RpdmVMZWZ0IH0pXG4gICAgfTwvU2xpZGVyQ29udGV4dC5Db25zdW1lcj5cbiAgKVxuXG4gIHN0YXRpYyBSaWdodEFycm93ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxTbGlkZXJDb250ZXh0LkNvbnN1bWVyPntcbiAgICAgICh7IG9uQ2xpY2tSaWdodCwgYWN0aXZlUmlnaHQgfSkgPT4gY2hpbGRyZW4oeyBvbkNsaWNrOiBvbkNsaWNrUmlnaHQsIGFjdGl2ZTogYWN0aXZlUmlnaHQgfSlcbiAgICB9PC9TbGlkZXJDb250ZXh0LkNvbnN1bWVyPlxuICApXG5cbiAgc3RhdGljIE90aGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxTbGlkZXJDb250ZXh0LkNvbnN1bWVyPnsoeyBhY3RpdmVJdGVtIH0pID0+IHtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7IGFjdGl2ZTogYWN0aXZlSXRlbSB9KVxuICAgIH19PC9TbGlkZXJDb250ZXh0LkNvbnN1bWVyPlxuICApXG5cbiAgc3RhdGljIEl0ZW1zID0gKHsgY2hpbGRyZW4sIHhzID0gJzEwMCUnLCBzbSwgbWQgPSAnMTAwJScsIGxnLCBhdWdtZW50ID0gMCwgaW5maW5pdGUgPSBmYWxzZSB9KSA9PiAoXG4gICAgPFNsaWRlckNvbnRleHQuQ29uc3VtZXI+e1xuICAgICAgKHsgYWN0aXZlSXRlbSwgc2V0TGVuZ3RoLCBzZXRJbmZpbml0ZSwgYW5pbWF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKHsgYWN0aXZlOiBhY3RpdmVJdGVtIH0pKVxuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuSXRlbXMgPSBhdWdtZW50ID4gMCA/IFsuLi5jaGlsZHJlbkFycmF5LnNsaWNlKC1hdWdtZW50KSwgLi4uY2hpbGRyZW5BcnJheSwgLi4uY2hpbGRyZW5BcnJheS5zbGljZSgwLCBhdWdtZW50KV0gOiBjaGlsZHJlbkFycmF5XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coY2hpbGRyZW5JdGVtcylcblxuICAgICAgICBzZXRMZW5ndGgoY2hpbGRyZW5BcnJheS5sZW5ndGgpXG4gICAgICAgIHNldEluZmluaXRlKGluZmluaXRlKVxuICAgICAgICAvLyBzZXRTaGlmdChhdWdtZW50KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8RnJvdyBjb250YWluZXIgbm93cmFwIHJvdz1cInN0YXJ0XCIgaXRlbXM9XCJzdGFydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiIHN0eWxlPXt7IHRyYW5zaXRpb246IGFuaW1hdGUgPyAndHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQnIDogJ25vbmUnLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKGNhbGMoLSR7IDEwMCAvIGNoaWxkcmVuSXRlbXMubGVuZ3RoIH0lICogJHsgYWN0aXZlSXRlbSArIGF1Z21lbnQgfSkpYCB9fT5cbiAgICAgICAgICAgICAge2NoaWxkcmVuSXRlbXMubWFwKChpdGVtLCBpKSA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoaXRlbSwgeyAuLi5pdGVtLnByb3BzLCBrZXk6IGkgfSkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgLml0ZW1zIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAkeyB4cyB9IC8gMik7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYygkeyB4cyB9ICogJHsgY2hpbGRyZW5JdGVtcy5sZW5ndGggfSk7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygkeyB4cyB9ICogJHsgY2hpbGRyZW5JdGVtcy5sZW5ndGggfSk7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtcyA+IDpnbG9iYWwoKikge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygkeyB4cyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgIC5pdGVtcyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gJHsgbWQgfSAvIDIpO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYygkeyBtZCB9ICogJHsgY2hpbGRyZW5JdGVtcy5sZW5ndGggfSk7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKCR7IG1kIH0gKiAkeyBjaGlsZHJlbkl0ZW1zLmxlbmd0aCB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pdGVtcyA+IDpnbG9iYWwoKikge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCR7IG1kIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICB9PC9TbGlkZXJDb250ZXh0LkNvbnN1bWVyPlxuICApXG5cbiAgc3RhdGljIFBpY3R1cmUgPSAoeyBwaWN0dXJlLCBoZWlnaHQgPSAnNjYuNSUnIH0pID0+IChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiIHN0eWxlPXt7IC4uLnBpY3R1cmUuZmlsZSAmJiB7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7IHBpY3R1cmUuZmlsZSB9KWB9IH19Lz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206ICR7IGhlaWdodCB9O1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAvKiBoZWlnaHQ6IDUxMnB4OyAqL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgIG9uQ2xpY2tMZWZ0OiB0aGlzLmxlZnRDbGlja2VkLFxuICAgICAgICBvbkNsaWNrUmlnaHQ6IHRoaXMucmlnaHRDbGlja2VkLFxuICAgICAgICBhY3RpdmVJdGVtOiB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0sXG4gICAgICAgIHNldExlbmd0aDogdGhpcy5zZXRMZW5ndGgsXG4gICAgICAgIHNldEluZmluaXRlOiB0aGlzLnNldEluZmluaXRlLFxuICAgICAgICAvLyBzaGlmdDogMCxcbiAgICAgICAgLy8gc2V0U2hpZnQ6IHRoaXMuc2V0U2hpZnQsXG4gICAgICAgIGFuaW1hdGU6IHRoaXMuc3RhdGUuYW5pbWF0ZSxcbiAgICAgICAgYWN0aXZlTGVmdDogdGhpcy5zdGF0ZS5hY3RpdmVMZWZ0LFxuICAgICAgICBhY3RpdmVSaWdodDogdGhpcy5zdGF0ZS5hY3RpdmVSaWdodCxcbiAgICAgIH19PlxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPEZyb3cgY29udGFpbmVyIHJvdz1cInN0YXJ0XCIgbm93cmFwPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2xpZGVyLWJveFwiIG9uVG91Y2hTdGFydD17dGhpcy5zd2lwZVN0YXJ0fSBvblRvdWNoTW92ZT17dGhpcy5zd2lwZU1vdmV9IG9uVG91Y2hFbmQ9e3RoaXMuc3dpcGVFbmR9PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zbGlkZXItYm94IHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwZjNmZjsgKi9cbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICA8L1NsaWRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=src/next/components/Slider.js */"),
      dynamic: [height]
    }));
  }
});


/***/ }),

/***/ "./components/SocialLogin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__("qs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 // import Frow from './Frow'
// import Theme from '../styles/theme'

var Provider =
/*#__PURE__*/
function (_Component) {
  _inherits(Provider, _Component);

  function Provider() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Provider.__proto__ || Object.getPrototypeOf(Provider)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "callback", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.props.onSuccess && _this.props.onSuccess(e.detail); // console.log(e.detail)
      }
    }), _temp));
  }

  _createClass(Provider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('loginCallback', this.callback);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('loginCallback', this.callback);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Provider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Popup =
/*#__PURE__*/
function (_Component2) {
  _inherits(Popup, _Component2);

  function Popup() {
    var _ref2;

    var _temp2, _this2;

    _classCallCheck(this, Popup);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_ref2 = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this2), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var width = _this2.props.width || 600;
        var height = _this2.props.height || 500;
        var options = {
          width: width,
          height: height,
          top: Math.floor(window.screenY + (window.outerHeight - height) / 2.5),
          left: Math.floor(window.screenX + (window.outerWidth - width) / 2)
        };
        window.open(_this2.props.url, 'social_login', __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(options, {
          delimiter: ','
        })); //qs.stringify(options, ',')
      }
    }), _temp2));
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      return this.props.children({
        onClick: this.onClick
      });
    }
  }]);

  return Popup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = ({
  Provider: Provider,
  Popup: Popup
});

/***/ }),

/***/ "./components/Testimonial.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__("./lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WPLink__ = __webpack_require__("./components/WPLink.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Testimonial.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // import Link from 'next/link'
// import Frow from './Frow'





var Testimonial =
/*#__PURE__*/
function (_Component) {
  _inherits(Testimonial, _Component);

  function Testimonial() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Testimonial);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Testimonial.__proto__ || Object.getPrototypeOf(Testimonial)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          open: !_this.state.open
        });
      }
    }), _temp));
  }

  _createClass(Testimonial, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          author = _props.author,
          authorUrl = _props.authorUrl,
          date = _props.date,
          object = _props.object,
          objectTitle = _props.objectTitle,
          children = _props.children;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "box".concat(this.state.open ? ' open' : '')
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]])
      }, authorUrl ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: authorUrl,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]])
      }, author) : author), " ", __WEBPACK_IMPORTED_MODULE_3__lib_utils__["b" /* dateFormatter */].format(new Date(date))), object && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "object"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__WPLink__["a" /* default */], {
        wp: object,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]])
      }, objectTitle))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "more-box"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "more"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.toggleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]])
      }, this.state.open ? 'Свернуть' : 'Ещё'))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2944595145", [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "txt"
      }, children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2944595145",
        css: ".box.__jsx-style-dynamic-selector{position:relative;background-color:".concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, ";border-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, ";padding:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), " 1rem;overflow:hidden;}.header.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, ";margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), ";}.object.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, ";margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), ";}.txt.__jsx-style-dynamic-selector{max-height:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), ";overflow:hidden;}.open.__jsx-style-dynamic-selector .txt.__jsx-style-dynamic-selector{max-height:50%;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), ";}.more-box.__jsx-style-dynamic-selector{position:relative;}.open.__jsx-style-dynamic-selector .more-box.__jsx-style-dynamic-selector{position:absolute;bottom:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), ";}.open.__jsx-style-dynamic-selector .more.__jsx-style-dynamic-selector{position:absolute;top:0;}.more.__jsx-style-dynamic-selector{position:absolute;background:linear-gradient(to top,").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, " 90%,rgba(245,245,245,0));z-index:10;width:100%;height:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), ";border-bottom-left-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, ";border-bottom-right-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, ";top:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), ";padding-top:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), ";}.more.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{border:none;background:none;padding:0;font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}@media (min-width:992px){.box.__jsx-style-dynamic-selector{border-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, ";}.header.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), ";}.object.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), ";}.txt.__jsx-style-dynamic-selector{max-height:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), ";}.open.__jsx-style-dynamic-selector .txt.__jsx-style-dynamic-selector{max-height:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), ";}.more.__jsx-style-dynamic-selector{height:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), ";border-bottom-left-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, ";border-bottom-right-radius:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, ";top:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), ";padding-top:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NtQixBQUc4QixBQVFpQixBQUtBLEFBS0ssQUFNekIsQUFLRyxBQUlBLEFBS0EsQUFLQSxBQWFOLEFBVWtDLEFBSUEsQUFJQSxBQUlILEFBSUMsQUFJTCxZQTdCdkIsR0FoQzJCLEdBeEJHLEFBNkJoRCxBQUlzQyxBQUs5QixBQUt3RixNQUpoRyxJQWtCWSxPQWpEaUMsQUFLQSxFQXlFZSxDQTVCMUMsRUF4Q0EsQ0E0RGhCLEFBSUMsR0FmRCxBQUdBLEFBSUEsVUF4Q0YsQUF5QjRCLEVBdkM1QixFQUtBLE1BeEI2QyxjQVE3QyxBQUtBLGVBeUU2RCxjQXJGakIsQUEwQy9CLE9BZ0JJLElBZkosV0FFMEIsQUFjdkMsb0JBMURrQixDQXFGb0IsZUFwRnRDLENBNEMwRCxrQkF5Q1osc0NBeENhLElBeUN6RCxxREF4Q2tDLGtDQUNRLDBDQUM1QyIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL1Rlc3RpbW9uaWFsLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4vLyBpbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgZGF0ZUZvcm1hdHRlciB9IGZyb20gJy4uL2xpYi91dGlscydcbmltcG9ydCBXUExpbmsgZnJvbSAnLi9XUExpbmsnXG5cbmNsYXNzIFRlc3RpbW9uaWFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gIH1cblxuICB0b2dnbGVPcGVuID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhdXRob3IsIGF1dGhvclVybCwgZGF0ZSwgb2JqZWN0LCBvYmplY3RUaXRsZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgIDxGcmFnbWVudD5cbiAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2Bib3gke3RoaXMuc3RhdGUub3BlbiA/ICcgb3BlbicgOiAnJ31gfT5cbiAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlclwiPjxiPntcbiAgICAgICAgICAgYXV0aG9yVXJsXG4gICAgICAgICAgICAgPyA8YSBocmVmPXthdXRob3JVcmx9IHRhcmdldD1cIl9ibGFua1wiPnthdXRob3J9PC9hPlxuICAgICAgICAgICAgIDogYXV0aG9yXG4gICAgICAgICAgIH08L2I+IHtkYXRlRm9ybWF0dGVyLmZvcm1hdChuZXcgRGF0ZShkYXRlKSl9PC9wPlxuICAgICAgICAge29iamVjdCAmJiA8cCBjbGFzc05hbWU9XCJvYmplY3RcIj48V1BMaW5rIHdwPXtvYmplY3R9PjxhPntvYmplY3RUaXRsZX08L2E+PC9XUExpbms+PC9wPn1cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1ib3hcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlXCI+XG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59Pnt0aGlzLnN0YXRlLm9wZW4gPyAn0KHQstC10YDQvdGD0YLRjCcgOiAn0JXRidGRJ308L2J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAuYm94IHtcbiAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYmFja2dyb3VuZExpZ2h0R3JheSB9O1xuICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS54cy5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgICAgICBwYWRkaW5nOiAkeyBUaGVtZS54cy52cigwLjUpfSAxcmVtO1xuICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgfVxuXG4gICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy50ZXh0R3JheSB9O1xuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgICAgIH1cblxuICAgICAgICAgLm9iamVjdCB7XG4gICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dExpZ2h0R3JheSB9O1xuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgICAgIH1cblxuICAgICAgICAgLnR4dCB7XG4gICAgICAgICAgIG1heC1oZWlnaHQ6ICR7IFRoZW1lLnhzLnZyKDgpfTtcbiAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgLyogdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2Utb3V0OyAqL1xuICAgICAgICAgfVxuXG4gICAgICAgICAub3BlbiAudHh0IHtcbiAgICAgICAgICAgbWF4LWhlaWdodDogNTAlO1xuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxLjUpfTtcbiAgICAgICAgIH1cblxuICAgICAgICAgLm1vcmUtYm94IHtcbiAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgfVxuXG4gICAgICAgICAub3BlbiAubW9yZS1ib3gge1xuICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgIGJvdHRvbTogJHsgVGhlbWUueHMudnIoMS43NSl9O1xuICAgICAgICAgfVxuXG4gICAgICAgICAub3BlbiAubW9yZSB7XG4gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgfVxuXG4gICAgICAgICAubW9yZSB7XG4gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHsgVGhlbWUuY29sb3JzLmJhY2tncm91bmRMaWdodEdyYXkgfSA5MCUsIHJnYmEoMjQ1LCAyNDUsIDI0NSwgMCkpO1xuICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgaGVpZ2h0OiAkeyBUaGVtZS54cy52cigxLjUpfTtcbiAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgIHRvcDogJHsgVGhlbWUueHMudnIoOCAtIDEuNSl9O1xuICAgICAgICAgICBwYWRkaW5nLXRvcDogJHsgVGhlbWUueHMudnIoMC41KX07XG4gICAgICAgICB9XG5cbiAgICAgICAgIC5tb3JlIGJ1dHRvbiB7XG4gICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgIH1cblxuICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgICAgLyogbWF4LWhlaWdodDogJHsgVGhlbWUubWQudnIoMTIpfTsgKi9cbiAgICAgICAgICAgfVxuICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC5vYmplY3Qge1xuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEpfTtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC50eHQge1xuICAgICAgICAgICAgIG1heC1oZWlnaHQ6ICR7IFRoZW1lLm1kLnZyKDgpfTtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC5vcGVuIC50eHQge1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAkeyBUaGVtZS5tZC52cig4MCl9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC5tb3JlIHtcbiAgICAgICAgICAgICBoZWlnaHQ6ICR7IFRoZW1lLm1kLnZyKDEuNSl9O1xuICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgICAgdG9wOiAkeyBUaGVtZS5tZC52cig4IC0gMS41KX07XG4gICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7IFRoZW1lLm1kLnZyKDAuNSl9O1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgYH08L3N0eWxlPlxuICAgICA8L0ZyYWdtZW50PlxuICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsXG4iXX0= */\n/*@ sourceURL=src/next/components/Testimonial.js */"),
        dynamic: [__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.textLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.backgroundLightGray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(12), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(80), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(8 - 1.5), __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].md.vr(0.5)]
      }));
    }
  }]);

  return Testimonial;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Testimonial);

/***/ }),

/***/ "./components/TestimonialAddDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TestimonialAddForm */
/* unused harmony export TestimonialSocialLogin */
/* unused harmony export TestimonialAuthorInfo */
/* unused harmony export TestimonialSentToModeration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Modal__ = __webpack_require__("./components/Modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button__ = __webpack_require__("./components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AppContext__ = __webpack_require__("./components/AppContext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SelectBox__ = __webpack_require__("./components/SelectBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__WPLink__ = __webpack_require__("./components/WPLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icons__ = __webpack_require__("./components/Icons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SocialLogin__ = __webpack_require__("./components/SocialLogin.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/TestimonialAddDialog.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n                  mutation CreateTestimonialMutation($input: CreateTestimonialMutationInput!) {\n                    createTestimonial(input: $input)\n                    @rest(type: \"Testimonial\", path: \"/wp/v2/testimonials\", method: \"POST\") {\n                      id\n                    }\n                  }\n                "]);



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // import Router from 'next/router'


 // import qs from 'qs'











var TestimonialAddDialog =
/*#__PURE__*/
function (_Component) {
  _inherits(TestimonialAddDialog, _Component);

  function TestimonialAddDialog() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TestimonialAddDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TestimonialAddDialog.__proto__ || Object.getPrototypeOf(TestimonialAddDialog)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false,
        status: 'new',
        author: '',
        profileLink: '',
        product: null,
        text: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: false
        });

        if (TestimonialAddDialog.isAutoopenKeywordSpecified()) {// window.location.hash = ""
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onTextChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return _this.setState({
          text: e.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onProductSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(product) {
        // console.log('onProductSelect', product)
        _this.setState({
          product: product
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onAuthorChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(author, profileLink) {
        _this.setState({
          author: author,
          profileLink: profileLink
        });
      }
    }), _temp));
  }

  _createClass(TestimonialAddDialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log('TestimonialAddDialog#componentDidMount', this.props.product, Router.query)
      if (this.props.product && TestimonialAddDialog.isAutoopenKeywordSpecified()) {
        this.setState({
          open: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          products = _props.products;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, children({
        onClick: this.onClick
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Modal__["c" /* default */], {
        open: this.state.open,
        onClose: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["987406788", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(2)]]]) + " " + "dialog"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Modal__["a" /* ModalCloseButton */], {
        onClick: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Mutation"], {
        variables: {
          input: {
            author: this.state.author,
            product: this.state.product && this.state.product.id,
            profile_link: this.state.profileLink,
            text: this.state.text
          }
        },
        mutation: __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject),
        onCompleted: function onCompleted() {
          _this2.setState({
            status: 'sent',
            text: '',
            product: null
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, function (createTestimonial, _ref2) {
        var data = _ref2.data,
            loading = _ref2.loading,
            error = _ref2.error,
            called = _ref2.called;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, console.log('createTestimonial', data, loading, error, called), (_this2.state.status === 'new' || _this2.state.status === 'sending') && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialAddForm, {
          product: _this2.state.product,
          products: products,
          text: _this2.state.text,
          author: _this2.state.author,
          profileLink: _this2.state.profileLink,
          onTextChange: _this2.onTextChange,
          onProductSelect: _this2.onProductSelect,
          onAuthorChange: _this2.onAuthorChange,
          onSubmit: function onSubmit() {
            _this2.setState({
              status: 'sending'
            });

            createTestimonial();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }), _this2.state.status === 'sent' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialSentToModeration, {
          onClick: function onClick() {
            _this2.onClose();

            _this2.setState({
              status: 'new'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["987406788", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(2)]]]) + " " + "mobile-close-box"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Modal__["b" /* ModalCloseButtonMobile */], {
        onClick: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "987406788",
        css: ".dialog.__jsx-style-dynamic-selector{background-color:#fff;padding:1.33333rem;width:100%;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.mobile-close-box.__jsx-style-dynamic-selector{margin-top:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(2), ";}@media (min-width:992px){.dialog.__jsx-style-dynamic-selector{width:47.2rem;min-height:10vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0lvQixBQUdtQyxBQVVrQixBQUt4QixjQUNFLFFBZkMsUUFnQm5CLFVBTkYsQ0FUYSxXQUNNLGlCQUNKLDBFQUNTLDhFQUNDLG1HQUN6QiIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL1Rlc3RpbW9uaWFsQWRkRGlhbG9nLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCJcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiXG4vLyBpbXBvcnQgcXMgZnJvbSAncXMnXG5cbmltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgTW9kYWwsIHsgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxDbG9zZUJ1dHRvbk1vYmlsZSB9IGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi9BcHBDb250ZXh0J1xuaW1wb3J0IFNlbGVjdEJveCBmcm9tICcuL1NlbGVjdEJveCdcbmltcG9ydCBXUExpbmsgZnJvbSAnLi9XUExpbmsnXG5pbXBvcnQge1xuICBJY29uU29jaWFsTG9naW5GYWNlYm9vayxcbiAgSWNvblNvY2lhbExvZ2luVHdpdHRlcixcbiAgSWNvblNvY2lhbExvZ2luVmtvbnRha3RlLFxuICBJY29uU29jaWFsTG9naW5PayxcbiAgSWNvbkNsb3NlLFxufSBmcm9tICcuL0ljb25zJ1xuXG5pbXBvcnQgU29jaWFsTG9naW4gZnJvbSAnLi9Tb2NpYWxMb2dpbidcblxuY2xhc3MgVGVzdGltb25pYWxBZGREaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBzdGF0dXM6ICduZXcnLFxuICAgIGF1dGhvcjogJycsXG4gICAgcHJvZmlsZUxpbms6ICcnLFxuICAgIHByb2R1Y3Q6IG51bGwsXG4gICAgdGV4dDogJydcbiAgfVxuXG4gIHN0YXRpYyBpc0F1dG9vcGVuS2V5d29yZFNwZWNpZmllZCgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjb3R6eXYnIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI290eml2J1xuICB9XG5cbiAgb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICB9XG5cbiAgb25DbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcbiAgICBpZihUZXN0aW1vbmlhbEFkZERpYWxvZy5pc0F1dG9vcGVuS2V5d29yZFNwZWNpZmllZCgpKSB7XG5cbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIlxuICAgIH1cbiAgfVxuXG4gIG9uVGV4dENoYW5nZSA9IChlKSA9PiB0aGlzLnNldFN0YXRlKHsgdGV4dDogZS50YXJnZXQudmFsdWUgfSlcblxuICBvblByb2R1Y3RTZWxlY3QgPSAocHJvZHVjdCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvblByb2R1Y3RTZWxlY3QnLCBwcm9kdWN0KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0IH0pXG4gIH1cblxuICBvbkF1dGhvckNoYW5nZSA9IChhdXRob3IsIHByb2ZpbGVMaW5rKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhvciwgcHJvZmlsZUxpbmsgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdUZXN0aW1vbmlhbEFkZERpYWxvZyNjb21wb25lbnREaWRNb3VudCcsIHRoaXMucHJvcHMucHJvZHVjdCwgUm91dGVyLnF1ZXJ5KVxuICAgIGlmKHRoaXMucHJvcHMucHJvZHVjdCAmJiBUZXN0aW1vbmlhbEFkZERpYWxvZy5pc0F1dG9vcGVuS2V5d29yZFNwZWNpZmllZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYoIXByb3BzLnByb2R1Y3RzICYmIHByb3BzLnByb2R1Y3QgJiYgKHN0YXRlLnByb2R1Y3QgPT09IG51bGwgfHwgcHJvcHMucHJvZHVjdC5pZCAhPT0gc3RhdGUucHJvZHVjdC5pZCkpIHtcbiAgICAgIHJldHVybiB7IHByb2R1Y3Q6IHByb3BzLnByb2R1Y3QgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHtjaGlsZHJlbih7IG9uQ2xpY2s6IHRoaXMub25DbGljayB9KX1cbiAgICAgICAgPE1vZGFsIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gb25DbG9zZT17dGhpcy5vbkNsb3NlfT5cbiAgICAgICAgICB7LyogPEZyb3cgY29udGFpbmVyIGNlbnRlciBqdXN0aWZ5PVwiY2VudGVyXCIgaHVnPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DbG9zZX0vPlxuICAgICAgICAgICAgICA8TXV0YXRpb25cbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM9e3tcbiAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogdGhpcy5zdGF0ZS5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHRoaXMuc3RhdGUucHJvZHVjdCAmJiB0aGlzLnN0YXRlLnByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVfbGluazogdGhpcy5zdGF0ZS5wcm9maWxlTGluayxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbXV0YXRpb249e2dxbGBcbiAgICAgICAgICAgICAgICAgIG11dGF0aW9uIENyZWF0ZVRlc3RpbW9uaWFsTXV0YXRpb24oJGlucHV0OiBDcmVhdGVUZXN0aW1vbmlhbE11dGF0aW9uSW5wdXQhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRlc3RpbW9uaWFsKGlucHV0OiAkaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIEByZXN0KHR5cGU6IFwiVGVzdGltb25pYWxcIiwgcGF0aDogXCIvd3AvdjIvdGVzdGltb25pYWxzXCIsIG1ldGhvZDogXCJQT1NUXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ3NlbnQnLCB0ZXh0OiAnJywgcHJvZHVjdDogbnVsbCB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID57KGNyZWF0ZVRlc3RpbW9uaWFsLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yLCBjYWxsZWQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnY3JlYXRlVGVzdGltb25pYWwnLCBkYXRhLCBsb2FkaW5nLCBlcnJvciwgY2FsbGVkKX1cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zdGF0dXMgPT09ICduZXcnIHx8IHRoaXMuc3RhdGUuc3RhdHVzID09PSAnc2VuZGluZycpICYmIDxUZXN0aW1vbmlhbEFkZEZvcm1cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17dGhpcy5zdGF0ZS5wcm9kdWN0fVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXt0aGlzLnN0YXRlLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUxpbms9e3RoaXMuc3RhdGUucHJvZmlsZUxpbmt9XG4gICAgICAgICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17dGhpcy5vblRleHRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvZHVjdFNlbGVjdD17dGhpcy5vblByb2R1Y3RTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgIG9uQXV0aG9yQ2hhbmdlPXt0aGlzLm9uQXV0aG9yQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6ICdzZW5kaW5nJyB9KVxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRlc3RpbW9uaWFsKClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhdHVzID09PSAnc2VudCcgJiYgPFRlc3RpbW9uaWFsU2VudFRvTW9kZXJhdGlvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6ICduZXcnIH0pXG4gICAgICAgICAgICAgICAgICB9fS8+fVxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICl9PC9NdXRhdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtY2xvc2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b25Nb2JpbGUgb25DbGljaz17dGhpcy5vbkNsb3NlfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDwvRnJvdz4gKi99XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGlhbG9nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjMzMzMzcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vYmlsZS1jbG9zZS1ib3gge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHsgVGhlbWUueHMudnIoMikgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgIC5kaWFsb2cge1xuICAgICAgICAgICAgICB3aWR0aDogNDcuMnJlbTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgdXNlciwgc2V0VXNlciB9KSA9PiAoXG4gICAgPFRlc3RpbW9uaWFsQWRkRGlhbG9nIHsuLi5wcm9wc30gdXNlcj17dXNlcn0gc2V0VXNlcj17c2V0VXNlcn0vPlxuICApfTwvQXBwQ29udGV4dC5Db25zdW1lcj5cbilcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsQWRkRm9ybSA9ICh7IHByb2R1Y3QsIHByb2R1Y3RzLCB0ZXh0LCBhdXRob3IsIHByb2ZpbGVMaW5rLCBvblRleHRDaGFuZ2UsIG9uUHJvZHVjdFNlbGVjdCwgb25TdWJtaXQsIG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxoMj7QntGB0YLQsNCy0YzRgtC1INC+0YLQt9GL0LJ7IXByb2R1Y3QgJiYgJyDQviDQv9GA0L7QtdC60YLQtSd9PC9oMj5cbiAgICB7KCFwcm9kdWN0cyAmJiBwcm9kdWN0KSAmJiA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvZHVjdC50aXRsZS5yZW5kZXJlZCB9fS8+fVxuICAgIHtwcm9kdWN0cyAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci10aXRsZVwiPtCS0YvQsdC10YDQuNGC0LUg0YbQuNC60LssINC+0YLQt9GL0LIg0L3QsCDQutC+0YLQvtGA0YvQuSDRhdC+0YLQuNGC0LUg0L7RgdGC0LDQstC40YLRjDwvZGl2PlxuICAgICAgICA8U2VsZWN0Qm94IHZhbHVlPXtwcm9kdWN0ID8gcHJvZHVjdC5pZCA6ICcnfSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZElkID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIG9uUHJvZHVjdFNlbGVjdChwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZElkKS5yZWR1Y2UoKF8sIGN1cnJlbnQpID0+IGN1cnJlbnQsIG51bGwpKX1cbiAgICAgICAgfT5cbiAgICAgICAgICA8b3B0aW9uPiZuYnNwOzwvb3B0aW9uPlxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKGl0ZW0sIGkpID0+IDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aXRlbS5pZH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0udGl0bGUucmVuZGVyZWQgfX0vPil9XG4gICAgICAgIDwvU2VsZWN0Qm94PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICB7KCFwcm9kdWN0cyAmJiAhcHJvZHVjdCkgJiYgPEFwcENvbnRleHQuQ29uc3VtZXI+eyh7IG5hbWVkV1AgfSkgPT4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8cD7QndCw0Lwg0L7Rh9C10L3RjCDQstCw0LbQvdC+INCy0LDRiNC1INC80L3QtdC90LjQtSDQviDQvdCw0YjQtdC5INGA0LDQsdC+0YLQtSwg0LvRjtCx0LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjyDQv9C+0LzQvtC20LXRgiDQvdCw0Lwg0YHQtNC10LvQsNGC0Ywg0LXRkSDQuNC90YLQtdGA0LXRgdC90LXQtSDQuCDQv9C+0LvQtdC30L3QtdC1ITwvcD5cbiAgICAgICAgPHA+0J7RgdGC0LDQstC40YLRjCDQvtGC0LfRi9CyINC90LAg0L7QtNC90YMg0LjQtyDQvdCw0YjQuNGFINC70LXQutGG0LjQuSDQvNC+0LbQvdC+LCDQv9C10YDQtdC50LTRjyDQvdCwINC10ZEg0YHRgtGA0LDQvdC40YbRgyDQuNC3IDxXUExpbmsgd3A9e25hbWVkV1AoJ3Byb2R1Y3RzLmNvdXJzZXMnKX0+0KHQv9C40YHQutCwINC90LDRiNC40YUg0LzQtdGA0L7Qv9GA0LjRj9GC0LjQuTwvV1BMaW5rPi48L3A+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPn1cbiAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwidGV4dFwiIGF1dG9Gb2N1cz17dHJ1ZX0gdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9Lz5cbiAgICB7YXV0aG9yXG4gICAgICA/IDxUZXN0aW1vbmlhbEF1dGhvckluZm8gb25TdWJtaXQ9e29uU3VibWl0fSBkaXNhYmxlZD17ISh0ZXh0Lmxlbmd0aCA+IDApfSBhdXRob3I9e2F1dGhvcn0gcHJvZmlsZUxpbms9e3Byb2ZpbGVMaW5rfSBvbkF1dGhvckNoYW5nZT17b25BdXRob3JDaGFuZ2V9Lz5cbiAgICAgIDogPFRlc3RpbW9uaWFsU29jaWFsTG9naW4gb25BdXRob3JDaGFuZ2U9e29uQXV0aG9yQ2hhbmdlfS8+XG4gICAgfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsgVGhlbWUuY29sb3JzLmJvcmRlckdyYXkgfTtcbiAgICAgICAgaGVpZ2h0OiAkeyBUaGVtZS54cy52cigxMCkgfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC41KX07XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmZpbHRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEpfTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKX07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBoZWlnaHQ6ICR7IFRoZW1lLm1kLnZyKDEwKSB9O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKX07XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVyLXRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgICAgLyogZm9udC1zaXplOiAwLjc3Nzc4cmVtOyAqL1xuICAgICAgICAgIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMC43NSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItc2VsZWN0b3Ige1xuICAgICAgICAgIGhlaWdodDogY2FsYygycmVtICsgMnB4KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuODg4ODlyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDAuNnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsU29jaWFsTG9naW4gPSAoeyBvbkF1dGhvckNoYW5nZSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyBjb250YWluZXIgY29sdW1uPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPtCU0LvRjyDQvtGC0L/RgNCw0LLQutC4INC+0YLQt9GL0LLQsCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMINGBINC/0L7QvNC+0YnRjNGOINC+0LTQvdC+0Lkg0LjQtyDRgdC+0YbRgdC10YLQtdC5OjwvcD5cbiAgICAgIDxGcm93IGNvbnRhaW5lciByb3cganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcnMgaHVnPlxuICAgICAgICA8U29jaWFsTG9naW4uUHJvdmlkZXIgb25TdWNjZXNzPXsodXNlcikgPT4gb25BdXRob3JDaGFuZ2UodXNlci5uYW1lLCB1c2VyLmxpbmspfT5cbiAgICAgICAgICA8U29jaWFsTG9naW4uUG9wdXAgdXJsPVwiL2xvZ2luP3Byb3ZpZGVyPWZiXCI+eyh7IG9uQ2xpY2sgfSkgPT4gKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGZhY2Vib29rXCIgb25DbGljaz17b25DbGlja30+PEljb25Tb2NpYWxMb2dpbkZhY2Vib29rLz48L2J1dHRvbj4pfTwvU29jaWFsTG9naW4uUG9wdXA+XG4gICAgICAgICAgPFNvY2lhbExvZ2luLlBvcHVwIHVybD1cIi9sb2dpbj9wcm92aWRlcj10d1wiPnsoeyBvbkNsaWNrIH0pID0+ICg8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB0d2l0dGVyXCIgb25DbGljaz17b25DbGlja30+PEljb25Tb2NpYWxMb2dpblR3aXR0ZXIvPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgICA8U29jaWFsTG9naW4uUG9wdXAgdXJsPVwiL2xvZ2luP3Byb3ZpZGVyPXZrXCI+eyh7IG9uQ2xpY2sgfSkgPT4gKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHZrb250YWt0ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PjxJY29uU29jaWFsTG9naW5Wa29udGFrdGUvPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgICA8U29jaWFsTG9naW4uUG9wdXAgdXJsPVwiL2xvZ2luP3Byb3ZpZGVyPW9rXCI+eyh7IG9uQ2xpY2sgfSkgPT4gKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG9rXCIgb25DbGljaz17b25DbGlja30+PEljb25Tb2NpYWxMb2dpbk9rLz48L2J1dHRvbj4pfTwvU29jaWFsTG9naW4uUG9wdXA+XG4gICAgICAgIDwvU29jaWFsTG9naW4uUHJvdmlkZXI+XG4gICAgICA8L0Zyb3c+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5idG4ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuYnRuIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICB9XG5cbiAgICAgIC5idG4uZmFjZWJvb2sgIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5icmFuZEZhY2Vib29rIH07XG4gICAgICB9XG5cbiAgICAgIC5idG4udHdpdHRlciAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kVHdpdHRlciB9O1xuICAgICAgfVxuXG4gICAgICAuYnRuLnZrb250YWt0ZSAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kVmtvbnRha3RlIH07XG4gICAgICB9XG5cbiAgICAgIC5idG4ub2sgIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5icmFuZE9kbm9rbGFzc25pa2kgfTtcbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYnRuIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxBdXRob3JJbmZvID0gKHsgb25TdWJtaXQsIGRpc2FibGVkLCBhdXRob3IsIHByb2ZpbGVMaW5rLCBvbkF1dGhvckNoYW5nZSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyBjb250YWluZXIgY29sdW1uPVwiY2VudGVyXCI+XG4gICAgICA8RnJvdyBjb250YWluZXIgaXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICA8ZGl2PtCe0YLQt9GL0LIg0LHRg9C00LXRgiDQvtGB0YLQsNCy0LvQtdC9INC+0YIg0LjQvNC10L3QuCA8Yj57cHJvZmlsZUxpbmsgPyA8YSBocmVmPXtwcm9maWxlTGlua30gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPnthdXRob3J9PC9hPiA6IGF1dGhvcn08L2I+PC9kaXY+PGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxvZ2luXCIgdGl0bGU9XCLQl9Cw0LnRgtC4INC/0L7QtCDQtNGA0YPQs9C40Lwg0LjQvNC10L3QtdC8XCIgb25DbGljaz17KCkgPT4gb25BdXRob3JDaGFuZ2UoJycsICcnKX0+PEljb25DbG9zZS8+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gcm93PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gZGlzYWJsZWQ9e2Rpc2FibGVkfT7QntGC0L/RgNCw0LLQuNGC0Yw8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucmVsb2dpbiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuYm94IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSl9O1xuICAgICAgfVxuXG4gICAgICAucmVsb2dpbiA6Z2xvYmFsKHN2Zykge1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuZ3JheTJ9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxTZW50VG9Nb2RlcmF0aW9uID0gKHsgb25DbGljayB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8aDI+0J7RgtC30YvQsiDQvtGC0L/RgNCw0LLQu9C10L08L2gyPlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW49XCJjZW50ZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj7QkdC70LDQs9C+0LTQsNGA0LjQvCDQktCw0YEg0LfQsCDQvtGC0LfRi9CyLCDQvtC9INC+0YLQv9GA0LDQstC70LXQvSDQvdCwINC/0YDQvtCy0LXRgNC60YMg0LzQvtC00LXRgNCw0YLQvtGA0L7QvCDQuCDRgdC60L7RgNC+INC/0L7Rj9Cy0LjRgtGB0Y8g0L3QsCDRgdCw0LnRgtC1LjwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja30+0JfQsNC60YDRi9GC0Yw8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC41KX07XG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcbiJdfQ== */\n/*@ sourceURL=src/next/components/TestimonialAddDialog.js */"),
        dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(2)]
      }));
    }
  }], [{
    key: "isAutoopenKeywordSpecified",
    value: function isAutoopenKeywordSpecified() {
      return window.location.hash === '#otzyv' || window.location.hash === '#otziv';
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!props.products && props.product && (state.product === null || props.product.id !== state.product.id)) {
        return {
          product: props.product
        };
      }

      return null;
    }
  }]);

  return TestimonialAddDialog;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__AppContext__["a" /* default */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  }, function (_ref3) {
    var user = _ref3.user,
        setUser = _ref3.setUser;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialAddDialog, _extends({}, props, {
      user: user,
      setUser: setUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      }
    }));
  });
});
var TestimonialAddForm = function TestimonialAddForm(_ref4) {
  var product = _ref4.product,
      products = _ref4.products,
      text = _ref4.text,
      author = _ref4.author,
      profileLink = _ref4.profileLink,
      onTextChange = _ref4.onTextChange,
      onProductSelect = _ref4.onProductSelect,
      onSubmit = _ref4.onSubmit,
      onAuthorChange = _ref4.onAuthorChange;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]])
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432", !product && ' о проекте'), !products && product && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: product.title.rendered
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]]) + " " + "title"
  }), products && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]]) + " " + "filter"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]]) + " " + "filter-title"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0438\u043A\u043B, \u043E\u0442\u0437\u044B\u0432 \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__SelectBox__["a" /* default */], {
    value: product ? product.id : '',
    onChange: function onChange(e) {
      var selectedId = Number(e.target.value);
      onProductSelect(products.filter(function (item) {
        return item.id === selectedId;
      }).reduce(function (_, current) {
        return current;
      }, null));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]])
  }, "\xA0"), products.map(function (item, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
      key: i,
      value: item.id,
      dangerouslySetInnerHTML: {
        __html: item.title.rendered
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]])
    });
  }))), !products && !product && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__AppContext__["a" /* default */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    }
  }, function (_ref5) {
    var namedWP = _ref5.namedWP;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]])
    }, "\u041D\u0430\u043C \u043E\u0447\u0435\u043D\u044C \u0432\u0430\u0436\u043D\u043E \u0432\u0430\u0448\u0435 \u043C\u043D\u0435\u043D\u0438\u0435 \u043E \u043D\u0430\u0448\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u0435, \u043B\u044E\u0431\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0451 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0435\u0435 \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u0435\u0435!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]])
    }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432 \u043D\u0430 \u043E\u0434\u043D\u0443 \u0438\u0437 \u043D\u0430\u0448\u0438\u0445 \u043B\u0435\u043A\u0446\u0438\u0439 \u043C\u043E\u0436\u043D\u043E, \u043F\u0435\u0440\u0435\u0439\u0434\u044F \u043D\u0430 \u0435\u0451 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438\u0437 ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__WPLink__["a" /* default */], {
      wp: namedWP('products.courses'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      }
    }, "\u0421\u043F\u0438\u0441\u043A\u0430 \u043D\u0430\u0448\u0438\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439"), "."));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
    autoFocus: true,
    value: text,
    onChange: onTextChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3254348790", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]]]) + " " + "text"
  }), author ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialAuthorInfo, {
    onSubmit: onSubmit,
    disabled: !(text.length > 0),
    author: author,
    profileLink: profileLink,
    onAuthorChange: onAuthorChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    }
  }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialSocialLogin, {
    onAuthorChange: onAuthorChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3254348790",
    css: "h2.__jsx-style-dynamic-selector{text-align:center;margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), ";}.title.__jsx-style-dynamic-selector{text-align:center;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), ";}.text.__jsx-style-dynamic-selector{width:100%;border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, ";height:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), ";margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), ";font-size:16px;}.filter.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), ";}@media (min-width:992px){h2.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), ";}.title.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), ";}.text.__jsx-style-dynamic-selector{height:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), ";margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), ";font-size:1rem;}.filter.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), ";}.filter-title.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, ";margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), ";}.filter-selector.__jsx-style-dynamic-selector{height:calc(2rem + 2px);width:100%;color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, ";font-weight:400;font-size:0.88889rem;background-color:#fff;border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, ";border-radius:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default, ";text-indent:0.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa01nQixBQUcyQixBQUtBLEFBS1AsQUFRZ0MsQUFLRSxBQUlBLEFBSVAsQUFNUSxBQUlSLEFBT1osV0FyQ29CLE9BVkgsQUFLQSxNQTJDOUIsV0FDeUIsQ0FsQk8sQUFZQyxPQXpCaEQsQUFLRSxBQUlBLENBVUEsYUExQm9DLElBVnRDLEFBS0EsVUE0Q29CLFFBbEJELENBWWpCLE9BT3VCLE1BdkNvQixDQXFCM0MsY0FtQndCLHNCQUN5QixNQXhDbEMsZUFDakIsMEJBd0NnRCw0Q0FDekIsbUJBQ3JCIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCJcbi8vIGltcG9ydCBxcyBmcm9tICdxcydcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBNb2RhbCwgeyBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbENsb3NlQnV0dG9uTW9iaWxlIH0gZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuL0FwcENvbnRleHQnXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vU2VsZWN0Qm94J1xuaW1wb3J0IFdQTGluayBmcm9tICcuL1dQTGluaydcbmltcG9ydCB7XG4gIEljb25Tb2NpYWxMb2dpbkZhY2Vib29rLFxuICBJY29uU29jaWFsTG9naW5Ud2l0dGVyLFxuICBJY29uU29jaWFsTG9naW5Wa29udGFrdGUsXG4gIEljb25Tb2NpYWxMb2dpbk9rLFxuICBJY29uQ2xvc2UsXG59IGZyb20gJy4vSWNvbnMnXG5cbmltcG9ydCBTb2NpYWxMb2dpbiBmcm9tICcuL1NvY2lhbExvZ2luJ1xuXG5jbGFzcyBUZXN0aW1vbmlhbEFkZERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHN0YXR1czogJ25ldycsXG4gICAgYXV0aG9yOiAnJyxcbiAgICBwcm9maWxlTGluazogJycsXG4gICAgcHJvZHVjdDogbnVsbCxcbiAgICB0ZXh0OiAnJ1xuICB9XG5cbiAgc3RhdGljIGlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNvdHp5dicgfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjb3R6aXYnXG4gIH1cblxuICBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gIH1cblxuICBvbkNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxuICAgIGlmKFRlc3RpbW9uaWFsQWRkRGlhbG9nLmlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkpIHtcblxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgb25UZXh0Q2hhbmdlID0gKGUpID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiBlLnRhcmdldC52YWx1ZSB9KVxuXG4gIG9uUHJvZHVjdFNlbGVjdCA9IChwcm9kdWN0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uUHJvZHVjdFNlbGVjdCcsIHByb2R1Y3QpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3QgfSlcbiAgfVxuXG4gIG9uQXV0aG9yQ2hhbmdlID0gKGF1dGhvciwgcHJvZmlsZUxpbmspID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aG9yLCBwcm9maWxlTGluayB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1Rlc3RpbW9uaWFsQWRkRGlhbG9nI2NvbXBvbmVudERpZE1vdW50JywgdGhpcy5wcm9wcy5wcm9kdWN0LCBSb3V0ZXIucXVlcnkpXG4gICAgaWYodGhpcy5wcm9wcy5wcm9kdWN0ICYmIFRlc3RpbW9uaWFsQWRkRGlhbG9nLmlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZighcHJvcHMucHJvZHVjdHMgJiYgcHJvcHMucHJvZHVjdCAmJiAoc3RhdGUucHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9wcy5wcm9kdWN0LmlkICE9PSBzdGF0ZS5wcm9kdWN0LmlkKSkge1xuICAgICAgcmV0dXJuIHsgcHJvZHVjdDogcHJvcHMucHJvZHVjdCB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge2NoaWxkcmVuKHsgb25DbGljazogdGhpcy5vbkNsaWNrIH0pfVxuICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBvbkNsb3NlPXt0aGlzLm9uQ2xvc2V9PlxuICAgICAgICAgIHsvKiA8RnJvdyBjb250YWluZXIgY2VudGVyIGp1c3RpZnk9XCJjZW50ZXJcIiBodWc+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5vbkNsb3NlfS8+XG4gICAgICAgICAgICAgIDxNdXRhdGlvblxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcz17e1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiB0aGlzLnN0YXRlLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5zdGF0ZS5wcm9kdWN0ICYmIHRoaXMuc3RhdGUucHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZV9saW5rOiB0aGlzLnN0YXRlLnByb2ZpbGVMaW5rLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtdXRhdGlvbj17Z3FsYFxuICAgICAgICAgICAgICAgICAgbXV0YXRpb24gQ3JlYXRlVGVzdGltb25pYWxNdXRhdGlvbigkaW5wdXQ6IENyZWF0ZVRlc3RpbW9uaWFsTXV0YXRpb25JbnB1dCEpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGVzdGltb25pYWwoaW5wdXQ6ICRpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgQHJlc3QodHlwZTogXCJUZXN0aW1vbmlhbFwiLCBwYXRoOiBcIi93cC92Mi90ZXN0aW1vbmlhbHNcIiwgbWV0aG9kOiBcIlBPU1RcIikge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnc2VudCcsIHRleHQ6ICcnLCBwcm9kdWN0OiBudWxsIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPnsoY3JlYXRlVGVzdGltb25pYWwsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIGNhbGxlZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdjcmVhdGVUZXN0aW1vbmlhbCcsIGRhdGEsIGxvYWRpbmcsIGVycm9yLCBjYWxsZWQpfVxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ25ldycgfHwgdGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdzZW5kaW5nJykgJiYgPFRlc3RpbW9uaWFsQWRkRm9ybVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXt0aGlzLnN0YXRlLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3RoaXMuc3RhdGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlTGluaz17dGhpcy5zdGF0ZS5wcm9maWxlTGlua31cbiAgICAgICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9kdWN0U2VsZWN0PXt0aGlzLm9uUHJvZHVjdFNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25BdXRob3JDaGFuZ2U9e3RoaXMub25BdXRob3JDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ3NlbmRpbmcnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGVzdGltb25pYWwoKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdzZW50JyAmJiA8VGVzdGltb25pYWxTZW50VG9Nb2RlcmF0aW9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ25ldycgfSlcbiAgICAgICAgICAgICAgICAgIH19Lz59XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKX08L011dGF0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1jbG9zZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbk1vYmlsZSBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPC9Gcm93PiAqL31cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5kaWFsb2cge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMzMzMzNyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlLWNsb3NlLWJveCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkeyBUaGVtZS54cy52cigyKSB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgLmRpYWxvZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0Ny4ycmVtO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyB1c2VyLCBzZXRVc2VyIH0pID0+IChcbiAgICA8VGVzdGltb25pYWxBZGREaWFsb2cgey4uLnByb3BzfSB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfS8+XG4gICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxBZGRGb3JtID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMsIHRleHQsIGF1dGhvciwgcHJvZmlsZUxpbmssIG9uVGV4dENoYW5nZSwgb25Qcm9kdWN0U2VsZWN0LCBvblN1Ym1pdCwgb25BdXRob3JDaGFuZ2UgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGgyPtCe0YHRgtCw0LLRjNGC0LUg0L7RgtC30YvQsnshcHJvZHVjdCAmJiAnINC+INC/0YDQvtC10LrRgtC1J308L2gyPlxuICAgIHsoIXByb2R1Y3RzICYmIHByb2R1Y3QpICYmIDxwIGNsYXNzTmFtZT1cInRpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0LnRpdGxlLnJlbmRlcmVkIH19Lz59XG4gICAge3Byb2R1Y3RzICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXRpdGxlXCI+0JLRi9Cx0LXRgNC40YLQtSDRhtC40LrQuywg0L7RgtC30YvQsiDQvdCwINC60L7RgtC+0YDRi9C5INGF0L7RgtC40YLQtSDQvtGB0YLQsNCy0LjRgtGMPC9kaXY+XG4gICAgICAgIDxTZWxlY3RCb3ggdmFsdWU9e3Byb2R1Y3QgPyBwcm9kdWN0LmlkIDogJyd9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgb25Qcm9kdWN0U2VsZWN0KHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpLnJlZHVjZSgoXywgY3VycmVudCkgPT4gY3VycmVudCwgbnVsbCkpfVxuICAgICAgICB9PlxuICAgICAgICAgIDxvcHRpb24+Jm5ic3A7PC9vcHRpb24+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLmlkfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZCB9fS8+KX1cbiAgICAgICAgPC9TZWxlY3RCb3g+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIHsoIXByb2R1Y3RzICYmICFwcm9kdWN0KSAmJiA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCB9KSA9PiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxwPtCd0LDQvCDQvtGH0LXQvdGMINCy0LDQttC90L4g0LLQsNGI0LUg0LzQvdC10L3QuNC1INC+INC90LDRiNC10Lkg0YDQsNCx0L7RgtC1LCDQu9GO0LHQsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPINC/0L7QvNC+0LbQtdGCINC90LDQvCDRgdC00LXQu9Cw0YLRjCDQtdGRINC40L3RgtC10YDQtdGB0L3QtdC1INC4INC/0L7Qu9C10LfQvdC10LUhPC9wPlxuICAgICAgICA8cD7QntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LIg0L3QsCDQvtC00L3RgyDQuNC3INC90LDRiNC40YUg0LvQtdC60YbQuNC5INC80L7QttC90L4sINC/0LXRgNC10LnQtNGPINC90LAg0LXRkSDRgdGC0YDQsNC90LjRhtGDINC40LcgPFdQTGluayB3cD17bmFtZWRXUCgncHJvZHVjdHMuY291cnNlcycpfT7QodC/0LjRgdC60LAg0L3QsNGI0LjRhSDQvNC10YDQvtC/0YDQuNGP0YLQuNC5PC9XUExpbms+LjwvcD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKX08L0FwcENvbnRleHQuQ29uc3VtZXI+fVxuICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0XCIgYXV0b0ZvY3VzPXt0cnVlfSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0vPlxuICAgIHthdXRob3JcbiAgICAgID8gPFRlc3RpbW9uaWFsQXV0aG9ySW5mbyBvblN1Ym1pdD17b25TdWJtaXR9IGRpc2FibGVkPXshKHRleHQubGVuZ3RoID4gMCl9IGF1dGhvcj17YXV0aG9yfSBwcm9maWxlTGluaz17cHJvZmlsZUxpbmt9IG9uQXV0aG9yQ2hhbmdlPXtvbkF1dGhvckNoYW5nZX0vPlxuICAgICAgOiA8VGVzdGltb25pYWxTb2NpYWxMb2dpbiBvbkF1dGhvckNoYW5nZT17b25BdXRob3JDaGFuZ2V9Lz5cbiAgICB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICBoZWlnaHQ6ICR7IFRoZW1lLnhzLnZyKDEwKSB9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZmlsdGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSl9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGhlaWdodDogJHsgVGhlbWUubWQudnIoMTApIH07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICAvKiBmb250LXNpemU6IDAuNzc3NzhyZW07ICovXG4gICAgICAgICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1zZWxlY3RvciB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDJyZW0gKyAycHgpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7IFRoZW1lLmNvbG9ycy5ib3JkZXJHcmF5IH07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMC42cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxTb2NpYWxMb2dpbiA9ICh7IG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW4+XG4gICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+0JTQu9GPINC+0YLQv9GA0LDQstC60Lgg0L7RgtC30YvQstCwINC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0Ywg0YEg0L/QvtC80L7RidGM0Y4g0L7QtNC90L7QuSDQuNC3INGB0L7RhtGB0LXRgtC10Lk6PC9wPlxuICAgICAgPEZyb3cgY29udGFpbmVyIHJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVycyBodWc+XG4gICAgICAgIDxTb2NpYWxMb2dpbi5Qcm92aWRlciBvblN1Y2Nlc3M9eyh1c2VyKSA9PiBvbkF1dGhvckNoYW5nZSh1c2VyLm5hbWUsIHVzZXIubGluayl9PlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9ZmJcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZmFjZWJvb2tcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luRmFjZWJvb2svPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgICA8U29jaWFsTG9naW4uUG9wdXAgdXJsPVwiL2xvZ2luP3Byb3ZpZGVyPXR3XCI+eyh7IG9uQ2xpY2sgfSkgPT4gKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHR3aXR0ZXJcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luVHdpdHRlci8+PC9idXR0b24+KX08L1NvY2lhbExvZ2luLlBvcHVwPlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9dmtcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gdmtvbnRha3RlXCIgb25DbGljaz17b25DbGlja30+PEljb25Tb2NpYWxMb2dpblZrb250YWt0ZS8+PC9idXR0b24+KX08L1NvY2lhbExvZ2luLlBvcHVwPlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9b2tcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gb2tcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luT2svPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgPC9Tb2NpYWxMb2dpbi5Qcm92aWRlcj5cbiAgICAgIDwvRnJvdz5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJ0biB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5idG4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi5mYWNlYm9vayAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kRmFjZWJvb2sgfTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi50d2l0dGVyICA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYnJhbmRUd2l0dGVyIH07XG4gICAgICB9XG5cbiAgICAgIC5idG4udmtvbnRha3RlICA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYnJhbmRWa29udGFrdGUgfTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi5vayAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kT2Rub2tsYXNzbmlraSB9O1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5idG4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbEF1dGhvckluZm8gPSAoeyBvblN1Ym1pdCwgZGlzYWJsZWQsIGF1dGhvciwgcHJvZmlsZUxpbmssIG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW49XCJjZW50ZXJcIj5cbiAgICAgIDxGcm93IGNvbnRhaW5lciBpdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIDxkaXY+0J7RgtC30YvQsiDQsdGD0LTQtdGCINC+0YHRgtCw0LLQu9C10L0g0L7RgiDQuNC80LXQvdC4IDxiPntwcm9maWxlTGluayA/IDxhIGhyZWY9e3Byb2ZpbGVMaW5rfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e2F1dGhvcn08L2E+IDogYXV0aG9yfTwvYj48L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT1cInJlbG9naW5cIiB0aXRsZT1cItCX0LDQudGC0Lgg0L/QvtC0INC00YDRg9Cz0LjQvCDQuNC80LXQvdC10LxcIiBvbkNsaWNrPXsoKSA9PiBvbkF1dGhvckNoYW5nZSgnJywgJycpfT48SWNvbkNsb3NlLz48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zyb3c+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBkaXNhYmxlZD17ZGlzYWJsZWR9PtCe0YLQv9GA0LDQstC40YLRjDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yZWxvZ2luIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKX07XG4gICAgICB9XG5cbiAgICAgIC5yZWxvZ2luIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5ncmF5Mn07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYm94IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbFNlbnRUb01vZGVyYXRpb24gPSAoeyBvbkNsaWNrIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxoMj7QntGC0LfRi9CyINC+0YLQv9GA0LDQstC70LXQvTwvaDI+XG4gICAgPEZyb3cgY29udGFpbmVyIGNvbHVtbj1cImNlbnRlclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPtCR0LvQsNCz0L7QtNCw0YDQuNC8INCS0LDRgSDQt9CwINC+0YLQt9GL0LIsINC+0L0g0L7RgtC/0YDQsNCy0LvQtdC9INC90LAg0L/RgNC+0LLQtdGA0LrRgyDQvNC+0LTQtdGA0LDRgtC+0YDQvtC8INC4INGB0LrQvtGA0L4g0L/QvtGP0LLQuNGC0YHRjyDQvdCwINGB0LDQudGC0LUuPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT7Ql9Cw0LrRgNGL0YLRjDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuIl19 */\n/*@ sourceURL=src/next/components/TestimonialAddDialog.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(10), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.borderRadius.default]
  }));
};
var TestimonialSocialLogin = function TestimonialSocialLogin(_ref6) {
  var onAuthorChange = _ref6.onAuthorChange;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    container: true,
    column: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2994547518", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandFacebook, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandTwitter, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandVkontakte, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandOdnoklassniki]]]) + " " + "info"
  }, "\u0414\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043E\u0442\u0437\u044B\u0432\u0430 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    container: true,
    row: true,
    justify: "center",
    gutters: true,
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SocialLogin__["a" /* default */].Provider, {
    onSuccess: function onSuccess(user) {
      return onAuthorChange(user.name, user.link);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SocialLogin__["a" /* default */].Popup, {
    url: "/login?provider=fb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    }
  }, function (_ref7) {
    var onClick = _ref7.onClick;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2994547518", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandFacebook, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandTwitter, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandVkontakte, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandOdnoklassniki]]]) + " " + "btn facebook"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Icons__["h" /* IconSocialLoginFacebook */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      }
    }));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SocialLogin__["a" /* default */].Popup, {
    url: "/login?provider=tw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    }
  }, function (_ref8) {
    var onClick = _ref8.onClick;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2994547518", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandFacebook, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandTwitter, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandVkontakte, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandOdnoklassniki]]]) + " " + "btn twitter"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Icons__["j" /* IconSocialLoginTwitter */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      }
    }));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SocialLogin__["a" /* default */].Popup, {
    url: "/login?provider=vk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    }
  }, function (_ref9) {
    var onClick = _ref9.onClick;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2994547518", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandFacebook, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandTwitter, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandVkontakte, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandOdnoklassniki]]]) + " " + "btn vkontakte"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Icons__["k" /* IconSocialLoginVkontakte */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      }
    }));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SocialLogin__["a" /* default */].Popup, {
    url: "/login?provider=ok",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    }
  }, function (_ref10) {
    var onClick = _ref10.onClick;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2994547518", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandFacebook, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandTwitter, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandVkontakte, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandOdnoklassniki]]]) + " " + "btn ok"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Icons__["i" /* IconSocialLoginOk */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      }
    }));
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2994547518",
    css: ".btn.__jsx-style-dynamic-selector{border:none;margin:0;padding:0;background:none;cursor:pointer;}.btn.__jsx-style-dynamic-selector svg{width:44px;height:44px;}.btn.facebook.__jsx-style-dynamic-selector svg{fill:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandFacebook, ";}.btn.twitter.__jsx-style-dynamic-selector svg{fill:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandTwitter, ";}.btn.vkontakte.__jsx-style-dynamic-selector svg{fill:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandVkontakte, ";}.btn.ok.__jsx-style-dynamic-selector svg{fill:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandOdnoklassniki, ";}.info.__jsx-style-dynamic-selector{text-align:center;}@media (min-width:992px){.btn.__jsx-style-dynamic-selector svg{width:64px;height:64px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1JnQixBQUdxQixBQVFELEFBS3VCLEFBSUEsQUFJQSxBQUlBLEFBSWhCLEFBS0wsV0F6QkQsQUEwQkUsQ0FsQ0wsTUE2QlgsR0E1QlksRUFRWixBQTBCRSxRQWpDZ0IsR0FXbEIsQUFJQSxBQUlBLEFBSUEsYUF0QmlCLGVBQ2pCIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCJcbi8vIGltcG9ydCBxcyBmcm9tICdxcydcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBNb2RhbCwgeyBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbENsb3NlQnV0dG9uTW9iaWxlIH0gZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuL0FwcENvbnRleHQnXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vU2VsZWN0Qm94J1xuaW1wb3J0IFdQTGluayBmcm9tICcuL1dQTGluaydcbmltcG9ydCB7XG4gIEljb25Tb2NpYWxMb2dpbkZhY2Vib29rLFxuICBJY29uU29jaWFsTG9naW5Ud2l0dGVyLFxuICBJY29uU29jaWFsTG9naW5Wa29udGFrdGUsXG4gIEljb25Tb2NpYWxMb2dpbk9rLFxuICBJY29uQ2xvc2UsXG59IGZyb20gJy4vSWNvbnMnXG5cbmltcG9ydCBTb2NpYWxMb2dpbiBmcm9tICcuL1NvY2lhbExvZ2luJ1xuXG5jbGFzcyBUZXN0aW1vbmlhbEFkZERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHN0YXR1czogJ25ldycsXG4gICAgYXV0aG9yOiAnJyxcbiAgICBwcm9maWxlTGluazogJycsXG4gICAgcHJvZHVjdDogbnVsbCxcbiAgICB0ZXh0OiAnJ1xuICB9XG5cbiAgc3RhdGljIGlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNvdHp5dicgfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjb3R6aXYnXG4gIH1cblxuICBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gIH1cblxuICBvbkNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxuICAgIGlmKFRlc3RpbW9uaWFsQWRkRGlhbG9nLmlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkpIHtcblxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgb25UZXh0Q2hhbmdlID0gKGUpID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiBlLnRhcmdldC52YWx1ZSB9KVxuXG4gIG9uUHJvZHVjdFNlbGVjdCA9IChwcm9kdWN0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uUHJvZHVjdFNlbGVjdCcsIHByb2R1Y3QpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3QgfSlcbiAgfVxuXG4gIG9uQXV0aG9yQ2hhbmdlID0gKGF1dGhvciwgcHJvZmlsZUxpbmspID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aG9yLCBwcm9maWxlTGluayB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1Rlc3RpbW9uaWFsQWRkRGlhbG9nI2NvbXBvbmVudERpZE1vdW50JywgdGhpcy5wcm9wcy5wcm9kdWN0LCBSb3V0ZXIucXVlcnkpXG4gICAgaWYodGhpcy5wcm9wcy5wcm9kdWN0ICYmIFRlc3RpbW9uaWFsQWRkRGlhbG9nLmlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZighcHJvcHMucHJvZHVjdHMgJiYgcHJvcHMucHJvZHVjdCAmJiAoc3RhdGUucHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9wcy5wcm9kdWN0LmlkICE9PSBzdGF0ZS5wcm9kdWN0LmlkKSkge1xuICAgICAgcmV0dXJuIHsgcHJvZHVjdDogcHJvcHMucHJvZHVjdCB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge2NoaWxkcmVuKHsgb25DbGljazogdGhpcy5vbkNsaWNrIH0pfVxuICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBvbkNsb3NlPXt0aGlzLm9uQ2xvc2V9PlxuICAgICAgICAgIHsvKiA8RnJvdyBjb250YWluZXIgY2VudGVyIGp1c3RpZnk9XCJjZW50ZXJcIiBodWc+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5vbkNsb3NlfS8+XG4gICAgICAgICAgICAgIDxNdXRhdGlvblxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcz17e1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiB0aGlzLnN0YXRlLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5zdGF0ZS5wcm9kdWN0ICYmIHRoaXMuc3RhdGUucHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZV9saW5rOiB0aGlzLnN0YXRlLnByb2ZpbGVMaW5rLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtdXRhdGlvbj17Z3FsYFxuICAgICAgICAgICAgICAgICAgbXV0YXRpb24gQ3JlYXRlVGVzdGltb25pYWxNdXRhdGlvbigkaW5wdXQ6IENyZWF0ZVRlc3RpbW9uaWFsTXV0YXRpb25JbnB1dCEpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGVzdGltb25pYWwoaW5wdXQ6ICRpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgQHJlc3QodHlwZTogXCJUZXN0aW1vbmlhbFwiLCBwYXRoOiBcIi93cC92Mi90ZXN0aW1vbmlhbHNcIiwgbWV0aG9kOiBcIlBPU1RcIikge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnc2VudCcsIHRleHQ6ICcnLCBwcm9kdWN0OiBudWxsIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPnsoY3JlYXRlVGVzdGltb25pYWwsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIGNhbGxlZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdjcmVhdGVUZXN0aW1vbmlhbCcsIGRhdGEsIGxvYWRpbmcsIGVycm9yLCBjYWxsZWQpfVxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ25ldycgfHwgdGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdzZW5kaW5nJykgJiYgPFRlc3RpbW9uaWFsQWRkRm9ybVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXt0aGlzLnN0YXRlLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3RoaXMuc3RhdGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlTGluaz17dGhpcy5zdGF0ZS5wcm9maWxlTGlua31cbiAgICAgICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9kdWN0U2VsZWN0PXt0aGlzLm9uUHJvZHVjdFNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25BdXRob3JDaGFuZ2U9e3RoaXMub25BdXRob3JDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ3NlbmRpbmcnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGVzdGltb25pYWwoKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdzZW50JyAmJiA8VGVzdGltb25pYWxTZW50VG9Nb2RlcmF0aW9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ25ldycgfSlcbiAgICAgICAgICAgICAgICAgIH19Lz59XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKX08L011dGF0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1jbG9zZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbk1vYmlsZSBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPC9Gcm93PiAqL31cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5kaWFsb2cge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMzMzMzNyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlLWNsb3NlLWJveCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkeyBUaGVtZS54cy52cigyKSB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgLmRpYWxvZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0Ny4ycmVtO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyB1c2VyLCBzZXRVc2VyIH0pID0+IChcbiAgICA8VGVzdGltb25pYWxBZGREaWFsb2cgey4uLnByb3BzfSB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfS8+XG4gICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxBZGRGb3JtID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMsIHRleHQsIGF1dGhvciwgcHJvZmlsZUxpbmssIG9uVGV4dENoYW5nZSwgb25Qcm9kdWN0U2VsZWN0LCBvblN1Ym1pdCwgb25BdXRob3JDaGFuZ2UgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGgyPtCe0YHRgtCw0LLRjNGC0LUg0L7RgtC30YvQsnshcHJvZHVjdCAmJiAnINC+INC/0YDQvtC10LrRgtC1J308L2gyPlxuICAgIHsoIXByb2R1Y3RzICYmIHByb2R1Y3QpICYmIDxwIGNsYXNzTmFtZT1cInRpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0LnRpdGxlLnJlbmRlcmVkIH19Lz59XG4gICAge3Byb2R1Y3RzICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXRpdGxlXCI+0JLRi9Cx0LXRgNC40YLQtSDRhtC40LrQuywg0L7RgtC30YvQsiDQvdCwINC60L7RgtC+0YDRi9C5INGF0L7RgtC40YLQtSDQvtGB0YLQsNCy0LjRgtGMPC9kaXY+XG4gICAgICAgIDxTZWxlY3RCb3ggdmFsdWU9e3Byb2R1Y3QgPyBwcm9kdWN0LmlkIDogJyd9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgb25Qcm9kdWN0U2VsZWN0KHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpLnJlZHVjZSgoXywgY3VycmVudCkgPT4gY3VycmVudCwgbnVsbCkpfVxuICAgICAgICB9PlxuICAgICAgICAgIDxvcHRpb24+Jm5ic3A7PC9vcHRpb24+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLmlkfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZCB9fS8+KX1cbiAgICAgICAgPC9TZWxlY3RCb3g+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIHsoIXByb2R1Y3RzICYmICFwcm9kdWN0KSAmJiA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCB9KSA9PiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxwPtCd0LDQvCDQvtGH0LXQvdGMINCy0LDQttC90L4g0LLQsNGI0LUg0LzQvdC10L3QuNC1INC+INC90LDRiNC10Lkg0YDQsNCx0L7RgtC1LCDQu9GO0LHQsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPINC/0L7QvNC+0LbQtdGCINC90LDQvCDRgdC00LXQu9Cw0YLRjCDQtdGRINC40L3RgtC10YDQtdGB0L3QtdC1INC4INC/0L7Qu9C10LfQvdC10LUhPC9wPlxuICAgICAgICA8cD7QntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LIg0L3QsCDQvtC00L3RgyDQuNC3INC90LDRiNC40YUg0LvQtdC60YbQuNC5INC80L7QttC90L4sINC/0LXRgNC10LnQtNGPINC90LAg0LXRkSDRgdGC0YDQsNC90LjRhtGDINC40LcgPFdQTGluayB3cD17bmFtZWRXUCgncHJvZHVjdHMuY291cnNlcycpfT7QodC/0LjRgdC60LAg0L3QsNGI0LjRhSDQvNC10YDQvtC/0YDQuNGP0YLQuNC5PC9XUExpbms+LjwvcD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKX08L0FwcENvbnRleHQuQ29uc3VtZXI+fVxuICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0XCIgYXV0b0ZvY3VzPXt0cnVlfSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0vPlxuICAgIHthdXRob3JcbiAgICAgID8gPFRlc3RpbW9uaWFsQXV0aG9ySW5mbyBvblN1Ym1pdD17b25TdWJtaXR9IGRpc2FibGVkPXshKHRleHQubGVuZ3RoID4gMCl9IGF1dGhvcj17YXV0aG9yfSBwcm9maWxlTGluaz17cHJvZmlsZUxpbmt9IG9uQXV0aG9yQ2hhbmdlPXtvbkF1dGhvckNoYW5nZX0vPlxuICAgICAgOiA8VGVzdGltb25pYWxTb2NpYWxMb2dpbiBvbkF1dGhvckNoYW5nZT17b25BdXRob3JDaGFuZ2V9Lz5cbiAgICB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICBoZWlnaHQ6ICR7IFRoZW1lLnhzLnZyKDEwKSB9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZmlsdGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSl9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGhlaWdodDogJHsgVGhlbWUubWQudnIoMTApIH07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICAvKiBmb250LXNpemU6IDAuNzc3NzhyZW07ICovXG4gICAgICAgICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1zZWxlY3RvciB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDJyZW0gKyAycHgpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7IFRoZW1lLmNvbG9ycy5ib3JkZXJHcmF5IH07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMC42cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxTb2NpYWxMb2dpbiA9ICh7IG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW4+XG4gICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+0JTQu9GPINC+0YLQv9GA0LDQstC60Lgg0L7RgtC30YvQstCwINC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0Ywg0YEg0L/QvtC80L7RidGM0Y4g0L7QtNC90L7QuSDQuNC3INGB0L7RhtGB0LXRgtC10Lk6PC9wPlxuICAgICAgPEZyb3cgY29udGFpbmVyIHJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVycyBodWc+XG4gICAgICAgIDxTb2NpYWxMb2dpbi5Qcm92aWRlciBvblN1Y2Nlc3M9eyh1c2VyKSA9PiBvbkF1dGhvckNoYW5nZSh1c2VyLm5hbWUsIHVzZXIubGluayl9PlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9ZmJcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZmFjZWJvb2tcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luRmFjZWJvb2svPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgICA8U29jaWFsTG9naW4uUG9wdXAgdXJsPVwiL2xvZ2luP3Byb3ZpZGVyPXR3XCI+eyh7IG9uQ2xpY2sgfSkgPT4gKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHR3aXR0ZXJcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luVHdpdHRlci8+PC9idXR0b24+KX08L1NvY2lhbExvZ2luLlBvcHVwPlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9dmtcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gdmtvbnRha3RlXCIgb25DbGljaz17b25DbGlja30+PEljb25Tb2NpYWxMb2dpblZrb250YWt0ZS8+PC9idXR0b24+KX08L1NvY2lhbExvZ2luLlBvcHVwPlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9b2tcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gb2tcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luT2svPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgPC9Tb2NpYWxMb2dpbi5Qcm92aWRlcj5cbiAgICAgIDwvRnJvdz5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJ0biB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5idG4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi5mYWNlYm9vayAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kRmFjZWJvb2sgfTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi50d2l0dGVyICA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYnJhbmRUd2l0dGVyIH07XG4gICAgICB9XG5cbiAgICAgIC5idG4udmtvbnRha3RlICA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYnJhbmRWa29udGFrdGUgfTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi5vayAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kT2Rub2tsYXNzbmlraSB9O1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5idG4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbEF1dGhvckluZm8gPSAoeyBvblN1Ym1pdCwgZGlzYWJsZWQsIGF1dGhvciwgcHJvZmlsZUxpbmssIG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW49XCJjZW50ZXJcIj5cbiAgICAgIDxGcm93IGNvbnRhaW5lciBpdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIDxkaXY+0J7RgtC30YvQsiDQsdGD0LTQtdGCINC+0YHRgtCw0LLQu9C10L0g0L7RgiDQuNC80LXQvdC4IDxiPntwcm9maWxlTGluayA/IDxhIGhyZWY9e3Byb2ZpbGVMaW5rfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e2F1dGhvcn08L2E+IDogYXV0aG9yfTwvYj48L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT1cInJlbG9naW5cIiB0aXRsZT1cItCX0LDQudGC0Lgg0L/QvtC0INC00YDRg9Cz0LjQvCDQuNC80LXQvdC10LxcIiBvbkNsaWNrPXsoKSA9PiBvbkF1dGhvckNoYW5nZSgnJywgJycpfT48SWNvbkNsb3NlLz48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zyb3c+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBkaXNhYmxlZD17ZGlzYWJsZWR9PtCe0YLQv9GA0LDQstC40YLRjDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yZWxvZ2luIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKX07XG4gICAgICB9XG5cbiAgICAgIC5yZWxvZ2luIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5ncmF5Mn07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYm94IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbFNlbnRUb01vZGVyYXRpb24gPSAoeyBvbkNsaWNrIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxoMj7QntGC0LfRi9CyINC+0YLQv9GA0LDQstC70LXQvTwvaDI+XG4gICAgPEZyb3cgY29udGFpbmVyIGNvbHVtbj1cImNlbnRlclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPtCR0LvQsNCz0L7QtNCw0YDQuNC8INCS0LDRgSDQt9CwINC+0YLQt9GL0LIsINC+0L0g0L7RgtC/0YDQsNCy0LvQtdC9INC90LAg0L/RgNC+0LLQtdGA0LrRgyDQvNC+0LTQtdGA0LDRgtC+0YDQvtC8INC4INGB0LrQvtGA0L4g0L/QvtGP0LLQuNGC0YHRjyDQvdCwINGB0LDQudGC0LUuPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT7Ql9Cw0LrRgNGL0YLRjDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuIl19 */\n/*@ sourceURL=src/next/components/TestimonialAddDialog.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandFacebook, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandTwitter, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandVkontakte, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.brandOdnoklassniki]
  }));
};
var TestimonialAuthorInfo = function TestimonialAuthorInfo(_ref11) {
  var onSubmit = _ref11.onSubmit,
      disabled = _ref11.disabled,
      author = _ref11.author,
      profileLink = _ref11.profileLink,
      onAuthorChange = _ref11.onAuthorChange;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    container: true,
    column: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    container: true,
    items: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["258185543", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.gray2, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["258185543", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.gray2, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]])
  }, "\u041E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u043E\u0442 \u0438\u043C\u0435\u043D\u0438 ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["258185543", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.gray2, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]])
  }, profileLink ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: profileLink,
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["258185543", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.gray2, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]])
  }, author) : author)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    title: "\u0417\u0430\u0439\u0442\u0438 \u043F\u043E\u0434 \u0434\u0440\u0443\u0433\u0438\u043C \u0438\u043C\u0435\u043D\u0435\u043C",
    onClick: function onClick() {
      return onAuthorChange('', '');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["258185543", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.gray2, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "relogin"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Icons__["b" /* IconClose */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    }
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["258185543", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.gray2, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "button"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Button__["b" /* default */], {
    onClick: onSubmit,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "258185543",
    css: ".relogin.__jsx-style-dynamic-selector{border:none;background:none;padding:0;margin-left:0.6rem;cursor:pointer;}.box.__jsx-style-dynamic-selector{margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), ";}.relogin.__jsx-style-dynamic-selector svg{width:1rem;height:1rem;fill:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.gray2, ";}@media (min-width:992px){.box.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1VnQixBQUdxQixBQVErQixBQUloQyxBQU9rQyxXQU5qQyxDQVpJLFdBYWtCLEtBWnhCLFVBQ1MsS0FNckIsQUFXRSxjQWhCZSxBQVdqQixlQVZBIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCJcbi8vIGltcG9ydCBxcyBmcm9tICdxcydcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBNb2RhbCwgeyBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbENsb3NlQnV0dG9uTW9iaWxlIH0gZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuL0FwcENvbnRleHQnXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vU2VsZWN0Qm94J1xuaW1wb3J0IFdQTGluayBmcm9tICcuL1dQTGluaydcbmltcG9ydCB7XG4gIEljb25Tb2NpYWxMb2dpbkZhY2Vib29rLFxuICBJY29uU29jaWFsTG9naW5Ud2l0dGVyLFxuICBJY29uU29jaWFsTG9naW5Wa29udGFrdGUsXG4gIEljb25Tb2NpYWxMb2dpbk9rLFxuICBJY29uQ2xvc2UsXG59IGZyb20gJy4vSWNvbnMnXG5cbmltcG9ydCBTb2NpYWxMb2dpbiBmcm9tICcuL1NvY2lhbExvZ2luJ1xuXG5jbGFzcyBUZXN0aW1vbmlhbEFkZERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHN0YXR1czogJ25ldycsXG4gICAgYXV0aG9yOiAnJyxcbiAgICBwcm9maWxlTGluazogJycsXG4gICAgcHJvZHVjdDogbnVsbCxcbiAgICB0ZXh0OiAnJ1xuICB9XG5cbiAgc3RhdGljIGlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNvdHp5dicgfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjb3R6aXYnXG4gIH1cblxuICBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gIH1cblxuICBvbkNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxuICAgIGlmKFRlc3RpbW9uaWFsQWRkRGlhbG9nLmlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkpIHtcblxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgb25UZXh0Q2hhbmdlID0gKGUpID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiBlLnRhcmdldC52YWx1ZSB9KVxuXG4gIG9uUHJvZHVjdFNlbGVjdCA9IChwcm9kdWN0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uUHJvZHVjdFNlbGVjdCcsIHByb2R1Y3QpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3QgfSlcbiAgfVxuXG4gIG9uQXV0aG9yQ2hhbmdlID0gKGF1dGhvciwgcHJvZmlsZUxpbmspID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aG9yLCBwcm9maWxlTGluayB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1Rlc3RpbW9uaWFsQWRkRGlhbG9nI2NvbXBvbmVudERpZE1vdW50JywgdGhpcy5wcm9wcy5wcm9kdWN0LCBSb3V0ZXIucXVlcnkpXG4gICAgaWYodGhpcy5wcm9wcy5wcm9kdWN0ICYmIFRlc3RpbW9uaWFsQWRkRGlhbG9nLmlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZighcHJvcHMucHJvZHVjdHMgJiYgcHJvcHMucHJvZHVjdCAmJiAoc3RhdGUucHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9wcy5wcm9kdWN0LmlkICE9PSBzdGF0ZS5wcm9kdWN0LmlkKSkge1xuICAgICAgcmV0dXJuIHsgcHJvZHVjdDogcHJvcHMucHJvZHVjdCB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge2NoaWxkcmVuKHsgb25DbGljazogdGhpcy5vbkNsaWNrIH0pfVxuICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBvbkNsb3NlPXt0aGlzLm9uQ2xvc2V9PlxuICAgICAgICAgIHsvKiA8RnJvdyBjb250YWluZXIgY2VudGVyIGp1c3RpZnk9XCJjZW50ZXJcIiBodWc+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5vbkNsb3NlfS8+XG4gICAgICAgICAgICAgIDxNdXRhdGlvblxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcz17e1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiB0aGlzLnN0YXRlLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5zdGF0ZS5wcm9kdWN0ICYmIHRoaXMuc3RhdGUucHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZV9saW5rOiB0aGlzLnN0YXRlLnByb2ZpbGVMaW5rLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtdXRhdGlvbj17Z3FsYFxuICAgICAgICAgICAgICAgICAgbXV0YXRpb24gQ3JlYXRlVGVzdGltb25pYWxNdXRhdGlvbigkaW5wdXQ6IENyZWF0ZVRlc3RpbW9uaWFsTXV0YXRpb25JbnB1dCEpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGVzdGltb25pYWwoaW5wdXQ6ICRpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgQHJlc3QodHlwZTogXCJUZXN0aW1vbmlhbFwiLCBwYXRoOiBcIi93cC92Mi90ZXN0aW1vbmlhbHNcIiwgbWV0aG9kOiBcIlBPU1RcIikge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnc2VudCcsIHRleHQ6ICcnLCBwcm9kdWN0OiBudWxsIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPnsoY3JlYXRlVGVzdGltb25pYWwsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIGNhbGxlZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdjcmVhdGVUZXN0aW1vbmlhbCcsIGRhdGEsIGxvYWRpbmcsIGVycm9yLCBjYWxsZWQpfVxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ25ldycgfHwgdGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdzZW5kaW5nJykgJiYgPFRlc3RpbW9uaWFsQWRkRm9ybVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXt0aGlzLnN0YXRlLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3RoaXMuc3RhdGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlTGluaz17dGhpcy5zdGF0ZS5wcm9maWxlTGlua31cbiAgICAgICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9kdWN0U2VsZWN0PXt0aGlzLm9uUHJvZHVjdFNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25BdXRob3JDaGFuZ2U9e3RoaXMub25BdXRob3JDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ3NlbmRpbmcnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGVzdGltb25pYWwoKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdzZW50JyAmJiA8VGVzdGltb25pYWxTZW50VG9Nb2RlcmF0aW9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ25ldycgfSlcbiAgICAgICAgICAgICAgICAgIH19Lz59XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKX08L011dGF0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1jbG9zZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbk1vYmlsZSBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPC9Gcm93PiAqL31cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5kaWFsb2cge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMzMzMzNyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlLWNsb3NlLWJveCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkeyBUaGVtZS54cy52cigyKSB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgLmRpYWxvZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0Ny4ycmVtO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyB1c2VyLCBzZXRVc2VyIH0pID0+IChcbiAgICA8VGVzdGltb25pYWxBZGREaWFsb2cgey4uLnByb3BzfSB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfS8+XG4gICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxBZGRGb3JtID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMsIHRleHQsIGF1dGhvciwgcHJvZmlsZUxpbmssIG9uVGV4dENoYW5nZSwgb25Qcm9kdWN0U2VsZWN0LCBvblN1Ym1pdCwgb25BdXRob3JDaGFuZ2UgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGgyPtCe0YHRgtCw0LLRjNGC0LUg0L7RgtC30YvQsnshcHJvZHVjdCAmJiAnINC+INC/0YDQvtC10LrRgtC1J308L2gyPlxuICAgIHsoIXByb2R1Y3RzICYmIHByb2R1Y3QpICYmIDxwIGNsYXNzTmFtZT1cInRpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0LnRpdGxlLnJlbmRlcmVkIH19Lz59XG4gICAge3Byb2R1Y3RzICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXRpdGxlXCI+0JLRi9Cx0LXRgNC40YLQtSDRhtC40LrQuywg0L7RgtC30YvQsiDQvdCwINC60L7RgtC+0YDRi9C5INGF0L7RgtC40YLQtSDQvtGB0YLQsNCy0LjRgtGMPC9kaXY+XG4gICAgICAgIDxTZWxlY3RCb3ggdmFsdWU9e3Byb2R1Y3QgPyBwcm9kdWN0LmlkIDogJyd9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgb25Qcm9kdWN0U2VsZWN0KHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpLnJlZHVjZSgoXywgY3VycmVudCkgPT4gY3VycmVudCwgbnVsbCkpfVxuICAgICAgICB9PlxuICAgICAgICAgIDxvcHRpb24+Jm5ic3A7PC9vcHRpb24+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLmlkfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZCB9fS8+KX1cbiAgICAgICAgPC9TZWxlY3RCb3g+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIHsoIXByb2R1Y3RzICYmICFwcm9kdWN0KSAmJiA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCB9KSA9PiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxwPtCd0LDQvCDQvtGH0LXQvdGMINCy0LDQttC90L4g0LLQsNGI0LUg0LzQvdC10L3QuNC1INC+INC90LDRiNC10Lkg0YDQsNCx0L7RgtC1LCDQu9GO0LHQsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPINC/0L7QvNC+0LbQtdGCINC90LDQvCDRgdC00LXQu9Cw0YLRjCDQtdGRINC40L3RgtC10YDQtdGB0L3QtdC1INC4INC/0L7Qu9C10LfQvdC10LUhPC9wPlxuICAgICAgICA8cD7QntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LIg0L3QsCDQvtC00L3RgyDQuNC3INC90LDRiNC40YUg0LvQtdC60YbQuNC5INC80L7QttC90L4sINC/0LXRgNC10LnQtNGPINC90LAg0LXRkSDRgdGC0YDQsNC90LjRhtGDINC40LcgPFdQTGluayB3cD17bmFtZWRXUCgncHJvZHVjdHMuY291cnNlcycpfT7QodC/0LjRgdC60LAg0L3QsNGI0LjRhSDQvNC10YDQvtC/0YDQuNGP0YLQuNC5PC9XUExpbms+LjwvcD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKX08L0FwcENvbnRleHQuQ29uc3VtZXI+fVxuICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0XCIgYXV0b0ZvY3VzPXt0cnVlfSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0vPlxuICAgIHthdXRob3JcbiAgICAgID8gPFRlc3RpbW9uaWFsQXV0aG9ySW5mbyBvblN1Ym1pdD17b25TdWJtaXR9IGRpc2FibGVkPXshKHRleHQubGVuZ3RoID4gMCl9IGF1dGhvcj17YXV0aG9yfSBwcm9maWxlTGluaz17cHJvZmlsZUxpbmt9IG9uQXV0aG9yQ2hhbmdlPXtvbkF1dGhvckNoYW5nZX0vPlxuICAgICAgOiA8VGVzdGltb25pYWxTb2NpYWxMb2dpbiBvbkF1dGhvckNoYW5nZT17b25BdXRob3JDaGFuZ2V9Lz5cbiAgICB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICBoZWlnaHQ6ICR7IFRoZW1lLnhzLnZyKDEwKSB9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZmlsdGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSl9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGhlaWdodDogJHsgVGhlbWUubWQudnIoMTApIH07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICAvKiBmb250LXNpemU6IDAuNzc3NzhyZW07ICovXG4gICAgICAgICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1zZWxlY3RvciB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDJyZW0gKyAycHgpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7IFRoZW1lLmNvbG9ycy5ib3JkZXJHcmF5IH07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMC42cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxTb2NpYWxMb2dpbiA9ICh7IG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW4+XG4gICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+0JTQu9GPINC+0YLQv9GA0LDQstC60Lgg0L7RgtC30YvQstCwINC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0Ywg0YEg0L/QvtC80L7RidGM0Y4g0L7QtNC90L7QuSDQuNC3INGB0L7RhtGB0LXRgtC10Lk6PC9wPlxuICAgICAgPEZyb3cgY29udGFpbmVyIHJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVycyBodWc+XG4gICAgICAgIDxTb2NpYWxMb2dpbi5Qcm92aWRlciBvblN1Y2Nlc3M9eyh1c2VyKSA9PiBvbkF1dGhvckNoYW5nZSh1c2VyLm5hbWUsIHVzZXIubGluayl9PlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9ZmJcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZmFjZWJvb2tcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luRmFjZWJvb2svPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgICA8U29jaWFsTG9naW4uUG9wdXAgdXJsPVwiL2xvZ2luP3Byb3ZpZGVyPXR3XCI+eyh7IG9uQ2xpY2sgfSkgPT4gKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHR3aXR0ZXJcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luVHdpdHRlci8+PC9idXR0b24+KX08L1NvY2lhbExvZ2luLlBvcHVwPlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9dmtcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gdmtvbnRha3RlXCIgb25DbGljaz17b25DbGlja30+PEljb25Tb2NpYWxMb2dpblZrb250YWt0ZS8+PC9idXR0b24+KX08L1NvY2lhbExvZ2luLlBvcHVwPlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9b2tcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gb2tcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luT2svPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgPC9Tb2NpYWxMb2dpbi5Qcm92aWRlcj5cbiAgICAgIDwvRnJvdz5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJ0biB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5idG4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi5mYWNlYm9vayAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kRmFjZWJvb2sgfTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi50d2l0dGVyICA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYnJhbmRUd2l0dGVyIH07XG4gICAgICB9XG5cbiAgICAgIC5idG4udmtvbnRha3RlICA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYnJhbmRWa29udGFrdGUgfTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi5vayAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kT2Rub2tsYXNzbmlraSB9O1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5idG4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbEF1dGhvckluZm8gPSAoeyBvblN1Ym1pdCwgZGlzYWJsZWQsIGF1dGhvciwgcHJvZmlsZUxpbmssIG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW49XCJjZW50ZXJcIj5cbiAgICAgIDxGcm93IGNvbnRhaW5lciBpdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIDxkaXY+0J7RgtC30YvQsiDQsdGD0LTQtdGCINC+0YHRgtCw0LLQu9C10L0g0L7RgiDQuNC80LXQvdC4IDxiPntwcm9maWxlTGluayA/IDxhIGhyZWY9e3Byb2ZpbGVMaW5rfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e2F1dGhvcn08L2E+IDogYXV0aG9yfTwvYj48L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT1cInJlbG9naW5cIiB0aXRsZT1cItCX0LDQudGC0Lgg0L/QvtC0INC00YDRg9Cz0LjQvCDQuNC80LXQvdC10LxcIiBvbkNsaWNrPXsoKSA9PiBvbkF1dGhvckNoYW5nZSgnJywgJycpfT48SWNvbkNsb3NlLz48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zyb3c+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBkaXNhYmxlZD17ZGlzYWJsZWR9PtCe0YLQv9GA0LDQstC40YLRjDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yZWxvZ2luIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKX07XG4gICAgICB9XG5cbiAgICAgIC5yZWxvZ2luIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5ncmF5Mn07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYm94IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbFNlbnRUb01vZGVyYXRpb24gPSAoeyBvbkNsaWNrIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxoMj7QntGC0LfRi9CyINC+0YLQv9GA0LDQstC70LXQvTwvaDI+XG4gICAgPEZyb3cgY29udGFpbmVyIGNvbHVtbj1cImNlbnRlclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPtCR0LvQsNCz0L7QtNCw0YDQuNC8INCS0LDRgSDQt9CwINC+0YLQt9GL0LIsINC+0L0g0L7RgtC/0YDQsNCy0LvQtdC9INC90LAg0L/RgNC+0LLQtdGA0LrRgyDQvNC+0LTQtdGA0LDRgtC+0YDQvtC8INC4INGB0LrQvtGA0L4g0L/QvtGP0LLQuNGC0YHRjyDQvdCwINGB0LDQudGC0LUuPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT7Ql9Cw0LrRgNGL0YLRjDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuIl19 */\n/*@ sourceURL=src/next/components/TestimonialAddDialog.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.gray2, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]
  }));
};
var TestimonialSentToModeration = function TestimonialSentToModeration(_ref12) {
  var onClick = _ref12.onClick;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3885231662", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]])
  }, "\u041E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    container: true,
    column: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3885231662", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "message"
  }, "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0412\u0430\u0441 \u0437\u0430 \u043E\u0442\u0437\u044B\u0432, \u043E\u043D \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0438 \u0441\u043A\u043E\u0440\u043E \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3885231662", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "button"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Button__["b" /* default */], {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3885231662",
    css: "h2.__jsx-style-dynamic-selector{text-align:center;margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), ";}.message.__jsx-style-dynamic-selector{text-align:center;}@media (min-width:992px){h2.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNldnQixBQUcyQixBQUtBLEFBSzJCLGtCQVRGLEFBSzdDLHlCQUtFLGtCQVRGIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxBZGREaWFsb2cuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCJcbi8vIGltcG9ydCBxcyBmcm9tICdxcydcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBNb2RhbCwgeyBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbENsb3NlQnV0dG9uTW9iaWxlIH0gZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuL0FwcENvbnRleHQnXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vU2VsZWN0Qm94J1xuaW1wb3J0IFdQTGluayBmcm9tICcuL1dQTGluaydcbmltcG9ydCB7XG4gIEljb25Tb2NpYWxMb2dpbkZhY2Vib29rLFxuICBJY29uU29jaWFsTG9naW5Ud2l0dGVyLFxuICBJY29uU29jaWFsTG9naW5Wa29udGFrdGUsXG4gIEljb25Tb2NpYWxMb2dpbk9rLFxuICBJY29uQ2xvc2UsXG59IGZyb20gJy4vSWNvbnMnXG5cbmltcG9ydCBTb2NpYWxMb2dpbiBmcm9tICcuL1NvY2lhbExvZ2luJ1xuXG5jbGFzcyBUZXN0aW1vbmlhbEFkZERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHN0YXR1czogJ25ldycsXG4gICAgYXV0aG9yOiAnJyxcbiAgICBwcm9maWxlTGluazogJycsXG4gICAgcHJvZHVjdDogbnVsbCxcbiAgICB0ZXh0OiAnJ1xuICB9XG5cbiAgc3RhdGljIGlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNvdHp5dicgfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjb3R6aXYnXG4gIH1cblxuICBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gIH1cblxuICBvbkNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxuICAgIGlmKFRlc3RpbW9uaWFsQWRkRGlhbG9nLmlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkpIHtcblxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgb25UZXh0Q2hhbmdlID0gKGUpID0+IHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiBlLnRhcmdldC52YWx1ZSB9KVxuXG4gIG9uUHJvZHVjdFNlbGVjdCA9IChwcm9kdWN0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uUHJvZHVjdFNlbGVjdCcsIHByb2R1Y3QpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3QgfSlcbiAgfVxuXG4gIG9uQXV0aG9yQ2hhbmdlID0gKGF1dGhvciwgcHJvZmlsZUxpbmspID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aG9yLCBwcm9maWxlTGluayB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1Rlc3RpbW9uaWFsQWRkRGlhbG9nI2NvbXBvbmVudERpZE1vdW50JywgdGhpcy5wcm9wcy5wcm9kdWN0LCBSb3V0ZXIucXVlcnkpXG4gICAgaWYodGhpcy5wcm9wcy5wcm9kdWN0ICYmIFRlc3RpbW9uaWFsQWRkRGlhbG9nLmlzQXV0b29wZW5LZXl3b3JkU3BlY2lmaWVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZighcHJvcHMucHJvZHVjdHMgJiYgcHJvcHMucHJvZHVjdCAmJiAoc3RhdGUucHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9wcy5wcm9kdWN0LmlkICE9PSBzdGF0ZS5wcm9kdWN0LmlkKSkge1xuICAgICAgcmV0dXJuIHsgcHJvZHVjdDogcHJvcHMucHJvZHVjdCB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge2NoaWxkcmVuKHsgb25DbGljazogdGhpcy5vbkNsaWNrIH0pfVxuICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBvbkNsb3NlPXt0aGlzLm9uQ2xvc2V9PlxuICAgICAgICAgIHsvKiA8RnJvdyBjb250YWluZXIgY2VudGVyIGp1c3RpZnk9XCJjZW50ZXJcIiBodWc+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5vbkNsb3NlfS8+XG4gICAgICAgICAgICAgIDxNdXRhdGlvblxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcz17e1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiB0aGlzLnN0YXRlLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5zdGF0ZS5wcm9kdWN0ICYmIHRoaXMuc3RhdGUucHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZV9saW5rOiB0aGlzLnN0YXRlLnByb2ZpbGVMaW5rLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtdXRhdGlvbj17Z3FsYFxuICAgICAgICAgICAgICAgICAgbXV0YXRpb24gQ3JlYXRlVGVzdGltb25pYWxNdXRhdGlvbigkaW5wdXQ6IENyZWF0ZVRlc3RpbW9uaWFsTXV0YXRpb25JbnB1dCEpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGVzdGltb25pYWwoaW5wdXQ6ICRpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgQHJlc3QodHlwZTogXCJUZXN0aW1vbmlhbFwiLCBwYXRoOiBcIi93cC92Mi90ZXN0aW1vbmlhbHNcIiwgbWV0aG9kOiBcIlBPU1RcIikge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnc2VudCcsIHRleHQ6ICcnLCBwcm9kdWN0OiBudWxsIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPnsoY3JlYXRlVGVzdGltb25pYWwsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIGNhbGxlZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdjcmVhdGVUZXN0aW1vbmlhbCcsIGRhdGEsIGxvYWRpbmcsIGVycm9yLCBjYWxsZWQpfVxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ25ldycgfHwgdGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdzZW5kaW5nJykgJiYgPFRlc3RpbW9uaWFsQWRkRm9ybVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXt0aGlzLnN0YXRlLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3RoaXMuc3RhdGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlTGluaz17dGhpcy5zdGF0ZS5wcm9maWxlTGlua31cbiAgICAgICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9kdWN0U2VsZWN0PXt0aGlzLm9uUHJvZHVjdFNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25BdXRob3JDaGFuZ2U9e3RoaXMub25BdXRob3JDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ3NlbmRpbmcnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGVzdGltb25pYWwoKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdzZW50JyAmJiA8VGVzdGltb25pYWxTZW50VG9Nb2RlcmF0aW9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ25ldycgfSlcbiAgICAgICAgICAgICAgICAgIH19Lz59XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKX08L011dGF0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1jbG9zZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbk1vYmlsZSBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPC9Gcm93PiAqL31cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5kaWFsb2cge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMzMzMzNyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlLWNsb3NlLWJveCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkeyBUaGVtZS54cy52cigyKSB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgLmRpYWxvZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0Ny4ycmVtO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyB1c2VyLCBzZXRVc2VyIH0pID0+IChcbiAgICA8VGVzdGltb25pYWxBZGREaWFsb2cgey4uLnByb3BzfSB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfS8+XG4gICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxBZGRGb3JtID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMsIHRleHQsIGF1dGhvciwgcHJvZmlsZUxpbmssIG9uVGV4dENoYW5nZSwgb25Qcm9kdWN0U2VsZWN0LCBvblN1Ym1pdCwgb25BdXRob3JDaGFuZ2UgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGgyPtCe0YHRgtCw0LLRjNGC0LUg0L7RgtC30YvQsnshcHJvZHVjdCAmJiAnINC+INC/0YDQvtC10LrRgtC1J308L2gyPlxuICAgIHsoIXByb2R1Y3RzICYmIHByb2R1Y3QpICYmIDxwIGNsYXNzTmFtZT1cInRpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0LnRpdGxlLnJlbmRlcmVkIH19Lz59XG4gICAge3Byb2R1Y3RzICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXRpdGxlXCI+0JLRi9Cx0LXRgNC40YLQtSDRhtC40LrQuywg0L7RgtC30YvQsiDQvdCwINC60L7RgtC+0YDRi9C5INGF0L7RgtC40YLQtSDQvtGB0YLQsNCy0LjRgtGMPC9kaXY+XG4gICAgICAgIDxTZWxlY3RCb3ggdmFsdWU9e3Byb2R1Y3QgPyBwcm9kdWN0LmlkIDogJyd9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgb25Qcm9kdWN0U2VsZWN0KHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpLnJlZHVjZSgoXywgY3VycmVudCkgPT4gY3VycmVudCwgbnVsbCkpfVxuICAgICAgICB9PlxuICAgICAgICAgIDxvcHRpb24+Jm5ic3A7PC9vcHRpb24+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLmlkfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZCB9fS8+KX1cbiAgICAgICAgPC9TZWxlY3RCb3g+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIHsoIXByb2R1Y3RzICYmICFwcm9kdWN0KSAmJiA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCB9KSA9PiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxwPtCd0LDQvCDQvtGH0LXQvdGMINCy0LDQttC90L4g0LLQsNGI0LUg0LzQvdC10L3QuNC1INC+INC90LDRiNC10Lkg0YDQsNCx0L7RgtC1LCDQu9GO0LHQsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPINC/0L7QvNC+0LbQtdGCINC90LDQvCDRgdC00LXQu9Cw0YLRjCDQtdGRINC40L3RgtC10YDQtdGB0L3QtdC1INC4INC/0L7Qu9C10LfQvdC10LUhPC9wPlxuICAgICAgICA8cD7QntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LIg0L3QsCDQvtC00L3RgyDQuNC3INC90LDRiNC40YUg0LvQtdC60YbQuNC5INC80L7QttC90L4sINC/0LXRgNC10LnQtNGPINC90LAg0LXRkSDRgdGC0YDQsNC90LjRhtGDINC40LcgPFdQTGluayB3cD17bmFtZWRXUCgncHJvZHVjdHMuY291cnNlcycpfT7QodC/0LjRgdC60LAg0L3QsNGI0LjRhSDQvNC10YDQvtC/0YDQuNGP0YLQuNC5PC9XUExpbms+LjwvcD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKX08L0FwcENvbnRleHQuQ29uc3VtZXI+fVxuICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0XCIgYXV0b0ZvY3VzPXt0cnVlfSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0vPlxuICAgIHthdXRob3JcbiAgICAgID8gPFRlc3RpbW9uaWFsQXV0aG9ySW5mbyBvblN1Ym1pdD17b25TdWJtaXR9IGRpc2FibGVkPXshKHRleHQubGVuZ3RoID4gMCl9IGF1dGhvcj17YXV0aG9yfSBwcm9maWxlTGluaz17cHJvZmlsZUxpbmt9IG9uQXV0aG9yQ2hhbmdlPXtvbkF1dGhvckNoYW5nZX0vPlxuICAgICAgOiA8VGVzdGltb25pYWxTb2NpYWxMb2dpbiBvbkF1dGhvckNoYW5nZT17b25BdXRob3JDaGFuZ2V9Lz5cbiAgICB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICBoZWlnaHQ6ICR7IFRoZW1lLnhzLnZyKDEwKSB9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZmlsdGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSl9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGhlaWdodDogJHsgVGhlbWUubWQudnIoMTApIH07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICAvKiBmb250LXNpemU6IDAuNzc3NzhyZW07ICovXG4gICAgICAgICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1zZWxlY3RvciB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDJyZW0gKyAycHgpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7IFRoZW1lLmNvbG9ycy5ib3JkZXJHcmF5IH07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMC42cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxTb2NpYWxMb2dpbiA9ICh7IG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW4+XG4gICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+0JTQu9GPINC+0YLQv9GA0LDQstC60Lgg0L7RgtC30YvQstCwINC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0Ywg0YEg0L/QvtC80L7RidGM0Y4g0L7QtNC90L7QuSDQuNC3INGB0L7RhtGB0LXRgtC10Lk6PC9wPlxuICAgICAgPEZyb3cgY29udGFpbmVyIHJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVycyBodWc+XG4gICAgICAgIDxTb2NpYWxMb2dpbi5Qcm92aWRlciBvblN1Y2Nlc3M9eyh1c2VyKSA9PiBvbkF1dGhvckNoYW5nZSh1c2VyLm5hbWUsIHVzZXIubGluayl9PlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9ZmJcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZmFjZWJvb2tcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luRmFjZWJvb2svPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgICA8U29jaWFsTG9naW4uUG9wdXAgdXJsPVwiL2xvZ2luP3Byb3ZpZGVyPXR3XCI+eyh7IG9uQ2xpY2sgfSkgPT4gKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHR3aXR0ZXJcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luVHdpdHRlci8+PC9idXR0b24+KX08L1NvY2lhbExvZ2luLlBvcHVwPlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9dmtcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gdmtvbnRha3RlXCIgb25DbGljaz17b25DbGlja30+PEljb25Tb2NpYWxMb2dpblZrb250YWt0ZS8+PC9idXR0b24+KX08L1NvY2lhbExvZ2luLlBvcHVwPlxuICAgICAgICAgIDxTb2NpYWxMb2dpbi5Qb3B1cCB1cmw9XCIvbG9naW4/cHJvdmlkZXI9b2tcIj57KHsgb25DbGljayB9KSA9PiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gb2tcIiBvbkNsaWNrPXtvbkNsaWNrfT48SWNvblNvY2lhbExvZ2luT2svPjwvYnV0dG9uPil9PC9Tb2NpYWxMb2dpbi5Qb3B1cD5cbiAgICAgICAgPC9Tb2NpYWxMb2dpbi5Qcm92aWRlcj5cbiAgICAgIDwvRnJvdz5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJ0biB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5idG4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi5mYWNlYm9vayAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kRmFjZWJvb2sgfTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi50d2l0dGVyICA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYnJhbmRUd2l0dGVyIH07XG4gICAgICB9XG5cbiAgICAgIC5idG4udmtvbnRha3RlICA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYnJhbmRWa29udGFrdGUgfTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi5vayAgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJyYW5kT2Rub2tsYXNzbmlraSB9O1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5idG4gOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbEF1dGhvckluZm8gPSAoeyBvblN1Ym1pdCwgZGlzYWJsZWQsIGF1dGhvciwgcHJvZmlsZUxpbmssIG9uQXV0aG9yQ2hhbmdlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBjb2x1bW49XCJjZW50ZXJcIj5cbiAgICAgIDxGcm93IGNvbnRhaW5lciBpdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIDxkaXY+0J7RgtC30YvQsiDQsdGD0LTQtdGCINC+0YHRgtCw0LLQu9C10L0g0L7RgiDQuNC80LXQvdC4IDxiPntwcm9maWxlTGluayA/IDxhIGhyZWY9e3Byb2ZpbGVMaW5rfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e2F1dGhvcn08L2E+IDogYXV0aG9yfTwvYj48L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT1cInJlbG9naW5cIiB0aXRsZT1cItCX0LDQudGC0Lgg0L/QvtC0INC00YDRg9Cz0LjQvCDQuNC80LXQvdC10LxcIiBvbkNsaWNrPXsoKSA9PiBvbkF1dGhvckNoYW5nZSgnJywgJycpfT48SWNvbkNsb3NlLz48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zyb3c+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBkaXNhYmxlZD17ZGlzYWJsZWR9PtCe0YLQv9GA0LDQstC40YLRjDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yZWxvZ2luIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKX07XG4gICAgICB9XG5cbiAgICAgIC5yZWxvZ2luIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5ncmF5Mn07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYm94IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbFNlbnRUb01vZGVyYXRpb24gPSAoeyBvbkNsaWNrIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxoMj7QntGC0LfRi9CyINC+0YLQv9GA0LDQstC70LXQvTwvaDI+XG4gICAgPEZyb3cgY29udGFpbmVyIGNvbHVtbj1cImNlbnRlclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPtCR0LvQsNCz0L7QtNCw0YDQuNC8INCS0LDRgSDQt9CwINC+0YLQt9GL0LIsINC+0L0g0L7RgtC/0YDQsNCy0LvQtdC9INC90LAg0L/RgNC+0LLQtdGA0LrRgyDQvNC+0LTQtdGA0LDRgtC+0YDQvtC8INC4INGB0LrQvtGA0L4g0L/QvtGP0LLQuNGC0YHRjyDQvdCwINGB0LDQudGC0LUuPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT7Ql9Cw0LrRgNGL0YLRjDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpfTtcbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuIl19 */\n/*@ sourceURL=src/next/components/TestimonialAddDialog.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1)]
  }));
};

/***/ }),

/***/ "./components/Testimonials.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TestimonialsList */
/* unused harmony export TestimonialsHeader */
/* unused harmony export TestimonialsSection */
/* unused harmony export ProductTestimonials */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_utils__ = __webpack_require__("./lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__("./components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SelectBox__ = __webpack_require__("./components/SelectBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Testimonial__ = __webpack_require__("./components/Testimonial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TestimonialAddDialog__ = __webpack_require__("./components/TestimonialAddDialog.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Testimonials.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var pluralizeTestimonials = Object(__WEBPACK_IMPORTED_MODULE_4__lib_utils__["g" /* pluralize */])({
  one: 'отзыв',
  few: 'отзыва',
  many: 'отзывов'
});
var TestimonialsList = function TestimonialsList(_ref) {
  var children = _ref.children,
      wide = _ref.wide;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    container: true,
    gutters: true,
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3328887232", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5)]]]) + " " + "reviews"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.map(children, function (item, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
      xs: "1/1",
      md: wide ? '1/1' : '1/2',
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3328887232", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5)]]]) + " " + "review"
    }, item));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3328887232",
    css: ".review.__jsx-style-dynamic-selector{margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), ";}@media (min-width:992px){.review.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCZ0IsQUFPb0QsQUFTRSwyQ0FSL0MsQUFTRSIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBwbHVyYWxpemUgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFNlbGVjdEJveCBmcm9tICcuL1NlbGVjdEJveCdcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tICcuL1Rlc3RpbW9uaWFsJ1xuaW1wb3J0IFRlc3RpbW9uaWFsQWRkRGlhbG9nIGZyb20gJy4vVGVzdGltb25pYWxBZGREaWFsb2cnXG5cbmNvbnN0IHBsdXJhbGl6ZVRlc3RpbW9uaWFscyA9IHBsdXJhbGl6ZSh7IG9uZTogJ9C+0YLQt9GL0LInLCBmZXc6ICfQvtGC0LfRi9Cy0LAnLCBtYW55OiAn0L7RgtC30YvQstC+0LInIH0pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbHNMaXN0ID0gKHsgY2hpbGRyZW4sIHdpZGUgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEZyb3cgY29udGFpbmVyIGd1dHRlcnMganVzdGlmeT1cInN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3NcIj5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8RnJvdyB4cz1cIjEvMVwiIG1kPXt3aWRlID8gJzEvMScgOiAnMS8yJ30ga2V5PXtpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3XCI+XG4gICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucmV2aWV3cyB7XG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNzUpfTsgKi9cbiAgICAgIH1cblxuICAgICAgLnJldmlldyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuMjUpfTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5yZXZpZXdzIHtcbiAgICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KX07ICovXG4gICAgICAgIH1cblxuICAgICAgICAucmV2aWV3IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxLjUpfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsc0hlYWRlciA9ICh7IGNoaWxkcmVuLCBzZWxlY3Rib3ggPSB0cnVlIH0pID0+IHtcbiAgY29uc3QgW2xlZnRDaGlsZCwgcmlnaHRDaGlsZF0gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVxuXG4gIGNvbnN0IHNocmlua2dyb3cgPSBzZWxlY3Rib3ggPyAxIDogMDtcbiAgcmV0dXJuIChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBqdXN0aWZ5PVwiYmV0d2VlblwiIGd1dHRlcnMgaXRlbXM9XCJlbmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+XG4gICAgICAgIDxGcm93IHhzPXtzZWxlY3Rib3ggPyAnMS8xJyA6ICdhdXRvJ30gbWQ9XCJhdXRvXCIgc2hyaW5rPXtzaHJpbmtncm93fSBncm93PXtzaHJpbmtncm93fSBodWc+e2xlZnRDaGlsZH08L0Zyb3c+XG4gICAgICAgIDxGcm93IHhzPXtzZWxlY3Rib3ggPyAnMS8xJyA6ICdhdXRvJ30gbWQ9e3NlbGVjdGJveCA/ICc0LzYnIDogJ2F1dG8nfSBzaHJpbms9e3Nocmlua2dyb3d9IGdyb3c9e3Nocmlua2dyb3d9IGh1Zz57cmlnaHRDaGlsZH08L0Zyb3c+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnN1YmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDIpIH07XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLnN1YmhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMikgfTtcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbil9XG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbHNTZWN0aW9uID0gKHsgdGl0bGUsIGNoaWxkcmVuIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAge3RpdGxlfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAvKiAuYm94IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMSkgfTtcbiAgICAgIH0gKi9cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIC5ib3gge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEuNzUpIH07XG4gICAgICAgIH0gKi9cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmNvbnN0IFRlc3RpbW9uaWFscyA9ICh7IHRpdGxlID0gJ9Ce0YLQt9GL0LLRiycsIGFkZEJ1dHRvblRpdGxlID0gJ9Cd0LDQv9C40YHQsNGC0Ywg0L7RgtC30YvQsicsIGNvdW50LCBpdGVtcyA9IFtdLCBwcm9kdWN0cywgc2VsZWN0ZWRQcm9kdWN0LCBvblByb2R1Y3RDaGFuZ2UsIHdpZGUsIGJ1dHRvblZhcmlhbnQgPSAnbmFycm93JywgZXhjbHVkZSA9IFtdIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxUZXN0aW1vbmlhbHNTZWN0aW9uXG4gICAgICB0aXRsZT17ZXhjbHVkZS5pbmRleE9mKCd0aXRsZScpID09PSAtMSAmJiA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+PHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRpdGxlfX0vPiAoe2NvdW50fSk8L2gxPn1cbiAgICA+XG4gICAgICA8VGVzdGltb25pYWxzSGVhZGVyPlxuICAgICAgICA8VGVzdGltb25pYWxBZGREaWFsb2c+eyh7IG9uQ2xpY2sgfSkgPT4gKFxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD17YnV0dG9uVmFyaWFudH0gb25DbGljaz17b25DbGlja30+e2FkZEJ1dHRvblRpdGxlfTwvQnV0dG9uPlxuICAgICAgICApfTwvVGVzdGltb25pYWxBZGREaWFsb2c+XG4gICAgICAgIHsocHJvZHVjdHMgJiYgZXhjbHVkZS5pbmRleE9mKCdmaWx0ZXInKSA9PT0gLTEpICYmIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPtCS0YvQsdC10YDQuNGC0LUg0YbQuNC60LssINC+0YLQt9GL0LLRiyDQvdCwINC60L7RgtC+0YDRi9C5INGF0L7RgtC40YLQtSDQv9C+0YHQvNC+0YLRgNC10YLRjDwvZGl2PlxuICAgICAgICAgIDxTZWxlY3RCb3ggdmFsdWU9e3NlbGVjdGVkUHJvZHVjdH0gb25DaGFuZ2U9eyhlKSA9PiBvblByb2R1Y3RDaGFuZ2UoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jyc+LSDQktGB0LUg0L7RgtC30YvQstGLIC08L29wdGlvbj5cbiAgICAgICAgICAgIHtwcm9kdWN0cyAmJiBwcm9kdWN0cy5tYXAoKGl0ZW0sIGkpID0+IDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0udGl0bGUucmVuZGVyZWR9fS8+KX1cbiAgICAgICAgICA8L1NlbGVjdEJveD5cbiAgICAgICAgPC9kaXY+fVxuICAgICAgPC9UZXN0aW1vbmlhbHNIZWFkZXI+XG4gICAgICB7Y291bnQgPiAwXG4gICAgICAgID8gPFRlc3RpbW9uaWFsc0xpc3Qgd2lkZT17d2lkZX0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8VGVzdGltb25pYWxcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hY2YuYXV0aG9yfVxuICAgICAgICAgICAgYXV0aG9yVXJsPXtpdGVtLmFjZi5wcm9maWxlX2xpbmt9XG4gICAgICAgICAgICBvYmplY3RUaXRsZT17aXRlbS5hY2YucHJvZHVjdC5wb3N0X3RpdGxlfVxuICAgICAgICAgICAgb2JqZWN0PXtpdGVtLmFjZi5wcm9kdWN0fVxuICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgID48ZGl2IGNsYXNzTmFtZT1cInR4dC1ib3hcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS5hY2YudGV4dH19Lz48L1Rlc3RpbW9uaWFsPlxuICAgICAgICApKX1cbiAgICAgIDwvVGVzdGltb25pYWxzTGlzdD5cbiAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJiZS1maXJzdFwiPtCf0L7QutCwINC+0YLQt9GL0LLQvtCyINC90LXRgiwg0LHRg9C00YzRgtC1INC/0LXRgNCy0YvQvCwg0LrRgtC+INC10LPQviDQvtGB0YLQsNCy0LjRgiE8L2Rpdj5cbiAgICB9XG4gICAgPC9UZXN0aW1vbmlhbHNTZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5maWx0ZXIge1xuICAgICAgfVxuXG4gICAgICAuZmlsdGVyIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogJHsgVGhlbWUueHMudnIoMSkgfSAwO1xuICAgICAgfVxuXG4gICAgICAudHh0LWJveCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0keyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAxLjVyZW07ICovXG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVyIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy50ZXh0R3JheSB9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43Nzc3OHJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMC43NSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIC5maWx0ZXIgLnNlbGVjdG9yIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMnJlbSArIDJweCk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy50ZXh0R3JheSB9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg4ODg5cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsgVGhlbWUuY29sb3JzLmJvcmRlckdyYXkgfTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkeyBUaGVtZS5tZC5ib3JkZXJSYWRpdXMuZGVmYXVsdCB9O1xuICAgICAgICAgIHRleHQtaW5kZW50OiAwLjZyZW07XG4gICAgICAgIH0gKi9cbiAgICAgICAgLnR4dC1ib3gge1xuICAgICAgICAgIC8qIG1hcmdpbi1ib3R0b206IC0keyBUaGVtZS5tZC52cigxKSB9OyAqL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHNcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RUZXN0aW1vbmlhbHMgPSAoeyB0aXRsZSA9ICfQntGC0LfRi9Cy0YsnLCBjb3VudCwgaXRlbXMgPSBbXSwgcHJvZHVjdCB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8VGVzdGltb25pYWxzU2VjdGlvblxuICAgICAgdGl0bGU9ezxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGl0bGV9fS8+fVxuICAgID5cbiAgICAgIDxhIG5hbWU9XCJvdHp5dlwiPiA8L2E+PGEgbmFtZT1cIm90eml2XCI+IDwvYT5cbiAgICAgICAgPFRlc3RpbW9uaWFsc0hlYWRlciBzZWxlY3Rib3g9e2ZhbHNlfT5cbiAgICAgICAgICA8VGVzdGltb25pYWxBZGREaWFsb2cgcHJvZHVjdD17cHJvZHVjdH0+eyh7IG9uQ2xpY2sgfSkgPT4gKFxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwid2hpdGVcIiBvbkNsaWNrPXtvbkNsaWNrfT7QndCw0L/QuNGB0LDRgtGMINC+0YLQt9GL0LI8L0J1dHRvbj5cbiAgICAgICAgICApfTwvVGVzdGltb25pYWxBZGREaWFsb2c+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudFwiPntjb3VudH0ge3BsdXJhbGl6ZVRlc3RpbW9uaWFscyhjb3VudCl9PC9kaXY+XG4gICAgICAgIDwvVGVzdGltb25pYWxzSGVhZGVyPlxuXG4gICAgICAgIHtjb3VudCA+IDBcbiAgICAgICAgICA/IDxUZXN0aW1vbmlhbHNMaXN0PntpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hY2YuYXV0aG9yfVxuICAgICAgICAgICAgICAgIGF1dGhvclVybD17aXRlbS5hY2YucHJvZmlsZV9saW5rfVxuICAgICAgICAgICAgICAgIC8vIG9iamVjdFRpdGxlPXtpdGVtLmFjZi5wcm9kdWN0LnBvc3RfdGl0bGV9XG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0PXtpdGVtLmFjZi5wcm9kdWN0fVxuICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgPjxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uYWNmLnRleHR9fS8+PC9UZXN0aW1vbmlhbD5cbiAgICAgICAgICAgICkpfTwvVGVzdGltb25pYWxzTGlzdD5cbiAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiYmUtZmlyc3RcIj7Qn9C+0LrQsCDQvtGC0LfRi9Cy0L7QsiDQvdC10YIsINCx0YPQtNGM0YLQtSDQv9C10YDQstGL0LwsINC60YLQviDQtdCz0L4g0L7RgdGC0LDQstC40YIhPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L1Rlc3RpbW9uaWFsc1NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdW50IHtcbiAgICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy50ZXh0R3JheSB9O1xuICAgICAgICBmb250LXNpemU6IDEuMzMzMzNyZW07XG4gICAgICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuYmUtZmlyc3Qge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjUpIH07XG4gICAgICAgIH1cbiAgICAgICAgLmNvdW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG4iXX0= */\n/*@ sourceURL=src/next/components/Testimonials.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5)]
  }));
};
var TestimonialsHeader = function TestimonialsHeader(_ref2) {
  var children = _ref2.children,
      _ref2$selectbox = _ref2.selectbox,
      selectbox = _ref2$selectbox === void 0 ? true : _ref2$selectbox;

  var _React$Children$toArr = __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.toArray(children),
      _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2),
      leftChild = _React$Children$toArr2[0],
      rightChild = _React$Children$toArr2[1];

  var shrinkgrow = selectbox ? 1 : 0;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    container: true,
    justify: "between",
    gutters: true,
    items: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4139925195", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2)]]]) + " " + "subheader"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    xs: selectbox ? '1/1' : 'auto',
    md: "auto",
    shrink: shrinkgrow,
    grow: shrinkgrow,
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, leftChild), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
    xs: selectbox ? '1/1' : 'auto',
    md: selectbox ? '4/6' : 'auto',
    shrink: shrinkgrow,
    grow: shrinkgrow,
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, rightChild))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4139925195",
    css: ".subheader.__jsx-style-dynamic-selector{margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), ";}@media (min-width:992px){.subheader.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2), ";-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEZ0IsQUFHb0QsQUFJRSwyQ0FIL0MsQUFJcUIsK0RBQ25CIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IHBsdXJhbGl6ZSB9IGZyb20gJy4uL2xpYi91dGlscydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vU2VsZWN0Qm94J1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gJy4vVGVzdGltb25pYWwnXG5pbXBvcnQgVGVzdGltb25pYWxBZGREaWFsb2cgZnJvbSAnLi9UZXN0aW1vbmlhbEFkZERpYWxvZydcblxuY29uc3QgcGx1cmFsaXplVGVzdGltb25pYWxzID0gcGx1cmFsaXplKHsgb25lOiAn0L7RgtC30YvQsicsIGZldzogJ9C+0YLQt9GL0LLQsCcsIG1hbnk6ICfQvtGC0LfRi9Cy0L7QsicgfSlcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsc0xpc3QgPSAoeyBjaGlsZHJlbiwgd2lkZSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyBjb250YWluZXIgZ3V0dGVycyBqdXN0aWZ5PVwic3RhcnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3c1wiPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxGcm93IHhzPVwiMS8xXCIgbWQ9e3dpZGUgPyAnMS8xJyA6ICcxLzInfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdcIj5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yZXZpZXdzIHtcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC43NSl9OyAqL1xuICAgICAgfVxuXG4gICAgICAucmV2aWV3IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC4yNSl9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLnJldmlld3Mge1xuICAgICAgICAgIC8qIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNzUpfTsgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXZpZXcge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEuNSl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxzSGVhZGVyID0gKHsgY2hpbGRyZW4sIHNlbGVjdGJveCA9IHRydWUgfSkgPT4ge1xuICBjb25zdCBbbGVmdENoaWxkLCByaWdodENoaWxkXSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pXG5cbiAgY29uc3Qgc2hyaW5rZ3JvdyA9IHNlbGVjdGJveCA/IDEgOiAwO1xuICByZXR1cm4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEZyb3cgY29udGFpbmVyIGp1c3RpZnk9XCJiZXR3ZWVuXCIgZ3V0dGVycyBpdGVtcz1cImVuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5cbiAgICAgICAgPEZyb3cgeHM9e3NlbGVjdGJveCA/ICcxLzEnIDogJ2F1dG8nfSBtZD1cImF1dG9cIiBzaHJpbms9e3Nocmlua2dyb3d9IGdyb3c9e3Nocmlua2dyb3d9IGh1Zz57bGVmdENoaWxkfTwvRnJvdz5cbiAgICAgICAgPEZyb3cgeHM9e3NlbGVjdGJveCA/ICcxLzEnIDogJ2F1dG8nfSBtZD17c2VsZWN0Ym94ID8gJzQvNicgOiAnYXV0byd9IHNocmluaz17c2hyaW5rZ3Jvd30gZ3Jvdz17c2hyaW5rZ3Jvd30gaHVnPntyaWdodENoaWxkfTwvRnJvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMikgfTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigyKSB9O1xuICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKX1cblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsc1NlY3Rpb24gPSAoeyB0aXRsZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICB7dGl0bGV9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC8qIC5ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgfSAqL1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMC41KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLmJveCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMS43NSkgfTtcbiAgICAgICAgfSAqL1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuY29uc3QgVGVzdGltb25pYWxzID0gKHsgdGl0bGUgPSAn0J7RgtC30YvQstGLJywgYWRkQnV0dG9uVGl0bGUgPSAn0J3QsNC/0LjRgdCw0YLRjCDQvtGC0LfRi9CyJywgY291bnQsIGl0ZW1zID0gW10sIHByb2R1Y3RzLCBzZWxlY3RlZFByb2R1Y3QsIG9uUHJvZHVjdENoYW5nZSwgd2lkZSwgYnV0dG9uVmFyaWFudCA9ICduYXJyb3cnLCBleGNsdWRlID0gW10gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPFRlc3RpbW9uaWFsc1NlY3Rpb25cbiAgICAgIHRpdGxlPXtleGNsdWRlLmluZGV4T2YoJ3RpdGxlJykgPT09IC0xICYmIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj48c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGl0bGV9fS8+ICh7Y291bnR9KTwvaDE+fVxuICAgID5cbiAgICAgIDxUZXN0aW1vbmlhbHNIZWFkZXI+XG4gICAgICAgIDxUZXN0aW1vbmlhbEFkZERpYWxvZz57KHsgb25DbGljayB9KSA9PiAoXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtidXR0b25WYXJpYW50fSBvbkNsaWNrPXtvbkNsaWNrfT57YWRkQnV0dG9uVGl0bGV9PC9CdXR0b24+XG4gICAgICAgICl9PC9UZXN0aW1vbmlhbEFkZERpYWxvZz5cbiAgICAgICAgeyhwcm9kdWN0cyAmJiBleGNsdWRlLmluZGV4T2YoJ2ZpbHRlcicpID09PSAtMSkgJiYgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+0JLRi9Cx0LXRgNC40YLQtSDRhtC40LrQuywg0L7RgtC30YvQstGLINC90LAg0LrQvtGC0L7RgNGL0Lkg0YXQvtGC0LjRgtC1INC/0L7RgdC80L7RgtGA0LXRgtGMPC9kaXY+XG4gICAgICAgICAgPFNlbGVjdEJveCB2YWx1ZT17c2VsZWN0ZWRQcm9kdWN0fSBvbkNoYW5nZT17KGUpID0+IG9uUHJvZHVjdENoYW5nZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz4tINCS0YHQtSDQvtGC0LfRi9Cy0YsgLTwvb3B0aW9uPlxuICAgICAgICAgICAge3Byb2R1Y3RzICYmIHByb2R1Y3RzLm1hcCgoaXRlbSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZH19Lz4pfVxuICAgICAgICAgIDwvU2VsZWN0Qm94PlxuICAgICAgICA8L2Rpdj59XG4gICAgICA8L1Rlc3RpbW9uaWFsc0hlYWRlcj5cbiAgICAgIHtjb3VudCA+IDBcbiAgICAgICAgPyA8VGVzdGltb25pYWxzTGlzdCB3aWRlPXt3aWRlfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxUZXN0aW1vbmlhbFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjZi5hdXRob3J9XG4gICAgICAgICAgICBhdXRob3JVcmw9e2l0ZW0uYWNmLnByb2ZpbGVfbGlua31cbiAgICAgICAgICAgIG9iamVjdFRpdGxlPXtpdGVtLmFjZi5wcm9kdWN0LnBvc3RfdGl0bGV9XG4gICAgICAgICAgICBvYmplY3Q9e2l0ZW0uYWNmLnByb2R1Y3R9XG4gICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgPjxkaXYgY2xhc3NOYW1lPVwidHh0LWJveFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLmFjZi50ZXh0fX0vPjwvVGVzdGltb25pYWw+XG4gICAgICAgICkpfVxuICAgICAgPC9UZXN0aW1vbmlhbHNMaXN0PlxuICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImJlLWZpcnN0XCI+0J/QvtC60LAg0L7RgtC30YvQstC+0LIg0L3QtdGCLCDQsdGD0LTRjNGC0LUg0L/QtdGA0LLRi9C8LCDQutGC0L4g0LXQs9C+INC+0YHRgtCw0LLQuNGCITwvZGl2PlxuICAgIH1cbiAgICA8L1Rlc3RpbW9uaWFsc1NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZpbHRlciB7XG4gICAgICB9XG5cbiAgICAgIC5maWx0ZXIgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAkeyBUaGVtZS54cy52cigxKSB9IDA7XG4gICAgICB9XG5cbiAgICAgIC50eHQtYm94IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLSR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlciB7XG4gICAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDEuNXJlbTsgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXIgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc3Nzc4cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLmZpbHRlciAuc2VsZWN0b3Ige1xuICAgICAgICAgIGhlaWdodDogY2FsYygycmVtICsgMnB4KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuODg4ODlyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDAuNnJlbTtcbiAgICAgICAgfSAqL1xuICAgICAgICAudHh0LWJveCB7XG4gICAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogLSR7IFRoZW1lLm1kLnZyKDEpIH07ICovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdFRlc3RpbW9uaWFscyA9ICh7IHRpdGxlID0gJ9Ce0YLQt9GL0LLRiycsIGNvdW50LCBpdGVtcyA9IFtdLCBwcm9kdWN0IH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxUZXN0aW1vbmlhbHNTZWN0aW9uXG4gICAgICB0aXRsZT17PGgyIGNsYXNzTmFtZT1cImhlYWRlclwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aXRsZX19Lz59XG4gICAgPlxuICAgICAgPGEgbmFtZT1cIm90enl2XCI+IDwvYT48YSBuYW1lPVwib3R6aXZcIj4gPC9hPlxuICAgICAgICA8VGVzdGltb25pYWxzSGVhZGVyIHNlbGVjdGJveD17ZmFsc2V9PlxuICAgICAgICAgIDxUZXN0aW1vbmlhbEFkZERpYWxvZyBwcm9kdWN0PXtwcm9kdWN0fT57KHsgb25DbGljayB9KSA9PiAoXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PtCd0LDQv9C40YHQsNGC0Ywg0L7RgtC30YvQsjwvQnV0dG9uPlxuICAgICAgICAgICl9PC9UZXN0aW1vbmlhbEFkZERpYWxvZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50XCI+e2NvdW50fSB7cGx1cmFsaXplVGVzdGltb25pYWxzKGNvdW50KX08L2Rpdj5cbiAgICAgICAgPC9UZXN0aW1vbmlhbHNIZWFkZXI+XG5cbiAgICAgICAge2NvdW50ID4gMFxuICAgICAgICAgID8gPFRlc3RpbW9uaWFsc0xpc3Q+e2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8VGVzdGltb25pYWxcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjZi5hdXRob3J9XG4gICAgICAgICAgICAgICAgYXV0aG9yVXJsPXtpdGVtLmFjZi5wcm9maWxlX2xpbmt9XG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0VGl0bGU9e2l0ZW0uYWNmLnByb2R1Y3QucG9zdF90aXRsZX1cbiAgICAgICAgICAgICAgICAvLyBvYmplY3Q9e2l0ZW0uYWNmLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICA+PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS5hY2YudGV4dH19Lz48L1Rlc3RpbW9uaWFsPlxuICAgICAgICAgICAgKSl9PC9UZXN0aW1vbmlhbHNMaXN0PlxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJiZS1maXJzdFwiPtCf0L7QutCwINC+0YLQt9GL0LLQvtCyINC90LXRgiwg0LHRg9C00YzRgtC1INC/0LXRgNCy0YvQvCwg0LrRgtC+INC10LPQviDQvtGB0YLQsNCy0LjRgiE8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvVGVzdGltb25pYWxzU2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY291bnQge1xuICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zMzMzM3JlbTtcbiAgICAgICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5iZS1maXJzdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNSkgfTtcbiAgICAgICAgfVxuICAgICAgICAuY291bnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcbiJdfQ== */\n/*@ sourceURL=src/next/components/Testimonials.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(2)]
  }));
};
var TestimonialsSection = function TestimonialsSection(_ref3) {
  var title = _ref3.title,
      children = _ref3.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["59817382", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.75)]]]) + " " + "box"
  }, title, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "59817382",
    css: "@media (min-width.__jsx-style-dynamic-selector:992px) .header{margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFZ0IsQUFRc0QsMkNBQzdDIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IHBsdXJhbGl6ZSB9IGZyb20gJy4uL2xpYi91dGlscydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vU2VsZWN0Qm94J1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gJy4vVGVzdGltb25pYWwnXG5pbXBvcnQgVGVzdGltb25pYWxBZGREaWFsb2cgZnJvbSAnLi9UZXN0aW1vbmlhbEFkZERpYWxvZydcblxuY29uc3QgcGx1cmFsaXplVGVzdGltb25pYWxzID0gcGx1cmFsaXplKHsgb25lOiAn0L7RgtC30YvQsicsIGZldzogJ9C+0YLQt9GL0LLQsCcsIG1hbnk6ICfQvtGC0LfRi9Cy0L7QsicgfSlcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsc0xpc3QgPSAoeyBjaGlsZHJlbiwgd2lkZSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyBjb250YWluZXIgZ3V0dGVycyBqdXN0aWZ5PVwic3RhcnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3c1wiPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxGcm93IHhzPVwiMS8xXCIgbWQ9e3dpZGUgPyAnMS8xJyA6ICcxLzInfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdcIj5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yZXZpZXdzIHtcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC43NSl9OyAqL1xuICAgICAgfVxuXG4gICAgICAucmV2aWV3IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC4yNSl9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLnJldmlld3Mge1xuICAgICAgICAgIC8qIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNzUpfTsgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXZpZXcge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEuNSl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxzSGVhZGVyID0gKHsgY2hpbGRyZW4sIHNlbGVjdGJveCA9IHRydWUgfSkgPT4ge1xuICBjb25zdCBbbGVmdENoaWxkLCByaWdodENoaWxkXSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pXG5cbiAgY29uc3Qgc2hyaW5rZ3JvdyA9IHNlbGVjdGJveCA/IDEgOiAwO1xuICByZXR1cm4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEZyb3cgY29udGFpbmVyIGp1c3RpZnk9XCJiZXR3ZWVuXCIgZ3V0dGVycyBpdGVtcz1cImVuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5cbiAgICAgICAgPEZyb3cgeHM9e3NlbGVjdGJveCA/ICcxLzEnIDogJ2F1dG8nfSBtZD1cImF1dG9cIiBzaHJpbms9e3Nocmlua2dyb3d9IGdyb3c9e3Nocmlua2dyb3d9IGh1Zz57bGVmdENoaWxkfTwvRnJvdz5cbiAgICAgICAgPEZyb3cgeHM9e3NlbGVjdGJveCA/ICcxLzEnIDogJ2F1dG8nfSBtZD17c2VsZWN0Ym94ID8gJzQvNicgOiAnYXV0byd9IHNocmluaz17c2hyaW5rZ3Jvd30gZ3Jvdz17c2hyaW5rZ3Jvd30gaHVnPntyaWdodENoaWxkfTwvRnJvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMikgfTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigyKSB9O1xuICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKX1cblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsc1NlY3Rpb24gPSAoeyB0aXRsZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICB7dGl0bGV9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC8qIC5ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgfSAqL1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMC41KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLmJveCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMS43NSkgfTtcbiAgICAgICAgfSAqL1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuY29uc3QgVGVzdGltb25pYWxzID0gKHsgdGl0bGUgPSAn0J7RgtC30YvQstGLJywgYWRkQnV0dG9uVGl0bGUgPSAn0J3QsNC/0LjRgdCw0YLRjCDQvtGC0LfRi9CyJywgY291bnQsIGl0ZW1zID0gW10sIHByb2R1Y3RzLCBzZWxlY3RlZFByb2R1Y3QsIG9uUHJvZHVjdENoYW5nZSwgd2lkZSwgYnV0dG9uVmFyaWFudCA9ICduYXJyb3cnLCBleGNsdWRlID0gW10gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPFRlc3RpbW9uaWFsc1NlY3Rpb25cbiAgICAgIHRpdGxlPXtleGNsdWRlLmluZGV4T2YoJ3RpdGxlJykgPT09IC0xICYmIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj48c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGl0bGV9fS8+ICh7Y291bnR9KTwvaDE+fVxuICAgID5cbiAgICAgIDxUZXN0aW1vbmlhbHNIZWFkZXI+XG4gICAgICAgIDxUZXN0aW1vbmlhbEFkZERpYWxvZz57KHsgb25DbGljayB9KSA9PiAoXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtidXR0b25WYXJpYW50fSBvbkNsaWNrPXtvbkNsaWNrfT57YWRkQnV0dG9uVGl0bGV9PC9CdXR0b24+XG4gICAgICAgICl9PC9UZXN0aW1vbmlhbEFkZERpYWxvZz5cbiAgICAgICAgeyhwcm9kdWN0cyAmJiBleGNsdWRlLmluZGV4T2YoJ2ZpbHRlcicpID09PSAtMSkgJiYgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+0JLRi9Cx0LXRgNC40YLQtSDRhtC40LrQuywg0L7RgtC30YvQstGLINC90LAg0LrQvtGC0L7RgNGL0Lkg0YXQvtGC0LjRgtC1INC/0L7RgdC80L7RgtGA0LXRgtGMPC9kaXY+XG4gICAgICAgICAgPFNlbGVjdEJveCB2YWx1ZT17c2VsZWN0ZWRQcm9kdWN0fSBvbkNoYW5nZT17KGUpID0+IG9uUHJvZHVjdENoYW5nZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz4tINCS0YHQtSDQvtGC0LfRi9Cy0YsgLTwvb3B0aW9uPlxuICAgICAgICAgICAge3Byb2R1Y3RzICYmIHByb2R1Y3RzLm1hcCgoaXRlbSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZH19Lz4pfVxuICAgICAgICAgIDwvU2VsZWN0Qm94PlxuICAgICAgICA8L2Rpdj59XG4gICAgICA8L1Rlc3RpbW9uaWFsc0hlYWRlcj5cbiAgICAgIHtjb3VudCA+IDBcbiAgICAgICAgPyA8VGVzdGltb25pYWxzTGlzdCB3aWRlPXt3aWRlfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxUZXN0aW1vbmlhbFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjZi5hdXRob3J9XG4gICAgICAgICAgICBhdXRob3JVcmw9e2l0ZW0uYWNmLnByb2ZpbGVfbGlua31cbiAgICAgICAgICAgIG9iamVjdFRpdGxlPXtpdGVtLmFjZi5wcm9kdWN0LnBvc3RfdGl0bGV9XG4gICAgICAgICAgICBvYmplY3Q9e2l0ZW0uYWNmLnByb2R1Y3R9XG4gICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgPjxkaXYgY2xhc3NOYW1lPVwidHh0LWJveFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLmFjZi50ZXh0fX0vPjwvVGVzdGltb25pYWw+XG4gICAgICAgICkpfVxuICAgICAgPC9UZXN0aW1vbmlhbHNMaXN0PlxuICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImJlLWZpcnN0XCI+0J/QvtC60LAg0L7RgtC30YvQstC+0LIg0L3QtdGCLCDQsdGD0LTRjNGC0LUg0L/QtdGA0LLRi9C8LCDQutGC0L4g0LXQs9C+INC+0YHRgtCw0LLQuNGCITwvZGl2PlxuICAgIH1cbiAgICA8L1Rlc3RpbW9uaWFsc1NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZpbHRlciB7XG4gICAgICB9XG5cbiAgICAgIC5maWx0ZXIgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAkeyBUaGVtZS54cy52cigxKSB9IDA7XG4gICAgICB9XG5cbiAgICAgIC50eHQtYm94IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLSR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlciB7XG4gICAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDEuNXJlbTsgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXIgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc3Nzc4cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLmZpbHRlciAuc2VsZWN0b3Ige1xuICAgICAgICAgIGhlaWdodDogY2FsYygycmVtICsgMnB4KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuODg4ODlyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDAuNnJlbTtcbiAgICAgICAgfSAqL1xuICAgICAgICAudHh0LWJveCB7XG4gICAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogLSR7IFRoZW1lLm1kLnZyKDEpIH07ICovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdFRlc3RpbW9uaWFscyA9ICh7IHRpdGxlID0gJ9Ce0YLQt9GL0LLRiycsIGNvdW50LCBpdGVtcyA9IFtdLCBwcm9kdWN0IH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxUZXN0aW1vbmlhbHNTZWN0aW9uXG4gICAgICB0aXRsZT17PGgyIGNsYXNzTmFtZT1cImhlYWRlclwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aXRsZX19Lz59XG4gICAgPlxuICAgICAgPGEgbmFtZT1cIm90enl2XCI+IDwvYT48YSBuYW1lPVwib3R6aXZcIj4gPC9hPlxuICAgICAgICA8VGVzdGltb25pYWxzSGVhZGVyIHNlbGVjdGJveD17ZmFsc2V9PlxuICAgICAgICAgIDxUZXN0aW1vbmlhbEFkZERpYWxvZyBwcm9kdWN0PXtwcm9kdWN0fT57KHsgb25DbGljayB9KSA9PiAoXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PtCd0LDQv9C40YHQsNGC0Ywg0L7RgtC30YvQsjwvQnV0dG9uPlxuICAgICAgICAgICl9PC9UZXN0aW1vbmlhbEFkZERpYWxvZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50XCI+e2NvdW50fSB7cGx1cmFsaXplVGVzdGltb25pYWxzKGNvdW50KX08L2Rpdj5cbiAgICAgICAgPC9UZXN0aW1vbmlhbHNIZWFkZXI+XG5cbiAgICAgICAge2NvdW50ID4gMFxuICAgICAgICAgID8gPFRlc3RpbW9uaWFsc0xpc3Q+e2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8VGVzdGltb25pYWxcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjZi5hdXRob3J9XG4gICAgICAgICAgICAgICAgYXV0aG9yVXJsPXtpdGVtLmFjZi5wcm9maWxlX2xpbmt9XG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0VGl0bGU9e2l0ZW0uYWNmLnByb2R1Y3QucG9zdF90aXRsZX1cbiAgICAgICAgICAgICAgICAvLyBvYmplY3Q9e2l0ZW0uYWNmLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICA+PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS5hY2YudGV4dH19Lz48L1Rlc3RpbW9uaWFsPlxuICAgICAgICAgICAgKSl9PC9UZXN0aW1vbmlhbHNMaXN0PlxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJiZS1maXJzdFwiPtCf0L7QutCwINC+0YLQt9GL0LLQvtCyINC90LXRgiwg0LHRg9C00YzRgtC1INC/0LXRgNCy0YvQvCwg0LrRgtC+INC10LPQviDQvtGB0YLQsNCy0LjRgiE8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvVGVzdGltb25pYWxzU2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY291bnQge1xuICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zMzMzM3JlbTtcbiAgICAgICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5iZS1maXJzdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNSkgfTtcbiAgICAgICAgfVxuICAgICAgICAuY291bnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcbiJdfQ== */\n/*@ sourceURL=src/next/components/Testimonials.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.75)]
  }));
};

var Testimonials = function Testimonials(_ref4) {
  var _ref4$title = _ref4.title,
      title = _ref4$title === void 0 ? 'Отзывы' : _ref4$title,
      _ref4$addButtonTitle = _ref4.addButtonTitle,
      addButtonTitle = _ref4$addButtonTitle === void 0 ? 'Написать отзыв' : _ref4$addButtonTitle,
      count = _ref4.count,
      _ref4$items = _ref4.items,
      items = _ref4$items === void 0 ? [] : _ref4$items,
      products = _ref4.products,
      selectedProduct = _ref4.selectedProduct,
      onProductChange = _ref4.onProductChange,
      wide = _ref4.wide,
      _ref4$buttonVariant = _ref4.buttonVariant,
      buttonVariant = _ref4$buttonVariant === void 0 ? 'narrow' : _ref4$buttonVariant,
      _ref4$exclude = _ref4.exclude,
      exclude = _ref4$exclude === void 0 ? [] : _ref4$exclude;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialsSection, {
    title: exclude.indexOf('title') === -1 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1281351684", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "header"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: title
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1281351684", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]]])
    }), " (", count, ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialsHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TestimonialAddDialog__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, function (_ref5) {
    var onClick = _ref5.onClick;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Button__["b" /* default */], {
      variant: buttonVariant,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      }
    }, addButtonTitle);
  }), products && exclude.indexOf('filter') === -1 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1281351684", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "filter"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1281351684", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "title"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0438\u043A\u043B, \u043E\u0442\u0437\u044B\u0432\u044B \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__SelectBox__["a" /* default */], {
    value: selectedProduct,
    onChange: function onChange(e) {
      return onProductChange(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1281351684", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]]])
  }, "- \u0412\u0441\u0435 \u043E\u0442\u0437\u044B\u0432\u044B -"), products && products.map(function (item, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
      key: item.id,
      value: item.id,
      dangerouslySetInnerHTML: {
        __html: item.title.rendered
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1281351684", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]]])
    });
  })))), count > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialsList, {
    wide: wide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, items.map(function (item, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Testimonial__["a" /* default */], {
      key: item.id,
      author: item.acf.author,
      authorUrl: item.acf.profile_link,
      objectTitle: item.acf.product.post_title,
      object: item.acf.product,
      date: item.date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.acf.text
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1281351684", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "txt-box"
    }));
  })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1281351684", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]]]) + " " + "be-first"
  }, "\u041F\u043E\u043A\u0430 \u043E\u0442\u0437\u044B\u0432\u043E\u0432 \u043D\u0435\u0442, \u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C, \u043A\u0442\u043E \u0435\u0433\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442!")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1281351684",
    css: ".filter.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{margin:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), " 0;}.txt-box.__jsx-style-dynamic-selector{margin-bottom:-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), ";}@media (min-width:992px){.header.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), ";}.filter.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, ";font-size:0.77778rem;font-weight:600;margin-top:0;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtJZ0IsQUFNK0MsQUFJTSxBQUtDLEFBUVIsbUNBQ2QsR0FqQnpCLEtBU0UsQ0FMRixZQWNvQixnQkFDSCxhQUM4QiwyQ0FDN0MiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9UZXN0aW1vbmlhbHMuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgcGx1cmFsaXplIH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBTZWxlY3RCb3ggZnJvbSAnLi9TZWxlY3RCb3gnXG5pbXBvcnQgVGVzdGltb25pYWwgZnJvbSAnLi9UZXN0aW1vbmlhbCdcbmltcG9ydCBUZXN0aW1vbmlhbEFkZERpYWxvZyBmcm9tICcuL1Rlc3RpbW9uaWFsQWRkRGlhbG9nJ1xuXG5jb25zdCBwbHVyYWxpemVUZXN0aW1vbmlhbHMgPSBwbHVyYWxpemUoeyBvbmU6ICfQvtGC0LfRi9CyJywgZmV3OiAn0L7RgtC30YvQstCwJywgbWFueTogJ9C+0YLQt9GL0LLQvtCyJyB9KVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxzTGlzdCA9ICh7IGNoaWxkcmVuLCB3aWRlIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxGcm93IGNvbnRhaW5lciBndXR0ZXJzIGp1c3RpZnk9XCJzdGFydFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzXCI+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgPEZyb3cgeHM9XCIxLzFcIiBtZD17d2lkZSA/ICcxLzEnIDogJzEvMid9IGtleT17aX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld1wiPlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRnJvdz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zyb3c+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnJldmlld3Mge1xuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjc1KX07ICovXG4gICAgICB9XG5cbiAgICAgIC5yZXZpZXcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjI1KX07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAucmV2aWV3cyB7XG4gICAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMC43NSl9OyAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLnJldmlldyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMS41KX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbHNIZWFkZXIgPSAoeyBjaGlsZHJlbiwgc2VsZWN0Ym94ID0gdHJ1ZSB9KSA9PiB7XG4gIGNvbnN0IFtsZWZ0Q2hpbGQsIHJpZ2h0Q2hpbGRdID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilcblxuICBjb25zdCBzaHJpbmtncm93ID0gc2VsZWN0Ym94ID8gMSA6IDA7XG4gIHJldHVybiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyBjb250YWluZXIganVzdGlmeT1cImJldHdlZW5cIiBndXR0ZXJzIGl0ZW1zPVwiZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPlxuICAgICAgICA8RnJvdyB4cz17c2VsZWN0Ym94ID8gJzEvMScgOiAnYXV0byd9IG1kPVwiYXV0b1wiIHNocmluaz17c2hyaW5rZ3Jvd30gZ3Jvdz17c2hyaW5rZ3Jvd30gaHVnPntsZWZ0Q2hpbGR9PC9Gcm93PlxuICAgICAgICA8RnJvdyB4cz17c2VsZWN0Ym94ID8gJzEvMScgOiAnYXV0byd9IG1kPXtzZWxlY3Rib3ggPyAnNC82JyA6ICdhdXRvJ30gc2hyaW5rPXtzaHJpbmtncm93fSBncm93PXtzaHJpbmtncm93fSBodWc+e3JpZ2h0Q2hpbGR9PC9Gcm93PlxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigyKSB9O1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5zdWJoZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDIpIH07XG4gICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pfVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxzU2VjdGlvbiA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgIHt0aXRsZX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLyogLmJveCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgICB9ICovXG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKiAuYm94IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxLjc1KSB9O1xuICAgICAgICB9ICovXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5jb25zdCBUZXN0aW1vbmlhbHMgPSAoeyB0aXRsZSA9ICfQntGC0LfRi9Cy0YsnLCBhZGRCdXR0b25UaXRsZSA9ICfQndCw0L/QuNGB0LDRgtGMINC+0YLQt9GL0LInLCBjb3VudCwgaXRlbXMgPSBbXSwgcHJvZHVjdHMsIHNlbGVjdGVkUHJvZHVjdCwgb25Qcm9kdWN0Q2hhbmdlLCB3aWRlLCBidXR0b25WYXJpYW50ID0gJ25hcnJvdycsIGV4Y2x1ZGUgPSBbXSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8VGVzdGltb25pYWxzU2VjdGlvblxuICAgICAgdGl0bGU9e2V4Y2x1ZGUuaW5kZXhPZigndGl0bGUnKSA9PT0gLTEgJiYgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPjxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aXRsZX19Lz4gKHtjb3VudH0pPC9oMT59XG4gICAgPlxuICAgICAgPFRlc3RpbW9uaWFsc0hlYWRlcj5cbiAgICAgICAgPFRlc3RpbW9uaWFsQWRkRGlhbG9nPnsoeyBvbkNsaWNrIH0pID0+IChcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9e2J1dHRvblZhcmlhbnR9IG9uQ2xpY2s9e29uQ2xpY2t9PnthZGRCdXR0b25UaXRsZX08L0J1dHRvbj5cbiAgICAgICAgKX08L1Rlc3RpbW9uaWFsQWRkRGlhbG9nPlxuICAgICAgICB7KHByb2R1Y3RzICYmIGV4Y2x1ZGUuaW5kZXhPZignZmlsdGVyJykgPT09IC0xKSAmJiA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj7QktGL0LHQtdGA0LjRgtC1INGG0LjQutC7LCDQvtGC0LfRi9Cy0Ysg0L3QsCDQutC+0YLQvtGA0YvQuSDRhdC+0YLQuNGC0LUg0L/QvtGB0LzQvtGC0YDQtdGC0Yw8L2Rpdj5cbiAgICAgICAgICA8U2VsZWN0Qm94IHZhbHVlPXtzZWxlY3RlZFByb2R1Y3R9IG9uQ2hhbmdlPXsoZSkgPT4gb25Qcm9kdWN0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnPi0g0JLRgdC1INC+0YLQt9GL0LLRiyAtPC9vcHRpb24+XG4gICAgICAgICAgICB7cHJvZHVjdHMgJiYgcHJvZHVjdHMubWFwKChpdGVtLCBpKSA9PiA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLnRpdGxlLnJlbmRlcmVkfX0vPil9XG4gICAgICAgICAgPC9TZWxlY3RCb3g+XG4gICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvVGVzdGltb25pYWxzSGVhZGVyPlxuICAgICAge2NvdW50ID4gMFxuICAgICAgICA/IDxUZXN0aW1vbmlhbHNMaXN0IHdpZGU9e3dpZGV9PlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgPFRlc3RpbW9uaWFsXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICBhdXRob3I9e2l0ZW0uYWNmLmF1dGhvcn1cbiAgICAgICAgICAgIGF1dGhvclVybD17aXRlbS5hY2YucHJvZmlsZV9saW5rfVxuICAgICAgICAgICAgb2JqZWN0VGl0bGU9e2l0ZW0uYWNmLnByb2R1Y3QucG9zdF90aXRsZX1cbiAgICAgICAgICAgIG9iamVjdD17aXRlbS5hY2YucHJvZHVjdH1cbiAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICA+PGRpdiBjbGFzc05hbWU9XCJ0eHQtYm94XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uYWNmLnRleHR9fS8+PC9UZXN0aW1vbmlhbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Rlc3RpbW9uaWFsc0xpc3Q+XG4gICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiYmUtZmlyc3RcIj7Qn9C+0LrQsCDQvtGC0LfRi9Cy0L7QsiDQvdC10YIsINCx0YPQtNGM0YLQtSDQv9C10YDQstGL0LwsINC60YLQviDQtdCz0L4g0L7RgdGC0LDQstC40YIhPC9kaXY+XG4gICAgfVxuICAgIDwvVGVzdGltb25pYWxzU2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZmlsdGVyIHtcbiAgICAgIH1cblxuICAgICAgLmZpbHRlciAudGl0bGUge1xuICAgICAgICBtYXJnaW46ICR7IFRoZW1lLnhzLnZyKDEpIH0gMDtcbiAgICAgIH1cblxuICAgICAgLnR4dC1ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtJHsgVGhlbWUueHMudnIoMSkgfTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEpIH07XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVyIHtcbiAgICAgICAgICAvKiBtYXJnaW4tbGVmdDogMS41cmVtOyAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlciAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzc3NzhyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNzUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKiAuZmlsdGVyIC5zZWxlY3RvciB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDJyZW0gKyAycHgpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7IFRoZW1lLmNvbG9ycy5ib3JkZXJHcmF5IH07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUubWQuYm9yZGVyUmFkaXVzLmRlZmF1bHQgfTtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMC42cmVtO1xuICAgICAgICB9ICovXG4gICAgICAgIC50eHQtYm94IHtcbiAgICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAtJHsgVGhlbWUubWQudnIoMSkgfTsgKi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzXG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0VGVzdGltb25pYWxzID0gKHsgdGl0bGUgPSAn0J7RgtC30YvQstGLJywgY291bnQsIGl0ZW1zID0gW10sIHByb2R1Y3QgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPFRlc3RpbW9uaWFsc1NlY3Rpb25cbiAgICAgIHRpdGxlPXs8aDIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRpdGxlfX0vPn1cbiAgICA+XG4gICAgICA8YSBuYW1lPVwib3R6eXZcIj4gPC9hPjxhIG5hbWU9XCJvdHppdlwiPiA8L2E+XG4gICAgICAgIDxUZXN0aW1vbmlhbHNIZWFkZXIgc2VsZWN0Ym94PXtmYWxzZX0+XG4gICAgICAgICAgPFRlc3RpbW9uaWFsQWRkRGlhbG9nIHByb2R1Y3Q9e3Byb2R1Y3R9PnsoeyBvbkNsaWNrIH0pID0+IChcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIndoaXRlXCIgb25DbGljaz17b25DbGlja30+0J3QsNC/0LjRgdCw0YLRjCDQvtGC0LfRi9CyPC9CdXR0b24+XG4gICAgICAgICAgKX08L1Rlc3RpbW9uaWFsQWRkRGlhbG9nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRcIj57Y291bnR9IHtwbHVyYWxpemVUZXN0aW1vbmlhbHMoY291bnQpfTwvZGl2PlxuICAgICAgICA8L1Rlc3RpbW9uaWFsc0hlYWRlcj5cblxuICAgICAgICB7Y291bnQgPiAwXG4gICAgICAgICAgPyA8VGVzdGltb25pYWxzTGlzdD57aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXN0aW1vbmlhbFxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYWNmLmF1dGhvcn1cbiAgICAgICAgICAgICAgICBhdXRob3JVcmw9e2l0ZW0uYWNmLnByb2ZpbGVfbGlua31cbiAgICAgICAgICAgICAgICAvLyBvYmplY3RUaXRsZT17aXRlbS5hY2YucHJvZHVjdC5wb3N0X3RpdGxlfVxuICAgICAgICAgICAgICAgIC8vIG9iamVjdD17aXRlbS5hY2YucHJvZHVjdH1cbiAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgID48ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLmFjZi50ZXh0fX0vPjwvVGVzdGltb25pYWw+XG4gICAgICAgICAgICApKX08L1Rlc3RpbW9uaWFsc0xpc3Q+XG4gICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImJlLWZpcnN0XCI+0J/QvtC60LAg0L7RgtC30YvQstC+0LIg0L3QtdGCLCDQsdGD0LTRjNGC0LUg0L/QtdGA0LLRi9C8LCDQutGC0L4g0LXQs9C+INC+0YHRgtCw0LLQuNGCITwvZGl2PlxuICAgICAgICB9XG4gICAgPC9UZXN0aW1vbmlhbHNTZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb3VudCB7XG4gICAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMudGV4dEdyYXkgfTtcbiAgICAgICAgZm9udC1zaXplOiAxLjMzMzMzcmVtO1xuICAgICAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJlLWZpcnN0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMC41KSB9O1xuICAgICAgICB9XG4gICAgICAgIC5jb3VudCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuIl19 */\n/*@ sourceURL=src/next/components/Testimonials.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.borderGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1)]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Testimonials);
var ProductTestimonials = function ProductTestimonials(_ref6) {
  var _ref6$title = _ref6.title,
      title = _ref6$title === void 0 ? 'Отзывы' : _ref6$title,
      count = _ref6.count,
      _ref6$items = _ref6.items,
      items = _ref6$items === void 0 ? [] : _ref6$items,
      product = _ref6.product;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialsSection, {
    title: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
      dangerouslySetInnerHTML: {
        __html: title
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["265704389", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "header"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    name: "otzyv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["265704389", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]]])
  }, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    name: "otziv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["265704389", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]]])
  }, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialsHeader, {
    selectbox: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TestimonialAddDialog__["a" /* default */], {
    product: product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    }
  }, function (_ref7) {
    var onClick = _ref7.onClick;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Button__["b" /* default */], {
      variant: "white",
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      }
    }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432");
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["265704389", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "count"
  }, count, " ", pluralizeTestimonials(count))), count > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TestimonialsList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    }
  }, items.map(function (item, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Testimonial__["a" /* default */], {
      key: item.id,
      author: item.acf.author,
      authorUrl: item.acf.profile_link // objectTitle={item.acf.product.post_title}
      // object={item.acf.product}
      ,
      date: item.date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.acf.text
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["265704389", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]]])
    }));
  })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["265704389", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]]]) + " " + "be-first"
  }, "\u041F\u043E\u043A\u0430 \u043E\u0442\u0437\u044B\u0432\u043E\u0432 \u043D\u0435\u0442, \u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C, \u043A\u0442\u043E \u0435\u0433\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442!")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "265704389",
    css: ".count.__jsx-style-dynamic-selector{color:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, ";font-size:1.33333rem;-webkit-box-flex:0 !important;-webkit-flex-grow:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important;}.be-first.__jsx-style-dynamic-selector{text-align:center;}@media (min-width:992px){.header.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5), ";}.count.__jsx-style-dynamic-selector{font-size:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStNZ0IsQUFHNEMsQUFNakIsQUFLMkIsQUFHNUIsZUFDakIsR0FSRixpQkFOdUIsUUFXckIsYUFWdUIsbUhBQ3pCIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IHBsdXJhbGl6ZSB9IGZyb20gJy4uL2xpYi91dGlscydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vU2VsZWN0Qm94J1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gJy4vVGVzdGltb25pYWwnXG5pbXBvcnQgVGVzdGltb25pYWxBZGREaWFsb2cgZnJvbSAnLi9UZXN0aW1vbmlhbEFkZERpYWxvZydcblxuY29uc3QgcGx1cmFsaXplVGVzdGltb25pYWxzID0gcGx1cmFsaXplKHsgb25lOiAn0L7RgtC30YvQsicsIGZldzogJ9C+0YLQt9GL0LLQsCcsIG1hbnk6ICfQvtGC0LfRi9Cy0L7QsicgfSlcblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsc0xpc3QgPSAoeyBjaGlsZHJlbiwgd2lkZSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RnJvdyBjb250YWluZXIgZ3V0dGVycyBqdXN0aWZ5PVwic3RhcnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3c1wiPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxGcm93IHhzPVwiMS8xXCIgbWQ9e3dpZGUgPyAnMS8xJyA6ICcxLzInfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdcIj5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Gcm93PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yZXZpZXdzIHtcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC43NSl9OyAqL1xuICAgICAgfVxuXG4gICAgICAucmV2aWV3IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC4yNSl9O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLnJldmlld3Mge1xuICAgICAgICAgIC8qIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNzUpfTsgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXZpZXcge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEuNSl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxzSGVhZGVyID0gKHsgY2hpbGRyZW4sIHNlbGVjdGJveCA9IHRydWUgfSkgPT4ge1xuICBjb25zdCBbbGVmdENoaWxkLCByaWdodENoaWxkXSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pXG5cbiAgY29uc3Qgc2hyaW5rZ3JvdyA9IHNlbGVjdGJveCA/IDEgOiAwO1xuICByZXR1cm4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEZyb3cgY29udGFpbmVyIGp1c3RpZnk9XCJiZXR3ZWVuXCIgZ3V0dGVycyBpdGVtcz1cImVuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5cbiAgICAgICAgPEZyb3cgeHM9e3NlbGVjdGJveCA/ICcxLzEnIDogJ2F1dG8nfSBtZD1cImF1dG9cIiBzaHJpbms9e3Nocmlua2dyb3d9IGdyb3c9e3Nocmlua2dyb3d9IGh1Zz57bGVmdENoaWxkfTwvRnJvdz5cbiAgICAgICAgPEZyb3cgeHM9e3NlbGVjdGJveCA/ICcxLzEnIDogJ2F1dG8nfSBtZD17c2VsZWN0Ym94ID8gJzQvNicgOiAnYXV0byd9IHNocmluaz17c2hyaW5rZ3Jvd30gZ3Jvdz17c2hyaW5rZ3Jvd30gaHVnPntyaWdodENoaWxkfTwvRnJvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJvdz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMikgfTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigyKSB9O1xuICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKX1cblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsc1NlY3Rpb24gPSAoeyB0aXRsZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICB7dGl0bGV9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC8qIC5ib3gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgfSAqL1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMC41KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLmJveCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMS43NSkgfTtcbiAgICAgICAgfSAqL1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuY29uc3QgVGVzdGltb25pYWxzID0gKHsgdGl0bGUgPSAn0J7RgtC30YvQstGLJywgYWRkQnV0dG9uVGl0bGUgPSAn0J3QsNC/0LjRgdCw0YLRjCDQvtGC0LfRi9CyJywgY291bnQsIGl0ZW1zID0gW10sIHByb2R1Y3RzLCBzZWxlY3RlZFByb2R1Y3QsIG9uUHJvZHVjdENoYW5nZSwgd2lkZSwgYnV0dG9uVmFyaWFudCA9ICduYXJyb3cnLCBleGNsdWRlID0gW10gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPFRlc3RpbW9uaWFsc1NlY3Rpb25cbiAgICAgIHRpdGxlPXtleGNsdWRlLmluZGV4T2YoJ3RpdGxlJykgPT09IC0xICYmIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj48c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGl0bGV9fS8+ICh7Y291bnR9KTwvaDE+fVxuICAgID5cbiAgICAgIDxUZXN0aW1vbmlhbHNIZWFkZXI+XG4gICAgICAgIDxUZXN0aW1vbmlhbEFkZERpYWxvZz57KHsgb25DbGljayB9KSA9PiAoXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtidXR0b25WYXJpYW50fSBvbkNsaWNrPXtvbkNsaWNrfT57YWRkQnV0dG9uVGl0bGV9PC9CdXR0b24+XG4gICAgICAgICl9PC9UZXN0aW1vbmlhbEFkZERpYWxvZz5cbiAgICAgICAgeyhwcm9kdWN0cyAmJiBleGNsdWRlLmluZGV4T2YoJ2ZpbHRlcicpID09PSAtMSkgJiYgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+0JLRi9Cx0LXRgNC40YLQtSDRhtC40LrQuywg0L7RgtC30YvQstGLINC90LAg0LrQvtGC0L7RgNGL0Lkg0YXQvtGC0LjRgtC1INC/0L7RgdC80L7RgtGA0LXRgtGMPC9kaXY+XG4gICAgICAgICAgPFNlbGVjdEJveCB2YWx1ZT17c2VsZWN0ZWRQcm9kdWN0fSBvbkNoYW5nZT17KGUpID0+IG9uUHJvZHVjdENoYW5nZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz4tINCS0YHQtSDQvtGC0LfRi9Cy0YsgLTwvb3B0aW9uPlxuICAgICAgICAgICAge3Byb2R1Y3RzICYmIHByb2R1Y3RzLm1hcCgoaXRlbSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS50aXRsZS5yZW5kZXJlZH19Lz4pfVxuICAgICAgICAgIDwvU2VsZWN0Qm94PlxuICAgICAgICA8L2Rpdj59XG4gICAgICA8L1Rlc3RpbW9uaWFsc0hlYWRlcj5cbiAgICAgIHtjb3VudCA+IDBcbiAgICAgICAgPyA8VGVzdGltb25pYWxzTGlzdCB3aWRlPXt3aWRlfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxUZXN0aW1vbmlhbFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjZi5hdXRob3J9XG4gICAgICAgICAgICBhdXRob3JVcmw9e2l0ZW0uYWNmLnByb2ZpbGVfbGlua31cbiAgICAgICAgICAgIG9iamVjdFRpdGxlPXtpdGVtLmFjZi5wcm9kdWN0LnBvc3RfdGl0bGV9XG4gICAgICAgICAgICBvYmplY3Q9e2l0ZW0uYWNmLnByb2R1Y3R9XG4gICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgPjxkaXYgY2xhc3NOYW1lPVwidHh0LWJveFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLmFjZi50ZXh0fX0vPjwvVGVzdGltb25pYWw+XG4gICAgICAgICkpfVxuICAgICAgPC9UZXN0aW1vbmlhbHNMaXN0PlxuICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImJlLWZpcnN0XCI+0J/QvtC60LAg0L7RgtC30YvQstC+0LIg0L3QtdGCLCDQsdGD0LTRjNGC0LUg0L/QtdGA0LLRi9C8LCDQutGC0L4g0LXQs9C+INC+0YHRgtCw0LLQuNGCITwvZGl2PlxuICAgIH1cbiAgICA8L1Rlc3RpbW9uaWFsc1NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZpbHRlciB7XG4gICAgICB9XG5cbiAgICAgIC5maWx0ZXIgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAkeyBUaGVtZS54cy52cigxKSB9IDA7XG4gICAgICB9XG5cbiAgICAgIC50eHQtYm94IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLSR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigxKSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlciB7XG4gICAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDEuNXJlbTsgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXIgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc3Nzc4cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLmZpbHRlciAuc2VsZWN0b3Ige1xuICAgICAgICAgIGhlaWdodDogY2FsYygycmVtICsgMnB4KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuODg4ODlyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBUaGVtZS5jb2xvcnMuYm9yZGVyR3JheSB9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLm1kLmJvcmRlclJhZGl1cy5kZWZhdWx0IH07XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDAuNnJlbTtcbiAgICAgICAgfSAqL1xuICAgICAgICAudHh0LWJveCB7XG4gICAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogLSR7IFRoZW1lLm1kLnZyKDEpIH07ICovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdFRlc3RpbW9uaWFscyA9ICh7IHRpdGxlID0gJ9Ce0YLQt9GL0LLRiycsIGNvdW50LCBpdGVtcyA9IFtdLCBwcm9kdWN0IH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxUZXN0aW1vbmlhbHNTZWN0aW9uXG4gICAgICB0aXRsZT17PGgyIGNsYXNzTmFtZT1cImhlYWRlclwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aXRsZX19Lz59XG4gICAgPlxuICAgICAgPGEgbmFtZT1cIm90enl2XCI+IDwvYT48YSBuYW1lPVwib3R6aXZcIj4gPC9hPlxuICAgICAgICA8VGVzdGltb25pYWxzSGVhZGVyIHNlbGVjdGJveD17ZmFsc2V9PlxuICAgICAgICAgIDxUZXN0aW1vbmlhbEFkZERpYWxvZyBwcm9kdWN0PXtwcm9kdWN0fT57KHsgb25DbGljayB9KSA9PiAoXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PtCd0LDQv9C40YHQsNGC0Ywg0L7RgtC30YvQsjwvQnV0dG9uPlxuICAgICAgICAgICl9PC9UZXN0aW1vbmlhbEFkZERpYWxvZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50XCI+e2NvdW50fSB7cGx1cmFsaXplVGVzdGltb25pYWxzKGNvdW50KX08L2Rpdj5cbiAgICAgICAgPC9UZXN0aW1vbmlhbHNIZWFkZXI+XG5cbiAgICAgICAge2NvdW50ID4gMFxuICAgICAgICAgID8gPFRlc3RpbW9uaWFsc0xpc3Q+e2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8VGVzdGltb25pYWxcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmFjZi5hdXRob3J9XG4gICAgICAgICAgICAgICAgYXV0aG9yVXJsPXtpdGVtLmFjZi5wcm9maWxlX2xpbmt9XG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0VGl0bGU9e2l0ZW0uYWNmLnByb2R1Y3QucG9zdF90aXRsZX1cbiAgICAgICAgICAgICAgICAvLyBvYmplY3Q9e2l0ZW0uYWNmLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICA+PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS5hY2YudGV4dH19Lz48L1Rlc3RpbW9uaWFsPlxuICAgICAgICAgICAgKSl9PC9UZXN0aW1vbmlhbHNMaXN0PlxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJiZS1maXJzdFwiPtCf0L7QutCwINC+0YLQt9GL0LLQvtCyINC90LXRgiwg0LHRg9C00YzRgtC1INC/0LXRgNCy0YvQvCwg0LrRgtC+INC10LPQviDQvtGB0YLQsNCy0LjRgiE8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvVGVzdGltb25pYWxzU2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY291bnQge1xuICAgICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLnRleHRHcmF5IH07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zMzMzM3JlbTtcbiAgICAgICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5iZS1maXJzdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNSkgfTtcbiAgICAgICAgfVxuICAgICAgICAuY291bnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcbiJdfQ== */\n/*@ sourceURL=src/next/components/Testimonials.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.textGray, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.5)]
  }));
};

/***/ }),

/***/ "./components/TicketButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__("./styles/theme.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/TicketButton.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var middleDecoFills = {
  default: __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button,
  green: __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green,
  gray: __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray,
  inline: __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent
};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant,
      autowidth = _ref.autowidth,
      props = _objectWithoutProperties(_ref, ["children", "variant", "autowidth"]);

  var _React$Children$toArr = __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.toArray(children),
      _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2),
      firstContent = _React$Children$toArr2[0],
      secondContent = _React$Children$toArr2[1]; // console.log(middleDecoFills[variant])


  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", _extends({
    disabled: variant === 'gray'
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]]) + " " + (props.className != null && props.className || "button")
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]]) + " " + "box ".concat(variant)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    version: "1.1",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]]) + " " + "left-deco"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "ticketButtonLeftCut",
    d: "M 0 0 v 1000 a 6 6 0 0 1 0 12 v 1000 h 6 v -2012 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
    id: "ticketButtonCornerLeftTop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "5",
    y: "0",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "0",
    y: "5",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "5",
    cy: "5",
    r: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
    id: "ticketButtonCornerLeftBottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "5",
    y: "0",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "0",
    y: "-5",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "5",
    cy: "100%",
    r: "5",
    transform: "translate(0, -5)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    clipPath: "url(#ticketButtonCornerLeftBottom)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    clipPath: "url(#ticketButtonCornerLeftTop)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("use", {
    xlinkHref: "#ticketButtonLeftCut",
    y: "50%",
    transform: "translate(0,-1006)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "6",
    y: "0",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]]) + " " + "content"
  }, firstContent || ''), secondContent && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    version: "1.1",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]]) + " " + "middle-deco"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("pattern", {
    id: "ticketButtonMiddlePattern-".concat(variant),
    x: "0",
    y: "0",
    width: "12",
    height: "6",
    patternUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M 0,0 h 4 a 2 2 0 0 0 4 0 h 4 v 6 h -4 a 2 2 0 0 0 -4 0 h -4 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "0",
    y: "0",
    width: "12",
    height: "100%",
    fill: "url(#ticketButtonMiddlePattern-".concat(variant, ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]]) + " " + "content"
  }, secondContent)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    version: "1.1",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]]) + " " + "right-deco"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "ticketButtonRightCut",
    d: "M 6 0 v 1000 a 6 6 0 0 0 0 12 v 1000 h -6 v -2012 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
    id: "ticketButtonCornerRightTop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "-5",
    y: "0",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "0",
    y: "5",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "100%",
    cy: "5",
    r: "5",
    transform: "translate(-5, 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
    id: "ticketButtonCornerRightBottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "-5",
    y: "0",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "0",
    y: "-6",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "100%",
    cy: "100%",
    r: "5",
    transform: "translate(-5, -5)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    clipPath: "url(#ticketButtonCornerRightBottom)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    clipPath: "url(#ticketButtonCornerRightTop)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("use", {
    xlinkHref: "#ticketButtonRightCut",
    x: "100%",
    y: "50%",
    transform: "translate(-6,-1006)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "-6",
    y: "0",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4098220416", [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]]])
  }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4098220416",
    css: ".button.__jsx-style-dynamic-selector{background:none;border:none;display:block;width:".concat(autowidth ? 'auto' : '100%', ";cursor:pointer;padding:0;margin:0;}.box.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:3rem;width:auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.left-deco.__jsx-style-dynamic-selector,.right-deco.__jsx-style-dynamic-selector{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:9px;height:100%;}.middle-deco.__jsx-style-dynamic-selector{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:12px;height:100%;}.content.__jsx-style-dynamic-selector{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;width:").concat(autowidth ? 'auto' : 'calc(50% - 9px)', ";padding:0 calc(0.5rem + 3px);margin:0 -3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.33333rem;}.default.__jsx-style-dynamic-selector .left-deco.__jsx-style-dynamic-selector,.default.__jsx-style-dynamic-selector .right-deco.__jsx-style-dynamic-selector,#ticketButtonMiddlePattern-default.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, ";}.default.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{color:#fff;background-color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, ";}.green.__jsx-style-dynamic-selector .left-deco.__jsx-style-dynamic-selector,.green.__jsx-style-dynamic-selector .right-deco.__jsx-style-dynamic-selector,#ticketButtonMiddlePattern-green.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, ";}.green.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{color:#fff;background-color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, ";}.gray.__jsx-style-dynamic-selector{cursor:default;}.gray.__jsx-style-dynamic-selector .left-deco.__jsx-style-dynamic-selector,.gray.__jsx-style-dynamic-selector .right-deco.__jsx-style-dynamic-selector,#ticketButtonMiddlePattern-gray.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, ";}.gray.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{color:#fff;background-color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, ";}.inline.__jsx-style-dynamic-selector .left-deco.__jsx-style-dynamic-selector,.inline.__jsx-style-dynamic-selector .right-deco.__jsx-style-dynamic-selector,#ticketButtonMiddlePattern-inline.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, ";}.inline.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{color:#fff;background-color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, ";}.inline.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector>*{padding:0 0.5rem;}@media (min-width:992px){.box.__jsx-style-dynamic-selector{height:2.44445rem;}.content.__jsx-style-dynamic-selector{font-size:1rem;padding:0 calc(0.5rem +1px);}.inline.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector>*{padding:0 0.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvVGlja2V0QnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGa0IsQUFHMkIsQUFVSCxBQVNDLEFBTUEsQUFNQSxBQWNvQixBQUl2QixBQVN1QixBQUl2QixBQU1JLEFBTW1CLEFBSXZCLEFBUXVCLEFBSXZCLEFBSU0sQUFLRyxBQUlILEFBS0UsV0ExRDJCLEFBYUEsQUFnQkEsQUFZQSxJQXRCaEQsQUFtQ2dDLENBdkdsQixDQThGZCxBQWNFLENBVEEsVUFsR2MsTUE0Q2hCLEFBYUEsQUFnQkEsQUFZQSxRQXBGcUMsQ0FzR25DLFdBckZVLEFBTUMsQUFNd0IsR0FtQnJDLEFBYUEsQUFnQkEsQUFZQSxPQXZFYyxDQU1BLFNBaEJBLEVBV2QsQ0FsQmlCLEFBd0JqQixTQWhCYSxHQXFCa0IsR0E1Qm5CLEtBU2EsS0FSZCxTQUNYLE9BMkJnQixjQUNELGdFQXBCZixVQXFCcUIsNkZBQ0ksbUdBQ0YscUJBQ3ZCIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvVGlja2V0QnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmNvbnN0IG1pZGRsZURlY29GaWxscyA9IHtcbiAgZGVmYXVsdDogIFRoZW1lLmNvbG9ycy5idXR0b24sXG4gIGdyZWVuOiBUaGVtZS5jb2xvcnMuZ3JlZW4sXG4gIGdyYXk6IFRoZW1lLmNvbG9ycy5ncmF5LFxuICBpbmxpbmU6IFRoZW1lLmNvbG9ycy5hY2NlbnQsXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB2YXJpYW50PVwiZGVmYXVsdFwiLCBhdXRvd2lkdGgsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgWyBmaXJzdENvbnRlbnQsIHNlY29uZENvbnRlbnQgXSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pXG5cbi8vIGNvbnNvbGUubG9nKG1pZGRsZURlY29GaWxsc1t2YXJpYW50XSlcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e3ZhcmlhbnQgPT09ICdncmF5J30gey4uLnByb3BzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYm94ICR7IHZhcmlhbnQgfWB9PlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1kZWNvXCJcbiAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8cGF0aCBpZD1cInRpY2tldEJ1dHRvbkxlZnRDdXRcIiBkPVwiTSAwIDAgdiAxMDAwIGEgNiA2IDAgMCAxIDAgMTIgdiAxMDAwIGggNiB2IC0yMDEyIHpcIiAvPlxuXG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJ0aWNrZXRCdXR0b25Db3JuZXJMZWZ0VG9wXCI+XG4gICAgICAgICAgICAgIDxyZWN0IHg9XCI1XCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNVwiIGN5PVwiNVwiIHI9XCI1XCIgLz5cbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XG5cbiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cInRpY2tldEJ1dHRvbkNvcm5lckxlZnRCb3R0b21cIj5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjVcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCItNVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNVwiIGN5PVwiMTAwJVwiIHI9XCI1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsIC01KVwiIC8+XG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgIDwvZGVmcz5cblxuICAgICAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCN0aWNrZXRCdXR0b25Db3JuZXJMZWZ0Qm90dG9tKVwiPlxuICAgICAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI3RpY2tldEJ1dHRvbkNvcm5lckxlZnRUb3ApXCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3RpY2tldEJ1dHRvbkxlZnRDdXRcIiB5PVwiNTAlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsLTEwMDYpXCIgLz5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+eyBmaXJzdENvbnRlbnQgfHwgJycgfTwvZGl2PlxuICAgICAgICB7IHNlY29uZENvbnRlbnQgJiYgKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pZGRsZS1kZWNvXCJcbiAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgPHBhdHRlcm4gaWQ9e2B0aWNrZXRCdXR0b25NaWRkbGVQYXR0ZXJuLSR7IHZhcmlhbnQgfWB9IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiNlwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAwLDAgaCA0IGEgMiAyIDAgMCAwIDQgMCBoIDQgdiA2IGggLTQgYSAyIDIgMCAwIDAgLTQgMCBoIC00IHpcIi8+XG4gICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxuICAgICAgICAgICAgICA8L2RlZnM+XG5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD17YHVybCgjdGlja2V0QnV0dG9uTWlkZGxlUGF0dGVybi0keyB2YXJpYW50IH0pYH0vPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57IHNlY29uZENvbnRlbnQgfTwvZGl2PlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJyaWdodC1kZWNvXCJcbiAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8cGF0aCBpZD1cInRpY2tldEJ1dHRvblJpZ2h0Q3V0XCIgZD1cIk0gNiAwIHYgMTAwMCBhIDYgNiAwIDAgMCAwIDEyIHYgMTAwMCBoIC02IHYgLTIwMTIgelwiIC8+XG5cbiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cInRpY2tldEJ1dHRvbkNvcm5lclJpZ2h0VG9wXCI+XG4gICAgICAgICAgICAgIDxyZWN0IHg9XCItNVwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEwMCVcIiBjeT1cIjVcIiByPVwiNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNSwgMClcIiAvPlxuICAgICAgICAgICAgPC9jbGlwUGF0aD5cblxuICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwidGlja2V0QnV0dG9uQ29ybmVyUmlnaHRCb3R0b21cIj5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIi01XCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiLTZcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEwMCVcIiBjeT1cIjEwMCVcIiByPVwiNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNSwgLTUpXCIgLz5cbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgPC9kZWZzPlxuXG5cbiAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjdGlja2V0QnV0dG9uQ29ybmVyUmlnaHRCb3R0b20pXCI+XG4gICAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjdGlja2V0QnV0dG9uQ29ybmVyUmlnaHRUb3ApXCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3RpY2tldEJ1dHRvblJpZ2h0Q3V0XCIgeD1cIjEwMCVcIiB5PVwiNTAlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC02LC0xMDA2KVwiIC8+XG4gICAgICAgICAgICAgIDxyZWN0IHg9XCItNlwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAkeyBhdXRvd2lkdGggPyAnYXV0bycgOiAnMTAwJScgfTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYm94IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdC1kZWNvLFxuICAgICAgICAucmlnaHQtZGVjbyB7XG4gICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubWlkZGxlLWRlY28ge1xuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICB3aWR0aDogJHsgYXV0b3dpZHRoID8gJ2F1dG8nIDogJ2NhbGMoNTAlIC0gOXB4KScgfTtcbiAgICAgICAgICBwYWRkaW5nOiAwIGNhbGMoMC41cmVtICsgM3B4KTtcbiAgICAgICAgICBtYXJnaW46IDAgLTNweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjMzMzMzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlZmF1bHQgLmxlZnQtZGVjbyxcbiAgICAgICAgLmRlZmF1bHQgLnJpZ2h0LWRlY28sXG4gICAgICAgICN0aWNrZXRCdXR0b25NaWRkbGVQYXR0ZXJuLWRlZmF1bHQgcGF0aFxuICAgICAgICB7XG4gICAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmJ1dHRvbiB9O1xuICAgICAgICB9XG4gICAgICAgIC5kZWZhdWx0IC5jb250ZW50XG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYnV0dG9uIH07XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5ncmVlbiAubGVmdC1kZWNvLFxuICAgICAgICAuZ3JlZW4gLnJpZ2h0LWRlY28sXG4gICAgICAgICN0aWNrZXRCdXR0b25NaWRkbGVQYXR0ZXJuLWdyZWVuIHBhdGhcbiAgICAgICAge1xuICAgICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5ncmVlbiB9O1xuICAgICAgICB9XG4gICAgICAgIC5ncmVlbiAuY29udGVudFxuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgVGhlbWUuY29sb3JzLmdyZWVuIH07XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5ncmF5IHtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXkgLmxlZnQtZGVjbyxcbiAgICAgICAgLmdyYXkgLnJpZ2h0LWRlY28sXG4gICAgICAgICN0aWNrZXRCdXR0b25NaWRkbGVQYXR0ZXJuLWdyYXkgcGF0aFxuICAgICAgICB7XG4gICAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmdyYXkgfTtcbiAgICAgICAgfVxuICAgICAgICAuZ3JheSAuY29udGVudFxuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgVGhlbWUuY29sb3JzLmdyYXkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmxpbmUgLmxlZnQtZGVjbyxcbiAgICAgICAgLmlubGluZSAucmlnaHQtZGVjbyxcbiAgICAgICAgI3RpY2tldEJ1dHRvbk1pZGRsZVBhdHRlcm4taW5saW5lIHBhdGhcbiAgICAgICAge1xuICAgICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICAgICAgfVxuICAgICAgICAuaW5saW5lIC5jb250ZW50XG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgICAgIH1cbiAgICAgICAgLmlubGluZSAuY29udGVudCA+IDpnbG9iYWwoKikge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNDQ0NDVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCBjYWxjKDAuNXJlbSArMXB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5saW5lIC5jb250ZW50ID4gOmdsb2JhbCgqKSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2J1dHRvbj4pfVxuIl19 */\n/*@ sourceURL=src/next/components/TicketButton.js */"),
    dynamic: [autowidth ? 'auto' : '100%', autowidth ? 'auto' : 'calc(50% - 9px)', __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.button, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.green, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.gray, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].colors.accent]
  }));
});

/***/ }),

/***/ "./components/WPLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__("qs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__("./lib/utils.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/WPLink.js";




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var wp = _ref.wp,
      children = _ref.children;
  // console.log('WPLink', wp)
  // console.log({ template: wp.template || wp.page_template || '', type: wp.object || wp.type, id: wp.object_id || wp.id, main_id: wp.acf.main_id || null })
  var wpLink = wp && (wp.link || wp.url || wp.post_link) || ''; // console.log(wpLink)

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: wp ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["e" /* mapToPage */])(wp, wp.query || {}) : {},
    as: wp ? "".concat(wpLink.substr(-6) === '/index' ? wpLink.substr(0, wpLink.length - 5) : wpLink).concat(wp.query ? '?' + __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(wp.query) : '') : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, children);
});

/***/ }),

/***/ "./components/WidgetCode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_utils__ = __webpack_require__("./lib/utils.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/WidgetCode.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var WidgetCode =
/*#__PURE__*/
function (_Component) {
  _inherits(WidgetCode, _Component);

  function WidgetCode() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, WidgetCode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = WidgetCode.__proto__ || Object.getPrototypeOf(WidgetCode)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        htmlContent: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "insertedScripts", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    }), Object.defineProperty(_assertThisInitialized(_this), "initWidget", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var code = _this.props.code; // if(options && options.hypercomments) {
        // console.log(options.hypercomments.match(/<script[\s\S]*?>([\s\S]*)<\/script>/i))
        // console.log(/<([^/ ]+) ?[^>]+?>/gi.exec(options.hypercomments))
        // console.log(stringMatchAll(/<([^/ ]+) ?[^>]+?>/gi, options.hypercomments))
        // const scriptTags = stringMatchAll(/<script[\s\S]*?>([\s\S]*)<\/script>/gi, options.hypercomments)
        // htmlContent = options.hypercomments.replace(/<script[\s\S]*?>[\s\S]*<\/script>/gi, '')
        // scriptContent = scriptTags.map(script => btoa(script[1])).map(data => `<script defer src="data:text/javascript,${encodeURIComponent(data)}"></script>`).join("\n")
        // scriptContent = scriptTags.map(script => btoa(script[1])).map(data => `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"></script>`).join("\n")
        // console.log(htmlContent, scriptContent)
        // }

        if (code) {
          if (!_this.state.htmlContent) {
            var htmlContent = code.replace(/<script[\s\S]*?>[\s\S]*<\/script>/gi, '');

            _this.setState({
              htmlContent: htmlContent
            });
          } else {
            // const firstScript = document.getElementsByTagName('script')[0]
            var bodyEl = document.getElementsByTagName('body')[0];
            var scriptTags = Object(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["i" /* stringMatchAll */])(/<script([^>]+?)>([\s\S]*?)<\/script>/gi, code);
            scriptTags.forEach(function (script) {
              var scriptEl = document.createElement("script");
              var scriptProps = Object(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["i" /* stringMatchAll */])(/(\S+)\s*=\s*("([\s\S]+?)"|'([\s\S]+?)'|(\S+))/gi, script[1]);
              scriptProps.forEach(function (prop) {
                scriptEl.setAttribute(prop[1], prop[3] || prop[4] || prop[5]);
              });
              var scriptTxt = document.createTextNode(script[2]);
              scriptEl.appendChild(scriptTxt);
              _this.insertedScripts = _toConsumableArray(_this.insertedScripts).concat([scriptEl]); // firstScript.parentNode.insertBefore(scriptEl, firstScript)

              bodyEl.appendChild(scriptEl);
            });
          }
        }
      }
    }), _temp));
  }

  _createClass(WidgetCode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (process.browser) {
        this.props.cleanup && this.props.cleanup();
        this.initWidget();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (process.browser) {
        this.initWidget();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (process.browser) {
        this.props.cleanup && this.props.cleanup();
        this.insertedScripts.forEach(function (el) {
          return el.parentNode && el.parentNode.removeChild(el);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$component = _props.component,
          Component = _props$component === void 0 ? 'div' : _props$component,
          code = _props.code,
          cleanup = _props.cleanup,
          props = _objectWithoutProperties(_props, ["component", "code", "cleanup"]);

      return this.state.htmlContent ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, props, {
        dangerouslySetInnerHTML: {
          __html: this.state.htmlContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })) : null;
    }
  }], [{
    key: "cleanupScripts",
    value: function cleanupScripts(regexp) {
      _toConsumableArray(document.getElementsByTagName('script')).filter(function (el) {
        return el.src && el.src.match(regexp);
      }).forEach(function (el) {
        return el.parentNode.removeChild(el);
      });
    }
  }, {
    key: "cleanupLinks",
    value: function cleanupLinks(regexp) {
      _toConsumableArray(document.getElementsByTagName('link')).filter(function (el) {
        return el.src && el.src.match(regexp);
      }).forEach(function (el) {
        return el.parentNode.removeChild(el);
      });
    }
  }, {
    key: "cleanupGlobals",
    value: function cleanupGlobals(names) {
      names.forEach(function (name) {
        return delete window[name];
      });
    }
  }]);

  return WidgetCode;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(WidgetCode, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    code: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    cleanup: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element
  }
});
/* harmony default export */ __webpack_exports__["a"] = (WidgetCode);

/***/ }),

/***/ "./images/angle-left-solid.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "angle-left-solid--sprite",
  "use": "angle-left-solid--sprite-usage",
  "viewBox": "0 0 216 330",
  "content": "<symbol viewBox=\"0 0 216 330\" xmlns=\"http://www.w3.org/2000/svg\" id=\"angle-left-solid--sprite\">\n  <path d=\"M 11.694 148 L 147.694 12 C 157.094 2.6 172.294 2.6 181.594 12 L 204.194 34.6 C 213.594 44 213.594 59.2 204.194 68.5 L 107.894 165 L 204.294 261.4 C 213.694 270.8 213.694 286 204.294 295.3 L 181.694 318 C 172.294 327.4 157.094 327.4 147.794 318 L 11.794 182 C 2.294 172.6 2.294 157.4 11.694 148 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* unused harmony default export */ var _unused_webpack_default_export = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/angle-right-solid.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "angle-right-solid--sprite",
  "use": "angle-right-solid--sprite-usage",
  "viewBox": "0 0 216 330",
  "content": "<symbol viewBox=\"0 0 216 330\" xmlns=\"http://www.w3.org/2000/svg\" id=\"angle-right-solid--sprite\">\n  <path d=\"M 204.256 182 L 68.256 318 C 58.856 327.4 43.656 327.4 34.356 318 L 11.756 295.4 C 2.356 286 2.356 270.8 11.756 261.5 L 108.156 165.1 L 11.756 68.7 C 2.356 59.3 2.356 44.1 11.756 34.8 L 34.256 12 C 43.656 2.6 58.856 2.6 68.156 12 L 204.156 148 C 213.656 157.4 213.656 172.6 204.256 182 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/arrow-left-solid.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "arrow-left-solid--sprite",
  "use": "arrow-left-solid--sprite-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" id=\"arrow-left-solid--sprite\">\n  <path d=\"M 289.525 445.1 L 267.325 467.3 C 257.925 476.7 242.725 476.7 233.425 467.3 L 39.025 273 C 29.625 263.6 29.625 248.4 39.025 239.1 L 233.425 44.7 C 242.825 35.3 258.025 35.3 267.325 44.7 L 289.525 66.9 C 299.025 76.4 298.825 91.9 289.125 101.2 L 168.625 216 L 456.025 216 C 469.325 216 480.025 226.7 480.025 240 L 480.025 272 C 480.025 285.3 469.325 296 456.025 296 L 168.625 296 L 289.125 410.8 C 298.925 420.1 299.125 435.6 289.525 445.1 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/arrow-right-solid.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "arrow-right-solid--sprite",
  "use": "arrow-right-solid--sprite-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" id=\"arrow-right-solid--sprite\">\n  <path d=\"M 222.475 66.9 L 244.675 44.7 C 254.075 35.3 269.275 35.3 278.575 44.7 L 472.975 239 C 482.375 248.4 482.375 263.6 472.975 272.9 L 278.575 467.3 C 269.175 476.7 253.975 476.7 244.675 467.3 L 222.475 445.1 C 212.975 435.6 213.175 420.1 222.875 410.8 L 343.375 296 L 55.975 296 C 42.675 296 31.975 285.3 31.975 272 L 31.975 240 C 31.975 226.7 42.675 216 55.975 216 L 343.375 216 L 222.875 101.2 C 213.075 91.9 212.875 76.4 222.475 66.9 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/badge-discount.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "badge-discount--sprite",
  "use": "badge-discount--sprite-usage",
  "viewBox": "0 0 200 200",
  "content": "<symbol viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:bx=\"https://boxy-svg.com\" id=\"badge-discount--sprite\">\n  <style>\n\t\t#badge-discount--sprite .shp0 { fill: #eb6b57 }\n    #badge-discount--sprite .shp1 { fill: #ffffff }\n\t</style>\n  <path class=\"shp0\" d=\"M 0.389 100 C 0.389 155.018 44.992 199.611 100 199.611 C 155.018 199.611 199.611 155.008 199.611 100 C 199.611 44.982 155.008 0.389 100 0.389 C 44.982 0.389 0.389 44.992 0.389 100 Z\" style=\"fill: rgb(237, 92, 1);\" />\n  <path class=\"shp1\" d=\"M 53.626 77.725 C 53.626 84.217 54.213 89.055 55.391 92.238 C 56.522 95.422 58.352 97.012 60.882 97.012 C 65.805 97.012 68.269 90.584 68.269 77.725 C 68.269 64.956 65.805 58.57 60.882 58.57 C 58.352 58.57 56.522 60.138 55.391 63.277 C 54.213 66.414 53.626 71.233 53.626 77.725 Z M 87.557 77.594 C 87.557 89.316 85.289 98.143 80.759 104.072 C 76.228 109.956 69.558 112.898 60.751 112.898 C 52.338 112.898 45.826 109.871 41.203 103.81 C 36.627 97.75 34.339 89.015 34.339 77.594 C 34.339 54.235 43.146 42.552 60.751 42.552 C 69.382 42.552 76.005 45.579 80.627 51.639 C 85.25 57.701 87.557 66.349 87.557 77.594 Z M 121.88 44.186 L 140.317 44.186 L 78.143 156.177 L 59.771 156.177 L 121.88 44.186 Z M 132.079 122.443 C 132.079 128.935 132.668 133.773 133.844 136.957 C 134.975 140.18 136.806 141.795 139.336 141.795 C 144.259 141.795 146.724 135.342 146.724 122.443 C 146.724 109.674 144.259 103.288 139.336 103.288 C 136.806 103.288 134.975 104.856 133.844 107.995 C 132.668 111.179 132.079 115.99 132.079 122.443 Z M 166.01 122.312 C 166.01 133.995 163.741 142.796 159.211 148.725 C 154.68 154.609 148.012 157.55 139.205 157.55 C 130.792 157.55 124.28 154.523 119.657 148.464 C 115.081 142.402 112.792 133.688 112.792 122.312 C 112.792 98.952 121.599 87.27 139.205 87.27 C 147.834 87.27 154.457 90.297 159.08 96.357 C 163.702 102.418 166.01 111.067 166.01 122.312 Z\" style=\"white-space: pre; fill: rgb(255, 255, 255);\" transform=\"matrix(0.965926, -0.258819, 0.258819, 0.965926, -22.481732, 29.336207)\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* unused harmony default export */ var _unused_webpack_default_export = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/badge-free.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "badge-free--sprite",
  "use": "badge-free--sprite-usage",
  "viewBox": "0 0 200 200",
  "content": "<symbol viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" id=\"badge-free--sprite\">\n  <style>\n\t\t#badge-free--sprite .shp0 { fill: #eb6b57 }\n    #badge-free--sprite .shp1 { fill: #ffffff }\n\t</style>\n  <path class=\"shp0\" d=\"M 0.389 100 C 0.389 155.018 44.992 199.611 100 199.611 C 155.018 199.611 199.611 155.008 199.611 100 C 199.611 44.982 155.008 0.389 100 0.389 C 44.982 0.389 0.389 44.992 0.389 100 Z\" style=\"fill: rgb(162, 209, 9);\" />\n  <path class=\"shp1\" d=\"M 27.252 104.895 L 27.252 127.305 L 18.402 127.305 L 18.402 72.695 L 49.222 72.695 L 49.222 80.235 L 27.252 80.235 L 27.252 97.315 L 47.832 97.315 L 47.832 104.895 L 27.252 104.895 Z M 68.048 80.235 L 68.048 98.095 L 74.248 98.095 C 78.408 98.095 81.421 97.322 83.288 95.775 C 85.155 94.235 86.088 91.945 86.088 88.905 C 86.088 85.818 85.078 83.602 83.058 82.255 C 81.045 80.908 78.008 80.235 73.948 80.235 L 68.048 80.235 Z M 76.858 105.495 L 68.048 105.495 L 68.048 127.305 L 59.118 127.305 L 59.118 72.695 L 74.548 72.695 C 81.595 72.695 86.811 74.015 90.198 76.655 C 93.585 79.295 95.278 83.278 95.278 88.605 C 95.278 95.405 91.741 100.248 84.668 103.135 L 100.098 127.305 L 89.938 127.305 L 76.858 105.495 Z M 138.904 119.725 L 138.904 127.305 L 108.014 127.305 L 108.014 72.695 L 138.904 72.695 L 138.904 80.235 L 116.944 80.235 L 116.944 95.105 L 137.524 95.105 L 137.524 102.575 L 116.944 102.575 L 116.944 119.725 L 138.904 119.725 Z M 181.598 119.725 L 181.598 127.305 L 150.708 127.305 L 150.708 72.695 L 181.598 72.695 L 181.598 80.235 L 159.638 80.235 L 159.638 95.105 L 180.218 95.105 L 180.218 102.575 L 159.638 102.575 L 159.638 119.725 L 181.598 119.725 Z\" style=\"fill: rgb(255, 255, 255); white-space: pre;\" transform=\"matrix(0.965926, -0.258819, 0.258819, 0.965926, -22.474478, 29.289309)\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* unused harmony default export */ var _unused_webpack_default_export = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/circle-arrow-left.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "circle-arrow-left--sprite",
  "use": "circle-arrow-left--sprite-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" id=\"circle-arrow-left--sprite\">\n  <path d=\"M 9.904 16.019 L 15.023 11.011 L 17.851 11.011 L 13.836 15.026 L 22.969 15.026 L 22.969 17.026 L 13.818 17.026 L 17.851 21.059 L 15.023 21.059 Z M 32.016 16.003 C 32.016 24.843 24.85 32.009 16.01 32.009 C 7.17 32.009 0.004 24.843 0.004 16.003 C 0.004 7.163 7.17 -0.003 16.01 -0.003 C 24.85 -0.003 32.016 7.163 32.016 16.003 Z M 16 1 C 7.716 1 1 7.716 1 16 C 1 24.284 7.716 31 16 31 C 24.284 31 31 24.284 31 16 C 31 7.716 24.284 1 16 1 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* unused harmony default export */ var _unused_webpack_default_export = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/circle-arrow-right.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "circle-arrow-right--sprite",
  "use": "circle-arrow-right--sprite-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" id=\"circle-arrow-right--sprite\">\n  <path d=\"M 17.85 21.059 L 15.022 21.059 L 19.055 17.026 L 9.904 17.026 L 9.904 15.026 L 19.037 15.026 L 15.022 11.011 L 17.85 11.011 L 22.969 16.019 Z M 32.016 16.003 C 32.016 24.843 24.85 32.009 16.01 32.009 C 7.17 32.009 0.004 24.843 0.004 16.003 C 0.004 7.163 7.17 -0.003 16.01 -0.003 C 24.85 -0.003 32.016 7.163 32.016 16.003 Z M 16 1 C 7.716 1 1 7.716 1 16 C 1 24.284 7.716 31 16 31 C 24.284 31 31 24.284 31 16 C 31 7.716 24.284 1 16 1 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* unused harmony default export */ var _unused_webpack_default_export = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/close-rounded.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "close-rounded--sprite",
  "use": "close-rounded--sprite-usage",
  "viewBox": "0 0 26 26",
  "content": "<symbol viewBox=\"0 0 26 26\" xmlns=\"http://www.w3.org/2000/svg\" id=\"close-rounded--sprite\">\n  <path d=\"M 12.068 15.95 L 2.88 25.152 C 2.321 25.71 1.42 25.71 0.847 25.152 C 0.289 24.579 0.289 23.678 0.847 23.119 L 10.108 13.872 L 10.108 13.872 L 10.979 13.001 L 0.847 2.88 C 0.289 2.322 0.289 1.419 0.847 0.847 C 1.405 0.289 2.322 0.289 2.88 0.847 L 13 10.978 L 23.119 0.847 C 23.677 0.289 24.594 0.289 25.152 0.847 C 25.71 1.419 25.71 2.322 25.152 2.88 L 15.02 13.001 L 15.891 13.872 L 15.891 13.872 L 25.152 23.119 C 25.71 23.678 25.71 24.579 25.152 25.152 C 24.579 25.71 23.678 25.71 23.119 25.152 L 13.931 15.95 L 13 15.02 Z M 9.964 14.016 L 9.964 14.016 L 9.822 14.159 Z M 16.177 14.159 L 16.035 14.016 L 16.035 14.016 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/facebook-square-brands.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "facebook-square-brands--sprite",
  "use": "facebook-square-brands--sprite-usage",
  "viewBox": "0 0 448 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" id=\"facebook-square-brands--sprite\"><path d=\"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z\" /></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/facebook.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "facebook--sprite",
  "use": "facebook--sprite-usage",
  "viewBox": "0 0 82 82",
  "content": "<symbol viewBox=\"0 0 82 82\" xmlns=\"http://www.w3.org/2000/svg\" id=\"facebook--sprite\">\n  <path d=\"M 68.989 0 L 13.021 0 C 5.864 0 0 5.824 0 12.931 L 0 68.552 C 0 75.659 5.864 81.483 13.021 81.483 L 68.989 81.483 C 76.146 81.483 82 75.659 82 68.552 L 82 12.931 C 82 5.824 76.146 0 68.989 0 Z M 67.21 30.584 L 56.694 30.584 C 55.541 30.584 54.2 31.965 54.2 34.052 L 54.2 39.201 L 67.21 39.201 L 67.21 52.132 L 54.2 52.132 L 54.2 81.443 L 42.054 81.443 L 42.054 52.132 L 32.512 52.132 L 32.512 39.201 L 42.054 39.201 L 42.054 34.162 C 42.054 25.475 48.624 17.642 56.694 17.642 L 67.21 17.642 L 67.21 30.584 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/instagram.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "instagram--sprite",
  "use": "instagram--sprite-usage",
  "viewBox": "0 0 82 82",
  "content": "<symbol viewBox=\"0 0 82 82\" xmlns=\"http://www.w3.org/2000/svg\" id=\"instagram--sprite\">\n  <path d=\"M 59.598 10.148 C 57.581 10.148 55.922 11.798 55.922 13.816 L 55.922 22.572 C 55.922 24.59 57.581 26.23 59.598 26.23 L 68.847 26.23 C 70.863 26.23 72.522 24.59 72.522 22.572 L 72.522 13.816 C 72.522 11.798 70.863 10.148 68.847 10.148 L 59.598 10.148 Z M 72.562 35.494 L 65.37 35.494 C 66.045 37.7 66.413 40.046 66.413 42.471 C 66.413 55.989 55.038 66.952 41 66.952 C 26.962 66.952 15.587 55.989 15.587 42.471 C 15.587 40.046 15.955 37.7 16.64 35.494 L 9.13 35.494 L 9.13 69.834 C 9.13 71.613 10.59 73.064 12.378 73.064 L 69.314 73.064 C 71.102 73.064 72.562 71.613 72.562 69.834 L 72.562 35.494 Z M 41 25.773 C 31.93 25.773 24.578 32.85 24.578 41.586 C 24.578 50.323 31.93 57.41 41 57.41 C 50.07 57.41 57.422 50.323 57.422 41.586 C 57.422 32.85 50.07 25.773 41 25.773 Z M 68.996 81.523 L 13.004 81.523 C 5.851 81.523 0 75.708 0 68.592 L 0 12.931 C 0 5.824 5.851 0 13.004 0 L 68.996 0 C 76.149 0 82 5.824 82 12.931 L 82 68.592 C 82 75.708 76.149 81.523 68.996 81.523 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/load-more.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "load-more--sprite",
  "use": "load-more--sprite-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" id=\"load-more--sprite\">\n  <path d=\"M 15.006 3 L 10.006 6 L 10.006 4 C 10.004 4 10.002 4 10 4 C 6.686 4 4 6.686 4 10 C 4 13.314 6.686 16 10 16 C 13.309 16 15.992 13.322 16 10.014 L 18 10.014 C 17.992 14.426 14.413 18 10 18 C 5.582 18 2 14.418 2 10 C 2 5.582 5.582 2 10 2 C 10.002 2 10.004 2 10.006 2 L 10.006 0 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/logo-ft.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "logo-ft--sprite",
  "use": "logo-ft--sprite-usage",
  "viewBox": "0 0 450 286",
  "content": "<symbol viewBox=\"0 0 450 286\" xmlns=\"http://www.w3.org/2000/svg\" id=\"logo-ft--sprite\">\n  <g transform=\"matrix(1.3333 0 0 -1.3333 0 304.36)\">\n    <g transform=\"scale(.1)\">\n      <path d=\"m199.97 772.04c-5.883 34.902-12.942 41.172-60.383 41.172h-51.758c-11.371 0-13.332-3.133-13.332-15.289v-85.082h55.68c32.933 0 40.777 6.66 44.304 37.25h9.02v-91.36h-9.02c-3.136 32.149-10.585 38.032-44.304 38.032h-55.68v-84.301c0-29.801 5.4922-34.902 35.684-36.461v-7.449h-110.18v7.449c29.801 1.961 34.504 6.66 34.504 40.781v167.81c0 28.621-3.9219 33.719-34.113 36.07v7.449h207.42l1.961-56.07h-9.801\" />\n      <path d=\"m376.8 777.14-45.09-107.82h90.574zm47.441-208.59v7.449c14.117 0 16.864 0.781 21.567 3.531 3.136 1.559 5.492 5.879 5.492 9.41 0 5.879-2.746 16.457-7.453 27.438l-16.074 36.859h-102.73l-18.035-44.699c-1.961-5.098-3.527-11.758-3.527-16.469 0-12.148 8.625-16.07 27.445-16.07v-7.449h-78.027v7.449c22.742 2.352 26.269 10.578 49.406 65.48l80.769 191.34h7.844l96.453-220.75c10.981-25.492 16.469-33.718 36.856-36.07v-7.449h-99.985\" />\n      <path d=\"m798.28 568.55v7.449c30.977 1.961 35.289 8.23 35.289 40.781v176.04l-99.984-224.27h-5.488l-98.809 215.26v-156.06c0-43.129 6.273-50.191 36.465-51.75v-7.449h-91.75v7.449c32.543 2.352 38.031 7.84 38.031 51.75v156.06c0 29.8-5.098 34.89-37.246 36.851v7.449h77.633l90.574-196.83 86.652 196.83h78.028v-7.449c-28.231-0.39-34.114-7.051-34.114-36.461v-171.74c0-27.84 5.883-34.5 34.504-36.461v-7.449h-109.78\" />\n      <path d=\"m995.5 568.55v7.449c32.934 1.172 38.034 5.879 38.034 36.461v172.13c0 30.98-4.71 34.109-38.034 36.07v7.449h116.45v-7.449c-32.94-1.57-38.43-6.269-38.43-36.07v-172.13c0-29.41 6.28-35.289 38.43-36.461v-7.449h-116.45\" />\n      <path d=\"m1405.2 568.55h-210.95v7.449c29.02 1.559 34.11 7.84 34.11 37.641v168.99c0 30.191-3.53 35.68-34.11 38.031v7.449h110.96v-7.449c-32.15-1.961-36.85-7.051-36.85-37.25v-181.93c0-14.902 6.66-17.64 35.29-17.64h27.44c31.76 0 52.93 7.058 66.27 23.922 5.09 6.66 10.19 15.289 16.46 29.008h10.2l-18.82-68.219\" />\n      <path d=\"m1714.6 820.66c-23.13-1.961-32.15-10.191-54.11-43.91l-58.03-89.398v-75.282c0-30.582 7.45-34.511 40.39-36.07v-7.449h-119.98v7.449c34.89 2.352 39.6 5.879 39.6 40.781v67.039l-51.36 75.282c-36.08 52.937-44.7 60.777-63.52 61.558v7.449h109.39v-7.449l-9.41-0.39c-12.55-0.391-18.43-3.918-18.43-10.192 0-5.098 2.75-12.156 7.06-18.43l57.24-86.648 56.86 87.039c3.92 5.883 5.49 12.152 5.49 16.473-0.39 8.629-6.28 11.758-26.66 12.148v7.449h85.47v-7.449\" />\n      <path d=\"m2215.7 761.46c-8.63 43.129-18.82 50.18-60.38 50.18h-23.14v-199.57c0-29.8 5.49-34.511 37.65-36.07v-7.449h-114.5v7.449c32.55 1.961 36.86 6.27 36.86 40.781v194.86h-23.53c-41.56 0-52.14-7.051-59.99-50.18h-9.41l2.75 66.648h220.36l2.74-66.648h-9.41\" />\n      <path d=\"m2374.8 703.03c37.64 0.789 51.36 3.528 69.4 13.34 14.12 7.84 22.35 25.09 22.35 44.688 0 35.293-23.13 52.55-71.75 52.55-13.33 0-20-2.75-20-16.468zm115.28-134.48-93.32 120.76-21.96-0.778v-76.07c0-29.801 4.71-34.5 34.9-36.461v-7.449h-108.22v7.449c29.41 2.352 33.33 6.66 33.33 41.172v167.42c0 29.019-3.14 33.719-33.33 36.07v7.449h106.65c37.25 0 65.09-9.41 81.95-23.129 12.94-10.589 19.21-29.8 19.21-47.05 0-34.11-21.96-56.86-70.97-64.309l78.42-99.191c11.37-14.508 19.6-16.871 36.86-18.43v-7.449h-63.52\" />\n      <path d=\"m2835.2 568.55h-211.34v7.449c30.19 1.961 34.11 7.051 34.11 37.25v170.95c0 29.012-4.7 34.891-34.11 36.461v7.449h207.81l1.57-56.07h-9.8c-5.88 35.293-14.9 41.172-60.39 41.172h-51.36c-10.98 0-13.72-1.57-13.72-14.109v-86.262h59.2c33.72 0 39.6 6.66 44.31 37.64h9.02v-91.75h-9.02c-4.71 32.93-10.59 38.032-44.31 38.032h-59.2v-95.282c0-16.468 10.58-18.429 39.6-18.429h14.11c56.07 0 72.93 10.199 90.58 51.758h10.98l-18.04-66.258\" />\n      <path d=\"m3137.4 568.55h-211.33v7.449c30.19 1.961 34.11 7.051 34.11 37.25v170.95c0 29.012-4.71 34.891-34.11 36.461v7.449h207.81l1.56-56.07h-9.8c-5.88 35.293-14.9 41.172-60.38 41.172h-51.37c-10.97 0-13.72-1.57-13.72-14.109v-86.262h59.21c33.72 0 39.6 6.66 44.3 37.64h9.02v-91.75h-9.02c-4.7 32.93-10.58 38.032-44.3 38.032h-59.21v-95.282c0-16.468 10.59-18.429 39.6-18.429h14.12c56.07 0 72.93 10.199 90.57 51.758h10.98l-18.04-66.258\" />\n      <path d=\"m1606.1 2009.7c4.42-8.23 14.67-11.32 22.9-6.9 8.22 4.41 11.32 14.66 6.9 22.89s-14.66 11.32-22.89 6.9c-8.23-4.41-11.32-14.66-6.91-22.89\" />\n      <path d=\"m1740.7 1261.9c-3.46 13.4 5.31 30.64 13.12 39.3 8.34 9.27 23.91 19.88 39.79 17.78-10.32-7.46-21.68-19.23-28.5-26.6-6.83-7.38-15.83-17.48-24.41-30.48\" />\n      <path d=\"m2070.8 1535.1c-23.85 23.85-55.56 36.98-89.29 36.98-31.16 0-60.61-11.19-83.7-31.71-11.25-10-17-9-30.4 2.48-18.22 15.61-57.41 24.93-138.07-16.09-48.83-24.83-99.79-62.53-123.94-91.68-20.48-24.7-30.53-54.68-30.53-84.51 0-71.38 59.19-119.11 97.73-119.11-38.2 26.5-78.69 59.58-78.69 119.06 0 25.56 8.62 51.24 26.16 72.41 19.13 23.09 65.77 60.34 117.9 86.85 54.93 27.93 97.68 34.64 117.28 18.4 21.31-17.65 20.84-67.53-0.54-132.46-1.54-4.67-6.08-13.96-15.49-15.66-9.42-1.7-13.11 6.83-11.1 11.99 13.43 34.36 20.11 75.02 12.01 86.1-7.49-28.69-15.76-62.13-30.55-93.35-3.31-6.99-9.54-12.18-17.01-14.2-9.59-2.58-18.01-5.37-24.87-8.25-33.97-14.22-59.78-42.02-71.67-76.23-2.24-6.45-9.58-9.51-15.85-6.8-10.56 4.56-17.98 10.22-20.75 12.51-32.19 26.68-36.49 72.5-10.95 116.84-35.59-17.08-45.65-88.79 1.84-127.84 3.87-3.18 17.95-14.51 37.41-20.56 10.46-3.25 21.43 2.87 24.68 13.33 10.63 34.32 33.43 58.94 62.65 71.18 38.61 16.18 96.88 28.25 210.19 22.1-15.18 13.38-62.5 18.47-98.72 17.61-7.57-0.17-13.11 7.06-10.91 14.31 7.25 23.81 14.39 53.32 14.39 80.37 0 21.66 4.13 30.4 12.71 39.47 18.89 19.96 44.33 32.43 71.76 34.17 31.24 1.98 60.95-9.28 82.85-31.18 29.14-29.15 37.41-68.65 31.6-122.63 17.43 20.37 27.37 90.6-18.13 136.1\" />\n      <path d=\"m2229.6 1869.9c-2.55 7.24-11.82 35.54-9.06 46.16 8.35-6.25 19.75-33.51 22.21-40.49 4.24-12.04 9.43-36.94 7.36-47.69-7.72 7.84-16.46 30.48-20.51 42.02\" />\n      <path d=\"m2108.2 1627.2c-1.5 8.16-5.54 36.29-1.29 48.92 7.76-10.05 13.87-38.37 15.38-46.52 2.34-12.68 5.97-38.21 3.69-48.76-7.05 9.42-15.38 33.36-17.78 46.36\" />\n      <path d=\"m2321 1703.5c2.59 8.65 13.72 19.84 19.56 24.91 6.05 5.26 17.21 12.42 27.12 15.8-1.62-8.44-11.46-21.12-17.77-26.6-6.05-5.25-19.77-13.89-28.91-14.11\" />\n      <path d=\"m1688 1108.8c-1.13 10.89 2.47 25.58 5.2 33.73 2.55 7.61 8.07 20.69 15.34 27.26 2.39-9.48 0.87-23.88-1.75-31.72-2.82-8.42-10.02-22.35-18.79-29.27\" />\n      <path d=\"m2073.4 1253.8c-4.71 3.51-10.95 4-17.57 3.14-4.14-0.54-7.21 3.72-5.44 7.5 9.93 21.1 18.9 45.47 18.87 58.3-10.2-9.34-19.94-28.5-28.98-46.74-1.96-3.96-7.54-3.88-9.51 0.07-2.91 5.81-6.75 10.55-11.14 11.83 0 0 2.74-15.85 3.98-31.86 0.56-7.25-1.06-14.52-4.62-20.86-4.34-7.73-8.98-15.63-13.94-23.62-2.92-4.71-10.07-3.35-11.13 2.08-3.29 16.82-9.77 31.18-18.08 33.82 0 0 7.7-30.11 6.08-56.67-0.6-9.93-4.26-19.43-10.29-27.34-10.09-13.22-22.55-29.86-25.3-40.31 8.98 4.67 25.62 19.88 37.03 32.8 6.88 7.8 15.46 13.94 25.08 17.89 16.55 6.81 32.83 9.82 32.83 9.82-4.86 4.64-13.68 5.61-22.43 5.07-4.93-0.31-8.04 5.19-5.39 9.35 6.28 9.87 12.09 19.61 17.44 29.11 3.81 6.73 9.58 12.14 16.56 15.46 13.89 6.61 25.95 11.16 25.95 11.16\" />\n      <path d=\"m2196.2 1161.9c-9.8-1.14-40.05-20.73-63.27-35.54-4.2-2.68-9.8 0.28-9.82 5.27-0.02 8.85-2.27 16.17-4.87 21.06-0.07-0.01-0.07-0.01-0.13-0.02-2.71-10.3-6.17-21-11.17-35.27-2.02-5.78-6.08-10.65-11.4-13.7-16.21-9.29-38.83-22.34-44.92-30.14 10.11-0.25 35.73 9.75 52.69 18.38 5.1 2.59 10.92 3.37 16.54 2.27 12.18-2.38 21.99-4.96 31.83-7.14-2.24 4.84-7.51 9.9-14.6 13.97-4.14 2.39-4.44 8.24-0.48 10.91 24.4 16.49 55.79 41.92 59.6 49.95\" />\n      <path d=\"m2367.7 1463.9c-9.71-5.98-23.79-24.25-46.04-51.88-3.45-4.29-10.26-2.81-11.73 2.5-2.34 8.46-6.25 15.08-10.06 17.54 0 0 0.71-19.51-1.52-38.84-0.82-7.11-3.78-13.81-8.5-19.19-11.69-13.3-27.39-31.49-29.88-41.69 10.08 3.64 27.79 19.29 40.05 32 5.01 5.19 11.6 8.6 18.75 9.53 15.94 2.05 33.78 2.98 33.78 2.98-4.3 3.66-11.64 7.69-20.62 9.63-4.9 1.06-7.02 6.83-3.91 10.76 25.22 31.92 39.03 56.32 39.68 66.66\" />\n      <path d=\"m1845 944.9c7.33 4 12.6 8.891 13.9 13.692-13.01-3.352-27.48-8.281-44.17-9.102-8.63-0.429-16.41 0.883-21.14 2.731-11.58 4.511-27.63 9.871-36.95 9.269 4.75-7.078 18.83-15.828 30.06-21.449 6.19-3.098 11.61-7.559 15.7-13.141 6.96-9.476 11.74-19.839 16.27-30.707 2.9 5.297 3.58 11.508 2.45 18.188-0.91 5.43 4.4 9.832 9.62 8.07 26.67-8.988 62.13-18.121 70.74-17.14-5.49 6.421-32.61 17.492-55.5 26.312-5.8 2.238-6.44 10.309-0.98 13.277\" />\n      <path d=\"m1519.3 1513c-18.55-0.75-45.96-19.24-64.06-37.34-35.23-35.22-46.77-75.87-30.59-101.01 1.84 9.06 3.98 16.61 6.18 23.14 2.97 8.8 15.46 8.93 18.56 0.17 10.71-30.14 15.86-65.98 8.43-114.51 29.95 21.11 23.57 94.81 0.49 143.33-4.5 9.44-3.07 20.6 3.56 28.68 18.37 22.36 41.7 43.28 57.43 57.54\" />\n      <path d=\"m1509.1 1455.2c34.26 21.57 83.77 55.21 114.23 78.15 32.12 24.18 73.24 61.9 95.82 83.07 0.11-23.55-43.01-65.46-85.16-98.68-38.63-30.46-99.95-67.17-124.89-62.54\" />\n      <path d=\"m1934.1 1678.9c-54.88 23.95-112.83 18.78-136.1-6.22 32.92 6.32 52.59 6.1 71.04 3.5 9.4-1.32 13.97-6.1 11.2-13.03-2.91-7.28-4.67-9.13-9.03-15.35 10.45 0 19.48 2.01 32.11 12.58 5.18 4.34 12.31 5.47 18.59 3 16.34-6.44 22.62-10.99 27.97-14.08 6.04-3.47 5.33-12.46-1.23-14.82-17.78-6.39-36.27-10.12-59.96-10.12-36.44 0-59.47 4.02-97.92 13.11-48.4 11.44-132.31 41.16-181.92 25.68 56.52-8.62 104.25-22.99 144.49-34.87 8.34-2.46 12.76-11.56 9.53-19.64-5.35-13.4-10.98-26.65-10.98-26.65 14.19 3.85 22.23 14.15 30.27 27.13 3.49 5.62 10.17 8.42 16.62 6.93 30.06-6.96 55.54-10.74 89.91-10.74 25.21 0 48.94 3.5 82.34 17.06 5.78 2.35 12.27 2.41 18.09 0.13 8.71-3.41 15.85-7.33 25.57-11.25-3.97 16.38-30.29 45.7-80.59 67.65\" />\n      <path d=\"m1957.8 1702.6c-17.99 8.95-45.47 20.68-69.14 29.49 23.67 6.27 57.92-2.46 77.36-12.38 27.65-14.09 51.49-33.74 59.08-49.89-18.7 8.35-47.41 22.89-67.3 32.78\" />\n      <path d=\"m2151.6 1017.1c-33.34-32.451-57.39-41.76-88.27-48.908-29.15-6.75-63.48-10.871-99.65-11.774 13.93-11.347 54.01-14.589 90.57-9.128 9.51 1.421 14.66-10.801 7.03-16.649-14.24-10.902-34.7-18.101-64.07-23.051 29.57-14.492 83.94-2.519 101.9 42.61 3.1 7.781 9.48 13.8 16.59 18.242 19.29 12.027 36.14 30.699 35.9 48.658\" />\n      <path d=\"m1947.6 1786.5c-16.18 16.66-52.21 44.45-88.48 39.91 16.23-7.3 33.93-16.24 42.87-24.05 8.91-7.78 3.5-16-8.55-16.91-15.08-1.13-35.42 3.12-45.71 5.71-65 16.38-157.17 17.77-190.32-20.83 53.56 16.38 112.27 13.66 150.83 9.22 10.49-1.2 16.2-10.95 5.85-19.64-7.76-6.52-19.26-10.05-37.21-9.13-60.13 3.08-132.07-18.05-142.96-49.25 42.87 21.7 86.65 31.12 120.53 30.29 12.21-0.29 14.16-10.07 8.54-17.16-12.16-15.34-23.37-34.91-22.98-47.1 47.06 52.71 97.2 98.93 160.98 98.93 51.12 0 88.31-18.24 139.45-46.26-7.68 20.83-43.54 41.99-72.32 52.81-7.76 2.91-14.74 7.52-20.52 13.46\" />\n      <path d=\"m1937.2 990.63c11.22 7.25 33.57 14.761 43.41 17.551 20.43 5.79 33.68 7.37 45.52 8.9-4.2-10.07-17.56-20.791-40.01-27.17-10.77-3.058-33.16-6.121-48.92 0.719\" />\n      <path d=\"m1468.2 1056.1c-10.14 19.11-12.16 43.17-7.9 75.27 10.41 78.3 3.14 100.78-53.8 189.96-15.77 24.71-21.34 48.06-21.34 69.2 0 51.45 43.53 106.67 62.59 127.79-13.89 0-38.1-21.57-50.57-39.17-5.19-7.32-14.26-9.13-18.63 1.86-4.25 10.71-4.89 23.41-4.63 40.35-11.37-8.89-20.11-37.58-3.57-68.01 4.02-7.38 4.87-14.52 2.35-22-12.49-37.07-7.06-72.36 8.24-103.4 3.98-8.07 4.74-17.36 2.06-25.95-21.64-69.21 4.68-137.6 36.96-156.36-21.08 42.62-30.82 83.71-24.95 124.24 1.39 9.58 13.96 12.17 18.97 3.89 26.64-44.12 36.55-73.66 27.45-139.8-5.22-37.96-1.59-65.95 10.89-88.39 18.19-32.7 65.43-55.8 87.32-49.991-30.43 15.941-57.22 33.681-71.44 60.511\" />\n      <path d=\"m2022.1 2108.5c-2.79 10.99-0.12 25.3 2.63 33.23 2.58 7.45 10.45 20.04 17.53 25.15 1.28-8.19-1.36-22.18-3.75-29.04-2.76-7.88-9.98-23.31-16.41-29.34\" />\n      <path d=\"m2396.1 1443.3c6.94-3.42 10.58-7.42 10.37-12.8-0.33-8.47-9.88-20.51-27.74-26.65-6.2-2.14-9.5-10.2-3.92-15.98 5.92-6.12 8.05-12.92 5.46-19.68-3.53-9.24-16.46-20.04-42.24-20.58-6.51-0.14-10.61-5.96-9.05-12.19 2.25-8.9 2.03-15.72-1.56-20.5-4.68-6.23-14.88-9.66-28.71-9.66h-54.83c-6.21 0-11.06 5.42-10.3 11.59 2.84 23.09 0.88 49.62 1.59 58.03 0.77 9.18 3.8 16.16 8.75 20.18 4.35 3.54 10.26 4.67 17.62 3.99 7-0.64 11.76 3.59 10.55 10.98-4.2 25.47-0.5 44.78 9.68 51.62 5.28 3.54 12.36 3.38 18.81-0.67 5.67-3.56 12.95-1.18 14.45 6.7 3.78 19.85 11.15 28.8 17.84 30.38 5.1 1.2 9.96-1.66 14.32-7.13 4.04-5.07 11.19-6.26 15.33-0.39 8.89 12.59 20.1 20.06 28.47 21.09 3.86 0.48 7.2-0.49 10.48-3.05 3.86-3.01 6-7.02 6.56-12.25 1.15-10.79-4.93-25.29-15.42-38.2-3.8-4.68-2.88-11.7 3.49-14.83zm-326.54-226.03c-5.69-2.5-8.6-10.31-2.45-15.98 4.26-3.92 10.9-11.78 8.29-21.93-3.44-13.34-21.55-24.73-48.32-31.15-6.56-1.58-8.86-6.21-7.2-12 1.97-6.89 3.37-16.64-1.48-24.07-4.89-7.47-14.42-10.06-21.54-11.07-15.95-2.27-42.7 2.08-67.9-0.5-6.94-0.71-12.79 5.08-12.25 12.04 1.58 20.43 1 33.86-0.84 58.86-0.84 11.33 0.5 19.97 3.96 25.69 2.25 3.7 6.76 7.77 18.96 9.64 7.06 1.09 10.24 6.78 8.51 12.32-8.09 25.9-7.17 46.08 2.24 55.26 3.82 3.73 13.51 8.13 26.18 3.83 5.92-2 12.89 1.12 12.89 8.97 0 23.72 8.46 35.94 16.52 39.47 6.66 2.91 14.4 0.6 21.74-5.82 5.24-4.58 11.73-3.26 14.87 1.88 4.05 6.64 25.1 39.41 47.24 29.15 4.79-2.21 7.92-6.04 9.55-11.7 3.78-13.12-1.25-33.51-12.4-50.87-2.82-4.4-2.55-10.88 3.93-14.02 6.69-3.23 14.79-8.99 14.67-19.53-0.15-11.7-11.17-27.9-35.17-38.47zm37.74-32.46c6.41 2.08 13.96-0.65 20.57-6.9 4.53-4.29 11.94-4.16 15.35 2.5 9.04 17.67 19.44 23.85 26.67 23.49 5.87-0.27 10.55-4.65 13.53-12.2 2.7-6.83 10.23-7.11 14.06-4.66 5.49 3.52 33.5 20.32 46.03 4.75 2.77-3.45 3.72-6.94 2.99-10.98-1.67-9.27-11.91-20.7-26.98-29.47-5.36-3.12-6.15-9.74-2.53-14.48 5.66-7.42 7.86-14.69 4.79-20.33-3.71-6.81-15.82-13.4-38.48-9.89-7.9 1.23-13.06-7.51-9.53-14.2 4.64-8.82 4.77-17.22 0.02-23.23-7.94-10.03-27.07-12.13-51.15-5.43-6.78 1.88-11.41-1.56-12.22-8.16-1.09-8.82-4.44-15.47-10.23-19.17-5.96-3.82-14.34-4.72-22.63-1.47-16.15 6.34-33.01 17.23-50.55 24.49-5.86 2.43-8.24 9.42-5.09 14.92 7.92 13.79 13.46 26.59 20.69 44.39 3.6 8.84 7.77 14.82 12.41 17.76 2.91 1.85 7.84 3.87 17.16 0.11 5.45-2.19 12.06-0.07 13.1 7.26 3.2 22.71 11.69 37.54 22.02 40.9zm-117.13-121.6c-14.8-5.69-58.75-20.5-100.17-16.98-8.97 0.77-11.4 12.77-3.43 16.95 6.69 3.5 12.89 7.08 18.59 10.59 21.91 13.5 54.88 7.79 81.71 7.82 12.56 0.01 12.96-14.67 3.3-18.38zm-182.62 54.46c-3.78 4.16-5.35 9.64-5.98 14.07-0.4 2.79 0.45 5.62 2.28 7.77 2.1 2.44 4.66 6.03 4.66 9v7.91c0 8.68 8.51 15.75 18.97 15.75 10.45 0 18.96-7.05 18.96-15.75 0-7.25-2.85-11.75-8.38-13.45-4.86-1.5-9.02-2.3-12.38-5.18 3.87-2.43 10.38-4.13 17.34-5.52 6.83-1.36 9.7-8.63 4.45-14.52-4.24-4.76-10.99-7.15-19.99-7.15-8.96 0-15.67 2.38-19.93 7.07zm-23.38-126.3c13.37 4.043 25.01 3.641 30.12-10.707 1.8-5.062 8.32-8.8 13.9-5.711 18.83 10.45 34.27 13.649 42.72 8.149 5.21-3.391 7.7-10.438 6.93-18.879-0.56-6.16 5.69-11.52 11.61-10.262 18.16 3.84 28.74-0.109 32.68-5.468 4.21-5.75 1.02-12.641-0.89-16.551-3.47-7.117-0.59-11.68 5.14-14 5.66-2.278 34.5-12.418 30.58-30.489-0.81-3.761-2.97-6.48-6.78-8.57-9.21-5.051-26.34-5.129-41.31 0.871-5.99 2.399-11.84-0.281-12.87-6.871-0.85-5.5-4.11-12.281-11.63-13.871-8.81-1.848-23.28 3.652-35.24 20.52-3.9 5.5-12.43 5.5-16.04-0.93-2.06-3.688-6.69-9.84-14.59-9.57-10.82 0.382-22.61 12.281-31.89 31.66-3.1 6.472-9.7 5.91-13.32 4.511-11.74-4.519-24.44-2.011-29.72 11.168-4.09 10.231-6.9 32.672-11.72 50.352-1.71 6.289 2.41 12.629 8.84 13.699 14.21 2.391 26.66 5.879 43.48 10.949zm-120.54 142.09c1.29 3.21 4.21 5.8 8.74 7.57 6.36 2.49 8.04 7.65 5.52 13.01-6.48 13.74-4.53 23.54-0.67 28.07 2.26 2.65 7.26 5.07 14.74 3.21 7.19-1.79 11.67 1.66 12.1 8.89 0.52 8.83 4.32 17.35 10.11 21.16 3.55 2.35 7.31 2.68 11.49 1.04 4.62-1.83 7.63-5.23 8.94-10.11 1.94-7.27-0.26-16.18-5.84-23.27-4.69-5.97-1.81-11.63 2.31-14.32 6.8-4.46 10.67-10.15 10.21-16.24-0.53-7.09-6.61-13.39-16.47-17.75-5-2.21-7.58-7.17-5.12-12.7 1.8-4 3.49-9.85 1.48-14.89-1.5-3.75-5.01-6.78-10.41-9-4.9-2.02-15.77-5.67-23.85-8.37-4.84-1.62-10.02 1.03-11.68 5.87-2.18 6.39-5.32 13.25-9.44 22.07-2.09 4.45-4.15 10.79-2.16 15.76zm429.03 441.33c-7.38 4.39-11.7 10.17-11.86 15.88-0.15 5.4 3.8 10.37 10.11 15.4 5.67 4.52 6.07 12.36-0.24 16.17-15.06 9.1-24.28 22.22-23.49 33.48 0.63 8.86 7.58 13.59 13.28 16.03 5.7 2.45 6.89 7.9 4.89 12.85-4.19 10.38-6.34 26.52-1.28 36.66 2.52 5.05 6.58 8.17 12.39 9.55 1.8 0.42 3.47 0.63 5.05 0.63 3.55 0 6.59-1.09 9.33-3.31 7.98-6.46 12.07-21.26 11.73-32.63-0.19-6.52 4.11-10.49 10.56-9.92 7.64 0.66 12.99-1.16 15.93-5.93 4.82-7.85 4.19-24.43-8.39-43.63-4.3-6.57-0.83-13.92 6.91-14.96 4.75-0.64 10.98-2.06 13.43-7.18 2.56-5.34 0.76-13.56-4.8-22-1.38-2.08-10.5-15.66-16.71-26.5-3.27-5.7-10.32-7.98-16.29-5.23-10.6 4.88-25.22 11.47-30.55 14.64zm-17.86 430.75c-3.79 4.17-5.36 9.65-5.99 14.07-0.39 2.79 0.45 5.63 2.29 7.77 2.09 2.44 4.66 6.03 4.66 9v7.91c0 8.68 8.5 15.75 18.96 15.75s18.96-7.05 18.96-15.75c0-7.25-2.85-11.75-8.37-13.45-4.87-1.5-9.03-2.3-12.39-5.17 3.87-2.43 10.38-4.14 17.34-5.52 6.84-1.36 9.7-8.64 4.45-14.53-4.24-4.76-10.98-7.14-19.99-7.14-8.96 0-15.66 2.37-19.92 7.06zm-77.93 105.87c-2.94 5.06-3.87 9.59-2.78 13.48 1.44 5.17 6.22 8.78 10.07 10.84 5.69 3.06 6.29 8.62 3.87 13.19-5.07 9.57-6.23 18.22-2.33 24.19 2.95 4.51 8.73 7 18.52 6.67 6.27-0.21 9.9 4.15 10.01 9.64 0.18 9.15 3.49 17.71 9.52 22.35 4.01 3.08 8.46 3.95 13.25 2.58 4.31-1.23 7.09-3.78 8.49-7.81 2.26-6.51 0.22-15.57-4.76-22.82-3.94-5.74-2.75-11.59 4.1-14.54 5.96-2.57 9.49-6.5 9.75-11.51 0.3-5.91-4.07-14.77-17.35-21.74-5.9-3.1-6.79-8.46-3.97-13.52 2.45-4.4 3.46-8.21 2.51-11.62-1.44-5.16-6.94-8.94-11.3-11.2-1.84-0.96-11.12-5.28-19.98-10.6-4.5-2.7-10.3-1.47-13.37 2.78-5.59 7.74-11.59 15.06-14.25 19.64zm222.67-291.58c-8.84 4.48-14.37 10.6-14.79 16.37-0.39 5.4 4.04 9.54 7.7 12.42 6.08 4.78 5.29 13.25-0.9 16.44-20.23 10.41-29.01 24.19-28.72 33.27 0.18 5.39 3.78 9.41 10.4 12.62 6.25 3.05 7.31 8.87 4.63 13.77-5.38 9.84-9.7 24.29-6.02 33.75 1.81 4.64 5.28 7.57 10.91 9.24 1.98 0.58 3.88 0.87 5.7 0.87 3.36 0 6.49-0.98 9.47-2.97 9.26-6.18 15.77-20.97 16.76-31.93 0.59-6.45 5.28-9.23 10.62-8.71 6.04 0.59 14.24 0.05 19.07-7.17 6.12-9.15 4.47-24.57-3.58-39.7-3.63-6.83 0.87-13.85 7.45-14.45 7.97-0.73 13.76-3.5 16.27-8.19 2.63-4.92 1.83-11.98-2.39-19.26-4.35-7.48-13.47-19.89-19.73-28.56-3.31-4.59-9.57-5.92-14.43-3.02-10.66 6.38-26.14 14.05-28.42 15.21zm84.96-98.88c0.47 4.9 1.9 11.41 6.14 14.69 2.74 2.12 6.57 2.79 11.39 2.09 5.65-0.82 10.71 2.75 11.33 8.42 1.65 15.09 8.03 22.58 13.66 24.53 4.74 1.64 9.8-0.06 14.33-4.71 4.34-4.45 11.48-3.95 14.98 1.61 4.7 7.45 12.5 12.68 19.4 13.03 4.26 0.21 7.67-1.39 10.43-4.93 3.06-3.92 3.93-8.38 2.58-13.25-2.02-7.26-8.45-13.83-16.87-17.11-6.54-2.56-8.22-7.62-5.24-13.5 3.69-7.25 4.06-14.15 0.57-19.17-4.03-5.81-12.37-8.13-23-6.97-5.26 0.57-10.22-2.23-11.04-8.33-0.58-4.35-1.99-10.26-6.28-13.58-3.19-2.47-7.74-3.31-13.54-2.49-4.71 0.67-16.05 3.6-24.27 5.71-4.75 1.22-7.84 5.84-7.07 10.68 1.63 10.3 2.3 21.18 2.5 23.28zm-26.54-120.03c1.7 2.26 4.3 3.66 7.11 3.88 3.21 0.24 7.56 0.97 9.66 3.07l5.59 5.59c6.14 6.14 17.16 5.12 24.55-2.27 7.39-7.4 8.43-18.4 2.27-24.55-5.12-5.12-10.32-6.29-15.43-3.58-4.5 2.37-8.01 4.75-12.42 5.09 1.02-4.45 4.42-10.26 8.36-16.16 3.87-5.79 0.75-12.97-7.13-13.42-6.36-0.36-12.81 2.72-19.18 9.09-6.34 6.33-9.4 12.75-9.09 19.08 0.27 5.62 3.03 10.61 5.71 14.18zm149.01-102.57c-1.1 10.34-5.86 19.07-13.77 25.25-7.22 5.64-15.71 8.04-24.56 6.94-10.65-1.32-20.24-7.36-27.88-14.07-3.51-3.09-8.5-3.88-12.75-1.93-6.14 2.83-12.88 3.62-19.51 2.06-11.69-2.75-21.16-12.17-27-26.27-1.86-4.47-6.25-7.21-11.08-7.16-6.84 0.05-13.52-1.84-19.27-5.71-8.26-5.54-20.44-19.05-19.8-50.3 0.11-5.13-3.17-9.63-7.98-11.4-20.7-7.6-26.1-26.43-27.19-39.27-0.76-8.96 2.69-34.64-1.78-58.97-1.7-9.26-7.41-17.35-15.61-21.98-10.17-5.75-20.12-10.54-30.8-14.38-8.18-2.94-15.71 5.74-11.64 13.42 18.84 35.47 36.87 80.03 49.39 117.55 15.68 47.02 42.74 95.52 63.23 125.22 3.57 5.18 10.27 7.35 16.1 4.99 5.32-2.16 10.82-3.09 16.47-2.79 14.71 0.78 25.88 10.06 30.81 14.99 6.64 6.64 1.64 12.01 8.26 18.63 10.45 10.44 12.25 26.54 5.76 40.15-1.32 2.79-1.58 5.97-0.88 8.97l2.88 12.4-12.44-2.89c-2.95-0.69-6.06-0.47-8.8 0.81-13.75 6.46-30.54 4.06-40.28-5.68-6.62-6.62-11.99-1.62-18.54-8.17-4.89-4.89-14.29-16.1-15.08-30.9-0.51-9.57 2.53-18.72 9.04-27.29-5.39-7.07-11.53-15.94-18-26.12-5.1-8.04-17.5-4.34-17.36 5.18 0.38 25.41-1.17 47.37-2.42 60.06-0.98 9.95 1.72 19.97 7.91 27.82 15.16 19.23 37.26 33.17 48.62 39.65 5.35 3.05 11.61 4.09 17.67 2.98 13.18-2.42 30.74-8.21 38.68-8.21 18.84 0 27.1 10.78 30.82 18.88 1.47 3.21 4.49 5.41 8 5.85 11.41 1.42 20.77 6.63 26.67 15.13 4.8 6.93 6.65 15.32 5.53 23.97-0.48 3.67 0.92 7.28 3.79 9.62 7.25 5.88 12.6 13.6 14.92 21.97 2.96 10.69 0.86 21.36-5.92 30.05-6.58 8.43-15.96 12.77-26.42 12.24-8.25-0.42-16.5-3.85-23.52-9.49-2.82-2.27-6.68-2.93-10.09-1.69-6.6 2.41-13.65 2.55-20.37 0.22-10.69-3.71-18.86-12.93-23.22-25.71-1.14-3.35-3.82-6.04-7.26-6.87-4.16-1.02-7.96-2.83-11.31-5.38-12.99-9.91-11-30.15-15.47-48.81-1.59-6.63-3.95-14.52-12.65-19.36-7.75-4.32-13.9 1.28-11.69 8.11 9.02 27.89 12.48 53.78 10.64 78.56-0.64 8.71 1.48 17.38 6.11 24.78 8.08 12.93 19.07 26.29 22.76 32.81 7.44 13.12 8.39 26.84 2.62 37.63-2.66 4.98-6.53 9.04-11.39 12.07-3.9 2.42-5.89 7.1-4.77 11.55 3.84 15.13 2.24 29.6-4.94 40.33-5.14 7.69-12.73 12.76-21.8 14.82-3.75 0.85-6.85 3.46-8.06 7.11-4 11.99-11.3 24.09-21.85 31.13-9.32 6.22-20.08 7.79-31.13 4.53-11.28-3.32-19.33-10.44-23.28-20.6-4.42-11.33-3.03-24.3 0.61-35.43 1.21-3.69 0.42-7.75-2.26-10.57-5.36-5.64-8.4-12.65-8.65-20.43-0.44-13.53 7.29-27.48 20.96-38.95 3.56-2.99 4.77-7.96 3.03-12.27-1.65-4.11-2.35-8.45-2.03-12.9 0.92-12.7 10.09-24.36 25.18-32 2.12-1.07 16.09-7.06 27.07-14.47 7.58-5.12 12.42-13.47 12.97-22.6 1.77-29.52-4.87-61.15-20.42-96.74-3.72-8.5-16.09-7.38-18.25 1.64-14.44 60.19-36.18 116.51-95.42 189.36-6.99 8.6-9.76 19.79-7.82 30.7 5.19 29.11 2.57 55.7-1.45 80.14-0.85 5.17 2.07 10.11 6.93 12.06 5.59 2.25 10.39 5.57 14.34 9.96 9.85 10.96 11.19 25.41 11.19 32.39 0 9.39-7.34 9.66-7.34 19.02 0 14.77-10.1 27.42-24.31 32.47-2.91 1.03-5.34 3.09-6.97 5.71l-6.73 10.8-6.76-10.84c-1.65-2.65-4.14-4.66-7.07-5.75-14.14-5.23-24.19-18.71-24.19-32.39 0-9.36-7.33-9.63-7.33-18.89 0-6.92 1.28-21.49 11.19-32.52 5.1-5.68 11.61-9.57 19.43-11.66 4.1-1.09 7.26-4.34 7.99-8.52 3.07-17.68 5.51-35.83 4.83-54.99-0.3-8.65-8.83-17.67-19.15-8.54-11.25 9.95-15.68 25.01-17.71 36.51-4.46 25.31-15.21 42.68-25.93 60.66-12 20.15-10.38 31.57-7.8 49.18 0.92 6.24 4.32 11.84 9.43 15.52 8.78 6.32 19.82 10.71 21.6 11.64 12.66 6.58 24.24 18.41 21.61 35.48-0.54 3.47 0.91 6.95 3.57 9.25 10.25 8.85 15.76 19.91 15.18 31.24-0.37 7.08-3.13 13.53-7.81 18.74-2.48 2.76-3.31 6.59-2.25 10.14 2.57 8.59 2.64 17.49-0.06 25.26-3.44 9.89-10.99 16.95-21.27 19.88-10.6 3.02-21.28 0.96-30.08-5.8-6.88-5.29-12.02-13.15-14.75-22.08-1.09-3.53-3.91-6.19-7.5-7.12-8.43-2.21-15.52-7.07-20.13-14.13-5.62-8.59-6.96-19.12-4.08-30.14 0.92-3.5 0.09-7.27-2.4-9.89-13.5-14.24-9.28-30.66-2.89-41.66 2.82-4.85 11.37-14.49 17.58-23.66 3.02-4.45 6.69-11.08 5.22-19.59-1.38-7.93-8.92-10.44-14.33-5.54-15.03 13.63-26.93 30.06-42.14 51.37-3.65-20.65 20.17-54.29 45.93-82.81 14.7-16.27 27.39-30.88 35.78-48.99 4.28-9.23-6.76-17.95-14.71-11.62-17.2 13.68-40.03 32.08-56.64 47.23 0.02-27.43 61.31-72.23 102.73-113.65 23.23-23.23 47.07-49.92 68.64-81.49 5.29-7.74-2.16-17.82-11.1-15.01-16.87 5.3-33.49 12.08-49.39 20.06-7.38 3.71-12.71 10.59-14.27 18.7-3.81 19.84-16.2 52.62-40.75 58.75 8.32-13.42 13.59-25.12 16.97-35.03 2.84-8.36-6.68-15.19-13.94-10.18-23.09 15.92-44.19 34.65-60.06 48.42 7.4-46.2 95.92-102.96 183.98-126.37 9.61-2.56 17.97-8.51 22.3-17.47 27.42-56.65 46.02-126.14 46.02-213.14 0-26.49-3.72-55.72-10.48-85.82-2.04-9.08-14.55-10.13-18.04-1.5-10.75 26.54-19.24 50.73-26.47 75.28-2.46 8.35-1.7 17.31 2.13 25.13 4.01 8.18 10.13 17.57 16.76 26.47 10.21 13.73 11.64 29.12 6.08 40.72-1.96 4.09-4.77 7.56-8.3 10.34-3.7 2.91-5.17 7.88-3.54 12.29 7.82 21.07 5.67 40.89-7.43 52.46-3.27 2.88-7.31 4.65-11.44 6.02-3.73 1.23-6.61 4.32-7.4 8.18-2.37 11.64-7.66 23.77-17.25 31.53-8.55 6.93-19.19 9.15-30.75 6.42-11.33-2.68-20-9.45-25.05-19.58-5.74-11.49-6.09-25.78-3.58-38.33 0.74-3.72-0.41-7.61-3.24-10.15-7.12-6.39-11.36-14.76-12.03-24.23-0.93-13.05 4.96-26.6 15.97-37.99 3.24-3.35 3.84-8.47 1.61-12.56-2.79-5.11-4.16-10.65-4-16.38 0.34-12.36 8.06-23.93 21.17-31.72 6.77-4.02 25.4-11.35 38.84-18.69 6.64-3.63 11.53-9.76 13.68-17 9.38-31.59 20.8-62.63 36.31-98.63 3.28-7.61 9.92-24.78 4.44-40.32-5.48-15.55-17.77-8.82-21.23-2.86-8.3 14.29-13.89 25.06-22.58 41.95-7.67-14.98 1.8-40.14 18.56-72.77 4.01-7.81 4.06-17.04 0.17-24.91-6.97-14.08-14.43-27.73-22.31-40.69-2.93-4.81-8.21-6.57-13.62-3.75-5.41 2.83-6.54 9.56-4.83 13.41 8.03 18.07 10.6 37 6.47 51.29-3.16 10.96-10.02 19.17-19.85 23.71-22.09 10.23-43.3-1.45-59.11-19.45-3.95-4.5-10.14-6.11-15.86-4.35-8.22 2.51-16.7 2.17-24.51-1.25-12.4-5.42-21.24-17.56-25.35-34.02-1.5-5.99-6.52-10.59-12.65-11.29-8.95-1.03-17.03-4.68-23.27-10.77-8.59-8.39-16.69-24.06-12.27-52.76 0.96-6.24-1.98-12.44-7.52-15.46-19.41-10.59-20.72-34.15-19.57-49.73 1.97-26.8 2.43-39.72 0.17-63.74-1.01-10.66-7.28-20.12-16.74-25.15-10.66-5.69-23.18-11.18-37.23-16.19-8.55-3.04-16.41 4.23-12.98 13.9 3.43 9.66 8.89 13.07 16.08 15.72 6.08 2.24 11.25 5.71 15.47 10.4 9.84 10.96 11.18 25.41 11.18 32.38 0 9.4-7.33 9.66-7.33 19.03 0 14.77-10.1 27.42-24.32 32.46-2.9 1.03-5.33 3.1-6.96 5.72l-6.73 10.8-6.76-10.84c-1.65-2.65-4.14-4.66-7.07-5.75-14.15-5.23-24.19-18.71-24.19-32.39 0-9.37-7.33-9.63-7.33-18.89 0-6.92 1.28-21.49 11.18-32.52 3.21-3.56 6.96-6.42 11.25-8.57 5.89-2.96 8.13-10.29 5.05-16.12-4.18-7.93-9.02-14.65-13.34-19.87-5.84-7.05-14.02-11.74-23.04-13.26-23.34-3.94-56.2-7.68-95.34-5.92-8.37 0.38-12.21 8.82-7.08 16.54 5.14 7.72 11.06 10.5 18.15 12.59 9.75 2.87 20.74 6.95 29.06 10.11 14.89 5.65 24.92 17.39 23.04 34.86-0.39 3.58 1.25 7.05 4.09 9.25 9.01 7 14.36 16.18 15.13 26.42 0.63 8.42-2.03 16.59-7.39 23.47-2.27 2.92-2.9 6.74-1.61 10.21 3.27 8.75 3.96 18.11 1.72 26.5-2.87 10.72-10.09 18.85-20.34 22.91-9.95 3.93-20.24 2.91-28.98-2.85-6.89-4.54-12.27-11.69-15.45-20.11-1.28-3.39-4.28-5.91-7.85-6.57-6.91-1.27-13.05-4.72-17.67-10.14-7.37-8.66-9.72-20.85-6.93-34.16 0.71-3.38-0.23-6.95-2.66-9.41-11.56-11.64-10.61-28.41-4.59-41.27 3.89-8.3 6.59-14.28 8.39-19.39 3.16-8.96 0.9-18.92-5.79-25.67-3.39-3.42-6.81-6.43-10.01-9.01-7.89-6.36-18.18-8.89-28.15-7.05-46.26 8.54-92.77 24.98-133.66 40.12 3.61-12.7 23.18-23.67 39.42-31.06 7.43-3.39 13.84-8.67 18.51-15.37 55.38-79.49 122.65-111.42 160.35-102.19-53.31 17.641-85.5 40.391-114.43 73.269-7.69 8.75-6.07 22.36 19.95 17.69 21.96-3.93 33.71-15.92 39.87-20.89 18.99-15.299 38.06-23.729 51.11-28.178 9.74-3.32 17.18-11.281 20.01-21.172 2.1-7.301 7.01-37.379 11.57-50.879 6.9-20.41 23.44-29.012 40.99-27.062 4.2 0.461 8.34-1.071 10.64-4.629 15.11-23.43 31.36-27.84 40.52-28.16 6.28-0.219 12.31 1.359 17.66 4.468 3.79 2.203 8.48 1.852 11.81-0.988 10.51-8.969 22.2-13.879 33.41-13.879 13.27 0 21.96 6.141 27.28 13.66 2.32 3.27 6.23 5.039 10.17 4.348 15.53-2.731 30.65-1.188 41.19 4.582 8.64 4.73 14.26 12.07 16.24 21.238 3.87 17.84-6.26 34.461-26.95 45.672-3.67 1.981-5.76 5.938-5.43 10.098 0.59 7.441-1.32 14.582-5.71 20.57-6.87 9.371-18.64 14.512-33.08 14.859-4.4 0.102-8.23 2.883-9.69 7.043-2.55 7.258-7.13 13.321-13.41 17.411-8.6 5.588-23.13 9.448-45.98 0.476-3.97-1.558-8.57-0.707-11.43 2.462-13.53 15.04-32.66 11.41-45.25 7.6-19.2-5.81-31.95-9.3-48.44-11.492-12.79-1.699-23.21-0.968-37.78 4.802-18.27 7.24-14.1 18.83 3.14 18.83 44.33 0 98.72 7.39 129.04 16.66 7.79 2.38 16.14 1.8 23.6-1.47 15.72-6.9 33.96-10.36 54.59-10.36 12.53 0 25.94 1.27 40.2 3.82 20.12 3.6 37.36 9.01 48.13 12.84 8.41 2.99 17.76 3.33 25.99-0.11 28.95-12.13 46.81-29.03 70.92-29.03 22.53 0 32.87 15.21 36.13 21.5 2.21 4.28 6.8 6.72 11.57 6.12 23.71-2.99 42.52 2.43 52.99 15.68 4.55 5.75 7.08 12.49 7.58 19.65 0.38 5.31 4.2 9.79 9.47 10.56 15.26 2.23 26.87 9.07 32.73 19.8 4.33 7.95 4.98 16.95 2.15 25.83-1.42 4.44-0.07 9.25 3.49 12.27 11.67 9.89 19.14 21.03 21.1 31.91 1.71 9.48-0.67 18.58-6.9 26.32-11.97 14.87-32.2 17.49-55 7.93-4.13-1.74-8.85-0.8-12.09 2.31-5.65 5.41-12.71 8.59-20.47 8.95-12.22 0.59-24.19-5.72-34-17.42-2.89-3.45-7.51-5.01-11.79-3.62-8.12 2.63-18.21 2.63-28.97-1.76-4.64-1.9-8.17 4.83-4.43 7.61 19.68 14.58 30.57 30.94 36.21 39.97 2.11 3.38 5.6 5.64 9.53 6.25 10.37 1.6 19.81 3.8 28.69 6.53 3.72 1.14 7.73 0.66 11.09-1.29 40.44-23.47 80.5-22.88 91.14-8.47-26.52 2.21-47.35 5.85-60.75 12.88-4.85 2.55-8.56 9.39 2.3 16.18 8.9 5.57 14.28 6.42 26.98 6.42h61.92c27.77 0 47.18 14.28 50.76 35.25 0.82 4.81 4.32 8.65 9.05 9.8 19.67 4.77 33.91 15.39 39.55 30.12 2.7 7.07 3.07 14.42 1.25 21.42-1.25 4.85 0.69 9.92 4.78 12.8 12.96 9.13 20.92 21.4 21.41 34.17 0.28 7.31-1.96 14-6.39 19.59-2.87 3.63-3.06 8.66-0.86 12.73 6.72 12.42 9.89 25.2 8.71 36.26\" />\n      <path d=\"m1525.3 1210.3c-7.8 6.28-14.1 15.48-10.72 31.15 2.83 13.18 12.42 15.12 17.48 10.93 24.67-20.44 52.51-44.79 71.56-63.84 3.06 17.97-38.76 61.38-69.98 87.19-7.63 6.3-11.37 16.15-10.01 25.96 10.58 76.36-17.05 124.29-26.78 128.13 17.66-66.18 10.99-114.4 2.37-159.14-10.24-53.2-16.2-130.44 14.86-160.24-2.29 26.02-5.67 45.68-4.07 69.43 0.59 8.72 7.75 12.63 14 6.51 10.08-9.87 21.11-17.21 30.55-27.98 5.2-5.92 6.49-13.08 5.07-20.83-3.01-16.42-2.01-36.07 9.93-53.57 1.55 11.04 2.47 23.31 4.36 33.32 1.56 8.32 13.28 10.08 18.4 3.34 11.99-15.77 22.64-31.13 32.37-44.64 5.47 31.96-37.87 84.66-99.39 134.28\" />\n      <path d=\"m2315.2 1266s-1.17-8.37-2.63-16.99c-0.9-5.36-4.44-9.97-9.47-12.01-14.13-5.72-24.83-14.65-26.65-27.03 0 0 9.25 3.9 21.17 6.95 6.65 1.7 12.75-4.09 11.46-10.84-4.84-25.38-14.55-41.76-40.61-72.85 0-34.03-13.89-54.78-52.13-78.59 39.95-4.5 69.76 32.27 73.8 61.9 1.24 9.16 4.54 17.96 10.18 25.28 9.08 11.82 17.23 27.43 21.57 38.93 12.8 34 6.4 74.75-6.69 85.25\" />\n      <path d=\"m2569.5 1177.9c-8.43 0-15.26-6.83-15.26-15.26 0-8.42 6.83-15.25 15.26-15.25 8.42 0 15.25 6.83 15.25 15.25 0 8.43-6.83 15.26-15.25 15.26\" />\n      <path d=\"m3345.8 916.88c-28.5 21.91-103.86 76.441-123.28 74.351 40.4-26.582 92.51-67.199 115.15-86.101 3.76-3.129 10.15-10.078 7.7-17.848-2.19-6.972-9.61-5.57-14.28-1.461-117.45 103.52-184.23 121.64-261.55 142.61-8.19 2.22-33.64 9.6-56.22 16.02-21.9 6.21-42.07 17.38-58.89 32.71-20.43 18.61-43.53 37.32-69.93 52.21-50.03 28.21-105.07 42.23-136.81 30.29 82.64-8.83 133.58-37.66 183.97-81.39 6.56-5.69 3.47-13.68-9.75-11.38-13.21 2.31-20.14 9.29-24.9 13.79-21.09 19.91-69.56 53.81-153.51 50.84-11.56-0.41-16.75 0.06-31.73 6.04-36.2 14.46-86.6 22.53-103.79 12.19 39.28-4.21 72.89-12.42 109.69-30.79 5.92-2.96 11.36-7.16 21.92-6.66 55.47 2.63 93.89-12.16 116.67-25.32 8.47-4.89 15.44-9.92 21-14.47 5.98-4.9 3.76-14.49-3.74-16.38-38.09-9.58-98.79-2.29-141.94 13.48 10.74-18.14 60.75-31.82 102.22-31.82 21.69 0 42.27 2.94 57.76 9.39 6.93 2.88 14.57 3.51 21.92 1.97 25.98-5.44 82.85-17.83 108.21-27.09 6.39-2.33 9.23-5.34 9.13-9.52-0.09-3.61-2.95-8.14-10.72-10.03-26.13-6.35-96.83-19.319-188.7-2.791-69.52 12.501-114.57 37.321-132.02 54.781-10.21 10.2-26.19 34.41-3.93 53.72-24.64 4.64-41.71-34.92-9.54-67.19 20.3-20.37 68.34-46.792 142.11-60.061 34.15-6.149 65.52-8.348 92.98-8.348 11.95 0 23.15 0.41 33.52 1.109 9.44 0.629 14.43-11.089 7.31-17.332-33.43-29.339-80.43-47.816-126.83-47.816-87.21 0-155.51 69.387-215.77 130.61-4.9 4.98-18.97 20.8-27.09 28.4-5.51 5.17-4.31 14.88 2.99 19.47 18.65 11.71 26.59 16.87 29.77 32.35-14.09-10.92-27.29-16.24-40.65-17.83-8.78-1.05-26.56-1.95-44.96 9.35-17.16 10.54-34.77 17.1-66.73 27.18-6.58 2.07-6.21 11.56 0.53 13.03 8.21 1.8 16.32 2.97 23.08 3.69 8.39 0.88 16.84-1.1 23.92-5.69 4.91-3.19 10.13-7.07 14.35-10.85 1.99 8.48-2.37 16.33-7.93 21.95-4.51 4.56-5.65 11.5-3.01 17.34 9.45 20.88 22.55 38.22 49.75 43.43 23.16 4.45 42.47-4.93 61.13-14.03 26.58-12.95 42.06-15.14 74.72-16.39 36.76-1.42 87.08-3.71 135.24-23.56 47.8-19.71 75.38-39.71 99.71-57.37 28.02-20.32 52.22-37.88 97.27-49.93 16.84-4.51 35.17-8.37 54.57-12.47 75.92-16.02 170.41-35.95 253.55-112.48 4.37-4.031 6.82-8.472 6.82-13.73 0-5.66-5.17-8.242-10.46-4.172zm16.54 31.91c-86.99 80.081-184.31 100.61-262.51 117.11-19.15 4.04-37.24 7.86-53.59 12.23-41.64 11.14-64.51 27.74-91 46.95-25.19 18.28-53.75 38.99-103.64 59.56-51.26 21.13-103.54 23.06-141.69 24.98-33.08 1.67-44.19 3.46-67.19 14.49-20.53 9.85-43.67 21.26-73.06 15.62-36.32-6.97-53.22-31-64.37-56.25-2.42-5.48-7.52-9.3-13.47-9.98-18.9-2.17-49.81-7.95-67.58-22.96-4.68-3.95-5.34-11.75 1.86-15.76 9.86-5.48 23.69-9.69 39.67-14.54 21.15-6.42 45.12-13.7 63.22-25.34 23.66-15.22 49.41-41.37 76.67-69.07 29.86-30.342 63.7-64.728 101.09-90.908 30.34-21.242 59.87-34.891 89.4-41.231 7.46-1.601 9.81-11.082 3.93-15.941-7.01-5.801-14.13-12.289-20.76-19.379-3.08-3.293-7.23-5.332-11.7-5.769-18.74-1.84-39.12-10.442-36.04-31.981 5.83 4.668 11.04 7.969 16.98 9.789 4.64 1.43 9.12-2.469 8.7-7.308-0.48-5.551 0.87-11.711 5.03-16.661 10.4 18.649 31.2 39.34 35.62 43.707 14.57 14.411 31.09 25.981 42.31 33.114 6.65 4.226 14.1 7.097 21.91 8.187 19.49 2.723 38.66 8.27 56.67 16.129 4.02 1.762 8.82-0.129 10.54-3.996 1.72-3.871 0.08-8.82-3.97-10.66-18.82-8.57-46.56-22.742-75.61-40.582-4.61-2.828-9.68-4.91-15.02-5.762-24.49-3.918-44.21-25.019-35.27-44.949 5.26 8.211 10.09 13.59 15.14 17.23 4.72 3.403 11.1-0.179 10.88-6-0.31-7.75 2.89-14.539 7.91-19.918 6.5 28.707 20.28 39.43 24.88 42.27 37.31 23.008 74.71 41.059 90.58 46.969 4.93 1.832 7.8 7.519 4.84 13.968l-6.76 14.75c-2.29 5.012-0.62 10.973 4 13.973 17.37 11.277 32.82 24.828 45.3 40.027 9.7 11.813 16.32 15.922 28.35 19.102 10.48 2.762 18.12 9.621 22.58 18.01 4.42 8.31 10.11 10.03 17.38 8.03 78.06-21.419 139.82-37.931 253.95-138.51 8.8-7.761 16.5-9.793 22.15-9.793 8.89 0 15.6 5.102 19.27 11.121 2.92 4.782 4.2 9.832 4.81 14.641 0.5 3.891 2.03 7.539 4.32 10.719 2.4 3.34 4.42 7.48 5.35 12.269 2.94 15.09-1.23 28.332-12.06 38.301\" />\n      <path d=\"m1746.6 2131.1c-4.17 18.91 0.91 38.51 6.84 61.38 1.86 7.16 3.79 14.6 5.52 22.38 1.58 7.09 11.68 7.11 13.34 0.04 2.96-12.65 4.25-24.77 4.23-35.18-0.05-19.5-4.16-36.62-12.27-51.16-4.26-7.64-15.77-6-17.66 2.54zm-10.39-82.67c-32.77-33.73-44.1-45.25-55.28-65.92-9.32-17.23-18.45-25.03-33.93-28.34-9.77-2.09-30.23 0-48.19 3.07 7.45-11.47 23.96-17.2 41.05-20.14 12.7-2.18 17.19-12.01 13.94-22.38-4.06-12.98-10.67-35.09-13.26-43.95-26.82-91.57-57.22-195.35-142.77-241.26-48.84-26.21-109.55-31.9-160.03-17.14-7.3 2.14-10.88 11.52-2.12 15.42 8.76 3.89 18.88 0.43 24.58-0.63 12.7-2.37 25.46-3.55 38.06-3.55 51.68 0 99.7 23.94 104.1 40.9-33.39-18.09-68.14-28.33-107.35-26.94-9.47 0.34-12.54 12.89-4.3 17.56 23.61 13.38 48.96 29.96 74.8 50.45 64.91 51.48 97.36 102.41 106.97 132.62 14.99 47.11-17.96 74.29-42.46 60.71 36.01-9.83 28.93-39.59 24.22-55.2-7.94-26.34-39.04-74.41-100.57-123.2-81.21-64.41-157.23-88.85-186.14-96.36-9.14-2.38-14.71 0.85-16.88 4.66-2.53 4.46-1.07 10.22 3.81 15.04 0.03 0.03 0.04 0.06 0.07 0.08 0.06 0.07 0.13 0.12 0.19 0.18 24.32 25.91 61.12 57.74 80.25 73.89 7.26 6.13 16.11 10.12 25.54 11.3 70.79 8.87 157.42 85.42 152.97 111.92-29.62-35.8-88.15-82.55-141.9-95.23-8.06-1.9-14.81 6.26-11.51 13.86 4.06 9.3 9.58 20.45 16.92 32.41 18.13 29.55 51.38 70.36 106.99 96.63 4.09 1.93 6.44 4.71 9.24 8.8 8.4 12.26 37.9 52.34 99.24 85.75-23.04 3.71-82.39-31.45-116.72-77.38-60.06-28.48-95.89-72.54-115.38-104.49-9.05-14.83-15.5-28.42-19.93-39.2-4.04-9.83-7.06-20.86-17.54-29.63-10.49-8.78-17.94-0.26-13.63 10.15 12.93 31.22 27.01 58.11 42.53 81.27 27.36 40.84 64.21 75.24 103.68 104.35-32.72-2.52-86.87-53.59-115.56-96.4-19.3-28.82-36.41-63.11-51.84-103.98-9.61-25.46-24.7-48.5-44.15-67.51-15.48-15.13-31.71-31.06-37.81-36.83-64.43-60.92-120.07-113.53-180.45-275.96-2.14-5.76-10.28-12.17-16.93-5.88-6.66 6.28-3.36 17.08-1.44 22.32 11.13 30.36 36.11 91.69 94.95 178.56-38.38-20.65-87.53-126.18-106.41-169.8-3.469-8.01-9.403-10.79-14.34-6.15-4.942 4.64-3.949 12.33-1.336 19.85 41.177 118.58 123.13 187.67 188.98 243.19 16.79 14.16 32.66 27.53 46.72 40.74 37.54 35.25 51.94 64.99 68.61 99.44 14.53 30.05 31.01 64.1 67.45 108.49 36.74 44.76 84.92 73.2 120 94.12 35.25 21.02 44.77 28.05 64.07 54.88 13.54 18.82 27.61 38.23 52.88 46.13 31.02 9.7 53.76-1.79 74.88-18.53 4.55-3.61 6.34-9.74 4.42-15.24-2.88-8.26-3.18-18.19 2.93-26.93 3.83 16.04 11.77 29.53 27.19 36.2 8.06 3.49 19.45 7.68 31.44 10.61 6.64 1.62 11.25-6.49 6.49-11.4zm30.95 33.28c-3.13 0.49-5.53 2.6-6.51 5.43-0.97 2.83-0.38 5.8 2.02 8.23 21.24 21.56 32.83 50.35 32.91 84.31 0.06 25.46-6.08 47.38-11.24 61.29-6.41 17.29-14.69 31.45-22.78 38.94-2.42 2.25-5.8 3.31-9 2.5-4.6-1.15-7.54-5.37-7.23-9.9 1.91-28.05-4.31-52.04-10.33-75.25-8.52-32.86-16.6-64.06 3.75-96.23 2.01-3.18 4.04-7.54 2.06-13.1-1.99-5.56-6.39-7.66-11.05-8.68-13.29-2.9-25.88-7.27-35.37-11.03-6.78-2.69-14.44-1.52-20.2 2.96-23.84 18.5-52.57 32.74-91.01 20.73-31.33-9.8-47.98-32.83-62.64-53.17-16.82-23.31-26.88-31.52-58.34-49.64-36.62-21.1-86.15-51.07-125.02-98.43-37.87-46.14-54.87-81.27-69.87-112.27-15.85-32.74-29.53-61.02-64.5-93.85-13.69-12.86-29.37-26.08-45.96-40.06-67.63-57.02-151.8-127.98-194.7-251.51-5.231-15.06-7.567-37.16 19.543-51.71 3.972-2.12 7.574-4.93 10.203-8.6 3.035-4.23 11.311-14.91 24.571-14.91 11.94 0 21.67 8.94 27.05 23.44 58.83 158.27 110.4 207.02 175.68 268.75 4.38 4.15 12.83 7.44 21.23 1.13 6.08-4.58 13.77-6.78 21.23-6.78 5.36 0 13.75 2.12 20.99 4.24 5.66 1.67 11.74 1.14 17-1.53 23.2-11.79 49.83-18.74 77.48-20.86 5.65-0.43 10.16-4.89 10.5-10.55 0.61-9.97 1.26-20.79 1.41-23.41 0.3-5.12 5.52-8.87 10.73-8.14 23.39 3.2 73.26 7.41 120.06 5.17 14.45-0.7 27.95-10.22 43.23-28.68 2.4 7.74 2.14 16.25-1.49 23.95-2.47 5.25 1.92 11.2 7.64 10.23 9.05-1.53 16.4-5.25 23.32-8.54-0.5 12.27-7.54 20.67-18.86 24.71-8.56 3.05-21.13 5.14-35.97 0.31-6.49-2.12-13.3-3.1-20.12-2.78-38.85 1.79-76.5-0.85-99.22-3.08-6.06-0.59-11.77 2.74-11.57 10.22 0.14 5.72 4.68 10.38 10.38 10.89 21.56 1.94 43.03 6.72 63.32 14.38 9.28 3.5 19.23 4.76 29.11 3.93 15.93-1.36 39.52-5.01 62.55-12.91 18.69-6.42 32.58-12.37 48.26-20.11 0 8.04-3.9 14.75-8.6 20.64-3.31 4.15-2.56 9.95 3.66 11.81 8.15 2.43 18.5 0.71 27.5 0.07-7.56 17.98-33.47 23.15-54.11 8.07-3.1-2.27-7.42-3.56-11.03-2.27-11.23 3.98-22.52 6.88-33.1 9-7.81 1.56-10.25 11.41-4.12 16.5 26.16 21.74 48.34 50.91 67.19 88.27 22.75 45.07 37.77 96.35 51.02 141.59 12.12 41.39 23.58 80.48 38.77 107.85 11.64 20.98 31.29 40.7 48.63 58.1 13.2 13.24 24.72 24.6 31.24 35.23 3.83 6.25 0.77 13.39-10.3 15.11\" />\n      <path d=\"m115.07 321.13v-106.14c0-4.148-0.742-7.207-2.218-9.187-1.481-2-4.211-2.992-8.192-2.992-5.8397 0-10.07 1.632-12.695 4.882-2.621 3.258-3.9335 8.739-3.9335 16.45v96.988h-56.113v-99.91c0-7.367-1.25-12.278-3.7461-14.731-2.4961-2.449-6.793-3.679-12.887-3.679-3.9805 0-6.7071 0.992-8.1875 2.992-1.4805 1.98-2.2227 5.039-2.2227 9.187v106.14c0 4.152 0.74219 7.211 2.2227 9.199 1.4805 1.992 4.207 2.981 8.1875 2.981h89.375c3.981 0 6.711-0.989 8.192-2.981 1.476-1.988 2.218-5.047 2.218-9.199\" />\n      <path d=\"m223.98 213.22c4.657 0 8.911 0.781 12.762 2.34 3.852 1.57 7.172 4.39 9.965 8.453 2.793 4.058 4.949 9.648 6.477 16.758 1.519 7.109 2.285 16.21 2.285 27.289 0 10.75-0.781 19.66-2.352 26.722-1.566 7.071-3.746 12.699-6.539 16.891-2.793 4.18-6.109 7.109-9.965 8.75-3.851 1.656-8.058 2.476-12.633 2.476-4.398 0-8.503-0.82-12.312-2.476-3.809-1.641-7.129-4.57-9.965-8.75-2.84-4.192-5.058-9.82-6.668-16.891-1.605-7.062-2.41-15.972-2.41-26.722 0-10.661 0.719-19.528 2.156-26.598 1.442-7.063 3.535-12.699 6.285-16.883 2.75-4.187 6.051-7.129 9.903-8.816 3.851-1.692 8.187-2.543 13.011-2.543zm0-10.41c-9.39 0-17.792 1.351-25.199 4.062-7.406 2.699-13.644 6.801-18.722 12.25-5.082 5.457-8.954 12.25-11.618 20.379-2.668 8.121-4 17.641-4 28.559 0 11.011 1.399 20.613 4.192 28.82 2.793 8.211 6.769 15 11.93 20.383 5.164 5.367 11.41 9.386 18.726 12.047 7.32 2.679 15.555 4 24.691 4 9.227 0 17.524-1.321 24.883-4 7.364-2.661 13.629-6.7 18.789-12.118 5.164-5.421 9.098-12.211 11.809-20.382 2.711-8.161 4.062-17.739 4.062-28.75 0-10.918-1.312-20.438-3.933-28.559-2.625-8.129-6.477-14.922-11.555-20.379-5.078-5.449-11.316-9.551-18.726-12.25-7.407-2.711-15.848-4.062-25.329-4.062\" />\n      <path d=\"m347.24 214.99h57.004v106.14h-41.64v-25.77c0-19.211-1.207-35-3.622-47.359-2.41-12.352-6.328-23.359-11.742-33.012zm-26.66 0h7.492c5.84 7.793 10.2 17.762 13.075 29.91 2.875 12.141 4.316 28.961 4.316 50.461v25.77c0 4.23 0.781 7.32 2.352 9.262 1.566 1.949 4.332 2.918 8.312 2.918h64.746c3.981 0 6.711-0.989 8.192-2.981 1.476-1.988 2.218-5.047 2.218-9.199v-106.14h11.426c5.586 0 8.379-2.656 8.379-7.988v-24.25c0-3.719-0.719-6.48-2.156-8.25-1.442-1.781-3.938-2.668-7.492-2.668-5.5 0-9.266 1.066-11.297 3.238-2.032 2.149-3.047 6.621-3.047 13.391v14.348h-91.028v-14.348c0-6.77-0.996-11.242-2.98-13.391-1.988-2.172-5.734-3.238-11.238-3.238-3.637 0-6.157 0.887-7.551 2.668-1.399 1.77-2.098 4.531-2.098 8.25v24.25c0 5.332 2.793 7.988 8.379 7.988\" />\n      <path d=\"m521.14 214.99h57v106.14h-41.641v-25.77c0-19.211-1.203-35-3.617-47.359-2.41-12.352-6.328-23.359-11.742-33.012zm-26.66 0h7.488c5.84 7.793 10.203 17.762 13.078 29.91 2.875 12.141 4.316 28.961 4.316 50.461v25.77c0 4.23 0.782 7.32 2.348 9.262 1.566 1.949 4.336 2.918 8.316 2.918h64.747c3.98 0 6.707-0.989 8.187-2.981 1.481-1.988 2.223-5.047 2.223-9.199v-106.14h11.425c5.586 0 8.379-2.656 8.379-7.988v-24.25c0-3.719-0.718-6.48-2.16-8.25-1.437-1.781-3.933-2.668-7.488-2.668-5.504 0-9.27 1.066-11.301 3.238-2.031 2.149-3.047 6.621-3.047 13.391v14.348h-91.023v-14.348c0-6.77-0.996-11.242-2.985-13.391-1.988-2.172-5.734-3.238-11.234-3.238-3.641 0-6.156 0.887-7.555 2.668-1.394 1.77-2.093 4.531-2.093 8.25v24.25c0 5.332 2.793 7.988 8.379 7.988\" />\n      <path d=\"m727.02 322.9c-8.378 0-15.214-3.527-20.503-10.597-5.286-7.063-8.485-18.09-9.582-33.071h48.621c3.046 0 5.269 0.551 6.668 1.649 1.394 1.109 2.093 3.09 2.093 5.973 0 5.839-0.742 11.007-2.222 15.488-1.481 4.48-3.473 8.25-5.965 11.301-2.496 3.039-5.399 5.347-8.699 6.918-3.301 1.562-6.774 2.339-10.411 2.339zm40.879-87.339c0.762 0.929 1.715 1.652 2.86 2.16 1.14 0.511 2.347 0.761 3.617 0.761 1.523 0 2.898-0.511 4.125-1.519 1.226-1.02 1.84-2.332 1.84-3.941 0-3.211-1.098-6.18-3.301-8.879-11.598-14.219-27.547-21.332-47.859-21.332-10.157 0-19.086 1.41-26.789 4.25-7.7 2.839-14.11 6.941-19.235 12.312-5.121 5.379-8.969 11.891-11.551 19.551-2.582 7.668-3.871 16.316-3.871 25.969 0 22.429 5.184 39.437 15.551 51.031 10.367 11.59 25.496 17.387 45.387 17.387 7.871 0 15-1.137 21.39-3.418 6.391-2.289 11.872-5.661 16.442-10.09 4.57-4.449 8.105-9.93 10.597-16.449 2.497-6.512 3.747-13.961 3.747-22.34 0-8.473-4.907-12.703-14.727-12.703h-69.949c-0.082-0.668-0.149-1.5-0.192-2.481-0.043-0.957-0.062-2.047-0.062-3.226 0-7.454 0.719-14.153 2.156-20.122 1.442-5.96 3.641-11.039 6.602-15.242 2.965-4.179 6.711-7.398 11.238-9.648 4.523-2.231 9.883-3.36 16.059-3.36 5.078 0 9.437 0.661 13.074 1.981 3.637 1.301 6.75 2.91 9.332 4.82 2.582 1.891 4.762 3.91 6.539 6.028 1.777 2.113 3.301 3.929 4.57 5.453l2.41 3.047\" />\n      <path d=\"m922.51 272.58c0 8.652-0.656 15.75-1.969 21.352-1.312 5.601-3.152 10.019-5.519 13.281-2.372 3.258-5.207 5.559-8.508 6.867-3.301 1.313-6.899 1.973-10.789 1.973-3.555 0-7.157-0.891-10.793-2.672-3.637-1.777-6.938-4.09-9.903-6.93-2.964-2.84-5.394-6.078-7.3-9.719-1.903-3.652-2.856-7.371-2.856-11.191v-56.43c0-1.961 0.551-3.879 1.649-5.789 1.101-1.898 2.687-3.601 4.761-5.082 2.074-1.488 4.59-2.687 7.555-3.629 2.965-0.918 6.266-1.39 9.902-1.39 5.078 0 9.711 0.972 13.903 2.922 4.187 1.949 7.742 5.23 10.664 9.847 2.918 4.621 5.183 10.723 6.793 18.301 1.605 7.59 2.41 17.012 2.41 28.289zm-84.422-114.71v164.27c0 7.449 3.383 11.168 10.152 11.168 5.586 0 9.696-1.75 12.317-5.27 2.621-3.5 3.98-9.199 4.062-17.07v-2.028h0.254c2.285 3.809 4.805 7.239 7.555 10.278 2.75 3.051 5.773 5.613 9.078 7.691 3.301 2.07 6.98 3.649 11.043 4.75 4.062 1.11 8.59 1.649 13.586 1.649 29.707 0 44.558-19.579 44.558-58.77 0-11.937-1.418-22.367-4.253-31.301-2.836-8.929-6.918-16.398-12.25-22.41-5.333-5.996-11.829-10.508-19.489-13.508-7.66-3.011-16.312-4.511-25.961-4.511-8.804 0-16.675 1.652-23.613 4.953v-43.672c0-3.719-0.297-6.789-0.891-9.211-0.589-2.399-1.543-4.32-2.855-5.707-1.313-1.402-3.027-2.352-5.141-2.863-2.113-0.5-4.695-0.758-7.746-0.758-4.058 0-6.808 0.98-8.25 2.918-1.441 1.941-2.156 5.082-2.156 9.402\" />\n      <path d=\"m1068.4 276.95v44.18c0 3.723 0.91 6.691 2.73 8.883 1.82 2.199 5.18 3.297 10.09 3.297 4.74 0 8.17-1.008 10.28-3.039 2.12-2.032 3.18-6.309 3.18-12.821v-40.5h7.61l41.01 45.699c6.43 7.114 12.78 10.661 19.04 10.661 4.83 0 7.24-2.149 7.24-6.469 0-2.699-1.46-5.418-4.38-8.121-2.92-2.707-7.26-6.239-13.01-10.598-5.76-4.371-10.62-8.609-14.6-12.762-2.37-2.461-5.42-5.718-9.14-9.781-3.73-4.058-6.82-7.316-9.27-9.769l49.13-59.797c2.96-3.211 4.44-5.973 4.44-8.25 0-1.614-0.78-2.832-2.35-3.684-1.56-0.848-4.88-1.269-9.96-1.269-5.5 0-9.57 0.632-12.19 1.902-2.62 1.269-4.95 3.301-6.98 6.098l-41.13 54.461h-5.46v-46.59c0-6.098-1.1-10.27-3.3-12.508-2.21-2.242-5.59-3.363-10.16-3.363-5 0-8.38 0.972-10.16 2.921-1.77 1.942-2.66 5.04-2.66 9.258v50.282h-5.46l-41.01-54.461c-2.11-2.797-4.48-4.829-7.11-6.098-2.62-1.27-6.68-1.902-12.18-1.902-5.08 0-8.381 0.421-9.909 1.269-1.519 0.852-2.285 2.07-2.285 3.684 0 2.367 1.481 5.117 4.446 8.25l49.128 59.797c-2.28 2.281-5.29 5.453-9.01 9.519-3.73 4.063-6.9 7.402-9.52 10.031-3.89 4.153-8.72 8.391-14.48 12.762-5.75 4.359-10.09 7.891-13.009 10.598-2.918 2.703-4.379 5.422-4.379 8.121 0 4.32 2.41 6.469 7.238 6.469 6.26 0 12.57-3.547 18.91-10.661l41.14-45.699h7.49\" />\n      <path d=\"m1251.8 311.99v-34.527h8.51l45.57 45.187c3.89 3.903 7.3 6.641 10.22 8.25 2.92 1.614 5.91 2.411 8.95 2.411 4.91 0 7.37-2.149 7.37-6.469 0-3.211-1.32-6.11-3.94-8.699-2.62-2.582-7.11-5.993-13.46-10.219-6.34-4.223-11.55-8.082-15.61-11.551-3.89-3.301-11.17-9.941-21.84-19.93l51.16-60.429c3.13-3.551 4.7-6.313 4.7-8.25 0-1.114-0.21-1.953-0.63-2.543-0.43-0.598-1.61-1.141-3.56-1.649-1.95-0.511-4.7-0.761-8.25-0.761-5.76 0-9.92 0.613-12.51 1.832-2.58 1.23-5.01 3.281-7.29 6.168l-43.17 54.461h-6.22v-44.051c0-7.367-1.25-12.278-3.74-14.731-2.5-2.449-6.8-3.679-12.89-3.679-3.98 0-6.71 0.992-8.19 2.992-1.48 1.98-2.22 5.039-2.22 9.187v106.14c0 4.152 0.74 7.211 2.22 9.199 1.48 1.992 4.21 2.981 8.19 2.981 5.84 0 10.07-1.629 12.69-4.879 2.63-3.258 3.94-8.739 3.94-16.442\" />\n      <path d=\"m1460.6 272.5h-15.12c-28.43 0-42.65-10.352-42.65-31.051 0-14.25 7.53-21.379 22.59-21.379 3.3 0 7 0.641 11.06 1.91 4.06 1.282 7.89 3.18 11.48 5.731 3.6 2.539 6.6 5.719 9.03 9.539 2.4 3.82 3.61 8.27 3.61 13.371zm1.01-45.191-0.76 0.25c-5.68-8.629-12.18-14.911-19.55-18.848-7.36-3.93-16.13-5.902-26.28-5.902-6.43 0-12.11 0.82-17.01 2.48-4.91 1.641-9.02 3.992-12.32 7.043-3.3 3.047-5.77 6.727-7.43 11.039-1.65 4.32-2.47 9.141-2.47 14.481 0 5.578 0.95 11.109 2.86 16.558 1.9 5.469 5.31 10.352 10.22 14.668 4.9 4.313 11.59 7.781 20.05 10.41 8.47 2.621 19.26 3.934 32.38 3.934h19.04v7.238c0 5.93-0.5 10.942-1.52 15.039-1.01 4.11-2.56 7.43-4.63 9.973-2.09 2.539-4.76 4.379-8.06 5.519-3.3 1.149-7.25 1.707-11.82 1.707-8.63 0-16.25-3.636-22.85-10.91-5.58-6.097-10.87-9.136-15.87-9.136-2.96 0-5.22 0.847-6.79 2.539-1.57 1.679-2.35 3.8-2.35 6.339 0 3.301 1.57 6.29 4.7 8.95 3.13 2.672 7.22 4.929 12.25 6.8 5.04 1.86 10.71 3.301 17.01 4.309 6.3 1.02 12.67 1.52 19.11 1.52 9.4 0 17.17-0.969 23.36-2.918 6.18-1.942 11.12-4.86 14.79-8.75 3.69-3.903 6.27-8.782 7.75-14.672 1.47-5.879 2.21-12.797 2.21-20.75v-71.231c0-4.148-0.72-7.207-2.15-9.187-1.44-2-4.1-2.992-8.01-2.992-5.66 0-9.72 1.921-12.18 5.781-2.45 3.851-3.68 10.09-3.68 18.719\" />\n      <path d=\"m1804.1 272.58c0 8.652-0.65 15.75-1.96 21.352-1.32 5.601-3.15 10.019-5.53 13.281-2.37 3.258-5.2 5.559-8.5 6.867-3.3 1.313-6.9 1.973-10.79 1.973-3.56 0-7.15-0.891-10.79-2.672-3.65-1.777-6.95-4.09-9.91-6.93s-5.4-6.078-7.29-9.719c-1.92-3.652-2.86-7.371-2.86-11.191v-56.43c0-1.961 0.54-3.879 1.65-5.789 1.1-1.898 2.68-3.601 4.76-5.082 2.07-1.488 4.59-2.687 7.55-3.629 2.96-0.918 6.26-1.39 9.9-1.39 5.08 0 9.72 0.972 13.9 2.922 4.2 1.949 7.75 5.23 10.66 9.847 2.93 4.621 5.19 10.723 6.8 18.301 1.61 7.59 2.41 17.012 2.41 28.289zm-84.42-114.71v164.27c0 7.449 3.39 11.168 10.16 11.168 5.58 0 9.68-1.75 12.31-5.27 2.63-3.5 3.98-9.199 4.06-17.07v-2.028h0.26c2.28 3.809 4.8 7.239 7.55 10.278 2.75 3.051 5.78 5.613 9.08 7.691 3.3 2.07 6.98 3.649 11.04 4.75 4.07 1.11 8.6 1.649 13.59 1.649 29.7 0 44.56-19.579 44.56-58.77 0-11.937-1.42-22.367-4.25-31.301-2.84-8.929-6.92-16.398-12.26-22.41-5.33-5.996-11.82-10.508-19.48-13.508-7.67-3.011-16.32-4.511-25.97-4.511-8.79 0-16.67 1.652-23.61 4.953v-43.672c0-3.719-0.29-6.789-0.89-9.211-0.59-2.399-1.54-4.32-2.85-5.707-1.32-1.402-3.03-2.352-5.15-2.863-2.12-0.5-4.69-0.758-7.74-0.758-4.06 0-6.82 0.98-8.25 2.918-1.44 1.941-2.16 5.082-2.16 9.402\" />\n      <path d=\"m1939.3 213.22c4.66 0 8.91 0.781 12.76 2.34 3.85 1.57 7.17 4.39 9.96 8.453 2.8 4.058 4.95 9.648 6.48 16.758 1.52 7.109 2.28 16.21 2.28 27.289 0 10.75-0.78 19.66-2.35 26.722-1.56 7.071-3.74 12.699-6.53 16.891-2.8 4.18-6.12 7.109-9.97 8.75-3.85 1.656-8.06 2.476-12.63 2.476-4.41 0-8.51-0.82-12.32-2.476-3.8-1.641-7.12-4.57-9.96-8.75-2.84-4.192-5.05-9.82-6.67-16.891-1.61-7.062-2.41-15.972-2.41-26.722 0-10.661 0.72-19.528 2.16-26.598 1.44-7.063 3.54-12.699 6.28-16.883 2.75-4.187 6.05-7.129 9.9-8.816 3.86-1.692 8.19-2.543 13.02-2.543zm0-10.41c-9.4 0-17.79 1.351-25.21 4.062-7.4 2.699-13.64 6.801-18.72 12.25-5.07 5.457-8.95 12.25-11.61 20.379-2.67 8.121-4 17.641-4 28.559 0 11.011 1.39 20.613 4.19 28.82 2.79 8.211 6.77 15 11.93 20.383 5.17 5.367 11.41 9.386 18.72 12.047 7.33 2.679 15.56 4 24.7 4 9.23 0 17.52-1.321 24.88-4 7.37-2.661 13.62-6.7 18.79-12.118 5.17-5.421 9.1-12.211 11.81-20.382 2.7-8.161 4.06-17.739 4.06-28.75 0-10.918-1.31-20.438-3.94-28.559-2.62-8.129-6.47-14.922-11.55-20.379-5.08-5.449-11.32-9.551-18.73-12.25-7.4-2.711-15.84-4.062-25.32-4.062\" />\n      <path d=\"m2067.8 214.99h57v106.14h-41.64v-25.77c0-19.211-1.2-35-3.63-47.359-2.4-12.352-6.31-23.359-11.73-33.012zm-26.66 0h7.49c5.84 7.793 10.19 17.762 13.07 29.91 2.88 12.141 4.32 28.961 4.32 50.461v25.77c0 4.23 0.78 7.32 2.34 9.262 1.57 1.949 4.35 2.918 8.32 2.918h64.75c3.97 0 6.71-0.989 8.18-2.981 1.49-1.988 2.23-5.047 2.23-9.199v-106.14h11.42c5.59 0 8.38-2.656 8.38-7.988v-24.25c0-3.719-0.72-6.48-2.15-8.25-1.44-1.781-3.94-2.668-7.49-2.668-5.5 0-9.27 1.066-11.3 3.238-2.03 2.149-3.05 6.621-3.05 13.391v14.348h-91.03v-14.348c0-6.77-0.99-11.242-2.98-13.391-1.99-2.172-5.74-3.238-11.23-3.238-3.65 0-6.16 0.887-7.56 2.668-1.39 1.77-2.09 4.531-2.09 8.25v24.25c0 5.332 2.79 7.988 8.38 7.988\" />\n      <path d=\"m2328 321.13v-106.14c0-4.148-0.74-7.207-2.23-9.187-1.47-2-4.21-2.992-8.18-2.992-5.84 0-10.07 1.632-12.69 4.882-2.63 3.258-3.94 8.739-3.94 16.45v74.39l-58.78-88.992c-1.52-2.461-3.41-4.187-5.64-5.207-2.25-1.023-5.28-1.523-9.09-1.523-3.97 0-6.71 0.992-8.18 2.992-1.48 1.98-2.23 5.039-2.23 9.187v106.14c0 4.152 0.75 7.211 2.23 9.199 1.47 1.992 4.21 2.981 8.18 2.981 5.84 0 10.07-1.629 12.7-4.879 2.63-3.258 3.93-8.739 3.93-16.442v-75.41l58.53 88.992c1.78 2.879 3.75 4.891 5.9 6.032 2.17 1.148 5.18 1.707 9.08 1.707 3.97 0 6.71-0.989 8.18-2.981 1.49-1.988 2.23-5.047 2.23-9.199\" />\n      <path d=\"m2471.3 321.13h-23.99v-101.44c0-6.941-1.15-11.492-3.43-13.64-2.29-2.172-6.06-3.242-11.3-3.242-4.82 0-8.09 0.972-9.78 2.921-1.68 1.942-2.53 5.04-2.53 9.258v106.14h-23.36s-0.65-23.649-13.37-23.231c-7.49 0.25-10.29 14.622-10.29 27.262-0.1 3.891 1.31 8.149 8.04 8.149h104.32c2.57 0 5.94-1.989 6.2-6.719 0.53-9.789-4.1-26.379-9.98-26.692-9.48-0.5-10.53 21.231-10.53 21.231\" />\n      <path d=\"m2591.6 322.9c-8.38 0-15.21-3.527-20.49-10.597-5.3-7.063-8.49-18.09-9.59-33.071h48.62c3.05 0 5.26 0.551 6.67 1.649 1.39 1.109 2.09 3.09 2.09 5.973 0 5.839-0.74 11.007-2.23 15.488-1.47 4.48-3.46 8.25-5.96 11.301-2.5 3.039-5.4 5.347-8.7 6.918-3.3 1.562-6.76 2.339-10.41 2.339zm40.88-87.339c0.76 0.929 1.71 1.652 2.86 2.16 1.14 0.511 2.35 0.761 3.62 0.761 1.52 0 2.9-0.511 4.12-1.519 1.23-1.02 1.84-2.332 1.84-3.941 0-3.211-1.1-6.18-3.3-8.879-11.59-14.219-27.55-21.332-47.86-21.332-10.15 0-19.08 1.41-26.79 4.25-7.7 2.839-14.11 6.941-19.22 12.312-5.13 5.379-8.98 11.891-11.57 19.551-2.57 7.668-3.86 16.316-3.86 25.969 0 22.429 5.18 39.437 15.54 51.031 10.37 11.59 25.5 17.387 45.39 17.387 7.87 0 15-1.137 21.39-3.418 6.4-2.289 11.88-5.661 16.45-10.09 4.57-4.449 8.1-9.93 10.6-16.449 2.49-6.512 3.74-13.961 3.74-22.34 0-8.473-4.91-12.703-14.72-12.703h-69.96c-0.08-0.668-0.14-1.5-0.19-2.481-0.04-0.957-0.06-2.047-0.06-3.226 0-7.454 0.72-14.153 2.16-20.122 1.43-5.96 3.64-11.039 6.6-15.242 2.96-4.179 6.71-7.398 11.24-9.648 4.52-2.231 9.87-3.36 16.05-3.36 5.08 0 9.44 0.661 13.08 1.981 3.64 1.301 6.75 2.91 9.33 4.82 2.58 1.891 4.76 3.91 6.54 6.028 1.78 2.113 3.3 3.929 4.57 5.453l2.41 3.047\" />\n      <path d=\"m2806.7 321.13v-106.14c0-4.148-0.74-7.207-2.21-9.187-1.49-2-4.22-2.992-8.2-2.992-5.84 0-10.07 1.632-12.69 4.882-2.63 3.258-3.94 8.739-3.94 16.45v96.988h-41.64v-27.301c0-16.34-1.03-30.527-3.1-42.59-2.08-12.066-5.79-22.238-11.12-30.527-3.89-5.84-8.02-10.289-12.38-13.332-4.36-3.047-9.58-4.57-15.67-4.57-3.39 0-6.12 0.82-8.2 2.48-2.07 1.641-3.1 4.211-3.1 7.672 0 2.289 1.1 4.57 3.3 6.859 2.19 2.282 4.86 3.719 8 4.321 3.38 0.757 6.38 2.031 9.01 3.8 2.63 1.778 4.8 3.789 6.54 6.039 1.73 2.239 3.22 5.192 4.44 8.891 1.23 3.668 2.18 7.16 2.86 10.457 0.67 3.313 1.18 7.563 1.52 12.762 0.34 5.211 0.55 9.801 0.64 13.781 0.08 3.969 0.12 9.141 0.12 15.488v25.77c0 4.062 0.74 7.109 2.22 9.141 1.48 2.031 4.38 3.039 8.7 3.039h64.49c3.98 0 6.71-0.989 8.2-2.981 1.47-1.988 2.21-5.047 2.21-9.199\" />\n      <path d=\"m2925.8 322.9c-8.38 0-15.22-3.527-20.5-10.597-5.3-7.063-8.49-18.09-9.59-33.071h48.62c3.05 0 5.26 0.551 6.67 1.649 1.39 1.109 2.09 3.09 2.09 5.973 0 5.839-0.74 11.007-2.23 15.488-1.47 4.48-3.46 8.25-5.95 11.301-2.5 3.039-5.4 5.347-8.7 6.918-3.31 1.562-6.77 2.339-10.41 2.339zm40.87-87.339c0.77 0.929 1.71 1.652 2.87 2.16 1.13 0.511 2.34 0.761 3.61 0.761 1.52 0 2.9-0.511 4.12-1.519 1.23-1.02 1.85-2.332 1.85-3.941 0-3.211-1.11-6.18-3.31-8.879-11.59-14.219-27.54-21.332-47.86-21.332-10.15 0-19.08 1.41-26.78 4.25-7.71 2.839-14.11 6.941-19.23 12.312-5.13 5.379-8.98 11.891-11.56 19.551-2.58 7.668-3.87 16.316-3.87 25.969 0 22.429 5.18 39.437 15.55 51.031 10.37 11.59 25.49 17.387 45.39 17.387 7.87 0 15-1.137 21.38-3.418 6.4-2.289 11.88-5.661 16.45-10.09 4.57-4.449 8.1-9.93 10.6-16.449 2.49-6.512 3.74-13.961 3.74-22.34 0-8.473-4.91-12.703-14.72-12.703h-69.95c-0.09-0.668-0.15-1.5-0.2-2.481-0.04-0.957-0.06-2.047-0.06-3.226 0-7.454 0.72-14.153 2.16-20.122 1.44-5.96 3.64-11.039 6.6-15.242 2.96-4.179 6.71-7.398 11.24-9.648 4.52-2.231 9.87-3.36 16.06-3.36 5.07 0 9.43 0.661 13.07 1.981 3.65 1.301 6.75 2.91 9.33 4.82 2.59 1.891 4.76 3.91 6.54 6.028 1.78 2.113 3.3 3.929 4.57 5.453l2.41 3.047\" />\n      <path d=\"m3107.3 372.04c0.67 4.063 2.43 7.02 5.26 8.883 2.84 1.867 6.2 2.797 10.1 2.797 2.88 0 5.46-1.02 7.74-3.047 2.29-2.031 3.43-4.832 3.43-8.383 0-7.359-3.7-13.348-11.11-17.961-7.4-4.617-17.67-6.918-30.78-6.918-12.95 0-23.09 2.32-30.41 6.981-7.32 4.66-10.98 10.699-10.98 18.148 0 3.473 1.16 6.199 3.5 8.199 2.32 1.981 4.97 2.981 7.93 2.981 3.81 0 7.11-0.93 9.9-2.797 2.79-1.863 4.53-4.82 5.2-8.883 0.77-4.738 2.22-8.379 4.39-10.918 2.15-2.539 5.64-3.812 10.47-3.812 4.91 0 8.52 1.293 10.86 3.882 2.32 2.571 3.82 6.188 4.5 10.848zm40.5-50.91v-106.14c0-4.148-0.75-7.207-2.23-9.187-1.47-2-4.21-2.992-8.18-2.992-5.84 0-10.07 1.632-12.7 4.882-2.63 3.258-3.93 8.739-3.93 16.45v74.39l-58.78-88.992c-1.61-2.461-3.54-4.187-5.78-5.207-2.24-1.023-5.23-1.523-8.95-1.523-3.97 0-6.71 0.992-8.18 2.992-1.49 1.98-2.23 5.039-2.23 9.187v106.14c0 4.152 0.74 7.211 2.23 9.199 1.47 1.992 4.21 2.981 8.18 2.981 5.84 0 10.07-1.629 12.7-4.879 2.62-3.258 3.93-8.739 3.93-16.442v-75.41l58.53 88.992c1.77 2.879 3.75 4.891 5.89 6.032 2.17 1.148 5.19 1.707 9.09 1.707 3.97 0 6.71-0.989 8.18-2.981 1.48-1.988 2.23-5.047 2.23-9.199\" />\n    </g>\n  </g>\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/logo-ftc.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "logo-ftc--sprite",
  "use": "logo-ftc--sprite-usage",
  "viewBox": "0 0 73 42",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 73 42\" id=\"logo-ftc--sprite\">\n\t<g>\n\t\t<path d=\"M44.86,18.35c-0.3,0 -0.53,0.24 -0.53,0.53c0,0.3 0.24,0.53 0.53,0.53c0.3,0 0.54,-0.24 0.54,-0.53c0,-0.3 -0.24,-0.53 -0.54,-0.53z\" />\n\t\t<path d=\"M72.07 27.5C71.07 26.73 68.43 24.82 67.75 24.89C69.17 25.82 70.99 27.25 71.79 27.91C71.92 28.02 72.14 28.26 72.06 28.54C71.98 28.78 71.72 28.73 71.56 28.59C67.44 24.96 65.1 24.32 62.39 23.59C62.1 23.51 61.21 23.25 60.42 23.03C59.65 22.81 58.94 22.42 58.35 21.88C57.64 21.23 56.83 20.57 55.9 20.05C54.15 19.06 52.22 18.57 51.11 18.99C54 19.3 55.79 20.31 57.56 21.84C57.79 22.04 57.68 22.32 57.21 22.24C56.75 22.16 56.51 21.91 56.34 21.76C55.6 21.06 53.9 19.87 50.96 19.97C50.55 19.99 50.37 19.97 49.85 19.76C48.58 19.26 46.81 18.97 46.21 19.34C47.59 19.48 48.76 19.77 50.05 20.41C50.26 20.52 50.45 20.67 50.82 20.65C52.77 20.56 54.11 21.07 54.91 21.54C55.21 21.71 55.45 21.88 55.65 22.04C55.86 22.21 55.78 22.55 55.52 22.62C54.18 22.95 52.05 22.7 50.54 22.14C50.92 22.78 52.67 23.26 54.12 23.26C54.89 23.26 55.61 23.16 56.15 22.93C56.39 22.83 56.66 22.81 56.92 22.86C57.83 23.05 59.82 23.49 60.71 23.81C60.93 23.89 61.03 24 61.03 24.15C61.03 24.27 60.93 24.43 60.66 24.5C59.74 24.72 57.26 25.17 54.04 24.59C51.6 24.16 50.02 23.29 49.41 22.67C49.05 22.32 48.49 21.47 49.27 20.79C48.41 20.63 47.81 22.02 48.94 23.15C49.65 23.86 51.34 24.79 53.92 25.25C55.12 25.47 56.22 25.54 57.18 25.54C57.6 25.54 57.99 25.53 58.36 25.51C58.69 25.48 58.86 25.89 58.61 26.11C57.44 27.14 55.79 27.79 54.17 27.79C51.11 27.79 48.72 25.36 46.6 23.21C46.43 23.04 45.94 22.48 45.65 22.22C45.46 22.03 45.5 21.69 45.76 21.53C46.41 21.12 46.69 20.94 46.8 20.4C46.31 20.78 45.85 20.97 45.38 21.02C45.07 21.06 44.45 21.09 43.8 20.7C43.2 20.33 42.58 20.1 41.46 19.74C41.23 19.67 41.24 19.34 41.48 19.29C41.77 19.22 42.05 19.18 42.29 19.16C42.58 19.13 42.88 19.2 43.13 19.36C43.3 19.47 43.48 19.6 43.63 19.74C43.7 19.44 43.55 19.16 43.35 18.97C43.19 18.81 43.15 18.56 43.25 18.36C43.58 17.63 44.04 17.02 44.99 16.84C45.8 16.68 46.48 17.01 47.13 17.33C48.07 17.78 48.61 17.86 49.75 17.9C51.04 17.95 52.81 18.03 54.49 18.73C56.17 19.42 57.14 20.12 57.99 20.74C58.97 21.45 59.82 22.07 61.4 22.49C61.99 22.65 62.63 22.78 63.31 22.93C65.97 23.49 69.29 24.19 72.2 26.87C72.35 27.01 72.44 27.17 72.44 27.35C72.44 27.55 72.26 27.64 72.07 27.5ZM72.65 26.38C69.6 23.57 66.19 22.85 63.45 22.27C62.78 22.13 62.14 22 61.57 21.85C60.11 21.46 59.31 20.87 58.38 20.2C57.5 19.56 56.5 18.83 54.75 18.11C52.95 17.37 51.12 17.3 49.78 17.24C48.62 17.18 48.23 17.12 47.43 16.73C46.71 16.38 45.9 15.98 44.87 16.18C43.59 16.43 43 17.27 42.61 18.15C42.52 18.34 42.35 18.48 42.14 18.5C41.47 18.58 40.39 18.78 39.77 19.31C39.6 19.45 39.58 19.72 39.83 19.86C40.18 20.05 40.66 20.2 41.22 20.37C41.96 20.6 42.81 20.85 43.44 21.26C44.27 21.79 45.17 22.71 46.13 23.68C47.17 24.74 48.36 25.95 49.67 26.87C50.73 27.61 51.77 28.09 52.8 28.31C53.07 28.37 53.15 28.7 52.94 28.87C52.7 29.07 52.45 29.3 52.21 29.55C52.11 29.66 51.96 29.74 51.8 29.75C51.15 29.82 50.43 30.12 50.54 30.87C50.75 30.71 50.93 30.59 51.14 30.53C51.3 30.48 51.46 30.62 51.44 30.79C51.42 30.98 51.47 31.2 51.62 31.37C51.98 30.72 52.71 29.99 52.87 29.84C53.38 29.33 53.96 28.93 54.35 28.68C54.58 28.53 54.84 28.43 55.12 28.39C55.8 28.29 56.47 28.1 57.1 27.82C57.25 27.76 57.41 27.83 57.47 27.96C57.53 28.1 57.48 28.27 57.33 28.34C56.67 28.64 55.7 29.14 54.68 29.76C54.52 29.86 54.34 29.93 54.16 29.96C53.3 30.1 52.61 30.84 52.92 31.54C53.11 31.25 53.28 31.06 53.45 30.93C53.62 30.82 53.84 30.94 53.83 31.14C53.82 31.42 53.93 31.65 54.11 31.84C54.34 30.84 54.82 30.46 54.98 30.36C56.29 29.56 57.6 28.92 58.16 28.72C58.33 28.65 58.43 28.45 58.33 28.23L58.09 27.71C58.01 27.53 58.07 27.32 58.23 27.22C58.84 26.82 59.38 26.35 59.82 25.82C60.16 25.4 60.39 25.26 60.81 25.15C61.18 25.05 61.45 24.81 61.6 24.51C61.76 24.22 61.96 24.16 62.21 24.23C64.95 24.98 67.11 25.56 71.12 29.09C71.42 29.36 71.69 29.43 71.89 29.43C72.2 29.43 72.44 29.25 72.57 29.04C72.67 28.87 72.71 28.7 72.74 28.53C72.75 28.39 72.81 28.26 72.89 28.15C72.97 28.04 73.04 27.89 73.08 27.72C73.18 27.19 73.03 26.73 72.65 26.38Z\" />\n\t\t<path d=\"M3.07 1.37L3.07 5.53L6.54 5.53L6.54 6.23L3.07 6.23L3.07 9.28C3.07 9.51 3.1 9.69 3.17 9.82C3.23 9.96 3.31 10.06 3.42 10.13C3.53 10.21 3.65 10.25 3.8 10.28C3.94 10.3 4.09 10.31 4.25 10.31L4.73 10.31L4.73 10.92L0.26 10.92L0.26 10.31L0.44 10.31C0.6 10.31 0.75 10.3 0.89 10.28C1.04 10.26 1.16 10.22 1.27 10.15C1.38 10.09 1.46 9.99 1.53 9.86C1.59 9.73 1.62 9.56 1.62 9.35L1.62 2.24C1.62 2.03 1.59 1.86 1.53 1.73C1.46 1.6 1.38 1.5 1.27 1.43C1.16 1.36 1.04 1.31 0.89 1.29C0.75 1.27 0.6 1.26 0.44 1.26L0.26 1.26L0.26 0.66L7.5 0.66L7.57 3.17L6.83 3.17L6.76 2.55C6.74 2.39 6.7 2.24 6.64 2.09C6.59 1.95 6.51 1.83 6.4 1.72C6.3 1.62 6.16 1.53 6.01 1.47C5.85 1.41 5.65 1.37 5.43 1.37L3.07 1.37ZM10.3 8.83C10.3 9.28 10.39 9.62 10.58 9.84C10.77 10.06 11.07 10.17 11.46 10.17C11.75 10.17 12.02 10.13 12.25 10.03C12.49 9.94 12.69 9.81 12.86 9.63C13.02 9.46 13.15 9.25 13.24 9C13.33 8.75 13.37 8.48 13.37 8.17L13.37 7.01L12.45 7.05C12.05 7.07 11.71 7.12 11.43 7.2C11.16 7.28 10.94 7.4 10.77 7.55C10.6 7.69 10.48 7.87 10.41 8.09C10.34 8.31 10.3 8.55 10.3 8.83ZM12.04 3.79C11.76 3.79 11.54 3.83 11.37 3.9C11.2 3.98 11.07 4.09 10.97 4.23C10.87 4.37 10.81 4.54 10.78 4.73C10.74 4.92 10.73 5.13 10.73 5.35C10.33 5.35 10.03 5.29 9.82 5.15C9.61 5.01 9.51 4.78 9.51 4.45C9.51 4.2 9.57 3.99 9.71 3.82C9.85 3.64 10.03 3.5 10.27 3.39C10.5 3.28 10.78 3.2 11.09 3.15C11.4 3.1 11.74 3.07 12.1 3.07C12.53 3.07 12.92 3.12 13.25 3.2C13.57 3.29 13.85 3.43 14.07 3.63C14.29 3.82 14.45 4.08 14.56 4.4C14.67 4.71 14.73 5.1 14.73 5.56L14.73 9.28C14.73 9.48 14.74 9.65 14.78 9.78C14.81 9.91 14.86 10.02 14.93 10.1C15 10.18 15.09 10.23 15.21 10.27C15.32 10.3 15.46 10.31 15.62 10.31L15.66 10.31L15.66 10.92L13.72 10.92L13.49 9.68L13.37 9.68C13.22 9.88 13.08 10.07 12.94 10.24C12.8 10.41 12.64 10.55 12.47 10.67C12.31 10.79 12.11 10.89 11.9 10.96C11.69 11.02 11.43 11.06 11.13 11.06C10.82 11.06 10.52 11.01 10.25 10.92C9.97 10.83 9.74 10.69 9.54 10.5C9.34 10.31 9.18 10.07 9.07 9.78C8.96 9.5 8.9 9.16 8.9 8.76C8.9 8 9.17 7.44 9.72 7.07C10.26 6.7 11.08 6.49 12.18 6.46L13.37 6.42L13.37 5.56C13.37 5.3 13.36 5.06 13.33 4.85C13.3 4.63 13.24 4.44 13.15 4.28C13.05 4.13 12.92 4.01 12.74 3.92C12.57 3.83 12.33 3.79 12.04 3.79ZM20.54 10.31L20.54 10.92L16.68 10.92L16.68 10.31L16.87 10.31C17.03 10.31 17.18 10.3 17.32 10.28C17.45 10.25 17.57 10.21 17.67 10.13C17.77 10.06 17.84 9.96 17.89 9.82C17.95 9.69 17.98 9.51 17.98 9.28L17.98 4.8C17.98 4.59 17.95 4.42 17.89 4.29C17.84 4.16 17.76 4.06 17.66 3.99C17.56 3.92 17.44 3.88 17.31 3.85C17.17 3.83 17.02 3.82 16.87 3.82L16.82 3.82L16.82 3.21L19.08 3.21L19.27 4.38L19.34 4.38C19.48 4.11 19.63 3.89 19.79 3.72C19.95 3.55 20.12 3.42 20.3 3.32C20.48 3.23 20.67 3.16 20.87 3.13C21.07 3.09 21.28 3.07 21.5 3.07C21.74 3.07 21.96 3.1 22.17 3.14C22.38 3.19 22.58 3.26 22.76 3.37C22.94 3.47 23.1 3.61 23.24 3.77C23.38 3.94 23.5 4.14 23.59 4.38L23.71 4.38C23.85 4.11 24.01 3.89 24.18 3.72C24.35 3.55 24.52 3.42 24.71 3.32C24.9 3.23 25.1 3.16 25.31 3.13C25.52 3.09 25.73 3.07 25.96 3.07C26.32 3.07 26.65 3.13 26.94 3.24C27.23 3.35 27.48 3.52 27.68 3.74C27.88 3.97 28.03 4.26 28.14 4.62C28.25 4.97 28.3 5.4 28.3 5.89L28.3 9.28C28.3 9.51 28.33 9.69 28.39 9.82C28.44 9.96 28.52 10.06 28.62 10.13C28.72 10.21 28.83 10.25 28.97 10.28C29.11 10.3 29.25 10.31 29.41 10.31L29.45 10.31L29.45 10.92L26.96 10.92L26.96 5.96C26.96 5.64 26.93 5.37 26.88 5.12C26.82 4.88 26.73 4.67 26.61 4.5C26.5 4.34 26.34 4.21 26.15 4.12C25.96 4.04 25.72 3.99 25.45 3.99C25.15 3.99 24.9 4.05 24.69 4.16C24.49 4.28 24.32 4.43 24.2 4.63C24.07 4.83 23.98 5.05 23.93 5.31C23.88 5.57 23.85 5.84 23.85 6.13L23.85 9.28C23.85 9.51 23.88 9.69 23.93 9.82C23.99 9.96 24.07 10.06 24.16 10.13C24.26 10.21 24.38 10.25 24.52 10.28C24.65 10.3 24.8 10.31 24.96 10.31L25 10.31L25 10.92L22.5 10.92L22.5 5.96C22.5 5.64 22.47 5.37 22.42 5.12C22.37 4.88 22.28 4.67 22.16 4.5C22.04 4.34 21.89 4.21 21.69 4.12C21.5 4.04 21.27 3.99 20.99 3.99C20.68 3.99 20.42 4.06 20.2 4.18C19.99 4.31 19.82 4.48 19.69 4.69C19.56 4.91 19.46 5.16 19.41 5.44C19.35 5.72 19.32 6.01 19.32 6.32L19.32 9.35C19.32 9.56 19.35 9.73 19.42 9.86C19.48 9.99 19.57 10.09 19.67 10.15C19.78 10.22 19.91 10.26 20.05 10.28C20.19 10.3 20.34 10.31 20.5 10.31L20.54 10.31ZM31.35 0.88C31.35 0.72 31.37 0.57 31.41 0.46C31.45 0.35 31.51 0.26 31.59 0.19C31.66 0.12 31.75 0.07 31.85 0.04C31.94 0.01 32.05 0 32.17 0C32.28 0 32.39 0.01 32.48 0.04C32.58 0.07 32.67 0.12 32.74 0.19C32.81 0.26 32.87 0.35 32.92 0.46C32.96 0.57 32.98 0.72 32.98 0.88C32.98 1.05 32.96 1.19 32.92 1.3C32.87 1.42 32.81 1.51 32.74 1.58C32.67 1.65 32.58 1.7 32.48 1.73C32.39 1.76 32.28 1.78 32.17 1.78C32.05 1.78 31.94 1.76 31.85 1.73C31.75 1.7 31.66 1.65 31.59 1.58C31.51 1.51 31.45 1.42 31.41 1.3C31.37 1.19 31.35 1.05 31.35 0.88ZM30.37 10.31C30.53 10.31 30.68 10.3 30.83 10.28C30.97 10.26 31.09 10.22 31.2 10.15C31.31 10.09 31.39 9.99 31.46 9.86C31.52 9.73 31.55 9.56 31.55 9.35L31.55 4.8C31.55 4.59 31.52 4.42 31.46 4.29C31.39 4.16 31.31 4.06 31.2 3.99C31.09 3.92 30.97 3.87 30.83 3.85C30.68 3.83 30.53 3.82 30.37 3.82L30.33 3.82L30.33 3.21L32.9 3.21L32.9 9.28C32.9 9.51 32.93 9.69 32.99 9.82C33.06 9.96 33.14 10.06 33.25 10.13C33.35 10.21 33.48 10.25 33.62 10.28C33.77 10.3 33.92 10.31 34.08 10.31L34.27 10.31L34.27 10.92L30.18 10.92L30.18 10.31L30.37 10.31ZM34.82 10.31C34.98 10.31 35.14 10.3 35.28 10.28C35.42 10.25 35.55 10.21 35.65 10.13C35.76 10.06 35.84 9.96 35.9 9.82C35.97 9.69 36 9.51 36 9.28L36 1.58C36 1.37 35.97 1.2 35.9 1.07C35.84 0.94 35.76 0.84 35.65 0.77C35.54 0.7 35.42 0.66 35.27 0.63C35.13 0.61 34.98 0.6 34.82 0.6L34.64 0.6L34.64 0L37.35 0L37.35 9.28C37.35 9.51 37.38 9.69 37.44 9.82C37.5 9.96 37.59 10.06 37.7 10.13C37.8 10.21 37.93 10.25 38.07 10.28C38.21 10.3 38.37 10.31 38.53 10.31L38.71 10.31L38.71 10.92L34.64 10.92L34.64 10.31L34.82 10.31ZM47.02 3.21L47.02 3.82L46.98 3.82C46.84 3.82 46.72 3.83 46.62 3.86C46.52 3.89 46.42 3.95 46.34 4.03C46.26 4.12 46.19 4.23 46.12 4.38C46.05 4.52 45.97 4.71 45.88 4.94L43.7 10.97C43.53 11.44 43.37 11.84 43.23 12.19C43.08 12.54 42.92 12.84 42.75 13.1C42.59 13.35 42.41 13.55 42.22 13.72C42.02 13.88 41.8 14.01 41.55 14.11C41.31 14.21 41.02 14.28 40.7 14.31C40.38 14.35 40 14.37 39.58 14.37L39.45 14.37L39.45 13.69C39.94 13.69 40.35 13.62 40.71 13.47C41.06 13.33 41.36 13.13 41.62 12.87C41.87 12.62 42.08 12.32 42.25 11.98C42.42 11.64 42.57 11.26 42.68 10.86L40.03 4.58C39.96 4.43 39.9 4.31 39.84 4.21C39.77 4.12 39.71 4.04 39.63 3.98C39.55 3.92 39.46 3.87 39.36 3.85C39.26 3.83 39.14 3.82 39 3.82L38.96 3.82L38.96 3.21L42.41 3.21L42.41 3.82L42.37 3.82C42.08 3.82 41.86 3.87 41.72 3.98C41.58 4.1 41.51 4.27 41.51 4.51C41.51 4.59 41.51 4.67 41.53 4.75C41.55 4.83 41.58 4.93 41.62 5.04L42.67 7.6C42.74 7.76 42.8 7.94 42.88 8.13C42.95 8.33 43.02 8.52 43.08 8.71C43.14 8.9 43.2 9.08 43.25 9.25C43.3 9.42 43.34 9.56 43.36 9.68L43.4 9.68C43.45 9.47 43.52 9.22 43.61 8.91C43.71 8.61 43.81 8.29 43.93 7.94L44.9 5.14C44.94 5.02 44.97 4.91 44.99 4.81C45.01 4.7 45.02 4.6 45.02 4.52C45.02 4.28 44.94 4.1 44.79 3.98C44.63 3.87 44.39 3.82 44.07 3.82L44.03 3.82L44.03 3.21L47.02 3.21ZM4.83 24.53C4.83 24.75 4.86 24.93 4.92 25.07C4.98 25.2 5.07 25.31 5.17 25.38C5.28 25.45 5.4 25.5 5.55 25.52C5.69 25.55 5.85 25.56 6.01 25.56L6.34 25.56L6.34 26.16L1.87 26.16L1.87 25.56L2.2 25.56C2.35 25.56 2.51 25.55 2.65 25.53C2.79 25.5 2.92 25.46 3.02 25.4C3.13 25.33 3.22 25.23 3.28 25.1C3.34 24.98 3.37 24.81 3.37 24.6L3.37 16.62L2 16.62C1.79 16.62 1.61 16.65 1.47 16.71C1.33 16.78 1.21 16.86 1.12 16.97C1.03 17.08 0.96 17.2 0.92 17.34C0.87 17.49 0.84 17.64 0.82 17.8L0.74 18.41L0 18.41L0.07 15.9L8.16 15.9L8.23 18.41L7.49 18.41L7.42 17.8C7.4 17.64 7.36 17.49 7.32 17.34C7.27 17.2 7.2 17.08 7.11 16.97C7.03 16.86 6.91 16.78 6.76 16.71C6.62 16.65 6.44 16.62 6.22 16.62L4.83 16.62L4.83 24.53ZM13.14 26.16L9 26.16L9 25.56L9.04 25.56C9.2 25.56 9.35 25.55 9.5 25.52C9.64 25.5 9.76 25.45 9.87 25.38C9.97 25.31 10.06 25.2 10.12 25.07C10.18 24.93 10.22 24.75 10.22 24.53L10.22 20.04C10.22 19.83 10.18 19.66 10.12 19.53C10.06 19.41 9.97 19.31 9.86 19.24C9.76 19.16 9.63 19.12 9.49 19.09C9.35 19.07 9.2 19.06 9.04 19.06L9 19.06L9 18.46L11.2 18.46L11.48 19.88L11.55 19.88C11.64 19.67 11.74 19.46 11.84 19.27C11.93 19.08 12.05 18.92 12.2 18.78C12.34 18.63 12.52 18.52 12.73 18.44C12.94 18.36 13.2 18.32 13.52 18.32C14.04 18.32 14.43 18.41 14.69 18.59C14.94 18.77 15.07 19.03 15.07 19.36C15.07 19.51 15.05 19.65 15 19.78C14.95 19.9 14.87 20.01 14.76 20.1C14.65 20.19 14.52 20.26 14.35 20.31C14.18 20.36 13.97 20.39 13.73 20.39C13.73 19.99 13.67 19.7 13.56 19.53C13.45 19.35 13.25 19.26 12.97 19.26C12.79 19.26 12.64 19.31 12.5 19.41C12.36 19.51 12.23 19.65 12.13 19.81C12.02 19.98 11.93 20.17 11.86 20.39C11.79 20.6 11.73 20.82 11.69 21.05C11.64 21.28 11.61 21.5 11.59 21.73C11.57 21.95 11.56 22.15 11.56 22.34L11.56 24.6C11.56 24.81 11.59 24.98 11.66 25.1C11.72 25.23 11.81 25.33 11.91 25.4C12.02 25.46 12.15 25.5 12.29 25.53C12.43 25.55 12.58 25.56 12.74 25.56L13.14 25.56L13.14 26.16ZM19.24 19.09C18.71 19.09 18.3 19.3 18.01 19.74C17.72 20.17 17.55 20.8 17.5 21.63L20.8 21.63C20.8 21.26 20.77 20.91 20.72 20.6C20.66 20.28 20.57 20.01 20.45 19.79C20.33 19.57 20.17 19.39 19.97 19.27C19.77 19.15 19.53 19.09 19.24 19.09ZM19.41 26.3C18.89 26.3 18.43 26.21 18.01 26.04C17.6 25.86 17.25 25.61 16.97 25.27C16.68 24.93 16.46 24.52 16.31 24.03C16.16 23.54 16.08 22.99 16.08 22.36C16.08 21.02 16.36 20.01 16.91 19.33C17.46 18.65 18.25 18.32 19.27 18.32C19.73 18.32 20.15 18.39 20.51 18.53C20.88 18.68 21.2 18.89 21.46 19.18C21.71 19.47 21.91 19.83 22.05 20.26C22.19 20.68 22.26 21.18 22.26 21.75L22.26 22.41L17.47 22.41C17.48 22.93 17.53 23.38 17.63 23.76C17.72 24.13 17.86 24.44 18.04 24.69C18.22 24.93 18.44 25.11 18.71 25.22C18.97 25.34 19.27 25.4 19.61 25.4C19.86 25.4 20.09 25.37 20.3 25.31C20.51 25.25 20.71 25.18 20.88 25.09C21.05 24.99 21.21 24.89 21.34 24.77C21.47 24.65 21.58 24.52 21.67 24.39C21.73 24.42 21.79 24.48 21.85 24.57C21.91 24.66 21.94 24.76 21.94 24.88C21.94 25.03 21.89 25.18 21.79 25.35C21.68 25.52 21.53 25.67 21.31 25.81C21.1 25.95 20.84 26.07 20.53 26.16C20.21 26.25 19.84 26.3 19.41 26.3ZM26.93 19.09C26.39 19.09 25.98 19.3 25.7 19.74C25.41 20.17 25.24 20.8 25.19 21.63L28.49 21.63C28.49 21.26 28.46 20.91 28.41 20.6C28.35 20.28 28.26 20.01 28.14 19.79C28.02 19.57 27.86 19.39 27.66 19.27C27.46 19.15 27.22 19.09 26.93 19.09ZM27.1 26.3C26.58 26.3 26.12 26.21 25.7 26.04C25.29 25.86 24.94 25.61 24.65 25.27C24.37 24.93 24.15 24.52 24 24.03C23.85 23.54 23.77 22.99 23.77 22.36C23.77 21.02 24.05 20.01 24.6 19.33C25.15 18.65 25.94 18.32 26.96 18.32C27.42 18.32 27.83 18.39 28.2 18.53C28.57 18.68 28.89 18.89 29.14 19.18C29.4 19.47 29.6 19.83 29.74 20.26C29.87 20.68 29.94 21.18 29.94 21.75L29.94 22.41L25.16 22.41C25.17 22.93 25.22 23.38 25.32 23.76C25.41 24.13 25.55 24.44 25.73 24.69C25.91 24.93 26.13 25.11 26.39 25.22C26.66 25.34 26.96 25.4 27.3 25.4C27.55 25.4 27.78 25.37 27.99 25.31C28.2 25.25 28.4 25.18 28.57 25.09C28.74 24.99 28.9 24.89 29.03 24.77C29.16 24.65 29.27 24.52 29.36 24.39C29.42 24.42 29.48 24.48 29.54 24.57C29.6 24.66 29.63 24.76 29.63 24.88C29.63 25.03 29.58 25.18 29.47 25.35C29.37 25.52 29.21 25.67 29 25.81C28.79 25.95 28.53 26.07 28.21 26.16C27.9 26.25 27.53 26.3 27.1 26.3ZM5.14 31C5.63 31 6.06 31.04 6.42 31.12C6.79 31.2 7.09 31.32 7.33 31.46C7.57 31.61 7.75 31.78 7.87 31.97C7.99 32.17 8.05 32.38 8.05 32.61C8.05 32.77 8.02 32.9 7.95 33.03C7.89 33.15 7.8 33.26 7.69 33.35C7.58 33.43 7.44 33.5 7.29 33.54C7.14 33.59 6.98 33.61 6.8 33.61C6.8 33.39 6.77 33.17 6.71 32.95C6.65 32.73 6.56 32.53 6.42 32.36C6.29 32.18 6.12 32.04 5.9 31.93C5.69 31.82 5.43 31.76 5.11 31.76C4.57 31.76 4.11 31.86 3.73 32.06C3.35 32.26 3.04 32.55 2.81 32.93C2.57 33.31 2.39 33.78 2.29 34.34C2.18 34.9 2.12 35.54 2.12 36.26C2.12 36.9 2.18 37.49 2.29 38.02C2.41 38.55 2.58 39.01 2.83 39.39C3.07 39.77 3.38 40.07 3.76 40.28C4.13 40.49 4.59 40.6 5.11 40.6C5.46 40.6 5.78 40.56 6.04 40.49C6.31 40.43 6.55 40.34 6.76 40.22C6.96 40.11 7.14 39.98 7.3 39.83C7.46 39.69 7.6 39.53 7.72 39.38C7.8 39.43 7.86 39.5 7.91 39.59C7.96 39.67 7.99 39.79 7.99 39.94C7.99 40.12 7.93 40.31 7.8 40.49C7.68 40.68 7.49 40.86 7.24 41.01C6.99 41.16 6.67 41.29 6.28 41.39C5.89 41.49 5.43 41.54 4.9 41.54C4.18 41.54 3.55 41.42 3.01 41.16C2.47 40.91 2.01 40.55 1.64 40.09C1.28 39.63 1 39.07 0.81 38.42C0.63 37.77 0.53 37.05 0.53 36.26C0.53 35.48 0.63 34.77 0.83 34.13C1.02 33.48 1.32 32.93 1.7 32.46C2.09 32 2.57 31.64 3.14 31.38C3.72 31.13 4.38 31 5.14 31ZM12.66 40.8L12.66 41.4L8.79 41.4L8.79 40.8L8.9 40.8C9.07 40.8 9.22 40.79 9.36 40.76C9.51 40.74 9.63 40.69 9.73 40.62C9.84 40.55 9.92 40.44 9.99 40.31C10.05 40.17 10.08 39.99 10.08 39.77L10.08 32.06C10.08 31.85 10.05 31.68 9.99 31.56C9.92 31.43 9.84 31.33 9.73 31.26C9.62 31.19 9.5 31.14 9.36 31.12C9.21 31.1 9.06 31.09 8.9 31.09L8.79 31.09L8.79 30.49L11.44 30.49L11.44 33.64C11.44 33.77 11.43 33.91 11.43 34.05C11.42 34.2 11.42 34.33 11.41 34.45C11.4 34.59 11.39 34.73 11.38 34.86L11.45 34.86C11.88 33.99 12.58 33.56 13.56 33.56C13.97 33.56 14.33 33.61 14.65 33.72C14.96 33.83 15.23 34 15.44 34.23C15.66 34.46 15.82 34.75 15.93 35.1C16.05 35.46 16.1 35.88 16.1 36.37L16.1 39.77C16.1 39.99 16.13 40.17 16.19 40.31C16.24 40.44 16.32 40.55 16.42 40.62C16.52 40.69 16.63 40.74 16.77 40.76C16.9 40.79 17.05 40.8 17.21 40.8L17.25 40.8L17.25 41.4L14.76 41.4L14.76 36.44C14.76 36.13 14.73 35.85 14.67 35.61C14.61 35.36 14.52 35.16 14.4 34.99C14.28 34.82 14.11 34.7 13.91 34.61C13.71 34.52 13.47 34.48 13.18 34.48C12.88 34.48 12.62 34.53 12.4 34.64C12.18 34.75 12 34.91 11.86 35.11C11.72 35.32 11.61 35.56 11.54 35.85C11.47 36.14 11.44 36.46 11.44 36.81L11.44 39.84C11.44 40.05 11.47 40.22 11.53 40.35C11.59 40.48 11.68 40.57 11.79 40.64C11.89 40.7 12.02 40.75 12.16 40.77C12.3 40.79 12.46 40.8 12.61 40.8L12.66 40.8ZM19.76 39.32C19.76 39.77 19.86 40.1 20.05 40.33C20.24 40.55 20.53 40.66 20.93 40.66C21.22 40.66 21.48 40.61 21.72 40.52C21.95 40.42 22.16 40.29 22.32 40.12C22.49 39.95 22.62 39.74 22.7 39.49C22.79 39.24 22.84 38.96 22.84 38.66L22.84 37.49L21.92 37.54C21.51 37.56 21.17 37.61 20.9 37.69C20.62 37.77 20.4 37.88 20.23 38.03C20.07 38.18 19.95 38.36 19.87 38.58C19.8 38.79 19.76 39.04 19.76 39.32ZM21.5 34.27C21.23 34.27 21 34.31 20.83 34.39C20.66 34.47 20.53 34.58 20.43 34.72C20.34 34.86 20.27 35.02 20.24 35.21C20.21 35.41 20.19 35.61 20.19 35.84C19.79 35.84 19.49 35.77 19.28 35.63C19.08 35.5 18.97 35.27 18.97 34.93C18.97 34.69 19.04 34.48 19.17 34.3C19.31 34.13 19.5 33.99 19.73 33.88C19.97 33.77 20.24 33.69 20.56 33.64C20.87 33.58 21.2 33.56 21.56 33.56C22 33.56 22.38 33.6 22.71 33.69C23.04 33.77 23.31 33.92 23.53 34.11C23.75 34.31 23.92 34.57 24.03 34.88C24.14 35.2 24.19 35.58 24.19 36.04L24.19 39.77C24.19 39.97 24.21 40.13 24.24 40.27C24.27 40.4 24.32 40.5 24.39 40.58C24.46 40.66 24.56 40.72 24.67 40.75C24.79 40.78 24.92 40.8 25.08 40.8L25.12 40.8L25.12 41.4L23.18 41.4L22.96 40.17L22.84 40.17C22.69 40.37 22.54 40.55 22.4 40.72C22.26 40.89 22.11 41.04 21.94 41.16C21.77 41.28 21.58 41.37 21.37 41.44C21.15 41.51 20.9 41.54 20.6 41.54C20.28 41.54 19.99 41.5 19.71 41.41C19.44 41.31 19.2 41.17 19 40.99C18.8 40.8 18.65 40.56 18.54 40.27C18.42 39.98 18.37 39.64 18.37 39.25C18.37 38.49 18.64 37.92 19.18 37.55C19.72 37.18 20.54 36.98 21.64 36.95L22.84 36.91L22.84 36.04C22.84 35.79 22.82 35.55 22.79 35.33C22.77 35.11 22.71 34.93 22.61 34.77C22.52 34.61 22.38 34.49 22.21 34.4C22.03 34.32 21.8 34.27 21.5 34.27ZM30.01 40.8L30.01 41.4L26.14 41.4L26.14 40.8L26.26 40.8C26.42 40.8 26.58 40.79 26.72 40.76C26.86 40.74 26.99 40.69 27.09 40.62C27.2 40.55 27.28 40.44 27.34 40.31C27.41 40.17 27.44 39.99 27.44 39.77L27.44 35.28C27.44 35.07 27.41 34.9 27.34 34.78C27.28 34.65 27.2 34.55 27.09 34.48C26.98 34.41 26.86 34.36 26.71 34.34C26.57 34.31 26.42 34.3 26.26 34.3L26.22 34.3L26.22 33.7L28.54 33.7L28.73 34.86L28.8 34.86C28.95 34.6 29.11 34.38 29.27 34.21C29.44 34.04 29.61 33.9 29.8 33.81C29.98 33.71 30.18 33.65 30.39 33.61C30.6 33.58 30.82 33.56 31.04 33.56C31.42 33.56 31.76 33.61 32.06 33.72C32.36 33.83 32.61 34 32.82 34.23C33.03 34.46 33.18 34.75 33.29 35.1C33.4 35.46 33.46 35.88 33.46 36.37L33.46 39.77C33.46 39.99 33.49 40.17 33.54 40.31C33.59 40.44 33.67 40.55 33.77 40.62C33.87 40.69 33.98 40.74 34.12 40.76C34.25 40.79 34.4 40.8 34.56 40.8L34.61 40.8L34.61 41.4L32.1 41.4L32.1 36.44C32.1 36.13 32.08 35.85 32.02 35.61C31.96 35.36 31.87 35.16 31.75 34.99C31.63 34.82 31.46 34.7 31.26 34.61C31.06 34.52 30.82 34.48 30.53 34.48C30.2 34.48 29.92 34.54 29.7 34.67C29.48 34.79 29.3 34.96 29.16 35.18C29.03 35.4 28.93 35.64 28.87 35.92C28.82 36.2 28.79 36.5 28.79 36.81L28.79 39.84C28.79 40.05 28.82 40.22 28.88 40.35C28.94 40.48 29.03 40.57 29.14 40.64C29.24 40.7 29.37 40.75 29.51 40.77C29.65 40.79 29.81 40.8 29.96 40.8L30.01 40.8ZM39.27 40.8L39.27 41.4L35.41 41.4L35.41 40.8L35.53 40.8C35.69 40.8 35.85 40.79 35.99 40.76C36.13 40.74 36.25 40.69 36.36 40.62C36.46 40.55 36.55 40.44 36.61 40.31C36.67 40.17 36.71 39.99 36.71 39.77L36.71 35.28C36.71 35.07 36.67 34.9 36.61 34.78C36.55 34.65 36.46 34.55 36.36 34.48C36.25 34.41 36.12 34.36 35.98 34.34C35.84 34.31 35.69 34.3 35.53 34.3L35.49 34.3L35.49 33.7L37.81 33.7L38 34.86L38.07 34.86C38.22 34.6 38.38 34.38 38.54 34.21C38.71 34.04 38.88 33.9 39.07 33.81C39.25 33.71 39.45 33.65 39.66 33.61C39.87 33.58 40.08 33.56 40.31 33.56C40.69 33.56 41.03 33.61 41.33 33.72C41.62 33.83 41.88 34 42.09 34.23C42.29 34.46 42.45 34.75 42.56 35.1C42.67 35.46 42.73 35.88 42.73 36.37L42.73 39.77C42.73 39.99 42.75 40.17 42.81 40.31C42.86 40.44 42.94 40.55 43.04 40.62C43.13 40.69 43.25 40.74 43.39 40.76C43.52 40.79 43.67 40.8 43.83 40.8L43.88 40.8L43.88 41.4L41.37 41.4L41.37 36.44C41.37 36.13 41.34 35.85 41.29 35.61C41.23 35.36 41.14 35.16 41.02 34.99C40.89 34.82 40.73 34.7 40.53 34.61C40.33 34.52 40.08 34.48 39.79 34.48C39.47 34.48 39.19 34.54 38.97 34.67C38.75 34.79 38.57 34.96 38.43 35.18C38.3 35.4 38.2 35.64 38.14 35.92C38.08 36.2 38.05 36.5 38.05 36.81L38.05 39.84C38.05 40.05 38.09 40.22 38.15 40.35C38.21 40.48 38.3 40.57 38.4 40.64C38.51 40.7 38.64 40.75 38.78 40.77C38.92 40.79 39.07 40.8 39.23 40.8L39.27 40.8ZM48.23 34.33C47.7 34.33 47.28 34.55 47 34.98C46.71 35.41 46.54 36.05 46.49 36.88L49.79 36.88C49.79 36.5 49.76 36.15 49.71 35.84C49.65 35.53 49.56 35.26 49.44 35.03C49.32 34.81 49.16 34.63 48.96 34.51C48.76 34.39 48.52 34.33 48.23 34.33ZM48.4 41.54C47.88 41.54 47.42 41.46 47 41.28C46.59 41.1 46.24 40.85 45.95 40.51C45.67 40.18 45.45 39.76 45.3 39.27C45.15 38.78 45.07 38.23 45.07 37.61C45.07 36.27 45.35 35.25 45.9 34.58C46.45 33.9 47.24 33.56 48.26 33.56C48.72 33.56 49.13 33.63 49.5 33.78C49.87 33.92 50.19 34.14 50.45 34.43C50.7 34.71 50.9 35.07 51.04 35.5C51.17 35.93 51.24 36.42 51.24 36.99L51.24 37.65L46.46 37.65C46.47 38.17 46.52 38.62 46.62 39C46.71 39.38 46.85 39.69 47.03 39.93C47.21 40.17 47.43 40.35 47.7 40.47C47.96 40.58 48.26 40.64 48.6 40.64C48.85 40.64 49.08 40.61 49.29 40.55C49.5 40.5 49.7 40.42 49.87 40.33C50.04 40.24 50.2 40.13 50.33 40.01C50.46 39.89 50.57 39.77 50.66 39.64C50.72 39.66 50.78 39.72 50.84 39.81C50.9 39.9 50.93 40 50.93 40.13C50.93 40.27 50.88 40.43 50.77 40.59C50.67 40.76 50.52 40.91 50.3 41.05C50.09 41.19 49.83 41.31 49.52 41.4C49.2 41.5 48.83 41.54 48.4 41.54ZM52.34 40.8C52.5 40.8 52.66 40.79 52.8 40.76C52.94 40.74 53.07 40.69 53.17 40.62C53.28 40.55 53.36 40.44 53.42 40.31C53.49 40.17 53.52 39.99 53.52 39.77L53.52 32.06C53.52 31.85 53.49 31.68 53.42 31.56C53.36 31.43 53.28 31.33 53.17 31.26C53.06 31.19 52.93 31.14 52.79 31.12C52.65 31.1 52.5 31.09 52.34 31.09L50.38 31.09L50.38 30.49L54.87 30.49L54.87 39.77C54.87 39.99 54.9 40.17 54.96 40.31C55.02 40.44 55.11 40.55 55.22 40.62C55.32 40.69 55.45 40.74 55.59 40.76C55.73 40.79 55.89 40.8 56.05 40.8L56.23 40.8L56.23 41.4L52.16 41.4L52.16 40.8L52.34 40.8Z\" />\n\t</g>\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/logo-ftt.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "logo-ftt--sprite",
  "use": "logo-ftt--sprite-usage",
  "viewBox": "0 0 495.19793 178.36324",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 495.19793 178.36324\" id=\"logo-ftt--sprite\"><defs><clipPath id=\"logo-ftt--sprite_a\"><path d=\"M0 595.28h841.89V0H0z\" /></clipPath></defs><g clip-path=\"url(#logo-ftt--sprite_a)\" transform=\"matrix(1.33333 0 0 -1.33333 -302.862 631.07)\"><path d=\"M345.47 350.39c0 1.342-.285 2.402-.857 3.18-.573.778-1.358 1.166-2.355 1.166-1.232 0-2.157-.546-2.773-1.639v-5.689c.609-1.085 1.54-1.628 2.795-1.628.975 0 1.75.386 2.327 1.16.576.774.864 1.924.864 3.45m2.036-.23c0-1.813-.415-3.273-1.244-4.38-.83-1.108-1.951-1.662-3.367-1.662-1.445 0-2.582.46-3.411 1.376v-5.733h-2.035v16.483h1.859l.099-1.32c.829 1.027 1.98 1.54 3.455 1.54 1.43 0 2.562-.539 3.395-1.617.832-1.079 1.249-2.579 1.249-4.5zM352.951 350.16c0-1.32.306-2.38.92-3.18.611-.8 1.431-1.2 2.458-1.2 1.035 0 1.856.405 2.465 1.215.61.811.913 1.946.913 3.406 0 1.306-.31 2.364-.93 3.175-.619.81-1.443 1.215-2.47 1.215-1.005 0-1.815-.4-2.432-1.199-.616-.8-.924-1.944-.924-3.433m-2.046.242c0 1.166.23 2.215.687 3.147.46.931 1.097 1.651 1.915 2.156.818.507 1.751.76 2.8.76 1.621 0 2.933-.56 3.934-1.684 1.001-1.122 1.502-2.615 1.502-4.478v-.143c0-1.159-.222-2.199-.666-3.12-.444-.92-1.078-1.637-1.904-2.15-.825-.514-1.773-.77-2.844-.77-1.614 0-2.92.561-3.922 1.683-1.002 1.122-1.502 2.607-1.502 4.456zM367.166 346h5.47v8.362h-3.665l-.12-2.839c-.125-2.369-.686-4.21-1.684-5.523m-2.41 0l.703.87c.793 1.026 1.244 2.567 1.354 4.621l.187 4.753h7.67V346h1.53v-5.16h-2.037v3.498h-8.307v-3.499h-2.036l.011 5.161zM387.51 356.244h2.036v-11.906h-2.036v8.682l-5.49-8.682h-2.036v11.906h2.035v-8.693zM403.013 354.594h-3.994v-10.255h-2.036v10.255h-3.917v1.65h9.947zM410.152 354.792a2.716 2.716 0 0 1-2.069-.897c-.557-.598-.902-1.436-1.034-2.514h5.964v.154c-.059 1.034-.338 1.836-.837 2.404-.499.569-1.173.853-2.024.853m.253-10.673c-1.614 0-2.927.529-3.939 1.59-1.013 1.06-1.519 2.477-1.519 4.252v.374c0 1.182.226 2.236.677 3.164.451.928 1.082 1.654 1.893 2.179a4.76 4.76 0 0 0 2.635.786c1.547 0 2.75-.51 3.61-1.53.857-1.018 1.286-2.478 1.286-4.378v-.847h-8.065c.03-1.174.372-2.123 1.03-2.845.655-.722 1.49-1.084 2.502-1.084.72 0 1.327.147 1.826.44a4.6 4.6 0 0 1 1.31 1.167l1.243-.97c-.997-1.532-2.494-2.298-4.489-2.298M428.515 356.244v-11.906h-2.046v10.222h-4.05l-.242-4.456c-.132-2.047-.475-3.51-1.029-4.39-.553-.88-1.432-1.339-2.635-1.376h-.814v1.794l.583.044c.66.073 1.133.455 1.42 1.144.286.69.47 1.966.55 3.83l.22 5.094zM435.358 350.478V346h3.026c.763 0 1.353.196 1.77.588.419.393.628.931.628 1.613 0 .66-.203 1.2-.61 1.623-.407.421-.978.64-1.711.654zm0 1.662h3.092c1.349-.015 2.417-.367 3.202-1.057.785-.689 1.177-1.625 1.177-2.806 0-1.188-.403-2.14-1.21-2.86-.807-.719-1.893-1.079-3.257-1.079h-5.04v11.906h2.036zM451.498 345.78c.726 0 1.36.22 1.903.66.543.441.844.99.903 1.651h1.926c-.036-.683-.271-1.332-.704-1.948a4.63 4.63 0 0 0-1.733-1.474 4.996 4.996 0 0 0-2.294-.551c-1.621 0-2.911.541-3.868 1.623-.957 1.082-1.436 2.562-1.436 4.44v.342c0 1.158.213 2.189.638 3.091.426.903 1.037 1.603 1.833 2.102.795.499 1.736.748 2.822.748 1.335 0 2.445-.4 3.328-1.199.884-.8 1.355-1.838 1.414-3.114h-1.925c-.06.77-.35 1.403-.875 1.898-.525.495-1.172.743-1.942.743-1.034 0-1.836-.373-2.404-1.117-.57-.745-.853-1.821-.853-3.229v-.386c0-1.371.282-2.428.847-3.169.565-.741 1.372-1.111 2.42-1.111M463.579 349.411h-1.485v-5.073h-2.047v11.906h2.047v-5.04h1.33l4.006 5.04h2.465l-4.71-5.722 5.106-6.184h-2.586zM481.095 356.244h2.036v-11.906h-2.036v8.682l-5.491-8.682h-2.035v11.906h2.035v-8.693zM496.003 360.59c0-.89-.303-1.606-.908-2.147-.605-.541-1.4-.812-2.382-.812-.983 0-1.78.272-2.388.817-.61.545-.913 1.259-.913 2.143h1.66c0-.515.14-.916.42-1.206.278-.29.685-.435 1.22-.435.514 0 .916.143 1.206.43.29.286.435.69.435 1.21zm-.55-4.345h2.035v-11.906h-2.035v8.682l-5.491-8.682h-2.036v11.906h2.036v-8.693zM512.747 349.411h-1.485v-5.073h-2.047v11.906h2.047v-5.04h1.331l4.005 5.04h2.465l-4.71-5.722 5.106-6.184h-2.586zM532.32 356.244v-11.906h-2.045v10.222h-4.05l-.242-4.456c-.132-2.047-.475-3.51-1.03-4.39-.552-.88-1.431-1.339-2.634-1.376h-.814v1.794l.583.044c.66.073 1.133.455 1.42 1.144.286.69.469 1.966.55 3.83l.22 5.094zM540.836 347.32l2.773 8.924h2.179L541 342.501c-.741-1.98-1.918-2.972-3.532-2.972l-.385.034-.76.143v1.65l.55-.044c.69 0 1.228.14 1.613.418.385.28.702.79.952 1.53l.45 1.21-4.246 11.774h2.222zM553.786 353.89c-.998 0-1.79-.336-2.377-1.008-.587-.67-.88-1.6-.88-2.789v-.176c0-1.277.295-2.287.885-3.03.59-.746 1.389-1.118 2.394-1.118 1.012 0 1.81.374 2.398 1.122.587.748.88 1.841.88 3.28 0 1.121-.295 2.022-.885 2.7-.591.68-1.395 1.018-2.415 1.018m.396 1.672c1.497 0 2.694-.5 3.592-1.502.899-1 1.348-2.319 1.348-3.955v-.187c0-1.122-.216-2.126-.65-3.009a4.805 4.805 0 0 0-1.864-2.058c-.81-.488-1.744-.732-2.8-.732-1.6 0-2.887.534-3.862 1.601-.976 1.067-1.464 2.5-1.464 4.297v.99c0 2.502.464 4.49 1.392 5.964.928 1.475 2.298 2.373 4.11 2.696 1.027.183 1.72.407 2.079.671.36.264.539.627.539 1.09h1.673c0-.918-.207-1.633-.621-2.146-.415-.514-1.077-.877-1.987-1.09l-1.518-.34c-1.211-.287-2.118-.769-2.723-1.448-.606-.678-1-1.582-1.183-2.712 1.078 1.247 2.39 1.87 3.939 1.87M302.993 399.728c-.588 3.49-1.294 4.117-6.038 4.117h-5.176c-1.137 0-1.333-.314-1.333-1.529v-8.509h5.568c3.293 0 4.077.667 4.43 3.725h.902v-9.135h-.902c-.313 3.215-1.058 3.803-4.43 3.803h-5.568v-8.43c0-2.98.549-3.49 3.568-3.647v-.745h-11.018v.745c2.98.196 3.45.667 3.45 4.078v16.782c0 2.862-.391 3.372-3.411 3.607v.745h20.742l.196-5.607zM320.676 400.238l-4.51-10.783h9.058zm4.744-20.86v.746c1.412 0 1.686.078 2.157.352.313.157.549.589.549.94 0 .59-.275 1.648-.745 2.746l-1.608 3.686H315.5l-1.803-4.47c-.196-.51-.353-1.176-.353-1.647 0-1.215.862-1.607 2.744-1.607v-.745h-7.802v.745c2.274.235 2.627 1.058 4.94 6.548l8.077 19.134h.785l9.645-22.075c1.098-2.55 1.647-3.372 3.686-3.607v-.745zM362.825 379.378v.745c3.098.196 3.529.823 3.529 4.078v17.605l-10-22.428h-.548l-9.88 21.526V385.3c0-4.313.627-5.019 3.646-5.176v-.745h-9.175v.745c3.255.235 3.804.784 3.804 5.176v15.605c0 2.98-.51 3.49-3.725 3.686v.745h7.763l9.057-19.684 8.666 19.684h7.802v-.745c-2.823-.039-3.411-.706-3.411-3.647V383.77c0-2.784.588-3.45 3.45-3.647v-.745zM382.546 379.378v.745c3.294.118 3.803.588 3.803 3.647v17.212c0 3.098-.47 3.412-3.803 3.608v.745h11.645v-.745c-3.293-.157-3.842-.628-3.842-3.608V383.77c0-2.94.627-3.529 3.842-3.647v-.745zM423.519 379.378h-21.095v.745c2.902.157 3.41.784 3.41 3.764v16.9c0 3.02-.351 3.567-3.41 3.803v.745h11.097v-.745c-3.216-.196-3.686-.706-3.686-3.725v-18.193c0-1.49.666-1.765 3.529-1.765h2.744c3.176 0 5.294.706 6.627 2.392.509.666 1.019 1.53 1.647 2.901h1.019zM454.454 404.59c-2.313-.196-3.215-1.019-5.41-4.392l-5.804-8.939v-7.528c0-3.059.745-3.45 4.04-3.608v-.745H435.28v.745c3.49.235 3.96.588 3.96 4.078v6.705l-5.137 7.528c-3.607 5.293-4.47 6.078-6.352 6.156v.745h10.94v-.745l-.94-.039c-1.256-.039-1.844-.392-1.844-1.02 0-.509.274-1.215.706-1.843l5.724-8.665 5.686 8.705c.392.588.55 1.215.55 1.646-.04.863-.629 1.177-2.668 1.216v.745h8.548zM504.562 398.67c-.863 4.312-1.882 5.018-6.038 5.018h-2.314V383.73c0-2.98.55-3.45 3.765-3.607v-.745h-11.45v.745c3.255.196 3.686.627 3.686 4.078v19.487h-2.353c-4.156 0-5.214-.706-5.999-5.019h-.94l.274 6.666h22.036l.274-6.666zM596.74 379.378h-21.133v.745c3.019.196 3.41.706 3.41 3.725v17.095c0 2.902-.47 3.49-3.41 3.647v.745h20.78l.158-5.607h-.98c-.588 3.53-1.49 4.117-6.04 4.117h-5.135c-1.098 0-1.372-.157-1.372-1.412v-8.626h5.92c3.372 0 3.96.667 4.43 3.764h.903v-9.175h-.902c-.471 3.294-1.06 3.803-4.431 3.803h-5.92v-9.527c0-1.647 1.058-1.843 3.96-1.843h1.41c5.608 0 7.294 1.02 9.059 5.175h1.098zM514.749 379.119v.747c3.303.118 3.814.59 3.814 3.657v17.263c0 3.106-.472 3.42-3.814 3.617v.747h11.678v-.747c-3.303-.158-3.853-.63-3.853-3.617v-17.263c0-2.95.629-3.54 3.853-3.657v-.747zM556.39 379.119v.747c3.106.197 3.539.826 3.539 4.089v17.656l-10.027-22.492h-.551l-9.91 21.588v-15.651c0-4.325.63-5.033 3.658-5.19v-.747h-9.201v.747c3.263.236 3.814.787 3.814 5.19v15.65c0 2.989-.511 3.5-3.736 3.697v.747h7.787l9.083-19.74 8.69 19.74h7.825v-.747c-2.831-.04-3.421-.708-3.421-3.657v-17.223c0-2.792.59-3.46 3.46-3.657v-.747zM480.207 424.188a1.526 1.526 0 1 1 1.326-2.748 1.526 1.526 0 0 1-1.326 2.748M550.027 466.613c-3.397-11.325-10.72-18.056-16.604-23.464a166.297 166.297 0 0 1-2.822-2.636 13.185 13.185 0 0 1-.571 2.09c.675.636 1.379 1.283 2.103 1.949 5.713 5.25 12.823 11.785 16.069 22.608.171.57.155 1.077-.113 1.529-.289.487-.865.445-1.113-.175-1.333-3.338-5.034-11.872-6.81-12.684 2.119 4.347 4.529 10.499 5.512 13.28.164.46.358 1.385-.248 1.928-.544.488-1.111-.011-1.303-.603-4.821-14.895-9.641-19.86-15.221-25.608l-.05-.052a7.202 7.202 0 0 1-1.344 1.354l.027.025c5.62 5.824 10.091 10.395 14.776 24.868.361 1.117.92 1.684 1.406 1.973.764.453 1.602.356 2.225.026.494-.262.862-.632 1.16-1.014a2.35 2.35 0 0 1 .918-.702 3.145 3.145 0 0 0 1.087-.782c1.022-1.148 1.339-2.5.916-3.91\" /><path d=\"M512.863 414.071c-1.68-1.205-4.127-3.132-6.631-5.443a4.276 4.276 0 0 0-1.394-.869c-2.31-.869-3.816-3.307-2.56-5.081.374.949.76 1.584 1.21 2.044.392.4 1.039.115 1.126-.438.12-.767.565-1.371 1.162-1.802.08 2.943 1.226 4.261 1.623 4.628 3.215 2.98 6.534 5.476 7.977 6.362.448.276.619.889.204 1.464l-1.763 2.066c-1.674 1.706-3.005.297-2.574-.382.088-.315 1.905-2.345 1.62-2.549\" /><path d=\"M504.49 412.807a72.186 72.186 0 0 1-4.71-3.988 3.927 3.927 0 0 0-1.295-.815c-2.212-.818-3.662-3.151-2.462-4.848.34.864.69 1.455 1.095 1.888.378.405 1.039.188 1.125-.359.114-.73.537-1.305 1.104-1.715.078 2.801 1.166 4.056 1.543 4.406 2.498 2.318 5.046 4.313 6.648 5.431z\" /><path d=\"M523.703 439.587a14.702 14.702 0 0 0-6.673-.922c-2.75.26-5.722.368-8.727-.028-5.694-.75-10.936-2.936-12.756-5.798 7.136 4.259 12.941 5.015 19.597 4.546.866-.061 1.098-.885-.097-1.495-1.194-.61-2.168-.467-2.818-.394-2.883.325-8.794.123-15.327-5.157-.9-.728-1.342-1.002-2.899-1.424-3.762-1.02-8.277-3.402-9.03-5.261 3.394 2.023 6.573 3.386 10.618 4.128.652.12 1.34.11 2.153.785 4.277 3.543 8.236 4.668 10.848 4.985.971.118 1.83.135 2.548.104.773-.032 1.171-.932.685-1.533-2.469-3.054-7.759-6.118-12.156-7.451 1.948-.804 6.768 1.107 10.083 3.598 1.734 1.303 3.202 2.775 4.054 4.22.38.647.954 1.157 1.633 1.475 2.404 1.126 7.695 3.553 10.278 4.336.651.197 1.06.127 1.302-.213.21-.294.254-.828-.254-1.446-1.708-2.077-6.58-7.361-14.918-11.56-6.308-3.176-11.4-3.9-13.845-3.552-1.429.203-4.16 1.178-3.54 4.059-2.249-1.11-1.237-5.297 3.273-5.945 2.846-.41 8.274.365 14.97 3.737a52.586 52.586 0 0 1 7.934 4.918 50.373 50.373 0 0 1 2.612 2.102c.717.618 1.82-.02 1.626-.946-.91-4.353-3.557-8.654-7.267-11.442-6.972-5.24-16.6-3.795-25.095-2.521-.69.104-2.767.522-3.872.643-.752.08-1.239.93-.93 1.735.787 2.057 1.112 2.946.436 4.375-.47-1.72-1.206-2.938-2.179-3.868-.639-.611-2.006-1.751-4.155-1.953-2.006-.188-3.808-.722-6.968-1.837-.65-.23-1.19.552-.74 1.075a21.761 21.761 0 0 0 1.623 1.68 3.68 3.68 0 0 0 2.254.983c.584.04 1.234.044 1.8-.005-.352.798-1.172 1.163-1.954 1.278a1.555 1.555 0 0 0-1.282 1.206c-.5 2.237-.493 4.409 1.367 6.46 1.585 1.747 3.692 2.157 5.731 2.55 2.902.562 4.271 1.318 6.958 3.18 3.023 2.095 7.184 4.935 12.226 6.24 5.005 1.297 8.412 1.355 11.418 1.405 3.461.059 6.45.109 10.775 1.852.815.328 3.167 1.523 3.883 2.336-.519.48-.776.895-1.394 1.302-.76-.674-2.71-1.673-3.2-1.871-3.999-1.611-6.825-1.66-10.096-1.714-3.112-.052-6.639-.112-11.864-1.465-5.366-1.39-9.66-4.377-12.827-6.515-2.745-1.854-3.74-2.38-6.242-2.88-2.232-.445-4.768-.922-6.779-3.14-2.484-2.738-2.392-5.674-1.766-8.363a1.686 1.686 0 0 0-.478-1.607c-1.38-1.31-3.504-3.628-4.023-5.895-.137-.597.28-1.26 1.095-1.148 1.118.154 2.476.648 4.046 1.22 2.076.758 4.43 1.616 6.575 1.773 2.807.205 6.436-.34 10.28-.916 4.21-.632 8.98-1.347 13.542-1.194 3.598.12 6.7.775 9.39 1.974 2.68 1.327 5.11 3.353 5.643 3.885a21.73 21.73 0 0 1 3.561 4.694c.217.383 1.348 2.81 1.531 3.314.712 1.945 1.133 3.956 1.217 5.92.065 1.528.348 2.254 1.12 3.23.67.85.87 1.859.722 2.797-.144.915.971 1.797 1.641 2.284-.174.64-.256 1.555-.57 2.09-1.01-.788-4.186-2.19-6.327-3.015M310.784 443.928a1.69 1.69 0 1 1 3.357.403 1.69 1.69 0 0 1-3.357-.403\" /><path d=\"M328.294 450.117c.3 1.913 1.488 3.554 2.873 5.467.434.6.885 1.222 1.33 1.883.404.603 1.346.237 1.243-.482a15.534 15.534 0 0 0-.888-3.43c-.715-1.815-1.72-3.259-3.006-4.318-.675-.556-1.688.016-1.552.88m-3.98-7.32c-4.28-1.947-5.756-2.607-7.55-4.125-1.495-1.265-2.629-1.659-4.19-1.404-.988.162-2.817 1.102-4.377 2.042.275-1.339 1.604-2.475 3.088-3.37 1.104-.667 1.163-1.745.483-2.593a329.577 329.577 0 0 1-2.836-3.61c-5.834-7.55-12.446-16.108-22.086-17.266-5.503-.662-11.364 1.02-15.527 4.234-.602.465-.594 1.47.364 1.513.958.043 1.774-.648 2.267-.955a20.787 20.787 0 0 1 3.415-1.716c4.812-1.883 10.157-1.403 11.184.016-3.768-.469-7.377-.155-10.978 1.402-.87.376-.699 1.658.24 1.792a58.327 58.327 0 0 1 8.803 1.973c7.92 2.43 12.797 5.99 14.794 8.454 3.111 3.84 1.034 7.573-1.743 7.2 2.995-2.228 1.252-4.74.245-6.023-1.7-2.164-6.348-5.507-13.855-7.81-9.91-3.039-17.879-2.545-20.845-2.192-.938.112-1.34.616-1.402 1.05-.074.507.272.991.902 1.261a.088.088 0 0 1 .01.006.244.244 0 0 1 .024.01c3.21 1.526 7.796 3.15 10.165 3.956.9.307 1.87.356 2.79.123 6.916-1.753 17.772 2.22 18.324 4.85-4.063-2.255-11.217-4.476-16.685-3.699-.82.116-1.15 1.122-.566 1.71a26.22 26.22 0 0 0 2.756 2.401c2.765 2.091 7.35 4.681 13.484 5.101.452.031.772.204 1.181.483 1.23.836 5.437 3.494 12.367 4.37-2.01 1.185-8.819.073-13.69-2.953-6.63-.465-11.572-3.262-14.552-5.527a27.986 27.986 0 0 1-3.283-2.925c-.735-.768-1.418-1.686-2.714-2.12-1.296-.436-1.68.63-.899 1.441 2.342 2.437 4.633 4.428 6.921 6.02 4.036 2.806 8.721 4.667 13.457 5.94-3.139.957-10.042-1.825-14.273-4.768-2.848-1.98-5.69-4.55-8.616-7.794a18.669 18.669 0 0 0-6.572-4.679c-1.993-.845-4.084-1.737-4.862-2.052-8.22-3.326-15.318-6.198-26.859-19.125-.409-.459-1.4-.759-1.79.07-.392.826.31 1.712.68 2.13 2.141 2.422 6.702 7.223 15.346 13.17-4.326-.525-12.749-8.562-16.096-11.937-.615-.62-1.268-.662-1.56-.05-.29.612.082 1.292.6 1.897 8.154 9.543 18.303 12.992 26.458 15.763 2.08.707 4.045 1.374 5.836 2.092 4.78 1.914 7.204 4.16 10.012 6.761 2.448 2.268 5.223 4.84 10.233 7.646 5.053 2.83 10.576 3.722 14.605 4.393 4.048.673 5.191.981 7.966 2.777 1.946 1.26 3.964 2.554 6.606 2.37 3.241-.228 4.941-2.126 6.297-4.454a1.37 1.37 0 0 0-.143-1.58c-.569-.665-.959-1.579-.708-2.615.941 1.353 2.171 2.321 3.851 2.38.878.032 2.09.006 3.314-.158.677-.09.811-1.014.19-1.297m4.094 1.972a.811.811 0 0 0-.408.742c.012.3.176.554.487.693 2.764 1.234 4.892 3.493 6.137 6.653.933 2.368 1.16 4.634 1.186 6.117.033 1.844-.223 3.464-.702 4.456a.986.986 0 0 1-.748.561.953.953 0 0 1-1.034-.659c-.844-2.68-2.297-4.689-3.703-6.63-1.99-2.75-3.88-5.362-3.157-9.1.071-.37.102-.849-.285-1.294-.388-.446-.874-.48-1.346-.406-1.343.214-2.675.265-3.696.261a2.056 2.056 0 0 0-1.773 1.012c-1.546 2.591-3.702 4.964-7.72 5.246-3.274.23-5.664-1.31-7.77-2.669-2.417-1.559-3.652-1.956-7.243-2.498-4.178-.63-9.882-1.617-15.228-4.61-5.208-2.918-8.07-5.57-10.597-7.91-2.669-2.473-4.973-4.608-9.426-6.392-1.743-.698-3.685-1.358-5.74-2.056-8.375-2.846-18.799-6.388-27.294-16.329-1.036-1.212-2.059-3.185-.064-5.527.292-.343.525-.736.637-1.173.128-.505.51-1.8 1.745-2.284 1.112-.435 2.343.044 3.373 1.197 11.245 12.596 17.823 15.258 26.151 18.628.56.227 1.466.225 2.018-.668.401-.648 1.036-1.133 1.731-1.405.5-.195 1.358-.304 2.11-.369a2.316 2.316 0 0 0 1.526-.763c1.731-1.943 3.958-3.56 6.456-4.765.511-.246.767-.826.593-1.366l-.72-2.23c-.16-.489.19-1.027.702-1.15 2.294-.554 7.092-1.978 11.37-3.892 1.32-.592 2.23-1.97 2.98-4.246.505.634.791 1.435.734 2.285-.039.58.586.973 1.084.674.787-.472 1.336-1.086 1.86-1.645.401 1.161.051 2.2-.856 2.988a5.492 5.492 0 0 1-3.338 1.34 5.643 5.643 0 0 0-1.976.474c-3.552 1.582-7.155 2.707-9.352 3.328-.585.165-.995.684-.705 1.373.222.528.814.797 1.364.636a24.09 24.09 0 0 1 6.42-.968 6.645 6.645 0 0 0 2.854-.695c1.435-.706 3.498-1.906 5.356-3.48a38.293 38.293 0 0 0 3.761-3.63c.293.747.174 1.515-.049 2.234-.157.507.124 1.021.771.967.848-.07 1.75-.608 2.564-.996-.05 1.95-2.274 3.375-4.746 2.723-.37-.098-.82-.06-1.11.19-.9.78-1.846 1.462-2.754 2.044a.94.94 0 0 0 .217 1.687c3.23 1.072 6.357 2.98 9.474 5.772 3.761 3.37 7.027 7.597 9.91 11.327 2.636 3.413 5.127 6.637 7.54 8.632 1.848 1.53 4.397 2.65 6.645 3.64 1.712.751 3.198 1.39 4.193 2.142.584.442.56 1.22-.409 1.783\" /></g></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/magnify.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "magnify--sprite",
  "use": "magnify--sprite-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\" id=\"magnify--sprite\"><path d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" /></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/menu.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "menu--sprite",
  "use": "menu--sprite-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\" id=\"menu--sprite\"><path d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" /></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/minus.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "minus--sprite",
  "use": "minus--sprite-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"minus--sprite\">\n  <rect x=\"-0.054\" y=\"17.5\" width=\"40.014\" height=\"5\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* unused harmony default export */ var _unused_webpack_default_export = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/odnoklassniki-square-brands.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "odnoklassniki-square-brands--sprite",
  "use": "odnoklassniki-square-brands--sprite-usage",
  "viewBox": "0 0 448 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" id=\"odnoklassniki-square-brands--sprite\"><path d=\"M184.2 177.1c0-22.1 17.9-40 39.8-40s39.8 17.9 39.8 40c0 22-17.9 39.8-39.8 39.8s-39.8-17.9-39.8-39.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-305.1 97.1c0 44.6 36.4 80.9 81.1 80.9s81.1-36.2 81.1-80.9c0-44.8-36.4-81.1-81.1-81.1s-81.1 36.2-81.1 81.1zm174.5 90.7c-4.6-9.1-17.3-16.8-34.1-3.6 0 0-22.7 18-59.3 18s-59.3-18-59.3-18c-16.8-13.2-29.5-5.5-34.1 3.6-7.9 16.1 1.1 23.7 21.4 37 17.3 11.1 41.2 15.2 56.6 16.8l-12.9 12.9c-18.2 18-35.5 35.5-47.7 47.7-17.6 17.6 10.7 45.8 28.4 28.6l47.7-47.9c18.2 18.2 35.7 35.7 47.7 47.9 17.6 17.2 46-10.7 28.6-28.6l-47.7-47.7-13-12.9c15.5-1.6 39.1-5.9 56.2-16.8 20.4-13.3 29.3-21 21.5-37z\" /></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/odnoklassniki.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "odnoklassniki--sprite",
  "use": "odnoklassniki--sprite-usage",
  "viewBox": "0 0 82 82",
  "content": "<symbol viewBox=\"0 0 82 82\" xmlns=\"http://www.w3.org/2000/svg\" id=\"odnoklassniki--sprite\">\n  <path d=\"M 68.986 0 L 13.004 0 C 5.851 0 0 5.822 0 12.925 L 0 68.559 C 0 75.672 5.851 81.483 13.004 81.483 L 68.986 81.483 C 76.139 81.483 82 75.672 82 68.559 L 82 12.925 C 82 5.822 76.139 0 68.986 0 Z M 41.487 7.799 C 50.766 7.819 58.217 15.369 58.167 24.687 C 58.117 33.797 50.547 41.179 41.288 41.149 C 32.118 41.109 24.598 33.559 24.648 24.439 C 24.697 15.21 32.228 7.769 41.487 7.799 Z M 60.283 47.696 C 58.227 49.792 55.763 51.302 53.021 52.365 C 50.418 53.359 47.587 53.865 44.775 54.203 C 45.192 54.66 45.391 54.889 45.659 55.147 C 49.474 58.962 53.309 62.757 57.114 66.582 C 58.415 67.883 58.684 69.502 57.968 71.012 C 57.193 72.671 55.445 73.764 53.726 73.645 C 52.643 73.566 51.799 73.029 51.044 72.284 C 48.163 69.403 45.232 66.572 42.401 63.641 C 41.586 62.787 41.189 62.945 40.464 63.691 C 37.563 66.651 34.622 69.572 31.661 72.473 C 30.32 73.784 28.741 74.013 27.191 73.268 C 25.562 72.483 24.519 70.814 24.598 69.145 C 24.648 68.012 25.214 67.148 25.989 66.373 C 29.774 62.618 33.539 58.862 37.304 55.107 C 37.563 54.859 37.791 54.591 38.149 54.213 C 33.013 53.677 28.373 52.415 24.409 49.335 C 23.922 48.948 23.406 48.58 22.959 48.153 C 21.22 46.494 21.051 44.596 22.422 42.639 C 23.595 40.97 25.572 40.513 27.618 41.477 C 28.025 41.666 28.403 41.894 28.761 42.142 C 36.152 47.199 46.315 47.338 53.736 42.371 C 54.471 41.815 55.266 41.358 56.17 41.129 C 57.948 40.672 59.598 41.318 60.551 42.858 C 61.634 44.616 61.624 46.335 60.283 47.696 Z M 41.467 32.635 C 46.017 32.615 49.633 28.989 49.623 24.459 C 49.603 19.929 45.977 16.313 41.417 16.313 C 36.827 16.313 33.162 19.988 33.201 24.558 C 33.241 29.069 36.897 32.655 41.467 32.635 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/plus.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "plus--sprite",
  "use": "plus--sprite-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" id=\"plus--sprite\">\n  <path d=\"M 17.5 0 L 22.5 0 L 22.5 17.5 L 39.96 17.5 L 39.96 22.5 L 22.5 22.5 L 22.5 40 L 17.5 40 L 17.5 22.5 L -0.054 22.5 L -0.054 17.5 L 17.5 17.5 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* unused harmony default export */ var _unused_webpack_default_export = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/sliders.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "sliders--sprite",
  "use": "sliders--sprite-usage",
  "viewBox": "0 0 26 26",
  "content": "<symbol viewBox=\"0 0 26 26\" xmlns=\"http://www.w3.org/2000/svg\" id=\"sliders--sprite\">\n  <path d=\"M 24 14 L 16.86 14 L 16.86 14 C 16.41 15.72 14.86 17 13 17 C 11.14 17 9.59 15.72 9.14 14 L 9.14 14 L 2 14 C 1.45 14 1 13.55 1 13 C 1 12.45 1.45 12 2 12 L 9.14 12 C 9.59 10.28 11.14 9 13 9 C 14.86 9 16.41 10.28 16.86 12 L 24 12 C 24.55 12 25 12.45 25 13 C 25 13.55 24.55 14 24 14 Z M 13 11 C 11.9 11 11 11.9 11 13 C 11 14.1 11.9 15 13 15 C 14.1 15 15 14.1 15 13 C 15 11.9 14.1 11 13 11 Z M 24 6 L 22.86 6 C 22.41 7.72 20.86 9 19 9 C 17.14 9 15.59 7.72 15.14 6 L 2 6 C 1.45 6 1 5.55 1 5 C 1 4.45 1.45 4 2 4 L 15.14 4 L 15.14 4 C 15.59 2.28 17.14 1 19 1 C 20.86 1 22.41 2.28 22.86 4 L 22.86 4 L 24 4 C 24.55 4 25 4.45 25 5 C 25 5.55 24.55 6 24 6 Z M 19 3 C 17.9 3 17 3.9 17 5 C 17 6.1 17.9 7 19 7 C 20.1 7 21 6.1 21 5 C 21 3.9 20.1 3 19 3 Z M 2 20 L 3.14 20 C 3.59 18.28 5.14 17 7 17 C 8.86 17 10.41 18.28 10.86 20 L 10.86 20 L 24 20 C 24.55 20 25 20.45 25 21 C 25 21.55 24.55 22 24 22 L 10.86 22 L 10.86 22 C 10.41 23.72 8.86 25 7 25 C 5.14 25 3.59 23.72 3.14 22 L 3.14 22 L 2 22 C 1.45 22 1 21.55 1 21 C 1 20.45 1.45 20 2 20 Z M 7 23 C 8.1 23 9 22.1 9 21 C 9 19.9 8.1 19 7 19 C 5.9 19 5 19.9 5 21 C 5 22.1 5.9 23 7 23 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* unused harmony default export */ var _unused_webpack_default_export = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/twitter-square-brands.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "twitter-square-brands--sprite",
  "use": "twitter-square-brands--sprite-usage",
  "viewBox": "0 0 448 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" id=\"twitter-square-brands--sprite\"><path d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z\" /></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/vk-square-brands.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "vk-square-brands--sprite",
  "use": "vk-square-brands--sprite-usage",
  "viewBox": "0 0 448 512",
  "content": "<symbol viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\" id=\"vk-square-brands--sprite\">\n  <path d=\"M 448 80 L 448 432 C 448 458.5 426.5 480 400 480 L 48 480 C 21.5 480 0 458.5 0 432 L 0 80 C 0 53.5 21.5 32 48 32 L 400 32 C 426.5 32 448 53.5 448 80 Z M 397.14 162.851 C 399.632 154.432 397.14 148.235 385.151 148.235 L 345.48 148.235 C 335.377 148.235 330.73 153.556 328.238 159.483 C 328.238 159.483 308.031 208.719 279.474 240.644 C 270.246 249.872 266.003 252.835 260.951 252.835 C 258.459 252.835 254.62 249.872 254.62 241.452 L 254.62 162.851 C 254.62 152.748 251.791 148.235 243.439 148.235 L 181.07 148.235 C 174.739 148.235 170.967 152.95 170.967 157.328 C 170.967 166.892 185.246 169.115 186.728 196.056 L 186.728 254.519 C 186.728 267.316 184.438 269.674 179.386 269.674 C 165.915 269.674 133.182 220.236 113.784 163.659 C 109.877 152.68 106.038 148.235 95.868 148.235 L 56.196 148.235 C 44.881 148.235 42.591 153.556 42.591 159.483 C 42.591 169.99 56.062 222.189 105.297 291.159 C 138.098 338.239 184.303 363.766 226.332 363.766 C 251.589 363.766 254.687 358.109 254.687 348.342 C 254.687 303.35 252.397 299.107 265.06 299.107 C 270.92 299.107 281.023 302.071 304.596 324.769 C 331.538 351.71 335.983 363.766 351.07 363.766 L 390.742 363.766 C 402.057 363.766 407.782 358.109 404.482 346.928 C 396.938 323.422 345.952 275.062 343.662 271.829 C 337.802 264.285 339.486 260.918 343.662 254.182 C 343.729 254.115 392.156 185.953 397.14 162.851 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/vk.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "vk--sprite",
  "use": "vk--sprite-usage",
  "viewBox": "0 0 82 82",
  "content": "<symbol viewBox=\"0 0 82 82\" xmlns=\"http://www.w3.org/2000/svg\" id=\"vk--sprite\">\n  <path id=\"vk--sprite_Фигура 2\" class=\"shp0\" d=\"M 68.988 0 L 13.012 0 C 5.855 0 0 5.825 0 12.933 L 0 68.56 C 0 75.668 5.855 81.493 13.012 81.493 L 68.988 81.493 C 76.145 81.493 82 75.668 82 68.56 L 82 12.933 C 82 5.825 76.145 0 68.988 0 Z M 63.471 45.26 C 65.687 47.417 68.043 49.445 70.041 51.83 C 70.916 52.884 71.751 53.968 72.387 55.19 C 73.292 56.94 72.477 58.848 70.906 58.958 L 61.135 58.958 C 58.62 59.157 56.612 58.153 54.912 56.433 C 53.57 55.071 52.307 53.61 51.005 52.198 C 50.478 51.622 49.922 51.075 49.256 50.637 C 47.924 49.783 46.761 50.041 45.995 51.423 C 45.22 52.834 45.041 54.395 44.971 55.956 C 44.862 58.242 44.166 58.838 41.86 58.958 C 36.919 59.176 32.237 58.431 27.883 55.966 C 24.046 53.779 21.064 50.697 18.48 47.218 C 13.43 40.418 9.573 32.963 6.104 25.289 C 5.318 23.559 5.885 22.625 7.803 22.595 C 10.994 22.535 14.185 22.545 17.366 22.595 C 18.668 22.615 19.523 23.35 20.02 24.563 C 21.75 28.778 23.857 32.784 26.502 36.502 C 27.207 37.486 27.933 38.48 28.947 39.176 C 30.08 39.951 30.945 39.693 31.482 38.44 C 31.82 37.635 31.969 36.79 32.039 35.935 C 32.297 33.003 32.327 30.08 31.889 27.158 C 31.621 25.339 30.577 24.156 28.748 23.808 C 27.814 23.639 27.953 23.291 28.4 22.764 C 29.196 21.849 29.931 21.283 31.402 21.283 L 42.446 21.283 C 44.186 21.621 44.574 22.396 44.812 24.136 L 44.822 36.323 C 44.792 36.999 45.16 38.997 46.373 39.434 C 47.347 39.752 47.993 38.977 48.58 38.361 C 51.224 35.577 53.113 32.277 54.793 28.868 C 55.538 27.366 56.184 25.816 56.811 24.255 C 57.278 23.102 57.993 22.535 59.306 22.555 L 69.932 22.565 C 70.24 22.565 70.568 22.565 70.876 22.615 C 72.656 22.923 73.153 23.688 72.596 25.428 C 71.731 28.152 70.032 30.428 68.371 32.705 C 66.602 35.14 64.713 37.496 62.944 39.941 C 61.333 42.188 61.463 43.321 63.471 45.26 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/youtube.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__ = __webpack_require__("svg-baker-runtime/symbol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__ = __webpack_require__("svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_symbol___default.a({
  "id": "youtube--sprite",
  "use": "youtube--sprite-usage",
  "viewBox": "0 0 82 82",
  "content": "<symbol viewBox=\"0 0 82 82\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:bx=\"https://boxy-svg.com\" id=\"youtube--sprite\">\n  <path d=\"M 68.988 0 L 13.012 0 C 5.855 0 0 5.825 0 12.933 L 0 68.56 C 0 75.668 5.855 81.493 13.012 81.493 L 68.988 81.493 C 76.145 81.493 82 75.668 82 68.56 L 82 12.933 C 82 5.825 76.145 0 68.988 0 Z M 69.167 50.339 C 68.859 54.146 65.946 58.988 61.91 59.683 C 48.938 60.677 33.54 60.538 20.08 59.683 C 15.915 59.147 13.151 54.117 12.843 50.339 C 12.197 42.387 12.197 37.854 12.843 29.901 C 13.151 26.094 15.965 21.114 20.08 20.637 C 33.381 19.523 48.848 19.772 61.91 20.637 C 66.562 20.826 68.859 25.587 69.167 29.404 C 69.813 37.347 69.813 42.387 69.167 50.339 Z M 35.279 51.532 L 52.457 40.13 L 35.279 28.758 L 35.279 51.532 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./lib/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mapToPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acfImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return priceFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dateFormatter; });
/* unused harmony export dateFormatterFull */
/* unused harmony export timeFormatter */
/* unused harmony export linkToProductsList */
/* unused harmony export linkToPostsList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pluralize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onFetchMore; });
/* unused harmony export updateCurrentRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return gotoWPRoute; });
/* harmony export (immutable) */ __webpack_exports__["i"] = stringMatchAll;
/* unused harmony export scheduleOrPeriod */
/* unused harmony export YA_COUNTER */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__("qs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var mapToPage = __webpack_require__("../server/map-to-page.js");


var acfImage = function acfImage(image) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'original';
  return image && image.sizes ? {
    file: size === 'original' ? image.url : image.sizes[size],
    width: size === 'original' ? image.width : image.sizes["".concat(size, "-width")],
    height: size === 'original' ? image.height : image.sizes["".concat(size, "-height")]
  } : {};
};
var priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
var dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit'
});
var dateFormatterFull = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});
var timeFormatter = new Intl.DateTimeFormat('ru-RU', {
  timeZone: 'UTC',
  hour: 'numeric',
  minute: '2-digit'
}); // export const pluralRules = new Intl.PluralRules("ru-RU")

var linkToProductsList = function linkToProductsList(product) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    template: product.pure_taxonomies.f3_product_category[0].slug,
    type: 'page',
    id: null,
    //28
    main_id: product.pure_taxonomies.f3_product_category[0].term_id,
    link: "/products/".concat(product.pure_taxonomies.f3_product_category[0].slug),
    query: query
  };
};
var linkToPostsList = function linkToPostsList(post) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    template: post.pure_taxonomies.categories[0].slug,
    type: 'page',
    id: null,
    //28
    main_id: post.pure_taxonomies.categories[0].term_id,
    link: "/".concat(post.pure_taxonomies.categories[0].slug),
    query: query
  };
};
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals
https://www.i18next.com/translation-function/plurals
 */

var pluralize = function pluralize(selectors) {
  return function (number) {
    var n = Math.abs(number);
    n %= 100;

    if (n >= 5 && n <= 20) {
      return selectors['many'];
    }

    n %= 10;

    if (n === 1) {
      return selectors['one'];
    }

    if (n >= 2 && n <= 4) {
      return selectors['few'];
    }

    return selectors['many'];
  };
};
var onFetchMore = function onFetchMore(fetchMore, offset, key) {
  return function () {
    console.log('onFetchMore key:', key);
    fetchMore({
      variables: {
        offset: offset
      },
      updateQuery: function updateQuery(prevResult, _ref) {
        var fetchMoreResult = _ref.fetchMoreResult;
        console.log('updateQuery prevResult:', prevResult, 'fetchMoreResult:', fetchMoreResult);
        return !fetchMoreResult ? prevResult : _objectSpread({}, prevResult, _defineProperty({}, key, _toConsumableArray(prevResult[key]).concat(_toConsumableArray(fetchMoreResult[key]))));
      }
    });
    updateCurrentRoute({
      internal: {
        offset: offset
      },
      replace: true
    });
  };
};
var updateCurrentRoute = function updateCurrentRoute(_ref2) {
  var _ref2$fragment = _ref2.fragment,
      fragment = _ref2$fragment === void 0 ? {} : _ref2$fragment,
      _ref2$internal = _ref2.internal,
      internal = _ref2$internal === void 0 ? {} : _ref2$internal,
      _ref2$replace = _ref2.replace,
      replace = _ref2$replace === void 0 ? false : _ref2$replace,
      _ref2$shallow = _ref2.shallow,
      shallow = _ref2$shallow === void 0 ? false : _ref2$shallow;

  if (!process.browser) {
    return;
  }

  var pathname = __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.pathname,
      query = __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.query,
      asPath = __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.asPath;

  var newQuery = _objectSpread({}, query, internal, fragment); // const {page_id, main_id, ...newAsQuery} = newQuery


  var newAsPath = asPath.split("?")[0];
  var newAsQuery = __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(fragment);
  __WEBPACK_IMPORTED_MODULE_1_next_router___default.a[replace ? "replace" : "push"]({
    pathname: pathname,
    query: newQuery
  }, "".concat(newAsPath).concat(newAsQuery ? '?' : '').concat(newAsQuery), {
    shallow: shallow
  });
};
var formatDate = function formatDate(date, formatter) {
  try {
    var theDate = new Date(date);
    return formatter.format(theDate);
  } catch (e) {
    return '';
  }
};
var gotoWPRoute = function gotoWPRoute(_ref3) {
  var wp = _ref3.wp,
      _ref3$fragment = _ref3.fragment,
      fragment = _ref3$fragment === void 0 ? {} : _ref3$fragment,
      _ref3$replace = _ref3.replace,
      replace = _ref3$replace === void 0 ? false : _ref3$replace,
      _ref3$shallow = _ref3.shallow,
      shallow = _ref3$shallow === void 0 ? false : _ref3$shallow;
  var wpLink = wp && (wp.link || wp.url || wp.post_link) || ''; // console.log('gotoWPRoute', mapToPage(wp, fragment))

  __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push(mapToPage(wp, fragment), "".concat(wpLink, "?").concat(__WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(fragment)), {
    shallow: shallow
  });
};
function stringMatchAll(regex, input) {
  var _marked =
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(exec);

  function exec(regex, input) {
    var match;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function exec$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {
              _context.next = 8;
              break;
            }

            match = regex.exec(input);

            if (!(match === null)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("break", 8);

          case 4:
            _context.next = 6;
            return match;

          case 6:
            _context.next = 0;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  return _toConsumableArray(exec(regex, input));
}
var scheduleOrPeriod = function scheduleOrPeriod(product) {
  if (product.acf.period && product.acf.period[0]) {
    return [product.acf.period[0].date_start, product.acf.period[0].date_end];
  } else {
    return (product.acf.schedule || []).map(function (item) {
      return item.date;
    });
  }
};
var YA_COUNTER = 'yaCounter50284909';

/***/ }),

/***/ "./pages/homepage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_WPLink__ = __webpack_require__("./components/WPLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_HomepageTitle__ = __webpack_require__("./components/HomepageTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_HomepageSlider__ = __webpack_require__("./components/HomepageSlider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ProductPrices__ = __webpack_require__("./components/ProductPrices.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_utils__ = __webpack_require__("./lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Testimonials__ = __webpack_require__("./components/Testimonials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Head__ = __webpack_require__("./components/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Button__ = __webpack_require__("./components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_HyperComments__ = __webpack_require__("./components/HyperComments.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Articles__ = __webpack_require__("./components/Articles.js");

var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/pages/homepage.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n         query Query($page_id: String!){\n           page(id: $page_id) @rest(type: \"Page\", path: \"/wp/v2/pages/{args.id}\") {\n             id\n             title\n             link\n             type\n             acf\n           }\n         }\n       "]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n                       query ProductsQuery($products: [String!]) {\n                         products(orderby: \"include\", include: $products, acf_only: \"list\") @rest(type: \"Product\", path: \"/wp/v2/products?{args}\") {\n                           id\n                           type\n                           link\n                           title\n                           template\n                           pure_taxonomies\n                           acf\n                         }\n                       }\n                     "]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n                 query ArticlesQuery($orderby: String!, $articles: [String!], $per_page: String, $categories: [String!]) {\n                   articles(orderby: $orderby, include: $articles, per_page: $per_page, categories: $categories, acf_only: \"list\") @rest(type: \"Post\", path: \"/wp/v2/posts?{args}\") {\n                     id\n                     type\n                     link\n                     title\n                     template\n                     acf\n                     date\n                   }\n                 }\n               "]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n                   query TestimonialsCountQuery {\n                     count @rest(type: \"TestimonialCount\", path: \"/wp/v2/testimonials/count\") {\n                       count\n                     }\n                   }\n                 "]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n                     query TestimonialsQuery($per_page: String!, $offset: String!) {\n                       testimonials(per_page: $per_page, offset: $offset) @rest(type: \"Testimonial\", path: \"/wp/v2/testimonials?{args}\") {\n                         id\n                         link\n                         type\n                         acf\n                         date\n                       }\n                     }\n                   "]);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











 // import Testimonial from '../components/Testimonial'





var TESTIMONIALS_PER_PAGE = 4;
var ARTICLES_PER_PAGE = 4;

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        product: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onProductChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(product) {
        return _this.setState({
          product: product
        });
      }
    }), _temp));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var query = this.props.query;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Query"], {
        variables: {
          page_id: query.page_id
        },
        query: __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, data && !error && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]])
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_Head__["a" /* default */], {
          title: data.page.title.rendered,
          description: "",
          url: data.page.link,
          ogImage: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Frow__["a" /* default */], {
          container: true,
          gutters: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]]) + " " + "sliders"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Frow__["a" /* default */], {
          xs: "1/1",
          md: "1/2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]])
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_HomepageTitle__["a" /* default */], {
          title: data.page.acf.products_courses.title,
          link: data.page.acf.products_courses.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Query"] // variables={{ products: (data.page.acf.products_courses.products || []).map(({ product }) => `include[]=${ product.ID }`).join('&') }}
        , {
          variables: {
            products: data.page.acf.products_courses.products ? data.page.acf.products_courses.products.filter(function (_ref3) {
              var product = _ref3.product;
              return !!product.ID;
            }).map(function (_ref4) {
              var product = _ref4.product;
              return product.ID;
            }) : [0]
          },
          query: __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, function (_ref5) {
          var loading = _ref5.loading,
              error = _ref5.error,
              acfData = _ref5.data;
          return acfData && !error && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_HomepageSlider__["a" /* default */], {
            items: (data.page.acf.products_courses.products || []).filter(function (_ref6) {
              var product = _ref6.product;
              return !!product.ID;
            }).map(function (_ref7, i) {
              var product = _ref7.product,
                  text = _ref7.text,
                  picture = _ref7.picture;
              return {
                title: text || product.post_title,
                picture: picture,
                wp: product,
                info: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react__["Fragment"], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  },
                  className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]]) + " " + "authors"
                }, (acfData.products[i].acf.teachers.persons || []).map(function (_ref8, i) {
                  var person = _ref8.person;
                  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
                    key: person.ID || i,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    },
                    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]])
                  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_WPLink__["a" /* default */], {
                    wp: person,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    }
                  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    },
                    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]])
                  }, person.post_title)));
                })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProductPrices__["a" /* ProductsListItemPrices */], {
                  variant: "compact",
                  prices: acfData.products[i].acf.prices,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                }))
              };
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          });
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Frow__["a" /* default */], {
          xs: "1/1",
          md: "1/2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]])
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_HomepageTitle__["a" /* default */], {
          title: data.page.acf.articles_materials.title,
          link: data.page.acf.articles_materials.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_HomepageSlider__["a" /* default */], {
          items: (data.page.acf.articles_materials.articles || []).filter(function (_ref9) {
            var article = _ref9.article;
            return !!article.ID;
          }).map(function (item) {
            return {
              title: item.text || item.article.post_title,
              picture: item.picture,
              wp: item.article
            };
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]]) + " " + "bg-red unbox"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_HomepageTitle__["a" /* default */], {
          variant: "white",
          title: data.page.acf.articles_articles.title,
          link: data.page.acf.articles_articles.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }), data.page.acf.articles_articles.articles && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Query"], {
          variables: data.page.acf.articles_articles.latest_articles && data.page.acf.articles_articles.latest_articles === true ? {
            orderby: 'date',
            categories: [data.page.acf.articles_articles.articles_category],
            per_page: data.page.acf.articles_articles.number_of_latest_items || ARTICLES_PER_PAGE
          } : {
            orderby: 'include',
            articles: data.page.acf.articles_articles.articles.filter(function (_ref10) {
              var article = _ref10.article;
              return !!article.ID;
            }).map(function (_ref11) {
              var article = _ref11.article;
              return article.ID;
            })
          },
          query: __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject3),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, function (_ref12) {
          var loading = _ref12.loading,
              error = _ref12.error,
              acfData = _ref12.data;
          return acfData && !error && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]]) + " " + "articles-on-red"
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Frow__["a" /* default */], {
            container: true,
            row: "start",
            items: "start",
            gutters: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          }, acfData.articles.map(function (article, i) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_Articles__["a" /* HomepageArticlesListItem */], {
              key: article.ID || i,
              article: article,
              title: data.page.acf.articles_articles.latest_articles && data.page.acf.articles_articles.latest_articles === true ? article.title.rendered : data.page.acf.articles_articles.articles[i].text || article.title.rendered,
              author: article.acf.author && article.acf.author.post_title,
              date: article.date,
              image: Object(__WEBPACK_IMPORTED_MODULE_11__lib_utils__["a" /* acfImage */])(article.acf.image),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            }) // <Frow key={article.ID || i} xs="1/1" md="1/2" hug>
            //   <article className="article-on-red">
            //     <h2 className="header-on-red"><WPLink wp={article}><a dangerouslySetInnerHTML={{__html: text || article.post_title}}/></WPLink></h2>
            //     <footer className="info-on-red">{acfData.articles[i].acf.author && acfData.articles[i].acf.author.post_title} {acfData.articles[i].date && dateFormatter.format(new Date(acfData.articles[i].date))}</footer>
            //   </article>
            // </Frow>
            ;
          })));
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]]) + " " + "testimonials-box"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_HomepageTitle__["a" /* default */], {
          title: data.page.acf.testimonials.title,
          link: data.page.acf.testimonials.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Query"], {
          query: __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject4),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, function (_ref13) {
          var countLoading = _ref13.loading,
              countError = _ref13.error,
              count = _ref13.data.count;
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Query"], {
            variables: {
              per_page: TESTIMONIALS_PER_PAGE,
              offset: 0
            },
            query: __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject5),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            }
          }, function (_ref14) {
            var testimonialsLoading = _ref14.loading,
                testimonialsError = _ref14.error,
                testimonials = _ref14.data.testimonials,
                fetchMore = _ref14.fetchMore,
                variables = _ref14.variables;
            return testimonials && !testimonialsError && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 185
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Testimonials__["a" /* default */], {
              count: count.count,
              items: testimonials,
              exclude: ["title"],
              addButtonTitle: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432 \u043E \u043D\u0430\u0441",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 186
              }
            }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Frow__["a" /* default */], {
              container: true,
              row: "center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188
              },
              className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]]) + " " + "load-more-box"
            }, testimonials.length < count.count && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_Button__["a" /* LoadMoreButton */], {
              loading: testimonialsLoading,
              onClick: Object(__WEBPACK_IMPORTED_MODULE_11__lib_utils__["f" /* onFetchMore */])(fetchMore, testimonials.length, 'testimonials'),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189
              }
            }))));
          });
        })), data.page.acf.allow_comments && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3792195812", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]]])
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_HyperComments__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: "3792195812",
          css: ".sliders.__jsx-style-dynamic-selector{margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), ";}.sliders.__jsx-style-dynamic-selector section.__jsx-style-dynamic-selector+section.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), ";}.bg-red.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, ";color:#fff;padding-top:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), ";padding-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), ";margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), ";}.bg-red.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;}.authors.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), ";}.authors.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-weight:700;color:#000;font-size:0.88889rem;-webkit-text-decoration:none;text-decoration:none;}.authors.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}.authors.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector::before{content:\", \";}.testimonials-box.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), ";}.load-more-box.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), ";}@media (min-width:992px){.sliders.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), ";}.sliders.__jsx-style-dynamic-selector section.__jsx-style-dynamic-selector+section.__jsx-style-dynamic-selector{margin-top:0;}.bg-red.__jsx-style-dynamic-selector{padding-top:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), ";padding-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), ";margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), ";}.authors.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), ";}.testimonials-box.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), ";}.load-more-box.__jsx-style-dynamic-selector{margin-top:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L3BhZ2VzL2hvbWVwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRNcUIsQUFHeUQsQUFJSCxBQUlNLEFBUW5DLEFBSWdDLEFBSTNCLEFBT1UsQUFJYixBQUk4QixBQUlILEFBS0ssQUFJOUIsQUFJNkIsQUFNRSxBQUlBLEFBSS9CLFdBckRqQixFQW1CQSxBQWlCRSxBQWtCQSxHQTlDVyxXQUNVLGFBckJ2QixBQXVDQSxFQWFpRCxDQXhEakQsQUFvQkEsQUFtQkEsQUFTRSxDQWNBLEFBSUEsRUExRFcsRUFrQlUsU0FqQm9CLEdBc0IzQywyQkEwQmdELFdBL0NGLEFBaUI5QyxpQ0ErQkUsV0EvQzJDLDJDQUM3QyIsImZpbGUiOiJzcmMvbmV4dC9wYWdlcy9ob21lcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcblxuaW1wb3J0IEZyb3cgZnJvbSAnLi4vY29tcG9uZW50cy9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBXUExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9XUExpbmsnXG5pbXBvcnQgSG9tZXBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVwYWdlVGl0bGUnXG5pbXBvcnQgSG9tZXBhZ2VTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lcGFnZVNsaWRlcidcbmltcG9ydCB7IFByb2R1Y3RzTGlzdEl0ZW1QcmljZXMgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RQcmljZXMnXG5pbXBvcnQgeyBvbkZldGNoTW9yZSwgYWNmSW1hZ2UgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdGltb25pYWxzJ1xuLy8gaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdGltb25pYWwnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnXG5pbXBvcnQgeyBMb2FkTW9yZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IEh5cGVyQ29tbWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9IeXBlckNvbW1lbnRzJ1xuaW1wb3J0IHsgSG9tZXBhZ2VBcnRpY2xlc0xpc3RJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlcydcblxuY29uc3QgVEVTVElNT05JQUxTX1BFUl9QQUdFID0gNFxuY29uc3QgQVJUSUNMRVNfUEVSX1BBR0UgPSA0XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuXG4gICAgcmV0dXJuIHsgcXVlcnkgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgcHJvZHVjdDogJycsXG4gIH1cblxuICBvblByb2R1Y3RDaGFuZ2UgPSAocHJvZHVjdCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3QgfSlcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICA8UXVlcnlcbiAgICAgICB2YXJpYWJsZXM9e3sgcGFnZV9pZDogcXVlcnkucGFnZV9pZCB9fVxuICAgICAgIHF1ZXJ5PXtncWxgXG4gICAgICAgICBxdWVyeSBRdWVyeSgkcGFnZV9pZDogU3RyaW5nISl7XG4gICAgICAgICAgIHBhZ2UoaWQ6ICRwYWdlX2lkKSBAcmVzdCh0eXBlOiBcIlBhZ2VcIiwgcGF0aDogXCIvd3AvdjIvcGFnZXMve2FyZ3MuaWR9XCIpIHtcbiAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICBhY2ZcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIGB9XG4gICAgID57KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4gKFxuICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgIHsoZGF0YSAmJiAhZXJyb3IpICYmIDxkaXY+XG4gICAgICAgICAgIDxIZWFkXG4gICAgICAgICAgICAgdGl0bGU9e2RhdGEucGFnZS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlwiXG4gICAgICAgICAgICAgdXJsPXtkYXRhLnBhZ2UubGlua31cbiAgICAgICAgICAgICBvZ0ltYWdlPVwiXCJcbiAgICAgICAgICAgLz5cbiAgICAgICAgIDxGcm93IGNvbnRhaW5lciBndXR0ZXJzPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyc1wiPlxuICAgICAgICAgICAgICAgPEZyb3cgeHM9XCIxLzFcIiBtZD1cIjEvMlwiPlxuICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICA8SG9tZXBhZ2VUaXRsZSB0aXRsZT17ZGF0YS5wYWdlLmFjZi5wcm9kdWN0c19jb3Vyc2VzLnRpdGxlfSBsaW5rPXtkYXRhLnBhZ2UuYWNmLnByb2R1Y3RzX2NvdXJzZXMubGlua30vPlxuICAgICAgICAgICAgICAgICAgIDxRdWVyeVxuICAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFibGVzPXt7IHByb2R1Y3RzOiAoZGF0YS5wYWdlLmFjZi5wcm9kdWN0c19jb3Vyc2VzLnByb2R1Y3RzIHx8IFtdKS5tYXAoKHsgcHJvZHVjdCB9KSA9PiBgaW5jbHVkZVtdPSR7IHByb2R1Y3QuSUQgfWApLmpvaW4oJyYnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBkYXRhLnBhZ2UuYWNmLnByb2R1Y3RzX2NvdXJzZXMucHJvZHVjdHMgPyBkYXRhLnBhZ2UuYWNmLnByb2R1Y3RzX2NvdXJzZXMucHJvZHVjdHMuZmlsdGVyKCh7IHByb2R1Y3QgfSkgPT4gISFwcm9kdWN0LklEKS5tYXAoKHsgcHJvZHVjdCB9KSA9PiBwcm9kdWN0LklEKSA6IFswXVxuICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtncWxgXG4gICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5IFByb2R1Y3RzUXVlcnkoJHByb2R1Y3RzOiBbU3RyaW5nIV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhvcmRlcmJ5OiBcImluY2x1ZGVcIiwgaW5jbHVkZTogJHByb2R1Y3RzLCBhY2Zfb25seTogXCJsaXN0XCIpIEByZXN0KHR5cGU6IFwiUHJvZHVjdFwiLCBwYXRoOiBcIi93cC92Mi9wcm9kdWN0cz97YXJnc31cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyZV90YXhvbm9taWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICA+eyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhOiBhY2ZEYXRhIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgIChhY2ZEYXRhICYmICFlcnJvcikgJiYgPEhvbWVwYWdlU2xpZGVyIGl0ZW1zPXsoZGF0YS5wYWdlLmFjZi5wcm9kdWN0c19jb3Vyc2VzLnByb2R1Y3RzIHx8IFtdKS5maWx0ZXIoKHsgcHJvZHVjdCB9KSA9PiAhIXByb2R1Y3QuSUQpLm1hcCgoeyBwcm9kdWN0LCB0ZXh0LCBwaWN0dXJlIH0sIGkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRleHQgfHwgcHJvZHVjdC5wb3N0X3RpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmU6IHBpY3R1cmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgd3A6IHByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW5mbzogPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JzXCI+eyhhY2ZEYXRhLnByb2R1Y3RzW2ldLmFjZi50ZWFjaGVycy5wZXJzb25zIHx8IFtdKS5tYXAoKHsgcGVyc29uIH0sIGkpID0+IDxzcGFuIGtleT17cGVyc29uLklEIHx8IGl9PjxXUExpbmsgd3A9e3BlcnNvbn0+PGE+e3BlcnNvbi5wb3N0X3RpdGxlfTwvYT48L1dQTGluaz48L3NwYW4+KX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0c0xpc3RJdGVtUHJpY2VzIHZhcmlhbnQ9XCJjb21wYWN0XCIgcHJpY2VzPXthY2ZEYXRhLnByb2R1Y3RzW2ldLmFjZi5wcmljZXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICB9KSl9Lz5cbiAgICAgICAgICAgICAgICAgICApfTwvUXVlcnk+XG4gICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgIDwvRnJvdz5cbiAgICAgICAgICAgICAgIDxGcm93IHhzPVwiMS8xXCIgbWQ9XCIxLzJcIj5cbiAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICA8SG9tZXBhZ2VUaXRsZSB0aXRsZT17ZGF0YS5wYWdlLmFjZi5hcnRpY2xlc19tYXRlcmlhbHMudGl0bGV9IGxpbms9e2RhdGEucGFnZS5hY2YuYXJ0aWNsZXNfbWF0ZXJpYWxzLmxpbmt9Lz5cbiAgICAgICAgICAgICAgICAgPEhvbWVwYWdlU2xpZGVyIGl0ZW1zPXsoZGF0YS5wYWdlLmFjZi5hcnRpY2xlc19tYXRlcmlhbHMuYXJ0aWNsZXMgfHwgW10pLmZpbHRlcigoeyBhcnRpY2xlIH0pID0+ICEhYXJ0aWNsZS5JRCkubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS50ZXh0IHx8IGl0ZW0uYXJ0aWNsZS5wb3N0X3RpdGxlLFxuICAgICAgICAgICAgICAgICAgIHBpY3R1cmU6IGl0ZW0ucGljdHVyZSxcbiAgICAgICAgICAgICAgICAgICB3cDogaXRlbS5hcnRpY2xlXG4gICAgICAgICAgICAgICAgIH0pKX0vPlxuICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXJlZCB1bmJveFwiPlxuICAgICAgICAgICAgIDxIb21lcGFnZVRpdGxlIHZhcmlhbnQ9XCJ3aGl0ZVwiIHRpdGxlPXtkYXRhLnBhZ2UuYWNmLmFydGljbGVzX2FydGljbGVzLnRpdGxlfSBsaW5rPXtkYXRhLnBhZ2UuYWNmLmFydGljbGVzX2FydGljbGVzLmxpbmt9Lz5cbiAgICAgICAgICAgICB7ZGF0YS5wYWdlLmFjZi5hcnRpY2xlc19hcnRpY2xlcy5hcnRpY2xlcyAmJiA8UXVlcnlcbiAgICAgICAgICAgICAgIHZhcmlhYmxlcz17XG4gICAgICAgICAgICAgICAgIGRhdGEucGFnZS5hY2YuYXJ0aWNsZXNfYXJ0aWNsZXMubGF0ZXN0X2FydGljbGVzICYmIGRhdGEucGFnZS5hY2YuYXJ0aWNsZXNfYXJ0aWNsZXMubGF0ZXN0X2FydGljbGVzID09PSB0cnVlXG4gICAgICAgICAgICAgICAgID8geyBvcmRlcmJ5OiAnZGF0ZScsIGNhdGVnb3JpZXM6IFtkYXRhLnBhZ2UuYWNmLmFydGljbGVzX2FydGljbGVzLmFydGljbGVzX2NhdGVnb3J5XSwgcGVyX3BhZ2U6IGRhdGEucGFnZS5hY2YuYXJ0aWNsZXNfYXJ0aWNsZXMubnVtYmVyX29mX2xhdGVzdF9pdGVtcyB8fCBBUlRJQ0xFU19QRVJfUEFHRSB9XG4gICAgICAgICAgICAgICAgIDogeyBvcmRlcmJ5OiAnaW5jbHVkZScsIGFydGljbGVzOiBkYXRhLnBhZ2UuYWNmLmFydGljbGVzX2FydGljbGVzLmFydGljbGVzLmZpbHRlcigoeyBhcnRpY2xlIH0pID0+ICEhYXJ0aWNsZS5JRCkubWFwKCh7IGFydGljbGUgfSkgPT4gYXJ0aWNsZS5JRCkgfX1cbiAgICAgICAgICAgICAgIHF1ZXJ5PXtncWxgXG4gICAgICAgICAgICAgICAgIHF1ZXJ5IEFydGljbGVzUXVlcnkoJG9yZGVyYnk6IFN0cmluZyEsICRhcnRpY2xlczogW1N0cmluZyFdLCAkcGVyX3BhZ2U6IFN0cmluZywgJGNhdGVnb3JpZXM6IFtTdHJpbmchXSkge1xuICAgICAgICAgICAgICAgICAgIGFydGljbGVzKG9yZGVyYnk6ICRvcmRlcmJ5LCBpbmNsdWRlOiAkYXJ0aWNsZXMsIHBlcl9wYWdlOiAkcGVyX3BhZ2UsIGNhdGVnb3JpZXM6ICRjYXRlZ29yaWVzLCBhY2Zfb25seTogXCJsaXN0XCIpIEByZXN0KHR5cGU6IFwiUG9zdFwiLCBwYXRoOiBcIi93cC92Mi9wb3N0cz97YXJnc31cIikge1xuICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgYWNmXG4gICAgICAgICAgICAgICAgICAgICBkYXRlXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgPnsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YTogYWNmRGF0YSB9KSA9PiAoXG4gICAgICAgICAgICAgICAoYWNmRGF0YSAmJiAhZXJyb3IpICYmIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZXMtb24tcmVkXCI+XG4gICAgICAgICAgICAgICAgIDxGcm93IGNvbnRhaW5lciByb3c9XCJzdGFydFwiIGl0ZW1zPVwic3RhcnRcIiBndXR0ZXJzPlxuICAgICAgICAgICAgICAgICAgIHthY2ZEYXRhLmFydGljbGVzLm1hcCgoYXJ0aWNsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgPEhvbWVwYWdlQXJ0aWNsZXNMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17YXJ0aWNsZS5JRCB8fCBpfVxuICAgICAgICAgICAgICAgICAgICAgIGFydGljbGU9e2FydGljbGV9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyBkYXRhLnBhZ2UuYWNmLmFydGljbGVzX2FydGljbGVzLmxhdGVzdF9hcnRpY2xlcyAmJiBkYXRhLnBhZ2UuYWNmLmFydGljbGVzX2FydGljbGVzLmxhdGVzdF9hcnRpY2xlcyA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhcnRpY2xlLnRpdGxlLnJlbmRlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGEucGFnZS5hY2YuYXJ0aWNsZXNfYXJ0aWNsZXMuYXJ0aWNsZXNbaV0udGV4dCB8fCBhcnRpY2xlLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17YXJ0aWNsZS5hY2YuYXV0aG9yICYmIGFydGljbGUuYWNmLmF1dGhvci5wb3N0X3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2FydGljbGUuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17YWNmSW1hZ2UoYXJ0aWNsZS5hY2YuaW1hZ2UpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgLy8gPEZyb3cga2V5PXthcnRpY2xlLklEIHx8IGl9IHhzPVwiMS8xXCIgbWQ9XCIxLzJcIiBodWc+XG4gICAgICAgICAgICAgICAgICAgICAvLyAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFydGljbGUtb24tcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlci1vbi1yZWRcIj48V1BMaW5rIHdwPXthcnRpY2xlfT48YSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGV4dCB8fCBhcnRpY2xlLnBvc3RfdGl0bGV9fS8+PC9XUExpbms+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImluZm8tb24tcmVkXCI+e2FjZkRhdGEuYXJ0aWNsZXNbaV0uYWNmLmF1dGhvciAmJiBhY2ZEYXRhLmFydGljbGVzW2ldLmFjZi5hdXRob3IucG9zdF90aXRsZX0ge2FjZkRhdGEuYXJ0aWNsZXNbaV0uZGF0ZSAmJiBkYXRlRm9ybWF0dGVyLmZvcm1hdChuZXcgRGF0ZShhY2ZEYXRhLmFydGljbGVzW2ldLmRhdGUpKX08L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgIC8vICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgLy8gPC9Gcm93PlxuICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICApfTwvUXVlcnk+fVxuICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWxzLWJveFwiPlxuICAgICAgICAgICAgIDxIb21lcGFnZVRpdGxlIHRpdGxlPXtkYXRhLnBhZ2UuYWNmLnRlc3RpbW9uaWFscy50aXRsZX0gbGluaz17ZGF0YS5wYWdlLmFjZi50ZXN0aW1vbmlhbHMubGlua30vPlxuXG4gICAgICAgICAgICAgPFF1ZXJ5XG4gICAgICAgICAgICAgICAgIHF1ZXJ5PXtncWxgXG4gICAgICAgICAgICAgICAgICAgcXVlcnkgVGVzdGltb25pYWxzQ291bnRRdWVyeSB7XG4gICAgICAgICAgICAgICAgICAgICBjb3VudCBAcmVzdCh0eXBlOiBcIlRlc3RpbW9uaWFsQ291bnRcIiwgcGF0aDogXCIvd3AvdjIvdGVzdGltb25pYWxzL2NvdW50XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICA+eyh7bG9hZGluZzogY291bnRMb2FkaW5nLCBlcnJvcjogY291bnRFcnJvciwgZGF0YTogeyBjb3VudCB9fSkgPT4gKFxuICAgICAgICAgICAgICAgICA8UXVlcnlcbiAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgIHBlcl9wYWdlOiBURVNUSU1PTklBTFNfUEVSX1BBR0UsXG4gICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICBxdWVyeT17Z3FsYFxuICAgICAgICAgICAgICAgICAgICAgcXVlcnkgVGVzdGltb25pYWxzUXVlcnkoJHBlcl9wYWdlOiBTdHJpbmchLCAkb2Zmc2V0OiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRlc3RpbW9uaWFscyhwZXJfcGFnZTogJHBlcl9wYWdlLCBvZmZzZXQ6ICRvZmZzZXQpIEByZXN0KHR5cGU6IFwiVGVzdGltb25pYWxcIiwgcGF0aDogXCIvd3AvdjIvdGVzdGltb25pYWxzP3thcmdzfVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgIGFjZlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgID57KHtsb2FkaW5nOiB0ZXN0aW1vbmlhbHNMb2FkaW5nLCBlcnJvcjogdGVzdGltb25pYWxzRXJyb3IsIGRhdGE6IHsgdGVzdGltb25pYWxzIH0sIGZldGNoTW9yZSwgdmFyaWFibGVzfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgKHRlc3RpbW9uaWFscyAmJiAhdGVzdGltb25pYWxzRXJyb3IpICYmIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgIDxUZXN0aW1vbmlhbHMgY291bnQ9e2NvdW50LmNvdW50fSBpdGVtcz17dGVzdGltb25pYWxzfSBleGNsdWRlPXtbXCJ0aXRsZVwiXX0gYWRkQnV0dG9uVGl0bGU9XCLQntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LIg0L4g0L3QsNGBXCIvPlxuICAgICAgICAgICAgICAgICAgICAgPEZyb3cgY29udGFpbmVyIHJvdz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtbW9yZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICB7dGVzdGltb25pYWxzLmxlbmd0aCA8IGNvdW50LmNvdW50ICYmIDxMb2FkTW9yZUJ1dHRvbiBsb2FkaW5nPXt0ZXN0aW1vbmlhbHNMb2FkaW5nfSBvbkNsaWNrPXtvbkZldGNoTW9yZShmZXRjaE1vcmUsIHRlc3RpbW9uaWFscy5sZW5ndGgsICd0ZXN0aW1vbmlhbHMnKX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICl9fTwvUXVlcnk+XG4gICAgICAgICAgICAgICApfTwvUXVlcnk+XG4gICAgICAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICAgICAgIHtkYXRhLnBhZ2UuYWNmLmFsbG93X2NvbW1lbnRzICYmXG4gICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICA8SHlwZXJDb21tZW50cy8+XG4gICAgICAgICAgICAgPC9zZWN0aW9uPn1cblxuXG4gICAgICAgICA8L2Rpdj59XG4gICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgIC5zbGlkZXJzIHtcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgLnNsaWRlcnMgc2VjdGlvbiArIHNlY3Rpb24ge1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6ICR7IFRoZW1lLnhzLnZyKDIpIH07XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICAuYmctcmVkIHtcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7IFRoZW1lLnhzLnZyKDAuNzUpfTtcbiAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC43NSl9O1xuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICAuYmctcmVkIGEge1xuICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgLmF1dGhvcnMge1xuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuMjUpIH07XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICAuYXV0aG9ycyBhIHtcbiAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4OXJlbTtcbiAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICAuYXV0aG9ycyBhOmhvdmVyIHtcbiAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC5hdXRob3JzIHNwYW4gKyBzcGFuOjpiZWZvcmUge1xuICAgICAgICAgICAgIGNvbnRlbnQ6IFwiLCBcIjtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC50ZXN0aW1vbmlhbHMtYm94IHtcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgLmxvYWQtbW9yZS1ib3gge1xuICAgICAgICAgICAgIG1hcmdpbi10b3A6ICR7IFRoZW1lLnhzLnZyKDAuNSl9O1xuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgLnNsaWRlcnMge1xuICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUubWQudnIoMykgfTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAuc2xpZGVycyBzZWN0aW9uICsgc2VjdGlvbiB7XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC5iZy1yZWQge1xuICAgICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7IFRoZW1lLm1kLnZyKDEuNzUpfTtcbiAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkeyBUaGVtZS5tZC52cigxLjc1KX07XG4gICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigzKSB9O1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC5hdXRob3JzIHtcbiAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNSkgfTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAudGVzdGltb25pYWxzLWJveCB7XG4gICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigzKSB9O1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC5sb2FkLW1vcmUtYm94IHtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgPC9GcmFnbWVudD5cbiAgICAgKX08L1F1ZXJ5PlxuICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdfQ== */\n/*@ sourceURL=src/next/pages/homepage.js */"),
          dynamic: [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(2), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].md.vr(3)]
        }));
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref15) {
        var query;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref15.query;
                return _context.abrupt("return", {
                  query: query
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./styles/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var responsive = function responsive(fs, lh) {
  return {
    fontSize: fs,
    lineHeight: lh / fs,
    vr: function vr(n) {
      return "".concat(lh / fs * n, "rem");
    }
  };
};

var Theme = {
  xs: _objectSpread({}, responsive(12, 16), {
    borderRadius: {
      default: '3px'
    }
  }),
  md: _objectSpread({}, responsive(18, 24), {
    borderRadius: {
      default: '6px',
      small: '4px'
    }
  }),
  colors: {
    accent: '#ec6b58',
    accentSecondary: '#ebe4db',
    accentPoster: '#d8e56f',
    accentLight: '#f9d2cd',
    button: '#f95c3c',
    green: '#00a659',
    gray: '#a0a0a0',
    gray2: '#cdcdcd',
    arrowLightGray: '#b2b2b2',
    arrowGray: '#858585',
    arrowDarkGray: '#0f0f0f',
    backgroundLightGray: '#f5f5f5',
    backgroundGray: '#999999',
    backgroundAlmostWhite: '#f0f0f0',
    backgroundLightGreen: '#d8e56f',
    backgroundOrange: '#fd8b35',
    backgroundRed: '#df4b3f',
    textGray: '#6f6868',
    textDarkGray: '#4a4a4a',
    textDarkGray2: '#3c3c3c',
    textLightGray: '#999999',
    textGalleryGray: '#4b4b4b',
    textWhitePink: '#ffbdb3',
    borderGray: '#7a7a7a',
    sliderDot: '#e8e261',
    sliderDotActive: '#fd9450',
    brandFacebook: '#3b5998',
    brandTwitter: '#1da1f2',
    brandVkontakte: '#45668e',
    brandOdnoklassniki: '#ed812b',
    loader: '#ad4f40',
    backgroundSlidingPanel: '#df4b3f'
  }
};
Theme.sm = _objectSpread({}, Theme.xs);
Theme.lg = _objectSpread({}, Theme.md);
/* harmony default export */ __webpack_exports__["a"] = (Theme);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/homepage.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/config":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "qs":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "svg-baker-runtime/symbol":
/***/ (function(module, exports) {

module.exports = require("svg-baker-runtime/symbol");

/***/ }),

/***/ "svg-sprite-loader/runtime/sprite.build":
/***/ (function(module, exports) {

module.exports = require("svg-sprite-loader/runtime/sprite.build");

/***/ })

/******/ });
//# sourceMappingURL=homepage.js.map