self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //여기서 초기값을 선정해준다. 
//여기서 모든 값을 다 관리하는 것
//왠만하면 컴포넌트는 화면에 그리는 것에 집중하고
//값을 정리하는 것은 여기에
//string의 단점: 오타를 내도 틀린줄 모름...
//그래서 변수로 만들어서 실행한다. 그게 관리하는게 쉬울거임
//오타로 인한 오류 찾기도 쉽다. 

var reducer = (0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

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


/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLogin_REQUEST": function() { return /* binding */ UserLogin_REQUEST; },
/* harmony export */   "UserLogin_SUCCESS": function() { return /* binding */ UserLogin_SUCCESS; },
/* harmony export */   "UserLogin_ERROR": function() { return /* binding */ UserLogin_ERROR; }
/* harmony export */ });
/* harmony import */ var C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  loadding: false,
  IsLogin: false
};
var USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
var USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
var USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
var USER_LOGOUT = "USER_LOGOUT"; // export const UserLoginAction=()=>{
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

var UserLogin_REQUEST = function UserLogin_REQUEST(data) {
  return {
    type: USER_LOGIN_REQUEST,
    data: data
  };
};
_c = UserLogin_REQUEST;
var UserLogin_SUCCESS = function UserLogin_SUCCESS() {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
_c2 = UserLogin_SUCCESS;
var UserLogin_ERROR = function UserLogin_ERROR() {
  return {
    type: USER_LOGIN_ERROR
  };
};
_c3 = UserLogin_ERROR;
console.log('index-reducer');

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

var _c, _c2, _c3;

$RefreshReg$(_c, "UserLogin_REQUEST");
$RefreshReg$(_c2, "UserLogin_SUCCESS");
$RefreshReg$(_c3, "UserLogin_ERROR");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwiY2F0ZWdvcnkiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5fUkVRVUVTVCIsImRhdGEiLCJVc2VyTG9naW5fU1VDQ0VTUyIsIlVzZXJMb2dpbl9FUlJPUiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxPQUFPLEdBQUdDLHNEQUFlLENBQUM7QUFFNUJDLE9BQUssRUFBQyxpQkFBbUI7QUFBQSxRQUFsQkMsS0FBa0IsdUVBQVosRUFBWTtBQUFBLFFBQVRDLE1BQVM7O0FBQ3JCLFlBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFdBQUtDLHVEQUFMO0FBQ0ksK0NBQ09ILEtBRFAsR0FFT0MsTUFBTSxDQUFDRyxPQUZkOztBQUlKO0FBQ0ksZUFBT0osS0FBUDtBQVBSO0FBU0gsR0FaMkI7QUFhNUJLLE1BQUksRUFBSkEsMENBYjRCO0FBY2hDO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0o7QUFFSUMsVUFBUSxFQUFSQSw4Q0FBUUE7QUFsQ29CLENBQUQsQ0FBL0I7QUFzQ0EsK0RBQWVULE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQSxJQUFNVSxZQUFZLEdBQUM7QUFDZkMsVUFBUSxFQUFDLEtBRE07QUFFZkMsU0FBTyxFQUFDO0FBRk8sQ0FBbkI7QUFPQSxJQUFNQyxrQkFBa0IsR0FBQyxvQkFBekI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBQyxvQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFDQSxJQUFNQyxXQUFXLEdBQUMsYUFBbEIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQyxpQkFBaUIsR0FBQyxTQUFsQkEsaUJBQWtCLENBQUFDLElBQUksRUFBRTtBQUNqQyxTQUFNO0FBQ0ZiLFFBQUksRUFBQ1Esa0JBREg7QUFDc0JLLFFBQUksRUFBSkE7QUFEdEIsR0FBTjtBQUdILENBSk07S0FBTUQsaUI7QUFNTixJQUFNRSxpQkFBaUIsR0FBRSxTQUFuQkEsaUJBQW1CLEdBQUk7QUFDaEMsU0FBTTtBQUNGZCxRQUFJLEVBQUNTO0FBREgsR0FBTjtBQUdILENBSk07TUFBTUssaUI7QUFNTixJQUFNQyxlQUFlLEdBQUMsU0FBaEJBLGVBQWdCLEdBQUk7QUFDN0IsU0FBTztBQUNIZixRQUFJLEVBQUNVO0FBREYsR0FBUDtBQUdILENBSk07TUFBTUssZTtBQUtiQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaOztBQUVBLElBQU10QixPQUFPLEdBQUUsU0FBVEEsT0FBUyxHQUE2QjtBQUFBLE1BQTVCRyxLQUE0Qix1RUFBdEJPLFlBQXNCO0FBQUEsTUFBVE4sTUFBUzs7QUFFeEMsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ssU0FBS1Esa0JBQUw7QUFDRyw2Q0FDT1YsS0FEUDtBQUVRUSxnQkFBUSxFQUFDO0FBRmpCOztBQUtKLFNBQUtHLGtCQUFMO0FBQ0ksNkNBQ09YLEtBRFA7QUFFUVMsZUFBTyxFQUFDLElBRmhCO0FBR1FELGdCQUFRLEVBQUM7QUFIakI7O0FBS0osU0FBS0ksZ0JBQUw7QUFDSSw2Q0FDT1osS0FEUDtBQUVRUyxlQUFPLEVBQUMsSUFGaEI7QUFHUUQsZ0JBQVEsRUFBQztBQUhqQjs7QUFLSixTQUFLSyxXQUFMO0FBQ0ksNkNBQ09iLEtBRFA7QUFFUVMsZUFBTyxFQUFDO0FBRmhCOztBQUlKO0FBQ0ksYUFBT1QsS0FBUDtBQXpCUjtBQTJCSCxDQTdCRDs7QUErQkEsK0RBQWVILE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44NGUxNzQ2YmNkMDE4MDgyNzI2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIlxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbi8v7Jes6riw7IScIOy0iOq4sOqwkuydhCDshKDsoJXtlbTspIDri6QuIFxyXG4vL+yXrOq4sOyEnCDrqqjrk6Ag6rCS7J2EIOuLpCDqtIDrpqztlZjripQg6rKDXHJcbi8v7Jmg66eM7ZWY66m0IOy7tO2PrOuEjO2KuOuKlCDtmZTrqbTsl5Ag6re466as64qUIOqyg+yXkCDsp5HspJHtlZjqs6BcclxuLy/qsJLsnYQg7KCV66as7ZWY64qUIOqyg+ydgCDsl6zquLDsl5BcclxuXHJcbi8vc3RyaW5n7J2YIOuLqOygkDog7Jik7YOA66W8IOuCtOuPhCDti4DrprDspIQg66qo66aELi4uXHJcbi8v6re4656Y7IScIOuzgOyImOuhnCDrp4zrk6TslrTshJwg7Iuk7ZaJ7ZWc64ukLiDqt7jqsowg6rSA66as7ZWY64qU6rKMIOyJrOyauOqxsOyehFxyXG4vL+yYpO2DgOuhnCDsnbjtlZwg7Jik66WYIOywvuq4sOuPhCDsib3ri6QuIFxyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIFxyXG4gICAgaW5kZXg6KHN0YXRlPXt9LGFjdGlvbik9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4vLyAgICAgdXNlcihzdGF0ZT17SXNMb2dpbjpmYWxzZX0sYWN0aW9uKT0+e1xyXG4gICAgLy8gICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgVVNFUl9MT0dJTjpcclxuICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coJ+uhnOq3uOyduCDsi6DtmLgg7Ji0JylcclxuICAgIC8vICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgLy8gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICBJc0xvZ2luOnRydWVcclxuICAgIC8vICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgIC8vICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgLy8gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgSXNMb2dpbjpmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICBkZWZhdWx0OlxyXG4gICAgLy8gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIC8vICAgIH1cclxuLy8gfVxyXG5cclxuICAgIGNhdGVnb3J5LFxyXG4gICAgXHJcbiAgICB9XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgIElzTG9naW46ZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1Q9XCJVU0VSX0xPR0lOX1JFUVVFU1RcIlxyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1M9XCJVU0VSX0xPR0lOX1NVQ0NFU1NcIlxyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SPVwiVVNFUl9MT0dJTl9FUlJPUlwiXHJcbmNvbnN0IFVTRVJfTE9HT1VUPVwiVVNFUl9MT0dPVVRcIlxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbj0oKT0+e1xyXG4vLyAgICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCk9PntcclxuLy8gICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fUkVRVUVTVCgpKVxyXG4vLyAgICAgICAgIHRyeXtcclxuLy8gICAgICAgICAgICAgLy9mZXRjaCDshLHqs7XsoIHsnbgg67aA67aEXHJcbi8vICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpblwiLHtcclxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuLy8gICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7Li4uZGF0YX0pXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4vLyAgICAgICAgICAgICByZXN1bHQucmVzdWx0ID09PSAnT0snXHJcbi8vICAgICAgICAgICAgID8gZGlzcGF0Y2goVXNlckxvZ2luX1NVQ0NFU1MocmVzdWx0KSlcclxuLy8gICAgICAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5fRVJST1IoKSlcclxuLy8gICAgICAgICB9IGNhdGNoKGUpe1xyXG4vLyAgICAgICAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fRVJST1IoKSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fUkVRVUVTVD1kYXRhPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOX1JFUVVFU1QsZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1NVQ0NFU1MgPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOX1NVQ0NFU1NcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9FUlJPUj0oKT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fRVJST1JcclxuICAgIH1cclxufVxyXG5jb25zb2xlLmxvZygnaW5kZXgtcmVkdWNlcicpO1xyXG5cclxuY29uc3QgcmVkdWNlciA9KHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICBcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZGluZzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNMb2dpbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRkaW5nOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBJc0xvZ2luOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGRpbmc6ZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBJc0xvZ2luOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9