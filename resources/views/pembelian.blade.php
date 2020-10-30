<?php
use App\Libraries\Common;
use App\Models\BuyOrder;
use App\Models\BuyOrderDetail;
$common = new Common();
$total = 0;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>LAPORAN TRANSAKSI BARANG MASUK</title>
    <style>
        table td {
            font-size:10px;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td colspan="4" style="text-align:center;">
                <h1><b>LAPORAN TRANSAKSI BARANG MASUK</b></h1>
            </td>
        </tr>
        <tr>
            <td colspan="4" style="text-align:center;">
                <h1><b>{!! $common->generate_indonesia_date($dari) !!} s.d {!! $common->generate_indonesia_date($sampai) !!}</b></h1>
            </td>
        </tr>
    </table>
    <table cellborder="1" width="100%">
        <?php $buy = BuyOrder::searchAwalPeriode($dari)->searchAkhirPeriode($sampai)->with('supplier')->get(); ?>
        @foreach ($buy as $s)
            <tr>
                <td colspan="4" style="border: 1px solid #000000;vertical-align:middle;">
                    <table>
                        <tr>
                            <td>Nota</td>
                            <td>:</td>
                            <td>{!! $s->invoice !!}</td>
                        </tr>
                        <tr>
                            <td>Tanggal</td>
                            <td>:</td>
                            <td>{!! $common->generate_indonesia_date($s->invoice_date) !!}</td>
                        </tr>
                        <tr>
                            <td>Supplier</td>
                            <td>:</td>
                            <td>{!! $s->supplier->supplier_name !!}</td>
                        </tr>
                    </table>
                </td>
                <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>{!! $common->rupiah($s->total) !!}</b></td>
            </tr>
            <tr>
                <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;"><b>BARANG</b></td>
                <td style="border: 1px solid #000000;vertical-align:middle;text-align: center;"><b>HARGA</b></td>
                <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>JUMLAH</b></td>
                <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>SUBTOTAL</b></td>
            </tr>
            <?php $detail = BuyOrderDetail::where('buy_order_id', $s->id)->with('item')->get(); ?>
            @foreach ($detail as $v)
                <tr>
                    <td style="border: 1px solid #000000;vertical-align:middle;">{!! $v->item->item_name !!}</td>
                    <td style="border: 1px solid #000000;vertical-align:middle;text-align: right;">{!! $v->price !!}</td>
                    <td style="border: 1px solid #000000;text-align:center;vertical-align:middle;">{!! $v->quantity !!}</td>
                    <td style="border: 1px solid #000000;text-align:right;vertical-align:middle;">{!! $v->subtotal !!}</td>
                </tr>
            <?php $total += $s->subtotal; ?>
            @endforeach
            <tr>
                <td colspan="4" style="text-align:center; border: 1px solid #000000;vertical-align:middle;"><b>TOTAL</b></td>
                <td style="border: 1px solid #000000;text-align:right;vertical-align:middle;"><b>{!! $common->rupiah($s->total) !!}</b></td>
            </tr>
        @endforeach
    </table>
</body>
</html>
