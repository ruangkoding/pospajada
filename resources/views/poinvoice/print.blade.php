<?php
use App\Libraries\Common;
$common = new Common();
$i = 0;
?>
<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>INVOICE PEMBELIAN {!! $invoice->invoice_number !!}</title>
    <link rel="stylesheet" href="{!! asset('css/bootstrap.min.css') !!}">
    <style>
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
                        <h3>Invoice Pembelian<br>
                            <span class="small">
                                No : {!! $invoice->invoice_number !!}
                            </span>
                        </h3>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <table style="width: 100%;">
                            <tr>
                                <td style="width:50%;">
                                    <address>
                                        <strong>Supplier :</strong><br>
                                        {!! $invoice->po->supplier->supplier_name !!}<br>
                                        {!! $invoice->po->supplier->supplier_address !!}<br>
                                        {!! $invoice->po->supplier->supplier_contact !!}
                                    </address>
                                </td>
                                <td style="width:50%;text-align:right;">
                                    <address>
                                        <strong>Tanggal Pembelian :</strong><br>
                                        {!! $common->generate_indonesia_date($invoice->invoice_date) !!}<br>
                                        <strong>Pembayaran :</strong><br>
                                        {!! $invoice->paymentmethod->name !!}
                                    </address>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <table class="table" style="border: 0.50px solid #000000 !important;">
                            <thead>
                                <tr style="border: 0.50px solid #000000 !important;">
                                    <td style="width: 10%;border: 0.50px solid #000000 !important;"  class="text-center"><strong>#</strong></td>
                                    <td style="width: 40%;border: 0.50px solid #000000 !important;" class="text-center"><strong>BARANG</strong></td>
                                    <td style="width: 10%;border: 0.50px solid #000000 !important;" class="text-center"><strong>JUMLAH</strong></td>
                                    <td style="width: 20%;border: 0.50px solid #000000 !important;" class="text-center"><strong>HARGA</strong></td>
                                    <td style="width: 20%;border: 0.50px solid #000000 !important;" class="text-center"><strong>SUBTOTAL</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($detail as $v)
                                    <tr style="border: 0.50px solid #000000 !important;">
                                        <td style="border: 0.50px solid #000000 !important;" class="text-center">{!! ++$i !!}</td>
                                        <td style="border: 0.50px solid #000000 !important;">{!! $v->item->item_name !!}</td>
                                        <td style="border: 0.50px solid #000000 !important;" class="text-center">{!! $v->quantity !!}</td>
                                        <td style="border: 0.50px solid #000000 !important;" class="text-right">{!! $common->rupiah($v->price) !!}</td>
                                        <td style="border: 0.50px solid #000000 !important;" class="text-right">{!! $common->rupiah($v->subtotal) !!}</td>
                                    </tr>
                                @endforeach
                                <tr style="border: 0.50px solid #000000 !important;">
                                    <td style="border: 0.50px solid #000000 !important;" colspan="4" class="text-right "><b>TOTAL</b></td>
                                    <td style="border: 0.50px solid #000000 !important;" class="text-right">{!! $common->rupiah($invoice->total) !!}</td>
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
