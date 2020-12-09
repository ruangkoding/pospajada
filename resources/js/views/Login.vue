<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card-group">
                    <div class="card">
                        <div class="card-body">
                            <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false" />
                            <div class="login-logo">
                                <img src="/img/logo.png" width="100%;">
                            </div>
                            <transition name="fade">
                                <form v-on:submit.prevent="postLogin" method="post">
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="fa fa-user"></i>
                                            </span>
                                        </div>
                                        <input 
                                            class="form-control" 
                                            type="text" 
                                            v-model="userlogin.username" 
                                            placeholder="Username" 
                                            required>
                                    </div>
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                        </div>
                                        <input 
                                            class="form-control" 
                                            v-model="userlogin.password" 
                                            type="password" 
                                            placeholder="Password" 
                                            required>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <button 
                                                class="btn btn-block btn-success px-4" 
                                                type="submit">
                                                Login
                                            </button>
                                            <div 
                                                class="text-center" 
                                                v-if="(login !== '') && (login === 'notfound')" 
                                                style="margin-top:25px;">
                                                <div class="alert alert-danger">
                                                    Username / Password Salah!
                                                </div>
                                            </div>
                                            <div 
                                                class="text-center" 
                                                v-if="(login !== '') && (login === 'inactive')" 
                                                style="margin-top:25px;">
                                                <div class="alert alert-danger">
                                                    Status User Tidak Aktif!
                                                </div>
                                            </div>
                                            <div 
                                                class="text-center"
                                                v-if="(login !== '') && (login === 'error')" 
                                                style="margin-top:25px;">
                                                <div class="alert alert-danger">
                                                    Terjadi Kesalahan!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import service from './../services.js';

export default {
    data: function () {
        return {
            userlogin : {
                username: "",
                password: ""
            },
            login: "",
            form: "",
            isLoading:false
        };
    },
    computed: {
        ...mapGetters(['isAuth']),
        ...mapState(['errors'])
    },
    methods: {
        ...mapActions('auth', ['submit']),
        ...mapMutations(['CLEAR_ERRORS']),
        postLogin() {
            this.submit(this.userlogin).then(() => {
                if (this.isAuth) {
                    this.CLEAR_ERRORS()
                    this.$router.push({ name: 'dashboard' })
                }
            })
        }
    },
    created() {
        if (this.isAuth) {
            this.$router.push({ name: 'dashboard' })
        }
        this.isLoading = true;
    },
    mounted() {
        this.isLoading = false;
    }
};
</script>
