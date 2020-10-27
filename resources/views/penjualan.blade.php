<?php
use App\Libraries\Common;
use App\Models\SellOrder;
use App\Models\SellOrderDetail;
$common = new Common();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>LAPORAN TRANSAKSI BARANG KELUAR</title>
    <style>
        table td {
            font-size:10px;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td colspan="5" style="text-align:center;">
                <h1><b>LAPORAN TRANSAKSI BARANG KELUAR</b></h1>
            </td>
        </tr>
        <tr>
            <td colspan="5" style="text-align:center;">
                <h1><b>{{ $common->generate_indonesia_date($dari)) }} s.d {{ $common->generate_indonesia_date($sampai) }}</b></h1>
            </td>
        </tr>
    </table>
    <table cellborder="1" width="100%">
        <tr>
            <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;"><b>NOTA</b></td>
            <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;"><b>TANGGAL</b></td>
            <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;"><b>BARANG</b></td>
            <td style="border: 1px solid #000000;vertical-align:middle;text-align: center;"><b>HARGA</b></td>
            <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>JUMLAH</b></td>
            <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>SUBTOTAL</b></td>
        </tr>
        <?php $sell = SellOrderDetail::searchPeriode($dari, $sampai)->with('item', 'order')->get(); ?>
        @foreach ($sell as $s)
            <tr>
                <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;">{!! $s->order->invoice !!}</td>
                <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;">{!! $common->generate_indonesia_date($s->order->invoice_date) !!}</td>
                <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;">{!! $s->item->item_name !!}</td>
                <td style="border: 1px solid #000000;vertical-align:middle;text-align: center;">{!! $s->price !!}</td>
                <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;">{!! $s->quantity !!}</td>
                <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;">{!! $s->subtotal !!}</td>
            </tr>
            <?php $total += $s->subtotal; ?>
        @endforeach
        <tr>
            <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;">{!! $s->order->invoice !!}</td>
            <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;">{!! $common->generate_indonesia_date($s->order->invoice_date) !!}</td>
            <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;">{!! $s->item->item_name !!}</td>
            <td style="border: 1px solid #000000;vertical-align:middle;text-align: center;">{!! $s->price !!}</td>
            <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;">{!! $s->quantity !!}</td>
            <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;">{!! $s->subtotal !!}</td>
        </tr>
    </table>
</body>
</html>
