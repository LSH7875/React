self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./saga/index.js":
/*!***********************!*\
  !*** ./saga/index.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _marked = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(testAction),
    _marked2 = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(test),
    _marked3 = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(rootSaga);


 //사이드 이펙트
//all call fork take takeEvery takeLatest put throttle
//testAction역할: 현재 상태를 체크하거나 요청을 보내거나 중간에서 할 수 있는 것들
//비동기로 data를 주고 받거나 하는 것임.
//로그인 성공과 실패를 미들웨어가 체크를 해주는 것임

/**fetch나 axtios로 요청을 날리고,
 * backend server는 결과값을 받은 다음, 결과값에 따른 action값을 내보낸다.
 * 
 * 
 */

function testAction(action) {
  var result, data;
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function testAction$(_context) {
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

          if (data.result == "OK") {
            (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
              type: 'USER_LOGIN_SUCCESS'
            });
          } else {
            (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
              type: 'USER_LOGIN_SUCCESS'
            });
          }

          console.log('훔쳐오기!'); //saga에서는 async await 안쓰고 쓸 수 있음

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function test() {
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function test$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('테스트');
          _context2.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)('USER_LOGIN_REQUEST', testAction);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function rootSaga() {
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log('루트사가');
          _context3.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(test)]);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
} //rootsaga는 dispatch가 reducer로 가기 전에 실행되는 것임.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZXN0QWN0aW9uIiwidGVzdCIsInJvb3RTYWdhIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNhbGwiLCJheGlvcyIsImRhdGEiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwidGFrZUxhdGVzdCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1SkFvQlVBLFU7d0pBc0JBQyxJO3dKQVNlQyxROztBQW5EekI7Q0FLQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBVUYsVUFBVixDQUFxQkcsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixFQURKLENBRUk7QUFDQTs7QUFISjtBQUltQixpQkFBTUcsd0RBQUksQ0FBQ0MsbURBQUQsRUFBWSxpQ0FBWixFQUE4Q0osTUFBTSxDQUFDSyxJQUFyRCxDQUFWOztBQUpuQjtBQUlVQyxnQkFKVjtBQUtJO0FBQ0FMLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBWixFQU5KLENBUUk7O0FBQ01ELGNBVFYsR0FTaUJDLE1BQU0sQ0FBQ0QsSUFUeEI7O0FBVUksY0FBR0EsSUFBSSxDQUFDQyxNQUFMLElBQWMsSUFBakIsRUFBc0I7QUFDbEJDLG1FQUFHLENBQUM7QUFBQ0Msa0JBQUksRUFBQztBQUFOLGFBQUQsQ0FBSDtBQUNILFdBRkQsTUFFTTtBQUNGRCxtRUFBRyxDQUFDO0FBQUNDLGtCQUFJLEVBQUM7QUFBTixhQUFELENBQUg7QUFDSDs7QUFDRFAsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFmSixDQWdCSTs7QUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0JBLFNBQVVKLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJRyxpQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQURKO0FBRUksaUJBQU1PLDhEQUFVLENBQUMsb0JBQUQsRUFBc0JaLFVBQXRCLENBQWhCOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNlLFNBQVVFLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYRSxpQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQURXO0FBRVgsaUJBQU1RLHVEQUFHLENBQUMsQ0FDTkMsd0RBQUksQ0FBQ2IsSUFBRCxDQURFLENBQUQsQ0FBVDs7QUFGVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBT2YiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMTMxMzEzYjVmNjkyMWZlZDU1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsIHRha2UsIGZvcmssdGFrZUxhdGVzdCxjYWxsLCBwdXR9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcblxyXG4vL+yCrOydtOuTnCDsnbTtjpntirhcclxuLy9hbGwgY2FsbCBmb3JrIHRha2UgdGFrZUV2ZXJ5IHRha2VMYXRlc3QgcHV0IHRocm90dGxlXHJcblxyXG5cclxuLy90ZXN0QWN0aW9u7Jet7ZWgOiDtmITsnqwg7IOB7YOc66W8IOyytO2BrO2VmOqxsOuCmCDsmpTssq3snYQg67O064K06rGw64KYIOykkeqwhOyXkOyEnCDtlaAg7IiYIOyeiOuKlCDqsoPrk6RcclxuLy/ruYTrj5nquLDroZwgZGF0YeulvCDso7zqs6Ag67Cb6rGw64KYIO2VmOuKlCDqsoPsnoQuXHJcbi8v66Gc6re47J24IOyEseqzteqzvCDsi6TtjKjrpbwg66+465Ok7Juo7Ja06rCAIOyytO2BrOulvCDtlbTso7zripQg6rKD7J6EXHJcblxyXG5cclxuLyoqZmV0Y2jrgpggYXh0aW9z66GcIOyalOyyreydhCDrgqDrpqzqs6AsXHJcbiAqIGJhY2tlbmQgc2VydmVy64qUIOqysOqzvOqwkuydhCDrsJvsnYAg64uk7J2MLCDqsrDqs7zqsJLsl5Ag65Sw66W4IGFjdGlvbuqwkuydhCDrgrTrs7Trgrjri6QuXHJcbiAqIFxyXG4gKiBcclxuICovXHJcblxyXG5mdW5jdGlvbiogdGVzdEFjdGlvbihhY3Rpb24pe1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgLy8gY2FsbCgpXHJcbiAgICAvLyBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyxhY3Rpb24uZGF0YSlcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYXhpb3MucG9zdCwnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicsYWN0aW9uLmRhdGEpXHJcbiAgICAvL2NhbGwgKO2VqOyImCx1cmwsZGF0YSlcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAvL+yEseqzteyggeydtOudvOqzoCDsg53qsIHtlZjqs6Ag7J6R7ISx7ZWY6riwXHJcbiAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICBpZihkYXRhLnJlc3VsdCA9PVwiT0tcIil7XHJcbiAgICAgICAgcHV0KHt0eXBlOidVU0VSX0xPR0lOX1NVQ0NFU1MnfSlcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBwdXQoe3R5cGU6J1VTRVJfTE9HSU5fU1VDQ0VTUyd9KVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ+2blOyzkOyYpOq4sCEnKVxyXG4gICAgLy9zYWdh7JeQ7ISc64qUIGFzeW5jIGF3YWl0IOyViOyTsOqzoCDsk7gg7IiYIOyeiOydjFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogdGVzdCgpe1xyXG4gICAgY29uc29sZS5sb2coJ+2FjOyKpO2KuCcpXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdVU0VSX0xPR0lOX1JFUVVFU1QnLHRlc3RBY3Rpb24pXHJcbiAgICAvL1VTRVJfTE9HSU5fUkVRVUVTVOqwgCBhY3Rpb27qsJLsnLzroZwg7Jik66m0IHRlc3RBY3Rpb27snYQg7Iuk7ZaJ7Iuc7YKo64uk64qUIOqyg+yehFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIGNvbnNvbGUubG9nKCfro6jtirjsgqzqsIAnKVxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHRlc3QpXHJcbiAgICBdKS8vcmVkdXggc2FnYeyXkCDsnojsnYxcclxufVxyXG5cclxuLy9yb290c2FnYeuKlCBkaXNwYXRjaOqwgCByZWR1Y2Vy66GcIOqwgOq4sCDsoITsl5Ag7Iuk7ZaJ65CY64qUIOqyg+yehC4iXSwic291cmNlUm9vdCI6IiJ9