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

var Login = function Login(props) {
  _s2();

  var userid = useInput(''); //Object

  var userpw = useInput(''); //Object

  console.log('props');
  console.log(props);
  var dispatch = props.dispatch.dispatch;

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
      lineNumber: 40,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, userid), {}, {
        placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userpw), {}, {
        placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9sb2dpbi5qc3giXSwibmFtZXMiOlsidXNlSW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJMb2dpbiIsInByb3BzIiwidXNlcmlkIiwidXNlcnB3IiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiUm91dGVyIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFDLFNBQVRBLFFBQVMsQ0FBQ0MsWUFBRCxFQUFnQjtBQUFBOztBQUFBLGtCQUNKQywrQ0FBUSxDQUFDRCxZQUFELENBREo7QUFBQSxNQUNwQkUsS0FEb0I7QUFBQSxNQUNkQyxRQURjOztBQUUzQixNQUFNQyxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFBQyxDQUFDLEVBQUU7QUFBQSxzQ0FDSUEsQ0FBQyxDQUFDQyxNQUROO0FBQUEsUUFDUEosS0FETyxhQUNQQSxLQURPOztBQUVkQyxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNILEdBSEQ7O0FBSUEsU0FBTTtBQUFDQSxTQUFLLEVBQUxBLEtBQUQ7QUFBT0UsWUFBUSxFQUFSQTtBQUFQLEdBQU47QUFDSCxDQVBEOztHQUFNTCxROztBQVNOLElBQU1RLEtBQUssR0FBRSxTQUFQQSxLQUFPLENBQUNDLEtBQUQsRUFBUztBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdWLFFBQVEsQ0FBQyxFQUFELENBQXZCLENBRGtCLENBQ1c7O0FBQzdCLE1BQU1XLE1BQU0sR0FBR1gsUUFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FGa0IsQ0FFVzs7QUFDN0JZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFKa0IsTUFLWEssUUFMVyxHQUtETCxLQUFLLENBQUNLLFFBTEwsQ0FLWEEsUUFMVzs7QUFRdEIsTUFBTUMsWUFBWSxHQUFFLFNBQWRBLFlBQWMsQ0FBQVQsQ0FBQyxFQUFFO0FBQ25CQSxLQUFDLENBQUNVLGNBQUYsR0FEbUIsQ0FFbkI7O0FBR0FOLFVBQU0sQ0FBQ1AsS0FBUCxLQUFlLFVBQWYsSUFBNkJRLE1BQU0sQ0FBQ1IsS0FBUCxLQUFnQixNQUE3QyxJQUdJVyxRQUFRLENBQUM7QUFBQ0csVUFBSSxFQUFDO0FBQU4sS0FBRCxDQUFSLEVBQ0FDLHVEQUFBLENBQVksR0FBWixDQUpKLENBSW9CO0FBSnBCLFFBTUNDLEtBQUssQ0FBQyxpQkFBRCxDQU5OO0FBT0gsR0FaRDs7QUFjQVAsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixvQkFBeUJILE1BQXpCO0FBQ0ksc0JBQ0ksOERBQUMsMkRBQUQ7QUFBQSw0QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUE7QUFBTSxjQUFRLEVBQUVLLFlBQWhCO0FBQUEsOEJBQ0k7QUFBTyxZQUFJLEVBQUU7QUFBYixTQUF3QkwsTUFBeEI7QUFBZ0MsbUJBQVcsRUFBRztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFPLFlBQUksRUFBRTtBQUFiLFNBQTRCQyxNQUE1QjtBQUFvQyxtQkFBVyxFQUFHO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQVEsWUFBSSxFQUFFLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBakNEOztJQUFNSCxLO1VBQ2FSLFEsRUFDQUEsUTs7O0tBRmJRLEs7QUFrQ04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9sb2dpbi5lNWMxNmY2YWQ3MjVjYmFmZThiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtTGF5b3V0J1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcicgXHJcblxyXG4vL+yXrOufrOqwnOydmCDsnbjtkosg7LKY66as7ZWY6riwIOychO2VtOyEnCDsgqzsmqlcclxuY29uc3QgdXNlSW5wdXQ9KGRlZmF1bHRWYWx1ZSk9PntcclxuICAgIGNvbnN0IFt2YWx1ZSxzZXRWYWx1ZV09dXNlU3RhdGUoZGVmYXVsdFZhbHVlKVxyXG4gICAgY29uc3Qgb25DaGFuZ2U9ZT0+e1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZX09ey4uLmUudGFyZ2V0fVxyXG4gICAgICAgIHNldFZhbHVlKHZhbHVlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJue3ZhbHVlLG9uQ2hhbmdlfVxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9KHByb3BzKT0+e1xyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpOyAvL09iamVjdFxyXG4gICAgY29uc3QgdXNlcnB3ID0gdXNlSW5wdXQoJycpOyAvL09iamVjdFxyXG4gICAgY29uc29sZS5sb2coJ3Byb3BzJylcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgY29uc3Qge2Rpc3BhdGNofT1wcm9wcy5kaXNwYXRjaDtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVTdWJtaXQgPWU9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSx1c2VycHcudmFsdWUpXHJcblxyXG5cclxuICAgIHVzZXJpZC52YWx1ZT09PVwibmFyYTc4NzVcIiAmJiB1c2VycHcudmFsdWUgPT09XCIxMjM0XCJcclxuICAgID9cclxuICAgIChcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpcIkxPR0lOXCJ9KSxcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpLy/rgrTqsIAg7JuQ7ZWY64qUIOqyveuhnOuhnCDsnbTrj5lcclxuICAgIClcclxuICAgIDphbGVydCgn7JWE7J2065SU7JmAIO2MqOyKpOybjOuTnOqwgCDri6TrpoXri4jri6QnKVxyXG59XHJcblxyXG5jb25zb2xlLmxvZygndXNlcmlkJyx7Li4udXNlcmlkfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgPGgyPuuhnOq3uOyduDwvaDI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiB7Li4udXNlcmlkfSBwbGFjZWhvbGRlciA9IFwi7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBwbGFjZWhvbGRlciA9IFwi7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalFwiLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID1cInN1Ym1pdFwiPuuhnOq3uOyduDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9