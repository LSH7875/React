self["webpackHotUpdate_N_E"]("pages/user/login",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5fUkVRVUVTVCIsImRhdGEiLCJ0eXBlIiwiVXNlckxvZ2luX1NVQ0NFU1MiLCJVc2VyTG9naW5fRVJST1IiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBQztBQUNmQyxVQUFRLEVBQUMsS0FETTtBQUVmQyxTQUFPLEVBQUM7QUFGTyxDQUFuQjtBQU9BLElBQU1DLGtCQUFrQixHQUFDLG9CQUF6QjtBQUNBLElBQU1DLGtCQUFrQixHQUFDLG9CQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFDLGtCQUF2QjtBQUNBLElBQU1DLFdBQVcsR0FBQyxhQUFsQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLGlCQUFpQixHQUFDLFNBQWxCQSxpQkFBa0IsQ0FBQUMsSUFBSSxFQUFFO0FBQ2pDLFNBQU07QUFDRkMsUUFBSSxFQUFDTixrQkFESDtBQUNzQkssUUFBSSxFQUFKQTtBQUR0QixHQUFOO0FBR0gsQ0FKTTtLQUFNRCxpQjtBQU1OLElBQU1HLGlCQUFpQixHQUFFLFNBQW5CQSxpQkFBbUIsR0FBSTtBQUNoQyxTQUFNO0FBQ0ZELFFBQUksRUFBQ0w7QUFESCxHQUFOO0FBR0gsQ0FKTTtNQUFNTSxpQjtBQU1OLElBQU1DLGVBQWUsR0FBQyxTQUFoQkEsZUFBZ0IsR0FBSTtBQUM3QixTQUFPO0FBQ0hGLFFBQUksRUFBQ0o7QUFERixHQUFQO0FBR0gsQ0FKTTtNQUFNTSxlO0FBS2JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7O0FBRUEsSUFBTUMsT0FBTyxHQUFFLFNBQVRBLE9BQVMsR0FBNkI7QUFBQSxNQUE1QkMsS0FBNEIsdUVBQXRCZixZQUFzQjtBQUFBLE1BQVRnQixNQUFTOztBQUV4QyxVQUFPQSxNQUFNLENBQUNQLElBQWQ7QUFDSyxTQUFLTixrQkFBTDtBQUNHLDZDQUNPWSxLQURQO0FBRVFkLGdCQUFRLEVBQUM7QUFGakI7O0FBS0osU0FBS0csa0JBQUw7QUFDSSw2Q0FDT1csS0FEUDtBQUVRYixlQUFPLEVBQUMsSUFGaEI7QUFHUUQsZ0JBQVEsRUFBQztBQUhqQjs7QUFLSixTQUFLSSxnQkFBTDtBQUNJLDZDQUNPVSxLQURQO0FBRVFiLGVBQU8sRUFBQyxJQUZoQjtBQUdRRCxnQkFBUSxFQUFDO0FBSGpCOztBQUtKLFNBQUtLLFdBQUw7QUFDSSw2Q0FDT1MsS0FEUDtBQUVRYixlQUFPLEVBQUM7QUFGaEI7O0FBSUo7QUFDSSxhQUFPYSxLQUFQO0FBekJSO0FBMkJILENBN0JEOztBQStCQSwrREFBZUQsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2xvZ2luLjg0ZTE3NDZiY2QwMTgwODI3MjY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbG9hZGRpbmc6ZmFsc2UsXHJcbiAgICBJc0xvZ2luOmZhbHNlXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUPVwiVVNFUl9MT0dJTl9SRVFVRVNUXCJcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTPVwiVVNFUl9MT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUj1cIlVTRVJfTE9HSU5fRVJST1JcIlxyXG5jb25zdCBVU0VSX0xPR09VVD1cIlVTRVJfTE9HT1VUXCJcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb249KCk9PntcclxuLy8gICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpPT57XHJcbi8vICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX1JFUVVFU1QoKSlcclxuLy8gICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgIC8vZmV0Y2gg7ISx6rO17KCB7J24IOu2gOu2hFxyXG4vLyAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoIChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW5cIix7XHJcbi8vICAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoey4uLmRhdGF9KVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuLy8gICAgICAgICAgICAgcmVzdWx0LnJlc3VsdCA9PT0gJ09LJ1xyXG4vLyAgICAgICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpbl9TVUNDRVNTKHJlc3VsdCkpXHJcbi8vICAgICAgICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbi8vICAgICAgICAgfSBjYXRjaChlKXtcclxuLy8gICAgICAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1JFUVVFU1Q9ZGF0YT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9SRVFVRVNULGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9TVUNDRVNTID0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9TVUNDRVNTXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fRVJST1I9KCk9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOX0VSUk9SXHJcbiAgICB9XHJcbn1cclxuY29uc29sZS5sb2coJ2luZGV4LXJlZHVjZXInKTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGRpbmc6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIElzTG9naW46dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZGluZzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNMb2dpbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRkaW5nOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNMb2dpbjpmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==