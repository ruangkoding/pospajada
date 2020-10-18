<?php
use App\Libraries\Common;
use App\Models\Kegiatan;
use App\Models\Belanja;
use App\Models\Anggaran;
use App\Models\Pegawai;
use App\Models\Pelimpahan;
use App\Models\PelimpahanDetail;
use App\Models\Sp2d;
$common = new Common();
$pegawai = Pegawai::where('norek', '!=', '')->get();
$anggaran_tahun = Anggaran::where('tahun', $tahun)->sum('jumlah');
$total_anggaran = 0;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>DATA KENDALI KEUANGAN BENDAHARA PENGELUARAN (BP)</title>
    <style>
        table td {
            font-size:10px;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td colspan="25" style="text-align:center;">
                <h1><b>DATA KENDALI KEUANGAN BENDAHARA PENGELUARAN (BP)</b></h1>
            </td>
        </tr>
        <tr>
            <td colspan="25" style="text-align:center;">
                <h1><b>INSPEKTORAT PROVINSI JAWA BARAT TAHUN ANGGARAN {{ $tahun }}.</b></h1>
            </td>
        </tr>
        <tr>
            <td colspan="25" style="text-align:center;">
                <h1><b>BULAN {{ strtoupper($common->generate_indonesia_month($dari)) }} {{ $tahun }}</b></h1>
            </td>
        </tr>
    </table>
    <table cellborder="1" width="100%">
        <thead>
            <tr>
                <td rowspan="2" style="border: 1px solid #000000;text-align: center;vertical-align:middle;"><b>No</b></td>
                <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;"><b>KODE KEGIATAN</b></td>
                <td style="border: 1px solid #000000;text-align: center;vertical-align:middle;"><b>NAMA BPP</b></td>
                <td rowspan="2" style="border: 1px solid #000000;vertical-align:middle;text-align: center;height:35px;"><b>JUMLAH<br>ANGGARAN<br>KEGIATAN</b></td>
                <td colspan="7" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>SP2D (MUTASI KREDIT REKENING KORAN)</b></td>
                <td rowspan="2" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>SISA<br>ANGGARAN<br>KEGIATAN</b></td>
                <td colspan="8" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>PELIMPAHAN (MUTASI DEBIT REKENING KORAN)</b></td>
                <td colspan="4" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>SP2T (Surat Perintah Pembayaran Transfer)</b></td>
                <td rowspan="2" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>SALDO<br>BANK DI REKENING<br>BP</b></td>
            </tr>
            <tr>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>KODERING</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>NAMA KEGIATAN</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>NOMOR SP2D</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>TANGGAL SP2D</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>UP</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>GU</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>TU</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>LS</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>JUMLAH</b></td>

                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>NOMOR NOTA DINAS</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>TANGGAL NOTA DINAS</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>UP</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>GU</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>TU</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>LS</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>JUMLAH</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>SISA ANGGARAN DI<br>BANK BP</b></td>

                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>UP</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>GU</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>TU</b></td>
                <td width="auto" style="border: 1px solid #000000;text-align:center;vertical-align:middle;"><b>LS</b></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;">{{ $anggaran_tahun }}</td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"> {{ $anggaran_tahun }}</td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
                <td width="auto" style="border: 1px solid #000000;vertical-align:middle;"></td>
            </tr>

            <?php
            $sp2d = Sp2d::whereMonth('tgl_sp2d', $dari)->where('tahun_anggaran', $tahun)->get();
            $pelimpahan = Pelimpahan::whereMonth('tgl_nota_dinas', $dari)->first();
            ?>
            @foreach($sp2d as $s)
                <tr>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="75%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="25%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;">{{ $s->nomor_sp2d }}</td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;">{{ $s->tgl_sp2d }}</td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;">@if($s->jenis_sp2d == 'UP') {{ $s->jumlah_sp2d }} @endif</td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;">@if($s->jenis_sp2d == 'GU') {{ $s->jumlah_sp2d }} @endif</td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;">@if($s->jenis_sp2d == 'TU') {{ $s->jumlah_sp2d }} @endif</td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;">@if($s->jenis_sp2d == 'LS') {{ $s->jumlah_sp2d }} @endif</td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;">{{ $s->jumlah_sp2d }}</td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;">{{ $s->sisa_anggaran }}</td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                    <td width="15%" style="border: 1px solid #000000;vertical-align:middle;"></td>
                </tr>
            @endforeach

            @foreach ($pegawai as $p)
                <?php
                $sql_kegiatan = Kegiatan::searchBendahara($p->id)->get();
                $kegiatan = Kegiatan::where('bendahara', $p->id)->get();
                $kegiatan_list = [];
                foreach ($kegiatan as $v) { $kegiatan_list[] = $v->id; }
                $anggaran = Anggaran::whereIn('kegiatan_id', $kegiatan_list)->sum('jumlah');
                $pdetail = PelimpahanDetail::where('bendahara', $p->id)->where('pelimpahan_id', $pelimpahan['id'])->first();
                ?>
                <tr>
                    <td colspan="3" style="vertical-align:middle; height:35px; border:1px solid #000000;">
                        {{ $p->nama }} ({{ $p->keterangan }})<br>
                        NOMOR REKENING : {{ $p->norek }}
                    </td>
                    <td style="border: 1px solid #000000;">{{ ($anggaran != 0) ? $anggaran : '' }}</td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;">{{ ($pdetail) ? $pelimpahan['nota_dinas'] : '' }}</td>
                    <td style="border: 1px solid #000000;">{{ ($pdetail) ? $pelimpahan['tgl_nota_dinas'] : '' }}</td>
                    <td width="15%" style="border: 1px solid #000000;">@if($pdetail['jenis_pelimpahan'] == 'UP') {{ $pdetail['jumlah_pelimpahan'] }} @endif</td>
                    <td width="15%" style="border: 1px solid #000000;">@if($pdetail['jenis_pelimpahan'] == 'GU') {{ $pdetail['jumlah_pelimpahan'] }} @endif</td>
                    <td width="15%" style="border: 1px solid #000000;">@if($pdetail['jenis_pelimpahan'] == 'TU') {{ $pdetail['jumlah_pelimpahan'] }} @endif</td>
                    <td width="15%" style="border: 1px solid #000000;">@if($pdetail['jenis_pelimpahan'] == 'LS') {{ $pdetail['jumlah_pelimpahan'] }} @endif</td>
                    <td style="border: 1px solid #000000;">{{ ($pdetail) ? $pdetail['jumlah_pelimpahan'] : '' }}</td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                    <td style="border: 1px solid #000000;"></td>
                </tr>
                <?php $i = 0; ?>
                @foreach($sql_kegiatan as $v)
                    <?php
                    $anggaran_kegiatan = 0;
                    $anggaran_kegiatan = Anggaran::where('kegiatan_id', $v->id)->sum('jumlah');
                    ?>
                    <tr>
                        <td style="border: 1px solid #000000;text-align:center;">{{ ++$i }}</td>
                        <td style="border: 1px solid #000000;"><b>{{ $v->kode_kegiatan }}</b></td>
                        <td style="border: 1px solid #000000;"><b>{{ $v->nama_kegiatan }}</b></td>
                        <td style="border: 1px solid #000000;">{{ ($anggaran_kegiatan != 0) ? $anggaran_kegiatan : '' }}</td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                        <td style="border: 1px solid #000000;"></td>
                    </tr>
                    <?php $sql_belanja = Belanja::where('kegiatan_id', $v->id)->get(); ?>
                    @foreach($sql_belanja as $k)
                        <?php $anggaran_belanja = Anggaran::where('belanja_id', $k->id)->sum('jumlah'); ?>
                        <tr>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;">{{ $k->kode_belanja }}</td>
                            <td style="border:1px solid #000000;">{{ $k->nama_belanja}}</td>
                            <td style="border:1px solid #000000;">{{ ($anggaran_belanja != 0) ? $anggaran_belanja : '' }}</td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                            <td style="border:1px solid #000000;"></td>
                        </tr>
                    @endforeach

                    <?php $total_anggaran = Anggaran::where('kegiatan_id', $v->id)->sum('jumlah'); ?>
                    <tr>
                        <td colspan="3" style="vertical-align: middle; border: 1px solid #000000;"><b>JUMLAH</b></td>
                        <td style="border:1px solid #000000;">{{ ($total_anggaran != 0) ? $total_anggaran : '' }}</td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                        <td style="border:1px solid #000000;"></td>
                    </tr>
                @endforeach
            @endforeach
        </tbody>
    </table>
</body>
</html>
