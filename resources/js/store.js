import Vue from 'vue'
import Vuex from 'vuex'
import auth from './stores/auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth
    },
    state: {
        token: localStorage.getItem('token'),
        userid: localStorage.getItem('userid'),
        role: localStorage.getItem('role'),
        errors: []
    },
    getters: {
        isAuth: state => {
            return state.token != "null" && state.token != null
        },
        userRole: state => {
            return state.role != "null" && state.role != null
        },
        userId: state => {
            return state.userid != "null" && state.userid != null
        },
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload
        },
        SET_USER_ID(state, payload) {
            state.userid = payload
        },
        SET_ROLE(state, payload) {
            state.role = payload
        },
        SET_ERRORS(state, payload) {
            state.errors = payload
        },
        CLEAR_ERRORS(state) {
            state.errors = []
        }
    }
})

export default store