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
  var result;
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function testAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(action); // call()
          // axios.post('http://localhost:3000/api/login',action.data)

          _context.next = 3;
          return call((axios__WEBPACK_IMPORTED_MODULE_2___default().post), 'http://localhost:3000/api/login', action.data);

        case 3:
          result = _context.sent;
          //call (함수,url,data)
          console.log(result);
          console.log('훔쳐오기!'); //saga에서는 async await 안쓰고 쓸 수 있음

        case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZXN0QWN0aW9uIiwidGVzdCIsInJvb3RTYWdhIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNhbGwiLCJheGlvcyIsImRhdGEiLCJyZXN1bHQiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VKQW9CVUEsVTt3SkFjQUMsSTt3SkFTZUMsUTs7QUEzQ3pCO0NBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVVGLFVBQVYsQ0FBcUJHLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosRUFESixDQUVJO0FBQ0E7O0FBSEo7QUFJbUIsaUJBQU1HLElBQUksQ0FBQ0MsbURBQUQsRUFBWSxpQ0FBWixFQUE4Q0osTUFBTSxDQUFDSyxJQUFyRCxDQUFWOztBQUpuQjtBQUlVQyxnQkFKVjtBQUtJO0FBQ0FMLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBWjtBQUNBTCxpQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQVBKLENBUUk7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY0EsU0FBVUosSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lHLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBREo7QUFFSSxpQkFBTUssOERBQVUsQ0FBQyxvQkFBRCxFQUFzQlYsVUFBdEIsQ0FBaEI7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2UsU0FBVUUsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBRFc7QUFFWCxpQkFBTU0sdURBQUcsQ0FBQyxDQUNOQyx3REFBSSxDQUFDWCxJQUFELENBREUsQ0FBRCxDQUFUOztBQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FPZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMxNGI1MzYwOTQxMmQ1ZGUxODIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCwgdGFrZSwgZm9yayx0YWtlTGF0ZXN0fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5cclxuLy/sgqzsnbTrk5wg7J207Y6Z7Yq4XHJcbi8vYWxsIGNhbGwgZm9yayB0YWtlIHRha2VFdmVyeSB0YWtlTGF0ZXN0IHB1dCB0aHJvdHRsZVxyXG5cclxuXHJcbi8vdGVzdEFjdGlvbuyXre2VoDog7ZiE7J6sIOyDge2DnOulvCDssrTtgaztlZjqsbDrgpgg7JqU7LKt7J2EIOuztOuCtOqxsOuCmCDspJHqsITsl5DshJwg7ZWgIOyImCDsnojripQg6rKD65OkXHJcbi8v67mE64+Z6riw66GcIGRhdGHrpbwg7KO86rOgIOuwm+qxsOuCmCDtlZjripQg6rKD7J6ELlxyXG4vL+uhnOq3uOyduCDshLHqs7Xqs7wg7Iuk7Yyo66W8IOuvuOuTpOybqOyWtOqwgCDssrTtgazrpbwg7ZW07KO864qUIOqyg+yehFxyXG5cclxuXHJcbi8qKmZldGNo64KYIGF4dGlvc+uhnCDsmpTssq3snYQg64Kg66as6rOgLFxyXG4gKiBiYWNrZW5kIHNlcnZlcuuKlCDqsrDqs7zqsJLsnYQg67Cb7J2AIOuLpOydjCwg6rKw6rO86rCS7JeQIOuUsOuluCBhY3Rpb27qsJLsnYQg64K067O064K464ukLlxyXG4gKiBcclxuICogXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24qIHRlc3RBY3Rpb24oYWN0aW9uKXtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgIC8vIGNhbGwoKVxyXG4gICAgLy8gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicsYWN0aW9uLmRhdGEpXHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGF4aW9zLnBvc3QsJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLGFjdGlvbi5kYXRhKVxyXG4gICAgLy9jYWxsICjtlajsiJgsdXJsLGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICBjb25zb2xlLmxvZygn7ZuU7LOQ7Jik6riwIScpXHJcbiAgICAvL3NhZ2Hsl5DshJzripQgYXN5bmMgYXdhaXQg7JWI7JOw6rOgIOyTuCDsiJgg7J6I7J2MXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiB0ZXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZygn7YWM7Iqk7Yq4JylcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ1VTRVJfTE9HSU5fUkVRVUVTVCcsdGVzdEFjdGlvbilcclxuICAgIC8vVVNFUl9MT0dJTl9SRVFVRVNU6rCAIGFjdGlvbuqwkuycvOuhnCDsmKTrqbQgdGVzdEFjdGlvbuydhCDsi6Ttlonsi5ztgqjri6TripQg6rKD7J6EXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgY29uc29sZS5sb2coJ+ujqO2KuOyCrOqwgCcpXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsodGVzdClcclxuICAgIF0pLy9yZWR1eCBzYWdh7JeQIOyeiOydjFxyXG59XHJcblxyXG4vL3Jvb3RzYWdh64qUIGRpc3BhdGNo6rCAIHJlZHVjZXLroZwg6rCA6riwIOyghOyXkCDsi6TtlonrkJjripQg6rKD7J6ELiJdLCJzb3VyY2VSb290IjoiIn0=