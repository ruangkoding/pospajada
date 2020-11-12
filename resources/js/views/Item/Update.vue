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
                                <label>Jenis Barang</label>
                                <select 
                                    v-model="item.category_id" 
                                    class="form-control"
                                    :class="{ 'is-invalid': validasi.category_id }">
                                    <option value="">Pilih Jenis Barang</option>
                                    <option 
                                        v-for="v in this.category_data" 
                                        :value="v.id" 
                                        :key="v.id">
                                        {{ v.category_name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Satuan</label>
                                <select 
                                    v-model="item.unit_id" 
                                    class="form-control" 
                                    :class="{ 'is-invalid': validasi.unit_id }">
                                    <option value="">Pilih Satuan</option>
                                    <option 
                                        v-for="v in this.unit_data" 
                                        :value="v.id" 
                                        :key="v.id">
                                        {{ v.unit_name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Kode Barang</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Masukkan Kode Barang" 
                                    v-model="item.item_code" 
                                    :class="{ 'is-invalid': validasi.item_code }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Nama Barang</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Masukkan Nama Barang" 
                                    v-model="item.item_name" 
                                    :class="{ 'is-invalid': validasi.item_name }">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Stok Barang <i><small>(opsional)</small></i></label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Masukkan Jumlah Stok" 
                                    v-model="item.stock">
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
                    'category_id': '',
                    'unit_id': '',
                    'item_code': '',
                    'item_name': ''
                },
                isLoading: false,
            }
        },
        props: ['category_data','unit_data', 'api', 'route', 'item', 'mobile'],
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
                    service.putData(this.api, this.item)
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

                if (this.item.category_id.length === 0) {
                    this.validasi.category_id = true;
                    condition++;
                } else {
                    this.validasi.category_id = false;
                }

                if (this.item.unit_id.length === 0) {
                    this.validasi.unit_id = true;
                    condition++;
                } else {
                    this.validasi.unit_id = false;
                }

                if (this.item.item_code.length === 0) {
                    this.validasi.item_code = true;
                    condition++;
                } else {
                    this.validasi.item_code = false;
                }

                if (this.item.item_name.length === 0) {
                    this.validasi.item_name = true;
                    condition++;
                } else {
                    this.validasi.item_name = false;
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
