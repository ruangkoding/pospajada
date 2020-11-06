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
                        <transition name="fade" v-if="mobile === true">
                            <div class="card" style="margin-top:20px;" v-show="showForm">
                                <div class="card-body table-responsive">
                                    <form v-on:submit.prevent="fetchData()">
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="search.q"
                                                    placeholder="Kode Barang / Nama Barang">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <select v-model="search.category" class="form-control">
                                                    <option value="">Pilih Jenis Barang</option>
                                                    <option
                                                        v-for="val in this.category_data"
                                                        :value="val.id"
                                                        :key="val.id">
                                                        {{ val.category_name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-group col-md-4">
                                                <button
                                                    type="submit"
                                                    class="btn btn-block btn-success mr-sm-2">
                                                    <i class="fa fa-search"></i> Cari Data
                                                </button>
                                                <button
                                                    type="button"
                                                    v-on:click.prevent="clear"
                                                    class="btn btn-block btn-outline-info">
                                                    <i class="fa fa-refresh"></i> Reset
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade" v-else>
                            <div class="card" style="margin-top:50px;" v-show="showForm">
                                <div class="card-body table-responsive">
                                    <form v-on:submit.prevent="fetchData()">
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" v-model="search.q" placeholder="Kode Barang / Nama Barang">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <select v-model="search.category" class="form-control">
                                                    <option value="">Pilih Jenis Barang</option>
                                                    <option 
                                                        v-for="val in this.category_data" 
                                                        :value="val.id" 
                                                        :key="val.id">
                                                        {{ val.category_name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-group col-md-4">
                                                <button 
                                                    type="submit" 
                                                    class="btn btn-success mr-sm-2">
                                                    <i class="fa fa-search"></i> Cari Data
                                                </button>
                                                <button 
                                                    type="button" 
                                                    v-on:click.prevent="clear" 
                                                    class="btn btn-outline-info">
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
                        <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>
                        <transition name="fade">
                            <div class="table-responsive">
                                <table class="table table-hover table-striped table-bordered" v-if="showTable == true">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th style="width:5%; text-align:center;">Kode Barang</th>
                                            <th style="width:15%; text-align:center;">Nama Barang</th>
                                            <th style="width:5%; text-align:center;">Jenis</th>
                                            <th style="width:5%; text-align:center;">Stok</th>
                                            <th style="width:5%; text-align:center;">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="v in item" :key="v.id">
                                            <td>{{ v.item_code }}</td>
                                            <td>{{ v.item_name }}</td>
                                            <td>{{ v.category.category_name }}</td>
                                            <td style="text-align:center;">{{ v.stock }} {{ v.unit.unit_name }}</td>
                                            <td>
                                                <div style="text-align: center;">
                                                    <a
                                                        v-if="(access.update === 1)"
                                                        :href="route + '/edit?id=' + v.id"
                                                        class="btn btn-sm btn-warning mr-sm-1">
                                                        <i class="fa fa-wrench"></i> Ubah
                                                    </a>
                                                    <button
                                                        v-else
                                                        class="btn btn-sm btn-warning disabled mr-sm-1">
                                                        <i class="fa fa-wrench"></i> Ubah
                                                    </button>
                                                    <a
                                                        v-if="(access.delete === 1)"
                                                        href="#" @click="toggleModal(v.id)"
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
                                    </tbody>
                                </table>
                            </div>
                        </transition>

                        <v-delete :element="'delete_modal'" :id="id" @delete="deleteData"></v-delete>
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
            item: {},
            search: {
                q:'',
                category:''
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
    props: ['category_data','api','route','access', 'mobile'],
    methods: {
        toggle() {
            this.showForm = !this.showForm
        },
        clear() {
            this.search.q = '';
            this.search.category = '';
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
                this.item = response.data;
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
        this.fetchData();
    },
    mounted() {
        this.fetchData();
    }
};
</script>
