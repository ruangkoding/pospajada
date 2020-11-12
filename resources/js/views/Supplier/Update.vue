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
                                <label>Nama Supplier *</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Masukkan Nama Supplier" 
                                    v-model="supplier.supplier_name" 
                                    :class="{ 'is-invalid': validasi.supplier_name }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Kontak *</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Masukkan Kontak" 
                                    v-model="supplier.supplier_contact" 
                                    :class="{ 'is-invalid': validasi.supplier_contact }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Alamat *</label>
                                <textarea 
                                    class="form-control" 
                                    v-model="supplier.supplier_address" 
                                    :class="{ 'is-invalid': validasi.supplier_address }">
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
                alert: {
                    error: false,
                    update: false,
                    validate:false,
                    duplicate:false
                },
                validasi: {
                    'supplier_name': '',
                    'supplier_contact': '',
                    'supplier_address': ''
                },
                isLoading: false,
            }
        },
        props: ['api', 'route', 'supplier', 'mobile'],
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
                    service.putData(this.api, this.supplier)
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
                    setTimeout(() => this.alert.validate = false, 3000);
                }
            },
            response(result) {
                setTimeout(() => { this.isLoading = false }, 1000);
                if (result.status === 'ok') {
                    this.$swal("Berhasil!", "Data Berhasil Diubah!", "success");
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                } else if (result.status === 'duplicate') {
                    this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                }
            },
            validate() {
                let condition = 0;

                if (this.supplier.supplier_name.length === 0) {
                    this.validasi.supplier_name = true;
                    condition++;
                } else {
                    this.validasi.supplier_name = false;
                }

                if (this.supplier.supplier_contact.length === 0) {
                    this.validasi.supplier_contact = true;
                    condition++;
                } else {
                    this.validasi.supplier_contact = false;
                }

                if (this.supplier.supplier_address.length === 0) {
                    this.validasi.supplier_address = true;
                    condition++;
                } else {
                    this.validasi.supplier_address = false;
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
