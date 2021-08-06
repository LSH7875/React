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
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function testAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(action);
          call(); // axios.post('http://localhost:3000/api/login',action.data)

          _context.next = 4;
          return call((axios__WEBPACK_IMPORTED_MODULE_2___default().post), 'http://localhost:3000/api/login', action.data);

        case 4:
          console.log('훔쳐오기!'); //saga에서는 async await 안쓰고 쓸 수 있음

        case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZXN0QWN0aW9uIiwidGVzdCIsInJvb3RTYWdhIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNhbGwiLCJheGlvcyIsImRhdGEiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VKQW9CVUEsVTt3SkFZQUMsSTt3SkFTZUMsUTs7QUF6Q3pCO0NBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVVGLFVBQVYsQ0FBcUJHLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FHLGNBQUksR0FGUixDQUdJOztBQUhKO0FBSUksaUJBQU1BLElBQUksQ0FBQ0MsbURBQUQsRUFBWSxpQ0FBWixFQUE4Q0osTUFBTSxDQUFDSyxJQUFyRCxDQUFWOztBQUpKO0FBS0lKLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBTEosQ0FNSTs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZQSxTQUFVSixJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFESjtBQUVJLGlCQUFNSSw4REFBVSxDQUFDLG9CQUFELEVBQXNCVCxVQUF0QixDQUFoQjs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZSxTQUFVRSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFEVztBQUVYLGlCQUFNSyx1REFBRyxDQUFDLENBQ05DLHdEQUFJLENBQUNWLElBQUQsQ0FERSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQU9mIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDBiY2U4N2EyYmU4Y2M1OTIzZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWxsLCB0YWtlLCBmb3JrLHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcblxyXG4vL+yCrOydtOuTnCDsnbTtjpntirhcclxuLy9hbGwgY2FsbCBmb3JrIHRha2UgdGFrZUV2ZXJ5IHRha2VMYXRlc3QgcHV0IHRocm90dGxlXHJcblxyXG5cclxuLy90ZXN0QWN0aW9u7Jet7ZWgOiDtmITsnqwg7IOB7YOc66W8IOyytO2BrO2VmOqxsOuCmCDsmpTssq3snYQg67O064K06rGw64KYIOykkeqwhOyXkOyEnCDtlaAg7IiYIOyeiOuKlCDqsoPrk6RcclxuLy/ruYTrj5nquLDroZwgZGF0YeulvCDso7zqs6Ag67Cb6rGw64KYIO2VmOuKlCDqsoPsnoQuXHJcbi8v66Gc6re47J24IOyEseqzteqzvCDsi6TtjKjrpbwg66+465Ok7Juo7Ja06rCAIOyytO2BrOulvCDtlbTso7zripQg6rKD7J6EXHJcblxyXG5cclxuLyoqZmV0Y2jrgpggYXh0aW9z66GcIOyalOyyreydhCDrgqDrpqzqs6AsXHJcbiAqIGJhY2tlbmQgc2VydmVy64qUIOqysOqzvOqwkuydhCDrsJvsnYAg64uk7J2MLCDqsrDqs7zqsJLsl5Ag65Sw66W4IGFjdGlvbuqwkuydhCDrgrTrs7Trgrjri6QuXHJcbiAqIFxyXG4gKiBcclxuICovXHJcblxyXG5mdW5jdGlvbiogdGVzdEFjdGlvbihhY3Rpb24pe1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgY2FsbCgpXHJcbiAgICAvLyBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyxhY3Rpb24uZGF0YSlcclxuICAgIHlpZWxkIGNhbGwoYXhpb3MucG9zdCwnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicsYWN0aW9uLmRhdGEpXHJcbiAgICBjb25zb2xlLmxvZygn7ZuU7LOQ7Jik6riwIScpXHJcbiAgICAvL3NhZ2Hsl5DshJzripQgYXN5bmMgYXdhaXQg7JWI7JOw6rOgIOyTuCDsiJgg7J6I7J2MXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiB0ZXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZygn7YWM7Iqk7Yq4JylcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ1VTRVJfTE9HSU5fUkVRVUVTVCcsdGVzdEFjdGlvbilcclxuICAgIC8vVVNFUl9MT0dJTl9SRVFVRVNU6rCAIGFjdGlvbuqwkuycvOuhnCDsmKTrqbQgdGVzdEFjdGlvbuydhCDsi6Ttlonsi5ztgqjri6TripQg6rKD7J6EXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgY29uc29sZS5sb2coJ+ujqO2KuOyCrOqwgCcpXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsodGVzdClcclxuICAgIF0pLy9yZWR1eCBzYWdh7JeQIOyeiOydjFxyXG59XHJcblxyXG4vL3Jvb3RzYWdh64qUIGRpc3BhdGNo6rCAIHJlZHVjZXLroZwg6rCA6riwIOyghOyXkCDsi6TtlonrkJjripQg6rKD7J6ELiJdLCJzb3VyY2VSb290IjoiIn0=