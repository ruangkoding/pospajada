<template>
    <div class="card">
        <div class="card-header">
            <div class="pull-right">
                <button
                    type="button"
                    v-on:click.prevent="toggle"
                    class="btn btn-info mb-2">
                    <i class="fa fa-search"></i> Form Pencarian
                </button>
                <router-link 
                    :to="{ name: 'supplier.create' }" 
                    class="btn btn-success mb-2">  
                    <i class="fa fa-plus"></i> Tambah Data
                </router-link>
            </div>
            <transition name="fade">
                <div class="card" style="margin-top:50px;" v-show="showForm">
                    <div class="card-body table-responsive">
                        <form v-on:submit.prevent="fetchData()">
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="search.q" 
                                        placeholder="Nama Supplier">
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-group col-md-6">
                                    <button 
                                        type="submit"
                                        :class="{'btn-block': mobile === true }"
                                        class="btn btn-success mr-sm-2">
                                        <i class="fa fa-search"></i> Cari Data
                                    </button>
                                    <button 
                                        type="button"
                                        :class="{'btn-block': mobile === true }" 
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
            <transition name="fade" v-if="showTable == true">
                <div v-if="mobile === true">
                    <div class="card" v-for="v in supplier" :key="v.id">
                        <div class="card-body">
                            <table class="table-noborder">
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>{{ v.supplier_name }}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td>{{ v.supplier_address }}</td>
                                </tr>
                                <tr>
                                    <td>Kontak</td>
                                    <td>:</td>
                                    <td>{{ v.supplier_contact }}</td>
                                </tr>
                            </table>
                            <div class="summary">
                                <span class="buttons">
                                    <router-link :to="{ name: 'supplier.edit', params: { id: v.id} }" class="btn btn-sm btn-outline-warning mr-2">  
                                        <i class="fa fa-wrench"></i> Ubah
                                    </router-link>
                                    <a
                                        href="#"
                                        class="btn btn-sm btn-outline-danger"
                                        @click="toggleModal(v.id)">
                                        <i class="fa fa-trash"></i> Hapus
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive" v-else>
                    <table class="table table-hover table-striped table-bordered">
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
                                        <router-link :to="{ name: 'supplier.edit', params: { id: v.id} }" class="btn btn-sm btn-warning mr-2">  
                                            <i class="fa fa-wrench"></i> Ubah
                                        </router-link>
                                        <a
                                            href="#"
                                            @click="toggleModal(v.id)"
                                            class="btn btn-sm btn-danger">
                                            <i class="fa fa-trash-o"></i> Hapus
                                        </a>
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
    props: ['mobile'],
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
            service.fetchData('/api/supplier?'+ query + '&page='+ this.pagination.page)
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
            service.deleteData('/api/supplier?id=' + id)
            .then(response => {
                if(response.status === 'ok') {
                    this.$swal("Berhasil!", "Data Berhasil Dihapus!", "success");
                    $('#delete_modal').modal('hide');
                    this.fetchData();
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                }
            }).catch(error => {
                this.isLoading = false;
                this.$swal("Terjadi Kesalahan!", "Silahkan Ulangi Kembali!", "error");
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
