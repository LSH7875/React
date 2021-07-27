(function() {
var exports = {};
exports.id = "pages/user/login";
exports.ids = ["pages/user/login"];
exports.modules = {

/***/ "./components/FormLayout.jsx":
/*!***********************************!*\
  !*** ./components/FormLayout.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0727\\blog\\front\\components\\FormLayout.jsx";

 //import styled from './FormLayout.module.css'//안의 모든 css를 객체로 변환시켜준다.



const FormLayout = ({
  children
}) => {
  const Background = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "FormLayout__Background",
    componentId: "sc-f90v8c-0"
  })(["width:100vw;height:100vh;background:#eee;display:flex;align-items:center;justify-content:center;& > div{width:300px;height:200px;background:#fff;padding:20px;}"]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "YuYu's Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        onClick: (next_router__WEBPACK_IMPORTED_MODULE_1___default().back),
        children: "\uB4A4\uB85C\uAC00\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "contain",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "footer",
        children: "\uCE74\uD53C\uB77C\uC774\uD2B8 \uC5B4\uCA4C\uAD6C \uC800\uCA4C\uAD6C..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

/***/ }),

/***/ "./pages/user/login.jsx":
/*!******************************!*\
  !*** ./pages/user/login.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0727\\blog\\front\\pages\\user\\login.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //여러개의 인풋 처리하기 위해서 사용

const useInput = defaultValue => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue);

  const onChange = e => {
    const {
      value
    } = _objectSpread({}, e.target);

    setValue(value);
  };

  return {
    value,
    onChange
  };
};

const Login = props => {
  const userid = useInput(''); //Object

  const userpw = useInput(''); //Object

  console.log('props');
  console.log(props);
  const dispatch = props.dispatch;

  const handleSubmit = e => {
    e.preventDefault(); // console.log(userid.value,userpw.value)

    userid.value === "nara7875" && userpw.value === "1234" ? (dispatch({
      type: "LOGIN"
    }), next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/') //내가 원하는 경로로 이동
    ) : alert('아이디와 패스워드가 다릅니다');
  };

  console.log('userid', _objectSpread({}, userid));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, userid), {}, {
        placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userpw), {}, {
        placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/user/login.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9ybUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy91c2VyL2xvZ2luLmpzeCIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9ybUxheW91dCIsImNoaWxkcmVuIiwiQmFja2dyb3VuZCIsIlN0eWxlZCIsIlJvdXRlciIsInVzZUlucHV0IiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiTG9naW4iLCJwcm9wcyIsInVzZXJpZCIsInVzZXJwdyIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFDQSxNQUFNQSxVQUFVLEdBQUUsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBYztBQUc1QixRQUFNQyxVQUFVLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHlLQUFoQjtBQWdCQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLFVBQUQ7QUFBQSw4QkFDSSw4REFBQyxrREFBRDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJO0FBQUcsZUFBTyxFQUFFQyx5REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQUssaUJBQVMsRUFBRSxTQUFoQjtBQUFBLGtCQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFTSTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWlCSCxDQXBDRDs7QUFzQ0EsK0RBQWVELFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUssUUFBUSxHQUFFQyxZQUFELElBQWdCO0FBQzNCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFpQkMsK0NBQVEsQ0FBQ0gsWUFBRCxDQUEvQjs7QUFDQSxRQUFNSSxRQUFRLEdBQUNDLENBQUMsSUFBRTtBQUNkLFVBQU07QUFBQ0o7QUFBRCwwQkFBWUksQ0FBQyxDQUFDQyxNQUFkLENBQU47O0FBQ0FKLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFJQSxTQUFNO0FBQUNBLFNBQUQ7QUFBT0c7QUFBUCxHQUFOO0FBQ0gsQ0FQRDs7QUFTQSxNQUFNRyxLQUFLLEdBQUdDLEtBQUQsSUFBUztBQUNsQixRQUFNQyxNQUFNLEdBQUdWLFFBQVEsQ0FBQyxFQUFELENBQXZCLENBRGtCLENBQ1c7O0FBQzdCLFFBQU1XLE1BQU0sR0FBR1gsUUFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FGa0IsQ0FFVzs7QUFDN0JZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFDQSxRQUFNSyxRQUFRLEdBQUNMLEtBQUssQ0FBQ0ssUUFBckI7O0FBR0osUUFBTUMsWUFBWSxHQUFFVCxDQUFDLElBQUU7QUFDbkJBLEtBQUMsQ0FBQ1UsY0FBRixHQURtQixDQUVuQjs7QUFHQU4sVUFBTSxDQUFDUixLQUFQLEtBQWUsVUFBZixJQUE2QlMsTUFBTSxDQUFDVCxLQUFQLEtBQWdCLE1BQTdDLElBR0lZLFFBQVEsQ0FBQztBQUFDRyxVQUFJLEVBQUM7QUFBTixLQUFELENBQVIsRUFDQWxCLHVEQUFBLENBQVksR0FBWixDQUpKLENBSW9CO0FBSnBCLFFBTUNtQixLQUFLLENBQUMsaUJBQUQsQ0FOTjtBQU9ILEdBWkQ7O0FBY0FOLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosb0JBQXlCSCxNQUF6QjtBQUNJLHNCQUNJLDhEQUFDLDJEQUFEO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFQTtBQUFNLGNBQVEsRUFBRUssWUFBaEI7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBRTtBQUFiLFNBQXdCTCxNQUF4QjtBQUFnQyxtQkFBVyxFQUFHO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFPLFlBQUksRUFBRTtBQUFiLFNBQTRCQyxNQUE1QjtBQUFvQyxtQkFBVyxFQUFHO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFRLFlBQUksRUFBRSxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVVILENBakNEOztBQWtDQSwrREFBZUgsS0FBZixFOzs7Ozs7Ozs7OztBQ2hEQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy91c2VyL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vL2ltcG9ydCBzdHlsZWQgZnJvbSAnLi9Gb3JtTGF5b3V0Lm1vZHVsZS5jc3MnLy/slYjsnZgg66qo65OgIGNzc+ulvCDqsJ3ssrTroZwg67OA7ZmY7Iuc7Lyc7KSA64ukLlxyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5jb25zdCBGb3JtTGF5b3V0ID0oe2NoaWxkcmVufSk9PntcclxuXHJcblxyXG4gICAgY29uc3QgQmFja2dyb3VuZCA9IFN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6I2VlZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICB9XHJcbmBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+WXVZdSdzIEJsb2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCk9PlJvdXRlci5iYWNrKCl9PuuSpOuhnOqwgOq4sDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e1JvdXRlci5iYWNrfT7rkqTroZzqsIDquLA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJjb250YWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPiAgXHJcbiAgICAgICAgICAgICAgICAgICAg7Lm07ZS865287J207Yq4IOyWtOypjOq1rCDsoIDsqYzqtawuLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1MYXlvdXQiLCJpbXBvcnQgRm9ybUxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm1MYXlvdXQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJyBcclxuXHJcbi8v7Jes65+s6rCc7J2YIOyduO2SiyDsspjrpqztlZjquLAg7JyE7ZW07IScIOyCrOyaqVxyXG5jb25zdCB1c2VJbnB1dD0oZGVmYXVsdFZhbHVlKT0+e1xyXG4gICAgY29uc3QgW3ZhbHVlLHNldFZhbHVlXT11c2VTdGF0ZShkZWZhdWx0VmFsdWUpXHJcbiAgICBjb25zdCBvbkNoYW5nZT1lPT57XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlfT17Li4uZS50YXJnZXR9XHJcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm57dmFsdWUsb25DaGFuZ2V9XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luID0ocHJvcHMpPT57XHJcbiAgICBjb25zdCB1c2VyaWQgPSB1c2VJbnB1dCgnJyk7IC8vT2JqZWN0XHJcbiAgICBjb25zdCB1c2VycHcgPSB1c2VJbnB1dCgnJyk7IC8vT2JqZWN0XHJcbiAgICBjb25zb2xlLmxvZygncHJvcHMnKVxyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICBjb25zdCBkaXNwYXRjaD1wcm9wcy5kaXNwYXRjaDtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVTdWJtaXQgPWU9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSx1c2VycHcudmFsdWUpXHJcblxyXG5cclxuICAgIHVzZXJpZC52YWx1ZT09PVwibmFyYTc4NzVcIiAmJiB1c2VycHcudmFsdWUgPT09XCIxMjM0XCJcclxuICAgID9cclxuICAgIChcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpcIkxPR0lOXCJ9KSxcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpLy/rgrTqsIAg7JuQ7ZWY64qUIOqyveuhnOuhnCDsnbTrj5lcclxuICAgIClcclxuICAgIDphbGVydCgn7JWE7J2065SU7JmAIO2MqOyKpOybjOuTnOqwgCDri6TrpoXri4jri6QnKVxyXG59XHJcblxyXG5jb25zb2xlLmxvZygndXNlcmlkJyx7Li4udXNlcmlkfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgPGgyPuuhnOq3uOyduDwvaDI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiB7Li4udXNlcmlkfSBwbGFjZWhvbGRlciA9IFwi7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBwbGFjZWhvbGRlciA9IFwi7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalFwiLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID1cInN1Ym1pdFwiPuuhnOq3uOyduDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==