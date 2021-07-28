self["webpackHotUpdate_N_E"]("pages/posts/[post]",{

/***/ "./components/Accordion.jsx":
/*!**********************************!*\
  !*** ./components/Accordion.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0728\\blog\\front\\components\\Accordion.jsx",
    _this = undefined;



var menu = [{
  id: '1',
  category: '대분류메뉴1',
  url: '/posts/1'
}, {
  id: '2',
  category: '대분류메뉴2',
  url: '/posts/2'
}, {
  id: '3',
  category: '대분류메뉴3',
  url: '/posts/3'
}, {
  id: '4',
  category: '대분류메뉴4',
  url: '/posts/4'
}, {
  id: '5',
  category: '대분류메뉴5',
  url: '/posts/5'
}];

var Accordion = function Accordion(_ref) {
  var visible = _ref.visible,
      handleToggle = _ref.handleToggle;
  var category = menu.map(function (v, k) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      onClick: handleToggle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 73
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 54
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 16
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
    flag: visible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_c = Accordion;
var AccordionMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "Accordion__AccordionMenu",
  componentId: "sc-wg3e6s-0"
})(["position:absolute;width:100%;left:0px;top:10vh;z-index:5;background:#fff;padding:7vh 0;display:", ";& >ul{margin-top:5vh;display:flex;flex-direction:column;}& >ul >li{margin-top:20px;text-align:center;}"], function (props) {
  return props.flag ? 'block' : 'none';
});
_c2 = AccordionMenu;
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

var _c, _c2;

$RefreshReg$(_c, "Accordion");
$RefreshReg$(_c2, "AccordionMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiQWNjb3JkaW9uIiwidmlzaWJsZSIsImhhbmRsZVRvZ2dsZSIsIm1hcCIsInYiLCJrIiwiQWNjb3JkaW9uTWVudSIsIlN0eWxlZCIsInByb3BzIiwiZmxhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBQyxDQUNQO0FBQUlDLElBQUUsRUFBQyxHQUFQO0FBQVdDLFVBQVEsRUFBQyxRQUFwQjtBQUE2QkMsS0FBRyxFQUFDO0FBQWpDLENBRE8sRUFFUDtBQUFJRixJQUFFLEVBQUMsR0FBUDtBQUFXQyxVQUFRLEVBQUMsUUFBcEI7QUFBNkJDLEtBQUcsRUFBQztBQUFqQyxDQUZPLEVBR1A7QUFBSUYsSUFBRSxFQUFDLEdBQVA7QUFBV0MsVUFBUSxFQUFDLFFBQXBCO0FBQTZCQyxLQUFHLEVBQUM7QUFBakMsQ0FITyxFQUlQO0FBQUlGLElBQUUsRUFBQyxHQUFQO0FBQVdDLFVBQVEsRUFBQyxRQUFwQjtBQUE2QkMsS0FBRyxFQUFDO0FBQWpDLENBSk8sRUFLUDtBQUFJRixJQUFFLEVBQUMsR0FBUDtBQUFXQyxVQUFRLEVBQUMsUUFBcEI7QUFBNkJDLEtBQUcsRUFBQztBQUFqQyxDQUxPLENBQVg7O0FBT0EsSUFBTUMsU0FBUyxHQUFFLFNBQVhBLFNBQVcsT0FBMEI7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUd2QyxNQUFNSixRQUFRLEdBQUdGLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFPO0FBQzdCLHdCQUFPO0FBQUksYUFBTyxFQUFFSCxZQUFiO0FBQUEsNkJBQXNDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFRSxDQUFDLENBQUNMLEdBQWQ7QUFBQSwrQkFBbUI7QUFBQSxvQkFBSUssQ0FBQyxDQUFDTjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QyxPQUFnQ00sQ0FBQyxDQUFDUCxFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSCxHQUZnQixDQUFqQjtBQUdBLHNCQUNJLDhEQUFDLGFBQUQ7QUFBZSxRQUFJLEVBQUlJLE9BQXZCO0FBQUEsMkJBQ0k7QUFBQSxnQkFDS0g7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FiRDs7S0FBTUUsUztBQWVOLElBQU1NLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsbU5BVUwsVUFBQUMsS0FBSztBQUFBLFNBQUdBLEtBQUssQ0FBQ0MsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFBMUI7QUFBQSxDQVZBLENBQW5CO01BQU1ILGE7QUEwQk4sK0RBQWVOLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RdLjYyYWY1NmM2NDZhZjdhZTM1NzhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBtZW51PVtcclxuICAgIHsgICBpZDonMScsY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLHVybDonL3Bvc3RzLzEnICAgIH0sXHJcbiAgICB7ICAgaWQ6JzInLGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyx1cmw6Jy9wb3N0cy8yJyAgICB9LFxyXG4gICAgeyAgIGlkOiczJyxjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsdXJsOicvcG9zdHMvMycgICAgfSxcclxuICAgIHsgICBpZDonNCcsY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLHVybDonL3Bvc3RzLzQnICAgIH0sXHJcbiAgICB7ICAgaWQ6JzUnLGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1Jyx1cmw6Jy9wb3N0cy81JyAgICB9LFxyXG5dXHJcbmNvbnN0IEFjY29yZGlvbiA9KHt2aXNpYmxlLGhhbmRsZVRvZ2dsZX0pPT57XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IG1lbnUubWFwKCh2LGspPT57XHJcbiAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9IGtleT17di5pZH0+PExpbmsgaHJlZj17di51cmx9PjxhPnt2LmNhdGVnb3J5fTwvYT48L0xpbms+PC9saT5cclxuICAgIH0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFjY29yZGlvbk1lbnUgZmxhZyA9IHt2aXNpYmxlfT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uTWVudT5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmNvbnN0IEFjY29yZGlvbk1lbnUgPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB0b3A6MTB2aDtcclxuICAgIHotaW5kZXg6NTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIHBhZGRpbmc6N3ZoIDA7XHJcblxyXG5cclxuICAgIGRpc3BsYXk6JHtwcm9wcz0+KHByb3BzLmZsYWcgPyAnYmxvY2snIDogJ25vbmUnKX07XHJcblxyXG4gICAgJiA+dWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXZoO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgJiA+dWwgPmxpe1xyXG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==