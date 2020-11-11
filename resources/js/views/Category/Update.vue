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
                                <label>Nama Jenis Barang *</label>
                                <input type="text" class="form-control" v-model="category.category_name" :class="{ 'is-invalid': validasi.category_name }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <b>*) Wajib Diisi</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <button type="submit" :class="{'btn-block': mobile === true }" class="btn btn-success"><i class="fa fa-save"></i> Simpan</button>
                                <a :href="route" :class="{'btn-block': mobile === true }" class="btn btn-outline-danger"><i class="fa fa-arrow-left"></i> Kembali</a>
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
                    validate: false,
                    duplicate: false
                },
                validasi: {
                    'category_name': ''
                },
                isLoading: false,
            }
        },
        props: ['api', 'route', 'category', 'mobile'],
        methods: {
            clearAlert() {
                this.alert.error = false;
                this.alert.update = false;
                this.alert.duplicate = false;
                this.alert.validate = false;
            },
            onSubmit(evt) {
                this.clearAlert();
                let validasi = this.validate();
                if (validasi === true) {
                    this.isLoading = true;
                    service.putData(this.api, this.category)
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
                    setTimeout(() => this.alert.update = false, 5000);
                } else if (result.status === 'duplicate') {
                    this.$swal("Duplikat!", "Data Yang Sama Sudah Disimpan Sebelumnya!", "warning");
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                    setTimeout(() => this.alert.update = false, 5000);
                }
            },
            validate() {
                let condition = 0;
                if (this.category.category_name.length === 0) {
                    this.validasi.category_name = true;
                    condition++;
                } else {
                    this.validasi.category_name = false;
                }
                
                if (condition > 0) {
                    return false;
                } else {
                    return true;
                }
            },
        },
        created() {
            this.isLoading = true;
        },
        mounted() {
            this.isLoading = false;
        }
    };
</script>
