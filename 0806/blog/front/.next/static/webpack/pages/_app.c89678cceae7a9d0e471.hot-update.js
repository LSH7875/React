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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./saga/user.js");
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
          return call(axios.post, 'http://localhost:3000/api/login', action.data);

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
          return put({
            type: 'USER_LOGIN_SUCCESS'
          });

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.next = 13;
          return put({
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

function test() {
  return C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function test$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('테스트');
          _context2.next = 3;
          return takeLatest('USER_LOGIN_REQUEST', testAction);

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
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(_user__WEBPACK_IMPORTED_MODULE_2__.default)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZXN0QWN0aW9uIiwidGVzdCIsInJvb3RTYWdhIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNhbGwiLCJheGlvcyIsInBvc3QiLCJkYXRhIiwicmVzdWx0IiwicHV0IiwidHlwZSIsInRha2VMYXRlc3QiLCJhbGwiLCJmb3JrIiwidXNlclNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VKQW9CVUEsVTt3SkFzQkFDLEk7d0pBU2VDLFE7O0FBbkR6QjtDQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFVRixVQUFWLENBQXFCRyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLEVBREosQ0FFSTtBQUNBOztBQUhKO0FBSW1CLGlCQUFNRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBUCxFQUFZLGlDQUFaLEVBQThDTCxNQUFNLENBQUNNLElBQXJELENBQVY7O0FBSm5CO0FBSVVDLGdCQUpWO0FBS0k7QUFDQU4saUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxNQUFaLEVBTkosQ0FRSTs7QUFDTUQsY0FUVixHQVNpQkMsTUFBTSxDQUFDRCxJQVR4Qjs7QUFBQSxnQkFVT0EsSUFBSSxDQUFDQyxNQUFMLElBQWMsSUFWckI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFXUSxpQkFBTUMsR0FBRyxDQUFDO0FBQUNDLGdCQUFJLEVBQUM7QUFBTixXQUFELENBQVQ7O0FBWFI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFhUSxpQkFBTUQsR0FBRyxDQUFDO0FBQUNDLGdCQUFJLEVBQUM7QUFBTixXQUFELENBQVQ7O0FBYlI7QUFlSVIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFmSixDQWdCSTs7QUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0JBLFNBQVVKLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJRyxpQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQURKO0FBRUksaUJBQU1RLFVBQVUsQ0FBQyxvQkFBRCxFQUFzQmIsVUFBdEIsQ0FBaEI7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2UsU0FBVUUsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBRFc7QUFFWCxpQkFBTVMsdURBQUcsQ0FBQyxDQUNOQyx3REFBSSxDQUFDQywwQ0FBRCxDQURFLENBQUQsQ0FBVDs7QUFGVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBT2YiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jODk2NzhjY2VhZTdhOWQwZTQ3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsICBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcblxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJ1xyXG5cclxuXHJcbi8v7IKs7J2065OcIOydtO2Ome2KuFxyXG4vL2FsbCBjYWxsIGZvcmsgdGFrZSB0YWtlRXZlcnkgdGFrZUxhdGVzdCBwdXQgdGhyb3R0bGVcclxuXHJcblxyXG4vL3Rlc3RBY3Rpb27sl63tlaA6IO2YhOyerCDsg4Htg5zrpbwg7LK07YGs7ZWY6rGw64KYIOyalOyyreydhCDrs7TrgrTqsbDrgpgg7KSR6rCE7JeQ7IScIO2VoCDsiJgg7J6I64qUIOqyg+uTpFxyXG4vL+u5hOuPmeq4sOuhnCBkYXRh66W8IOyjvOqzoCDrsJvqsbDrgpgg7ZWY64qUIOqyg+yehC5cclxuLy/roZzqt7jsnbgg7ISx6rO16rO8IOyLpO2MqOulvCDrr7jrk6Tsm6jslrTqsIAg7LK07YGs66W8IO2VtOyjvOuKlCDqsoPsnoRcclxuXHJcblxyXG4vKipmZXRjaOuCmCBheHRpb3ProZwg7JqU7LKt7J2EIOuCoOumrOqzoCxcclxuICogYmFja2VuZCBzZXJ2ZXLripQg6rKw6rO86rCS7J2EIOuwm+ydgCDri6TsnYwsIOqysOqzvOqwkuyXkCDrlLDrpbggYWN0aW9u6rCS7J2EIOuCtOuztOuCuOuLpC5cclxuICogXHJcbiAqIFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uKiB0ZXN0QWN0aW9uKGFjdGlvbil7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICAvLyBjYWxsKClcclxuICAgIC8vIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLGFjdGlvbi5kYXRhKVxyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChheGlvcy5wb3N0LCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyxhY3Rpb24uZGF0YSlcclxuICAgIC8vY2FsbCAo7ZWo7IiYLHVybCxkYXRhKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgIC8v7ISx6rO17KCB7J2065286rOgIOyDneqwge2VmOqzoCDsnpHshLHtlZjquLBcclxuICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIGlmKGRhdGEucmVzdWx0ID09XCJPS1wiKXtcclxuICAgICAgICB5aWVsZCBwdXQoe3R5cGU6J1VTRVJfTE9HSU5fU1VDQ0VTUyd9KVxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHlpZWxkIHB1dCh7dHlwZTonVVNFUl9MT0dJTl9GQUlMJ30pXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygn7ZuU7LOQ7Jik6riwIScpXHJcbiAgICAvL3NhZ2Hsl5DshJzripQgYXN5bmMgYXdhaXQg7JWI7JOw6rOgIOyTuCDsiJgg7J6I7J2MXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiB0ZXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZygn7YWM7Iqk7Yq4JylcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ1VTRVJfTE9HSU5fUkVRVUVTVCcsdGVzdEFjdGlvbilcclxuICAgIC8vVVNFUl9MT0dJTl9SRVFVRVNU6rCAIGFjdGlvbuqwkuycvOuhnCDsmKTrqbQgdGVzdEFjdGlvbuydhCDsi6Ttlonsi5ztgqjri6TripQg6rKD7J6EXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgY29uc29sZS5sb2coJ+ujqO2KuOyCrOqwgCcpXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpXHJcbiAgICBdKS8vcmVkdXggc2FnYeyXkCDsnojsnYxcclxufVxyXG5cclxuLy9yb290c2FnYeuKlCBkaXNwYXRjaOqwgCByZWR1Y2Vy66GcIOqwgOq4sCDsoITsl5Ag7Iuk7ZaJ65CY64qUIOqyg+yehC4iXSwic291cmNlUm9vdCI6IiJ9