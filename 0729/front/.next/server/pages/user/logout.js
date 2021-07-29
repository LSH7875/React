(function() {
var exports = {};
exports.id = "pages/user/logout";
exports.ids = ["pages/user/logout"];
exports.modules = {

/***/ "./pages/user/logout.jsx":
/*!*******************************!*\
  !*** ./pages/user/logout.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/user.js */ "./reducers/user.js");







const logout = () => {
  console.log('logout');
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_reducers_user_js__WEBPACK_IMPORTED_MODULE_4__.UserLogoutAction)());
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "logout..."
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (logout);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/user/logout.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL3VzZXIvbG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJsb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIlVzZXJMb2dvdXRBY3Rpb24iLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwiaW5pdGlhbFN0YXRlIiwiSXNMb2dpbiIsIlVTRVJfTE9HSU4iLCJVU0VSX0xPR09VVCIsInR5cGUiLCJVc2VyTG9naW5BY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBSTtBQUNmQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsUUFBTUMsUUFBUSxHQUFFQyx3REFBVyxFQUEzQjtBQUNBQyxrREFBUyxDQUFDLE1BQUk7QUFDVkYsWUFBUSxDQUFDRyxtRUFBZ0IsRUFBakIsQ0FBUjtBQUNBQyxjQUFVLENBQUMsTUFBSTtBQUNYQyw2REFBQSxDQUFZLEdBQVo7QUFDSCxLQUZTLEVBRVIsSUFGUSxDQUFWO0FBR0gsR0FMUSxFQUtQLEVBTE8sQ0FBVDtBQU9BLHNCQUNJO0FBQUE7QUFBQSxtQkFESjtBQUtILENBZkQ7O0FBaUJBLCtEQUFlUixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkEsTUFBTVMsWUFBWSxHQUFDO0FBQ2ZDLFNBQU8sRUFBQztBQURPLENBQW5CO0FBR0EsTUFBTUMsVUFBVSxHQUFDLFlBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFDLGFBQWxCO0FBQ08sTUFBTU4sZ0JBQWdCLEdBQUMsTUFBSTtBQUM5QixTQUFPO0FBQUNPLFFBQUksRUFBQ0Q7QUFBTixHQUFQO0FBQ0gsQ0FGTTtBQUdBLE1BQU1FLGVBQWUsR0FBQyxNQUFJO0FBQzdCLFNBQU07QUFDRkQsUUFBSSxFQUFDRjtBQURILEdBQU47QUFHSCxDQUpNOztBQU1QLE1BQU1JLE9BQU8sR0FBRSxDQUFDQyxLQUFLLEdBQUNQLFlBQVAsRUFBb0JRLE1BQXBCLEtBQTZCO0FBQ3hDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNLLFNBQUtGLFVBQUw7QUFDR1YsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLDZDQUNPYyxLQURQO0FBRVFOLGVBQU8sRUFBQztBQUZoQjs7QUFLSixTQUFLRSxXQUFMO0FBQ0lYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSw2Q0FDT2MsS0FEUDtBQUVRTixlQUFPLEVBQUM7QUFGaEI7O0FBS0o7QUFDSSxhQUFPTSxLQUFQO0FBaEJSO0FBa0JILENBbkJEOztBQXFCQSwrREFBZUQsT0FBZixFOzs7Ozs7Ozs7OztBQ25DQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy91c2VyL2xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge3VzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNofWZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge1VzZXJMb2dvdXRBY3Rpb259IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXIuanMnXHJcblxyXG5jb25zdCBsb2dvdXQgPSAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ291dCcpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9dXNlRGlzcGF0Y2goKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goVXNlckxvZ291dEFjdGlvbigpKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH0sMTAwMClcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgbG9nb3V0Li4uXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ291dCIsImNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBJc0xvZ2luOmZhbHNlXHJcbn1cclxuY29uc3QgVVNFUl9MT0dJTj1cIlVTRVJfTE9HSU5cIlxyXG5jb25zdCBVU0VSX0xPR09VVD1cIlVTRVJfTE9HT1VUXCJcclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb249KCk9PntcclxuICAgIHJldHVybiB7dHlwZTpVU0VSX0xPR09VVH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgY2FzZSBVU0VSX0xPR0lOOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn66Gc6re47J24IOyLoO2YuCDsmLQnKVxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBJc0xvZ2luOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+uhnOq3uOyVhOybgyDrk6TslrTsmLQnKVxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBJc0xvZ2luOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9