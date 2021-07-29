(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducer */ "./store/reducer.jsx");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0729\\front\\pages\\_app.jsx";
// import'../index.css'
// import Head from 'next/head'
// import Store from '../store/context'
// import {useReducer,useContext} from 'react'
// // import {reducer} from '../store/reducer'
// import wrapper from '../store/configureStore'
// const App=({Component})=>{
//     // const globalContext=useContext(Store)
//     // const [state,dispatch] = useReducer(reducer,globalContext)
//     return (
//         <>
//         <Head>
//             <link/>
//             <link rel="preconnect" href="https://fonts.googleapis.com"/>
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
//             <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet"/>
//         </Head>
//         <Store.Provider value ={{state,dispatch}}/>
//             <Component/>/{/*우리가 만든 모든 것이 components에 위치한다.  */}
//         <Store.Provider/>
//         </>
//     )
// }
// export default wrapper.withRedux(App)







const App = ({
  Component
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500;900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__.default.withRedux(App));

/***/ }),

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  menu: [{
    id: '1',
    category: '대분류메뉴1',
    url: '/posts/HTML'
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
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //여기서 초기값을 선정해준다. 
//여기서 모든 값을 다 관리하는 것
//왠만하면 컴포넌트는 화면에 그리는 것에 집중하고
//값을 정리하는 것은 여기에
//string의 단점: 오타를 내도 틀린줄 모름...
//그래서 변수로 만들어서 실행한다. 그게 관리하는게 쉬울거임
//오타로 인한 오류 찾기도 쉽다. 

const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.HYDRATE:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__.default,
  category: _category__WEBPACK_IMPORTED_MODULE_2__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; },
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  IsLogin: false
};
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};
const UserLoginAction = () => {
  return {
    type: USER_LOGIN
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log('로그인 신호 옴');
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true
      });

    case USER_LOGOUT:
      console.log('로그아웃 들어옴');
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);



 // const configureStore=()=>{
// //redux는 초기값은 rducer에 있음.
//     const store = createStore(reducer)
// }

const configureStore = () => {
  const middlewares = []; //개발모드와 배포모드를 다르게 하겠다는 것

  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));
  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default, enhancer); //===createContext(reducer) 
  //-===createContext(상태초기값)
  //reducer 안에 초기값을 가지고 있음

  return Store;
}; //wrapper의 두번째 인잣값은 옵션값임


const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
}); //configureStore

