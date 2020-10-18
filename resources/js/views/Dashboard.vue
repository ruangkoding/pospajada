<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body table-responsive">
                    <loading :opacity="100" :active.sync="isLoading" :can-cancel="false" :is-full-page="false" />
                    <form method="POST" v-on:submit.prevent="fetchData">
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                                    </div>
                                    <date-picker
                                        id="periode"
                                        name="periode"
                                        v-model="periode"
                                        :config="options"
                                        class="form-control"
                                        placeholder="Periode"
                                        autocomplete="off">
                                    </date-picker>
                                </div>
                            </div>
                            <div class="form-group col-md-4">
                                <button
                                    type="submit"
                                    class="btn btn-success">
                                    <i class="fa fa-search"></i> Tampikan Data
                                </button>
                            </div>
                        </div>
                    </form>
                    <highcharts :options="chart" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import service from './../services.js';
import { Chart } from 'highcharts-vue';

export default {
    data: function() {
        return {
            chart: {},
            periode:'',
            year: '',
            year_chart: '',
            isLoading: false,
            options: null,
            attrs: [
                {
                    key: 'today',
                    highlight: true,
                    dates: new Date(),
                },
            ],
            options: {
                format: 'YYYY',
                viewMode:'years',
                useCurrent: false,
                locale: 'id'
            }
        }
    },
    props:['api'],
    components: {
        highcharts: Chart
    },
    created() {
        this.isLoading = true;
        this.fetchData();
    },
    mounted() {
        let date = new Date();
        this.year = date.getFullYear();
    },
    methods: {
        fetchData() {
            if (this.periode != '') {
                this.year = this.periode
            }
            service.fetchData(this.api + '?year='+ this.year)
            .then(
                response => {
                    this.isLoading = false;
                    this.year_chart = this.year;
                    this.generateChart(response.buy_chart, response.sell_chart);
                }
            ).catch(error => {
                this.isLoading = false;
                console.log(error);
            });
        },
        generateChart(buy, sell) {
            this.chart = {
                chart: {
                    type: 'column',
                    height: '40%'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Statistik Data Tahun ' + this.year
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function() {
                            if (this.value >= 1E6) {
                                return (this.value / 1000000).toFixed(0) + ' Jt';
                            }
                            return this.value / 1000;
                        }
                    },
                },
                xAxis: {
                    categories: [
                        'Januari',
                        'Februari',
                        'Maret',
                        'April',
                        'Mei',
                        'Juni',
                        'Juli',
                        'Agustus',
                        'September',
                        'Oktober',
                        'November',
                        'Desember'
                    ],
                    title: {
                        text: null
                    }
                },
                series: [
                    {
                        name: 'Transaksi Penjualan',
                        data: sell,
                        title: 'Transaksi Penjualan'
                    },
                    {
                        name: 'Transaksi Pembelian',
                        data: buy,
                        title: 'Transaksi Pembelian'
                    }
                ],
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}:</td><td style="padding:0"><b>Rp.{point.y}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    enabled: true
                }
            }
        }
    }
};
</script>
