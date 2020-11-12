"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueLoadingOverlay = _interopRequireDefault(require("vue-loading-overlay"));

var _vueCookies = _interopRequireDefault(require("vue-cookies"));

var _moment = _interopRequireDefault(require("moment/moment"));

require("moment/locale/id");

var _vMoney = _interopRequireDefault(require("v-money"));

var _accounting = _interopRequireDefault(require("accounting"));

var _vueBootstrapDatetimepicker = _interopRequireDefault(require("vue-bootstrap-datetimepicker"));

var _vueSwal = _interopRequireDefault(require("vue-swal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*jshint esversion: 8 */

/* if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js');
    });
} */
_vue["default"].use(_vMoney["default"], {
  decimal: ',',
  thousands: '.',
  prefix: 'Rp ',
  suffix: '',
  precision: 0,
  masked: true
});

_vue["default"].use(_vueBootstrapDatetimepicker["default"]);

_vue["default"].use(_accounting["default"]);

_vue["default"].use(_vueCookies["default"]);

_vue["default"].use(_vueSwal["default"]); // Component Config


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

_vueCookies["default"].config('1d'); // Date Filtering


_vue["default"].filter('moment', function (date) {
  return (0, _moment["default"])(date).format('D MMMM YYYY');
}); // Date Filtering


_vue["default"].filter('long_moment', function (date) {
  return (0, _moment["default"])(date).format('HH:mm [WIB], DD MMMM YYYY');
}); // Short Date Filtering


_vue["default"].filter('short_moment', function (date) {
  return (0, _moment["default"])(date).format('D/MM/YYYY');
}); // Generate Year


_vue["default"].filter('year', function (date) {
  return (0, _moment["default"])(date).format('YYYY');
}); // Date Filtering


_vue["default"].filter('difference', function (date) {
  var now = (0, _moment["default"])(new Date());
  var end = (0, _moment["default"])(new Date(date));

  var duration = _moment["default"].duration(end.diff(now));

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


_vue["default"].filter('short_difference', function (since, until) {
  var from = (0, _moment["default"])(new Date(since));
  var end = (0, _moment["default"])(new Date(until));

  var duration = _moment["default"].duration(end.diff(from));

  var days = duration.asDays();
  var callback;

  if (parseInt(days) > 0) {
    callback = days;
  } else if (parseInt(days) === 0) {
    callback = 1;
  }

  return callback;
}); // Filter Generate Date


_vue["default"].filter('month', function (month) {
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


_vue["default"].filter('rupiah', function (amount) {
  return _accounting["default"].formatMoney(amount, "", 0, ".", ",");
});
/**
 *  Component Registration
 */


_vue["default"].component('v-alert', require('./components/Alert.vue'));

_vue["default"].component('v-pagination', require('./components/Pagination.vue'));

_vue["default"].component('v-delete', require('./components/Delete.vue')); //Vue.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap);


_vue["default"].component('loading', _vueLoadingOverlay["default"]);

_vue["default"].component('login', require('./views/Login.vue'));

_vue["default"].component('dashboard', require('./views/Dashboard.vue'));

_vue["default"].component('profile', require('./views/Profile.vue'));

_vue["default"].component('item-index', require('./views/Item/Index.vue'));

_vue["default"].component('item-create', require('./views/Item/Create.vue'));

_vue["default"].component('item-update', require('./views/Item/Update.vue'));

_vue["default"].component('category-index', require('./views/Category/Index.vue'));

_vue["default"].component('category-create', require('./views/Category/Create.vue'));

_vue["default"].component('category-update', require('./views/Category/Update.vue'));

_vue["default"].component('supplier-index', require('./views/Supplier/Index.vue'));

_vue["default"].component('supplier-create', require('./views/Supplier/Create.vue'));

_vue["default"].component('supplier-update', require('./views/Supplier/Update.vue'));

_vue["default"].component('customer-index', require('./views/Customer/Index.vue'));

_vue["default"].component('customer-create', require('./views/Customer/Create.vue'));

_vue["default"].component('customer-update', require('./views/Customer/Update.vue'));

_vue["default"].component('po-index', require('./views/PO/Index.vue'));

_vue["default"].component('po-detail', require('./views/PO/Detail.vue'));

_vue["default"].component('po-cart', require('./views/PO/Cart.vue'));

_vue["default"].component('poinvoice-index', require('./views/POInvoice/Index.vue'));

_vue["default"].component('poinvoice-detail', require('./views/POInvoice/Detail.vue'));

_vue["default"].component('so-index', require('./views/SO/Index.vue'));

_vue["default"].component('so-detail', require('./views/SO/Detail.vue'));

_vue["default"].component('so-cart', require('./views/SO/Cart.vue'));

_vue["default"].component('soinvoice-index', require('./views/SOInvoice/Index.vue'));

_vue["default"].component('soinvoice-detail', require('./views/SOInvoice/Detail.vue'));

_vue["default"].component('user-index', require('./views/User/Index.vue'));

_vue["default"].component('user-create', require('./views/User/Create.vue'));

_vue["default"].component('user-update', require('./views/User/Update.vue'));

_vue["default"].component('report', require('./views/Report.vue'));

_vue["default"].component('log-index', require('./views/Log.vue'));

_vue["default"].config.productionTip = false;
new _vue["default"]().$mount('#app');