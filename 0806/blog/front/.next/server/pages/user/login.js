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


var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0806\\blog\\front\\components\\FormLayout.jsx";

 //import styled from './FormLayout.module.css'//안의 모든 css를 객체로 변환시켜준다.


const Background = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "FormLayout__Background",
  componentId: "sc-f90v8c-0"
})(["width:100vw;height:100vh;background:#eee;display:flex;align-items:center;justify-content:center;& > div{width:300px;height:200px;background:#fff;padding:20px;}"]); //STYLE 컴포넌트는 밖에서 써야한다!!!!!

const FormLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "YuYu's Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        onClick: (next_router__WEBPACK_IMPORTED_MODULE_1___default().back),
        children: "\uB4A4\uB85C\uAC00\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "contain",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "footer",
        children: "\uCE74\uD53C\uB77C\uC774\uD2B8 \uC5B4\uCA4C\uAD6C \uC800\uCA4C\uAD6C..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

/***/ }),

/***/ "./hooks/useInput.jsx":
/*!****************************!*\
  !*** ./hooks/useInput.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useInput = defaultValue => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);

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

/* harmony default export */ __webpack_exports__["default"] = (useInput);

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0806\\blog\\front\\pages\\user\\login.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //여러개의 인풋 처리하기 위해서 사용





const Login = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    loadding,
    IsLogin
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user);
  const userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)(''); //Object

  const userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)(''); //Object

  console.log('props'); // console.log(props)
  // const dispatch=props.dispatch;

  const handleSubmit = e => {
    e.preventDefault(); // console.log(userid.value,userpw.value)
    // dispatch(USER_LOGIN_ACTION)
    //좋은 점:오타가 안나게 함

    const data = {
      userid: userid.value,
      userpw: userpw.value
    };
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_5__.UserLogin_REQUEST)(data));
    /*
    {type:'UserLogin_REQUEST',
        data:{
            userid:userid.value,
            userpw:userpw.value
        }
    } 
    */
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    IsLogin === true && next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');
  }, [loadding]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "text"
      }, userid), {}, {
        placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
        type: "password"
      }, userpw), {}, {
        placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, undefined), loadding ? '나 로딩중' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, undefined); //로딩중이면 '나 로딩중'이 뜨고, 그렇지 않으면 로그인 버튼이 보이는 것임
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLogin_REQUEST": function() { return /* binding */ UserLogin_REQUEST; },
/* harmony export */   "UserLogin_SUCCESS": function() { return /* binding */ UserLogin_SUCCESS; },
/* harmony export */   "UserLogin_ERROR": function() { return /* binding */ UserLogin_ERROR; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: false,
  IsLogin: false
};
const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
const USER_LOGOUT = "USER_LOGOUT"; // export const UserLoginAction=()=>{
//     return async (dispatch)=>{
//         dispatch(UserLogin_REQUEST())
//         try{
//             //fetch 성공적인 부분
//             const response = await fetch ("http://localhost:3000/api/login",{
//                 method:'POST',
//                 headers:{
//                     "Content-type":"application/json"
//                 },
//                 body:JSON.stringify({...data})
//             })
//             const result = await response.json()
//             result.result === 'OK'
//             ? dispatch(UserLogin_SUCCESS(result))
//             : dispatch(UserLogin_ERROR())
//         } catch(e){
//             dispatch(UserLogin_ERROR())
//         }
//     }
// }

