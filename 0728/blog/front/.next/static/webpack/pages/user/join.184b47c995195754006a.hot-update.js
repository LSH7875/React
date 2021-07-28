self["webpackHotUpdate_N_E"]("pages/user/join",{

/***/ "./pages/user/join.jsx":
/*!*****************************!*\
  !*** ./pages/user/join.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_SH_Desktop_React_0728_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/context */ "./store/context.jsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0728\\blog\\front\\pages\\user\\join.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SH_Desktop_React_0728_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Join = function Join() {
  _s();

  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var username = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var password = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var userphone = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var handlePassword = function handlePassword(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setPasswordError(password.value !== value); //같으면 false 다르면 true

    setPasswordCheck(value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (userpssword.value !== passwordCheck) {
      setPasswordError(true);
      return 0;
    }

    if (!term) {
      setTermError(true);
      return 0;
    }

    console.log(userid.value, username.value, password.value, userphone.value);
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var handleTerm = function handleTerm(e) {
    console.log('handleTerm들어옴');
    setTermError(e.target.checked !== true); //true !==true  =>false 문
    //false

    setTerm(e.target.checked);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, userid), {}, {
        placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, username), {}, {
        placeholder: "\uC774\uB984\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, password), {}, {
        placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "password",
        value: passwordCheck,
        onChange: handlePassword,
        placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), passwordError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          color: 'red'
        },
        children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 35
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, userphone), {}, {
        placeholder: "\uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this), "   ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 82
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "term",
        children: "\uC57D\uAD00\uB3D9\uC758\uC5EC\uBD80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        id: "term",
        type: "checkbox",
        checked: term,
        onChange: handleTerm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 53
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 127
      }, _this), termError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          color: 'red'
        },
        children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uB77C\uAD6C..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 31
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, _this);
};

