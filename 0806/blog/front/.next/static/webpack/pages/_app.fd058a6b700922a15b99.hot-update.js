self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./saga/user.js":
/*!**********************!*\
  !*** ./saga/user.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ userSaga; }
/* harmony export */ });
/* harmony import */ var C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _marked = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(login),
    _marked2 = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchLogin),
    _marked3 = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(userSaga);




function login(action) {
  var result, data;
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(action); // call()
          // axios.post('http://localhost:3000/api/login',action.data)

          _context.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)((axios__WEBPACK_IMPORTED_MODULE_2___default().post), 'http://localhost:3000/api/login', action.data);

        case 3:
          result = _context.sent;
          //call (함수,url,data)
          console.log(result); //성공적이라고 생각하고 작성하기

          data = result.data;

          if (!(data.result == "OK")) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: 'USER_LOGIN_SUCCESS'
          });

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: 'USER_LOGIN_FAIL'
          });

        case 13:
          console.log('훔쳐오기!'); //saga에서는 async await 안쓰고 쓸 수 있음

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function watchLogin() {
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('와치사가');
          _context2.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)("USER_LOGIN_REQUEST", login);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function userSaga() {
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function userSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log('유저사가');
          _context3.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLogin)]);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS91c2VyLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwid2F0Y2hMb2dpbiIsInVzZXJTYWdhIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNhbGwiLCJheGlvcyIsImRhdGEiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwidGFrZUxhdGVzdCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1SkFHVUEsSzt3SkFvQkFDLFU7d0pBSWVDLFE7O0FBM0J6QjtBQUNBOztBQUVBLFNBQVVGLEtBQVYsQ0FBZ0JHLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosRUFESixDQUVJO0FBQ0E7O0FBSEo7QUFJbUIsaUJBQU1HLHdEQUFJLENBQUNDLG1EQUFELEVBQVksaUNBQVosRUFBOENKLE1BQU0sQ0FBQ0ssSUFBckQsQ0FBVjs7QUFKbkI7QUFJVUMsZ0JBSlY7QUFLSTtBQUNBTCxpQkFBTyxDQUFDQyxHQUFSLENBQVlJLE1BQVosRUFOSixDQVFJOztBQUNNRCxjQVRWLEdBU2lCQyxNQUFNLENBQUNELElBVHhCOztBQUFBLGdCQVVPQSxJQUFJLENBQUNDLE1BQUwsSUFBYyxJQVZyQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVdRLGlCQUFNQyx1REFBRyxDQUFDO0FBQUNDLGdCQUFJLEVBQUM7QUFBTixXQUFELENBQVQ7O0FBWFI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFhUSxpQkFBTUQsdURBQUcsQ0FBQztBQUFDQyxnQkFBSSxFQUFDO0FBQU4sV0FBRCxDQUFUOztBQWJSO0FBZUlQLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBZkosQ0FnQkk7O0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CQSxTQUFVSixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFESjtBQUVJLGlCQUFNTyw4REFBVSxDQUFDLG9CQUFELEVBQXNCWixLQUF0QixDQUFoQjs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFEVztBQUVYLGlCQUFNUSx1REFBRyxDQUFDLENBQ05DLHdEQUFJLENBQUNiLFVBQUQsQ0FERSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZDA1OGE2YjcwMDkyMmExNWI5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCB0YWtlTGF0ZXN0LGZvcmssY2FsbCxwdXR9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pe1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgLy8gY2FsbCgpXHJcbiAgICAvLyBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyxhY3Rpb24uZGF0YSlcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYXhpb3MucG9zdCwnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicsYWN0aW9uLmRhdGEpXHJcbiAgICAvL2NhbGwgKO2VqOyImCx1cmwsZGF0YSlcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAvL+yEseqzteyggeydtOudvOqzoCDsg53qsIHtlZjqs6Ag7J6R7ISx7ZWY6riwXHJcbiAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICBpZihkYXRhLnJlc3VsdCA9PVwiT0tcIil7XHJcbiAgICAgICAgeWllbGQgcHV0KHt0eXBlOidVU0VSX0xPR0lOX1NVQ0NFU1MnfSlcclxuICAgIH0gZWxzZXtcclxuICAgICAgICB5aWVsZCBwdXQoe3R5cGU6J1VTRVJfTE9HSU5fRkFJTCd9KVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ+2blOyzkOyYpOq4sCEnKVxyXG4gICAgLy9zYWdh7JeQ7ISc64qUIGFzeW5jIGF3YWl0IOyViOyTsOqzoCDsk7gg7IiYIOyeiOydjFxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgIGNvbnNvbGUubG9nKCfsmYDsuZjsgqzqsIAnKVxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChcIlVTRVJfTE9HSU5fUkVRVUVTVFwiLGxvZ2luKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG4gICAgY29uc29sZS5sb2coJ+ycoOyggOyCrOqwgCcpXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbilcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9