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
                                <input type="text" class="form-control" placeholder="Masukkan Nama Supplier" v-model="supplier.supplier_name" :class="{ 'is-invalid': validasi.supplier_name }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Kontak *</label>
                                <input type="text" class="form-control" placeholder="Masukkan Kontak" v-model="supplier.supplier_contact" :class="{ 'is-invalid': validasi.supplier_contact }">
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
                                <b>*) Wajib Diisi</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> Simpan Data</button>
                                <a :href="route" class="btn btn-danger"><i class="fa fa-arrow-left"></i> Kembali</a>
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
                supplier: {
                    'supplier_name': '',
                    'supplier_contact': '',
                    'supplier_address': ''
                },
                validasi: {
                    'supplier_name': '',
                    'supplier_contact': '',
                    'supplier_address': ''
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
                    service.postData(this.api, this.supplier)
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
                    setTimeout(() => this.alert.validate = false, 2000);
                }
            },
            response(result) {
                setTimeout(() => { this.isLoading = false }, 1000);
                if (result.status === 'ok') {
                    this.alert.save = true;
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                    this.reset();
                    setTimeout(() => this.alert.save = false, 5000);
                } else if (result.status === 'duplicate') {
                    this.alert.duplicate = true;
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                }
            },
            reset() {
                this.supplier.supplier_name = '';
                this.supplier.supplier_contact = '';
                this.supplier.supplier_address = '';
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
