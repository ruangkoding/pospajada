<template>
    <div class="card">
        <div class="card-body">
            <v-alert :alert=alert></v-alert>
            <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
            <form method="POST" v-on:submit.prevent="onSubmit">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Nama Cabang Bisnis</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            v-model="category.category_name" 
                            :class="{ 'is-invalid': validasi.category_name }">
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
                        <router-link 
                            :to="{ name: 'category.index' }" 
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
                category:{},
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
        props: ['mobile'],
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
                    service.putData('/api/category?id=' + this.$route.params.id, this.category)
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
                    this.getCategory();
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
            getCategory() {
                service.fetchData('/api/category/'+ this.$route.params.id)
                .then(response => {
                    this.category = response;
                    this.isLoading = false;
                })
                .catch(error => {
                    this.alert.error = true;
                    console.log(error);
                });
            }
        },
        created() {
            this.isLoading = true;
        },
        mounted() {
            this.getCategory();
        }
    };
</script>
