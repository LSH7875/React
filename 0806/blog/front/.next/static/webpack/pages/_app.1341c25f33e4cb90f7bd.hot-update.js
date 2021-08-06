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

          if (!(data.result == "OK")) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: 'USER_LOGIN_SUCCESS'
          });

        case 9:
          _context.next = 12;
          break;

        case 11:
          (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: 'USER_LOGIN_SUCCESS'
          });

        case 12:
          console.log('훔쳐오기!'); //saga에서는 async await 안쓰고 쓸 수 있음

        case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZXN0QWN0aW9uIiwidGVzdCIsInJvb3RTYWdhIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNhbGwiLCJheGlvcyIsImRhdGEiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwidGFrZUxhdGVzdCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1SkFvQlVBLFU7d0pBc0JBQyxJO3dKQVNlQyxROztBQW5EekI7Q0FLQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBVUYsVUFBVixDQUFxQkcsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixFQURKLENBRUk7QUFDQTs7QUFISjtBQUltQixpQkFBTUcsd0RBQUksQ0FBQ0MsbURBQUQsRUFBWSxpQ0FBWixFQUE4Q0osTUFBTSxDQUFDSyxJQUFyRCxDQUFWOztBQUpuQjtBQUlVQyxnQkFKVjtBQUtJO0FBQ0FMLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBWixFQU5KLENBUUk7O0FBQ01ELGNBVFYsR0FTaUJDLE1BQU0sQ0FBQ0QsSUFUeEI7O0FBQUEsZ0JBVU9BLElBQUksQ0FBQ0MsTUFBTCxJQUFjLElBVnJCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBV08saUJBQU1DLHVEQUFHLENBQUM7QUFBQ0MsZ0JBQUksRUFBQztBQUFOLFdBQUQsQ0FBVDs7QUFYUDtBQUFBO0FBQUE7O0FBQUE7QUFhUUQsaUVBQUcsQ0FBQztBQUFDQyxnQkFBSSxFQUFDO0FBQU4sV0FBRCxDQUFIOztBQWJSO0FBZUlQLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBZkosQ0FnQkk7O0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCQSxTQUFVSixJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFESjtBQUVJLGlCQUFNTyw4REFBVSxDQUFDLG9CQUFELEVBQXNCWixVQUF0QixDQUFoQjs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZSxTQUFVRSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFEVztBQUVYLGlCQUFNUSx1REFBRyxDQUFDLENBQ05DLHdEQUFJLENBQUNiLElBQUQsQ0FERSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQU9mIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTM0MWMyNWYzM2U0Y2I5MGY3YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWxsLCB0YWtlLCBmb3JrLHRha2VMYXRlc3QsY2FsbCwgcHV0fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5cclxuLy/sgqzsnbTrk5wg7J207Y6Z7Yq4XHJcbi8vYWxsIGNhbGwgZm9yayB0YWtlIHRha2VFdmVyeSB0YWtlTGF0ZXN0IHB1dCB0aHJvdHRsZVxyXG5cclxuXHJcbi8vdGVzdEFjdGlvbuyXre2VoDog7ZiE7J6sIOyDge2DnOulvCDssrTtgaztlZjqsbDrgpgg7JqU7LKt7J2EIOuztOuCtOqxsOuCmCDspJHqsITsl5DshJwg7ZWgIOyImCDsnojripQg6rKD65OkXHJcbi8v67mE64+Z6riw66GcIGRhdGHrpbwg7KO86rOgIOuwm+qxsOuCmCDtlZjripQg6rKD7J6ELlxyXG4vL+uhnOq3uOyduCDshLHqs7Xqs7wg7Iuk7Yyo66W8IOuvuOuTpOybqOyWtOqwgCDssrTtgazrpbwg7ZW07KO864qUIOqyg+yehFxyXG5cclxuXHJcbi8qKmZldGNo64KYIGF4dGlvc+uhnCDsmpTssq3snYQg64Kg66as6rOgLFxyXG4gKiBiYWNrZW5kIHNlcnZlcuuKlCDqsrDqs7zqsJLsnYQg67Cb7J2AIOuLpOydjCwg6rKw6rO86rCS7JeQIOuUsOuluCBhY3Rpb27qsJLsnYQg64K067O064K464ukLlxyXG4gKiBcclxuICogXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24qIHRlc3RBY3Rpb24oYWN0aW9uKXtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgIC8vIGNhbGwoKVxyXG4gICAgLy8gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicsYWN0aW9uLmRhdGEpXHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGF4aW9zLnBvc3QsJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLGFjdGlvbi5kYXRhKVxyXG4gICAgLy9jYWxsICjtlajsiJgsdXJsLGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgLy/shLHqs7XsoIHsnbTrnbzqs6Ag7IOd6rCB7ZWY6rOgIOyekeyEse2VmOq4sFxyXG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgaWYoZGF0YS5yZXN1bHQgPT1cIk9LXCIpe1xyXG4gICAgICAgeWllbGQgcHV0KHt0eXBlOidVU0VSX0xPR0lOX1NVQ0NFU1MnfSlcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBwdXQoe3R5cGU6J1VTRVJfTE9HSU5fU1VDQ0VTUyd9KVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ+2blOyzkOyYpOq4sCEnKVxyXG4gICAgLy9zYWdh7JeQ7ISc64qUIGFzeW5jIGF3YWl0IOyViOyTsOqzoCDsk7gg7IiYIOyeiOydjFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogdGVzdCgpe1xyXG4gICAgY29uc29sZS5sb2coJ+2FjOyKpO2KuCcpXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdVU0VSX0xPR0lOX1JFUVVFU1QnLHRlc3RBY3Rpb24pXHJcbiAgICAvL1VTRVJfTE9HSU5fUkVRVUVTVOqwgCBhY3Rpb27qsJLsnLzroZwg7Jik66m0IHRlc3RBY3Rpb27snYQg7Iuk7ZaJ7Iuc7YKo64uk64qUIOqyg+yehFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIGNvbnNvbGUubG9nKCfro6jtirjsgqzqsIAnKVxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHRlc3QpXHJcbiAgICBdKS8vcmVkdXggc2FnYeyXkCDsnojsnYxcclxufVxyXG5cclxuLy9yb290c2FnYeuKlCBkaXNwYXRjaOqwgCByZWR1Y2Vy66GcIOqwgOq4sCDsoITsl5Ag7Iuk7ZaJ65CY64qUIOqyg+yehC4iXSwic291cmNlUm9vdCI6IiJ9