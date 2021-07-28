self["webpackHotUpdate_N_E"]("pages/posts/[post]",{

/***/ "./pages/posts/[post].jsx":
/*!********************************!*\
  !*** ./pages/posts/[post].jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BlogLayout */ "./components/BlogLayout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0728\\blog\\front\\pages\\posts\\[post].jsx",
    _this = undefined,
    _s = $RefreshSig$();



var data = [{
  id: "1",
  subject: "SH blog",
  content: "HTML은 어쩌구 저쩌구",
  date: "2021-07-28",
  hit: "0"
}, {
  id: "2",
  subject: "SH blog",
  content: "모른다",
  date: "2021-07-28",
  hit: "0"
}];

var Post = function Post() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var post = router.query.post; //카테고리 이름

  /*게시번호/제목/날짜/조회수/*/

  var list = data.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.subject
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [post, " \uAC8C\uC2DC\uAE00 \uB9AC\uC2A4\uD2B8 \uD398\uC774\uC9C0"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJzdWJqZWN0IiwiY29udGVudCIsImRhdGUiLCJoaXQiLCJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwibGlzdCIsIm1hcCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFBRUMsSUFBRSxFQUFDLEdBQUw7QUFBU0MsU0FBTyxFQUFDLFNBQWpCO0FBQTRCQyxTQUFPLEVBQUMsZUFBcEM7QUFBcURDLE1BQUksRUFBQyxZQUExRDtBQUF1RUMsS0FBRyxFQUFDO0FBQTNFLENBRFMsRUFFVDtBQUFFSixJQUFFLEVBQUMsR0FBTDtBQUFTQyxTQUFPLEVBQUMsU0FBakI7QUFBNEJDLFNBQU8sRUFBQyxLQUFwQztBQUEyQ0MsTUFBSSxFQUFDLFlBQWhEO0FBQTZEQyxLQUFHLEVBQUM7QUFBakUsQ0FGUyxDQUFiOztBQUlBLElBQU1DLElBQUksR0FBRSxTQUFOQSxJQUFNLEdBQUk7QUFBQTs7QUFDWixNQUFNQyxNQUFNLEdBQUVDLHNEQUFTLEVBQXZCO0FBRFksTUFFTEMsSUFGSyxHQUVHRixNQUFNLENBQUNHLEtBRlYsQ0FFTEQsSUFGSyxFQUVlOztBQUUzQjs7QUFHQSxNQUFNRSxJQUFJLEdBQUdYLElBQUksQ0FBQ1ksR0FBTCxDQUFTLFVBQUFDLENBQUMsRUFBRTtBQUNyQix3QkFDSTtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0EsQ0FBQyxDQUFDWDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFLVyxDQUFDLENBQUNWO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsb0JBQUtVLENBQUMsQ0FBQ1Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLE9BQVVTLENBQUMsQ0FBQ1osRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFTSCxHQVZZLENBQWI7QUFXQSxzQkFDSSw4REFBQywyREFBRDtBQUFBLGVBQ0NRLElBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQXhCRDs7R0FBTUgsSTtVQUNZRSxrRDs7O0tBRFpGLEk7QUF5Qk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RdLjUzZTc5MzgxNWVjZWEyNzliYTI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZ0xheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2dMYXlvdXQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHsgaWQ6XCIxXCIsc3ViamVjdDpcIlNIIGJsb2dcIiwgY29udGVudDpcIkhUTUzsnYAg7Ja07KmM6rWsIOyggOypjOq1rFwiLCBkYXRlOlwiMjAyMS0wNy0yOFwiLGhpdDpcIjBcIn0sXHJcbiAgICB7IGlkOlwiMlwiLHN1YmplY3Q6XCJTSCBibG9nXCIsIGNvbnRlbnQ6XCLrqqjrpbjri6RcIiwgZGF0ZTpcIjIwMjEtMDctMjhcIixoaXQ6XCIwXCJ9LFxyXG5dXHJcbmNvbnN0IFBvc3QgPSgpPT57XHJcbiAgICBjb25zdCByb3V0ZXI9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cG9zdH0gPSByb3V0ZXIucXVlcnkvL+y5tO2FjOqzoOumrCDsnbTrpoRcclxuXHJcbiAgICAvKuqyjOyLnOuyiO2YuC/soJzrqqkv64Kg7KecL+yhsO2ajOyImC8qL1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgbGlzdCA9IGRhdGEubWFwKHY9PntcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17di5pZH0+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2LnN1YmplY3R9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+e3YuY29udGVudH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT57di5kYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmxvZ0xheW91dD5cclxuICAgICAgICB7cG9zdH0g6rKM7Iuc6riAIOumrOyKpO2KuCDtjpjsnbTsp4BcclxuXHJcbiAgICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9