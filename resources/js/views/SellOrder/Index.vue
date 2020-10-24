<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="pull-right">
                            <button 
                                type="button" 
                                v-on:click.prevent="toggle" 
                                class="btn btn-info mb-2">
                                <i class="fa fa-search"></i> Form Pencarian
                            </button>
                        </div>
                        <div class="card" style="margin-top:50px;" v-show="showForm">
                            <div class="card-body">
                                <form v-on:submit.prevent="fetchData()">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" v-model="search.q" placeholder="Nota Pembelian">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-group col-md-6">
                                            <button type="submit" class="btn btn-success mr-sm-2">
                                                <i class="fa fa-search"></i> Cari Data
                                            </button>
                                            <button type="button" v-on:click.prevent="clear" class="btn btn-info">
                                                <i class="fa fa-refresh"></i> Reset
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <v-alert :alert="alert"></v-alert>
                        <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
                        <transition name="fade">
                            <div class="table-responsive">
                                <table class="table table-hover table-striped table-bordered" v-if="showTable == true">
                                    <thead>
                                        <tr>
                                            <th style="width:10%; text-align:center;">Nota Pembelian</th>
                                            <th style="width:20%; text-align:center;">Customer</th>
                                            <th style="width:10%; text-align:center;">Tanggal Transaksi</th>
                                            <th style="width:5%; text-align:center;">Total</th>
                                            <th style="width:5%; text-align:center;">Pembayaran</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="v in invoice" :key="v.id">
                                            <td style="vertical-align:middle;"><a :href="route + '/detail?id=' + v.id">{{ v.invoice }}</a></td>
                                            <td style="vertical-align:middle;">
                                                {{ v.customer.customer_name }}<br>
                                                {{ v.customer.customer_address }}<br>
                                            </td>
                                            <td style="text-align:center;vertical-align:middle;">{{ v.invoice_date | moment }}</td>
                                            <td style="text-align:right;vertical-align:middle;">{{ v.total | rupiah }}</td>
                                            <td style="text-align:center;vertical-align:middle;">{{ v.paymentmethod.name }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </transition>
                        <div class="card-footer clearfix" v-if="showTable === true">
                            <v-pagination
                                :pagination="pagination"
                                v-on:next="nextPage"
                                v-on:previous="prevPage"
                                v-if="showTable === true">
                            </v-pagination>
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
    data: function() {
        return {
            invoice: {},
            search: {
                q:''
            },
            alert: {
                error:false,
                empty:false,
                delete:false
            },
            pagination: {
                page: 1,
                last:0,
                total:0,
                to:0,
                from:0
            },
            isLoading: false,
            showForm: false,
            showTable: false,
            id:'',
            userId: ''
        }
    },
    props: ['api','route','access'],
    methods: {
        toggle() {
            this.showForm = !this.showForm
        },
        clear() {
            this.search.q = '';
            this.fetchData();
        },
        nextPage() {
            this.pagination.page++;
            this.fetchData();
        },
        prevPage() {
            this.pagination.page--;
            this.fetchData();
        },
        fetchData() {
            let query  = this.generateParams();
            service.fetchData(this.api + '?user='+ this.userId + '&' + query + '&page='+ this.pagination.page)
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
            if (response.total === 0) {
                this.showTable = false;
                this.alert.empty = true;
                this.alert.error = false;
            } else {
                this.showTable = true;
                this.alert.empty = false;
                this.alert.error = false;
                this.invoice = response.data;
                this.pagination.last = response.last_page;
                this.pagination.from = response.from;
                this.pagination.to = response.to;
                this.pagination.total = response.total;
            }
        },
        generateParams() {
            return Object.keys(this.search).map(key => key + '=' + this.search[key]).join('&');
        }
    },
    created() {
        this.isLoading = true;
    },
    mounted() {
        this.userId = this.$cookies.get('id');
        this.fetchData();
    }
};
</script>
