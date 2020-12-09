import $axios from '../api.js'

const state = () => ({

})

const mutations = {
    
}

const actions = {
    submit({ commit }, payload) {
        localStorage.setItem('token', null)
        localStorage.setItem('userid', null)
        localStorage.setItem('role', null)
        commit('SET_TOKEN', null, { root: true })
        commit('SET_USER_ID', null, { root: true })
        commit('SET_ROLE', null, { root: true })
        return new Promise((resolve, reject) => {
            $axios.post('/login', payload)
            .then((response) => {
                if (response.data.status == 'success') {
                    localStorage.setItem('token', response.data.data.token)
                    localStorage.setItem('userid', response.data.data.id)
                    localStorage.setItem('role', response.data.data.role)
                    commit('SET_TOKEN', response.data.data.token, { root: true })
                    commit('SET_USER_ID', response.data.data.id, { root: true })
                    commit('SET_ROLE', response.data.data.role, { root: true })
                } else {
                    commit('SET_ERRORS', { invalid: 'Username / Password Salah' }, { root: true })
                }
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}