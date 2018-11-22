webpackHotUpdate(5,{

/***/ "./components/HomepageSlider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("../../node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../../node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=5.9ea992720d1ebc7a8e65.hot-update.js.map