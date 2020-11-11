<?php
use App\Libraries\Common;
$common = new Common();
$i = 0;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NOTA PENJUALAN {!! $invoice->invoice !!}</title>
    <link rel="stylesheet" href="{!! asset('css/bootstrap.min.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/print.css') !!}">
    <style>
        @page  {
            size: auto;
        }
        .table-bordered tr td {
            font-size: 12px;
            color:#000000;
            border: 0.75px solid #000000 !important;
        }
        body {
            font-family: 'Bookman Old Style';
        }
        h4 {
            font-size: 14pt;
        }
    </style>
</head>
<body onload="window.print()">
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <h3>Nota Pembelian<br>
                        <span class="small">
                            No : {!! $invoice->invoice !!}
                        </span>
                    </h3>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-6">
                    <address>
                        <strong>Customer :</strong><br>
                        {!! $invoice->customer->customer_name !!}<br>
                        {!! $invoice->customer->customer_address !!}<br>
                        {!! $invoice->customer->hp !!}
                    </address>
                </div>
                <div class="col-6 text-right">
                    <address>
                        <strong>Tanggal Penjualan :</strong><br>
                        {!! $common->generate_indonesia_date($invoice->invoice_date) !!}<br>
                        <strong>Pembayaran :</strong><br>
                        {!! $invoice->paymentmethod->name !!}
                    </address>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead>
                        <tr class="line">
                            <td style="width: 3%;"  class="text-center"><strong>#</strong></td>
                            <td style="width: 20%;" class="text-center"><strong>BARANG</strong></td>
                            <td style="width: 5%;"  class="text-center"><strong>JUMLAH</strong></td>
                            <td style="width: 5%;"  class="text-center"><strong>HARGA</strong></td>
                            <td style="width: 5%;"  class="text-center"><strong>SUBTOTAL</strong></td>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($detail as $v)
                            <tr>
                                <td class="text-center">{!! ++$i !!}</td>
                                <td>{!! $v->item->item_name !!}</td>
                                <td class="text-center">{!! $v->quantity !!} {!! $v->item->unit->unit_name !!}</td>
                                <td class="text-right">{!! $common->rupiah($v->price) !!}</td>
                                <td class="text-right">{!! $common->rupiah($v->subtotal) !!}</td>
                            </tr>
                        @endforeach
                        <tr>
                            <td colspan="4" class="text-right "><b>TOTAL</b></td>
                            <td class="text-right">{!! $common->rupiah($invoice->total) !!}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
