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
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\SH\\Desktop\\React\\0806\\blog\\front\\pages\\_app.jsx";
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
// import '../index.css'
// import Head from 'next/head'
// import Store,{initalState} from '../store/context'
// import {useReducer,useContext} from 'react'
// import {reducer} from '../store/reducer'
// import wrapper from '../store/configureStore'
// const App = ({Component}) => {
//     return (
//         <>
//             <Head>
//                 <link rel="preconnect" href="https://fonts.googleapis.com" />
//                 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//                 <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500;900&display=swap" rel="stylesheet" />
//             </Head>
//             <Component/>
//         </>
//     )
// }
// export default wrapper.withRedux(App)



const App = ({
  Component
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_2__.default.withRedux(App));

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

console.log('인덱스 리듀서');
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
  //     user(state={IsLogin:false},action)=>{
  //     switch(action.type){
  //         case USER_LOGIN:
  //            console.log('로그인 신호 옴')
  //            return{
  //                ...state,
  //                IsLogin:true
  //                }
  //        case USER_LOGOUT:
  //            return{
  //                ...state,
  //                    IsLogin:false
  //                }
  //        default:
  //            return state
  //    }
  // }
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

/***/ "./saga/index.js":
/*!***********************!*\
  !*** ./saga/index.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./saga/user.js");


function* rootSaga() {
  console.log('root사가');
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_user__WEBPACK_IMPORTED_MODULE_1__.default) //fork(postSaga)
  ]);
}

/***/ }),

/***/ "./saga/user.js":
/*!**********************!*\
  !*** ./saga/user.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ userSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



function* login(action) {
  console.log(action); // call()
  // axios.post('http://localhost:3000/api/login',action.data)

  const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)((axios__WEBPACK_IMPORTED_MODULE_1___default().post), 'http://localhost:3000/api/login', action.data); //call (함수,url,data)

  console.log(result); //성공적이라고 생각하고 작성하기

  const data = result.data;

  if (data.result == "OK") {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: 'USER_LOGIN_SUCCESS'
    });
  } else {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: 'USER_LOGIN_FAIL'
    });
  }

  console.log('훔쳐오기!'); //saga에서는 async await 안쓰고 쓸 수 있음
}

function* watchLogin() {
  console.log('와치사가');
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)("USER_LOGIN_REQUEST", login);
}

function* userSaga() {
  console.log('유저사가');
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogin)]);
}

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
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _saga_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../saga/index */ "./saga/index.js");






 // const configureStore=()=>{
// //redux는 초기값은 rducer에 있음.
//     const store = createStore(reducer)
// }

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action); //action값은 Store생성할 때 createStore 함수의 두번째 인잣값인 enhancer값
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_5___default()();
  const middlewares = [sagaMiddleware]; //개발모드와 배포모드를 다르게 하겠다는 것

  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));
  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default, enhancer);
  Store.sagaTask = sagaMiddleware.run(_saga_index__WEBPACK_IMPORTED_MODULE_6__.default); //===createContext(reducer) 
  //-===createContext(상태초기값)
  //reducer 안에 초기값을 가지고 있음

  return Store;
}; //wrapper의 두번째 인잣값은 옵션값임


const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
}); //configureStore

