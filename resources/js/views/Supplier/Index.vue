<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div v-if="mobile === true">
                            <a
                                v-if="access.write === 1"
                                :href="route + '/create'"
                                class="btn btn-block btn-success mb-2">
                                <i class="fa fa-plus"></i> Tambah Data
                            </a>
                            <button
                                type="button"
                                v-on:click.prevent="toggle"
                                class="btn btn-block btn-outline-info mb-2">
                                <i class="fa fa-search"></i> Form Pencarian
                            </button>
                        </div>
                        <div class="pull-right" v-else>
                            <button
                                type="button"
                                v-on:click.prevent="toggle"
                                class="btn btn-outline-info mb-2">
                                <i class="fa fa-search"></i> Form Pencarian
                            </button>
                            <a
                                v-if="access.write === 1"
                                :href="route + '/create'"
                                class="btn btn-success mb-2">
                                <i class="fa fa-plus"></i> Tambah Data
                            </a>
                        </div>
                        <transition name="fade">
                            <div class="card" style="margin-top:50px;" v-show="showForm">
                                <div class="card-body table-responsive">
                                    <form v-on:submit.prevent="fetchData()">
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" v-model="search.q" placeholder="Nama Supplier">
                                            </div>
                                        </div>
                                        <div class="row" v-if="mobile === true">
                                            <div class="input-group col-md-6">
                                                <button 
                                                    type="submit" 
                                                    class="btn btn-block btn-success mr-sm-2">
                                                    <i class="fa fa-search"></i> Cari Data
                                                </button>
                                                <button 
                                                    type="button" 
                                                    v-on:click.prevent="clear" 
                                                    class="btn btn-block btn-info">
                                                    <i class="fa fa-refresh"></i> Reset
                                                </button>
                                            </div>
                                        </div>
                                        <div class="row" v-else>
                                            <div class="input-group col-md-6">
                                                <button 
                                                    type="submit" 
                                                    class="btn btn-success mr-sm-2">
                                                    <i class="fa fa-search"></i> Cari Data
                                                </button>
                                                <button 
                                                    type="button" 
                                                    v-on:click.prevent="clear" 
                                                    class="btn btn-info">
                                                    <i class="fa fa-refresh"></i> Reset
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class="card-body">
                        <v-alert :alert="alert"></v-alert>
                        <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false" />
                        <transition name="fade" v-if="mobile === true">
                            <div v-if="showTable === true">
                                <div class="card" v-for="v in supplier" :key="v.id">
                                  <div class="card-body">
                                    <h5 class="card-title">{{ v.supplier_name }}</h5>
                                    <br>
                                    <table class="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td style="width:5%;">Alamat</td>
                                                <td style="width:2%;">:</td>
                                                <td style="width:50%;">{{ v.supplier_address }}</td>
                                            </tr>
                                            <tr>
                                                <td style="width:5%;">Kontak</td>
                                                <td style="width:2%;">:</td>
                                                <td style="width:50%;">{{ v.supplier_contact }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <a
                                        v-if="(access.update === 1)"
                                        :href="route + '/edit?id=' + v.id"
                                        class="btn btn-block btn-sm btn-warning mr-sm-1">
                                        <i class="fa fa-wrench"></i> Ubah
                                    </a>
                                    <button
                                        v-else
                                        class="btn btn-block btn-sm btn-warning disabled mr-sm-1">
                                        <i class="fa fa-wrench"></i> Ubah
                                    </button>
                                    <a
                                        v-if="(access.delete === 1)"
                                        href="#" @click="toggleModal(v.id)"
                                        class="btn btn-block btn-sm btn-danger">
                                        <i class="fa fa-trash-o"></i> Hapus
                                    </a>
                                    <button
                                        v-else
                                        class="btn btn-block btn-sm btn-danger disabled">
                                        <i class="fa fa-trash-o"></i> Hapus
                                    </button>
                                  </div>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade" v-else>
                            <div class="table-responsive">
                                <table class="table table-hover table-striped table-bordered" v-if="showTable == true">
                                    <thead>
                                        <tr>
                                            <th style="width:12%; text-align:center;">Nama Supplier</th>
                                            <th style="width:10%; text-align:center;">Kontak</th>
                                            <th style="width:20%; text-align:center;">Alamat</th>
                                            <th style="width:10%; text-align:center;">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="v in supplier" :key="v.id">
                                            <td>{{ v.supplier_name }}</td>
                                            <td>{{ v.supplier_contact }}</td>
                                            <td>{{ v.supplier_address }}</td>
                                            <td>
                                                <div style="text-align: center;">
                                                    <a
                                                        v-if="(access.update === 1)"
                                                        :href="route + '/edit?id=' + v.id"
                                                        class="btn btn-sm btn-warning mr-sm-1">
                                                        <i class="fa fa-wrench"></i> Ubah
                                                    </a>
                                                    <button v-else class="btn btn-sm btn-warning disabled mr-sm-1"><i class="fa fa-wrench"></i> Ubah</button>
                                                    <a
                                                        v-if="(access.delete === 1)"
                                                        href="#"
                                                        @click="toggleModal(v.id)"
                                                        class="btn btn-sm btn-danger">
                                                        <i class="fa fa-trash-o"></i> Hapus
                                                    </a>
                                                    <button v-else class="btn btn-sm btn-danger disabled"><i class="fa fa-trash-o"></i> Hapus</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </transition>

                        <v-delete :element="'delete_modal'" :id="id" @delete="deleteData" />
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
            supplier: {},
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
            id:''
        }
    },
    props: ['api','route','access', 'mobile'],
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
        toggleModal(id) {
            $("#delete_modal").modal('show');
            this.id = id;
        },
        fetchData() {
            let query  = this.generateParams();
            service.fetchData(this.api + '?'+ query + '&page='+ this.pagination.page)
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
                this.supplier = response.data;
                this.pagination.last = response.last_page;
                this.pagination.from = response.from;
                this.pagination.to = response.to;
                this.pagination.total = response.total;
            }
        },
        generateParams() {
            return Object.keys(this.search).map(key => key + '=' + this.search[key]).join('&');
        },
        deleteData(id) {
            service.deleteData(this.api + '?id=' + id)
            .then(response => {
                if(response.status === 'ok') {
                    this.alert.delete = true;
                    $('#delete_modal').modal('hide');
                    this.fetchData();
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                    setTimeout(() => this.alert.delete=false, 5000);
                }
            }).catch(error => {
                this.isLoading = false;
                this.alert.delete = false;
                this.alert.error = true;
                $('#delete_modal').modal('hide');
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                this.fetchData();
                console.log(error);
            });
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
