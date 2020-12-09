webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*jshint esversion: 8 */

/* harmony default export */ __webpack_exports__["a"] = ({
  fetchData: function () {
    var _fetchData = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(actionUrl) {
      var data;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get("".concat(actionUrl)).then(function (response) {
                return response;
              });

            case 2:
              data = _context.sent;
              return _context.abrupt("return", data.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function fetchData(_x) {
      return _fetchData.apply(this, arguments);
    }

    return fetchData;
  }(),
  postData: function () {
    var _postData = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(actionUrl, payload) {
      var data;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("".concat(actionUrl), payload).then(function (response) {
                return response;
              });

            case 2:
              data = _context2.sent;
              return _context2.abrupt("return", data.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function postData(_x2, _x3) {
      return _postData.apply(this, arguments);
    }

    return postData;
  }(),
  getDownloadData: function () {
    var _getDownloadData = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(actionUrl) {
      var data, url;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get("".concat(actionUrl), {
                responseType: 'blob',
                headers: {
                  'Accept': 'application/pdf'
                }
              }).then(function (response) {
                return response;
              });

            case 2:
              data = _context3.sent;
              url = window.URL.createObjectURL(new Blob([data.data]));
              return _context3.abrupt("return", url);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function getDownloadData(_x4) {
      return _getDownloadData.apply(this, arguments);
    }

    return getDownloadData;
  }(),
  postUploadData: function () {
    var _postUploadData = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(actionUrl, payload) {
      var data;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("".concat(actionUrl), payload, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }).then(function (response) {
                return response;
              });

            case 2:
              data = _context4.sent;
              return _context4.abrupt("return", data.data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function postUploadData(_x5, _x6) {
      return _postUploadData.apply(this, arguments);
    }

    return postUploadData;
  }(),
  putData: function () {
    var _putData = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(actionUrl, payload) {
      var data;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put("".concat(actionUrl), payload).then(function (response) {
                return response;
              });

            case 2:
              data = _context5.sent;
              return _context5.abrupt("return", data.data);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function putData(_x7, _x8) {
      return _putData.apply(this, arguments);
    }

    return putData;
  }(),
  deleteData: function () {
    var _deleteData = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(actionUrl) {
      var data;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return __WEBPACK_IMPORTED_MODULE_1_axios___default.a["delete"]("".concat(actionUrl)).then(function (response) {
                return response;
              });

            case 2:
              data = _context6.sent;
              return _context6.abrupt("return", data.data);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function deleteData(_x9) {
      return _deleteData.apply(this, arguments);
    }

    return deleteData;
  }()
});

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_auth_js__ = __webpack_require__(61);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    auth: __WEBPACK_IMPORTED_MODULE_2__stores_auth_js__["a" /* default */]
  },
  state: {
    token: localStorage.getItem('token'),
    userid: localStorage.getItem('userid'),
    role: localStorage.getItem('role'),
    errors: []
  },
  getters: {
    isAuth: function isAuth(state) {
      return state.token != "null" && state.token != null;
    },
    userRole: function userRole(state) {
      return state.role != "null" && state.role != null;
    },
    userId: function userId(state) {
      return state.userid != "null" && state.userid != null;
    }
  },
  mutations: {
    SET_TOKEN: function SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_USER_ID: function SET_USER_ID(state, payload) {
      state.userid = payload;
    },
    SET_ROLE: function SET_ROLE(state, payload) {
      state.role = payload;
    },
    SET_ERRORS: function SET_ERRORS(state, payload) {
      state.errors = payload;
    },
    CLEAR_ERRORS: function CLEAR_ERRORS(state) {
      state.errors = [];
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(178);
module.exports = __webpack_require__(180);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_loading_overlay__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_loading_overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_loading_overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_cookies__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_locale_id__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_locale_id___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_locale_id__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_v_money__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_v_money___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_v_money__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_accounting__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_accounting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_accounting__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_bootstrap_datetimepicker__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_bootstrap_datetimepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_bootstrap_datetimepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_swal__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_swal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_swal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__App_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__App_vue__);
/*jshint esversion: 8 */












__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5_v_money___default.a, {
  decimal: ',',
  thousands: '.',
  prefix: 'Rp ',
  suffix: '',
  precision: 0,
  masked: true
});
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_7_vue_bootstrap_datetimepicker___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_accounting___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_cookies___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_8_vue_swal___default.a); // Component Config

$.extend(true, $.fn.datetimepicker.defaults, {
  icons: {
    time: 'fa fa-clock',
    date: 'fa fa-calendar',
    up: 'fa fa-arrow-up',
    down: 'fa fa-arrow-down',
    previous: 'fa fa-chevron-left',
    next: 'fa fa-chevron-right',
    today: 'fa fa-calendar-check',
    clear: 'fa fa-trash-alt',
    close: 'fa fa-times-circle'
  }
});
__WEBPACK_IMPORTED_MODULE_2_vue_cookies___default.a.config('1d'); // Date Filtering

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('moment', function (date) {
  return __WEBPACK_IMPORTED_MODULE_3_moment_moment___default()(date).format('D MMMM YYYY');
}); // Date Filtering

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('long_moment', function (date) {
  return __WEBPACK_IMPORTED_MODULE_3_moment_moment___default()(date).format('HH:mm [WIB], DD MMMM YYYY');
}); // Short Date Filtering

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('short_moment', function (date) {
  return __WEBPACK_IMPORTED_MODULE_3_moment_moment___default()(date).format('D/MM/YYYY');
}); // Generate Year

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('year', function (date) {
  return __WEBPACK_IMPORTED_MODULE_3_moment_moment___default()(date).format('YYYY');
}); // Date Filtering

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('difference', function (date) {
  var now = __WEBPACK_IMPORTED_MODULE_3_moment_moment___default()(new Date());
  var end = __WEBPACK_IMPORTED_MODULE_3_moment_moment___default()(new Date(date));
  var duration = __WEBPACK_IMPORTED_MODULE_3_moment_moment___default.a.duration(end.diff(now));
  var days = duration.asDays();
  var months = duration.asMonths();
  var output = '';

  if (parseInt(days) <= 60 && parseInt(days) > 0) {
    output = '<span class="badge alert-danger" style="font-size:100%;">' + parseInt(days) + ' Hari</span>';
  } else if (parseInt(days) > 60) {
    output = '<span class="badge alert-success" style="font-size:100%;">' + parseInt(months) + ' Bulan</span>';
  } else if (parseInt(days) === 0) {
    output = '<span class="badge alert-danger" style="font-size:100%;">Hari Ini</span>';
  } else if (parseInt(days) < 0) {
    output = '<span class="badge alert-default" style="font-size:100%;">Kontrak Habis</span>';
  }

  return output;
}); // Short Date Filtering

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('short_difference', function (since, until) {
  var from = __WEBPACK_IMPORTED_MODULE_3_moment_moment___default()(new Date(since));
  var end = __WEBPACK_IMPORTED_MODULE_3_moment_moment___default()(new Date(until));
  var duration = __WEBPACK_IMPORTED_MODULE_3_moment_moment___default.a.duration(end.diff(from));
  var days = duration.asDays();
  var callback;

  if (parseInt(days) > 0) {
    callback = days;
  } else if (parseInt(days) === 0) {
    callback = 1;
  }

  return callback;
}); // Filter Generate Date

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('month', function (month) {
  var bulan = {
    1: 'Januari',
    2: 'Februari',
    3: 'Maret',
    4: 'April',
    5: 'Mei',
    6: 'Juni',
    7: 'Juli',
    8: 'Agustus',
    9: 'September',
    10: 'Oktober',
    11: 'November',
    12: 'Desember'
  };
  var output = bulan[month];
  return output;
}); // Filter Rupiah

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('rupiah', function (amount) {
  return __WEBPACK_IMPORTED_MODULE_6_accounting___default.a.formatMoney(amount, "", 0, ".", ",");
});
/**
 *  Component Registration
 */

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('v-alert', __webpack_require__(166));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('v-pagination', __webpack_require__(169));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('v-delete', __webpack_require__(172));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('loading', __WEBPACK_IMPORTED_MODULE_1_vue_loading_overlay___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('spinner', __webpack_require__(175));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_9__router_js__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_10__store_js__["a" /* default */],
  components: {
    App: __WEBPACK_IMPORTED_MODULE_11__App_vue___default.a
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Login_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Dashboard_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Dashboard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Dashboard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_body_class__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_body_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_body_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_customer_Customer_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_customer_Customer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_customer_Customer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_customer_Index_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_customer_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_customer_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_customer_Create_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_customer_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_customer_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_customer_Update_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_customer_Update_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__views_customer_Update_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_supplier_Supplier_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_supplier_Supplier_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__views_supplier_Supplier_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_supplier_Index_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_supplier_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__views_supplier_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_supplier_Create_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_supplier_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__views_supplier_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_supplier_Update_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_supplier_Update_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__views_supplier_Update_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_category_Category_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_category_Category_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__views_category_Category_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_category_Index_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_category_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__views_category_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_category_Create_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_category_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__views_category_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_category_Update_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_category_Update_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__views_category_Update_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_item_Item_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_item_Item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__views_item_Item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_item_Index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_item_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__views_item_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_item_Create_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_item_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__views_item_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_item_Update_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_item_Update_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__views_item_Update_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_user_User_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_user_User_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__views_user_User_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_user_Index_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_user_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__views_user_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__views_user_Create_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__views_user_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__views_user_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_user_Update_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_user_Update_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__views_user_Update_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_PO_PO_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_PO_PO_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__views_PO_PO_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__views_PO_Index_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__views_PO_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__views_PO_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_PO_Cart_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_PO_Cart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__views_PO_Cart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_PO_Detail_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_PO_Detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__views_PO_Detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_SO_SO_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_SO_SO_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__views_SO_SO_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__views_SO_Index_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__views_SO_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__views_SO_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__views_SO_Cart_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__views_SO_Cart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__views_SO_Cart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__views_SO_Detail_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__views_SO_Detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__views_SO_Detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__views_POInvoice_POInvoice_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__views_POInvoice_POInvoice_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__views_POInvoice_POInvoice_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__views_POInvoice_Index_vue__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__views_POInvoice_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__views_POInvoice_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__views_POInvoice_Detail_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__views_POInvoice_Detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__views_POInvoice_Detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__views_SOInvoice_SOInvoice_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__views_SOInvoice_SOInvoice_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37__views_SOInvoice_SOInvoice_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__views_SOInvoice_Index_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__views_SOInvoice_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38__views_SOInvoice_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__views_SOInvoice_Detail_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__views_SOInvoice_Detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39__views_SOInvoice_Detail_vue__);





 // customer




 // supplier




 // category




 // item




 // user




 // PO




 // SO




 // Purchase Invoice



 // SO




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]); //DEFINE ROUTE

var routes = [{
  path: '/',
  name: 'dashboard',
  component: __WEBPACK_IMPORTED_MODULE_3__views_Dashboard_vue___default.a,
  meta: {
    requiresAuth: true,
    bodyClass: 'app'
  }
}, {
  path: '/login',
  name: 'login',
  component: __WEBPACK_IMPORTED_MODULE_2__views_Login_vue___default.a,
  meta: {
    bodyClass: 'app flex-row align-items-center'
  }
}, {
  path: '/customer',
  name: 'customer',
  component: __WEBPACK_IMPORTED_MODULE_6__views_customer_Customer_vue___default.a,
  meta: {
    requiresAuth: true
  },
  children: [{
    path: '',
    name: 'customer.index',
    component: __WEBPACK_IMPORTED_MODULE_7__views_customer_Index_vue___default.a,
    meta: {
      title: 'Data Customer'
    }
  }, {
    path: 'create',
    name: 'customer.create',
    component: __WEBPACK_IMPORTED_MODULE_8__views_customer_Create_vue___default.a,
    meta: {
      title: 'Tambah Customer'
    }
  }, {
    path: 'edit/:id',
    name: 'customer.edit',
    component: __WEBPACK_IMPORTED_MODULE_9__views_customer_Update_vue___default.a,
    meta: {
      title: 'Ubah Customer'
    }
  }]
}, {
  path: '/supplier',
  name: 'supplier',
  component: __WEBPACK_IMPORTED_MODULE_10__views_supplier_Supplier_vue___default.a,
  meta: {
    requiresAuth: true
  },
  children: [{
    path: '',
    name: 'supplier.index',
    component: __WEBPACK_IMPORTED_MODULE_11__views_supplier_Index_vue___default.a,
    meta: {
      title: 'Data Supplier'
    }
  }, {
    path: 'create',
    name: 'supplier.create',
    component: __WEBPACK_IMPORTED_MODULE_12__views_supplier_Create_vue___default.a,
    meta: {
      title: 'Tambah Supplier'
    }
  }, {
    path: 'edit/:id',
    name: 'supplier.edit',
    component: __WEBPACK_IMPORTED_MODULE_13__views_supplier_Update_vue___default.a,
    meta: {
      title: 'Ubah Supplier'
    }
  }]
}, {
  path: '/category',
  name: 'category',
  component: __WEBPACK_IMPORTED_MODULE_14__views_category_Category_vue___default.a,
  meta: {
    requiresAuth: true
  },
  children: [{
    path: '',
    name: 'category.index',
    component: __WEBPACK_IMPORTED_MODULE_15__views_category_Index_vue___default.a,
    meta: {
      title: 'Cabang Bisnis'
    }
  }, {
    path: 'create',
    name: 'category.create',
    component: __WEBPACK_IMPORTED_MODULE_16__views_category_Create_vue___default.a,
    meta: {
      title: 'Tambah Cabang Bisnis'
    }
  }, {
    path: 'edit/:id',
    name: 'category.edit',
    component: __WEBPACK_IMPORTED_MODULE_17__views_category_Update_vue___default.a,
    meta: {
      title: 'Ubah Cabang Bisnis'
    }
  }]
}, {
  path: '/item',
  name: 'item',
  component: __WEBPACK_IMPORTED_MODULE_18__views_item_Item_vue___default.a,
  meta: {
    requiresAuth: true
  },
  children: [{
    path: '',
    name: 'item.index',
    component: __WEBPACK_IMPORTED_MODULE_19__views_item_Index_vue___default.a,
    meta: {
      title: 'Data Barang'
    }
  }, {
    path: 'create',
    name: 'item.create',
    component: __WEBPACK_IMPORTED_MODULE_20__views_item_Create_vue___default.a,
    meta: {
      title: 'Tambah Barang'
    }
  }, {
    path: 'edit/:id',
    name: 'item.edit',
    component: __WEBPACK_IMPORTED_MODULE_21__views_item_Update_vue___default.a,
    meta: {
      title: 'Ubah Barang'
    }
  }]
}, {
  path: '/user',
  name: 'user',
  component: __WEBPACK_IMPORTED_MODULE_22__views_user_User_vue___default.a,
  meta: {
    requiresAuth: true
  },
  children: [{
    path: '',
    name: 'user.index',
    component: __WEBPACK_IMPORTED_MODULE_23__views_user_Index_vue___default.a,
    meta: {
      title: 'Data Pengguna'
    }
  }, {
    path: 'create',
    name: 'user.create',
    component: __WEBPACK_IMPORTED_MODULE_24__views_user_Create_vue___default.a,
    meta: {
      title: 'Tambah Pengguna'
    }
  }, {
    path: 'edit/:id',
    name: 'user.edit',
    component: __WEBPACK_IMPORTED_MODULE_25__views_user_Update_vue___default.a,
    meta: {
      title: 'Ubah Pengguna'
    }
  }]
}, {
  path: '/po',
  name: 'po',
  component: __WEBPACK_IMPORTED_MODULE_26__views_PO_PO_vue___default.a,
  meta: {
    requiresAuth: true
  },
  children: [{
    path: '',
    name: 'po.index',
    component: __WEBPACK_IMPORTED_MODULE_27__views_PO_Index_vue___default.a,
    meta: {
      title: 'Data Purchase Order'
    }
  }, {
    path: 'cart',
    name: 'po.cart',
    component: __WEBPACK_IMPORTED_MODULE_28__views_PO_Cart_vue___default.a,
    meta: {
      title: 'Keranjang Belanja'
    }
  }, {
    path: 'detail/:id',
    name: 'po.detail',
    component: __WEBPACK_IMPORTED_MODULE_29__views_PO_Detail_vue___default.a,
    meta: {
      title: 'Detail Purchase Order'
    }
  }]
}, {
  path: '/poinvoice',
  name: 'poinvoice',
  component: __WEBPACK_IMPORTED_MODULE_34__views_POInvoice_POInvoice_vue___default.a,
  meta: {
    requiresAuth: true
  },
  children: [{
    path: '',
    name: 'poinvoice.index',
    component: __WEBPACK_IMPORTED_MODULE_35__views_POInvoice_Index_vue___default.a,
    meta: {
      title: 'Data Invoice Pembelian'
    }
  }, {
    path: 'detail/:id',
    name: 'poinvoice.detail',
    component: __WEBPACK_IMPORTED_MODULE_36__views_POInvoice_Detail_vue___default.a,
    meta: {
      title: 'Detail Invoice'
    }
  }]
}, {
  path: '/so',
  name: 'so',
  component: __WEBPACK_IMPORTED_MODULE_30__views_SO_SO_vue___default.a,
  meta: {
    requiresAuth: true
  },
  children: [{
    path: '',
    name: 'so.index',
    component: __WEBPACK_IMPORTED_MODULE_31__views_SO_Index_vue___default.a,
    meta: {
      title: 'Data Sales Order'
    }
  }, {
    path: 'cart',
    name: 'so.cart',
    component: __WEBPACK_IMPORTED_MODULE_32__views_SO_Cart_vue___default.a,
    meta: {
      title: 'Keranjang Belanja'
    }
  }, {
    path: 'detail/:id',
    name: 'so.detail',
    component: __WEBPACK_IMPORTED_MODULE_33__views_SO_Detail_vue___default.a,
    meta: {
      title: 'Detail Sales Order'
    }
  }]
}];
var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  base: Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).BASE_URL,
  routes: routes
});
var vueBodyClass = new __WEBPACK_IMPORTED_MODULE_5_vue_body_class___default.a(routes);
var DEFAULT_TITLE = 'SonoPOS';
router.beforeEach(function (to, from, next) {
  vueBodyClass.guard(to, next);

  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    var auth = __WEBPACK_IMPORTED_MODULE_4__store_js__["a" /* default */].getters.isAuth;

    if (!auth) {
      next({
        name: 'login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
router.afterEach(function (to, from) {
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(function () {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(36)
/* template */
var __vue_template__ = __webpack_require__(55)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12f5395a", Component.options)
  } else {
    hotAPI.reload("data-v-12f5395a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_js__ = __webpack_require__(1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userlogin: {
        username: "",
        password: ""
      },
      login: "",
      form: "",
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])(['isAuth']), {}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["e" /* mapState */])(['errors'])),
  methods: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])('auth', ['submit']), {}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapMutations */])(['CLEAR_ERRORS']), {
    postLogin: function postLogin() {
      var _this = this;

      this.submit(this.userlogin).then(function () {
        if (_this.isAuth) {
          _this.CLEAR_ERRORS();

          _this.$router.push({
            name: 'dashboard'
          });
        }
      });
    }
  }),
  created: function created() {
    if (this.isAuth) {
      this.$router.push({
        name: 'dashboard'
      });
    }

    this.isLoading = true;
  },
  mounted: function mounted() {
    this.isLoading = false;
  }
});

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card-group" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("loading", {
                  attrs: {
                    opacity: 100,
                    active: _vm.isLoading,
                    "can-cancel": false,
                    "is-full-page": false
                  },
                  on: {
                    "update:active": function($event) {
                      _vm.isLoading = $event
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("transition", { attrs: { name: "fade" } }, [
                  _c(
                    "form",
                    {
                      attrs: { method: "post" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.postLogin($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "input-group mb-4" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _c("i", { staticClass: "fa fa-user" })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.userlogin.username,
                              expression: "userlogin.username"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Username",
                            required: ""
                          },
                          domProps: { value: _vm.userlogin.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.userlogin,
                                "username",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group mb-4" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _c("i", { staticClass: "fa fa-lock" })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.userlogin.password,
                              expression: "userlogin.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            placeholder: "Password",
                            required: ""
                          },
                          domProps: { value: _vm.userlogin.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.userlogin,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-block btn-success px-4",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                                            Login\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.login !== "" && _vm.login === "notfound"
                            ? _c(
                                "div",
                                {
                                  staticClass: "text-center",
                                  staticStyle: { "margin-top": "25px" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "alert alert-danger" },
                                    [
                                      _vm._v(
                                        "\n                                                Username / Password Salah!\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.login !== "" && _vm.login === "inactive"
                            ? _c(
                                "div",
                                {
                                  staticClass: "text-center",
                                  staticStyle: { "margin-top": "25px" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "alert alert-danger" },
                                    [
                                      _vm._v(
                                        "\n                                                Status User Tidak Aktif!\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.login !== "" && _vm.login === "error"
                            ? _c(
                                "div",
                                {
                                  staticClass: "text-center",
                                  staticStyle: { "margin-top": "25px" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "alert alert-danger" },
                                    [
                                      _vm._v(
                                        "\n                                                Terjadi Kesalahan!\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                ])
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-logo" }, [
      _c("img", { attrs: { src: "/img/logo.png", width: "100%;" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12f5395a", module.exports)
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(57)
/* template */
var __vue_template__ = __webpack_require__(60)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f79daf6", Component.options)
  } else {
    hotAPI.reload("data-v-1f79daf6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_vue__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return _defineProperty({
      sell_chart: {},
      buy_chart: {},
      periode: '',
      year: '',
      year_chart: '',
      isLoading: false,
      options: null,
      attrs: [{
        key: 'today',
        highlight: true,
        dates: new Date()
      }]
    }, "options", {
      format: 'YYYY-MM',
      viewMode: 'months',
      useCurrent: false,
      locale: 'id'
    });
  },
  props: ['api', 'mobile'],
  components: {
    highcharts: __WEBPACK_IMPORTED_MODULE_1_highcharts_vue__["Chart"]
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData(this.api + '?year=' + this.periode).then(function (response) {
        _this.isLoading = false;
        _this.year_chart = _this.year;

        _this.generateBuyChart(response.buy_chart);

        _this.generateSellChart(response.sell_chart);
      })["catch"](function (error) {
        _this.isLoading = false;
        console.log(error);
      });
    },
    generateSellChart: function generateSellChart(sell) {
      this.sell_chart = {
        chart: {
          type: 'column'
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'Statistik Penjualan'
        },
        yAxis: {
          min: 0,
          title: {
            text: null
          },
          labels: {
            formatter: function formatter() {
              if (this.value >= 1E6) {
                return (this.value / 1000000).toFixed(0) + ' Jt';
              }

              return this.value / 1000;
            }
          }
        },
        xAxis: {
          categories: sell.timestamp
        },
        series: [{
          name: 'Transaksi Penjualan',
          data: sell.data,
          color: '#6f42c1'
        }],
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}:</td><td style="padding:0"><b>Rp.{point.y:,.0f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          enabled: false
        }
      };
    },
    generateBuyChart: function generateBuyChart(buy) {
      this.buy_chart = {
        chart: {
          type: 'column'
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'Statistik Pembelian'
        },
        yAxis: {
          min: 0,
          title: {
            text: null
          },
          labels: {
            formatter: function formatter() {
              if (this.value >= 1E6) {
                return (this.value / 1000000).toFixed(0) + ' Jt';
              }

              return this.value / 1000;
            }
          }
        },
        xAxis: {
          categories: buy.timestamp
        },
        series: [{
          name: 'Transaksi Pembelian',
          data: buy.data,
          color: '#6f42c1'
        }],
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">Total:</td><td style="padding:0">Rp.{point.y:,.0f}</td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          enabled: false
        }
      };
    }
  }
});

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("loading", {
                attrs: {
                  opacity: 100,
                  active: _vm.isLoading,
                  "can-cancel": false,
                  "is-full-page": false
                },
                on: {
                  "update:active": function($event) {
                    _vm.isLoading = $event
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { method: "POST" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.fetchData($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-lg-4" }, [
                      _c(
                        "div",
                        { staticClass: "input-group" },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("date-picker", {
                            staticClass: "form-control",
                            attrs: {
                              id: "periode",
                              name: "periode",
                              config: _vm.options,
                              placeholder: "Periode",
                              autocomplete: "off"
                            },
                            model: {
                              value: _vm.periode,
                              callback: function($$v) {
                                _vm.periode = $$v
                              },
                              expression: "periode"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-lg-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          class: { "btn-block": _vm.mobile === true },
                          attrs: { type: "submit" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-search" }),
                          _vm._v(
                            " Tampikan Data\n                                "
                          )
                        ]
                      )
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("loading", {
                attrs: {
                  opacity: 100,
                  active: _vm.isLoading,
                  "can-cancel": false,
                  "is-full-page": false
                },
                on: {
                  "update:active": function($event) {
                    _vm.isLoading = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("highcharts", { attrs: { options: _vm.sell_chart } })
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("loading", {
                attrs: {
                  opacity: 100,
                  active: _vm.isLoading,
                  "can-cancel": false,
                  "is-full-page": false
                },
                on: {
                  "update:active": function($event) {
                    _vm.isLoading = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("highcharts", { attrs: { options: _vm.buy_chart } })
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-calendar" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f79daf6", module.exports)
  }
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_js__ = __webpack_require__(62);


var state = function state() {
  return {};
};

var mutations = {};
var actions = {
  submit: function submit(_ref, payload) {
    var commit = _ref.commit;
    localStorage.setItem('token', null);
    localStorage.setItem('userid', null);
    localStorage.setItem('role', null);
    commit('SET_TOKEN', null, {
      root: true
    });
    commit('SET_USER_ID', null, {
      root: true
    });
    commit('SET_ROLE', null, {
      root: true
    });
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_js__["a" /* default */].post('/login', payload).then(function (response) {
        if (response.data.status == 'success') {
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('userid', response.data.data.id);
          localStorage.setItem('role', response.data.data.role);
          commit('SET_TOKEN', response.data.data.token, {
            root: true
          });
          commit('SET_USER_ID', response.data.data.id, {
            root: true
          });
          commit('SET_ROLE', response.data.data.role, {
            root: true
          });
        } else {
          commit('SET_ERRORS', {
            invalid: 'Username / Password Salah'
          }, {
            root: true
          });
        }

        resolve(response.data);
      })["catch"](function (error) {
        if (error.response.status == 422) {
          commit('SET_ERRORS', error.response.data.errors, {
            root: true
          });
        }
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

var $axios = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: '/api',
  headers: {
    Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + JSON.stringify(localStorage.getItem('token')) : '',
    'Content-Type': 'application/json'
  }
});
/* harmony default export */ __webpack_exports__["a"] = ($axios);

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(65)
/* template */
var __vue_template__ = __webpack_require__(66)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/customer/Customer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1de778a0", Component.options)
  } else {
    hotAPI.reload("data-v-1de778a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1de778a0", module.exports)
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(68)
/* template */
var __vue_template__ = __webpack_require__(69)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/customer/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-892a4500", Component.options)
  } else {
    hotAPI.reload("data-v-892a4500", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {},
      search: {
        q: ''
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: ''
    };
  },
  props: ['mobile'],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = '';
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    toggleModal: function toggleModal(id) {
      $("#delete_modal").modal('show');
      this.id = id;
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/customer?' + query + '&page=' + this.pagination.page).then(function (response) {
        _this.renderData(response);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    renderData: function renderData(response) {
      if (response.total === 0) {
        this.showTable = false;
        this.alert.empty = true;
        this.alert.error = false;
      } else {
        this.showTable = true;
        this.alert.empty = false;
        this.alert.error = false;
        this.customer = response.data;
        this.pagination.last = response.last_page;
        this.pagination.from = response.from;
        this.pagination.to = response.to;
        this.pagination.total = response.total;
      }
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + '=' + _this2.search[key];
      }).join('&');
    },
    deleteData: function deleteData(id) {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].deleteData('/api/customer?id=' + id).then(function (response) {
        if (response.status === 'ok') {
          _this3.$swal("Berhasil!", "Data Berhasil Dihapus!", "success");

          $('#delete_modal').modal('hide');

          _this3.fetchData();

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      })["catch"](function (error) {
        _this3.isLoading = false;

        _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

        $('#delete_modal').modal('hide');
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        _this3.fetchData();

        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.fetchData();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c(
        "div",
        { staticClass: "pull-right" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-info mb-2",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggle($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v(" Form Pencarian\n            ")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success mb-2",
              attrs: { to: { name: "customer.create" } }
            },
            [
              _c("i", { staticClass: "fa fa-plus" }),
              _vm._v(" Tambah Data\n            ")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.showForm
        ? _c(
            "div",
            { staticClass: "card", staticStyle: { "margin-top": "50px" } },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.fetchData()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.q,
                              expression: "search.q"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Nama Customer" },
                          domProps: { value: _vm.search.q },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.search, "q", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "input-group col-md-6" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success mr-sm-2",
                            class: { "btn-block": _vm.mobile === true },
                            attrs: { type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-search" }),
                            _vm._v(" Cari Data\n                            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            class: { "btn-block": _vm.mobile === true },
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.clear($event)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-refresh" }),
                            _vm._v(" Reset\n                            ")
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _vm.showTable == true
          ? _c("transition", { attrs: { name: "fade" } }, [
              _vm.mobile === true
                ? _c(
                    "div",
                    _vm._l(_vm.customer, function(v) {
                      return _c("div", { key: v.id, staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("table", { staticClass: "table-noborder" }, [
                            _c("tr", [
                              _c("td", [_vm._v("Nama")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.customer_name))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Alamat")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.customer_address))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Kontak")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.hp))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "summary" }, [
                            _c(
                              "span",
                              { staticClass: "buttons" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-outline-warning mr-2",
                                    attrs: {
                                      to: {
                                        name: "customer.edit",
                                        params: { id: v.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-wrench" }),
                                    _vm._v(
                                      " Ubah\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleModal(v.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-trash" }),
                                    _vm._v(
                                      " Hapus\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                : _c("div", { staticClass: "table-responsive" }, [
                    _c("table", { staticClass: "table table-bordered" }, [
                      _c("thead", { staticClass: "thead-dark" }, [
                        _c("tr", [
                          _c(
                            "th",
                            {
                              staticStyle: {
                                width: "12%",
                                "text-align": "center"
                              }
                            },
                            [_vm._v("Nama Customer")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticStyle: {
                                width: "10%",
                                "text-align": "center"
                              }
                            },
                            [_vm._v("Kontak")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticStyle: {
                                width: "20%",
                                "text-align": "center"
                              }
                            },
                            [_vm._v("Alamat")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticStyle: {
                                width: "10%",
                                "text-align": "center"
                              }
                            },
                            [_vm._v("Action")]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.customer, function(v) {
                          return _c("tr", { key: v.id }, [
                            _c("td", [_vm._v(_vm._s(v.customer_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(v.hp))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(v.customer_address))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "div",
                                { staticStyle: { "text-align": "center" } },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-warning mr-2",
                                      attrs: {
                                        to: {
                                          name: "customer.edit",
                                          params: { id: v.id }
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-wrench" }),
                                      _vm._v(
                                        " Ubah\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-sm btn-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleModal(v.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Hapus\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ])
                  ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("v-delete", {
          attrs: { element: "delete_modal", id: _vm.id },
          on: { delete: _vm.deleteData }
        }),
        _vm._v(" "),
        _vm.showTable === true
          ? _c(
              "div",
              { staticClass: "card-footer clearfix" },
              [
                _vm.showTable === true
                  ? _c("v-pagination", {
                      attrs: { pagination: _vm.pagination },
                      on: { next: _vm.nextPage, previous: _vm.prevPage }
                    })
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-892a4500", module.exports)
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(71)
/* template */
var __vue_template__ = __webpack_require__(72)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/customer/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cb5c584", Component.options)
  } else {
    hotAPI.reload("data-v-4cb5c584", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {
        'customer_name': '',
        'hp': '',
        'customer_address': ''
      },
      validasi: {
        'customer_name': '',
        'hp': '',
        'customer_address': ''
      },
      alert: {
        error: false,
        save: false,
        duplicate: false,
        validate: false
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/customer', this.customer).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 2000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.$swal("Berhasil!", "Data Berhasil Disimpan!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        this.reset();
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    reset: function reset() {
      this.customer.customer_name = '';
      this.customer.hp = '';
      this.customer.customer_address = '';
    },
    validate: function validate() {
      var condition = 0;

      if (this.customer.customer_name.length === 0) {
        this.validasi.customer_name = true;
        condition++;
      } else {
        this.validasi.customer_name = false;
      }

      if (this.customer.hp.length === 0) {
        this.validasi.hp = true;
        condition++;
      } else {
        this.validasi.hp = false;
      }

      if (this.customer.customer_address.length === 0) {
        this.validasi.customer_address = true;
        condition++;
      } else {
        this.validasi.customer_address = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.isLoading = false;
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("v-alert", { attrs: { alert: _vm.alert } }),
            _vm._v(" "),
            _c("loading", {
              attrs: {
                opacity: 100,
                active: _vm.isLoading,
                "can-cancel": false,
                "is-full-page": false
              },
              on: {
                "update:active": function($event) {
                  _vm.isLoading = $event
                }
              }
            }),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { method: "POST" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Nama Customer")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.customer_name,
                          expression: "customer.customer_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.validasi.customer_name },
                      attrs: {
                        type: "text",
                        placeholder: "Masukkan Nama Customer"
                      },
                      domProps: { value: _vm.customer.customer_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
                            "customer_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Kontak")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.hp,
                          expression: "customer.hp"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.validasi.hp },
                      attrs: { type: "text", placeholder: "Masukkan Kontak" },
                      domProps: { value: _vm.customer.hp },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "hp", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Alamat")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.customer_address,
                          expression: "customer.customer_address"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.validasi.customer_address },
                      domProps: { value: _vm.customer.customer_address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
                            "customer_address",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "form-group col-md-12" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          class: { "btn-block": _vm.mobile === true },
                          attrs: { type: "submit" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-save" }),
                          _vm._v(" Simpan\n                            ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-secondary",
                          class: { "btn-block": _vm.mobile === true },
                          attrs: { to: { name: "customer.index" } }
                        },
                        [
                          _c("i", { staticClass: "fa fa-arrow-left" }),
                          _vm._v(" Kembali\n                            ")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cb5c584", module.exports)
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(74)
/* template */
var __vue_template__ = __webpack_require__(75)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/customer/Update.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7665068b", Component.options)
  } else {
    hotAPI.reload("data-v-7665068b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {},
      alert: {
        error: false,
        update: false,
        validate: false,
        duplicate: false
      },
      validasi: {
        'customer_name': '',
        'hp': '',
        'customer_address': ''
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].putData('/api/customer?id=' + this.$route.params.id, this.customer).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 3000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.getCustomer();
        this.$swal("Berhasil!", "Data Berhasil Diubah!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    validate: function validate() {
      var condition = 0;

      if (this.customer.customer_name.length === 0) {
        this.validasi.customer_name = true;
        condition++;
      } else {
        this.validasi.customer_name = false;
      }

      if (this.customer.hp.length === 0) {
        this.validasi.hp = true;
        condition++;
      } else {
        this.validasi.hp = false;
      }

      if (this.customer.customer_address.length === 0) {
        this.validasi.customer_address = true;
        condition++;
      } else {
        this.validasi.customer_address = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    getCustomer: function getCustomer() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/customer/' + this.$route.params.id).then(function (response) {
        _this3.customer = response;
        _this3.isLoading = false;
      })["catch"](function (error) {
        _this3.alert.error = true;
        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.getCustomer();
  }
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("v-alert", { attrs: { alert: _vm.alert } }),
            _vm._v(" "),
            _c("loading", {
              attrs: {
                opacity: 100,
                active: _vm.isLoading,
                "can-cancel": false,
                "is-full-page": false
              },
              on: {
                "update:active": function($event) {
                  _vm.isLoading = $event
                }
              }
            }),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { method: "POST" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Nama Customer")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.customer_name,
                          expression: "customer.customer_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.validasi.customer_name },
                      attrs: {
                        type: "text",
                        placeholder: "Masukkan Nama Customer"
                      },
                      domProps: { value: _vm.customer.customer_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
                            "customer_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Kontak")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.hp,
                          expression: "customer.hp"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.validasi.hp },
                      attrs: { type: "text", placeholder: "Masukkan Kontak" },
                      domProps: { value: _vm.customer.hp },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "hp", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Alamat")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.customer_address,
                          expression: "customer.customer_address"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.validasi.customer_address },
                      domProps: { value: _vm.customer.customer_address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
                            "customer_address",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "form-group col-md-12" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          class: { "btn-block": _vm.mobile === true },
                          attrs: { type: "submit" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-save" }),
                          _vm._v(" Simpan\n                            ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-secondary",
                          class: { "btn-block": _vm.mobile === true },
                          attrs: { to: { name: "customer.index" } }
                        },
                        [
                          _c("i", { staticClass: "fa fa-arrow-left" }),
                          _vm._v(" Kembali\n                            ")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7665068b", module.exports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(77)
/* template */
var __vue_template__ = __webpack_require__(78)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/supplier/Supplier.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35dae460", Component.options)
  } else {
    hotAPI.reload("data-v-35dae460", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-35dae460", module.exports)
  }
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(80)
/* template */
var __vue_template__ = __webpack_require__(81)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/supplier/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce7f7424", Component.options)
  } else {
    hotAPI.reload("data-v-ce7f7424", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      supplier: {},
      search: {
        q: ''
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: ''
    };
  },
  props: ['mobile'],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = '';
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    toggleModal: function toggleModal(id) {
      $("#delete_modal").modal('show');
      this.id = id;
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/supplier?' + query + '&page=' + this.pagination.page).then(function (response) {
        _this.renderData(response);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    renderData: function renderData(response) {
      if (response.total === 0) {
        this.showTable = false;
        this.alert.empty = true;
        this.alert.error = false;
      } else {
        this.showTable = true;
        this.alert.empty = false;
        this.alert.error = false;
        this.supplier = response.data;
        this.pagination.last = response.last_page;
        this.pagination.from = response.from;
        this.pagination.to = response.to;
        this.pagination.total = response.total;
      }
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + '=' + _this2.search[key];
      }).join('&');
    },
    deleteData: function deleteData(id) {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].deleteData('/api/supplier?id=' + id).then(function (response) {
        if (response.status === 'ok') {
          _this3.$swal("Berhasil!", "Data Berhasil Dihapus!", "success");

          $('#delete_modal').modal('hide');

          _this3.fetchData();

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      })["catch"](function (error) {
        _this3.isLoading = false;

        _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

        $('#delete_modal').modal('hide');
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        _this3.fetchData();

        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.fetchData();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-header" },
      [
        _c(
          "div",
          { staticClass: "pull-right" },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-info mb-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.toggle($event)
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-search" }),
                _vm._v(" Form Pencarian\n            ")
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-success mb-2",
                attrs: { to: { name: "supplier.create" } }
              },
              [
                _c("i", { staticClass: "fa fa-plus" }),
                _vm._v(" Tambah Data\n            ")
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showForm,
                  expression: "showForm"
                }
              ],
              staticClass: "card",
              staticStyle: { "margin-top": "50px" }
            },
            [
              _c("div", { staticClass: "card-body table-responsive" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.fetchData()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.q,
                              expression: "search.q"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Nama Supplier" },
                          domProps: { value: _vm.search.q },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.search, "q", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "input-group col-md-6" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success mr-sm-2",
                            class: { "btn-block": _vm.mobile === true },
                            attrs: { type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-search" }),
                            _vm._v(
                              " Cari Data\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            class: { "btn-block": _vm.mobile === true },
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.clear($event)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-refresh" }),
                            _vm._v(" Reset\n                                ")
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _vm.showTable == true
          ? _c("transition", { attrs: { name: "fade" } }, [
              _vm.mobile === true
                ? _c(
                    "div",
                    _vm._l(_vm.supplier, function(v) {
                      return _c("div", { key: v.id, staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("table", { staticClass: "table-noborder" }, [
                            _c("tr", [
                              _c("td", [_vm._v("Nama")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.supplier_name))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Alamat")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.supplier_address))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Kontak")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.supplier_contact))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "summary" }, [
                            _c(
                              "span",
                              { staticClass: "buttons" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-warning mr-2",
                                    attrs: {
                                      to: {
                                        name: "supplier.edit",
                                        params: { id: v.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-wrench" }),
                                    _vm._v(
                                      " Ubah\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleModal(v.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-trash" }),
                                    _vm._v(
                                      " Hapus\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                : _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-hover table-striped table-bordered"
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c(
                              "th",
                              {
                                staticStyle: {
                                  width: "12%",
                                  "text-align": "center"
                                }
                              },
                              [_vm._v("Nama Supplier")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: {
                                  width: "10%",
                                  "text-align": "center"
                                }
                              },
                              [_vm._v("Kontak")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: {
                                  width: "20%",
                                  "text-align": "center"
                                }
                              },
                              [_vm._v("Alamat")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: {
                                  width: "10%",
                                  "text-align": "center"
                                }
                              },
                              [_vm._v("Action")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.supplier, function(v) {
                            return _c("tr", { key: v.id }, [
                              _c("td", [_vm._v(_vm._s(v.supplier_name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.supplier_contact))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.supplier_address))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-warning mr-2",
                                        attrs: {
                                          to: {
                                            name: "supplier.edit",
                                            params: { id: v.id }
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-wrench"
                                        }),
                                        _vm._v(
                                          " Ubah\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass: "btn btn-sm btn-danger",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            return _vm.toggleModal(v.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-trash-o"
                                        }),
                                        _vm._v(
                                          " Hapus\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("v-delete", {
          attrs: { element: "delete_modal", id: _vm.id },
          on: { delete: _vm.deleteData }
        }),
        _vm._v(" "),
        _vm.showTable === true
          ? _c(
              "div",
              { staticClass: "card-footer clearfix" },
              [
                _vm.showTable === true
                  ? _c("v-pagination", {
                      attrs: { pagination: _vm.pagination },
                      on: { next: _vm.nextPage, previous: _vm.prevPage }
                    })
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ce7f7424", module.exports)
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(83)
/* template */
var __vue_template__ = __webpack_require__(84)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/supplier/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2067ae0", Component.options)
  } else {
    hotAPI.reload("data-v-b2067ae0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      supplier: {
        'supplier_name': '',
        'supplier_contact': '',
        'supplier_address': ''
      },
      validasi: {
        'supplier_name': '',
        'supplier_contact': '',
        'supplier_address': ''
      },
      alert: {
        error: false,
        save: false,
        duplicate: false,
        validate: false
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.save = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/supplier', this.supplier).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 2000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.$swal("Berhasil!", "Data Berhasil Disimpan!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        this.reset();
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    reset: function reset() {
      this.supplier.supplier_name = '';
      this.supplier.supplier_contact = '';
      this.supplier.supplier_address = '';
    },
    validate: function validate() {
      var condition = 0;

      if (this.supplier.supplier_name.length === 0) {
        this.validasi.supplier_name = true;
        condition++;
      } else {
        this.validasi.supplier_name = false;
      }

      if (this.supplier.supplier_contact.length === 0) {
        this.validasi.supplier_contact = true;
        condition++;
      } else {
        this.validasi.supplier_contact = false;
      }

      if (this.supplier.supplier_address.length === 0) {
        this.validasi.supplier_address = true;
        condition++;
      } else {
        this.validasi.supplier_address = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.isLoading = false;
  }
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Nama Supplier *")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.supplier.supplier_name,
                      expression: "supplier.supplier_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.supplier_name },
                  attrs: {
                    type: "text",
                    placeholder: "Masukkan Nama Supplier"
                  },
                  domProps: { value: _vm.supplier.supplier_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.supplier,
                        "supplier_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Kontak *")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.supplier.supplier_contact,
                      expression: "supplier.supplier_contact"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.supplier_contact },
                  attrs: { type: "text", placeholder: "Masukkan Kontak" },
                  domProps: { value: _vm.supplier.supplier_contact },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.supplier,
                        "supplier_contact",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Alamat *")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.supplier.supplier_address,
                      expression: "supplier.supplier_address"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.supplier_address },
                  domProps: { value: _vm.supplier.supplier_address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.supplier,
                        "supplier_address",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "form-group col-md-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Simpan\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { to: { name: "supplier.index" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b2067ae0", module.exports)
  }
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(86)
/* template */
var __vue_template__ = __webpack_require__(87)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/supplier/Update.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43bcabdd", Component.options)
  } else {
    hotAPI.reload("data-v-43bcabdd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      supplier: {},
      alert: {
        error: false,
        update: false,
        validate: false,
        duplicate: false
      },
      validasi: {
        'supplier_name': '',
        'supplier_contact': '',
        'supplier_address': ''
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.update = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].putData('/api/supplier?id=' + this.$route.params.id, this.supplier).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 3000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.getSupplier();
        this.$swal("Berhasil!", "Data Berhasil Diubah!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    validate: function validate() {
      var condition = 0;

      if (this.supplier.supplier_name.length === 0) {
        this.validasi.supplier_name = true;
        condition++;
      } else {
        this.validasi.supplier_name = false;
      }

      if (this.supplier.supplier_contact.length === 0) {
        this.validasi.supplier_contact = true;
        condition++;
      } else {
        this.validasi.supplier_contact = false;
      }

      if (this.supplier.supplier_address.length === 0) {
        this.validasi.supplier_address = true;
        condition++;
      } else {
        this.validasi.supplier_address = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    getSupplier: function getSupplier() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/supplier/' + this.$route.params.id).then(function (response) {
        _this3.supplier = response;
        _this3.isLoading = false;
      })["catch"](function (error) {
        _this3.alert.error = true;
        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.getSupplier();
  }
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Nama Supplier *")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.supplier.supplier_name,
                      expression: "supplier.supplier_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.supplier_name },
                  attrs: {
                    type: "text",
                    placeholder: "Masukkan Nama Supplier"
                  },
                  domProps: { value: _vm.supplier.supplier_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.supplier,
                        "supplier_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Kontak *")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.supplier.supplier_contact,
                      expression: "supplier.supplier_contact"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.supplier_contact },
                  attrs: { type: "text", placeholder: "Masukkan Kontak" },
                  domProps: { value: _vm.supplier.supplier_contact },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.supplier,
                        "supplier_contact",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Alamat *")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.supplier.supplier_address,
                      expression: "supplier.supplier_address"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.supplier_address },
                  domProps: { value: _vm.supplier.supplier_address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.supplier,
                        "supplier_address",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "form-group col-md-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Simpan\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { to: { name: "supplier.index" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-43bcabdd", module.exports)
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(89)
/* template */
var __vue_template__ = __webpack_require__(90)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/category/Category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d283ca0", Component.options)
  } else {
    hotAPI.reload("data-v-2d283ca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d283ca0", module.exports)
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(92)
/* template */
var __vue_template__ = __webpack_require__(93)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/category/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-503a32a0", Component.options)
  } else {
    hotAPI.reload("data-v-503a32a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      category: {},
      search: {
        q: ''
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: ''
    };
  },
  props: ['api', 'route', 'access', 'mobile'],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = '';
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    toggleModal: function toggleModal(id) {
      $("#delete_modal").modal('show');
      this.id = id;
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/category?' + query + '&page=' + this.pagination.page).then(function (response) {
        _this.renderData(response);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    renderData: function renderData(response) {
      if (response.total === 0) {
        this.showTable = false;
        this.alert.empty = true;
        this.alert.error = false;
      } else {
        this.showTable = true;
        this.alert.empty = false;
        this.alert.error = false;
        this.category = response.data;
        this.pagination.last = response.last_page;
        this.pagination.from = response.from;
        this.pagination.to = response.to;
        this.pagination.total = response.total;
      }
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + '=' + _this2.search[key];
      }).join('&');
    },
    deleteData: function deleteData(id) {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].deleteData('/api/category?id=' + id).then(function (response) {
        if (response.status === 'ok') {
          $('#delete_modal').modal('hide');

          _this3.$swal("Berhasil!", "Data Berhasil Dihapus!", "success");

          _this3.fetchData();

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      })["catch"](function (error) {
        $('#delete_modal').modal('hide');

        _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        _this3.fetchData();

        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.fetchData();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c(
        "div",
        { staticClass: "pull-right" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-info mb-2",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggle($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v(" Form Pencarian\n            ")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success mb-2",
              attrs: { to: { name: "category.create" } }
            },
            [
              _c("i", { staticClass: "fa fa-plus" }),
              _vm._v(" Tambah Data\n            ")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showForm,
              expression: "showForm"
            }
          ],
          staticClass: "card",
          staticStyle: { "margin-top": "50px" }
        },
        [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.fetchData()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search.q,
                          expression: "search.q"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Nama Cabang Bisnis"
                      },
                      domProps: { value: _vm.search.q },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.search, "q", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "input-group col-md-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success mr-sm-2",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "submit" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-search" }),
                        _vm._v(" Cari Data\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.clear($event)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-refresh" }),
                        _vm._v(" Reset\n                            ")
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _vm.showTable == true
          ? _c("transition", { attrs: { name: "fade" } }, [
              _vm.mobile === true
                ? _c(
                    "div",
                    _vm._l(_vm.category, function(v) {
                      return _c("div", { key: v.id, staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("table", { staticClass: "table-noborder" }, [
                            _c("tr", [
                              _c("td", [_vm._v("Nama Cabang Bisnis")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.category_name))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "summary" }, [
                            _c(
                              "span",
                              { staticClass: "buttons" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-warning mr-2",
                                    attrs: {
                                      to: {
                                        name: "category.edit",
                                        params: { id: v.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-wrench" }),
                                    _vm._v(
                                      " Ubah\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleModal(v.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-trash" }),
                                    _vm._v(
                                      " Hapus\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                : _c("div", [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        {
                          staticClass:
                            "table table-hover table-striped table-bordered"
                        },
                        [
                          _c("thead", { staticClass: "thead-dark" }, [
                            _c("tr", [
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    width: "75%"
                                  }
                                },
                                [_vm._v("Nama Cabang Bisnis")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    width: "25%"
                                  }
                                },
                                [_vm._v("Action")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.category, function(v) {
                              return _c("tr", { key: v.id }, [
                                _c("td", [_vm._v(_vm._s(v.category_name))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticStyle: { "text-align": "center" } },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning mr-2",
                                          attrs: {
                                            to: {
                                              name: "category.edit",
                                              params: { id: v.id }
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-wrench"
                                          }),
                                          _vm._v(
                                            " Ubah\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-sm btn-danger",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleModal(v.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash-o"
                                          }),
                                          _vm._v(
                                            " Hapus\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    ])
                  ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("v-delete", {
          attrs: { element: "delete_modal", id: _vm.id },
          on: { delete: _vm.deleteData }
        }),
        _vm._v(" "),
        _vm.showTable === true
          ? _c(
              "div",
              { staticClass: "card-footer clearfix" },
              [
                _vm.showTable === true
                  ? _c("v-pagination", {
                      attrs: { pagination: _vm.pagination },
                      on: { next: _vm.nextPage, previous: _vm.prevPage }
                    })
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-503a32a0", module.exports)
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(95)
/* template */
var __vue_template__ = __webpack_require__(96)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/category/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-427f27c4", Component.options)
  } else {
    hotAPI.reload("data-v-427f27c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      category: {
        'category_name': ''
      },
      validasi: {
        'category_name': ''
      },
      alert: {
        error: false,
        save: false,
        duplicate: false,
        validate: false
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.save = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/category', this.category).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 2000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.$swal("Berhasil!", "Data Berhasil Disimpan!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        this.reset();
        setTimeout(function () {
          return _this2.alert.save = false;
        }, 5000);
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    reset: function reset() {
      this.category.category_name = '';
    },
    validate: function validate() {
      var condition = 0;

      if (this.category.category_name.length === 0) {
        this.validasi.category_name = true;
        condition++;
      } else {
        this.validasi.category_name = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.isLoading = false;
  }
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Nama Cabang Bisnis")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.category.category_name,
                      expression: "category.category_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.category_name },
                  attrs: {
                    type: "text",
                    placeholder: "Masukkan Nama Cabang Bisnis"
                  },
                  domProps: { value: _vm.category.category_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.category,
                        "category_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "form-group col-md-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Simpan\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { to: { name: "category.index" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-427f27c4", module.exports)
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(98)
/* template */
var __vue_template__ = __webpack_require__(99)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/category/Update.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b80556b", Component.options)
  } else {
    hotAPI.reload("data-v-7b80556b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      category: {},
      alert: {
        error: false,
        update: false,
        validate: false,
        duplicate: false
      },
      validasi: {
        'category_name': ''
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.update = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].putData('/api/category?id=' + this.$route.params.id, this.category).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 3000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.getCategory();
        this.$swal("Berhasil!", "Data Berhasil Diubah!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        setTimeout(function () {
          return _this2.alert.update = false;
        }, 5000);
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        setTimeout(function () {
          return _this2.alert.update = false;
        }, 5000);
      }
    },
    validate: function validate() {
      var condition = 0;

      if (this.category.category_name.length === 0) {
        this.validasi.category_name = true;
        condition++;
      } else {
        this.validasi.category_name = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    getCategory: function getCategory() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/category/' + this.$route.params.id).then(function (response) {
        _this3.category = response;
        _this3.isLoading = false;
      })["catch"](function (error) {
        _this3.alert.error = true;
        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.getCategory();
  }
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Nama Cabang Bisnis")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.category.category_name,
                      expression: "category.category_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.category_name },
                  attrs: { type: "text" },
                  domProps: { value: _vm.category.category_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.category,
                        "category_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "form-group col-md-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Simpan\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { to: { name: "category.index" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b80556b", module.exports)
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(101)
/* template */
var __vue_template__ = __webpack_require__(102)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/item/Item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ea72b40", Component.options)
  } else {
    hotAPI.reload("data-v-7ea72b40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ea72b40", module.exports)
  }
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(104)
/* template */
var __vue_template__ = __webpack_require__(105)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/item/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af477416", Component.options)
  } else {
    hotAPI.reload("data-v-af477416", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      item: {},
      category: {},
      search: {
        q: "",
        category: ""
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: ""
    };
  },
  props: ["mobile"],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = "";
      this.search.category = "";
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    toggleModal: function toggleModal(id) {
      $("#delete_modal").modal("show");
      this.id = id;
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData("/api/item?" + query + "&page=" + this.pagination.page).then(function (response) {
        _this.renderData(response);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    renderData: function renderData(response) {
      if (response.total === 0) {
        this.showTable = false;
        this.alert.empty = true;
        this.alert.error = false;
      } else {
        this.showTable = true;
        this.alert.empty = false;
        this.alert.error = false;
        this.item = response.data;
        this.pagination.last = response.last_page;
        this.pagination.from = response.from;
        this.pagination.to = response.to;
        this.pagination.total = response.total;
      }
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + "=" + _this2.search[key];
      }).join("&");
    },
    deleteData: function deleteData(id) {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].deleteData("/api/item?id=" + id).then(function (response) {
        if (response.status === 'ok') {
          $('#delete_modal').modal('hide');

          _this3.$swal("Berhasil!", "Data Berhasil Dihapus!", "success");

          _this3.fetchData();

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      })["catch"](function (error) {
        $('#delete_modal').modal('hide');

        _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        _this3.fetchData();

        console.log(error);
      });
    },
    getCategory: function getCategory() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/category?all=true').then(function (response) {
        _this4.category = response;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
    this.fetchData();
  },
  mounted: function mounted() {
    this.getCategory();
    this.fetchData();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c(
        "div",
        { staticClass: "pull-right" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-info mb-2",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggle($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v(" Form Pencarian\n            ")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success mb-2",
              attrs: { to: { name: "item.create" } }
            },
            [
              _c("i", { staticClass: "fa fa-plus" }),
              _vm._v(" Tambah Data\n            ")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showForm,
              expression: "showForm"
            }
          ],
          staticClass: "card",
          staticStyle: { "margin-top": "50px" }
        },
        [
          _c("div", { staticClass: "card-body table-responsive" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.fetchData()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search.q,
                          expression: "search.q"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Kode Barang / Nama Barang"
                      },
                      domProps: { value: _vm.search.q },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.search, "q", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.search.category,
                            expression: "search.category"
                          }
                        ],
                        staticClass: "form-control",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.search,
                              "category",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Pilih Cabang Bisnis")
                        ]),
                        _vm._v(" "),
                        _vm._l(this.category, function(val) {
                          return _c(
                            "option",
                            { key: val.id, domProps: { value: val.id } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(val.category_name) +
                                  "\n                                "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "input-group col-md-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success mr-sm-2",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "submit" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-search" }),
                        _vm._v(" Cari Data\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-info",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.clear($event)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-refresh" }),
                        _vm._v(" Reset\n                            ")
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _vm.showTable == true
          ? _c("div", [
              _vm.mobile === true
                ? _c(
                    "div",
                    _vm._l(_vm.item, function(v) {
                      return _c("div", { key: v.id, staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("table", { staticClass: "table-noborder" }, [
                            _c("tr", [
                              _c("td", [_vm._v("Nama")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.item_name))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Cabang Bisnis")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(v.category.category_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Stok")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.stock))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "summary" }, [
                            _c(
                              "span",
                              { staticClass: "buttons" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-warning mr-2",
                                    attrs: {
                                      to: {
                                        name: "item.edit",
                                        params: { id: v.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-wrench" }),
                                    _vm._v(
                                      " Ubah\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleModal(v.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-trash" }),
                                    _vm._v(
                                      " Hapus\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                : _c("div", { staticClass: "table-responsive" }, [
                    _c("div", [
                      _c(
                        "table",
                        {
                          staticClass: "table table-bordered",
                          staticStyle: { "min-width": "100%" }
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.item, function(v) {
                              return _c("tr", { key: v.id }, [
                                _c("th", { attrs: { scope: "row" } }, [
                                  _vm._v(_vm._s(v.item_name))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(v.category.category_name))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(v.stock))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "text-center" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning mr-2",
                                          attrs: {
                                            to: {
                                              name: "item.edit",
                                              params: { id: v.id }
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-wrench"
                                          }),
                                          _vm._v(
                                            " Ubah\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-sm btn-danger",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleModal(v.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash-o"
                                          }),
                                          _vm._v(
                                            " Hapus\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    ])
                  ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("v-delete", {
          attrs: { element: "delete_modal", id: _vm.id },
          on: { delete: _vm.deleteData }
        }),
        _vm._v(" "),
        _vm.showTable === true
          ? _c(
              "div",
              { staticClass: "card-footer clearfix" },
              [
                _vm.showTable === true
                  ? _c("v-pagination", {
                      attrs: { pagination: _vm.pagination },
                      on: { next: _vm.nextPage, previous: _vm.prevPage }
                    })
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-dark" }, [
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "40%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Nama Barang")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "15%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Cabang Bisnis")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "15%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Stok")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "20%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Tindakan")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-af477416", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(107)
/* template */
var __vue_template__ = __webpack_require__(108)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/item/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ea3e792e", Component.options)
  } else {
    hotAPI.reload("data-v-ea3e792e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      category: {},
      unit: {},
      item: {
        'category_id': '',
        'unit_id': '',
        // 'item_code': '',
        'item_name': '',
        'stock': ''
      },
      validasi: {
        'category_id': '',
        'unit_id': '',
        // 'item_code': '',
        'item_name': ''
      },
      alert: {
        error: false,
        save: false,
        duplicate: false,
        validate: false
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.save = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/item', this.item).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 2000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.$swal("Berhasil!", "Data Berhasil Disimpan!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        this.reset();
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    reset: function reset() {
      this.item.category_id = '';
      this.item.unit_id = ''; // this.item.item_code = '';

      this.item.item_name = '';
      this.item.stock = '';
    },
    validate: function validate() {
      var condition = 0;

      if (this.item.category_id.length === 0) {
        this.validasi.category_id = true;
        condition++;
      } else {
        this.validasi.category_id = false;
      }

      if (this.item.unit_id.length === 0) {
        this.validasi.unit_id = true;
        condition++;
      } else {
        this.validasi.unit_id = false;
      } // if (this.item.item_code.length === 0) {
      //     this.validasi.item_code = true;
      //     condition++;
      // } else {
      //     this.validasi.item_code = false;
      // }


      if (this.item.item_name.length === 0) {
        this.validasi.item_name = true;
        condition++;
      } else {
        this.validasi.item_name = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    getCategory: function getCategory() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/category?all=true').then(function (response) {
        _this3.category = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getUnit: function getUnit() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/unit').then(function (response) {
        _this4.unit = response;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.getCategory();
    this.getUnit();
    this.isLoading = false;
  }
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Cabang Bisnis")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.item.category_id,
                        expression: "item.category_id"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.validasi.category_id },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.item,
                          "category_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Pilih Cabang Bisnis")
                    ]),
                    _vm._v(" "),
                    _vm._l(this.category, function(v) {
                      return _c(
                        "option",
                        { key: v.id, domProps: { value: v.id } },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(v.category_name) +
                              "\n                        "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Nama Barang")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.item.item_name,
                      expression: "item.item_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.item_name },
                  attrs: { type: "text", placeholder: "Masukkan Nama Barang" },
                  domProps: { value: _vm.item.item_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.item, "item_name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Satuan")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.item.unit_id,
                        expression: "item.unit_id"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.validasi.unit_id },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.item,
                          "unit_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Pilih Satuan")
                    ]),
                    _vm._v(" "),
                    _vm._l(this.unit, function(v) {
                      return _c(
                        "option",
                        { key: v.id, domProps: { value: v.id } },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(v.unit_name) +
                              "\n                        "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.item.stock,
                      expression: "item.stock"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Masukkan Jumlah Stok" },
                  domProps: { value: _vm.item.stock },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.item, "stock", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "form-group col-md-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Simpan\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { to: { name: "item.index" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Stok Barang "),
      _c("i", [_c("small", [_vm._v("(opsional)")])])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ea3e792e", module.exports)
  }
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(110)
/* template */
var __vue_template__ = __webpack_require__(111)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/item/Update.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27a0acb6", Component.options)
  } else {
    hotAPI.reload("data-v-27a0acb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      item: {},
      category: {},
      unit: {},
      alert: {
        error: false,
        update: false,
        validate: false,
        duplicate: false
      },
      validasi: {
        'category_id': '',
        'unit_id': '',
        //'item_code': '',
        'item_name': ''
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.update = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].putData('/api/item?id' + this.$route.params.id, this.item).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 3000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.$swal("Berhasil!", "Data Berhasil Diubah!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        setTimeout(function () {
          return _this2.alert.update = false;
        }, 5000);
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        setTimeout(function () {
          return _this2.alert.update = false;
        }, 5000);
      }
    },
    validate: function validate() {
      var condition = 0;

      if (this.item.category_id.length === 0) {
        this.validasi.category_id = true;
        condition++;
      } else {
        this.validasi.category_id = false;
      }

      if (this.item.unit_id.length === 0) {
        this.validasi.unit_id = true;
        condition++;
      } else {
        this.validasi.unit_id = false;
      } // if (this.item.item_code.length === 0) {
      //     this.validasi.item_code = true;
      //     condition++;
      // } else {
      //     this.validasi.item_code = false;
      // }


      if (this.item.item_name.length === 0) {
        this.validasi.item_name = true;
        condition++;
      } else {
        this.validasi.item_name = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    getCategory: function getCategory() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/category?all=true').then(function (response) {
        _this3.category = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getUnit: function getUnit() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/unit').then(function (response) {
        _this4.unit = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getItem: function getItem() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/item/' + this.$route.params.id).then(function (response) {
        _this5.item = response;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
    this.getItem();
    this.getCategory();
    this.getUnit();
  },
  mounted: function mounted() {
    this.isLoading = false;
  }
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Cabang Bisnis")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.item.category_id,
                        expression: "item.category_id"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.validasi.category_id },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.item,
                          "category_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Pilih Cabang Bisnis")
                    ]),
                    _vm._v(" "),
                    _vm._l(this.category, function(v) {
                      return _c(
                        "option",
                        { key: v.id, domProps: { value: v.id } },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(v.category_name) +
                              "\n                        "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Nama Barang")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.item.item_name,
                      expression: "item.item_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.item_name },
                  attrs: { type: "text", placeholder: "Masukkan Nama Barang" },
                  domProps: { value: _vm.item.item_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.item, "item_name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Satuan")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.item.unit_id,
                        expression: "item.unit_id"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.validasi.unit_id },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.item,
                          "unit_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Pilih Satuan")
                    ]),
                    _vm._v(" "),
                    _vm._l(this.unit, function(v) {
                      return _c(
                        "option",
                        { key: v.id, domProps: { value: v.id } },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(v.unit_name) +
                              "\n                        "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.item.stock,
                      expression: "item.stock"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Masukkan Jumlah Stok" },
                  domProps: { value: _vm.item.stock },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.item, "stock", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "form-group col-md-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Simpan Data\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { to: { name: "item.index" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Stok Barang "),
      _c("i", [_c("small", [_vm._v("(opsional)")])])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-27a0acb6", module.exports)
  }
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(113)
/* template */
var __vue_template__ = __webpack_require__(114)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/PO/PO.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-adb339c0", Component.options)
  } else {
    hotAPI.reload("data-v-adb339c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-adb339c0", module.exports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(116)
/* template */
var __vue_template__ = __webpack_require__(117)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/PO/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87a048be", Component.options)
  } else {
    hotAPI.reload("data-v-87a048be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      po: {},
      search: {
        q: ''
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: ''
    };
  },
  props: ['mobile'],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = '';
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/po?user=' + this.userid + '&' + query + '&page=' + this.pagination.page).then(function (response) {
        _this.renderData(response);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    renderData: function renderData(response) {
      if (response.total === 0) {
        this.showTable = false;
        this.alert.empty = true;
        this.alert.error = false;
      } else {
        this.showTable = true;
        this.alert.empty = false;
        this.alert.error = false;
        this.po = response.data;
        this.pagination.last = response.last_page;
        this.pagination.from = response.from;
        this.pagination.to = response.to;
        this.pagination.total = response.total;
      }
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + '=' + _this2.search[key];
      }).join('&');
    }
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(['userid'])),
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.fetchData();
  }
});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c(
        "div",
        { staticClass: "pull-right" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-info mb-2",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggle($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v(" Form Pencarian\n            ")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success mb-2",
              attrs: { to: { name: "po.cart" } }
            },
            [
              _c("i", { staticClass: "fa fa-plus" }),
              _vm._v(" Tambah Data Order\n            ")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showForm,
              expression: "showForm"
            }
          ],
          staticClass: "card",
          staticStyle: { "margin-top": "50px" }
        },
        [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.fetchData()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search.q,
                          expression: "search.q"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Nomor PO" },
                      domProps: { value: _vm.search.q },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.search, "q", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "input-group col-md-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success mr-sm-2",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "submit" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-search" }),
                        _vm._v(" Cari Data\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.clear($event)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-refresh" }),
                        _vm._v(" Reset\n                            ")
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("spinner", { attrs: { active: _vm.isLoading } }),
        _vm._v(" "),
        _vm.showTable == true
          ? _c("transition", { attrs: { name: "fade" } }, [
              _vm.mobile === true
                ? _c(
                    "div",
                    _vm._l(_vm.po, function(v) {
                      return _c("div", { key: v.id, staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("table", { staticClass: "table-noborder" }, [
                            _c("tr", [
                              _c("td", [_vm._v("Nomor")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "po.detail",
                                          params: { id: v.id }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "  \n                                        " +
                                          _vm._s(v.po_number) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Supplier")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(v.supplier.supplier_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Tanggal")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm._f("short_moment")(v.po_date))
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm._f("rupiah")(v.total)))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Status")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                v.status === 0
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-warning",
                                        staticStyle: { padding: "10px" }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-refresh"
                                        }),
                                        _vm._v(
                                          " MENUNGGU\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                v.status === 1
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-success",
                                        staticStyle: { padding: "10px" }
                                      },
                                      [
                                        _c("i", { staticClass: "fa fa-check" }),
                                        _vm._v(
                                          " DIPROSES\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                v.status === 2
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-danger",
                                        staticStyle: { padding: "10px" }
                                      },
                                      [
                                        _c("i", { staticClass: "fa fa-times" }),
                                        _vm._v(
                                          " DIBATALKAN\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                : _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-hover table-striped table-bordered"
                      },
                      [
                        _c("thead", { staticClass: "thead-dark" }, [
                          _c("tr", [
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Nomor PO")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Supplier")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Tanggal")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Total")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Status")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.po, function(v) {
                            return _c("tr", { key: v.id }, [
                              _c(
                                "td",
                                {
                                  staticStyle: { "vertical-align": "middle" },
                                  attrs: { scope: "row" }
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "po.detail",
                                          params: { id: v.id }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "  \n                                    " +
                                          _vm._s(v.po_number) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: { "vertical-align": "middle" },
                                  attrs: { scope: "row" }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(v.supplier.supplier_name)
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(v.supplier.supplier_address)
                                  ),
                                  _c("br")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    "vertical-align": "middle"
                                  },
                                  attrs: { scope: "row" }
                                },
                                [_vm._v(_vm._s(_vm._f("moment")(v.po_date)))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    "text-align": "right",
                                    "vertical-align": "middle"
                                  },
                                  attrs: { scope: "row" }
                                },
                                [_vm._v(_vm._s(_vm._f("rupiah")(v.total)))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    "vertical-align": "middle"
                                  },
                                  attrs: { scope: "row" }
                                },
                                [
                                  v.status === 0
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "badge badge-warning",
                                          staticStyle: { padding: "10px" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-refresh"
                                          }),
                                          _vm._v(
                                            " MENUNGGU\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  v.status === 1
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "badge badge-success",
                                          staticStyle: { padding: "10px" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-check"
                                          }),
                                          _vm._v(
                                            " DIPROSES\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  v.status === 2
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "badge badge-danger",
                                          staticStyle: { padding: "10px" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-times"
                                          }),
                                          _vm._v(
                                            " DIBATALKAN\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showTable === true
          ? _c(
              "div",
              { staticClass: "card-footer clearfix" },
              [
                _vm.showTable === true
                  ? _c("v-pagination", {
                      attrs: { pagination: _vm.pagination },
                      on: { next: _vm.nextPage, previous: _vm.prevPage }
                    })
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-87a048be", module.exports)
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(119)
/* template */
var __vue_template__ = __webpack_require__(120)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/PO/Cart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42af3cbe", Component.options)
  } else {
    hotAPI.reload("data-v-42af3cbe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return _defineProperty({
      cart: {},
      supplier: {},
      item: {},
      cartitem: {
        'item_id': '',
        'quantity': '',
        'price': '',
        'subtotal': ''
      },
      checkout: {
        'supplier_id': '',
        'note': '',
        'po_number': '',
        'po_date': '',
        'total': ''
      },
      validasi_cart: {
        'item_id': '',
        'quantity': '',
        'price': ''
      },
      validasi_checkout: {
        'po_number': '',
        'po_date': '',
        'supplier_id': ''
      },
      alert_page: {
        error: false,
        empty: false,
        "delete": false,
        checkout: false
      },
      alert_modal: {
        error: false,
        validate: false
      },
      alert_cart: {
        error: false,
        save: false,
        duplicate: false,
        validate: false
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: '',
      totalHarga: 0,
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: false,
        locale: 'id'
      },
      userId: ''
    }, "id", '');
  },
  props: ['mobile'],
  methods: {
    calcChanges: function calcChanges() {
      if (this.checkout.paytotal > 0) {
        this.checkout.changes = this.checkout.paytotal - this.totalHarga;
      }
    },
    toggleModal: function toggleModal(id) {
      $("#delete_modal").modal('show');
      this.id = id;
    },
    toggleCheckoutModal: function toggleCheckoutModal() {
      $("#checkout_modal").modal('show');
    },
    toggleCartModal: function toggleCartModal() {
      $("#cart_modal").modal('show');
    },
    fetchData: function fetchData() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/po/cart?user=' + this.userid).then(function (response) {
        _this.totalHarga = 0;

        if (response.length === 0) {
          _this.showTable = false;
          _this.alert_page.empty = true;
          _this.alert_page.error = false;
        } else {
          _this.showTable = true;
          _this.alert_page.empty = false;
          _this.alert_page.error = false;
          _this.cart = response;

          if (_this.cart.length > 0) {
            for (var i = 0; i < _this.cart.length; i++) {
              _this.totalHarga += _this.cart[i].subtotal;
            }
          }
        }

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.save = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    clearCartAlert: function clearCartAlert() {
      this.alert_cart.error = false;
      this.alert_cart.save = false;
      this.alert_cart.duplicate = false;
      this.alert_cart.validate = false;
    },
    deleteData: function deleteData(id) {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].deleteData('/api/po/cart?id=' + id).then(function (response) {
        if (response.status === 'ok') {
          _this2.$swal("Berhasil!", "Proses Hapus Data Berhasil!", "success");

          $('#delete_modal').modal('hide');
          setTimeout(function () {
            return _this2.fetchData();
          }, 1000);
        }
      })["catch"](function (error) {
        $('#delete_modal').modal('hide');

        _this2.$swal("Terjadi Kesalahan!", "Silahkan ulangi kembali!", "error");

        setTimeout(function () {
          return _this2.fetchData();
        }, 1000);
        console.log(error);
      });
    },
    checkOutCart: function checkOutCart() {
      var _this3 = this;

      var validasi_checkout = this.validate_checkout();

      if (validasi_checkout === true) {
        this.checkout.total = this.totalHarga;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/po/checkout?user=' + this.userid, this.checkout).then(function (response) {
          if (response.status === 'ok') {
            $('#checkout_modal').modal('hide');

            _this3.$swal("Berhasil!", "Proses Pembuatan Order Berhasil!", "success");

            _this3.$router.push({
              name: 'po.detail',
              params: {
                id: response.order_id
              }
            });
          }
        })["catch"](function (error) {
          _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          console.log(error);
        });
      } else {
        this.alert_modal.validate = true;
        setTimeout(function () {
          return _this3.alert_modal.validate = false;
        }, 3000);
      }
    },
    addCartItem: function addCartItem() {
      var _this4 = this;

      this.clearCartAlert();
      var validasi_cart = this.validate_cart();

      if (validasi_cart === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/po/cart?user=' + this.userid, this.cartitem).then(function (result) {
          setTimeout(function () {
            _this4.isLoading = false;
          }, 1000);

          if (result.status === 'ok') {
            _this4.resetCart();

            $('#cart_modal').modal('hide');

            _this4.$swal("Berhasil!", "Proses Simpan Data Berhasil!", "success");

            setTimeout(function () {
              return _this4.fetchData();
            }, 1000);
          } else if (result.status === 'duplicate') {
            _this4.$swal("Terduplikasi!", "Data Yang Sama Sudah Tersimpan Dalam Record Sebelumnya!", "warning");
          }
        })["catch"](function (error) {
          _this4.isLoading = false;

          _this4.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          console.log(error);
        });
      } else {
        this.alert_cart.validate = true;
        setTimeout(function () {
          return _this4.alert_cart.validate = false;
        }, 3000);
      }
    },
    validate_checkout: function validate_checkout() {
      var condition = 0;

      if (this.checkout.supplier_id.length === 0) {
        this.validasi_checkout.supplier_id = true;
        condition++;
      } else {
        this.validasi_checkout.supplier_id = false;
      }

      if (this.checkout.po_number.length === 0) {
        this.validasi_checkout.po_number = true;
        condition++;
      } else {
        this.validasi_checkout.po_number = false;
      }

      if (this.checkout.po_date.length === 0) {
        this.validasi_checkout.po_date = true;
        condition++;
      } else {
        this.validasi_checkout.po_date = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    validate_cart: function validate_cart() {
      var condition = 0;

      if (this.cartitem.item_id.length === 0) {
        this.validasi_cart.item_id = true;
        condition++;
      } else {
        this.validasi_cart.item_id = false;
      }

      if (this.cartitem.quantity.length === 0) {
        this.validasi_cart.quantity = true;
        condition++;
      } else {
        this.validasi_cart.quantity = false;
      }

      if (this.cartitem.price.length === 0) {
        this.validasi_cart.price = true;
        condition++;
      } else {
        this.validasi_cart.price = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    calcTotal: function calcTotal() {
      this.cartitem.subtotal = this.cartitem.price * this.cartitem.quantity;
    },
    resetCart: function resetCart() {
      this.cartitem.item_id = '';
      this.cartitem.quantity = '';
      this.cartitem.price = '';
      this.cartitem.subtotal = '';
    },
    getSupplier: function getSupplier() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/supplier?all=true').then(function (response) {
        _this5.supplier = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getItem: function getItem() {
      var _this6 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/item?all=true').then(function (response) {
        _this6.item = response;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(['userid'])),
  created: function created() {
    this.isLoading = true;
    this.getItem();
    this.getSupplier();
    this.fetchData();
  },
  mounted: function mounted() {
    var _this7 = this;

    __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/ajax/ponumber').then(function (response) {
      _this7.checkout.po_number = response;
    })["catch"](function (error) {
      _this7.alert_modal.error = true;
      console.log(error);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "pull-right" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-success mb-2",
            class: { "btn-block": _vm.mobile === true },
            attrs: { href: "#" },
            on: { click: _vm.toggleCartModal }
          },
          [
            _c("i", { staticClass: "fa fa-plus" }),
            _vm._v(" Tambah Barang Ke Keranjang\n            ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert_page } }),
        _vm._v(" "),
        _c("spinner", { attrs: { active: _vm.isLoading } }),
        _vm._v(" "),
        _vm.showTable == true
          ? _c("transition", { attrs: { name: "fade" } }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("thead", { staticClass: "thead-dark" }, [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "30%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Barang")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "10%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Harga")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "5%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Jumlah")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "10%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Subtotal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "5%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Action")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.cart, function(v) {
                        return _c("tr", { key: v.id }, [
                          _c("td", { attrs: { scope: "col" } }, [
                            _vm._v(_vm._s(v.item.item_name))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: { "text-align": "right" },
                              attrs: { scope: "col" }
                            },
                            [_vm._v(_vm._s(_vm._f("rupiah")(v.price)))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: { "text-align": "center" },
                              attrs: { scope: "col" }
                            },
                            [
                              _vm._v(
                                _vm._s(v.quantity) +
                                  " " +
                                  _vm._s(v.item.unit.unit_name)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: { "text-align": "right" },
                              attrs: { scope: "col" }
                            },
                            [_vm._v(_vm._s(_vm._f("rupiah")(v.subtotal)))]
                          ),
                          _vm._v(" "),
                          _c("td", { attrs: { scope: "col" } }, [
                            _c(
                              "div",
                              { staticStyle: { "text-align": "center" } },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-xs btn-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleModal(v.id)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                )
                              ]
                            )
                          ])
                        ])
                      }),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: { "text-align": "right" },
                            attrs: { colspan: "3" }
                          },
                          [_c("b", [_vm._v("Total Harga")])]
                        ),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "right" } }, [
                          _c("b", [
                            _vm._v(_vm._s(_vm._f("rupiah")(_vm.totalHarga)))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td")
                      ])
                    ],
                    2
                  )
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showTable == true
          ? _c(
              "span",
              [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-warning",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { href: "#" },
                    on: { click: _vm.toggleCheckoutModal }
                  },
                  [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Buat Order\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { to: { name: "po.index" } }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-left" }),
                    _vm._v(" Kembali\n            ")
                  ]
                )
              ],
              1
            )
          : _c(
              "span",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { to: { name: "po.index" } }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-left" }),
                    _vm._v(" Kembali\n            ")
                  ]
                )
              ],
              1
            ),
        _vm._v(" "),
        _c("v-delete", {
          attrs: { element: "delete_modal", id: _vm.id },
          on: { delete: _vm.deleteData }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "checkout_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [
                      _c("v-alert", { attrs: { alert: _vm.alert_modal } }),
                      _vm._v(" "),
                      _c("form", { attrs: { method: "POST" } }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Nomor PO")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkout.po_number,
                                  expression: "checkout.po_number"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.validasi_checkout.po_number
                              },
                              attrs: {
                                readonly: "readonly",
                                placeholder: "Masukkan Nomor PO"
                              },
                              domProps: { value: _vm.checkout.po_number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.checkout,
                                    "po_number",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12" },
                            [
                              _c("label", [_vm._v("Tanggal PO")]),
                              _vm._v(" "),
                              _c("date-picker", {
                                staticClass: "form-control",
                                attrs: {
                                  config: _vm.options,
                                  placeholder: "Tanggal Purchase Order",
                                  autocomplete: "off"
                                },
                                model: {
                                  value: _vm.checkout.po_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.checkout, "po_date", $$v)
                                  },
                                  expression: "checkout.po_date"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Supplier / Penjual")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.checkout.supplier_id,
                                    expression: "checkout.supplier_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid":
                                    _vm.validasi_checkout.supplier_id
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.checkout,
                                      "supplier_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Pilih Supplier / Penjual")
                                ]),
                                _vm._v(" "),
                                _vm._l(this.supplier, function(v) {
                                  return _c(
                                    "option",
                                    { key: v.id, domProps: { value: v.id } },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(v.supplier_name) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Keterangan")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkout.note,
                                  expression: "checkout.note"
                                }
                              ],
                              staticClass: "form-control",
                              domProps: { value: _vm.checkout.note },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.checkout,
                                    "note",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12" },
                            [
                              _c("label", [_vm._v("Total Harga")]),
                              _vm._v(" "),
                              _c("money", {
                                staticClass: "form-control",
                                attrs: { readonly: "readonly" },
                                model: {
                                  value: _vm.totalHarga,
                                  callback: function($$v) {
                                    _vm.totalHarga = $$v
                                  },
                                  expression: "totalHarga"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.checkOutCart()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-shopping-cart" }),
                                _vm._v(
                                  "\n                                        Selesaikan Order\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal"
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-times" }),
                                _vm._v(
                                  " Batal\n                                    "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" })
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "cart_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [
                      _c("v-alert", { attrs: { alert: _vm.alert_cart } }),
                      _vm._v(" "),
                      _c("form", { attrs: { method: "POST" } }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-12" }, [
                            _c("label", [_vm._v("Barang")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.cartitem.item_id,
                                    expression: "cartitem.item_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.validasi_cart.item_id
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.cartitem,
                                      "item_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Pilih Barang")
                                ]),
                                _vm._v(" "),
                                _vm._l(this.item, function(v) {
                                  return _c(
                                    "option",
                                    { key: v.id, domProps: { value: v.id } },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(v.item_name) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-12" },
                            [
                              _c("label", [_vm._v("Harga Satuan")]),
                              _vm._v(" "),
                              _c("money", {
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.validasi_cart.price
                                },
                                attrs: { placeholder: "Masukkan Harga" },
                                on: { input: _vm.calcTotal },
                                model: {
                                  value: _vm.cartitem.price,
                                  callback: function($$v) {
                                    _vm.$set(_vm.cartitem, "price", $$v)
                                  },
                                  expression: "cartitem.price"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-12" }, [
                            _c("label", [_vm._v("Jumlah")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.cartitem.quantity,
                                  expression: "cartitem.quantity"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.validasi_cart.quantity
                              },
                              attrs: {
                                type: "number",
                                placeholder: "Masukkan Jumlah Pembelian"
                              },
                              domProps: { value: _vm.cartitem.quantity },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.cartitem,
                                      "quantity",
                                      $event.target.value
                                    )
                                  },
                                  _vm.calcTotal
                                ]
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-12" },
                            [
                              _c("label", [_vm._v("Total Harga *")]),
                              _vm._v(" "),
                              _c("money", {
                                staticClass: "form-control",
                                attrs: { readonly: "readonly" },
                                model: {
                                  value: _vm.cartitem.subtotal,
                                  callback: function($$v) {
                                    _vm.$set(_vm.cartitem, "subtotal", $$v)
                                  },
                                  expression: "cartitem.subtotal"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.addCartItem()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-save" }),
                                _vm._v(
                                  " Simpan Data\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal"
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-times" }),
                                _vm._v(
                                  " Batal\n                                    "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" })
                ])
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Form Order")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Form Keranjang Belanja")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-42af3cbe", module.exports)
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(122)
/* template */
var __vue_template__ = __webpack_require__(123)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/PO/Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-621ea812", Component.options)
  } else {
    hotAPI.reload("data-v-621ea812", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      po: {},
      paymentmethod: {},
      id: '',
      isLoading: false,
      saldo: 0,
      showForm: false,
      showTable: false,
      alert: {
        empty: false,
        error: false
      },
      alert_modal: {
        error: false,
        validate: false
      },
      checkout: {
        'note': '',
        'invoice_number': '',
        'invoice_date': '',
        'total': '',
        'payment_method_id': '',
        'payment_duration': '7'
      },
      validasi: {
        'po_number': '',
        'po_date': '',
        'supplier_id': ''
      },
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: true,
        locale: 'id'
      },
      userId: '',
      itemId: ''
    };
  },
  props: ['mobile'],
  methods: {
    getPO: function getPO() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/po/show/' + this.$route.params.id).then(function (response) {
        _this.po = response;
        _this.podetail = _this.po.detail;
        _this.checkout.total = _this.po.total;

        if (_this.podetail.length < 1) {
          _this.alert.empty = true;
          _this.showTable = false;
        } else {
          _this.showTable = true;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getPaymentMethod: function getPaymentMethod() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/paymentmethod').then(function (response) {
        _this2.paymentmethod = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cetakInvoice: function cetakInvoice(id) {
      var newWindow = window.open();
      newWindow.location = '';
    },
    toggleApprovalModal: function toggleApprovalModal() {
      $("#approval_modal").modal('show');
    },
    toggleRejectModal: function toggleRejectModal() {
      $("#reject_modal").modal('show');
    },
    toggleCancelItemModal: function toggleCancelItemModal(id) {
      this.itemId = id;
      $("#cancel_item_modal").modal('show');
    },
    isReject: function isReject(status) {
      if (status === 2) {
        return true;
      } else {
        return false;
      }
    },
    generateInvoice: function generateInvoice() {
      var _this3 = this;

      var validasi = this.validate();

      if (validasi === true) {
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/po/generateinvoice?id=' + this.po.id, this.checkout).then(function (response) {
          if (response.status === 'ok') {
            $('#approval_modal').modal('hide');

            _this3.$swal("Berhasil!", "Proses Pembuatan Invoice Berhasil!", "success");

            _this3.$router.push({
              name: 'poinvoice.detail',
              params: {
                id: response.invoice_id
              }
            });
          }
        })["catch"](function (error) {
          _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          console.log(error);
        });
      } else {
        this.alert_modal.validate = true;
        setTimeout(function () {
          return _this3.alert_modal.validate = false;
        }, 5000);
      }
    },
    rejectOrder: function rejectOrder() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/po/rejectpo?id=' + this.po.id).then(function (response) {
        if (response.status === 'ok') {
          $('#reject_modal').modal('hide');

          _this4.$swal("Berhasil!", "PO Berhasil Dibatalkan!", "success");

          setTimeout(function () {
            return _this4.getPO();
          }, 1000);
        }
      })["catch"](function (error) {
        _this4.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

        console.log(error);
      });
    },
    rejectItem: function rejectItem() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/po/rejectitem?item=' + this.itemId).then(function (response) {
        if (response.status === 'ok') {
          $('#cancel_item_modal').modal('hide');

          _this5.$swal("Berhasil!", "Proses Pembatalan Barang Berhasil!", "success");

          setTimeout(function () {
            return _this5.getPO();
          }, 1000);
        }
      })["catch"](function (error) {
        $('#cancel_item_modal').modal('hide');

        _this5.$swal("Terjadi Kesalahan!", "Silahkan ulangi kembali!", "error");

        console.log(error);
      });
    },
    validate: function validate() {
      var condition = 0;

      if (this.checkout.invoice_number.length === 0) {
        this.validasi.invoice_number = true;
        condition++;
      } else {
        this.validasi.invoice_number = false;
      }

      if (this.checkout.invoice_date.length === 0) {
        this.validasi.invoice_date = true;
        condition++;
      } else {
        this.validasi.invoice_date = false;
      }

      if (this.checkout.payment_method_id.length === 0) {
        this.validasi.payment_method_id = true;
        condition++;
      } else {
        this.validasi.payment_method_id = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function created() {
    this.isLoading = true;
    this.getPO();
    this.getPaymentMethod();
  },
  mounted: function mounted() {
    var _this6 = this;

    __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/ajax/poinvoice').then(function (response) {
      _this6.checkout.invoice_number = response;
      _this6.isLoading = false;
    })["catch"](function (error) {
      _this6.alert_modal.error = true;
      console.log(error);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("spinner", { attrs: { active: _vm.isLoading } }),
        _vm._v(" "),
        !_vm.isLoading
          ? _c("table", { staticClass: "table table-bordered" }, [
              _c("tbody", [
                _c("tr", [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "85%" } }, [
                    _vm._v(_vm._s(_vm.po.po_number))
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "85%" } }, [
                    _vm._v(_vm._s(_vm._f("moment")(_vm.po.po_date)))
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "85%" } }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.po.supplier.supplier_name)
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.po.supplier.supplier_address)
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.po.supplier.supplier_contact) +
                        "\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "85%" } }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.po.user.username) +
                        "\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.po.note !== null
                  ? _c("tr", [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("td", { staticStyle: { width: "85%" } }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.po.note) +
                            "\n                    "
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticStyle: { "margin-top": "25px" } }),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("v-alert", { attrs: { alert: _vm.alert } }),
              _vm._v(" "),
              _vm.showTable == true
                ? _c("transition", { attrs: { name: "fade" } }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover table-bordered" },
                        [
                          _c("thead", { staticClass: "thead-dark" }, [
                            _c("tr", [
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "30%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Barang")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "10%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Harga")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "5%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Jumlah")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "10%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Subtotal")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "5%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Tindakan")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            [
                              _vm._l(_vm.podetail, function(v) {
                                return _c(
                                  "tr",
                                  {
                                    key: v.id,
                                    class: {
                                      "table-warning": _vm.isReject(v.status)
                                    }
                                  },
                                  [
                                    _c("td", [
                                      _vm._v(_vm._s(v.item.item_name)),
                                      _vm.isReject(v.status)
                                        ? _c("span", [
                                            _vm._v(" "),
                                            _c("i", [_vm._v("(Dibatalkan)")])
                                          ])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm._f("rupiah")(v.price))
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "center" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(v.quantity) +
                                            " " +
                                            _vm._s(v.item.unit.unit_name)
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm._f("rupiah")(v.subtotal))
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "center" }
                                      },
                                      [
                                        v.status === 0 && _vm.po.status === 0
                                          ? _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-danger",
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.toggleCancelItemModal(
                                                      v.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-times"
                                                })
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        v.status === 0 && _vm.po.status === 1
                                          ? _c("span", [
                                              _c("i", {
                                                staticClass: "fa fa-check"
                                              })
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        v.status === 2
                                          ? _c("span", [
                                              _c("i", {
                                                staticClass: "fa fa-archive"
                                              })
                                            ])
                                          : _vm._e()
                                      ]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticStyle: { "text-align": "right" },
                                    attrs: { colspan: "3" }
                                  },
                                  [_c("b", [_vm._v("Total Harga")])]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticStyle: { "text-align": "right" } },
                                  [
                                    _c("b", [
                                      _vm._v(
                                        _vm._s(_vm._f("rupiah")(_vm.po.total))
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td")
                              ])
                            ],
                            2
                          )
                        ]
                      )
                    ])
                  ])
                : _vm._e()
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm.po.status === 0
          ? _c(
              "span",
              [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-success",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.toggleApprovalModal(_vm.po.id)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-check" }),
                    _vm._v(" Proses Order\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-danger",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.toggleRejectModal(_vm.po.id)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-times" }),
                    _vm._v(" Batalkan Order\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { to: { name: "po.index" } }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-left" }),
                    _vm._v(" Kembali\n            ")
                  ]
                )
              ],
              1
            )
          : _c(
              "span",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { to: { name: "po.index" } }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-left" }),
                    _vm._v(" Kembali\n            ")
                  ]
                )
              ],
              1
            ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "approval_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [
                      _c("v-alert", { attrs: { alert: _vm.alert_modal } }),
                      _vm._v(" "),
                      _c("form", { attrs: { method: "POST" } }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Nomor Invoice *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkout.invoice_number,
                                  expression: "checkout.invoice_number"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.validasi.invoice_number
                              },
                              attrs: {
                                placeholder: "Masukkan Nomor Invoice",
                                readonly: "readonly"
                              },
                              domProps: { value: _vm.checkout.invoice_number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.checkout,
                                    "invoice_number",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Tanggal Invoice *")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "input-group" },
                              [
                                _vm._m(6),
                                _vm._v(" "),
                                _c("date-picker", {
                                  staticClass: "form-control",
                                  attrs: {
                                    config: _vm.options,
                                    placeholder: "Tanggal Invoice",
                                    autocomplete: "off"
                                  },
                                  model: {
                                    value: _vm.checkout.invoice_date,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.checkout,
                                        "invoice_date",
                                        $$v
                                      )
                                    },
                                    expression: "checkout.invoice_date"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Metode Pembayaran *")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.checkout.payment_method_id,
                                    expression: "checkout.payment_method_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.validasi.payment_method_id
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.checkout,
                                      "payment_method_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Pilih Metode Pembayaran")
                                ]),
                                _vm._v(" "),
                                _vm._l(this.paymentmethod, function(v) {
                                  return _c(
                                    "option",
                                    { key: v.id, domProps: { value: v.id } },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(v.name) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.checkout.payment_method_id === 2
                          ? _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c("label", [_vm._v("Durasi Pembayaran *")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.checkout.payment_duration,
                                          expression:
                                            "checkout.payment_duration"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.checkout,
                                            "payment_duration",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "7", selected: "" } },
                                        [_vm._v("7 Hari Kerja")]
                                      ),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "14" } }, [
                                        _vm._v("14 Hari Kerja")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "30" } }, [
                                        _vm._v("30 Hari Kerja")
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Keterangan")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkout.note,
                                  expression: "checkout.note"
                                }
                              ],
                              staticClass: "form-control",
                              domProps: { value: _vm.checkout.note },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.checkout,
                                    "note",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12" },
                            [
                              _c("label", [_vm._v("Total Harga *")]),
                              _vm._v(" "),
                              _c("money", {
                                staticClass: "form-control",
                                attrs: { readonly: "readonly" },
                                model: {
                                  value: _vm.checkout.total,
                                  callback: function($$v) {
                                    _vm.$set(_vm.checkout, "total", $$v)
                                  },
                                  expression: "checkout.total"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.generateInvoice()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-shopping-cart" }),
                                _vm._v(
                                  " Proses Invoice\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal"
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-times" }),
                                _vm._v(
                                  " Batal\n                                    "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" })
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "cancel_item_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.rejectItem }
                      },
                      [
                        _c("i", { staticClass: "fa fa-check-circle-o" }),
                        _vm._v(" Ya\n                        ")
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(9)
                  ])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "reject_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(10),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.rejectOrder }
                      },
                      [
                        _c("i", { staticClass: "fa fa-check-circle-o" }),
                        _vm._v(" Ya\n                        ")
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(12)
                  ])
                ])
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "15%" } }, [
      _c("b", [_vm._v("Nomor PO")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "15%" } }, [
      _c("b", [_vm._v("Tanggal PO")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "15%" } }, [
      _c("b", [_vm._v("Supplier")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "15%" } }, [
      _c("b", [_vm._v("PIC")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "15%" } }, [
      _c("b", [_vm._v("Keterangan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Form Invoice")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-calendar" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Konfirmasi Pembatalan Barang")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("p", [_vm._v("Anda Akan Membatalkan Barang Ini, Teruskan?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _c("i", { staticClass: "fa fa-times-circle-o" }),
        _vm._v(" Batal\n                        ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Konfirmasi Pembatalan Order")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("p", [_vm._v("Anda Akan Membatalkan Order Ini, Teruskan?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _c("i", { staticClass: "fa fa-times-circle-o" }),
        _vm._v(" Batal\n                        ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-621ea812", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(125)
/* template */
var __vue_template__ = __webpack_require__(126)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/SO/SO.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b123a00", Component.options)
  } else {
    hotAPI.reload("data-v-6b123a00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b123a00", module.exports)
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(128)
/* template */
var __vue_template__ = __webpack_require__(129)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/SO/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59766884", Component.options)
  } else {
    hotAPI.reload("data-v-59766884", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      so: {},
      search: {
        q: ''
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: ''
    };
  },
  props: ['mobile'],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = '';
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/so?user=' + this.userid + '&' + query + '&page=' + this.pagination.page).then(function (ressonse) {
        _this.renderData(ressonse);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    renderData: function renderData(ressonse) {
      if (ressonse.total === 0) {
        this.showTable = false;
        this.alert.empty = true;
        this.alert.error = false;
      } else {
        this.showTable = true;
        this.alert.empty = false;
        this.alert.error = false;
        this.so = ressonse.data;
        this.pagination.last = ressonse.last_page;
        this.pagination.from = ressonse.from;
        this.pagination.to = ressonse.to;
        this.pagination.total = ressonse.total;
      }
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + '=' + _this2.search[key];
      }).join('&');
    }
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(['userid'])),
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.fetchData();
  }
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c(
        "div",
        { staticClass: "pull-right" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-info mb-2",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggle($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v(" Form Pencarian\n            ")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success mb-2",
              attrs: { to: { name: "so.cart" } }
            },
            [
              _c("i", { staticClass: "fa fa-plus" }),
              _vm._v(" Tambah Data Order\n            ")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showForm,
              expression: "showForm"
            }
          ],
          staticClass: "card",
          staticStyle: { "margin-top": "50px" }
        },
        [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.fetchData()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search.q,
                          expression: "search.q"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Nomor Order" },
                      domProps: { value: _vm.search.q },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.search, "q", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "input-group col-md-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success mr-sm-2",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "submit" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-search" }),
                        _vm._v(" Cari Data\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.clear($event)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-refresh" }),
                        _vm._v(" Reset\n                            ")
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("spinner", { attrs: { active: _vm.isLoading } }),
        _vm._v(" "),
        _vm.showTable == true
          ? _c("transition", { attrs: { name: "fade" } }, [
              _vm.mobile === true
                ? _c(
                    "div",
                    _vm._l(_vm.so, function(v) {
                      return _c("div", { key: v.id, staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("table", { staticClass: "table-noborder" }, [
                            _c("tr", [
                              _c("td", [_vm._v("Nomor")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "so.detail",
                                          params: { id: v.id }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "  \n                                        " +
                                          _vm._s(v.so_number) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Customer")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(v.customer.customer_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Tanggal")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm._f("short_moment")(v.so_date))
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm._f("rupiah")(v.total)))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Status")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                v.status === 0
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-warning",
                                        staticStyle: { padding: "10px" }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-refresh"
                                        }),
                                        _vm._v(
                                          " MENUNGGU\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                v.status === 1
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-success",
                                        staticStyle: { padding: "10px" }
                                      },
                                      [
                                        _c("i", { staticClass: "fa fa-check" }),
                                        _vm._v(
                                          " DIPROSES\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                v.status === 2
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-danger",
                                        staticStyle: { padding: "10px" }
                                      },
                                      [
                                        _c("i", { staticClass: "fa fa-times" }),
                                        _vm._v(
                                          " DIBATALKAN\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                : _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-hover table-striped table-bordered"
                      },
                      [
                        _c("thead", { staticClass: "thead-dark" }, [
                          _c("tr", [
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Nomor Order")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Customer")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Tanggal")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Total")]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "text-align": "center" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Status")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.so, function(v) {
                            return _c("tr", { key: v.id }, [
                              _c(
                                "td",
                                {
                                  staticStyle: { "vertical-align": "middle" },
                                  attrs: { scope: "row" }
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "so.detail",
                                          params: { id: v.id }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "  \n                                    " +
                                          _vm._s(v.so_number) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: { "vertical-align": "middle" },
                                  attrs: { scope: "row" }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(v.customer.customer_name)
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(v.customer.customer_address)
                                  ),
                                  _c("br")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    "vertical-align": "middle"
                                  },
                                  attrs: { scope: "row" }
                                },
                                [_vm._v(_vm._s(_vm._f("moment")(v.so_date)))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    "text-align": "right",
                                    "vertical-align": "middle"
                                  },
                                  attrs: { scope: "row" }
                                },
                                [_vm._v(_vm._s(_vm._f("rupiah")(v.total)))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    "vertical-align": "middle"
                                  },
                                  attrs: { scope: "row" }
                                },
                                [
                                  v.status === 0
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "badge badge-warning",
                                          staticStyle: { padding: "10px" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-refresh"
                                          }),
                                          _vm._v(
                                            " MENUNGGU\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  v.status === 1
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "badge badge-success",
                                          staticStyle: { padding: "10px" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-check"
                                          }),
                                          _vm._v(
                                            " DIPROSES\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  v.status === 2
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "badge badge-danger",
                                          staticStyle: { padding: "10px" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-times"
                                          }),
                                          _vm._v(
                                            " DIBATALKAN\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showTable === true
          ? _c(
              "div",
              { staticClass: "card-footer clearfix" },
              [
                _vm.showTable === true
                  ? _c("v-pagination", {
                      attrs: { pagination: _vm.pagination },
                      on: { next: _vm.nextPage, previous: _vm.prevPage }
                    })
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59766884", module.exports)
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(131)
/* template */
var __vue_template__ = __webpack_require__(132)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/SO/Cart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5530c38", Component.options)
  } else {
    hotAPI.reload("data-v-c5530c38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cart: [],
      customer: {},
      item: {},
      cartitem: {
        'item_id': '',
        'quantity': '',
        'price': '',
        'subtotal': ''
      },
      checkout: {
        'customer_id': '',
        'note': '',
        'so_number': '',
        'so_date': '',
        'total': ''
      },
      validasi_cart: {
        'item_id': '',
        'quantity': '',
        'price': ''
      },
      validasi_checkout: {
        'so_number': '',
        'so_date': '',
        'customer_id': ''
      },
      alert_page: {
        error: false,
        empty: false,
        "delete": false,
        checkout: false
      },
      alert_modal: {
        error: false,
        validate: false
      },
      alert_cart: {
        error: false,
        save: false,
        duplicate: false,
        validate: false
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: '',
      totalHarga: 0,
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: false,
        locale: 'id'
      }
    };
  },
  props: ['mobile'],
  methods: {
    calcChanges: function calcChanges() {
      if (this.checkout.paytotal > 0) {
        this.checkout.changes = this.checkout.paytotal - this.totalHarga;
      }
    },
    toggleModal: function toggleModal(id) {
      $("#delete_modal").modal('show');
      this.id = id;
    },
    toggleCheckoutModal: function toggleCheckoutModal() {
      $("#checkout_modal").modal('show');
    },
    toggleCartModal: function toggleCartModal() {
      $("#cart_modal").modal('show');
    },
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.save = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    clearCartAlert: function clearCartAlert() {
      this.alert_cart.error = false;
      this.alert_cart.save = false;
      this.alert_cart.duplicate = false;
      this.alert_cart.validate = false;
    },
    getCart: function getCart() {
      var _this = this;

      this.totalHarga = 0;
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/so/cart?user=' + this.userid).then(function (response) {
        if (response.length < 1) {
          _this.showTable = false;
          _this.alert_page.empty = true;
          _this.alert_page.error = false;
        } else {
          _this.showTable = true;
          _this.alert_page.empty = false;
          _this.alert_page.error = false;
          _this.cart = response;

          if (_this.cart.length > 0) {
            for (var i = 0; i < _this.cart.length; i++) {
              _this.totalHarga += _this.cart[i].subtotal;
            }
          }
        }

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    deleteData: function deleteData(id) {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].deleteData('/api/so/cart?id=' + id).then(function (response) {
        if (response.status === 'ok') {
          $('#delete_modal').modal('hide');

          _this2.$swal("Berhasil!", "Barang Berhasil Dihapus Dari Keranjang Belanja!", "success");

          setTimeout(function () {
            return _this2.getCart();
          }, 1000);
        }
      })["catch"](function (error) {
        $('#delete_modal').modal('hide');

        _this2.$swal("Terjadi Kesalahan!", "Silahkan ulangi kembali!", "error");

        setTimeout(function () {
          return _this2.getCart();
        }, 1000);
        console.log(error);
      });
    },
    checkOutCart: function checkOutCart() {
      var _this3 = this;

      var validasi_checkout = this.validate_checkout();

      if (validasi_checkout === true) {
        this.checkout.total = this.totalHarga;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/so/checkout?user=' + this.userid, this.checkout).then(function (response) {
          if (response.status === 'ok') {
            $('#checkout_modal').modal('hide');

            _this3.$swal("Berhasil!", "Proses Pembuatan SO Berhasil!", "success");

            _this3.$router.push({
              name: 'so.detail',
              params: {
                id: response.order_id
              }
            });
          }
        })["catch"](function (error) {
          _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          console.log(error);
        });
      } else {
        this.alert_modal.validate = true;
        setTimeout(function () {
          return _this3.alert_modal.validate = false;
        }, 3000);
      }
    },
    addCartItem: function addCartItem() {
      var _this4 = this;

      this.clearCartAlert();
      var validasi_cart = this.validate_cart();

      if (validasi_cart === true) {
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/so/cart?user=' + this.userid, this.cartitem).then(function (result) {
          if (result.status === 'ok') {
            _this4.resetCart();

            $('#cart_modal').modal('hide');

            _this4.$swal("Berhasil!", "Proses Simpan Data Berhasil!", "success");

            setTimeout(function () {
              return _this4.getCart();
            }, 1000);
          } else if (result.status === 'duplicate') {
            _this4.$swal("Terduplikasi!", "Data Yang Sama Sudah Tersimpan Dalam Record Sebelumnya!", "warning");
          }
        })["catch"](function (error) {
          _this4.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          console.log(error);
        });
      } else {
        this.alert_cart.validate = true;
        setTimeout(function () {
          return _this4.alert_cart.validate = false;
        }, 3000);
      }
    },
    validate_checkout: function validate_checkout() {
      var condition = 0;

      if (this.checkout.customer_id.length === 0) {
        this.validasi_checkout.customer_id = true;
        condition++;
      } else {
        this.validasi_checkout.customer_id = false;
      }

      if (this.checkout.so_number.length === 0) {
        this.validasi_checkout.so_number = true;
        condition++;
      } else {
        this.validasi_checkout.so_number = false;
      }

      if (this.checkout.so_date.length === 0) {
        this.validasi_checkout.so_date = true;
        condition++;
      } else {
        this.validasi_checkout.so_date = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    validate_cart: function validate_cart() {
      var condition = 0;

      if (this.cartitem.item_id.length === 0) {
        this.validasi_cart.item_id = true;
        condition++;
      } else {
        this.validasi_cart.item_id = false;
      }

      if (this.cartitem.quantity.length === 0) {
        this.validasi_cart.quantity = true;
        condition++;
      } else {
        this.validasi_cart.quantity = false;
      }

      if (this.cartitem.price.length === 0) {
        this.validasi_cart.price = true;
        condition++;
      } else {
        this.validasi_cart.price = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    calcTotal: function calcTotal() {
      this.cartitem.subtotal = this.cartitem.price * this.cartitem.quantity;
    },
    resetCart: function resetCart() {
      this.cartitem.item_id = '';
      this.cartitem.quantity = '';
      this.cartitem.price = '';
      this.cartitem.subtotal = '';
    },
    getCustomer: function getCustomer() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/customer?all=true').then(function (response) {
        _this5.customer = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getItem: function getItem() {
      var _this6 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/item?all=true').then(function (response) {
        _this6.item = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getOrderNumber: function getOrderNumber() {
      var _this7 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/ajax/sonumber').then(function (response) {
        _this7.checkout.so_number = response;
      })["catch"](function (error) {
        _this7.alert_modal.error = true;
        console.log(error);
      });
    }
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(['userid'])),
  created: function created() {
    this.isLoading = true;
    this.getItem();
    this.getCustomer();
    this.getOrderNumber();
  },
  mounted: function mounted() {
    this.getCart();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "pull-right" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-success mb-2",
            class: { "btn-block": _vm.mobile === true },
            attrs: { href: "#" },
            on: { click: _vm.toggleCartModal }
          },
          [
            _c("i", { staticClass: "fa fa-plus" }),
            _vm._v(" Tambah Barang\n            ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert_page } }),
        _vm._v(" "),
        _c("spinner", { attrs: { active: _vm.isLoading } }),
        _vm._v(" "),
        _vm.showTable === true
          ? _c("transition", { attrs: { name: "fade" } }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("thead", { staticClass: "thead-dark" }, [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "30%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Barang")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "10%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Harga")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "5%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Jumlah")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "10%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Subtotal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "5%" },
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Action")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.cart, function(v) {
                        return _c("tr", { key: v.id }, [
                          _c("td", { attrs: { scope: "col" } }, [
                            _vm._v(_vm._s(v.item.item_name))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: { "text-align": "right" },
                              attrs: { scope: "col" }
                            },
                            [_vm._v(_vm._s(_vm._f("rupiah")(v.price)))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: { "text-align": "center" },
                              attrs: { scope: "col" }
                            },
                            [
                              _vm._v(
                                _vm._s(v.quantity) +
                                  " " +
                                  _vm._s(v.item.unit.unit_name)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: { "text-align": "right" },
                              attrs: { scope: "col" }
                            },
                            [_vm._v(_vm._s(_vm._f("rupiah")(v.subtotal)))]
                          ),
                          _vm._v(" "),
                          _c("td", { attrs: { scope: "col" } }, [
                            _c(
                              "div",
                              { staticStyle: { "text-align": "center" } },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-xs btn-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleModal(v.id)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                )
                              ]
                            )
                          ])
                        ])
                      }),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: { "text-align": "right" },
                            attrs: { colspan: "3" }
                          },
                          [_c("b", [_vm._v("Total Harga")])]
                        ),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "right" } }, [
                          _c("b", [
                            _vm._v(_vm._s(_vm._f("rupiah")(_vm.totalHarga)))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td")
                      ])
                    ],
                    2
                  )
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showTable === true
          ? _c(
              "span",
              [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-warning",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { href: "#" },
                    on: { click: _vm.toggleCheckoutModal }
                  },
                  [
                    _c("i", { staticClass: "fa fa-shopping-cart" }),
                    _vm._v(" Buat Order\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { to: { name: "so.index" } }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-left" }),
                    _vm._v(" Kembali\n            ")
                  ]
                )
              ],
              1
            )
          : _c(
              "span",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { to: { name: "so.index" } }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-left" }),
                    _vm._v(" Kembali\n            ")
                  ]
                )
              ],
              1
            ),
        _vm._v(" "),
        _c("v-delete", {
          attrs: { element: "delete_modal", id: _vm.id },
          on: { delete: _vm.deleteData }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "checkout_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [
                      _c("v-alert", { attrs: { alert: _vm.alert_modal } }),
                      _vm._v(" "),
                      _c("form", { attrs: { method: "POST" } }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Nomor Sales Order")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkout.so_number,
                                  expression: "checkout.so_number"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.validasi_checkout.so_number
                              },
                              attrs: {
                                readonly: "readonly",
                                placeholder: "Masukkan Nomor Sales Order"
                              },
                              domProps: { value: _vm.checkout.so_number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.checkout,
                                    "so_number",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12" },
                            [
                              _c("label", [_vm._v("Tanggal Sales Order")]),
                              _vm._v(" "),
                              _c("date-picker", {
                                staticClass: "form-control",
                                attrs: {
                                  config: _vm.options,
                                  placeholder: "Tanggal Sales Order",
                                  autocomplete: "off"
                                },
                                model: {
                                  value: _vm.checkout.so_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.checkout, "so_date", $$v)
                                  },
                                  expression: "checkout.so_date"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Customer / Pembeli")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.checkout.customer_id,
                                    expression: "checkout.customer_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid":
                                    _vm.validasi_checkout.customer_id
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.checkout,
                                      "customer_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Pilih Customer / Pembeli")
                                ]),
                                _vm._v(" "),
                                _vm._l(this.customer, function(v) {
                                  return _c(
                                    "option",
                                    { key: v.id, domProps: { value: v.id } },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(v.customer_name) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Keterangan")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkout.note,
                                  expression: "checkout.note"
                                }
                              ],
                              staticClass: "form-control",
                              domProps: { value: _vm.checkout.note },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.checkout,
                                    "note",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12" },
                            [
                              _c("label", [_vm._v("Total Harga")]),
                              _vm._v(" "),
                              _c("money", {
                                staticClass: "form-control",
                                attrs: { readonly: "readonly" },
                                model: {
                                  value: _vm.totalHarga,
                                  callback: function($$v) {
                                    _vm.totalHarga = $$v
                                  },
                                  expression: "totalHarga"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.checkOutCart()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-shopping-cart" }),
                                _vm._v(
                                  "\n                                        Buat SO\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal"
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-times" }),
                                _vm._v(
                                  " Batal\n                                    "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" })
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "cart_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [
                      _c("v-alert", { attrs: { alert: _vm.alert_cart } }),
                      _vm._v(" "),
                      _c("form", { attrs: { method: "POST" } }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-12" }, [
                            _c("label", [_vm._v("Barang")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.cartitem.item_id,
                                    expression: "cartitem.item_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.validasi_cart.item_id
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.cartitem,
                                      "item_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Pilih Barang")
                                ]),
                                _vm._v(" "),
                                _vm._l(this.item, function(v) {
                                  return _c(
                                    "option",
                                    { key: v.id, domProps: { value: v.id } },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(v.item_name) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-12" },
                            [
                              _c("label", [_vm._v("Harga Satuan")]),
                              _vm._v(" "),
                              _c("money", {
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.validasi_cart.price
                                },
                                attrs: { placeholder: "Masukkan Harga" },
                                on: { input: _vm.calcTotal },
                                model: {
                                  value: _vm.cartitem.price,
                                  callback: function($$v) {
                                    _vm.$set(_vm.cartitem, "price", $$v)
                                  },
                                  expression: "cartitem.price"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-12" }, [
                            _c("label", [_vm._v("Jumlah")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.cartitem.quantity,
                                  expression: "cartitem.quantity"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.validasi_cart.quantity
                              },
                              attrs: {
                                type: "number",
                                placeholder: "Masukkan Jumlah Pembelian"
                              },
                              domProps: { value: _vm.cartitem.quantity },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.cartitem,
                                      "quantity",
                                      $event.target.value
                                    )
                                  },
                                  _vm.calcTotal
                                ]
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-12" },
                            [
                              _c("label", [_vm._v("Total Harga *")]),
                              _vm._v(" "),
                              _c("money", {
                                staticClass: "form-control",
                                attrs: { readonly: "readonly" },
                                model: {
                                  value: _vm.cartitem.subtotal,
                                  callback: function($$v) {
                                    _vm.$set(_vm.cartitem, "subtotal", $$v)
                                  },
                                  expression: "cartitem.subtotal"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.addCartItem()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-save" }),
                                _vm._v(
                                  " Simpan Data\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal"
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-times" }),
                                _vm._v(
                                  " Batal\n                                    "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" })
                ])
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Form Purchase Order")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Form Keranjang Belanja")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c5530c38", module.exports)
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(134)
/* template */
var __vue_template__ = __webpack_require__(135)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/SO/Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2da7bb95", Component.options)
  } else {
    hotAPI.reload("data-v-2da7bb95", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      so: {},
      paymentmethod: {},
      id: '',
      isLoading: false,
      saldo: 0,
      showForm: false,
      showTable: false,
      alert: {
        empty: false,
        error: false
      },
      alert_modal: {
        error: false,
        validate: false
      },
      checkout: {
        'note': '',
        'invoice_number': '',
        'invoice_date': '',
        'total': '',
        'payment_method_id': '',
        'payment_duration': '7'
      },
      validasi: {
        'so_number': '',
        'so_date': '',
        'customer_id': ''
      },
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: true,
        locale: 'id'
      },
      userId: '',
      itemId: ''
    };
  },
  props: ['mobile'],
  methods: {
    getSO: function getSO() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/so/show/' + this.$route.params.id).then(function (response) {
        _this.so = response;
        _this.sodetail = _this.so.detail;
        _this.checkout.total = _this.so.total;

        if (_this.sodetail.length < 1) {
          _this.alert.empty = true;
          _this.showTable = false;
        } else {
          _this.showTable = true;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getPaymentMethod: function getPaymentMethod() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/paymentmethod').then(function (response) {
        _this2.paymentmethod = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cetakInvoice: function cetakInvoice(id) {
      var newWindow = window.open();
      newWindow.location = '';
    },
    toggleApprovalModal: function toggleApprovalModal() {
      $("#approval_modal").modal('show');
    },
    toggleRejectModal: function toggleRejectModal() {
      $("#reject_modal").modal('show');
    },
    toggleCancelItemModal: function toggleCancelItemModal(id) {
      this.itemId = id;
      $("#cancel_item_modal").modal('show');
    },
    isReject: function isReject(status) {
      if (status === 2) {
        return true;
      } else {
        return false;
      }
    },
    generateInvoice: function generateInvoice() {
      var _this3 = this;

      var validasi = this.validate();

      if (validasi === true) {
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('api/so/generateinvoice?id=' + this.po.id, this.checkout).then(function (response) {
          if (response.status === 'ok') {
            $('#approval_modal').modal('hide');

            _this3.$swal("Berhasil!", "Proses Pembuatan Invoice Berhasil!", "success");

            window.location.href = '/api/so/poinvoice/detail?id=' + response.invoice_id;
          }
        })["catch"](function (error) {
          _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          console.log(error);
        });
      } else {
        this.alert_modal.validate = true;
        setTimeout(function () {
          return _this3.alert_modal.validate = false;
        }, 5000);
      }
    },
    rejectOrder: function rejectOrder() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('api/so/rejectso?id=' + this.so.id).then(function (response) {
        if (response.status === 'ok') {
          $('#reject_modal').modal('hide');

          _this4.$swal("Berhasil!", "Order Berhasil Dibatalkan!", "success");

          setTimeout(function () {
            return _this4.getSO();
          }, 2000);
        }
      })["catch"](function (error) {
        _this4.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

        console.log(error);
      });
    },
    rejectItem: function rejectItem() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/so/rejectitem?item=' + this.itemId).then(function (response) {
        if (response.status === 'ok') {
          $('#cancel_item_modal').modal('hide');

          _this5.$swal("Berhasil!", "Proses Pembatalan Barang Berhasil!", "success");

          setTimeout(function () {
            return _this5.getSO();
          }, 1000);
        }
      })["catch"](function (error) {
        $('#cancel_item_modal').modal('hide');

        _this5.$swal("Terjadi Kesalahan!", "Silahkan ulangi kembali!", "error");

        console.log(error);
      });
    },
    validate: function validate() {
      var condition = 0;

      if (this.checkout.invoice_number.length === 0) {
        this.validasi.invoice_number = true;
        condition++;
      } else {
        this.validasi.invoice_number = false;
      }

      if (this.checkout.invoice_date.length === 0) {
        this.validasi.invoice_date = true;
        condition++;
      } else {
        this.validasi.invoice_date = false;
      }

      if (this.checkout.payment_method_id.length === 0) {
        this.validasi.payment_method_id = true;
        condition++;
      } else {
        this.validasi.payment_method_id = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function created() {
    this.isLoading = true;
    this.getSO();
    this.getPaymentMethod();
  },
  mounted: function mounted() {
    var _this6 = this;

    __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/ajax/soinvoice').then(function (response) {
      _this6.checkout.invoice_number = response;
      _this6.isLoading = false;
    })["catch"](function (error) {
      _this6.alert_modal.error = true;
      console.log(error);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("spinner", { attrs: { active: _vm.isLoading } }),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _c("table", { staticClass: "table table-bordered" }, [
            _c("tbody", [
              _c("tr", [
                _c("td", { staticStyle: { width: "15%" } }, [
                  _c("b", [_vm._v("Nomor Order")])
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "85%" } }, [
                  _vm._v(_vm._s(_vm.so.so_number))
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticStyle: { width: "15%" } }, [
                  _c("b", [_vm._v("Tanggal Order")])
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "85%" } }, [
                  _vm._v(_vm._s(_vm._f("moment")(_vm.so.so_date)))
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticStyle: { width: "15%" } }, [
                  _c("b", [_vm._v("Customer")])
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "85%" } }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.so.customer.customer_name)
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.so.customer.customer_address)
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.so.customer.hp) +
                      "\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticStyle: { width: "15%" } }, [
                  _c("b", [_vm._v("PIC")])
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "85%" } }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.so.user.username) +
                      "\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.so.note !== null
                ? _c("tr", [
                    _c("td", { staticStyle: { width: "15%" } }, [
                      _c("b", [_vm._v("Keterangan")])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "85%" } }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.so.note) +
                          "\n                        "
                      )
                    ])
                  ])
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticStyle: { "margin-top": "25px" } }),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("v-alert", { attrs: { alert: _vm.alert } }),
              _vm._v(" "),
              _vm.showTable == true
                ? _c("transition", { attrs: { name: "fade" } }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover table-bordered" },
                        [
                          _c("thead", { staticClass: "thead-dark" }, [
                            _c("tr", [
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "30%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Barang")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "10%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Harga")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "5%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Jumlah")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "10%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Subtotal")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    width: "5%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("Tindakan")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            [
                              _vm._l(_vm.podetail, function(v) {
                                return _c(
                                  "tr",
                                  {
                                    key: v.id,
                                    class: {
                                      "table-warning": _vm.isReject(v.status)
                                    }
                                  },
                                  [
                                    _c("td", [
                                      _vm._v(_vm._s(v.item.item_name)),
                                      _vm.isReject(v.status)
                                        ? _c("span", [
                                            _vm._v(" "),
                                            _c("i", [_vm._v("(Dibatalkan)")])
                                          ])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm._f("rupiah")(v.price))
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "center" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(v.quantity) +
                                            " " +
                                            _vm._s(v.item.unit.unit_name)
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm._f("rupiah")(v.subtotal))
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "center" }
                                      },
                                      [
                                        v.status === 0 && _vm.po.status === 0
                                          ? _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-danger",
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.toggleCancelItemModal(
                                                      v.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-times"
                                                })
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        v.status === 0 && _vm.po.status === 1
                                          ? _c("span", [
                                              _c("i", {
                                                staticClass: "fa fa-check"
                                              })
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        v.status === 2
                                          ? _c("span", [
                                              _c("i", {
                                                staticClass: "fa fa-archive"
                                              })
                                            ])
                                          : _vm._e()
                                      ]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticStyle: { "text-align": "right" },
                                    attrs: { colspan: "3" }
                                  },
                                  [_c("b", [_vm._v("Total Harga")])]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticStyle: { "text-align": "right" } },
                                  [
                                    _c("b", [
                                      _vm._v(
                                        _vm._s(_vm._f("rupiah")(_vm.po.total))
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td")
                              ])
                            ],
                            2
                          )
                        ]
                      )
                    ])
                  ])
                : _vm._e()
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm.so.status === 0
          ? _c(
              "span",
              [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-success",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.toggleApprovalModal(_vm.po.id)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-check" }),
                    _vm._v(" Proses PO\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-danger",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.toggleRejectModal(_vm.po.id)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-times" }),
                    _vm._v(" Batalkan PO\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { to: { name: "so.index" } }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-left" }),
                    _vm._v(" Kembali\n            ")
                  ]
                )
              ],
              1
            )
          : _c(
              "span",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary",
                    class: { "btn-block": _vm.mobile === true },
                    attrs: { to: { name: "so.index" } }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-left" }),
                    _vm._v(" Kembali\n            ")
                  ]
                )
              ],
              1
            ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "approval_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [
                      _c("v-alert", { attrs: { alert: _vm.alert_modal } }),
                      _vm._v(" "),
                      _c("form", { attrs: { method: "POST" } }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Nomor Invoice *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkout.invoice_number,
                                  expression: "checkout.invoice_number"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.validasi.invoice_number
                              },
                              attrs: {
                                placeholder: "Masukkan Nomor Invoice",
                                readonly: "readonly"
                              },
                              domProps: { value: _vm.checkout.invoice_number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.checkout,
                                    "invoice_number",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Tanggal Invoice *")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "input-group" },
                              [
                                _vm._m(1),
                                _vm._v(" "),
                                _c("date-picker", {
                                  staticClass: "form-control",
                                  attrs: {
                                    config: _vm.options,
                                    placeholder: "Tanggal Invoice",
                                    autocomplete: "off"
                                  },
                                  model: {
                                    value: _vm.checkout.invoice_date,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.checkout,
                                        "invoice_date",
                                        $$v
                                      )
                                    },
                                    expression: "checkout.invoice_date"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Metode Pembayaran *")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.checkout.payment_method_id,
                                    expression: "checkout.payment_method_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.validasi.payment_method_id
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.checkout,
                                      "payment_method_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Pilih Metode Pembayaran")
                                ]),
                                _vm._v(" "),
                                _vm._l(this.paymentmethod, function(v) {
                                  return _c(
                                    "option",
                                    { key: v.id, domProps: { value: v.id } },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(v.name) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.checkout.payment_method_id === 2
                          ? _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c("label", [_vm._v("Durasi Pembayaran *")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.checkout.payment_duration,
                                          expression:
                                            "checkout.payment_duration"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.checkout,
                                            "payment_duration",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "7", selected: "" } },
                                        [_vm._v("7 Hari Kerja")]
                                      ),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "14" } }, [
                                        _vm._v("14 Hari Kerja")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "30" } }, [
                                        _vm._v("30 Hari Kerja")
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c("label", [_vm._v("Keterangan")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkout.note,
                                  expression: "checkout.note"
                                }
                              ],
                              staticClass: "form-control",
                              domProps: { value: _vm.checkout.note },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.checkout,
                                    "note",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12" },
                            [
                              _c("label", [_vm._v("Total Harga *")]),
                              _vm._v(" "),
                              _c("money", {
                                staticClass: "form-control",
                                attrs: { readonly: "readonly" },
                                model: {
                                  value: _vm.checkout.total,
                                  callback: function($$v) {
                                    _vm.$set(_vm.checkout, "total", $$v)
                                  },
                                  expression: "checkout.total"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "form-group col-md-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.generateInvoice()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-shopping-cart" }),
                                _vm._v(
                                  " Proses Invoice\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                class: { "btn-block": _vm.mobile === true },
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal"
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-times" }),
                                _vm._v(
                                  " Batal\n                                    "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" })
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "cancel_item_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.rejectItem }
                      },
                      [
                        _c("i", { staticClass: "fa fa-check-circle-o" }),
                        _vm._v(" Ya\n                        ")
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(4)
                  ])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: { id: "reject_modal", tabindex: "-1", role: "dialog" }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.rejectOrder }
                      },
                      [
                        _c("i", { staticClass: "fa fa-check-circle-o" }),
                        _vm._v(" Ya\n                        ")
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(7)
                  ])
                ])
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Form Invoice")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-calendar" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Konfirmasi Pembatalan Barang")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("p", [_vm._v("Anda Akan Membatalkan Barang Ini, Teruskan?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _c("i", { staticClass: "fa fa-times-circle-o" }),
        _vm._v(" Batal\n                        ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Konfirmasi Pembatalan Order")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("p", [_vm._v("Anda Akan Membatalkan Order Ini, Teruskan?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _c("i", { staticClass: "fa fa-times-circle-o" }),
        _vm._v(" Batal\n                        ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2da7bb95", module.exports)
  }
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(137)
/* template */
var __vue_template__ = __webpack_require__(138)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/POInvoice/POInvoice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a3b3bde", Component.options)
  } else {
    hotAPI.reload("data-v-0a3b3bde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0a3b3bde", module.exports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(140)
/* template */
var __vue_template__ = __webpack_require__(141)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/POInvoice/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2308fa62", Component.options)
  } else {
    hotAPI.reload("data-v-2308fa62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      po: {},
      search: {
        q: '',
        from: '',
        to: '',
        payment: ''
      },
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: false,
        locale: 'id'
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: '',
      userId: ''
    };
  },
  props: ['mobile'],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = '';
      this.search.from = '';
      this.search.to = '';
      this.search.payment = '';
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/invoice/buy?user=' + this.userid + '&' + query + '&page=' + this.pagination.page).then(function (response) {
        if (response.total === 0) {
          _this.showTable = false;
          _this.alert.empty = true;
          _this.alert.error = false;
        } else {
          _this.showTable = true;
          _this.alert.empty = false;
          _this.alert.error = false;
          _this.po = response.data;
          _this.pagination.last = response.last_page;
          _this.pagination.from = response.from;
          _this.pagination.to = response.to;
          _this.pagination.total = response.total;
        }

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + '=' + _this2.search[key];
      }).join('&');
    }
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(['userid'])),
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.fetchData();
  }
});

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("div", { staticClass: "pull-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info mb-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.toggle($event)
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-search" }),
                _vm._v(" Form Pencarian\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showForm,
                  expression: "showForm"
                }
              ],
              staticClass: "card",
              staticStyle: { "margin-top": "50px" }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.fetchData()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.q,
                              expression: "search.q"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Nomor Invoice" },
                          domProps: { value: _vm.search.q },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.search, "q", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-md-3" },
                        [
                          _c("date-picker", {
                            staticClass: "form-control",
                            attrs: {
                              config: _vm.options,
                              placeholder: "Tanggal Mulai Pencarian",
                              autocomplete: "off"
                            },
                            model: {
                              value: _vm.search.from,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "from", $$v)
                              },
                              expression: "search.from"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-md-3" },
                        [
                          _c("date-picker", {
                            staticClass: "form-control",
                            attrs: {
                              config: _vm.options,
                              placeholder: "Tanggal Akhir Pencarian",
                              autocomplete: "off"
                            },
                            model: {
                              value: _vm.search.to,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "to", $$v)
                              },
                              expression: "search.to"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-3" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.search.payment,
                                expression: "search.payment"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.search,
                                  "payment",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Pilih Pembayaran")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("Tunai")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Kredit")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "input-group col-md-6" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success mr-sm-2",
                            class: { "btn-block": _vm.mobile === true },
                            attrs: { type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-search" }),
                            _vm._v(
                              " Cari Data\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            class: { "btn-block": _vm.mobile === true },
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.clear($event)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-refresh" }),
                            _vm._v(
                              " Reset\n                                    "
                            )
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("v-alert", { attrs: { alert: _vm.alert } }),
            _vm._v(" "),
            _c("spinner", { attrs: { active: _vm.isLoading } }),
            _vm._v(" "),
            _vm.showTable === true
              ? _c("transition", { attrs: { name: "fade" } }, [
                  _vm.mobile === true
                    ? _c(
                        "div",
                        _vm._l(_vm.po, function(v) {
                          return _c("div", { key: v.id, staticClass: "card" }, [
                            _c("div", { staticClass: "card-body" }, [
                              _c("table", { staticClass: "table-noborder" }, [
                                _c("tr", [
                                  _c("td", [_vm._v("Invoice")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "poinvoice.detail",
                                              params: { id: v.id }
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "  \n                                                " +
                                              _vm._s(v.invoice_number) +
                                              "\n                                            "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Supplier")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(v.po.supplier.supplier_name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Tanggal")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm._f("moment")(v.po_date)))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Total")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm._f("rupiah")(v.total)))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Pembayaran")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    v.paymentmethod.name === "Kredit"
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(v.paymentmethod.name)
                                          ),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c("b", [
                                            _vm._v(
                                              "Tempo : " +
                                                _vm._s(
                                                  _vm._f("short_moment")(
                                                    v.payment_due_date
                                                  )
                                                )
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    v.paymentmethod.name === "Tunai"
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(v.paymentmethod.name) +
                                              "\n                                            "
                                          )
                                        ])
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Status")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    v.status === 0
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-danger",
                                            staticStyle: { padding: "5px" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-times"
                                            }),
                                            _vm._v(
                                              " BELUM DIBAYAR\n                                            "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    v.status === 1
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-success",
                                            staticStyle: { padding: "5px" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-check"
                                            }),
                                            _vm._v(
                                              " LUNAS\n                                            "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    v.status === 2
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-warning",
                                            staticStyle: { padding: "5px" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-refresh"
                                            }),
                                            _vm._v(
                                              " DIBAYAR SEBAGIAN\n                                            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ])
                            ])
                          ])
                        }),
                        0
                      )
                    : _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-hover table-striped table-bordered"
                          },
                          [
                            _c("thead", { staticClass: "thead-dark" }, [
                              _c("tr", [
                                _c(
                                  "th",
                                  {
                                    staticStyle: {
                                      "text-align": "center",
                                      width: "13%"
                                    },
                                    attrs: { scope: "col" }
                                  },
                                  [_vm._v("Nomor Invoice")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticStyle: {
                                      "text-align": "center",
                                      width: "32%"
                                    },
                                    attrs: { scope: "col" }
                                  },
                                  [_vm._v("Supplier")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticStyle: {
                                      "text-align": "center",
                                      width: "15%"
                                    },
                                    attrs: { scope: "col" }
                                  },
                                  [_vm._v("Tanggal")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticStyle: {
                                      "text-align": "center",
                                      width: "12%"
                                    },
                                    attrs: { scope: "col" }
                                  },
                                  [_vm._v("Total")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticStyle: {
                                      "text-align": "center",
                                      width: "13%"
                                    },
                                    attrs: { scope: "col" }
                                  },
                                  [_vm._v("Pembayaran")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticStyle: {
                                      "text-align": "center",
                                      width: "15%"
                                    },
                                    attrs: { scope: "col" }
                                  },
                                  [_vm._v("Status")]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.po, function(v) {
                                return _c("tr", { key: v.id }, [
                                  _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        "vertical-align": "middle"
                                      },
                                      attrs: { scope: "row" }
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "poinvoice.detail",
                                              params: { id: v.id }
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "  \n                                            " +
                                              _vm._s(v.invoice_number) +
                                              "\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        "vertical-align": "middle"
                                      },
                                      attrs: { scope: "row" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(v.po.supplier.supplier_name)
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(v.po.supplier.supplier_address)
                                      ),
                                      _c("br")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        "vertical-align": "middle"
                                      },
                                      attrs: { scope: "row" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm._f("moment")(v.po_date))
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        "text-align": "right",
                                        "vertical-align": "middle"
                                      },
                                      attrs: { scope: "row" }
                                    },
                                    [_vm._v(_vm._s(_vm._f("rupiah")(v.total)))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        "vertical-align": "middle"
                                      },
                                      attrs: { scope: "row" }
                                    },
                                    [
                                      v.paymentmethod.name === "Kredit"
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(v.paymentmethod.name)
                                            ),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("b", [
                                              _vm._v(
                                                "Tempo : " +
                                                  _vm._s(
                                                    _vm._f("short_moment")(
                                                      v.payment_due_date
                                                    )
                                                  )
                                              )
                                            ])
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      v.paymentmethod.name === "Tunai"
                                        ? _c("span", [
                                            _vm._v(_vm._s(v.paymentmethod.name))
                                          ])
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        "vertical-align": "middle"
                                      },
                                      attrs: { scope: "row" }
                                    },
                                    [
                                      v.status === 0
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-danger",
                                              staticStyle: { padding: "5px" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-times"
                                              }),
                                              _vm._v(
                                                " BELUM DIBAYAR\n                                        "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      v.status === 1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "badge badge-success",
                                              staticStyle: { padding: "5px" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-check"
                                              }),
                                              _vm._v(
                                                " LUNAS\n                                        "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      v.status === 2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "badge badge-warning",
                                              staticStyle: { padding: "5px" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-refresh"
                                              }),
                                              _vm._v(
                                                " DIBAYAR SEBAGIAN\n                                        "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ])
                              }),
                              0
                            )
                          ]
                        )
                      ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.showTable === true
              ? _c(
                  "div",
                  { staticClass: "card-footer clearfix" },
                  [
                    _vm.showTable === true
                      ? _c("v-pagination", {
                          attrs: { pagination: _vm.pagination },
                          on: { next: _vm.nextPage, previous: _vm.prevPage }
                        })
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2308fa62", module.exports)
  }
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(143)
/* template */
var __vue_template__ = __webpack_require__(144)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/POInvoice/Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-532d3d1e", Component.options)
  } else {
    hotAPI.reload("data-v-532d3d1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      invoice: {},
      detail: {},
      id: '',
      isLoading: false,
      saldo: 0,
      showForm: false,
      showTable: false,
      alert: {
        empty: false,
        error: false
      },
      alert_modal: {
        error: false,
        validate: false
      },
      payment: {
        'po_invoice_id': '',
        'note': '',
        'payment_date': '',
        'total': '',
        'nominal': ''
      },
      payment_data: {},
      remaining_payment: 0,
      validasi: {
        'payment_date': '',
        'nominal': ''
      },
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: true,
        locale: 'id'
      },
      userId: ''
    };
  },
  props: ['mobile'],
  methods: {
    getInvoice: function getInvoice() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/invoice/buy/show/' + this.$route.params.id).then(function (response) {
        _this.invoice = response;
        _this.detail = _this.invoice.detail;

        if (_this.detail.length < 1) {
          _this.alert.empty = true;
          _this.showTable = false;
        } else {
          _this.payment.po_invoice_id = _this.invoice.id;
          _this.showTable = true;

          _this.checkRemainingPayment();

          _this.isLoading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cetakInvoice: function cetakInvoice(id) {
      this.isLoading = true; // service.getDownloadData(this.print_api)
      // .then(response => {
      //     const link = document.createElement('a');
      //     link.href = response;
      //     link.setAttribute('download', 'Invoice Pembelian - '+ this.invoice.invoice_number+'.pdf');
      //     document.body.appendChild(link);
      //     link.click();
      //     this.isLoading = false;
      // }).catch(error => {
      //     this.isLoading = false;
      //     this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");
      //     console.log(error);
      // });

      var newWindow = window.open();
      newWindow.location = '';

      newWindow.onunload = function () {
        this.isLoading = false;
      };
    },
    togglePaymentModal: function togglePaymentModal() {
      $("#payment_modal").modal('show');
    },
    processPayment: function processPayment() {
      var _this2 = this;

      var validasi = this.validate();

      if (validasi === true) {
        if (this.payment.nominal <= this.payment.total) {
          __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/invoice/buy/pay', this.payment).then(function (response) {
            if (response.status === 'ok') {
              $('#payment_modal').modal('hide');

              _this2.$swal("Berhasil!", "Proses Pembayaran Berhasil!", "success");

              setTimeout(function () {
                return _this2.getInvoice();
              }, 2000);
            }
          })["catch"](function (error) {
            _this2.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

            console.log(error);
          });
        } else {
          this.$swal("Peringatan!", "Nominal Yang Dibayarkan Tidak Boleh Melebihi Total Yang Harus Dibayar!", "warning");
        }
      } else {
        this.alert_modal.validate = true;
        setTimeout(function () {
          return _this2.alert_modal.validate = false;
        }, 5000);
      }
    },
    checkRemainingPayment: function checkRemainingPayment() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/invoice/buy/pay?invoice=' + this.invoice.id).then(function (response) {
        _this3.payment_data = response.payment_data;
        _this3.payment.total = response.remaining_payment;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    validate: function validate() {
      var condition = 0;

      if (this.payment.payment_date.length === 0) {
        this.validasi.payment_date = true;
        condition++;
      } else {
        this.validasi.payment_date = false;
      }

      if (this.payment.nominal.length === 0) {
        this.validasi.nominal = true;
        condition++;
      } else {
        this.validasi.nominal = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.getInvoice();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("spinner", { attrs: { active: _vm.isLoading } }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("transition", { attrs: { name: "fade" } }, [
                    _c("table", { staticClass: "table table-bordered" }, [
                      _c("tbody", [
                        _c("tr", [
                          _c("td", { staticStyle: { width: "15%" } }, [
                            _c("b", [_vm._v("Invoice")])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "85%" } }, [
                            _vm._v(_vm._s(_vm.invoice.invoice_number))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticStyle: { width: "15%" } }, [
                            _c("b", [_vm._v("Tanggal")])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "85%" } }, [
                            _vm._v(
                              _vm._s(_vm._f("moment")(_vm.invoice.invoice_date))
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticStyle: { width: "15%" } }, [
                            _c("b", [_vm._v("Supplier")])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "85%" } }, [
                            _vm._v(
                              "\n                                            " +
                                _vm._s(_vm.invoice.po.supplier.supplier_name)
                            ),
                            _c("br"),
                            _vm._v(
                              "\n                                            " +
                                _vm._s(_vm.invoice.po.supplier.supplier_address)
                            ),
                            _c("br"),
                            _vm._v(
                              "\n                                            " +
                                _vm._s(
                                  _vm.invoice.po.supplier.supplier_contact
                                ) +
                                "\n                                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticStyle: { width: "15%" } }, [
                            _c("b", [_vm._v("PIC")])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "85%" } }, [
                            _vm._v(
                              "\n                                            " +
                                _vm._s(_vm.invoice.po.user.username) +
                                "\n                                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticStyle: { width: "15%" } }, [
                            _c("b", [_vm._v("Pembayaran")])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "85%" } }, [
                            _vm.invoice.payment_method_id === 2
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                                Kredit"
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                                Tanggal Jatuh Tempo : "
                                  ),
                                  _c("b", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("moment")(
                                          _vm.invoice.payment_due_date
                                        )
                                      )
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.invoice.payment_method_id === 1
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                                Tunai\n                                            "
                                  )
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_c("b", [_vm._v("Status")])]),
                          _vm._v(" "),
                          _c("td", [
                            _vm.invoice.status === 0
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-danger",
                                    staticStyle: { padding: "5px" }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-times" }),
                                    _vm._v(
                                      " BELUM DIBAYAR\n                                            "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.invoice.status === 1
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-success",
                                    staticStyle: { padding: "5px" }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-check" }),
                                    _vm._v(
                                      " LUNAS\n                                            "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.invoice.status === 2
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-warning",
                                    staticStyle: { padding: "5px" }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-refresh" }),
                                    _vm._v(
                                      " DIBAYAR SEBAGIAN\n                                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ])
                      ])
                    ])
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticStyle: { "margin-top": "25px" } }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("hr"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("Data Barang")]),
                  _vm._v(" "),
                  _vm.showTable == true
                    ? _c("transition", { attrs: { name: "fade" } }, [
                        _c("div", { staticClass: "table-responsive-sm" }, [
                          _c(
                            "table",
                            { staticClass: "table table-hover table-bordered" },
                            [
                              _c("thead", { staticClass: "thead-dark" }, [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "30%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Barang")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "10%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Harga")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "5%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Jumlah")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "10%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Subtotal")]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                [
                                  _vm._l(_vm.detail, function(v) {
                                    return _c("tr", { key: v.id }, [
                                      _c("td", [
                                        _vm._v(_vm._s(v.item.item_name))
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: { "text-align": "right" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm._f("rupiah")(v.price))
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: {
                                            "text-align": "center"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(v.quantity) +
                                              " " +
                                              _vm._s(v.item.unit.unit_name)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: { "text-align": "right" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm._f("rupiah")(v.subtotal))
                                          )
                                        ]
                                      )
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" },
                                        attrs: { colspan: "3" }
                                      },
                                      [_c("b", [_vm._v("Total Harga")])]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _c("b", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("rupiah")(
                                                _vm.invoice.total
                                              )
                                            )
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.invoice.status == 2
                                    ? _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "text-align": "right"
                                            },
                                            attrs: { colspan: "3" }
                                          },
                                          [
                                            _c("b", [
                                              _vm._v("Dibayarkan Sebagian")
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "text-align": "right"
                                            }
                                          },
                                          [
                                            _c("b", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("rupiah")(
                                                    _vm.invoice.total -
                                                      _vm.payment.total
                                                  )
                                                )
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.invoice.status == 2
                                    ? _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "text-align": "right"
                                            },
                                            attrs: { colspan: "3" }
                                          },
                                          [_c("b", [_vm._v("Sisa Pembayaran")])]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "text-align": "right"
                                            }
                                          },
                                          [
                                            _c("b", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("rupiah")(
                                                    _vm.payment.total
                                                  )
                                                )
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                ],
                                2
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm.payment_data.length > 0
              ? _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("h3", [_vm._v("Data Pembayaran")]),
                      _vm._v(" "),
                      _c("transition", { attrs: { name: "fade" } }, [
                        _c("div", { staticStyle: { "overflow-x": "auto" } }, [
                          _c(
                            "table",
                            { staticClass: "table table-hover table-bordered" },
                            [
                              _c("thead", { staticClass: "thead-dark" }, [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "30%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Tanggal Pembayaran")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "25%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Jumlah Pembayaran")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "25%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Sisa Pembayaran")]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.payment_data, function(p) {
                                  return _c("tr", { key: p.id }, [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "center" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("moment")(p.payment_date)
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm._f("rupiah")(p.nominal))
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("rupiah")(
                                              p.total_payment - p.nominal
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.invoice.status !== 1
              ? _c(
                  "span",
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-success",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.togglePaymentModal()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-check" }),
                        _vm._v(" Proses Pembayaran\n                    ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-secondary",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { to: { name: "poinvoice.index" } }
                      },
                      [
                        _c("i", { staticClass: "fa fa-arrow-left" }),
                        _vm._v(" Kembali\n                    ")
                      ]
                    )
                  ],
                  1
                )
              : _c(
                  "span",
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-info",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { href: "#", target: "_blank" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-print" }),
                        _vm._v(" Cetak Invoice\n                    ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-secondary",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { to: { name: "poinvoice.index" } }
                      },
                      [
                        _c("i", { staticClass: "fa fa-arrow-left" }),
                        _vm._v(" Kembali\n                    ")
                      ]
                    )
                  ],
                  1
                ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: { id: "payment_modal", tabindex: "-1", role: "dialog" }
              },
              [
                _c(
                  "div",
                  { staticClass: "modal-dialog", attrs: { role: "document" } },
                  [
                    _c("div", { staticClass: "modal-content" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "modal-body" },
                        [
                          _c("v-alert", { attrs: { alert: _vm.alert_modal } }),
                          _vm._v(" "),
                          _c("form", { attrs: { method: "POST" } }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c("label", [_vm._v("Tanggal Pembayaran *")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c("date-picker", {
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid":
                                            _vm.validasi.payment_date
                                        },
                                        attrs: {
                                          config: _vm.options,
                                          placeholder: "Tanggal Pembayaran",
                                          autocomplete: "off"
                                        },
                                        model: {
                                          value: _vm.payment.payment_date,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "payment_date",
                                              $$v
                                            )
                                          },
                                          expression: "payment.payment_date"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c("label", [_vm._v("Keterangan")]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.payment.note,
                                        expression: "payment.note"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: { value: _vm.payment.note },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.payment,
                                          "note",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-12" },
                                [
                                  _c("label", [_vm._v("Nominal Pembayaran *")]),
                                  _vm._v(" "),
                                  _c("money", {
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.validasi.nominal
                                    },
                                    attrs: {
                                      placeholder: "Masukkan Nominal Pembayaran"
                                    },
                                    model: {
                                      value: _vm.payment.nominal,
                                      callback: function($$v) {
                                        _vm.$set(_vm.payment, "nominal", $$v)
                                      },
                                      expression: "payment.nominal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c("label", [
                                    _vm._v("Jumlah Yang Harus Dibayar *")
                                  ]),
                                  _vm._v(" "),
                                  _c("money", {
                                    staticClass: "form-control",
                                    attrs: { readonly: "readonly" },
                                    model: {
                                      value: _vm.payment.total,
                                      callback: function($$v) {
                                        _vm.$set(_vm.payment, "total", $$v)
                                      },
                                      expression: "payment.total"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      class: {
                                        "btn-block": _vm.mobile === true
                                      },
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.processPayment()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-shopping-cart"
                                      }),
                                      _vm._v(
                                        " Proses Pembayaran\n                                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger",
                                      class: {
                                        "btn-block": _vm.mobile === true
                                      },
                                      attrs: {
                                        type: "button",
                                        "data-dismiss": "modal"
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-times" }),
                                      _vm._v(
                                        " Batal\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" })
                    ])
                  ]
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Form Invoice")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-calendar" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-532d3d1e", module.exports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(146)
/* template */
var __vue_template__ = __webpack_require__(147)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/SOInvoice/SOInvoice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-974dc9b8", Component.options)
  } else {
    hotAPI.reload("data-v-974dc9b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-974dc9b8", module.exports)
  }
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(149)
/* template */
var __vue_template__ = __webpack_require__(150)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/SOInvoice/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e7efc0b6", Component.options)
  } else {
    hotAPI.reload("data-v-e7efc0b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      so: {},
      search: {
        q: '',
        from: '',
        to: '',
        payment: ''
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: '',
      userId: '',
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: false,
        locale: 'id'
      }
    };
  },
  props: ['api', 'route', 'access', 'mobile'],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = '';
      this.search.from = '';
      this.search.to = '';
      this.search.payment = '';
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData(this.api + '?user=' + this.userId + '&' + query + '&page=' + this.pagination.page).then(function (response) {
        _this.renderData(response);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    renderData: function renderData(response) {
      if (response.total === 0) {
        this.showTable = false;
        this.alert.empty = true;
        this.alert.error = false;
      } else {
        this.showTable = true;
        this.alert.empty = false;
        this.alert.error = false;
        this.so = response.data;
        this.pagination.last = response.last_page;
        this.pagination.from = response.from;
        this.pagination.to = response.to;
        this.pagination.total = response.total;
      }
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + '=' + _this2.search[key];
      }).join('&');
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.userId = this.$cookies.get('id');
    this.fetchData();
  }
});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("div", { staticClass: "pull-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info mb-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.toggle($event)
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-search" }),
                _vm._v(" Form Pencarian\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showForm,
                  expression: "showForm"
                }
              ],
              staticClass: "card",
              staticStyle: { "margin-top": "50px" }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.fetchData()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.q,
                              expression: "search.q"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Nomor Invoice" },
                          domProps: { value: _vm.search.q },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.search, "q", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-md-3" },
                        [
                          _c("date-picker", {
                            staticClass: "form-control",
                            attrs: {
                              config: _vm.options,
                              placeholder: "Tanggal Mulai Pencarian",
                              autocomplete: "off"
                            },
                            model: {
                              value: _vm.search.from,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "from", $$v)
                              },
                              expression: "search.from"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-md-3" },
                        [
                          _c("date-picker", {
                            staticClass: "form-control",
                            attrs: {
                              config: _vm.options,
                              placeholder: "Tanggal Akhir Pencarian",
                              autocomplete: "off"
                            },
                            model: {
                              value: _vm.search.to,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "to", $$v)
                              },
                              expression: "search.to"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-3" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.search.payment,
                                expression: "search.payment"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.search,
                                  "payment",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Pilih Pembayaran")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("Tunai")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Kredit")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "input-group col-md-6" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success mr-sm-2",
                            class: { "btn-block": _vm.mobile === true },
                            attrs: { type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-search" }),
                            _vm._v(
                              " Cari Data\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            class: { "btn-block": _vm.mobile === true },
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.clear($event)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-refresh" }),
                            _vm._v(
                              " Reset\n                                    "
                            )
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("v-alert", { attrs: { alert: _vm.alert } }),
            _vm._v(" "),
            _c("loading", {
              attrs: {
                opacity: 100,
                active: _vm.isLoading,
                "can-cancel": false,
                "is-full-page": false
              },
              on: {
                "update:active": function($event) {
                  _vm.isLoading = $event
                }
              }
            }),
            _vm._v(" "),
            _vm.showTable === true
              ? _c("transition", { attrs: { name: "fade" } }, [
                  _vm.mobile === true
                    ? _c(
                        "div",
                        _vm._l(_vm.so, function(v) {
                          return _c("div", { key: v.id, staticClass: "card" }, [
                            _c("div", { staticClass: "card-body" }, [
                              _c("table", { staticClass: "table-noborder" }, [
                                _c("tr", [
                                  _c("td", [_vm._v("Invoice")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "a",
                                      {
                                        attrs: {
                                          href: _vm.route + "/detail?id=" + v.id
                                        }
                                      },
                                      [_vm._v(_vm._s(v.invoice_number))]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Customer")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(v.so.supplier.customer_name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Tanggal")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm._f("moment")(v.invoice_date))
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Total")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm._f("rupiah")(v.total)))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Pembayaran")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    v.paymentmethod.name === "Kredit"
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(v.paymentmethod.name)
                                          ),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c("b", [
                                            _vm._v(
                                              "Tempo : " +
                                                _vm._s(
                                                  _vm._f("short_moment")(
                                                    v.payment_due_date
                                                  )
                                                )
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    v.paymentmethod.name === "Tunai"
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(v.paymentmethod.name) +
                                              "\n                                            "
                                          )
                                        ])
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Status")]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    v.status === 0
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-danger",
                                            staticStyle: { padding: "5px" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-times"
                                            }),
                                            _vm._v(
                                              " BELUM DIBAYAR\n                                            "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    v.status === 1
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-success",
                                            staticStyle: { padding: "5px" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-check"
                                            }),
                                            _vm._v(
                                              " LUNAS\n                                            "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    v.status === 2
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-warning",
                                            staticStyle: { padding: "5px" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-refresh"
                                            }),
                                            _vm._v(
                                              " DIBAYAR SEBAGIAN\n                                            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ])
                            ])
                          ])
                        }),
                        0
                      )
                    : _c("div", { attrs: { name: "fade" } }, [
                        _c("div", { staticClass: "table-responsive" }, [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-hover table-striped table-bordered"
                            },
                            [
                              _c("thead", { staticClass: "thead-dark" }, [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        width: "13%"
                                      },
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Nomor Invoice")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        width: "32%"
                                      },
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Customer")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        width: "15%"
                                      },
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Tanggal")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        width: "12%"
                                      },
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Total")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        width: "13%"
                                      },
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Pembayaran")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        width: "15%"
                                      },
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Status")]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.so, function(v) {
                                  return _c("tr", { key: v.id }, [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          "vertical-align": "middle"
                                        },
                                        attrs: { scope: "row" }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href:
                                                _vm.route + "/detail?id=" + v.id
                                            }
                                          },
                                          [_vm._v(_vm._s(v.invoice_number))]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          "vertical-align": "middle"
                                        },
                                        attrs: { scope: "row" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(v.so.customer.customer_name)
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              v.so.customer.customer_address
                                            )
                                        ),
                                        _c("br")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          "text-align": "center",
                                          "vertical-align": "middle"
                                        },
                                        attrs: { scope: "row" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("moment")(v.invoice_date)
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          "text-align": "right",
                                          "vertical-align": "middle"
                                        },
                                        attrs: { scope: "row" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm._f("rupiah")(v.total))
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          "text-align": "center",
                                          "vertical-align": "middle"
                                        },
                                        attrs: { scope: "row" }
                                      },
                                      [
                                        v.paymentmethod.name === "Kredit"
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(v.paymentmethod.name)
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("b", [
                                                _vm._v(
                                                  "Tempo : " +
                                                    _vm._s(
                                                      _vm._f("short_moment")(
                                                        v.payment_due_date
                                                      )
                                                    )
                                                )
                                              ])
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        v.paymentmethod.name === "Tunai"
                                          ? _c("span", [
                                              _vm._v(
                                                _vm._s(v.paymentmethod.name)
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          "text-align": "center",
                                          "vertical-align": "middle"
                                        },
                                        attrs: { scope: "row" }
                                      },
                                      [
                                        v.status === 0
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-danger",
                                                staticStyle: { padding: "5px" }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-times"
                                                }),
                                                _vm._v(
                                                  " BELUM DIBAYAR\n                                            "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        v.status === 1
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-success",
                                                staticStyle: { padding: "5px" }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-check"
                                                }),
                                                _vm._v(
                                                  " LUNAS\n                                            "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        v.status === 2
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-warning",
                                                staticStyle: { padding: "5px" }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-refresh"
                                                }),
                                                _vm._v(
                                                  " DIBAYAR SEBAGIAN\n                                            "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        ])
                      ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.showTable === true
              ? _c(
                  "div",
                  { staticClass: "card-footer clearfix" },
                  [
                    _vm.showTable === true
                      ? _c("v-pagination", {
                          attrs: { pagination: _vm.pagination },
                          on: { next: _vm.nextPage, previous: _vm.prevPage }
                        })
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e7efc0b6", module.exports)
  }
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(152)
/* template */
var __vue_template__ = __webpack_require__(153)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/SOInvoice/Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e56236e4", Component.options)
  } else {
    hotAPI.reload("data-v-e56236e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: '',
      isLoading: false,
      saldo: 0,
      showForm: false,
      showTable: false,
      alert: {
        empty: false,
        error: false
      },
      alert_modal: {
        error: false,
        validate: false
      },
      payment: {
        'so_invoice_id': this.invoice.id,
        'note': '',
        'payment_date': '',
        'total': '',
        'nominal': ''
      },
      payment_data: {},
      remaining_payment: 0,
      validasi: {
        'payment_date': '',
        'nominal': ''
      },
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: true,
        locale: 'id'
      },
      userId: ''
    };
  },
  props: ['invoice', 'detail', 'route', 'print_api', 'access', 'api', 'mobile'],
  methods: {
    cetakInvoice: function cetakInvoice(id) {
      var newWindow = window.open();
      newWindow.location = this.print_api;
    },
    togglePaymentModal: function togglePaymentModal() {
      $("#payment_modal").modal('show');
    },
    processPayment: function processPayment() {
      var _this = this;

      var validasi = this.validate();

      if (validasi === true) {
        if (this.payment.nominal <= this.payment.total) {
          __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData(this.api + '/pay', this.payment).then(function (response) {
            if (response.status === 'ok') {
              $('#payment_modal').modal('hide');

              _this.$swal("Berhasil!", "Proses Pembayaran Berhasil!", "success");

              setTimeout(function () {
                return location.reload();
              }, 2000);
            }
          })["catch"](function (error) {
            _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

            console.log(error);
          });
        } else {
          this.$swal("Peringatan!", "Nominal Yang Dibayarkan Tidak Boleh Melebihi Total Yang Harus Dibayar!", "warning");
        }
      } else {
        this.alert_modal.validate = true;
        setTimeout(function () {
          return _this.alert_modal.validate = false;
        }, 5000);
      }
    },
    checkRemainingPayment: function checkRemainingPayment() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData(this.api + '/pay?invoice=' + this.invoice.id).then(function (response) {
        _this2.payment_data = response.payment_data;
        _this2.payment.total = response.remaining_payment;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    validate: function validate() {
      var condition = 0;

      if (this.payment.payment_date.length === 0) {
        this.validasi.payment_date = true;
        condition++;
      } else {
        this.validasi.payment_date = false;
      }

      if (this.payment.nominal.length === 0) {
        this.validasi.nominal = true;
        condition++;
      } else {
        this.validasi.nominal = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function created() {
    this.isLoading = true;

    if (this.detail.length < 1) {
      this.alert.empty = true;
      this.showTable = false;
    } else {
      this.showTable = true;
      this.checkRemainingPayment();
    }
  },
  mounted: function mounted() {
    this.userId = this.$cookies.get('id');
    this.isLoading = false;
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("loading", {
              attrs: {
                opacity: 100,
                active: _vm.isLoading,
                "can-cancel": false,
                "is-full-page": false
              },
              on: {
                "update:active": function($event) {
                  _vm.isLoading = $event
                }
              }
            }),
            _vm._v(" "),
            _c("transition", { attrs: { name: "fade" } }, [
              _c("table", { staticClass: "table table-bordered" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("td", { staticStyle: { width: "15%" } }, [
                      _c("b", [_vm._v("Invoice")])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "85%" } }, [
                      _vm._v(_vm._s(_vm.invoice.invoice_number))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticStyle: { width: "15%" } }, [
                      _c("b", [_vm._v("Tanggal")])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "85%" } }, [
                      _vm._v(_vm._s(_vm._f("moment")(_vm.invoice.invoice_date)))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticStyle: { width: "15%" } }, [
                      _c("b", [_vm._v("Supplier")])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "85%" } }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.invoice.so.customer.customer_name)
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.invoice.so.customer.customer_address)
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.invoice.so.customer.customer_hp) +
                          "\n                                "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticStyle: { width: "15%" } }, [
                      _c("b", [_vm._v("PIC")])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "85%" } }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.invoice.so.user.username) +
                          "\n                                "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticStyle: { width: "15%" } }, [
                      _c("b", [_vm._v("Pembayaran")])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "85%" } }, [
                      _vm.invoice.paymentmethod.name === "Kredit"
                        ? _c("span", [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.invoice.paymentmethod.name)
                            ),
                            _c("br"),
                            _vm._v(
                              "\n                                        Tanggal Jatuh Tempo : "
                            ),
                            _c("b", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("moment")(_vm.invoice.payment_due_date)
                                )
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.invoice.paymentmethod.name === "Tunai"
                        ? _c("span", [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.v.paymentmethod.name) +
                                "\n                                    "
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_c("b", [_vm._v("Status")])]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.invoice.status === 0
                        ? _c(
                            "span",
                            {
                              staticClass: "badge badge-danger",
                              staticStyle: { padding: "5px" }
                            },
                            [
                              _c("i", { staticClass: "fa fa-times" }),
                              _vm._v(
                                " BELUM DIBAYAR\n                                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.invoice.status === 1
                        ? _c(
                            "span",
                            {
                              staticClass: "badge badge-success",
                              staticStyle: { padding: "5px" }
                            },
                            [
                              _c("i", { staticClass: "fa fa-check" }),
                              _vm._v(
                                " LUNAS\n                                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.invoice.status === 2
                        ? _c(
                            "span",
                            {
                              staticClass: "badge badge-warning",
                              staticStyle: { padding: "5px" }
                            },
                            [
                              _c("i", { staticClass: "fa fa-refresh" }),
                              _vm._v(
                                " DIBAYAR SEBAGIAN\n                                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticStyle: { "margin-top": "25px" } }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("hr"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("Data Barang")]),
                  _vm._v(" "),
                  _vm.showTable == true
                    ? _c("transition", { attrs: { name: "fade" } }, [
                        _c("div", { staticClass: "table-responsive-sm" }, [
                          _c(
                            "table",
                            { staticClass: "table table-hover table-bordered" },
                            [
                              _c("thead", { staticClass: "thead-dark" }, [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "30%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Barang")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "10%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Harga")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "5%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Jumlah")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "10%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Subtotal")]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                [
                                  _vm._l(_vm.detail, function(v) {
                                    return _c("tr", { key: v.id }, [
                                      _c("td", [
                                        _vm._v(_vm._s(v.item.item_name))
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: { "text-align": "right" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm._f("rupiah")(v.price))
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: {
                                            "text-align": "center"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(v.quantity) +
                                              " " +
                                              _vm._s(v.item.unit.unit_name)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: { "text-align": "right" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm._f("rupiah")(v.subtotal))
                                          )
                                        ]
                                      )
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" },
                                        attrs: { colspan: "3" }
                                      },
                                      [_c("b", [_vm._v("Total Harga")])]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _c("b", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("rupiah")(
                                                _vm.invoice.total
                                              )
                                            )
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.invoice.status == 2
                                    ? _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "text-align": "right"
                                            },
                                            attrs: { colspan: "3" }
                                          },
                                          [
                                            _c("b", [
                                              _vm._v("Dibayarkan Sebagian")
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "text-align": "right"
                                            }
                                          },
                                          [
                                            _c("b", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("rupiah")(
                                                    _vm.invoice.total -
                                                      _vm.payment.total
                                                  )
                                                )
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.invoice.status == 2
                                    ? _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "text-align": "right"
                                            },
                                            attrs: { colspan: "3" }
                                          },
                                          [_c("b", [_vm._v("Sisa Pembayaran")])]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "text-align": "right"
                                            }
                                          },
                                          [
                                            _c("b", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("rupiah")(
                                                    _vm.payment.total
                                                  )
                                                )
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                ],
                                2
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm.payment_data.length > 0
              ? _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("h3", [_vm._v("Data Pembayaran")]),
                      _vm._v(" "),
                      _c("transition", { attrs: { name: "fade" } }, [
                        _c("div", { staticStyle: { "overflow-x": "auto" } }, [
                          _c(
                            "table",
                            { staticClass: "table table-hover table-bordered" },
                            [
                              _c("thead", { staticClass: "thead-dark" }, [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "30%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Tanggal Pembayaran")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "25%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Jumlah Pembayaran")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticStyle: {
                                        width: "25%",
                                        "text-align": "center"
                                      }
                                    },
                                    [_vm._v("Sisa Pembayaran")]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.payment_data, function(p) {
                                  return _c("tr", { key: p.id }, [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "center" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("moment")(p.payment_date)
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm._f("rupiah")(p.nominal))
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("rupiah")(
                                              p.total_payment - p.nominal
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.invoice.status !== 1
              ? _c("span", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          return _vm.togglePaymentModal()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-check" }),
                      _vm._v(" Proses Pembayaran\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-outline-danger",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { href: _vm.route }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ])
              : _c("span", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-info",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          return _vm.cetakInvoice(_vm.invoice.id)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-print" }),
                      _vm._v(" Cetak Invoice\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-outline-danger",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { href: _vm.route }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: { id: "payment_modal", tabindex: "-1", role: "dialog" }
              },
              [
                _c(
                  "div",
                  { staticClass: "modal-dialog", attrs: { role: "document" } },
                  [
                    _c("div", { staticClass: "modal-content" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "modal-body" },
                        [
                          _c("v-alert", { attrs: { alert: _vm.alert_modal } }),
                          _vm._v(" "),
                          _c("form", { attrs: { method: "POST" } }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c("label", [_vm._v("Tanggal Pembayaran *")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c("date-picker", {
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid":
                                            _vm.validasi.payment_date
                                        },
                                        attrs: {
                                          config: _vm.options,
                                          placeholder: "Tanggal Pembayaran",
                                          autocomplete: "off"
                                        },
                                        model: {
                                          value: _vm.payment.payment_date,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "payment_date",
                                              $$v
                                            )
                                          },
                                          expression: "payment.payment_date"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c("label", [_vm._v("Keterangan")]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.payment.note,
                                        expression: "payment.note"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: { value: _vm.payment.note },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.payment,
                                          "note",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-12" },
                                [
                                  _c("label", [_vm._v("Nominal Pembayaran *")]),
                                  _vm._v(" "),
                                  _c("money", {
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.validasi.nominal
                                    },
                                    attrs: {
                                      placeholder: "Masukkan Nominal Pembayaran"
                                    },
                                    model: {
                                      value: _vm.payment.nominal,
                                      callback: function($$v) {
                                        _vm.$set(_vm.payment, "nominal", $$v)
                                      },
                                      expression: "payment.nominal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c("label", [
                                    _vm._v("Jumlah Yang Harus Dibayar *")
                                  ]),
                                  _vm._v(" "),
                                  _c("money", {
                                    staticClass: "form-control",
                                    attrs: { readonly: "readonly" },
                                    model: {
                                      value: _vm.payment.total,
                                      callback: function($$v) {
                                        _vm.$set(_vm.payment, "total", $$v)
                                      },
                                      expression: "payment.total"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      class: {
                                        "btn-block": _vm.mobile === true
                                      },
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.processPayment()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-shopping-cart"
                                      }),
                                      _vm._v(
                                        " Proses Pembayaran\n                                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger",
                                      class: {
                                        "btn-block": _vm.mobile === true
                                      },
                                      attrs: {
                                        type: "button",
                                        "data-dismiss": "modal"
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-times" }),
                                      _vm._v(
                                        " Batal\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" })
                    ])
                  ]
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Form Invoice")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-calendar" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e56236e4", module.exports)
  }
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(155)
/* template */
var __vue_template__ = __webpack_require__(165)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f348271a", Component.options)
  } else {
    hotAPI.reload("data-v-f348271a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Topbar_vue__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Topbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Topbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer_vue__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Footer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Sidebar_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Sidebar_vue__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["e" /* mapState */])(['token']), {}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["e" /* mapState */])(['userid']), {}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["e" /* mapState */])(['role']), {}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])(['isAuth'])),
  components: {
    'app-topbar': __WEBPACK_IMPORTED_MODULE_1__components_Topbar_vue___default.a,
    'app-footer': __WEBPACK_IMPORTED_MODULE_2__components_Footer_vue___default.a,
    'app-sidebar': __WEBPACK_IMPORTED_MODULE_3__components_Sidebar_vue___default.a
  }
});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(157)
/* template */
var __vue_template__ = __webpack_require__(158)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Topbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57e4246e", Component.options)
  } else {
    hotAPI.reload("data-v-57e4246e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      { staticClass: "c-header c-header-dark bg-dark c-header-fixed" },
      [
        _c(
          "button",
          {
            staticClass: "c-header-toggler c-class-toggler mfs-3",
            attrs: {
              type: "button",
              "data-target": "#sidebar",
              "data-class": "c-sidebar-show",
              responsive: "true"
            }
          },
          [_c("span", { staticClass: "c-header-toggler-icon" })]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-57e4246e", module.exports)
  }
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(160)
/* template */
var __vue_template__ = __webpack_require__(161)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61a7c374", Component.options)
  } else {
    hotAPI.reload("data-v-61a7c374", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "c-footer bg-dark" }, [
      _c("span", { staticClass: "text-light" }, [
        _c("strong", [_vm._v("PT Sosro Retno Copyright © 2020")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61a7c374", module.exports)
  }
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(163)
/* template */
var __vue_template__ = __webpack_require__(164)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81fbb27e", Component.options)
  } else {
    hotAPI.reload("data-v-81fbb27e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "c-sidebar c-sidebar-dark bg-dark c-sidebar-fixed c-sidebar-lg-show",
      attrs: { id: "sidebar" }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("ul", { staticClass: "c-sidebar-nav ps ps--active-y" }, [
        _c(
          "li",
          { staticClass: "c-sidebar-nav-item" },
          [
            _c(
              "router-link",
              {
                staticClass: "c-sidebar-nav-link",
                attrs: { to: { name: "dashboard" } }
              },
              [
                _c("i", { staticClass: "c-sidebar-nav-icon fa fa-home" }),
                _vm._v(" Beranda\n            ")
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "c-sidebar-nav-dropdown" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("ul", { staticClass: "c-sidebar-nav-dropdown-items" }, [
            _c(
              "li",
              { staticClass: "c-sidebar-nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "c-sidebar-nav-link",
                    attrs: { to: { name: "po.index" } }
                  },
                  [_vm._v("Purchase Order")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "c-sidebar-nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "c-sidebar-nav-link",
                    attrs: { to: { name: "so.index" } }
                  },
                  [_vm._v("Sales Order")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c-sidebar-nav-dropdown" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("ul", { staticClass: "c-sidebar-nav-dropdown-items" }, [
            _c(
              "li",
              { staticClass: "c-sidebar-nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "c-sidebar-nav-link",
                    attrs: { to: { name: "poinvoice.index" } }
                  },
                  [_vm._v("Pembelian")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "c-sidebar-nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "c-sidebar-nav-link",
                    attrs: { to: { name: "salesinvoice.index" } }
                  },
                  [_vm._v("Penjualan")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "c-sidebar-nav-item" },
          [
            _c(
              "router-link",
              {
                staticClass: "c-sidebar-nav-link",
                attrs: { to: { name: "item.index" } }
              },
              [
                _c("i", { staticClass: "c-sidebar-nav-icon fa fa-dropbox" }),
                _vm._v(" Barang\n            ")
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "c-sidebar-nav-dropdown" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("ul", { staticClass: "c-sidebar-nav-dropdown-items" }, [
            _c(
              "li",
              { staticClass: "c-sidebar-nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "c-sidebar-nav-link",
                    attrs: { to: { name: "user.index" } }
                  },
                  [_vm._v("Pengguna")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "c-sidebar-nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "c-sidebar-nav-link",
                    attrs: { to: { name: "customer.index" } }
                  },
                  [_vm._v("Customer")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "c-sidebar-nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "c-sidebar-nav-link",
                    attrs: { to: { name: "supplier.index" } }
                  },
                  [_vm._v("Supplier")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "c-sidebar-nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "c-sidebar-nav-link",
                    attrs: { to: { name: "category.index" } }
                  },
                  [
                    _vm._v(
                      "\n                        Cabang Bisnis\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "c-sidebar-nav-item" },
          [
            _c(
              "router-link",
              { staticClass: "c-sidebar-nav-link", attrs: { to: "dashboard" } },
              [
                _c("i", { staticClass: "c-sidebar-nav-icon fa fa-lock" }),
                _vm._v(" Keluar\n            ")
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "c-sidebar-brand" }, [
      _c("img", {
        staticClass: "c-sidebar-brand-minimized",
        attrs: { src: "/img/logo-mini.png", height: "46" }
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "c-sidebar-brand-full",
        attrs: { src: "/img/logo-h.png", height: "46" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "c-sidebar-nav-dropdown-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "c-sidebar-nav-icon fa fa-shopping-bag" }),
        _vm._v(" Transaksi\n            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "c-sidebar-nav-dropdown-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "c-sidebar-nav-icon fa fa-file-text-o" }),
        _vm._v(" Invoice\n            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "c-sidebar-nav-dropdown-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "c-sidebar-nav-icon fa fa-briefcase" }),
        _vm._v(" Master\n            ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-81fbb27e", module.exports)
  }
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isAuth
    ? _c(
        "div",
        [
          _c("app-sidebar"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "c-wrapper" },
            [
              _c("app-topbar"),
              _vm._v(" "),
              _c("div", { staticClass: "c-body" }, [
                _c("main", { staticClass: "c-main" }, [
                  _c(
                    "div",
                    { staticClass: "container-fluid" },
                    [_c("router-view")],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("app-footer")
            ],
            1
          )
        ],
        1
      )
    : _c("div", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f348271a", module.exports)
  }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(167)
/* template */
var __vue_template__ = __webpack_require__(168)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b2bf401", Component.options)
  } else {
    hotAPI.reload("data-v-7b2bf401", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['alert']
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.alert.empty === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-danger",
            staticStyle: { "text-align": "center" },
            attrs: { role: "alert" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" DATA KOSONG\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.error === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-danger",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" TERJADI KESALAHAN! SILAHKAN ULANGI KEMBALI!\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.duplicate === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-danger",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(
              " DATA YANG SAMA SUDAH TERSIMPAN DALAM RECORD SEBELUMNYA!\n    "
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.delete === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-success",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" DATA BERHASIL DIHAPUS!\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.save === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-success",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" DATA BERHASIL DISIMPAN!\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.update === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-success",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" DATA BERHASIL DIPERBAHARUI!\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.reset === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-success",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" PASSWORD BERHASIL DIRESET ULANG!\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.validate === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-danger",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" SILAHKAN PERIKSA KEMBALI FORM ANDA!\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.validatepassword === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-danger",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" PASSWORD TIDAK SAMA! SILAHKAN ULANGI KEMBALI\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.alert.checkout === true
      ? _c(
          "div",
          {
            staticClass: "alert alert-success",
            staticStyle: { "text-align": "center" }
          },
          [
            _c("i", { staticClass: "fa fa-exclamation-triangle" }),
            _vm._v(" PROSES CHECKOUT BERHASIL!\n    ")
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b2bf401", module.exports)
  }
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(170)
/* template */
var __vue_template__ = __webpack_require__(171)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7acf176", Component.options)
  } else {
    hotAPI.reload("data-v-d7acf176", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pagination']
});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("ul", { staticClass: "pagination justify-content-center" }, [
          _vm.pagination.page === 1
            ? _c("li", { staticClass: "page-item disabled" }, [
                _c("a", { staticClass: "page-link" }, [_vm._v("« Sebelumnya")])
              ])
            : _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    on: {
                      click: function($event) {
                        return _vm.$emit("previous")
                      }
                    }
                  },
                  [_vm._v("« Sebelumnya")]
                )
              ]),
          _vm._v(" "),
          _vm.pagination.page >= _vm.pagination.last
            ? _c("li", { staticClass: "page-item disabled" }, [
                _c("a", { staticClass: "page-link" }, [_vm._v("Selanjutnya »")])
              ])
            : _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    on: {
                      click: function($event) {
                        return _vm.$emit("next")
                      }
                    }
                  },
                  [_vm._v("Selanjutnya »")]
                )
              ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d7acf176", module.exports)
  }
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(173)
/* template */
var __vue_template__ = __webpack_require__(174)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Delete.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38a53354", Component.options)
  } else {
    hotAPI.reload("data-v-38a53354", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["deleteModal", "id", "element"],
  methods: {
    close: function close() {
      this.$emit('close');
    },
    deleteButton: function deleteButton() {
      this.$emit('delete', this.id);
    }
  }
});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: _vm.element, tabindex: "-1", role: "dialog" },
        on: { close: _vm.close }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "button" },
                    on: { click: _vm.deleteButton }
                  },
                  [
                    _c("i", { staticClass: "fa fa-check-circle-o" }),
                    _vm._v(" Ya\n                    ")
                  ]
                ),
                _vm._v(" "),
                _vm._m(2)
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Konfirmasi")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("p", [_vm._v("Anda Akan Menghapus Data Ini, Teruskan?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _c("i", { staticClass: "fa fa-times-circle-o" }),
        _vm._v(" Batal\n                    ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38a53354", module.exports)
  }
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(176)
/* template */
var __vue_template__ = __webpack_require__(177)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Spinner.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ae326fe", Component.options)
  } else {
    hotAPI.reload("data-v-7ae326fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["active"]
});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.active === true
    ? _c("div", { staticClass: "d-flex justify-content-center" }, [_vm._m(0)])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "spinner-border",
        staticStyle: { width: "4rem", height: "4rem" },
        attrs: { role: "status" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ae326fe", module.exports)
  }
}

/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */,
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(193)
/* template */
var __vue_template__ = __webpack_require__(194)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/user/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38b630ad", Component.options)
  } else {
    hotAPI.reload("data-v-38b630ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {},
      category: {},
      search: {
        q: "",
        category: ""
      },
      alert: {
        error: false,
        empty: false,
        "delete": false
      },
      pagination: {
        page: 1,
        last: 0,
        total: 0,
        to: 0,
        from: 0
      },
      isLoading: false,
      showForm: false,
      showTable: false,
      id: ""
    };
  },
  props: ["mobile"],
  methods: {
    toggle: function toggle() {
      this.showForm = !this.showForm;
    },
    clear: function clear() {
      this.search.q = "";
      this.search.category = "";
      this.fetchData();
    },
    nextPage: function nextPage() {
      this.pagination.page++;
      this.fetchData();
    },
    prevPage: function prevPage() {
      this.pagination.page--;
      this.fetchData();
    },
    toggleModal: function toggleModal(id) {
      $("#delete_modal").modal("show");
      this.id = id;
    },
    fetchData: function fetchData() {
      var _this = this;

      var query = this.generateParams();
      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData("/api/user?" + query + "&page=" + this.pagination.page).then(function (response) {
        _this.renderData(response);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.alert.error = true;
        console.log(error);
      });
    },
    renderData: function renderData(response) {
      if (response.total === 0) {
        this.showTable = false;
        this.alert.empty = true;
        this.alert.error = false;
      } else {
        this.showTable = true;
        this.alert.empty = false;
        this.alert.error = false;
        this.user = response.data;
        this.pagination.last = response.last_page;
        this.pagination.from = response.from;
        this.pagination.to = response.to;
        this.pagination.total = response.total;
      }
    },
    generateParams: function generateParams() {
      var _this2 = this;

      return Object.keys(this.search).map(function (key) {
        return key + "=" + _this2.search[key];
      }).join("&");
    },
    deleteData: function deleteData(id) {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].deleteData("/api/user?id=" + id).then(function (response) {
        if (response.status === 'ok') {
          $('#delete_modal').modal('hide');

          _this3.$swal("Berhasil!", "Pengguna Berhasil Dinonaktifkan!", "success");

          _this3.fetchData();

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      })["catch"](function (error) {
        $('#delete_modal').modal('hide');

        _this3.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        _this3.fetchData();

        console.log(error);
      });
    },
    getCategory: function getCategory() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/category?all=true').then(function (response) {
        _this4.category = response;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
    this.fetchData();
  },
  mounted: function mounted() {
    this.getCategory();
    this.fetchData();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c(
        "div",
        { staticClass: "pull-right" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-info mb-2",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggle($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v(" Form Pencarian\n            ")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success mb-2",
              attrs: { to: { name: "user.create" } }
            },
            [
              _c("i", { staticClass: "fa fa-plus" }),
              _vm._v(" Tambah Data\n            ")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showForm,
              expression: "showForm"
            }
          ],
          staticClass: "card",
          staticStyle: { "margin-top": "50px" }
        },
        [
          _c("div", { staticClass: "card-body table-responsive" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.fetchData()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search.q,
                          expression: "search.q"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Username / Nama Pengguna"
                      },
                      domProps: { value: _vm.search.q },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.search, "q", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.search.category,
                            expression: "search.category"
                          }
                        ],
                        staticClass: "form-control",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.search,
                              "category",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Pilih Cabang Bisnis")
                        ]),
                        _vm._v(" "),
                        _vm._l(this.category, function(val) {
                          return _c(
                            "option",
                            { key: val.id, domProps: { value: val.id } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(val.category_name) +
                                  "\n                                "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "input-group col-md-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success mr-sm-2",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "submit" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-search" }),
                        _vm._v(" Cari Data\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-info",
                        class: { "btn-block": _vm.mobile === true },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.clear($event)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-refresh" }),
                        _vm._v(" Reset\n                            ")
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _vm.showTable == true
          ? _c("div", [
              _vm.mobile === true
                ? _c(
                    "div",
                    _vm._l(_vm.user, function(v) {
                      return _c("div", { key: v.id, staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("table", { staticClass: "table-noborder" }, [
                            _c("tr", [
                              _c("td", [_vm._v("Username")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", { attrs: { scope: "row" } }, [
                                _vm._v(_vm._s(v.username))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Jabatan")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.level))])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Cabang Bisnis")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(v.category.category_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Status")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(v.active))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "summary" }, [
                            _c(
                              "span",
                              { staticClass: "buttons" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-warning mr-2",
                                    attrs: {
                                      to: {
                                        name: "user.edit",
                                        params: { id: v.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-wrench" }),
                                    _vm._v(
                                      " Ubah\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleModal(v.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-trash" }),
                                    _vm._v(
                                      " Non Aktifkan\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                : _c("div", { staticClass: "table-responsive" }, [
                    _c("div", [
                      _c(
                        "table",
                        {
                          staticClass: "table table-bordered",
                          staticStyle: { "min-width": "100%" }
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.user, function(v) {
                              return _c("tr", { key: v.id }, [
                                _c("th", { attrs: { scope: "row" } }, [
                                  _vm._v(_vm._s(v.username))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(v.category.category_name))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(v.level))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(v.active))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "text-center" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning mr-2",
                                          attrs: {
                                            to: {
                                              name: "user.edit",
                                              params: { id: v.id }
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-wrench"
                                          }),
                                          _vm._v(
                                            " Ubah\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-sm btn-danger",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleModal(v.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash-o"
                                          }),
                                          _vm._v(
                                            " Non Aktifkan\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    ])
                  ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("v-delete", {
          attrs: { element: "delete_modal", id: _vm.id },
          on: { delete: _vm.deleteData }
        }),
        _vm._v(" "),
        _vm.showTable === true
          ? _c(
              "div",
              { staticClass: "card-footer clearfix" },
              [
                _vm.showTable === true
                  ? _c("v-pagination", {
                      attrs: { pagination: _vm.pagination },
                      on: { next: _vm.nextPage, previous: _vm.prevPage }
                    })
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-dark" }, [
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "20%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Username")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "20%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Cabang Bisnis")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "20%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Jabatan")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "20%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Status")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { width: "20%" },
            attrs: { scope: "col" }
          },
          [_vm._v("Tindakan")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38b630ad", module.exports)
  }
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(196)
/* template */
var __vue_template__ = __webpack_require__(197)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/user/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05c42fb1", Component.options)
  } else {
    hotAPI.reload("data-v-05c42fb1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      category: {},
      user: {
        'category_id': '',
        'username': ''
      },
      validasi: {
        'category_id': '',
        'username': ''
      },
      alert: {
        error: false,
        save: false,
        duplicate: false,
        validate: false
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.save = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].postData('/api/user', this.user).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 2000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.$swal("Berhasil!", "Data Berhasil Disimpan!", "success");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        this.reset();
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    reset: function reset() {
      this.user.category_id = '';
      this.user.username = '';
    },
    validate: function validate() {
      var condition = 0;

      if (this.user.category_id.length === 0) {
        this.validasi.category_id = true;
        condition++;
      } else {
        this.validasi.category_id = false;
      }

      if (this.user.username.length === 0) {
        this.validasi.username = true;
        condition++;
      } else {
        this.validasi.username = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    getCategory: function getCategory() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/category?all=true').then(function (response) {
        _this3.category = response;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
  },
  mounted: function mounted() {
    this.getCategory();
    this.isLoading = false;
  }
});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Cabang Bisnis")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.category_id,
                        expression: "user.category_id"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.validasi.category_id },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.user,
                          "category_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Pilih Cabang Bisnis")
                    ]),
                    _vm._v(" "),
                    _vm._l(this.category, function(v) {
                      return _c(
                        "option",
                        { key: v.id, domProps: { value: v.id } },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(v.category_name) +
                              "\n                        "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Username")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.username,
                      expression: "user.username"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.username },
                  attrs: { type: "text", placeholder: "Masukkan Username" },
                  domProps: { value: _vm.user.username },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "username", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "form-group col-md-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Simpan\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { to: { name: "user.index" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05c42fb1", module.exports)
  }
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(199)
/* template */
var __vue_template__ = __webpack_require__(200)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/user/Update.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-baf7ce04", Component.options)
  } else {
    hotAPI.reload("data-v-baf7ce04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {},
      category: {},
      alert: {
        error: false,
        update: false,
        validate: false,
        duplicate: false
      },
      validasi: {
        'category_id': '',
        'username': ''
      },
      isLoading: false
    };
  },
  props: ['mobile'],
  methods: {
    clearAlert: function clearAlert() {
      this.alert.error = false;
      this.alert.update = false;
      this.alert.duplicate = false;
      this.alert.validate = false;
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      this.clearAlert();
      var validasi = this.validate();

      if (validasi === true) {
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].putData('/api/user?id' + this.$route.params.id, this.user).then(function (result) {
          _this.response(result);
        })["catch"](function (error) {
          _this.isLoading = false;

          _this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

          console.log(error);
        });
      } else {
        this.alert.validate = true;
        setTimeout(function () {
          return _this.alert.validate = false;
        }, 3000);
      }
    },
    response: function response(result) {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);

      if (result.status === 'ok') {
        this.$swal("Berhasil!", "Data Berhasil Diubah!", "success");
        setTimeout(function () {
          return _this2.getUser();
        }, 5000);
      } else if (result.status === 'duplicate') {
        this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
        setTimeout(function () {
          return _this2.alert.update = false;
        }, 5000);
      }
    },
    validate: function validate() {
      var condition = 0;

      if (this.user.category_id.length === 0) {
        this.validasi.category_id = true;
        condition++;
      } else {
        this.validasi.category_id = false;
      }

      if (this.user.username.length === 0) {
        this.validasi.username = true;
        condition++;
      } else {
        this.validasi.username = false;
      }

      if (condition > 0) {
        return false;
      } else {
        return true;
      }
    },
    getCategory: function getCategory() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/category?all=true').then(function (response) {
        _this3.category = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getUser: function getUser() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].fetchData('/api/user/show/' + this.$route.params.id).then(function (response) {
        _this4.user = response;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    resetPassword: function resetPassword() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_0__services_js__["a" /* default */].putData('/api/user/resetpassword?id=' + this.$route.params.id).then(function (result) {
        setTimeout(function () {
          _this5.isLoading = false;
        }, 1000);

        if (result.status === 'ok') {
          _this5.$swal("Berhasil!", "Password Berhasil Direset ulang!", "success");
        }
      })["catch"](function (error) {
        _this5.isLoading = false;

        _this5.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");

        console.log(error);
      });
    }
  },
  created: function created() {
    this.isLoading = true;
    this.getUser();
    this.getCategory();
  },
  mounted: function mounted() {
    this.isLoading = false;
  }
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("v-alert", { attrs: { alert: _vm.alert } }),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            opacity: 100,
            active: _vm.isLoading,
            "can-cancel": false,
            "is-full-page": false
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Cabang Bisnis")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.category_id,
                        expression: "user.category_id"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.validasi.category_id },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.user,
                          "category_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(this.category, function(v) {
                    return _c(
                      "option",
                      { key: v.id, domProps: { value: v.id } },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(v.category_name) +
                            "\n                        "
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", [_vm._v("Username")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.username,
                      expression: "user.username"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.validasi.username },
                  attrs: { type: "text", placeholder: "Masukkan Username" },
                  domProps: { value: _vm.user.username },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "username", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "form-group col-md-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Simpan Data\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetPassword()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-refresh" }),
                      _vm._v(" Reset Password\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary",
                      class: { "btn-block": _vm.mobile === true },
                      attrs: { to: { name: "user.index" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-arrow-left" }),
                      _vm._v(" Kembali\n                    ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-baf7ce04", module.exports)
  }
}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(202)
/* template */
var __vue_template__ = __webpack_require__(203)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/user/User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14775e40", Component.options)
  } else {
    hotAPI.reload("data-v-14775e40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14775e40", module.exports)
  }
}

/***/ })
],[20]);