_s(Join, "JKmn6gRQvdzPECo5iimj2X9gJBs=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Join;
/* harmony default export */ __webpack_exports__["default"] = (Join);

var _c;

$RefreshReg$(_c, "Join");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9qb2luLmpzeCJdLCJuYW1lcyI6WyJKb2luIiwidXNlcmlkIiwidXNlSW5wdXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlcnBob25lIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwiaGFuZGxlUGFzc3dvcmQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJwc3N3b3JkIiwidGVybSIsInNldFRlcm1FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRUZXJtIiwidGVybUVycm9yIiwiaGFuZGxlVGVybSIsImNoZWNrZWQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFFLFNBQU5BLElBQU0sR0FBSTtBQUFBOztBQUNaLE1BQU1DLE1BQU0sR0FBR0Msd0RBQVEsQ0FBQyxFQUFELENBQXZCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCx3REFBUSxDQUFDLEVBQUQsQ0FBekI7QUFDQSxNQUFNRSxRQUFRLEdBQUdGLHdEQUFRLENBQUMsRUFBRCxDQUF6QjtBQUNBLE1BQU1HLFNBQVMsR0FBR0gsd0RBQVEsQ0FBQyxFQUFELENBQTFCOztBQUpZLGtCQU02QkksK0NBQVEsQ0FBQyxFQUFELENBTnJDO0FBQUEsTUFNTEMsYUFOSztBQUFBLE1BTVNDLGdCQU5UOztBQUFBLG1CQU82QkYsK0NBQVEsQ0FBQyxLQUFELENBUHJDO0FBQUEsTUFPTEcsYUFQSztBQUFBLE1BT1NDLGdCQVBUOztBQVVaLE1BQU1DLGNBQWMsR0FBQyxTQUFmQSxjQUFlLENBQUNDLENBQUQsRUFBSztBQUFBLHNDQUNKQSxDQUFDLENBQUNDLE1BREU7QUFBQSxRQUNmQyxLQURlLGFBQ2ZBLEtBRGU7O0FBRXRCSixvQkFBZ0IsQ0FBQ04sUUFBUSxDQUFDVSxLQUFULEtBQW1CQSxLQUFwQixDQUFoQixDQUZzQixDQUVxQjs7QUFDM0NOLG9CQUFnQixDQUFDTSxLQUFELENBQWhCO0FBRUgsR0FMRDs7QUFPQSxNQUFNQyxZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDSCxDQUFELEVBQUs7QUFDcEJBLEtBQUMsQ0FBQ0ksY0FBRjs7QUFDQSxRQUFHQyxXQUFXLENBQUNILEtBQVosS0FBc0JQLGFBQXpCLEVBQXVDO0FBQ25DRyxzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0EsYUFBTyxDQUFQO0FBQ0g7O0FBRUQsUUFBRyxDQUFDUSxJQUFKLEVBQVM7QUFDTEMsa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQSxhQUFPLENBQVA7QUFDSDs7QUFDREMsV0FBTyxDQUFDQyxHQUFSLENBQVlwQixNQUFNLENBQUNhLEtBQW5CLEVBQXlCWCxRQUFRLENBQUNXLEtBQWxDLEVBQXdDVixRQUFRLENBQUNVLEtBQWpELEVBQXVEVCxTQUFTLENBQUNTLEtBQWpFO0FBQ0gsR0FaRDs7QUFqQlksbUJBZ0NXUiwrQ0FBUSxDQUFDLEtBQUQsQ0FoQ25CO0FBQUEsTUFnQ0xZLElBaENLO0FBQUEsTUFnQ0FJLE9BaENBOztBQUFBLG1CQWlDbUJoQiwrQ0FBUSxDQUFDLEtBQUQsQ0FqQzNCO0FBQUEsTUFpQ0xpQixTQWpDSztBQUFBLE1BaUNLSixZQWpDTDs7QUFtQ1osTUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQVosQ0FBQyxFQUFHO0FBQ25CUSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FGLGdCQUFZLENBQUNQLENBQUMsQ0FBQ0MsTUFBRixDQUFTWSxPQUFULEtBQXFCLElBQXRCLENBQVosQ0FGbUIsQ0FHbkI7QUFDQTs7QUFDQUgsV0FBTyxDQUFDVixDQUFDLENBQUNDLE1BQUYsQ0FBU1ksT0FBVixDQUFQO0FBQ0gsR0FORDs7QUFTQSxzQkFDSSw4REFBQywyREFBRDtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFNLGNBQVEsRUFBRVYsWUFBaEI7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBQztBQUFaLFNBQXVCZCxNQUF2QjtBQUFnQyxtQkFBVyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU8sWUFBSSxFQUFDO0FBQVosU0FBdUJFLFFBQXZCO0FBQWlDLG1CQUFXLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBTyxZQUFJLEVBQUM7QUFBWixTQUEyQkMsUUFBM0I7QUFBcUMsbUJBQVcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLGFBQUssRUFBR0csYUFBL0I7QUFBOEMsZ0JBQVEsRUFBRUksY0FBeEQ7QUFBd0UsbUJBQVcsRUFBQztBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosRUFLS0YsYUFBYSxpQkFBSTtBQUFLLGFBQUssRUFBRTtBQUFDaUIsZUFBSyxFQUFDO0FBQVAsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUx0QixlQVFJO0FBQU8sWUFBSSxFQUFDO0FBQVosU0FBdUJyQixTQUF2QjtBQUFrQyxtQkFBVyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixzQkFRcUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJyRSxlQVNJO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQVN3QztBQUFPLFVBQUUsRUFBRSxNQUFYO0FBQWtCLFlBQUksRUFBRSxVQUF4QjtBQUFtQyxlQUFPLEVBQUVhLElBQTVDO0FBQWtELGdCQUFRLEVBQUVNO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUeEMsZUFTa0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRsSCxFQVVLRCxTQUFTLGlCQUFJO0FBQUssYUFBSyxFQUFJO0FBQUNHLGVBQUssRUFBQztBQUFQLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWbEIsZUFXSTtBQUFRLFlBQUksRUFBRyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0E5REQ7O0dBQU0xQixJO1VBQ2FFLG9ELEVBQ0VBLG9ELEVBQ0FBLG9ELEVBQ0NBLG9EOzs7S0FKaEJGLEk7QUErRE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9qb2luLjE4NGI0N2M5OTUxOTU3NTQwMDZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybUxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm1MYXlvdXQnXHJcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9jb250ZXh0J1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSm9pbiA9KCk9PntcclxuICAgIGNvbnN0IHVzZXJpZCA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCB1c2VycGhvbmUgPSB1c2VJbnB1dCgnJylcclxuICAgIFxyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzd29yZEVycm9yLHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkPShlKT0+e1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZX09ey4uLmUudGFyZ2V0fVxyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyb3IocGFzc3dvcmQudmFsdWUgIT09IHZhbHVlKSAvL+qwmeycvOuptCBmYWxzZSDri6TrpbTrqbQgdHJ1ZVxyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2sodmFsdWUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdD0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYodXNlcnBzc3dvcmQudmFsdWUgIT09IHBhc3N3b3JkQ2hlY2spe1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybiAwOyAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0ZXJtKXtcclxuICAgICAgICAgICAgc2V0VGVybUVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQudmFsdWUsdXNlcm5hbWUudmFsdWUscGFzc3dvcmQudmFsdWUsdXNlcnBob25lLnZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBbdGVybSxzZXRUZXJtXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Rlcm1FcnJvcixzZXRUZXJtRXJyb3JdPXVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRlcm0gPSBlID0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVUZXJt65Ok7Ja07Ji0JylcclxuICAgICAgICBzZXRUZXJtRXJyb3IoZS50YXJnZXQuY2hlY2tlZCAhPT0gdHJ1ZSkgXHJcbiAgICAgICAgLy90cnVlICE9PXRydWUgID0+ZmFsc2Ug66y4XHJcbiAgICAgICAgLy9mYWxzZVxyXG4gICAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgPGgyPu2ajOybkOqwgOyehTwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJpZH0gIHBsYWNlaG9sZGVyPVwi7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalFwiLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VybmFtZX0gcGxhY2Vob2xkZXI9XCLsnbTrpoTrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi5wYXNzd29yZH0gcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlID17cGFzc3dvcmRDaGVja30gb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDri6Tsi5wg7J6F66Cl7ZW07KO87IS47JqUXCIvPlxyXG4gICAgICAgICAgICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgPGRpdiBzdHlsZT17e2NvbG9yOidyZWQnfX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiB7dHJ1ZSAmJiDsnbTqsbDsi6TtlonrkKh9IHtmYWxzZSAmJiBcIuydtOqxsCDsi6Ttlokg7JWI65CoXCJ9ICovfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJwaG9uZX0gcGxhY2Vob2xkZXI9XCLsoITtmZTrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIvPiAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlcm1cIj7slb3qtIDrj5nsnZjsl6zrtoA8L2xhYmVsPjxpbnB1dCBpZCA9XCJ0ZXJtXCIgdHlwZSA9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtoYW5kbGVUZXJtfSAvPjxici8+XHJcbiAgICAgICAgICAgICAgICB7dGVybUVycm9yICYmIDxkaXYgc3R5bGUgPSB7e2NvbG9yOidyZWQnfX0+7JW96rSA7JeQIOuPmeydmO2VmOudvOq1rC4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwic3VibWl0XCI+7ZqM7JuQ6rCA7J6FPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSm9pbiJdLCJzb3VyY2VSb290IjoiIn0=