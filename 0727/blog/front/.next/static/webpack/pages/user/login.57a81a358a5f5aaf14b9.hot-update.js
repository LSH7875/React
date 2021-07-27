self["webpackHotUpdate_N_E"]("pages/user/login",{

/***/ "./pages/user/login.jsx":
/*!******************************!*\
  !*** ./pages/user/login.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_SH_Desktop_React_0727_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0727\\blog\\front\\pages\\user\\login.jsx",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SH_Desktop_React_0727_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 //여러개의 인풋 처리하기 위해서 사용

var useInput = function useInput(defaultValue) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultValue),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = function onChange(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setValue(value);
  };

  return {
    value: value,
    onChange: onChange
  };
};

_s(useInput, "AcDDI8uRc4A0dTIawjI1gJJfrJY=");

var Login = function Login() {
  _s2();

  var userid = useInput(''); //Object

  var userpw = useInput(''); //Object

  var _props$value = props.value,
      state = _props$value.state,
      dispatch = _props$value.dispatch;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.log(userid.value,userpw.value)

    userid.value === "nara7875" && userpw.value === "1234" ? (dispatch({
      type: "LOGIN"
    }), next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/') //내가 원하는 경로로 이동
    ) : alert('아이디와 패스워드가 다릅니다');
  };

  console.log('userid', _objectSpread({}, userid));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, userid), {}, {
        placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userpw), {}, {
        placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s2(Login, "wZnsC4osjeiB9zZYfGE2dWljL8E=", false, function () {
  return [useInput, useInput];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9sb2dpbi5qc3giXSwibmFtZXMiOlsidXNlSW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJMb2dpbiIsInVzZXJpZCIsInVzZXJwdyIsInByb3BzIiwic3RhdGUiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIlJvdXRlciIsImFsZXJ0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDQyxZQUFELEVBQWdCO0FBQUE7O0FBQUEsa0JBQ0pDLCtDQUFRLENBQUNELFlBQUQsQ0FESjtBQUFBLE1BQ3BCRSxLQURvQjtBQUFBLE1BQ2RDLFFBRGM7O0FBRTNCLE1BQU1DLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUFDLENBQUMsRUFBRTtBQUFBLHNDQUNJQSxDQUFDLENBQUNDLE1BRE47QUFBQSxRQUNQSixLQURPLGFBQ1BBLEtBRE87O0FBRWRDLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFJQSxTQUFNO0FBQUNBLFNBQUssRUFBTEEsS0FBRDtBQUFPRSxZQUFRLEVBQVJBO0FBQVAsR0FBTjtBQUNILENBUEQ7O0dBQU1MLFE7O0FBU04sSUFBTVEsS0FBSyxHQUFFLFNBQVBBLEtBQU8sR0FBSTtBQUFBOztBQUNiLE1BQU1DLE1BQU0sR0FBR1QsUUFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FEYSxDQUNnQjs7QUFDN0IsTUFBTVUsTUFBTSxHQUFHVixRQUFRLENBQUMsRUFBRCxDQUF2QixDQUZhLENBRWdCOztBQUZoQixxQkFHVVcsS0FBSyxDQUFDUixLQUhoQjtBQUFBLE1BR05TLEtBSE0sZ0JBR05BLEtBSE07QUFBQSxNQUdBQyxRQUhBLGdCQUdBQSxRQUhBOztBQU1qQixNQUFNQyxZQUFZLEdBQUUsU0FBZEEsWUFBYyxDQUFBUixDQUFDLEVBQUU7QUFDbkJBLEtBQUMsQ0FBQ1MsY0FBRixHQURtQixDQUVuQjs7QUFHQU4sVUFBTSxDQUFDTixLQUFQLEtBQWUsVUFBZixJQUE2Qk8sTUFBTSxDQUFDUCxLQUFQLEtBQWdCLE1BQTdDLElBR0lVLFFBQVEsQ0FBQztBQUFDRyxVQUFJLEVBQUM7QUFBTixLQUFELENBQVIsRUFDQUMsdURBQUEsQ0FBWSxHQUFaLENBSkosQ0FJb0I7QUFKcEIsUUFNQ0MsS0FBSyxDQUFDLGlCQUFELENBTk47QUFPSCxHQVpEOztBQWNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLG9CQUF5QlgsTUFBekI7QUFDSSxzQkFDSSw4REFBQywyREFBRDtBQUFBLDRCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFQTtBQUFNLGNBQVEsRUFBRUssWUFBaEI7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBRTtBQUFiLFNBQXdCTCxNQUF4QjtBQUFnQyxtQkFBVyxFQUFHO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU8sWUFBSSxFQUFFO0FBQWIsU0FBNEJDLE1BQTVCO0FBQW9DLG1CQUFXLEVBQUc7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBUSxZQUFJLEVBQUUsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0EvQkQ7O0lBQU1GLEs7VUFDYVIsUSxFQUNBQSxROzs7S0FGYlEsSztBQWdDTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2xvZ2luLjU3YTgxYTM1OGE1ZjVhYWYxNGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybUxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm1MYXlvdXQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJyBcclxuXHJcbi8v7Jes65+s6rCc7J2YIOyduO2SiyDsspjrpqztlZjquLAg7JyE7ZW07IScIOyCrOyaqVxyXG5jb25zdCB1c2VJbnB1dD0oZGVmYXVsdFZhbHVlKT0+e1xyXG4gICAgY29uc3QgW3ZhbHVlLHNldFZhbHVlXT11c2VTdGF0ZShkZWZhdWx0VmFsdWUpXHJcbiAgICBjb25zdCBvbkNoYW5nZT1lPT57XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlfT17Li4uZS50YXJnZXR9XHJcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm57dmFsdWUsb25DaGFuZ2V9XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luID0oKT0+e1xyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpOyAvL09iamVjdFxyXG4gICAgY29uc3QgdXNlcnB3ID0gdXNlSW5wdXQoJycpOyAvL09iamVjdFxyXG4gICAgY29uc3Qge3N0YXRlLGRpc3BhdGNofT1wcm9wcy52YWx1ZTtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVTdWJtaXQgPWU9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSx1c2VycHcudmFsdWUpXHJcblxyXG5cclxuICAgIHVzZXJpZC52YWx1ZT09PVwibmFyYTc4NzVcIiAmJiB1c2VycHcudmFsdWUgPT09XCIxMjM0XCJcclxuICAgID9cclxuICAgIChcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpcIkxPR0lOXCJ9KSxcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpLy/rgrTqsIAg7JuQ7ZWY64qUIOqyveuhnOuhnCDsnbTrj5lcclxuICAgIClcclxuICAgIDphbGVydCgn7JWE7J2065SU7JmAIO2MqOyKpOybjOuTnOqwgCDri6TrpoXri4jri6QnKVxyXG59XHJcblxyXG5jb25zb2xlLmxvZygndXNlcmlkJyx7Li4udXNlcmlkfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgPGgyPuuhnOq3uOyduDwvaDI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiB7Li4udXNlcmlkfSBwbGFjZWhvbGRlciA9IFwi7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBwbGFjZWhvbGRlciA9IFwi7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalFwiLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID1cInN1Ym1pdFwiPuuhnOq3uOyduDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9