/* harmony default export */ __webpack_exports__["default"] = (wrapper); //wrapper:provider 생략할 수 있게 해주는 역할을 한다.

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  IsLogin: false
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./store/reducer.jsx":
/*!***************************!*\
  !*** ./store/reducer.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true
      });

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    case "":
      return state;

    default:
      return state;
  }
};

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvcmVkdWNlci5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsIndyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJtZW51IiwiaWQiLCJjYXRlZ29yeSIsInVybCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsIklzTG9naW4iLCJVU0VSX0xPR0lOIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9nb3V0QWN0aW9uIiwiVXNlckxvZ2luQWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiU3RvcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWlCO0FBRXpCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsMkJBQTVCO0FBQXdELG1CQUFXLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQU0sWUFBSSxFQUFDLHFGQUFYO0FBQWlHLFdBQUcsRUFBQztBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBLGtCQURKO0FBV0gsQ0FiRDs7QUFlQSwrREFBZUMsb0VBQUEsQ0FBa0JGLEdBQWxCLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkRBLE1BQU1HLFlBQVksR0FBQztBQUNmQyxNQUFJLEVBQUMsQ0FDRDtBQUFJQyxNQUFFLEVBQUMsR0FBUDtBQUFXQyxZQUFRLEVBQUMsUUFBcEI7QUFBNkJDLE9BQUcsRUFBQztBQUFqQyxHQURDLEVBRUQ7QUFBSUYsTUFBRSxFQUFDLEdBQVA7QUFBV0MsWUFB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QixPQUFmLEUsQ0FFQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFFTyxNQUFNQyxZQUFZLEdBQUU7QUFDdkJjLFNBQU8sRUFBQztBQURlLENBQXBCO0FBSVAsTUFBTWEsS0FBSyxnQkFBR0ksb0RBQWEsQ0FBQy9CLFlBQUQsQ0FBM0I7QUFFQSwrREFBZTJCLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk8sTUFBTXRCLE9BQU8sR0FBRSxDQUFDQyxLQUFELEVBQU9DLE1BQVAsS0FBZ0I7QUFDbEMsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxPQUFMO0FBQ0ksNkNBQVdGLEtBQVg7QUFDSVEsZUFBTyxFQUFDO0FBRFo7O0FBRUosU0FBSyxRQUFMO0FBQ0ksNkNBQ2VSLEtBRGY7QUFFWVEsZUFBTyxFQUFDO0FBRnBCOztBQUlKLFNBQUssRUFBTDtBQUNJLGFBQU9SLEtBQVA7O0FBQ0o7QUFDSSxhQUFPQSxLQUFQO0FBWlI7QUFjSCxDQWZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQLGdEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQnLi4vaW5kZXguY3NzJ1xyXG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGltcG9ydCBTdG9yZSBmcm9tICcuLi9zdG9yZS9jb250ZXh0J1xyXG4vLyBpbXBvcnQge3VzZVJlZHVjZXIsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbi8vIC8vIGltcG9ydCB7cmVkdWNlcn0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcidcclxuLy8gaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnXHJcbi8vIGNvbnN0IEFwcD0oe0NvbXBvbmVudH0pPT57XHJcbi8vICAgICAvLyBjb25zdCBnbG9iYWxDb250ZXh0PXVzZUNvbnRleHQoU3RvcmUpXHJcbi8vICAgICAvLyBjb25zdCBbc3RhdGUsZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLGdsb2JhbENvbnRleHQpXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgPEhlYWQ+XHJcbi8vICAgICAgICAgICAgIDxsaW5rLz5cclxuXHJcbi8vICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cclxuLy8gICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJ0cnVlXCIvPlxyXG4vLyAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EbytIeWVvbiZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4vLyAgICAgICAgIDwvSGVhZD5cclxuLy8gICAgICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWUgPXt7c3RhdGUsZGlzcGF0Y2h9fS8+XHJcbi8vICAgICAgICAgICAgIDxDb21wb25lbnQvPi97LyrsmrDrpqzqsIAg66eM65OgIOuqqOuToCDqsoPsnbQgY29tcG9uZW50c+yXkCDsnITsuZjtlZzri6QuICAqL31cclxuLy8gICAgICAgICA8U3RvcmUuUHJvdmlkZXIvPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcClcclxuXHJcblxyXG5pbXBvcnQgJy4uL2luZGV4LmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgU3RvcmUse2luaXRhbFN0YXRlfSBmcm9tICcuLi9zdG9yZS9jb250ZXh0J1xyXG5pbXBvcnQge3VzZVJlZHVjZXIsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7cmVkdWNlcn0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcidcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnXHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICh7Q29tcG9uZW50fSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDEwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKVxyXG4iLCJjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbWVudTpbXHJcbiAgICAgICAgeyAgIGlkOicxJyxjYXRlZ29yeTon64yA67aE66WY66mU64m0MScsdXJsOicvcG9zdHMvSFRNTCcgICAgfSxcclxuICAgICAgICB7ICAgaWQ6JzInLGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyx1cmw6Jy9wb3N0cy8yJyAgICB9LFxyXG4gICAgICAgIHsgICBpZDonMycsY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLHVybDonL3Bvc3RzLzMnICAgIH0sXHJcbiAgICAgICAgeyAgIGlkOic0JyxjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsdXJsOicvcG9zdHMvNCcgICAgfSxcclxuICAgICAgICB7ICAgaWQ6JzUnLGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1Jyx1cmw6Jy9wb3N0cy81JyAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCJcclxuLy/sl6zquLDshJwg7LSI6riw6rCS7J2EIOyEoOygle2VtOykgOuLpC4gXHJcbi8v7Jes6riw7IScIOuqqOuToCDqsJLsnYQg64ukIOq0gOumrO2VmOuKlCDqsoNcclxuLy/smaDrp4ztlZjrqbQg7Lu07Y+s64SM7Yq464qUIO2ZlOuptOyXkCDqt7jrpqzripQg6rKD7JeQIOynkeykke2VmOqzoFxyXG4vL+qwkuydhCDsoJXrpqztlZjripQg6rKD7J2AIOyXrOq4sOyXkFxyXG5cclxuLy9zdHJpbmfsnZgg64uo7KCQOiDsmKTtg4Drpbwg64K064+EIO2LgOumsOykhCDrqqjrpoQuLi5cclxuLy/qt7jrnpjshJwg67OA7IiY66GcIOunjOuTpOyWtOyEnCDsi6TtlontlZzri6QuIOq3uOqyjCDqtIDrpqztlZjripTqsowg7Ims7Jq46rGw7J6EXHJcbi8v7Jik7YOA66GcIOyduO2VnCDsmKTrpZgg7LC+6riw64+EIOyJveuLpC4gXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6KHN0YXRlPXt9LGFjdGlvbik9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBcclxuICAgIH1cclxuKVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIElzTG9naW46ZmFsc2VcclxufVxyXG5jb25zdCBVU0VSX0xPR0lOPVwiVVNFUl9MT0dJTlwiXHJcbmNvbnN0IFVTRVJfTE9HT1VUPVwiVVNFUl9MT0dPVVRcIlxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJuIHt0eXBlOlVTRVJfTE9HT1VUfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb249KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9KHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICBjYXNlIFVTRVJfTE9HSU46XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfroZzqt7jsnbgg7Iug7Zi4IOyYtCcpXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIElzTG9naW46dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn66Gc6re47JWE7JuDIOuTpOyWtOyYtCcpXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIElzTG9naW46ZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHtjb21wb3NlLCBjcmVhdGVTdG9yZSAsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuLy8gY29uc3QgY29uZmlndXJlU3RvcmU9KCk9PntcclxuLy8gLy9yZWR1eOuKlCDstIjquLDqsJLsnYAgcmR1Y2Vy7JeQIOyeiOydjC5cclxuXHJcbi8vICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpXHJcbi8vIH1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCk9PntcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzPVtdXHJcbi8v6rCc67Cc66qo65Oc7JmAIOuwsO2PrOuqqOuTnOulvCDri6TrpbTqsowg7ZWY6rKg64uk64qUIOqyg1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJ1xyXG4gICAgP2NvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDpjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBTdG9yZT1jcmVhdGVTdG9yZShyZWR1Y2VyLGVuaGFuY2VyKVxyXG4gICAgLy89PT1jcmVhdGVDb250ZXh0KHJlZHVjZXIpIFxyXG4gICAgLy8tPT09Y3JlYXRlQ29udGV4dCjsg4Htg5zstIjquLDqsJIpXHJcbiAgICAvL3JlZHVjZXIg7JWI7JeQIOy0iOq4sOqwkuydhCDqsIDsp4Dqs6Ag7J6I7J2MXHJcbiAgICByZXR1cm4gU3RvcmVcclxufVxyXG4vL3dyYXBwZXLsnZgg65GQ67KI7Ke4IOyduOyeo+qwkuydgCDsmLXshZjqsJLsnoRcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUse1xyXG4gICAgZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnXHJcbn0pXHJcbi8vY29uZmlndXJlU3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlclxyXG5cclxuLy93cmFwcGVyOnByb3ZpZGVyIOyDneuete2VoCDsiJgg7J6I6rKMIO2VtOyjvOuKlCDsl63tlaDsnYQg7ZWc64ukLiIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID17XHJcbiAgICBJc0xvZ2luOmZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiLCJleHBvcnQgY29uc3QgcmVkdWNlciA9KHN0YXRlLGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOnRydWV9XHJcbiAgICAgICAgY2FzZSBcIkxPR09VVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSXNMb2dpbjpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9