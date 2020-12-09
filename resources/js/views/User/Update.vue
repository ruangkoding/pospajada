<template>
    <div class="card">
        <div class="card-body">
            <v-alert :alert=alert></v-alert>
            <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
            <form method="POST" v-on:submit.prevent="onSubmit">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Cabang Bisnis</label>
                        <select 
                            v-model="user.category_id" 
                            class="form-control"
                            :class="{ 'is-invalid': validasi.category_id }">
                            <option 
                                v-for="v in this.category" 
                                :value="v.id" 
                                :key="v.id">
                                {{ v.category_name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Username</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Masukkan Username" 
                            v-model="user.username" 
                            :class="{ 'is-invalid': validasi.username }">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <button 
                            type="submit" 
                            :class="{'btn-block': mobile === true }" 
                            class="btn btn-success">
                            <i class="fa fa-save"></i> Simpan Data
                        </button>
                        <button 
                            type="button" 
                            :class="{'btn-block': mobile === true }"
                            class="btn btn-warning" 
                            @click.prevent="resetPassword()">
                            <i class="fa fa-refresh"></i> Reset Password
                        </button>
                        <router-link 
                            :to="{ name: 'user.index' }" 
                            class="btn btn-secondary"
                            :class="{'btn-block': mobile === true }">  
                            <i class="fa fa-arrow-left"></i> Kembali
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import service from './../../services.js';
    export default {
        data() {
            return {
                user:{},
                category:{},
                alert: {
                    error: false,
                    update: false,
                    validate:false,
                    duplicate:false
                },
                validasi: {
                    'category_id': '',
                    'username': ''
                },
                isLoading: false,
            }
        },
        props: ['mobile'],
        methods: {
            clearAlert() {
                this.alert.error = false;
                this.alert.update = false;
                this.alert.duplicate = false;
                this.alert.validate = false;
            },
            onSubmit(evt) {
                evt.preventDefault();
                this.clearAlert();
                let validasi = this.validate();
                if (validasi === true) {
                    this.isLoading = true;
                    service.putData('/api/user?id'+ this.$route.params.id, this.user)
                        .then(result => {
                            this.response(result);
                        }).catch(error => {
                            this.isLoading = false;
                            this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");
                            console.log(error);
                        });
                } else {
                    this.alert.validate = true;
                    setTimeout(() => this.alert.validate = false, 3000);
                }
            },
            response(result) {
                setTimeout(() => { this.isLoading = false }, 1000);
                if (result.status === 'ok') {
                    this.$swal("Berhasil!", "Data Berhasil Diubah!", "success");
                    setTimeout(() => this.getUser(), 5000);
                } else if (result.status === 'duplicate') {
                    this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
                    setTimeout(() => this.alert.update = false, 5000);
                }
            },
            validate() {
                let condition = 0;

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
            getCategory() {
                service.fetchData('/api/category?all=true')
                .then(response => {
                    this.category = response;
                })
                .catch(error => {
                    console.log(error);
                });
            },
            getUser() {
                service.fetchData('/api/user/show/' + this.$route.params.id)
                .then(response => {
                    this.user = response;
                })
                .catch(error => {
                    console.log(error);
                });
            },
            resetPassword() {
                service.putData('/api/user/resetpassword?id=' + this.$route.params.id)
                .then(result => {
                    setTimeout(() => { this.isLoading = false }, 1000);
                    if (result.status === 'ok') {
                        this.$swal("Berhasil!", "Password Berhasil Direset ulang!", "success");
                    }
                }).catch(error => {
                    this.isLoading = false;
                    this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");
                    console.log(error);
                });
            },
        },
        created() {
            this.isLoading = true;
            this.getUser();
            this.getCategory();
        },
        mounted() {
            this.isLoading = false;
        }
    };
</script>
