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

console.log('인덱스 리듀서');
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxJQUFNQyxPQUFPLEdBQUdDLHNEQUFlLENBQUM7QUFFNUJDLE9BQUssRUFBQyxpQkFBbUI7QUFBQSxRQUFsQkMsS0FBa0IsdUVBQVosRUFBWTtBQUFBLFFBQVRDLE1BQVM7O0FBQ3JCLFlBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFdBQUtDLHVEQUFMO0FBQ0ksK0NBQ09ILEtBRFAsR0FFT0MsTUFBTSxDQUFDRyxPQUZkOztBQUlKO0FBQ0ksZUFBT0osS0FBUDtBQVBSO0FBU0gsR0FaMkI7QUFhNUJLLE1BQUksRUFBSkEsMENBYjRCO0FBY2hDO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0o7QUFFSUMsVUFBUSxFQUFSQSw4Q0FBUUE7QUFsQ29CLENBQUQsQ0FBL0I7QUFzQ0EsK0RBQWVULE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMzJkMDk0Nzk4NmFiOTY5ZGFiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIlxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbi8v7Jes6riw7IScIOy0iOq4sOqwkuydhCDshKDsoJXtlbTspIDri6QuIFxyXG4vL+yXrOq4sOyEnCDrqqjrk6Ag6rCS7J2EIOuLpCDqtIDrpqztlZjripQg6rKDXHJcbi8v7Jmg66eM7ZWY66m0IOy7tO2PrOuEjO2KuOuKlCDtmZTrqbTsl5Ag6re466as64qUIOqyg+yXkCDsp5HspJHtlZjqs6BcclxuLy/qsJLsnYQg7KCV66as7ZWY64qUIOqyg+ydgCDsl6zquLDsl5BcclxuXHJcbi8vc3RyaW5n7J2YIOuLqOygkDog7Jik7YOA66W8IOuCtOuPhCDti4DrprDspIQg66qo66aELi4uXHJcbi8v6re4656Y7IScIOuzgOyImOuhnCDrp4zrk6TslrTshJwg7Iuk7ZaJ7ZWc64ukLiDqt7jqsowg6rSA66as7ZWY64qU6rKMIOyJrOyauOqxsOyehFxyXG4vL+yYpO2DgOuhnCDsnbjtlZwg7Jik66WYIOywvuq4sOuPhCDsib3ri6QuIFxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCfsnbjrjbHsiqQg66as65OA7IScJylcclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBcclxuICAgIGluZGV4OihzdGF0ZT17fSxhY3Rpb24pPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuLy8gICAgIHVzZXIoc3RhdGU9e0lzTG9naW46ZmFsc2V9LGFjdGlvbik9PntcclxuICAgIC8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgLy8gICAgICAgICBjYXNlIFVTRVJfTE9HSU46XHJcbiAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCfroZzqt7jsnbgg7Iug7Zi4IOyYtCcpXHJcbiAgICAvLyAgICAgICAgICAgIHJldHVybntcclxuICAgIC8vICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgSXNMb2dpbjp0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAvLyAgICAgICAgICAgIHJldHVybntcclxuICAgIC8vICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIElzTG9naW46ZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAvLyAgICB9XHJcbi8vIH1cclxuXHJcbiAgICBjYXRlZ29yeSxcclxuICAgIFxyXG4gICAgfVxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9