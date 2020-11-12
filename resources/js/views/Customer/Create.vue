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
                                <label>Nama Customer</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Masukkan Nama Customer" 
                                    v-model="customer.customer_name" 
                                    :class="{ 'is-invalid': validasi.customer_name }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Kontak</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Masukkan Kontak" 
                                    v-model="customer.hp" 
                                    :class="{ 'is-invalid': validasi.hp }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Alamat</label>
                                <textarea 
                                    class="form-control" 
                                    v-model="customer.customer_address" 
                                    :class="{ 'is-invalid': validasi.customer_address }">
                                </textarea>
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
                customer: {
                    'customer_name': '',
                    'hp': '',
                    'customer_address': ''
                },
                validasi: {
                    'customer_name': '',
                    'hp': '',
                    'customer_address': ''
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
        props: ['api', 'route'],
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
                    service.postData(this.api, this.customer)
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
                this.customer.customer_name = '';
                this.customer.hp = '';
                this.customer.customer_address = '';
            },
            validate() {
                let condition = 0;

                if (this.customer.customer_name.length === 0) {
                    this.validasi.customer_name = true;
                    condition++;
                } else {
                    this.validasi.customer_name = false;
                }

                if (this.customer.hp.length === 0) {
                    this.validasi.hp = true;
                    condition++;
                } else {
                    this.validasi.hp = false;
                }

                if (this.customer.customer_address.length === 0) {
                    this.validasi.customer_address = true;
                    condition++;
                } else {
                    this.validasi.customer_address = false;
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
