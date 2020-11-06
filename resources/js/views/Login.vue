<template>
    <div>
        <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false" />
        <div class="login-logo">
            <img src="img/logo.png" width="100%;">
        </div>
        <transition name="fade">
            <form v-on:submit.prevent="onSubmit" method="post">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-user"></i></span>
                    </div>
                    <input class="form-control" type="text" v-model="userlogin.username" placeholder="Username" required>
                </div>
                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-lock"></i></span>
                    </div>
                    <input class="form-control" v-model="userlogin.password" type="password" placeholder="Password" required>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button class="btn btn-block btn-success px-4" type="submit">Login</button>
                        <div class="text-center" v-if="(login !== '') && (login === 'notfound')" style="margin-top:25px;">
                            <div class="alert alert-danger">Username / Password Salah!</div>
                        </div>
                        <div class="text-center" v-if="(login !== '') && (login === 'inactive')" style="margin-top:25px;">
                            <div class="alert alert-danger">Status User Tidak Aktif!</div>
                        </div>
                        <div class="text-center" v-if="(login !== '') && (login === 'error')" style="margin-top:25px;">
                            <div class="alert alert-danger">Terjadi Kesalahan!</div>
                        </div>
                    </div>
                </div>
            </form>
        </transition>
    </div>
</template>

<script>
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
    props: ["api", "redirect"],
    methods: {
        formReset() {
            this.userlogin.username = "";
            this.userlogin.password = "";
        },
        onSubmit(evt) {
            evt.preventDefault();
            this.isLoading = true;
            service.postData(this.api, this.userlogin)
                .then(result => {
                    if (result.login == "true") {
                        this.login = true;
                        this.generateCookie(result);
                        this.formReset();
                        window.location.href = this.redirect;
                    } else if (result.login === 'inactive') {
                        this.login = 'inactive';
                    } else {
                        this.login = 'notfound';
                    }
                    this.isLoading = false;
                })
                .catch(error => {
                    this.formReset();
                    this.isLoading = false;
                    this.login = 'error';
                });
        },
        generateCookie(result) {
            this.$cookies.set('username', result.username);
            this.$cookies.set('id', result.id);
            this.$cookies.set('level', result.level);
            this.$cookies.set('role', result.role);
            this.$cookies.set('login', result.login);
        }
    },
    created() {
        this.isLoading = true;
    },
    mounted() {
        this.isLoading = false;
    }
};
</script>
