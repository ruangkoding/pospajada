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
                                <button 
                                    type="submit"
                                    :class="{'btn-block': mobile === true }"
                                    class="btn btn-success">
                                    <i class="fa fa-save"></i> Simpan
                                </button>
                                <a 
                                    :href="route" 
                                    :class="{'btn-block': mobile === true }"
                                    class="btn btn-secondary">
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
                user: {
                    'username': '',
                    'active': ''
                },
                validasi: {
                    'username': '',
                    'active': ''
                },
                status_data: {
                    1:'Aktif',
                    0:'Non-Aktif'
                },
                alert: {
                    error: false,
                    save: false,
                    duplicate: false,
                    validate: false
                },
                isLoading: false
            }
        },
        props: ['api', 'route', 'mobile'],
        methods: {
            clearAlert() {
                this.alert.error = false;
                this.alert.save = false;
                this.alert.duplicate = false;
                this.alert.validate = false;
            },
            onSubmit(evt) {
                evt.preventDefault();
                this.clearAlert();
                let validasi = this.validate();
                if (validasi === true) {
                    this.isLoading = true;
                    service.postData(this.api, this.user)
                        .then(result => {
                            this.response(result);
                        }).catch(error => {
                            this.isLoading = false;
                            this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");
                            window.scroll({top: 0, left: 0, behavior: 'smooth'});
                            console.log(error);
                        });
                } else {
                    this.alert.validate = true;
                    setTimeout(() => this.alert.validate = false, 2000);
                }
            },
            response(result) {
                setTimeout(() => { this.isLoading = false }, 1000);
                if (result.status === 'ok') {
                    this.$swal("Berhasil!", "Data Berhasil Disimpan!", "success");
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                    this.reset();
                } else if (result.status === 'duplicate') {
                    this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                }
            },
            reset() {
                this.user.username = '';
                this.user.active = ''
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
