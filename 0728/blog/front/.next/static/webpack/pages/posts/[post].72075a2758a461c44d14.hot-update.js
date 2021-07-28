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
  var visible = _ref.visible;
  var category = menu.map(function (v, k) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      onClick: handleClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 72
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 53
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 16
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
    flag: visible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiQWNjb3JkaW9uIiwidmlzaWJsZSIsIm1hcCIsInYiLCJrIiwiaGFuZGxlQ2xpY2siLCJBY2NvcmRpb25NZW51IiwiU3R5bGVkIiwicHJvcHMiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFDLENBQ1A7QUFBSUMsSUFBRSxFQUFDLEdBQVA7QUFBV0MsVUFBUSxFQUFDLFFBQXBCO0FBQTZCQyxLQUFHLEVBQUM7QUFBakMsQ0FETyxFQUVQO0FBQUlGLElBQUUsRUFBQyxHQUFQO0FBQVdDLFVBQVEsRUFBQyxRQUFwQjtBQUE2QkMsS0FBRyxFQUFDO0FBQWpDLENBRk8sRUFHUDtBQUFJRixJQUFFLEVBQUMsR0FBUDtBQUFXQyxVQUFRLEVBQUMsUUFBcEI7QUFBNkJDLEtBQUcsRUFBQztBQUFqQyxDQUhPLEVBSVA7QUFBSUYsSUFBRSxFQUFDLEdBQVA7QUFBV0MsVUFBUSxFQUFDLFFBQXBCO0FBQTZCQyxLQUFHLEVBQUM7QUFBakMsQ0FKTyxFQUtQO0FBQUlGLElBQUUsRUFBQyxHQUFQO0FBQVdDLFVBQVEsRUFBQyxRQUFwQjtBQUE2QkMsS0FBRyxFQUFDO0FBQWpDLENBTE8sQ0FBWDs7QUFPQSxJQUFNQyxTQUFTLEdBQUUsU0FBWEEsU0FBVyxPQUFhO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBRTFCLE1BQU1ILFFBQVEsR0FBR0YsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFILEVBQU87QUFDN0Isd0JBQU87QUFBSSxhQUFPLEVBQUVDLFdBQWI7QUFBQSw2QkFBcUMsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUVGLENBQUMsQ0FBQ0osR0FBZDtBQUFBLCtCQUFtQjtBQUFBLG9CQUFJSSxDQUFDLENBQUNMO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJDLE9BQStCSyxDQUFDLENBQUNOLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBRmdCLENBQWpCO0FBR0Esc0JBQ0ksOERBQUMsYUFBRDtBQUFlLFFBQUksRUFBSUksT0FBdkI7QUFBQSwyQkFDSTtBQUFBLGdCQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQVpEOztLQUFNRSxTO0FBY04sSUFBTU0sYUFBYSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxtTkFVTCxVQUFBQyxLQUFLO0FBQUEsU0FBR0EsS0FBSyxDQUFDQyxJQUFOLEdBQWEsT0FBYixHQUF1QixNQUExQjtBQUFBLENBVkEsQ0FBbkI7TUFBTUgsYTtBQTBCTiwrREFBZU4sU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcG9zdF0uNzIwNzVhMjc1OGE0NjFjNDRkMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IG1lbnU9W1xyXG4gICAgeyAgIGlkOicxJyxjYXRlZ29yeTon64yA67aE66WY66mU64m0MScsdXJsOicvcG9zdHMvMScgICAgfSxcclxuICAgIHsgICBpZDonMicsY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLHVybDonL3Bvc3RzLzInICAgIH0sXHJcbiAgICB7ICAgaWQ6JzMnLGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyx1cmw6Jy9wb3N0cy8zJyAgICB9LFxyXG4gICAgeyAgIGlkOic0JyxjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsdXJsOicvcG9zdHMvNCcgICAgfSxcclxuICAgIHsgICBpZDonNScsY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLHVybDonL3Bvc3RzLzUnICAgIH0sXHJcbl1cclxuY29uc3QgQWNjb3JkaW9uID0oe3Zpc2libGV9KT0+e1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gbWVudS5tYXAoKHYsayk9PntcclxuICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBrZXk9e3YuaWR9PjxMaW5rIGhyZWY9e3YudXJsfT48YT57di5jYXRlZ29yeX08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBY2NvcmRpb25NZW51IGZsYWcgPSB7dmlzaWJsZX0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L0FjY29yZGlvbk1lbnU+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5jb25zdCBBY2NvcmRpb25NZW51ID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgdG9wOjEwdmg7XHJcbiAgICB6LWluZGV4OjU7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBwYWRkaW5nOjd2aCAwO1xyXG5cclxuXHJcbiAgICBkaXNwbGF5OiR7cHJvcHM9Pihwcm9wcy5mbGFnID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG5cclxuICAgICYgPnVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOjV2aDtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICYgPnVsID5saXtcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbiJdLCJzb3VyY2VSb290IjoiIn0=