/* harmony default export */ __webpack_exports__["default"] = (wrapper); //wrapper:provider 생략할 수 있게 해주는 역할을 한다.

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

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

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zYWdhL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250Ly4vc2FnYS91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJ3cmFwcGVyIiwiaW5pdGlhbFN0YXRlIiwibWVudSIsImlkIiwiY2F0ZWdvcnkiLCJ1cmwiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwibG9hZGRpbmciLCJJc0xvZ2luIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luX1JFUVVFU1QiLCJkYXRhIiwiVXNlckxvZ2luX1NVQ0NFU1MiLCJVc2VyTG9naW5fRVJST1IiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsImxvZ2luIiwicmVzdWx0IiwiY2FsbCIsImF4aW9zIiwicHV0Iiwid2F0Y2hMb2dpbiIsInRha2VMYXRlc3QiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsIlN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDMUIsc0JBQ0k7QUFBQSwyQkFHSSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISixtQkFESjtBQVNILENBVkQ7O0FBWUEsK0RBQWVDLG9FQUFBLENBQWtCRixHQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ25FQSxNQUFNRyxZQUFZLEdBQUM7QUFDZkMsTUFBSSxF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Q0EsTUFBTWxELE9BQU8sR0FBR3NELGlFQUFhLENBQUNaLGNBQUQsRUFBZ0I7QUFDekNhLE9BQUs7QUFEb0MsQ0FBaEIsQ0FBN0IsQyxDQUdBOztBQUNBLCtEQUFldkQsT0FBZixFLENBRUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0Jy4uL2luZGV4LmNzcydcclxuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuLy8gaW1wb3J0IHt1c2VSZWR1Y2VyLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG4vLyAvLyBpbXBvcnQge3JlZHVjZXJ9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXInXHJcbi8vIGltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xyXG4vLyBjb25zdCBBcHA9KHtDb21wb25lbnR9KT0+e1xyXG4vLyAgICAgLy8gY29uc3QgZ2xvYmFsQ29udGV4dD11c2VDb250ZXh0KFN0b3JlKVxyXG4vLyAgICAgLy8gY29uc3QgW3N0YXRlLGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcixnbG9iYWxDb250ZXh0KVxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgIDxIZWFkPlxyXG4vLyAgICAgICAgICAgICA8bGluay8+XHJcblxyXG4vLyAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIi8+XHJcbi8vICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiLz5cclxuLy8gICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RG8rSHllb24mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuLy8gICAgICAgICA8L0hlYWQ+XHJcbi8vICAgICAgICAgPFN0b3JlLlByb3ZpZGVyIHZhbHVlID17e3N0YXRlLGRpc3BhdGNofX0vPlxyXG4vLyAgICAgICAgICAgICA8Q29tcG9uZW50Lz4vey8q7Jqw66as6rCAIOunjOuToCDrqqjrk6Ag6rKD7J20IGNvbXBvbmVudHPsl5Ag7JyE7LmY7ZWc64ukLiAgKi99XHJcbi8vICAgICAgICAgPFN0b3JlLlByb3ZpZGVyLz5cclxuLy8gICAgICAgICA8Lz5cclxuLy8gICAgIClcclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApXHJcblxyXG5cclxuLy8gaW1wb3J0ICcuLi9pbmRleC5jc3MnXHJcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IFN0b3JlLHtpbml0YWxTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuLy8gaW1wb3J0IHt1c2VSZWR1Y2VyLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQge3JlZHVjZXJ9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXInXHJcbi8vIGltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xyXG5cclxuXHJcblxyXG4vLyBjb25zdCBBcHAgPSAoe0NvbXBvbmVudH0pID0+IHtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgIDxIZWFkPlxyXG4vLyAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAxMDA7NTAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuLy8gICAgICAgICAgICAgPC9IZWFkPlxyXG4vLyAgICAgICAgICAgICA8Q29tcG9uZW50Lz5cclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgPC8+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcClcclxuaW1wb3J0ICcuLi9pbmRleC5jc3MnXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPGgxPlN0YXJ0PC9oMT4gKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogPGgxPkVuZDwvaDE+ICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApIiwiY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIG1lbnU6W1xyXG4gICAgICAgIHsgICBpZDonMScsY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLHVybDonL3Bvc3RzL0hUTUwnICAgIH0sXHJcbiAgICAgICAgeyAgIGlkOicyJyxjYXRlZ29yeTon64yA67aE66WY66mU64m0MicsdXJsOicvcG9zdHMvMicgICAgfSxcclxuICAgICAgICB7ICAgaWQ6JzMnLGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyx1cmw6Jy9wb3N0cy8zJyAgICB9LFxyXG4gICAgICAgIHsgICBpZDonNCcsY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLHVybDonL3Bvc3RzLzQnICAgIH0sXHJcbiAgICAgICAgeyAgIGlkOic1JyxjYXRlZ29yeTon64yA67aE66WY66mU64m0NScsdXJsOicvcG9zdHMvNScgICAgfSxcclxuICAgIF1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9KHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIlxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbi8v7Jes6riw7IScIOy0iOq4sOqwkuydhCDshKDsoJXtlbTspIDri6QuIFxyXG4vL+yXrOq4sOyEnCDrqqjrk6Ag6rCS7J2EIOuLpCDqtIDrpqztlZjripQg6rKDXHJcbi8v7Jmg66eM7ZWY66m0IOy7tO2PrOuEjO2KuOuKlCDtmZTrqbTsl5Ag6re466as64qUIOqyg+yXkCDsp5HspJHtlZjqs6BcclxuLy/qsJLsnYQg7KCV66as7ZWY64qUIOqyg+ydgCDsl6zquLDsl5BcclxuXHJcbi8vc3RyaW5n7J2YIOuLqOygkDog7Jik7YOA66W8IOuCtOuPhCDti4DrprDspIQg66qo66aELi4uXHJcbi8v6re4656Y7IScIOuzgOyImOuhnCDrp4zrk6TslrTshJwg7Iuk7ZaJ7ZWc64ukLiDqt7jqsowg6rSA66as7ZWY64qU6rKMIOyJrOyauOqxsOyehFxyXG4vL+yYpO2DgOuhnCDsnbjtlZwg7Jik66WYIOywvuq4sOuPhCDsib3ri6QuIFxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCfsnbjrjbHsiqQg66as65OA7IScJylcclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBcclxuICAgIGluZGV4OihzdGF0ZT17fSxhY3Rpb24pPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuLy8gICAgIHVzZXIoc3RhdGU9e0lzTG9naW46ZmFsc2V9LGFjdGlvbik9PntcclxuICAgIC8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgLy8gICAgICAgICBjYXNlIFVTRVJfTE9HSU46XHJcbiAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCfroZzqt7jsnbgg7Iug7Zi4IOyYtCcpXHJcbiAgICAvLyAgICAgICAgICAgIHJldHVybntcclxuICAgIC8vICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgSXNMb2dpbjp0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAvLyAgICAgICAgICAgIHJldHVybntcclxuICAgIC8vICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIElzTG9naW46ZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAvLyAgICB9XHJcbi8vIH1cclxuXHJcbiAgICBjYXRlZ29yeSxcclxuICAgIFxyXG4gICAgfVxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbG9hZGRpbmc6ZmFsc2UsXHJcbiAgICBJc0xvZ2luOmZhbHNlXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUPVwiVVNFUl9MT0dJTl9SRVFVRVNUXCJcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTPVwiVVNFUl9MT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUj1cIlVTRVJfTE9HSU5fRVJST1JcIlxyXG5jb25zdCBVU0VSX0xPR09VVD1cIlVTRVJfTE9HT1VUXCJcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb249KCk9PntcclxuLy8gICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpPT57XHJcbi8vICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX1JFUVVFU1QoKSlcclxuLy8gICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgIC8vZmV0Y2gg7ISx6rO17KCB7J24IOu2gOu2hFxyXG4vLyAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoIChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW5cIix7XHJcbi8vICAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoey4uLmRhdGF9KVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuLy8gICAgICAgICAgICAgcmVzdWx0LnJlc3VsdCA9PT0gJ09LJ1xyXG4vLyAgICAgICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpbl9TVUNDRVNTKHJlc3VsdCkpXHJcbi8vICAgICAgICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbi8vICAgICAgICAgfSBjYXRjaChlKXtcclxuLy8gICAgICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1JFUVVFU1Q9ZGF0YT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9SRVFVRVNULGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9TVUNDRVNTID0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9TVUNDRVNTXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fRVJST1I9KCk9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOX0VSUk9SXHJcbiAgICB9XHJcbn1cclxuY29uc29sZS5sb2coJ2luZGV4LXJlZHVjZXInKTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGRpbmc6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIElzTG9naW46dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZGluZzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNMb2dpbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRkaW5nOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNMb2dpbjpmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHthbGwsICBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIGNvbnNvbGUubG9nKCdyb2907IKs6rCAJylcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgLy9mb3JrKHBvc3RTYWdhKVxyXG4gICAgXSlcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIHRha2VMYXRlc3QsZm9yayxjYWxsLHB1dH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbil7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICAvLyBjYWxsKClcclxuICAgIC8vIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLGFjdGlvbi5kYXRhKVxyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChheGlvcy5wb3N0LCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyxhY3Rpb24uZGF0YSlcclxuICAgIC8vY2FsbCAo7ZWo7IiYLHVybCxkYXRhKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgIC8v7ISx6rO17KCB7J2065286rOgIOyDneqwge2VmOqzoCDsnpHshLHtlZjquLBcclxuICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIGlmKGRhdGEucmVzdWx0ID09XCJPS1wiKXtcclxuICAgICAgICB5aWVsZCBwdXQoe3R5cGU6J1VTRVJfTE9HSU5fU1VDQ0VTUyd9KVxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHlpZWxkIHB1dCh7dHlwZTonVVNFUl9MT0dJTl9GQUlMJ30pXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygn7ZuU7LOQ7Jik6riwIScpXHJcbiAgICAvL3NhZ2Hsl5DshJzripQgYXN5bmMgYXdhaXQg7JWI7JOw6rOgIOyTuCDsiJgg7J6I7J2MXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgY29uc29sZS5sb2coJ+yZgOy5mOyCrOqwgCcpXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFwiVVNFUl9MT0dJTl9SRVFVRVNUXCIsbG9naW4pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICBjb25zb2xlLmxvZygn7Jyg7KCA7IKs6rCAJylcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKVxyXG4gICAgXSlcclxufSIsImltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge2NvbXBvc2UsIGNyZWF0ZVN0b3JlICwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgY3JlYXRlU2FnYSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYS9pbmRleCdcclxuLy8gY29uc3QgY29uZmlndXJlU3RvcmU9KCk9PntcclxuLy8gLy9yZWR1eOuKlCDstIjquLDqsJLsnYAgcmR1Y2Vy7JeQIOyeiOydjC5cclxuXHJcbi8vICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpXHJcbi8vIH1cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZT0oe2Rpc3BhdGNoLGdldFN0YXRlfSk9PihuZXh0KT0+KGFjdGlvbik9PntcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbikvL2FjdGlvbuqwkuydgCBTdG9yZeyDneyEse2VoCDrlYwgY3JlYXRlU3RvcmUg7ZWo7IiY7J2YIOuRkOuyiOynuCDsnbjsnqPqsJLsnbggZW5oYW5jZXLqsJJcclxufVxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpPT57XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZT0gY3JlYXRlU2FnYSgpXHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcz1bc2FnYU1pZGRsZXdhcmVdXHJcbi8v6rCc67Cc66qo65Oc7JmAIOuwsO2PrOuqqOuTnOulvCDri6TrpbTqsowg7ZWY6rKg64uk64qUIOqyg1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJ1xyXG4gICAgP2NvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDpjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBTdG9yZT1jcmVhdGVTdG9yZShyZWR1Y2VyLGVuaGFuY2VyKVxyXG4gICAgU3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXHJcbiAgICAvLz09PWNyZWF0ZUNvbnRleHQocmVkdWNlcikgXHJcbiAgICAvLy09PT1jcmVhdGVDb250ZXh0KOyDge2DnOy0iOq4sOqwkilcclxuICAgIC8vcmVkdWNlciDslYjsl5Ag7LSI6riw6rCS7J2EIOqwgOyngOqzoCDsnojsnYxcclxuICAgIHJldHVybiBTdG9yZVxyXG59XHJcbi8vd3JhcHBlcuydmCDrkZDrsojsp7gg7J247J6j6rCS7J2AIOyYteyFmOqwkuyehFxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSx7XHJcbiAgICBkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCdcclxufSlcclxuLy9jb25maWd1cmVTdG9yZVxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyXHJcblxyXG4vL3dyYXBwZXI6cHJvdmlkZXIg7IOd65617ZWgIOyImCDsnojqsowg7ZW07KO864qUIOyXre2VoOydhCDtlZzri6QuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9