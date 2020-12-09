import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import store from './store.js'
import VueBodyClass from 'vue-body-class'

// customer
import Customer from './views/customer/Customer.vue'
import CustomerIndex from './views/customer/Index.vue'
import CustomerCreate from './views/customer/Create.vue'
import CustomerUpdate from './views/customer/Update.vue'

// supplier
import Supplier from './views/supplier/Supplier.vue'
import SupplierIndex from './views/supplier/Index.vue'
import SupplierCreate from './views/supplier/Create.vue'
import SupplierUpdate from './views/supplier/Update.vue'

// category
import Category from './views/category/Category.vue'
import CategoryIndex from './views/category/Index.vue'
import CategoryCreate from './views/category/Create.vue'
import CategoryUpdate from './views/category/Update.vue'

// item
import Item from './views/item/Item.vue'
import ItemIndex from './views/item/Index.vue'
import ItemCreate from './views/item/Create.vue'
import ItemUpdate from './views/item/Update.vue'

// user
import User from './views/user/User.vue'
import UserIndex from './views/user/Index.vue'
import UserCreate from './views/user/Create.vue'
import UserUpdate from './views/user/Update.vue'

// PO
import PO from './views/PO/PO.vue'
import POIndex from './views/PO/Index.vue'
import POCart from './views/PO/Cart.vue'
import PODetail from './views/PO/Detail.vue'

// SO
import SO from './views/SO/SO.vue'
import SOIndex from './views/SO/Index.vue'
import SOCart from './views/SO/Cart.vue'
import SODetail from './views/SO/Detail.vue'

// Purchase Invoice
import POInvoice from './views/POInvoice/POInvoice.vue'
import POInvoiceIndex from './views/POInvoice/Index.vue'
import POInvoiceDetail from './views/POInvoice/Detail.vue'

// SO
import SOInvoice from './views/SOInvoice/SOInvoice.vue'
import SOInvoiceIndex from './views/SOInvoice/Index.vue'
import SOInvoiceDetail from './views/SOInvoice/Detail.vue'

Vue.use(Router)

//DEFINE ROUTE
const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true, bodyClass:'app' }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { bodyClass: 'app flex-row align-items-center' }
    },
    {
        path: '/customer',
        name: 'customer',
        component: Customer,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'customer.index',
                component: CustomerIndex,
                meta: { title: 'Data Customer' }
            },
            {
                path: 'create',
                name: 'customer.create',
                component: CustomerCreate,
                meta: { title: 'Tambah Customer' }
            },
            {
                path: 'edit/:id',
                name: 'customer.edit',
                component: CustomerUpdate,
                meta: { title: 'Ubah Customer' }
            }
        ]
    },
    {
        path: '/supplier',
        name: 'supplier',
        component: Supplier,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'supplier.index',
                component: SupplierIndex,
                meta: { title: 'Data Supplier' }
            },
            {
                path: 'create',
                name: 'supplier.create',
                component: SupplierCreate,
                meta: { title: 'Tambah Supplier' }
            },
            {
                path: 'edit/:id',
                name: 'supplier.edit',
                component: SupplierUpdate,
                meta: { title: 'Ubah Supplier' }
            }
        ]
    },
    {
        path: '/category',
        name: 'category',
        component: Category,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'category.index',
                component: CategoryIndex,
                meta: { title: 'Cabang Bisnis' }
            },
            {
                path: 'create',
                name: 'category.create',
                component: CategoryCreate,
                meta: { title: 'Tambah Cabang Bisnis' }
            },
            {
                path: 'edit/:id',
                name: 'category.edit',
                component: CategoryUpdate,
                meta: { title: 'Ubah Cabang Bisnis' }
            }
        ]
    },
    {
        path: '/item',
        name: 'item',
        component: Item,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'item.index',
                component: ItemIndex,
                meta: { title: 'Data Barang' }
            },
            {
                path: 'create',
                name: 'item.create',
                component: ItemCreate,
                meta: { title: 'Tambah Barang' }
            },
            {
                path: 'edit/:id',
                name: 'item.edit',
                component: ItemUpdate,
                meta: { title: 'Ubah Barang' }
            }
        ]
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'user.index',
                component: UserIndex,
                meta: { title: 'Data Pengguna' }
            },
            {
                path: 'create',
                name: 'user.create',
                component: UserCreate,
                meta: { title: 'Tambah Pengguna' }
            },
            {
                path: 'edit/:id',
                name: 'user.edit',
                component: UserUpdate,
                meta: { title: 'Ubah Pengguna' }
            }
        ]
    },
    {
        path: '/po',
        name: 'po',
        component: PO,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'po.index',
                component: POIndex,
                meta: { title: 'Data Purchase Order' }
            },
            {
                path: 'cart',
                name: 'po.cart',
                component: POCart,
                meta: { title: 'Keranjang Belanja' }
            },
            {
                path: 'detail/:id',
                name: 'po.detail',
                component: PODetail,
                meta: { title: 'Detail Purchase Order' }
            }
        ]
    },
    {
        path: '/poinvoice',
        name: 'poinvoice',
        component: POInvoice,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'poinvoice.index',
                component: POInvoiceIndex,
                meta: { title: 'Data Invoice Pembelian' }
            },
            {
                path: 'detail/:id',
                name: 'poinvoice.detail',
                component: POInvoiceDetail,
                meta: { title: 'Detail Invoice' }
            }
        ]
    },
    {
        path: '/so',
        name: 'so',
        component: SO,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'so.index',
                component: SOIndex,
                meta: { title: 'Data Sales Order' }
            },
            {
                path: 'cart',
                name: 'so.cart',
                component: SOCart,
                meta: { title: 'Keranjang Belanja' }
            },
            {
                path: 'detail/:id',
                name: 'so.detail',
                component: SODetail,
                meta: { title: 'Detail Sales Order' }
            }
        ]
    }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

const vueBodyClass = new VueBodyClass(routes);
const DEFAULT_TITLE = 'SonoPOS';
router.beforeEach((to, from, next) => {
    vueBodyClass.guard(to, next)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth
        if (!auth) {
            next({ name: 'login' })
        } else {
            next()
        }
    } else {
        next()
    }
});

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router