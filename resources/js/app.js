/*jshint esversion: 8 */
import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import VueCookies from 'vue-cookies';
import moment from 'moment/moment';
import 'moment/locale/id';
import money from 'v-money';
import accounting from 'accounting';
import datePicker from 'vue-bootstrap-datetimepicker';
import VueSwal from 'vue-swal';

/* if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js');
    });
} */

Vue.use(money, {
    decimal: ',',
    thousands: '.',
    prefix: 'Rp ',
    suffix: '',
    precision: 0,
    masked: true
});

Vue.use(datePicker);
Vue.use(accounting);
Vue.use(VueCookies);
Vue.use(VueSwal);

// Component Config
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

VueCookies.config('1d');

// Date Filtering
Vue.filter('moment', function (date) {
    return moment(date).format('D MMMM YYYY');
});

// Date Filtering
Vue.filter('long_moment', function (date) {
    return moment(date).format('HH:mm [WIB], DD MMMM YYYY');
});

// Short Date Filtering
Vue.filter('short_moment', function (date) {
    return moment(date).format('D/MM/YYYY');
});

// Generate Year
Vue.filter('year', function (date) {
    return moment(date).format('YYYY');
});

// Date Filtering
Vue.filter('difference', function (date) {
    const now = moment(new Date());
    const end = moment(new Date(date));

    const duration = moment.duration(end.diff(now));
    let days = duration.asDays();
    let months = duration.asMonths();
    let output = '';

    if ((parseInt(days) <= 60) && (parseInt(days) > 0)) {
        output = '<span class="badge alert-danger" style="font-size:100%;">' + parseInt(days) + ' Hari</span>';
    } else if (parseInt(days) > 60) {
        output = '<span class="badge alert-success" style="font-size:100%;">' + parseInt(months) + ' Bulan</span>';
    } else if (parseInt(days) === 0) {
        output = '<span class="badge alert-danger" style="font-size:100%;">Hari Ini</span>';
    } else if (parseInt(days) < 0) {
        output = '<span class="badge alert-default" style="font-size:100%;">Kontrak Habis</span>';
    }
    return output;
});

// Short Date Filtering
Vue.filter('short_difference', function (since, until) {
    const from = moment(new Date(since));
    const end = moment(new Date(until));
    const duration = moment.duration(end.diff(from));
    let days = duration.asDays();
    let callback;
    if (parseInt(days) > 0) {
        callback = days;
    } else if (parseInt(days) === 0) {
        callback = 1;
    }
    return callback;
});

// Filter Generate Date
Vue.filter('month', function (month) {
    const bulan = {
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
        12: 'Desember',
    };
    let output = bulan[month];
    return output;
});

// Filter Rupiah
Vue.filter('rupiah', function (amount) {
    return accounting.formatMoney(amount, "", 0, ".", ",");
});

/**
 *  Component Registration
 */
Vue.component('v-alert', require('./components/Alert.vue'));
Vue.component('v-pagination', require('./components/Pagination.vue'));
Vue.component('v-delete', require('./components/Delete.vue'));
//Vue.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap);
Vue.component('loading', Loading);
Vue.component('login', require('./views/Login.vue'));
Vue.component('dashboard', require('./views/Dashboard.vue'));
Vue.component('profile', require('./views/Profile.vue'));

Vue.component('item-index', require('./views/Item/Index.vue'));
Vue.component('item-create', require('./views/Item/Create.vue'));
Vue.component('item-update', require('./views/Item/Update.vue'));

Vue.component('category-index', require('./views/Category/Index.vue'));
Vue.component('category-create', require('./views/Category/Create.vue'));
Vue.component('category-update', require('./views/Category/Update.vue'));

Vue.component('supplier-index', require('./views/Supplier/Index.vue'));
Vue.component('supplier-create', require('./views/Supplier/Create.vue'));
Vue.component('supplier-update', require('./views/Supplier/Update.vue'));

Vue.component('customer-index', require('./views/Customer/Index.vue'));
Vue.component('customer-create', require('./views/Customer/Create.vue'));
Vue.component('customer-update', require('./views/Customer/Update.vue'));

Vue.component('po-index', require('./views/PO/Index.vue'));
Vue.component('po-detail', require('./views/PO/Detail.vue'));
Vue.component('po-cart', require('./views/PO/Cart.vue'));

Vue.component('poinvoice-index', require('./views/POInvoice/Index.vue'));
Vue.component('poinvoice-detail', require('./views/POInvoice/Detail.vue'));

Vue.component('so-index', require('./views/SO/Index.vue'));
Vue.component('so-detail', require('./views/SO/Detail.vue'));
Vue.component('so-cart', require('./views/SO/Cart.vue'));

Vue.component('soinvoice-index', require('./views/SOInvoice/Index.vue'));
Vue.component('soinvoice-detail', require('./views/SOInvoice/Detail.vue'));

Vue.component('user-index', require('./views/User/Index.vue'));
Vue.component('user-create', require('./views/User/Create.vue'));
Vue.component('user-update', require('./views/User/Update.vue'));

Vue.component('report', require('./views/Report.vue'));
Vue.component('log-index', require('./views/Log.vue'));

Vue.config.productionTip = false;
new Vue().$mount('#app');
