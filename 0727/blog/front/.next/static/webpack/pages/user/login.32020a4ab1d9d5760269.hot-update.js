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

var Login = function Login(_ref) {
  _s2();

  var props = _ref.props;
  var userid = useInput(''); //Object

  var userpw = useInput(''); //Object

  console.log(props);
  var state = props.state,
      dispatch = props.dispatch;

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
      lineNumber: 39,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, userid), {}, {
        placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userpw), {}, {
        placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9sb2dpbi5qc3giXSwibmFtZXMiOlsidXNlSW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJMb2dpbiIsInByb3BzIiwidXNlcmlkIiwidXNlcnB3IiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJSb3V0ZXIiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDQyxZQUFELEVBQWdCO0FBQUE7O0FBQUEsa0JBQ0pDLCtDQUFRLENBQUNELFlBQUQsQ0FESjtBQUFBLE1BQ3BCRSxLQURvQjtBQUFBLE1BQ2RDLFFBRGM7O0FBRTNCLE1BQU1DLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUFDLENBQUMsRUFBRTtBQUFBLHNDQUNJQSxDQUFDLENBQUNDLE1BRE47QUFBQSxRQUNQSixLQURPLGFBQ1BBLEtBRE87O0FBRWRDLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFJQSxTQUFNO0FBQUNBLFNBQUssRUFBTEEsS0FBRDtBQUFPRSxZQUFRLEVBQVJBO0FBQVAsR0FBTjtBQUNILENBUEQ7O0dBQU1MLFE7O0FBU04sSUFBTVEsS0FBSyxHQUFFLFNBQVBBLEtBQU8sT0FBVztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNwQixNQUFNQyxNQUFNLEdBQUdWLFFBQVEsQ0FBQyxFQUFELENBQXZCLENBRG9CLENBQ1M7O0FBQzdCLE1BQU1XLE1BQU0sR0FBR1gsUUFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FGb0IsQ0FFUzs7QUFDN0JZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBSG9CLE1BSWJLLEtBSmEsR0FJR0wsS0FKSCxDQUliSyxLQUphO0FBQUEsTUFJUEMsUUFKTyxHQUlHTixLQUpILENBSVBNLFFBSk87O0FBT3hCLE1BQU1DLFlBQVksR0FBRSxTQUFkQSxZQUFjLENBQUFWLENBQUMsRUFBRTtBQUNuQkEsS0FBQyxDQUFDVyxjQUFGLEdBRG1CLENBRW5COztBQUdBUCxVQUFNLENBQUNQLEtBQVAsS0FBZSxVQUFmLElBQTZCUSxNQUFNLENBQUNSLEtBQVAsS0FBZ0IsTUFBN0MsSUFHSVksUUFBUSxDQUFDO0FBQUNHLFVBQUksRUFBQztBQUFOLEtBQUQsQ0FBUixFQUNBQyx1REFBQSxDQUFZLEdBQVosQ0FKSixDQUlvQjtBQUpwQixRQU1DQyxLQUFLLENBQUMsaUJBQUQsQ0FOTjtBQU9ILEdBWkQ7O0FBY0FSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosb0JBQXlCSCxNQUF6QjtBQUNJLHNCQUNJLDhEQUFDLDJEQUFEO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBO0FBQU0sY0FBUSxFQUFFTSxZQUFoQjtBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFFO0FBQWIsU0FBd0JOLE1BQXhCO0FBQWdDLG1CQUFXLEVBQUc7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTyxZQUFJLEVBQUU7QUFBYixTQUE0QkMsTUFBNUI7QUFBb0MsbUJBQVcsRUFBRztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFRLFlBQUksRUFBRSxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQWhDRDs7SUFBTUgsSztVQUNhUixRLEVBQ0FBLFE7OztLQUZiUSxLO0FBaUNOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvbG9naW4uMzIwMjBhNGFiMWQ5ZDU3NjAyNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybUxheW91dCdcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInIFxyXG5cclxuLy/sl6zrn6zqsJzsnZgg7J247ZKLIOyymOumrO2VmOq4sCDsnITtlbTshJwg7IKs7JqpXHJcbmNvbnN0IHVzZUlucHV0PShkZWZhdWx0VmFsdWUpPT57XHJcbiAgICBjb25zdCBbdmFsdWUsc2V0VmFsdWVdPXVzZVN0YXRlKGRlZmF1bHRWYWx1ZSlcclxuICAgIGNvbnN0IG9uQ2hhbmdlPWU9PntcclxuICAgICAgICBjb25zdCB7dmFsdWV9PXsuLi5lLnRhcmdldH1cclxuICAgICAgICBzZXRWYWx1ZSh2YWx1ZSlcclxuICAgIH1cclxuICAgIHJldHVybnt2YWx1ZSxvbkNoYW5nZX1cclxufVxyXG5cclxuY29uc3QgTG9naW4gPSh7cHJvcHN9KT0+e1xyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpOyAvL09iamVjdFxyXG4gICAgY29uc3QgdXNlcnB3ID0gdXNlSW5wdXQoJycpOyAvL09iamVjdFxyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICBjb25zdCB7c3RhdGUsZGlzcGF0Y2h9PXByb3BzO1xyXG5cclxuXHJcbmNvbnN0IGhhbmRsZVN1Ym1pdCA9ZT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlcmlkLnZhbHVlLHVzZXJwdy52YWx1ZSlcclxuXHJcblxyXG4gICAgdXNlcmlkLnZhbHVlPT09XCJuYXJhNzg3NVwiICYmIHVzZXJwdy52YWx1ZSA9PT1cIjEyMzRcIlxyXG4gICAgP1xyXG4gICAgKFxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOlwiTE9HSU5cIn0pLFxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJykvL+uCtOqwgCDsm5DtlZjripQg6rK966Gc66GcIOydtOuPmVxyXG4gICAgKVxyXG4gICAgOmFsZXJ0KCfslYTsnbTrlJTsmYAg7Yyo7Iqk7JuM65Oc6rCAIOuLpOumheuLiOuLpCcpXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKCd1c2VyaWQnLHsuLi51c2VyaWR9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICA8aDI+66Gc6re47J24PC9oMj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIHsuLi51c2VyaWR9IHBsYWNlaG9sZGVyID0gXCLslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJwYXNzd29yZFwiIHsuLi51c2VycHd9IHBsYWNlaG9sZGVyID0gXCLtjKjsiqTsm4zrk5zrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGUgPVwic3VibWl0XCI+66Gc6re47J24PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=