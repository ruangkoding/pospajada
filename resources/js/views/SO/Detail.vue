<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false" />
                    <transition name="fade">
                        <table class="table table-hover table-striped table-bordered">
                            <tbody>
                                <tr>
                                    <td style="width:15%;"><b>Nomor SO</b></td>
                                    <td style="width:85%;">{{ so.so_number }}</td>
                                </tr>
                                <tr>
                                    <td style="width:15%;"><b>Tanggal</b></td>
                                    <td style="width:85%;">{{ so.so_date | moment }}</td>
                                </tr>
                                <tr>
                                    <td style="width:15%;"><b>Customer</b></td>
                                    <td style="width:85%;">
                                        {{ so.customer.customer_name }}<br>
                                        {{ so.customer.customer_address }}<br>
                                        {{ so.customer.customer_contact }}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width:15%;"><b>PIC</b></td>
                                    <td style="width:85%;">
                                        {{ so.user.username }}
                                    </td>
                                </tr>
                                <tr v-if="so.note !== null">
                                    <td style="width:15%;"><b>Keterangan</b></td>
                                    <td style="width:85%;">
                                        {{ so.note }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </transition>
                    <div style="margin-top:25px;"></div>
                    <div class="row">
                        <div class="col-md-12">
                            <v-alert :alert="alert"></v-alert>
                            <transition name="fade">
                                <div class="table-ressonsive">
                                    <table class="table table-hover table-bordered" v-if="showTable == true">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th style="width:30%;text-align:center;">Barang</th>
                                                <th style="width:10%;text-align:center;">Harga</th>
                                                <th style="width:5%;text-align:center;">Jumlah</th>
                                                <th style="width:10%;text-align:center;">Subtotal</th>
                                                <th style="width:5%;text-align:center;">Tindakan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="v in sodetail" :key="v.id" :class="{'table-warning': isReject(v.status) }">
                                                <td>{{ v.item.item_name }}<span v-if="isReject(v.status)">&nbsp;<i>(Dibatalkan)</i></span></td>
                                                <td style="text-align:right;">{{ v.price | rupiah }}</td>
                                                <td style="text-align:center;">{{ v.quantity }} {{ v.item.unit.unit_name }}</td>
                                                <td style="text-align:right;">{{ v.subtotal | rupiah }}</td>
                                                <td style="text-align:center;">
                                                    <a 
                                                        v-if="v.status === 0 && so.status === 0" 
                                                        href="#" 
                                                        @click="toggleCancelItemModal(v.id)" 
                                                        class="btn btn-sm btn-danger">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                    <span v-if="v.status === 0 && so.status === 1"><i class=" fa fa-check"></i></span>
                                                    <span v-if="v.status === 2"><i class="fa fa-archive"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="text-align:right;"><b>Total Harga</b></td>
                                                <td style="text-align:right;"><b>{{ so.total | rupiah }}</b></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <span v-if="so.status === 0">
                        <a
                            v-if="mobile === true"
                            href="#"
                            class="btn btn-block btn-success"
                            @click="toggleApprovalModal(so.id)">
                            <i class="fa fa-check"></i> Proses SO
                        </a>
                        <a
                            v-else
                            href="#"
                            class="btn btn-success"
                            @click="toggleApprovalModal(so.id)">
                            <i class="fa fa-check"></i> Proses SO
                        </a>
                        <a
                            v-if="mobile === true"
                            href="#"
                            class="btn btn-block btn-danger"
                            @click="toggleRejectModal(so.id)">
                            <i class="fa fa-times"></i> Batalkan SO
                        </a>
                        <a
                            v-else
                            href="#"
                            class="btn btn-danger"
                            @click="toggleRejectModal(so.id)">
                            <i class="fa fa-times"></i> Batalkan SO
                        </a>
                        <a
                            v-if="mobile === true"
                            :href="route"
                            class="btn btn-block btn-outline-danger">
                            <i class="fa fa-arrow-left"></i> Kembali
                        </a>
                        <a
                            v-else
                            :href="route"
                            class="btn btn-outline-danger">
                            <i class="fa fa-arrow-left"></i> Kembali
                        </a>
                    </span>
                    <span v-else>
                        <a
                            v-if="mobile === true"
                            :href="route"
                            class="btn btn-block btn-outline-danger">
                            <i class="fa fa-arrow-left"></i> Kembali
                        </a>
                        <a
                            v-else
                            :href="route"
                            class="btn btn-outline-danger">
                            <i class="fa fa-arrow-left"></i> Kembali
                        </a>
                    </span>

                    <div class="modal fade" id="approval_modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Form Invoice</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <v-alert :alert="alert_modal"></v-alert>
                                    <form method="POST">
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <label>Nomor Invoice *</label>
                                                <input 
                                                    class="form-control"
                                                    placeholder="Masukkan Nomor Invoice"
                                                    v-model="checkout.invoice_number"
                                                    :class="{ 'is-invalid': validasi.invoice_number }"
                                                    readonly="readonly">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <label>Tanggal Invoice *</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-calendar"></i>
                                                        </span>
                                                    </div>
                                                    <date-picker
                                                        v-model="checkout.invoice_date"
                                                        :config="options"
                                                        class="form-control"
                                                        placeholder="Tanggal Invoice"
                                                        autocomplete="off">
                                                    </date-picker>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <label>Metode Pembayaran *</label>
                                                <select 
                                                    v-model="checkout.payment_method_id" 
                                                    class="form-control" 
                                                    :class="{ 'is-invalid': validasi.payment_method_id }">
                                                    <option value="">Pilih Metode Pembayaran</option>
                                                    <option 
                                                        v-for="v in this.paymentmethod"
                                                        :value="v.id"
                                                        :key="v.id">
                                                        {{ v.name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row" v-if="checkout.payment_method_id === 2">
                                            <div class="form-group col-md-12">
                                                <label>Durasi Pembayaran *</label>
                                                <select v-model="checkout.payment_duration" class="form-control">
                                                    <option value="7" selected>7 Hari Kerja</option>
                                                    <option value="14">14 Hari Kerja</option>
                                                    <option value="30">30 Hari Kerja</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <label>Keterangan</label>
                                                <textarea class="form-control" v-model="checkout.note"></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <label>Total Harga *</label>
                                                <money 
                                                    class="form-control"
                                                    readonly="readonly"
                                                    v-model="checkout.total" />
                                            </div>
                                        </div>
                                        <div class="row" v-if="mobile == true">
                                            <div class="form-group col-md-12">
                                                <button 
                                                    type="button"
                                                    class="btn btn-block btn-success"
                                                    @click.prevent="generateInvoice()">
                                                    <i class="fa fa-shopping-cart"></i> Proses Invoice
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-block btn-danger"
                                                    data-dismiss="modal">
                                                    <i class="fa fa-times"></i> Batal
                                                </button>
                                            </div>
                                        </div>
                                        <div class="row" v-else>
                                            <div class="form-group col-md-12">
                                                <button 
                                                    type="button"
                                                    class="btn btn-success"
                                                    @click.prevent="generateInvoice()">
                                                    <i class="fa fa-shopping-cart"></i> Proses Invoice
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-danger"
                                                    data-dismiss="modal">
                                                    <i class="fa fa-times"></i> Batal
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer"></div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="cancel_item_modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Konfirmasi Pembatalan Barang</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Anda Akan Membatalkan Barang Ini, Teruskan?</p>
                                </div>
                                <div class="modal-footer">
                                    <button 
                                        type="button" 
                                        class="btn btn-success" 
                                        @click="rejectItem">
                                        <i class="fa fa-check-circle-o"></i> Ya
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-danger" 
                                        data-dismiss="modal">
                                        <i class="fa fa-times-circle-o"></i> Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="reject_modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Konfirmasi Pembatalan Sales Order</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Anda Akan Membatalkan Sales Order Ini, Teruskan?</p>
                                </div>
                                <div class="modal-footer">
                                    <button 
                                        type="button" 
                                        class="btn btn-success" 
                                        @click="rejectOrder">
                                        <i class="fa fa-check-circle-o"></i> Ya
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-danger" 
                                        data-dismiss="modal">
                                        <i class="fa fa-times-circle-o"></i> Batal
                                    </button>
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
        data() {
            return {
                id:'',
                isLoading: false,
                saldo: 0,
                showForm: false,
                showTable: false,
                alert: {
                    empty: false,
                    error: false
                },
                alert_modal: {
                    error: false,
                    validate: false
                },
                checkout: {
                    'note': '',
                    'invoice_number': '',
                    'invoice_date': '',
                    'total': this.so.total,
                    'payment_method_id': '',
                    'payment_duration': '7'
                },
                validasi: {
                    'so_number': '',
                    'so_date': '',
                    'customer_id': ''
                },
                options: {
                    format: 'YYYY-MM-DD',
                    useCurrent: true,
                    locale: 'id'
                },
                userId:'',
                itemId:''
            }
        },
        props: [
            'paymentmethod',
            'so',
            'sodetail',
            'route',
            'print_api',
            'access',
            'api',
            'mobile'
        ],
        methods: {
            cetakInvoice(id) {
                let newWindow = window.open();
                newWindow.location = this.print_api;
            },
            toggleApprovalModal() {
                $("#approval_modal").modal('show');
            },
            toggleRejectModal() {
                $("#reject_modal").modal('show');
            },
            toggleCancelItemModal(id) {
                this.itemId = id;
                $("#cancel_item_modal").modal('show');
            },
            isReject(status) {
                if (status === 2) {
                    return true;
                } else {
                    return false;
                }
            },
            generateInvoice() {
                let validasi = this.validate();
                if (validasi === true) {
                    service.sostData(this.api + '/generateinvoice?id=' + this.so.id, this.checkout)
                    .then(ressonse => {
                        if (response.status === 'ok') {
                            $('#approval_modal').modal('hide');
                            this.$swal("Berhasil!", "Proses Pembuatan Invoice Berhasil!", "success")
                            window.location.href = this.route + './../poinvoice/detail?id=' + response.invoice_id;
                        }
                    }).catch(error => {
                        this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error")
                        console.log(error);
                    });
                } else {
                    this.alert_modal.validate = true;
                    setTimeout(() => this.alert_modal.validate = false, 5000);
                }
            },
            rejectOrder() {   
                service.sostData(this.api + '/rejectso?id=' + this.so.id)
                .then(ressonse => {
                    if (response.status === 'ok') {
                        $('#reject_modal').modal('hide');
                        this.$swal("Berhasil!", "PO Berhasil Dibatalkan!", "success")
                        setTimeout(() => location.reload(), 2000);
                    }
                }).catch(error => {
                    this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error")
                    console.log(error);
                });
            },
            rejectItem() {
                service.sostData(this.api + '/rejectitem?item=' + this.itemId)
                .then(response => {
                    if (response.status === 'ok') {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                        $('#cancel_item_modal').modal('hide');
                        this.$swal("Berhasil!", "Proses Pembatalan Barang Berhasil!", "success");
                        setTimeout(() => location.reload(), 2000);
                    }
                }).catch(error => {
                    $('#cancel_item_modal').modal('hide');
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                    this.$swal("Terjadi Kesalahan!", "Silahkan ulangi kembali!", "error")
                    console.log(error);
                });
            },
            validate() {
                let condition = 0;
                if (this.checkout.invoice_number.length === 0) {
                    this.validasi.invoice_number = true;
                    condition++;
                } else {
                    this.validasi.invoice_number = false;
                }

                if (this.checkout.invoice_date.length === 0) {
                    this.validasi.invoice_date = true;
                    condition++;
                } else {
                    this.validasi.invoice_date = false;
                }

                if (this.checkout.payment_method_id.length === 0) {
                    this.validasi.payment_method_id = true;
                    condition++;
                } else {
                    this.validasi.payment_method_id = false;
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
            if (this.sodetail.length < 1) {
                this.alert.empty = true;
                this.showTable = false;
            } else {
                this.showTable = true;
                if (this.so.status === 0) {
                    service.fetchData('./../api/ajax/soinvoice')
                    .then(ressonse => {
                        this.checkout.invoice_number = ressonse;
                    })
                    .catch(error => {
                        this.alert_modal.error = true;
                        console.log(error);
                    });
                }
            }
        },
        mounted() {
            this.userId = this.$cookies.get('id');
            this.isLoading = false;
        }
    };
</script>
