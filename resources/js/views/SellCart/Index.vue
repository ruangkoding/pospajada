<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="pull-right">
                            <a
                                v-if="access.write === 1"
                                :href="route + '/create'"
                                class="btn btn-success mb-2">
                                <i class="fa fa-plus"></i> Tambah Data
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <v-alert :alert="alert_page"></v-alert>
                        <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
                        <transition name="fade">
                            <div class="table-responsive">
                                <table class="table table-hover table-striped table-bordered" v-if="showTable == true">
                                    <thead>
                                        <tr>
                                            <th style="width:30%;text-align:center;">Barang</th>
                                            <th style="width:10%;text-align:center;">Harga (Rp)</th>
                                            <th style="width:5%;text-align:center;">Jumlah</th>
                                            <th style="width:10%;text-align:center;">Subtotal (Rp)</th>
                                            <th style="width:5%;text-align:center;">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="v in cart" :key="v.id">
                                            <td>{{ v.item.item_name }}</td>
                                            <td style="text-align:right;">{{ v.price | rupiah }}</td>
                                            <td style="text-align:center;">{{ v.quantity }} {{ v.item.unit.unit_name }}
                                            </td>
                                            <td style="text-align:right;">{{ v.subtotal | rupiah }}</td>
                                            <td>
                                                <div style="text-align: center;">
                                                    <a
                                                        v-if="(access.delete === 1)"
                                                        href="#"
                                                        @click="toggleModal(v.id)"
                                                        class="btn btn-sm btn-danger">
                                                        <i class="fa fa-trash-o"></i> Hapus
                                                    </a>
                                                    <button
                                                        v-else
                                                        class="btn btn-sm btn-danger disabled">
                                                        <i class="fa fa-trash-o"></i> Hapus
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" style="text-align:right;"><b>Total Harga</b></td>
                                            <td style="text-align:right;"><b>{{ totalHarga | rupiah }}</b></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </transition>
                        <div v-if="showTable == true">
                            <a
                                href="#"
                                @click="toggleCheckoutModal"
                                class="btn btn-warning">
                                <i class="fa fa-shopping-cart"></i> Check Out
                            </a>
                        </div>
                        <v-delete :element="'delete_modal'" :id="id" @delete="deleteData"></v-delete>
                        <div class="modal fade" id="checkout_modal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Checkout</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <v-alert :alert="alert_modal"></v-alert>
                                        <form method="POST">
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label>Customer *</label>
                                                    <select
                                                        v-model="checkout.customer_id"
                                                        class="form-control"
                                                        :class="{ 'is-invalid': validasi.customer_id }">
                                                        <option value="">Pilih Customer</option>
                                                        <option
                                                            v-for="v in this.customer"
                                                            :value="v.id"
                                                            :key="v.id">
                                                            {{ v.customer_name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label>Nota *</label>
                                                    <input
                                                        class="form-control"
                                                        placeholder="Masukkan Nota"
                                                        v-model="checkout.invoice"
                                                        :class="{ 'is-invalid': validasi.invoice }">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label>Tanggal Transaksi *</label>
                                                    <date-picker
                                                        v-model="checkout.invoice_date"
                                                        :config="options"
                                                        class="form-control"
                                                        placeholder="Tanggal Transaksi"
                                                        autocomplete="off">
                                                    </date-picker>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label>Metode Pembayaran *</label>
                                                    <select
                                                        v-model="checkout.payment_method_id"
                                                        class="form-control"
                                                        :class="{ 'is-invalid': validasi.payment_method_id }">
                                                        <option value="">
                                                            Pilih Metode Pembayaran
                                                        </option>
                                                        <option
                                                            v-for="v in this.paymentmethod"
                                                            :value="v.id"
                                                            :key="v.id">
                                                            {{ v.name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label>Total Harga *</label>
                                                    <money
                                                        class="form-control"
                                                        readonly="readonly"
                                                        v-model="totalHarga" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <button
                                                        type="button"
                                                        class="btn btn-success"
                                                        @click.prevent="checkOutCart()">
                                                        <i class="fa fa-shopping-cart"></i>
                                                        Selesaikan Transaksi
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-danger"
                                                        data-dismiss="modal"><i
                                                        class="fa fa-times"></i> Batal
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import service from './../../services.js';
    export default {
        data: function () {
            return {
                cart: {},
                checkout: {
                    'customer_id': '',
                    'payment_method_id': '',
                    'invoice': '',
                    'invoice_date': '',
                    'total': ''
                },
                validasi: {
                    'invoice': '',
                    'invoice_date': '',
                    'customer_id': '',
                    'payment_method_id': ''
                },
                alert_page: {
                    error: false,
                    empty: false,
                    delete: false,
                    checkout: false,
                },
                alert_modal: {
                    error: false,
                    validate: false
                },
                isLoading: false,
                showForm: false,
                showTable: false,
                id: '',
                totalHarga: 0,
                options: {
                    format: 'YYYY-MM-DD',
                    useCurrent: false,
                    locale: 'id'
                }
            }
        },
        props: ['customer', 'paymentmethod', 'api', 'route', 'access'],
        methods: {
            calcChanges() {
                if (this.checkout.paytotal > 0) {
                    this.checkout.changes = this.checkout.paytotal - this.totalHarga;
                }
            },
            toggleModal(id) {
                $("#delete_modal").modal('show');
                this.id = id;
            },
            toggleCheckoutModal() {
                $("#checkout_modal").modal('show');
            },
            fetchData() {
                service.fetchData(this.api)
                .then(response => {
                    this.renderData(response);
                    this.isLoading = false;
                })
                .catch(error => {
                    this.alert.error = true;
                    console.log(error);
                });
            },
            renderData(response) {
                if (response.length === 0) {
                    this.showTable = false;
                    this.alert_page.empty = true;
                    this.alert_page.error = false;
                } else {
                    this.showTable = true;
                    this.alert_page.empty = false;
                    this.alert_page.error = false;
                    this.cart = response;
                    if (this.cart.length > 0) {
                        for (let i = 0; i < this.cart.length; i++) {
                            this.totalHarga += this.cart[i].subtotal;
                        }
                    }
                }
            },
            deleteData(id) {
                service.deleteData(this.api + '?id=' + id)
                .then(response => {
                    if (response.status === 'ok') {
                        this.fetchData();
                        this.alert_page.delete = true;
                        $('#delete_modal').modal('hide');
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                        setTimeout(() => this.alert_page.delete = false, 5000);
                    }
                }).catch(error => {
                    this.alert_page.delete = false;
                    this.alert_page.error = true;
                    $('#delete_modal').modal('hide');
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                    this.fetchData();
                    console.log(error);
                });
            },
            checkOutCart() {
                let validasi = this.validate();
                if (validasi === true) {
                    this.checkout.total = this.totalHarga;
                    service.postData(this.api + '/checkout', this.checkout)
                    .then(response => {
                        if (response.status === 'ok') {
                            $('#checkout_modal').modal('hide');
                            alert('PROSES CHECKOUT BERHASIL');
                            window.location.href = this.route + './../sellorder/detail?id=' + response.order_id;
                        }
                    }).catch(error => {
                        this.alert_page.checkout = false;
                        this.alert_modal.error = true;
                        console.log(error);
                    });
                } else {
                    this.alert_modal.validate = true;
                    setTimeout(() => this.alert_modal.validate = false, 5000);
                }
            },
            validate() {
                let condition = 0;
                if (this.checkout.customer_id.length === 0) {
                    this.validasi.customer_id = true;
                    condition++;
                } else {
                    this.validasi.customer_id = false;
                }

                if (this.checkout.payment_method_id.length === 0) {
                    this.validasi.payment_method_id = true;
                    condition++;
                } else {
                    this.validasi.payment_method_id = false;
                }

                if (this.checkout.invoice.length === 0) {
                    this.validasi.invoice = true;
                    condition++;
                } else {
                    this.validasi.invoice = false;
                }

                if (this.checkout.invoice_date.length === 0) {
                    this.validasi.invoice_date = true;
                    condition++;
                } else {
                    this.validasi.invoice_date = false;
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
            this.fetchData();
        }
    };

</script>
