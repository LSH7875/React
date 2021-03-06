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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./saga/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _marked = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(testAction),
    _marked2 = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(test),
    _marked3 = /*#__PURE__*/C_Users_SH_Desktop_React_0806_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(rootSaga);



 //????????? ?????????
//all call fork take takeEvery takeLatest put throttle
//testAction??????: ?????? ????????? ??????????????? ????????? ???????????? ???????????? ??? ??? ?????? ??????
//???????????? data??? ?????? ????????? ?????? ??????.
//????????? ????????? ????????? ??????????????? ????????? ????????? ??????

/**fetch??? axtios??? ????????? ?????????,
 * backend server??? ???????????? ?????? ??????, ???????????? ?????? action?????? ????????????.
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
          //call (??????,url,data)
          console.log(result); //?????????????????? ???????????? ????????????

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
          console.log('????????????!'); //saga????????? async await ????????? ??? ??? ??????

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
          console.log('?????????');
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
          console.log('????????????');
          _context3.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(test)]);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
} //rootsaga??? dispatch??? reducer??? ?????? ?????? ???????????? ??????.

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
          //call (??????,url,data)
          console.log(result); //?????????????????? ???????????? ????????????

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
          console.log('????????????!'); //saga????????? async await ????????? ??? ??? ??????

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
          _context2.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)("USER_LOGIN_REQUEST", login);

        case 2:
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
          _context3.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLogin)]);

        case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS91c2VyLmpzIl0sIm5hbWVzIjpbInRlc3RBY3Rpb24iLCJ0ZXN0Iiwicm9vdFNhZ2EiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2FsbCIsImF4aW9zIiwiZGF0YSIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayIsImxvZ2luIiwid2F0Y2hMb2dpbiIsInVzZXJTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VKQW9CVUEsVTt3SkFzQkFDLEk7d0pBU2VDLFE7O0FBbkR6QjtBQUNBO0NBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVVGLFVBQVYsQ0FBcUJHLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosRUFESixDQUVJO0FBQ0E7O0FBSEo7QUFJbUIsaUJBQU1HLHdEQUFJLENBQUNDLG1EQUFELEVBQVksaUNBQVosRUFBOENKLE1BQU0sQ0FBQ0ssSUFBckQsQ0FBVjs7QUFKbkI7QUFJVUMsZ0JBSlY7QUFLSTtBQUNBTCxpQkFBTyxDQUFDQyxHQUFSLENBQVlJLE1BQVosRUFOSixDQVFJOztBQUNNRCxjQVRWLEdBU2lCQyxNQUFNLENBQUNELElBVHhCOztBQUFBLGdCQVVPQSxJQUFJLENBQUNDLE1BQUwsSUFBYyxJQVZyQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVdRLGlCQUFNQyx1REFBRyxDQUFDO0FBQUNDLGdCQUFJLEVBQUM7QUFBTixXQUFELENBQVQ7O0FBWFI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFhUSxpQkFBTUQsdURBQUcsQ0FBQztBQUFDQyxnQkFBSSxFQUFDO0FBQU4sV0FBRCxDQUFUOztBQWJSO0FBZUlQLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBZkosQ0FnQkk7O0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCQSxTQUFVSixJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFESjtBQUVJLGlCQUFNTyw4REFBVSxDQUFDLG9CQUFELEVBQXNCWixVQUF0QixDQUFoQjs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZSxTQUFVRSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFEVztBQUVYLGlCQUFNUSx1REFBRyxDQUFDLENBQ05DLHdEQUFJLENBQUNiLElBQUQsQ0FERSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQU9mOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VKQ3ZEVWMsSzt3SkFvQkFDLFU7d0pBR2VDLFE7O0FBMUJ6QjtBQUNBOztBQUVBLFNBQVVGLEtBQVYsQ0FBZ0JaLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosRUFESixDQUVJO0FBQ0E7O0FBSEo7QUFJbUIsaUJBQU1HLHdEQUFJLENBQUNDLG1EQUFELEVBQVksaUNBQVosRUFBOENKLE1BQU0sQ0FBQ0ssSUFBckQsQ0FBVjs7QUFKbkI7QUFJVUMsZ0JBSlY7QUFLSTtBQUNBTCxpQkFBTyxDQUFDQyxHQUFSLENBQVlJLE1BQVosRUFOSixDQVFJOztBQUNNRCxjQVRWLEdBU2lCQyxNQUFNLENBQUNELElBVHhCOztBQUFBLGdCQVVPQSxJQUFJLENBQUNDLE1BQUwsSUFBYyxJQVZyQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVdRLGlCQUFNQyx1REFBRyxDQUFDO0FBQUNDLGdCQUFJLEVBQUM7QUFBTixXQUFELENBQVQ7O0FBWFI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFhUSxpQkFBTUQsdURBQUcsQ0FBQztBQUFDQyxnQkFBSSxFQUFDO0FBQU4sV0FBRCxDQUFUOztBQWJSO0FBZUlQLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBZkosQ0FnQkk7O0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CQSxTQUFVVyxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNSiw4REFBVSxDQUFDLG9CQUFELEVBQXNCRyxLQUF0QixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHZSxTQUFVRSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNSix1REFBRyxDQUFDLENBQ05DLHdEQUFJLENBQUNFLFVBQUQsQ0FERSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NjFkYmU4ZWNlMTNhZDU5ZmQ5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsIHRha2UsIGZvcmssdGFrZUxhdGVzdCxjYWxsLCBwdXR9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJ1xyXG5cclxuXHJcbi8v7IKs7J2065OcIOydtO2Ome2KuFxyXG4vL2FsbCBjYWxsIGZvcmsgdGFrZSB0YWtlRXZlcnkgdGFrZUxhdGVzdCBwdXQgdGhyb3R0bGVcclxuXHJcblxyXG4vL3Rlc3RBY3Rpb27sl63tlaA6IO2YhOyerCDsg4Htg5zrpbwg7LK07YGs7ZWY6rGw64KYIOyalOyyreydhCDrs7TrgrTqsbDrgpgg7KSR6rCE7JeQ7IScIO2VoCDsiJgg7J6I64qUIOqyg+uTpFxyXG4vL+u5hOuPmeq4sOuhnCBkYXRh66W8IOyjvOqzoCDrsJvqsbDrgpgg7ZWY64qUIOqyg+yehC5cclxuLy/roZzqt7jsnbgg7ISx6rO16rO8IOyLpO2MqOulvCDrr7jrk6Tsm6jslrTqsIAg7LK07YGs66W8IO2VtOyjvOuKlCDqsoPsnoRcclxuXHJcblxyXG4vKipmZXRjaOuCmCBheHRpb3ProZwg7JqU7LKt7J2EIOuCoOumrOqzoCxcclxuICogYmFja2VuZCBzZXJ2ZXLripQg6rKw6rO86rCS7J2EIOuwm+ydgCDri6TsnYwsIOqysOqzvOqwkuyXkCDrlLDrpbggYWN0aW9u6rCS7J2EIOuCtOuztOuCuOuLpC5cclxuICogXHJcbiAqIFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uKiB0ZXN0QWN0aW9uKGFjdGlvbil7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICAvLyBjYWxsKClcclxuICAgIC8vIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLGFjdGlvbi5kYXRhKVxyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChheGlvcy5wb3N0LCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyxhY3Rpb24uZGF0YSlcclxuICAgIC8vY2FsbCAo7ZWo7IiYLHVybCxkYXRhKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgIC8v7ISx6rO17KCB7J2065286rOgIOyDneqwge2VmOqzoCDsnpHshLHtlZjquLBcclxuICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgIGlmKGRhdGEucmVzdWx0ID09XCJPS1wiKXtcclxuICAgICAgICB5aWVsZCBwdXQoe3R5cGU6J1VTRVJfTE9HSU5fU1VDQ0VTUyd9KVxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHlpZWxkIHB1dCh7dHlwZTonVVNFUl9MT0dJTl9GQUlMJ30pXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygn7ZuU7LOQ7Jik6riwIScpXHJcbiAgICAvL3NhZ2Hsl5DshJzripQgYXN5bmMgYXdhaXQg7JWI7JOw6rOgIOyTuCDsiJgg7J6I7J2MXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiB0ZXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZygn7YWM7Iqk7Yq4JylcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ1VTRVJfTE9HSU5fUkVRVUVTVCcsdGVzdEFjdGlvbilcclxuICAgIC8vVVNFUl9MT0dJTl9SRVFVRVNU6rCAIGFjdGlvbuqwkuycvOuhnCDsmKTrqbQgdGVzdEFjdGlvbuydhCDsi6Ttlonsi5ztgqjri6TripQg6rKD7J6EXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgY29uc29sZS5sb2coJ+ujqO2KuOyCrOqwgCcpXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsodGVzdClcclxuICAgIF0pLy9yZWR1eCBzYWdh7JeQIOyeiOydjFxyXG59XHJcblxyXG4vL3Jvb3RzYWdh64qUIGRpc3BhdGNo6rCAIHJlZHVjZXLroZwg6rCA6riwIOyghOyXkCDsi6TtlonrkJjripQg6rKD7J6ELiIsImltcG9ydCB7IGFsbCwgdGFrZUxhdGVzdCxmb3JrLGNhbGwscHV0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKXtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgIC8vIGNhbGwoKVxyXG4gICAgLy8gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicsYWN0aW9uLmRhdGEpXHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGF4aW9zLnBvc3QsJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLGFjdGlvbi5kYXRhKVxyXG4gICAgLy9jYWxsICjtlajsiJgsdXJsLGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgLy/shLHqs7XsoIHsnbTrnbzqs6Ag7IOd6rCB7ZWY6rOgIOyekeyEse2VmOq4sFxyXG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgaWYoZGF0YS5yZXN1bHQgPT1cIk9LXCIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7dHlwZTonVVNFUl9MT0dJTl9TVUNDRVNTJ30pXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgeWllbGQgcHV0KHt0eXBlOidVU0VSX0xPR0lOX0ZBSUwnfSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCftm5Tss5DsmKTquLAhJylcclxuICAgIC8vc2FnYeyXkOyEnOuKlCBhc3luYyBhd2FpdCDslYjsk7Dqs6Ag7JO4IOyImCDsnojsnYxcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFwiVVNFUl9MT0dJTl9SRVFVRVNUXCIsbG9naW4pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbilcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9