const UserLogin_REQUEST = data => {
  return {
    type: USER_LOGIN_REQUEST,
    data
  };
};
const UserLogin_SUCCESS = () => {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
const UserLogin_ERROR = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};
console.log('index-reducer');

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true,
        loadding: false
      });

    case USER_LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true,
        loadding: false
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9ybUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ob29rcy91c2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy91c2VyL2xvZ2luLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiU3R5bGVkIiwiRm9ybUxheW91dCIsImNoaWxkcmVuIiwiUm91dGVyIiwidXNlSW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJMb2dpbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJsb2FkZGluZyIsIklzTG9naW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZXJpZCIsInVzZXJwdyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJVc2VyTG9naW5fUkVRVUVTVCIsInVzZUVmZmVjdCIsImluaXRpYWxTdGF0ZSIsIlVTRVJfTE9HSU5fUkVRVUVTVCIsIlVTRVJfTE9HSU5fU1VDQ0VTUyIsIlVTRVJfTE9HSU5fRVJST1IiLCJVU0VSX0xPR09VVCIsInR5cGUiLCJVc2VyTG9naW5fU1VDQ0VTUyIsIlVzZXJMb2dpbl9FUlJPUiIsInJlZHVjZXIiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0EsTUFBTUEsVUFBVSxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSx1S0FBaEIsQyxDQWVBOztBQUNBLE1BQU1DLFVBQVUsR0FBRSxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFjO0FBRTVCLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsVUFBRDtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBS0k7QUFBRyxlQUFPLEVBQUVDLHlEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBSyxpQkFBUyxFQUFFLFNBQWhCO0FBQUEsa0JBQ0tEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQVNJO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBaUJILENBbkJEOztBQXFCQSwrREFBZUQsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7QUFHQSxNQUFNRyxRQUFRLEdBQUVDLFlBQUQsSUFBZ0I7QUFDM0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWlCQywrQ0FBUSxDQUFDSCxZQUFELENBQS9COztBQUNBLFFBQU1JLFFBQVEsR0FBQ0MsQ0FBQyxJQUFFO0FBQ2QsVUFBTTtBQUFDSjtBQUFELDBCQUFZSSxDQUFDLENBQUNDLE1BQWQsQ0FBTjs7QUFDQUosWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDSCxHQUhEOztBQUlBLFNBQU07QUFBQ0EsU0FBRDtBQUFPRztBQUFQLEdBQU47QUFDSCxDQVBEOztBQVVBLCtEQUFlTCxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNUSxLQUFLLEdBQUUsTUFBSTtBQUViLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUNDLFlBQUQ7QUFBVUM7QUFBVixNQUFxQkMsd0RBQVcsQ0FBRUMsS0FBRCxJQUFTQSxLQUFLLENBQUNDLElBQWhCLENBQXRDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHaEIsd0RBQVEsQ0FBQyxFQUFELENBQXZCLENBSmEsQ0FJZ0I7O0FBQzdCLFFBQU1pQixNQUFNLEdBQUdqQix3REFBUSxDQUFDLEVBQUQsQ0FBdkIsQ0FMYSxDQUtnQjs7QUFDN0JrQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBTmEsQ0FPYjtBQUNBOztBQUdBLFFBQU1DLFlBQVksR0FBRWQsQ0FBQyxJQUFFO0FBQ25CQSxLQUFDLENBQUNlLGNBQUYsR0FEbUIsQ0FFbkI7QUFDQTtBQUNBOztBQUNBLFVBQU1DLElBQUksR0FBQztBQUNQTixZQUFNLEVBQUNBLE1BQU0sQ0FBQ2QsS0FEUDtBQUVQZSxZQUFNLEVBQUNBLE1BQU0sQ0FBQ2Y7QUFGUCxLQUFYO0FBSUFPLFlBQVEsQ0FBQ2MsaUVBQWlCLENBQUNELElBQUQsQ0FBbEIsQ0FBUjtBQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSyxHQWxCRDs7QUFvQkFFLGtEQUFTLENBQUMsTUFBSTtBQUVkWixXQUFPLEtBQUssSUFBWixJQUFvQmIsdURBQUEsQ0FBWSxHQUFaLENBQXBCO0FBQ0MsR0FIUSxFQUdQLENBQUNZLFFBQUQsQ0FITyxDQUFUO0FBTUEsc0JBQ0ksOERBQUMsMkRBQUQ7QUFBQSw0QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUVBO0FBQU0sY0FBUSxFQUFFUyxZQUFoQjtBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFFO0FBQWIsU0FBd0JKLE1BQXhCO0FBQWdDLG1CQUFXLEVBQUc7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU8sWUFBSSxFQUFFO0FBQWIsU0FBNEJDLE1BQTVCO0FBQW9DLG1CQUFXLEVBQUc7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixFQUdLTixRQUFRLEdBQUcsT0FBSCxnQkFBVztBQUFRLFlBQUksRUFBRSxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosQ0FyQ2EsQ0ErQ2I7QUFDSCxDQWhERDs7QUFpREEsK0RBQWVILEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REEsTUFBTWlCLFlBQVksR0FBQztBQUNmZCxVQUFRLEVBQUMsS0FETTtBQUVmQyxTQUFPLEVBQUM7QUFGTyxDQUFuQjtBQU9BLE1BQU1jLGtCQUFrQixHQUFDLG9CQUF6QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFDLG9CQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFDLGtCQUF2QjtBQUNBLE1BQU1DLFdBQVcsR0FBQyxhQUFsQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1OLGlCQUFpQixHQUFDRCxJQUFJLElBQUU7QUFDakMsU0FBTTtBQUNGUSxRQUFJLEVBQUNKLGtCQURIO0FBQ3NCSjtBQUR0QixHQUFOO0FBR0gsQ0FKTTtBQU1BLE1BQU1TLGlCQUFpQixHQUFFLE1BQUk7QUFDaEMsU0FBTTtBQUNGRCxRQUFJLEVBQUNIO0FBREgsR0FBTjtBQUdILENBSk07QUFNQSxNQUFNSyxlQUFlLEdBQUMsTUFBSTtBQUM3QixTQUFPO0FBQ0hGLFFBQUksRUFBQ0Y7QUFERixHQUFQO0FBR0gsQ0FKTTtBQUtQVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaOztBQUVBLE1BQU1jLE9BQU8sR0FBRSxDQUFDbkIsS0FBSyxHQUFDVyxZQUFQLEVBQW9CUyxNQUFwQixLQUE2QjtBQUV4QyxVQUFPQSxNQUFNLENBQUNKLElBQWQ7QUFDSyxTQUFLSixrQkFBTDtBQUNHLDZDQUNPWixLQURQO0FBRVFILGdCQUFRLEVBQUM7QUFGakI7O0FBS0osU0FBS2dCLGtCQUFMO0FBQ0ksNkNBQ09iLEtBRFA7QUFFUUYsZUFBTyxFQUFDLElBRmhCO0FBR1FELGdCQUFRLEVBQUM7QUFIakI7O0FBS0osU0FBS2lCLGdCQUFMO0FBQ0ksNkNBQ09kLEtBRFA7QUFFUUYsZUFBTyxFQUFDLElBRmhCO0FBR1FELGdCQUFRLEVBQUM7QUFIakI7O0FBS0osU0FBS2tCLFdBQUw7QUFDSSw2Q0FDT2YsS0FEUDtBQUVRRixlQUFPLEVBQUM7QUFGaEI7O0FBSUo7QUFDSSxhQUFPRSxLQUFQO0FBekJSO0FBMkJILENBN0JEOztBQStCQSwrREFBZW1CLE9BQWYsRTs7Ozs7Ozs7Ozs7QUNwRkEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvdXNlci9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy9pbXBvcnQgc3R5bGVkIGZyb20gJy4vRm9ybUxheW91dC5tb2R1bGUuY3NzJy8v7JWI7J2YIOuqqOuToCBjc3Prpbwg6rCd7LK066GcIOuzgO2ZmOyLnOy8nOykgOuLpC5cclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuY29uc3QgQmFja2dyb3VuZCA9IFN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6I2VlZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICB9XHJcbmBcclxuLy9TVFlMRSDsu7Ttj6zrhIztirjripQg67CW7JeQ7IScIOyNqOyVvO2VnOuLpCEhISEhXHJcbmNvbnN0IEZvcm1MYXlvdXQgPSh7Y2hpbGRyZW59KT0+e1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5ZdVl1J3MgQmxvZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKT0+Um91dGVyLmJhY2soKX0+65Kk66Gc6rCA6riwPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPHAgb25DbGljaz17Um91dGVyLmJhY2t9PuuSpOuhnOqwgOq4sDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImNvbnRhaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+ICBcclxuICAgICAgICAgICAgICAgICAgICDsubTtlLzrnbzsnbTtirgg7Ja07KmM6rWsIOyggOypjOq1rC4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dCIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNvbnN0IHVzZUlucHV0PShkZWZhdWx0VmFsdWUpPT57XHJcbiAgICBjb25zdCBbdmFsdWUsc2V0VmFsdWVdPXVzZVN0YXRlKGRlZmF1bHRWYWx1ZSlcclxuICAgIGNvbnN0IG9uQ2hhbmdlPWU9PntcclxuICAgICAgICBjb25zdCB7dmFsdWV9PXsuLi5lLnRhcmdldH1cclxuICAgICAgICBzZXRWYWx1ZSh2YWx1ZSlcclxuICAgIH1cclxuICAgIHJldHVybnt2YWx1ZSxvbkNoYW5nZX1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUlucHV0IiwiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtTGF5b3V0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJyBcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rcy91c2VJbnB1dCdcclxuLy/sl6zrn6zqsJzsnZgg7J247ZKLIOyymOumrO2VmOq4sCDsnITtlbTshJwg7IKs7JqpXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBVc2VyTG9naW5fUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInXHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuY29uc3QgTG9naW4gPSgpPT57XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge2xvYWRkaW5nLElzTG9naW59ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcilcclxuICAgIGNvbnN0IHVzZXJpZCA9IHVzZUlucHV0KCcnKTsgLy9PYmplY3RcclxuICAgIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKTsgLy9PYmplY3RcclxuICAgIGNvbnNvbGUubG9nKCdwcm9wcycpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoPXByb3BzLmRpc3BhdGNoO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPWU9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcmlkLnZhbHVlLHVzZXJwdy52YWx1ZSlcclxuICAgICAgICAvLyBkaXNwYXRjaChVU0VSX0xPR0lOX0FDVElPTilcclxuICAgICAgICAvL+yii+ydgCDsoJA67Jik7YOA6rCAIOyViOuCmOqyjCDtlahcclxuICAgICAgICBjb25zdCBkYXRhPXtcclxuICAgICAgICAgICAgdXNlcmlkOnVzZXJpZC52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcnB3OnVzZXJwdy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fUkVRVUVTVChkYXRhKSlcclxuICAgICAgICAvKlxyXG4gICAgICAgIHt0eXBlOidVc2VyTG9naW5fUkVRVUVTVCcsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgdXNlcmlkOnVzZXJpZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJwdzp1c2VycHcudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgKi9cclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICBJc0xvZ2luID09PSB0cnVlICYmIFJvdXRlci5wdXNoKCcvJylcclxuICAgIH0sW2xvYWRkaW5nXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgIDxoMj7roZzqt7jsnbg8L2gyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgey4uLnVzZXJpZH0gcGxhY2Vob2xkZXIgPSBcIuyVhOydtOuUlOulvCDsnoXroKXtlbTso7zshLjsmpRcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInBhc3N3b3JkXCIgey4uLnVzZXJwd30gcGxhY2Vob2xkZXIgPSBcIu2MqOyKpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpRcIi8+XHJcbiAgICAgICAgICAgIHtsb2FkZGluZyA/ICfrgpgg66Gc65Sp7KSRJzo8YnV0dG9uIHR5cGUgPVwic3VibWl0XCI+66Gc6re47J24PC9idXR0b24+fVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICApXHJcbiAgICAvL+uhnOuUqeykkeydtOuptCAn64KYIOuhnOuUqeykkSfsnbQg65yo6rOgLCDqt7jroIfsp4Ag7JWK7Jy866m0IOuhnOq3uOyduCDrsoTtirzsnbQg67O07J2064qUIOqyg+yehFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIiwiY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIGxvYWRkaW5nOmZhbHNlLFxyXG4gICAgSXNMb2dpbjpmYWxzZVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVD1cIlVTRVJfTE9HSU5fUkVRVUVTVFwiXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUz1cIlVTRVJfTE9HSU5fU1VDQ0VTU1wiXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1I9XCJVU0VSX0xPR0lOX0VSUk9SXCJcclxuY29uc3QgVVNFUl9MT0dPVVQ9XCJVU0VSX0xPR09VVFwiXHJcblxyXG4vLyBleHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uPSgpPT57XHJcbi8vICAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKT0+e1xyXG4vLyAgICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9SRVFVRVNUKCkpXHJcbi8vICAgICAgICAgdHJ5e1xyXG4vLyAgICAgICAgICAgICAvL2ZldGNoIOyEseqzteyggeyduCDrtoDrtoRcclxuLy8gICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luXCIse1xyXG4vLyAgICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuLy8gICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHsuLi5kYXRhfSlcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbi8vICAgICAgICAgICAgIHJlc3VsdC5yZXN1bHQgPT09ICdPSydcclxuLy8gICAgICAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5fU1VDQ0VTUyhyZXN1bHQpKVxyXG4vLyAgICAgICAgICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKVxyXG4vLyAgICAgICAgIH0gY2F0Y2goZSl7XHJcbi8vICAgICAgICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9SRVFVRVNUPWRhdGE9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fUkVRVUVTVCxkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fU1VDQ0VTUyA9KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fU1VDQ0VTU1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX0VSUk9SPSgpPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9FUlJPUlxyXG4gICAgfVxyXG59XHJcbmNvbnNvbGUubG9nKCdpbmRleC1yZWR1Y2VyJyk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRkaW5nOnRydWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBJc0xvZ2luOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGRpbmc6ZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIElzTG9naW46dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZGluZzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIElzTG9naW46ZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==