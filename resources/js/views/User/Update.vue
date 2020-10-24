<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <v-alert :alert=alert></v-alert>
                    <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
                    <form method="POST" v-on:submit.prevent="onSubmit">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Username *</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Masukkan Username" 
                                    v-model="user.username" 
                                    :class="{ 'is-invalid': validasi.username }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Aktif *</label>
                                <select 
                                    v-model="user.active" 
                                    class="form-control" 
                                    :class="{ 'is-invalid': validasi.active }">
                                    <option value="">Pilih Status Aktivasi</option>
                                    <option 
                                        v-for="(v,k) in this.status_data" 
                                        :value="k" 
                                        :key="k">
                                        {{ v }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <b>*) Wajib Diisi</b>
                            </div>
                        </div>
                        <div class="row" v-if="mobile === true">
                            <div class="form-group col-md-12">
                                <button 
                                    type="submit" 
                                    class="btn btn-block btn-success">
                                    <i class="fa fa-save"></i> Simpan Data
                                </button>
                                <button 
                                    type="button" 
                                    class="btn btn-block btn-warning" 
                                    @click.prevent="resetPassword()">
                                    <i class="fa fa-refresh"></i> Reset Password
                                </button>
                                <a 
                                    :href="route" 
                                    class="btn btn-block btn-outline-danger">
                                    <i class="fa fa-arrow-left"></i> Kembali
                                </a>
                            </div>
                        </div>
                        <div class="row" v-else>
                            <div class="form-group col-md-12">
                                <button 
                                    type="submit"
                                    class="btn btn-success">
                                    <i class="fa fa-save"></i> Simpan Data
                                </button>
                                <button 
                                    type="button" 
                                    class="btn btn-warning" 
                                    @click.prevent="resetPassword()">
                                    <i class="fa fa-refresh"></i> Reset Password
                                </button>
                                <a 
                                    :href="route" 
                                    class="btn btn-outline-danger">
                                    <i class="fa fa-arrow-left"></i> Kembali
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import service from './../../services.js';
    export default {
        data() {
            return {
                alert: {
                    error: false,
                    update: false,
                    validate:false,
                    duplicate:false
                },
                status_data: {
                    1:'Aktif',
                    0:'Non-Aktif'
                },
                validasi: {
                    'username': '',
                    'active': ''
                },
                isLoading: false,
            }
        },
        props: ['api', 'route', 'user', 'mobile'],
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
                    service.putData(this.api, this.user)
                        .then(result => {
                            this.response(result);
                        }).catch(error => {
                            this.isLoading = false;
                            this.alert.error = true;
                            window.scroll({top: 0, left: 0, behavior: 'smooth'});
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
                    this.alert.update = true;
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                    setTimeout(() => this.alert.update = false, 5000);
                } else if (result.status === 'duplicate') {
                    this.alert.duplicate = true;
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                    setTimeout(() => this.alert.update = false, 5000);
                }
            },
            resetPassword() {
                service.putData(this.reset_password)
                .then(result => {
                    setTimeout(() => { this.isLoading = false }, 1000);
                    if (result.status === 'ok') {
                        this.alert.reset = true;
                        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                        setTimeout(() => this.alert.reset = false, 5000);
                    }
                }).catch(error => {
                    this.isLoading = false;
                    this.alert.error = true;
                    window.scroll({top: 0, left: 0, behavior: 'smooth'});
                    console.log(error);
                });
            },
            validate() {
                let condition = 0;
                if (this.user.username.length === 0) {
                    this.validasi.username = true;
                    condition++;
                } else {
                    this.validasi.username = false;
                }

                if (this.user.active.length === 0) {
                    this.validasi.active = true;
                    condition++;
                } else {
                    this.validasi.active = false;
                }

                if (condition > 0) {
                    return false;
                } else {
                    return true;
                }
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
