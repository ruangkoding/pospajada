<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <v-alert :alert=alert></v-alert>
                    <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false" />
                    <form method="POST" v-on:submit.prevent="onSubmit">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Barang *</label>
                                <select
                                    v-model="cart.item_id"
                                    class="form-control"
                                    :class="{ 'is-invalid': validasi.item_id }">
                                    <option value="">Pilih Barang</option>
                                    <option
                                        v-for="v in this.item"
                                        :value="v.id"
                                        :key="v.id">
                                        {{ v.item_name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Harga Satuan *</label>
                                <money
                                    class="form-control"
                                    placeholder="Masukkan Harga"
                                    @input="calcTotal"
                                    v-model="cart.price"
                                    :class="{ 'is-invalid': validasi.price }" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Jumlah *</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    placeholder="Masukkan Jumlah Pembelian"
                                    @input="calcTotal"
                                    v-model="cart.quantity"
                                    :class="{ 'is-invalid': validasi.quantity }"
                                >
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Total Harga *</label>
                                <money
                                    class="form-control"
                                    readonly="readonly"
                                    v-model="cart.subtotal" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <button
                                    type="submit"
                                    class="btn btn-success">
                                    <i class="fa fa-save"></i> Simpan Data
                                </button>
                                <a
                                    :href="route"
                                    class="btn btn-danger">
                                    <i class="fa fa-arrow-left"></i> Kembali
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <b>*) Wajib Diisi</b>
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
                cart: {
                    'item_id': '',
                    'quantity': '',
                    'price': '',
                    'subtotal': ''
                },
                validasi: {
                    'item_id': '',
                    'quantity': '',
                    'price': '',
                },
                alert: {
                    error: false,
                    save: false,
                    duplicate: false,
                    validate:false
                },
                isLoading: false,
                userId: ''
            }
        },
        props: ['api', 'route', 'item'],
        methods: {
            calcTotal() {
                this.cart.subtotal = this.cart.price * this.cart.quantity;
            },
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
                    service.postData(this.api + '?user=' + this.userId, this.cart)
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
                this.cart.item_id = '';
                this.cart.quantity = '';
                this.cart.price = '';
                this.cart.subtotal = '';
            },
            validate() {
                let condition = 0;
                if (this.cart.item_id.length === 0) {
                    this.validasi.item_id = true;
                    condition++;
                } else {
                    this.validasi.item_id = false;
                }

                if (this.cart.quantity.length === 0) {
                    this.validasi.quantity = true;
                    condition++;
                } else {
                    this.validasi.quantity = false;
                }

                if (this.cart.price.length === 0) {
                    this.validasi.price = true;
                    condition++;
                } else {
                    this.validasi.price = false;
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
            this.userId = this.$cookies.get('id');
        }
    };
</script>
