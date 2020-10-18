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
                                    <td style="width:15%;"><b>Nomor Nota</b></td>
                                    <td style="width:85%;">{{ invoice.invoice }}</td>
                                </tr>
                                <tr>
                                    <td style="width:15%;"><b>Tanggal Transaksi</b></td>
                                    <td style="width:85%;">{{ invoice.invoice_date | moment }}</td>
                                </tr>
                                <tr>
                                    <td style="width:15%;"><b>Customer</b></td>
                                    <td style="width:85%;">
                                        {{ invoice.customer.customer_name }}<br>
                                        {{ invoice.customer.customer_address }}<br>
                                        {{ invoice.customer.hp }}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width:15%;"><b>Metode Pembayaran</b></td>
                                    <td style="width:85%;">{{ invoice.paymentmethod.name }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </transition>
                    <div style="margin-top:25px;"></div>
                    <div class="row">
                        <div class="col-md-12">
                            <v-alert :alert="alert"></v-alert>
                            <transition name="fade">
                                <div class="table-responsive">
                                    <table class="table table-hover table-striped table-bordered" v-if="showTable === true">
                                        <thead>
                                            <tr>
                                                <th style="width:30%;text-align:center;">Barang</th>
                                                <th style="width:10%;text-align:center;">Harga (Rp)</th>
                                                <th style="width:5%;text-align:center;">Jumlah</th>
                                                <th style="width:10%;text-align:center;">Subtotal (Rp)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="v in invoicedetail" :key="v.id">
                                                <td>{{ v.item.item_name }}</td>
                                                <td style="text-align:right;">
                                                    {{ v.price | rupiah }}
                                                </td>
                                                <td style="text-align:center;">
                                                    {{ v.quantity }} {{ v.item.unit.unit_name }}
                                                </td>
                                                <td style="text-align:right;">
                                                    {{ v.subtotal | rupiah }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="text-align:right;">
                                                    <b>Total Harga</b>
                                                </td>
                                                <td style="text-align:right;">
                                                    <b>{{ invoice.total | rupiah }}</b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <a
                        :href="route"
                        class="btn btn-danger">
                        <i class="fa fa-arrow-left"></i> Kembali
                    </a>
                    <a
                        href="#"
                        class="btn btn-success"
                        @click="cetakInvoice(invoice.id)"
                    >
                        <i class="fa fa-print"></i> Cetak Nota
                    </a>
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
                }
            }
        },
        props: [
            'invoice',
            'invoicedetail',
            'route',
            'print_api',
            'access',
            'api'
        ],
        methods: {
            cetakInvoice(id) {
                let newWindow = window.open();
                newWindow.location = this.print_api;
            }
        },
        created() {
            this.isLoading = true;
            if (this.invoicedetail.length < 1) {
                this.alert.empty = true;
                this.showTable = false;
            } else {
                this.showTable = true;
            }
        },
        mounted() {
            this.isLoading = false;
        }
    };
</script>
