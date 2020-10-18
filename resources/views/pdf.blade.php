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
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DATA KENDALI KEUANGAN BENDAHARA PENGELUARAN (BP)</title>
    <link rel="stylesheet" href="{!! asset('css/bootstrap.min.css') !!}">
    <style>
        @page  {
          size: auto;
        }
        body {
            margin: 0px;
        }
        .table-bordered tr td {
          font-size: 8px;
          color:#000000;
          border: 0.75px solid #000000 !important;
        }
        h4 {
          font-size: 14pt;
        }
    </style>
</head>
<body onload="window.print()">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div style="text-align:center;">
          <h4>DATA KENDALI KEUANGAN BENDAHARA PENGELUARAN (BP)</h4>
          <h4>INSPEKTORAT PROVINSI JAWA BARAT TAHUN ANGGARAN {{ $tahun }}</h4>
          <h4>BULAN {{ strtoupper($common->generate_indonesia_month($dari)) }} {{ $tahun }}</h4>
        </div>
        <table class="table table-bordered" width="100%">
            <thead>
                <tr>
                    <td rowspan="2" style="text-align: center;vertical-align:middle;"><b>No</b></td>
                    <td style="text-align: center;vertical-align:middle;"><b>KODE KEGIATAN</b></td>
                    <td style="text-align: center;vertical-align:middle;"><b>NAMA BPP</b></td>
                    <td rowspan="2" style="vertical-align:middle;text-align: center;height:35px;"><b>JUMLAH<br>ANGGARAN<br>KEGIATAN</b></td>
                    <td colspan="7" style="text-align:center;vertical-align:middle;"><b>SP2D (MUTASI KREDIT REKENING KORAN)</b></td>
                    <td rowspan="2" style="text-align:center;vertical-align:middle;"><b>SISA<br>ANGGARAN<br>KEGIATAN</b></td>
                    <td colspan="8" style="text-align:center;vertical-align:middle;"><b>PELIMPAHAN (MUTASI DEBIT REKENING KORAN)</b></td>
                    <td colspan="4" style="text-align:center;vertical-align:middle;"><b>SP2T (Surat Perintah Pembayaran Transfer)</b></td>
                    <td rowspan="2" style="text-align:center;vertical-align:middle;"><b>SALDO<br>BANK DI REKENING<br>BP</b></td>
                </tr>
                <tr>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>KODERING</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>NAMA KEGIATAN</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>NOMOR SP2D</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>TANGGAL SP2D</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>UP</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>GU</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>TU</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>LS</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>JUMLAH</b></td>

                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>NOMOR NOTA DINAS</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>TANGGAL NOTA DINAS</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>UP</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>GU</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>TU</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>LS</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>JUMLAH</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>SISA ANGGARAN DI<br>BANK BP</b></td>

                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>UP</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>GU</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>TU</b></td>
                    <td width="auto" style="text-align:center;vertical-align:middle;"><b>LS</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;text-align:right;">{{ $common->rupiah($anggaran_tahun) }}</td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;text-align:right;">{{ $common->rupiah($anggaran_tahun) }}</td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                    <td width="auto" style="vertical-align:middle;"></td>
                </tr>

                <?php
                $sp2d = Sp2d::whereMonth('tgl_sp2d', $dari)->where('tahun_anggaran', $tahun)->get();
                $pelimpahan = Pelimpahan::whereMonth('tgl_nota_dinas', $dari)->first();
                ?>
                @foreach($sp2d as $s)
                    <tr>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="75%" style="vertical-align:middle;"></td>
                        <td width="25%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;">{{ $s->nomor_sp2d }}</td>
                        <td width="15%" style="vertical-align:middle;">{{ $s->tgl_sp2d }}</td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">
                          @if($s->jenis_sp2d == 'UP') {{ $common->rupiah($s->jumlah_sp2d) }} @endif
                        </td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">
                          @if($s->jenis_sp2d == 'GU') {{ $common->rupiah($s->jumlah_sp2d) }} @endif
                        </td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">
                          @if($s->jenis_sp2d == 'TU') {{ $common->rupiah($s->jumlah_sp2d) }} @endif
                        </td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">
                          @if($s->jenis_sp2d == 'LS') {{ $common->rupiah($s->jumlah_sp2d) }} @endif
                        </td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">{{ $common->rupiah($s->jumlah_sp2d) }}</td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">{{ $common->rupiah($s->sisa_anggaran) }}</td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
                        <td width="15%" style="vertical-align:middle;"></td>
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
                        <td style="text-align:right;">{{ ($anggaran != 0) ? $common->rupiah($anggaran) : '' }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style="vertical-align:middle;">{{ ($pdetail) ? $pelimpahan['nota_dinas'] : '' }}</td>
                        <td style="vertical-align:middle;">{{ ($pdetail) ? $pelimpahan['tgl_nota_dinas'] : '' }}</td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">
                          @if($pdetail['jenis_pelimpahan'] == 'UP') {{ $common->rupiah($pdetail['jumlah_pelimpahan']) }} @endif
                        </td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">
                          @if($pdetail['jenis_pelimpahan'] == 'GU') {{ $common->rupiah($pdetail['jumlah_pelimpahan']) }} @endif
                        </td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">
                          @if($pdetail['jenis_pelimpahan'] == 'TU') {{ $common->rupiah($pdetail['jumlah_pelimpahan']) }} @endif
                        </td>
                        <td width="15%" style="vertical-align:middle;text-align:right;">
                          @if($pdetail['jenis_pelimpahan'] == 'LS') {{ $common->rupiah($pdetail['jumlah_pelimpahan']) }} @endif
                        </td>
                        <td style="vertical-align:middle;text-align:right;">
                          {{ ($pdetail) ? $common->rupiah($pdetail['jumlah_pelimpahan']) : '' }}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <?php $i = 0; ?>
                    @foreach($sql_kegiatan as $v)
                        <?php
                        $anggaran_kegiatan = 0;
                        $anggaran_kegiatan = Anggaran::where('kegiatan_id', $v->id)->sum('jumlah');
                        ?>
                        <tr>
                            <td style="vertical-align:middle;text-align:center;">{{ ++$i }}</td>
                            <td style="vertical-align:middle;"><b>{{ $v->kode_kegiatan }}</b></td>
                            <td style="vertical-align:middle"><b>{{ $v->nama_kegiatan }}</b></td>
                            <td style="vertical-align:middle">{{ ($anggaran_kegiatan != 0) ? $common->rupiah($anggaran_kegiatan) : '' }}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <?php $sql_belanja = Belanja::where('kegiatan_id', $v->id)->get(); ?>
                        @foreach($sql_belanja as $k)
                            <?php $anggaran_belanja = Anggaran::where('belanja_id', $k->id)->sum('jumlah'); ?>
                            <tr>
                                <td style="border:1px solid #000000;"></td>
                                <td style="border:1px solid #000000;vertical-align:middle;">{{ $k->kode_belanja }}</td>
                                <td style="border:1px solid #000000;vertical-align:middle;">{{ $k->nama_belanja}}</td>
                                <td style="border:1px solid #000000;vertical-align:middle;text-align:right;">
                                  {{ ($anggaran_belanja != 0) ? $common->rupiah($anggaran_belanja) : '' }}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        @endforeach

                        <?php $total_anggaran = Anggaran::where('kegiatan_id', $v->id)->sum('jumlah'); ?>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; "><b>JUMLAH</b></td>
                            <td style="text-align:right;vertical-align:middle;">{{ ($total_anggaran != 0) ? $common->rupiah($total_anggaran) : '' }}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    @endforeach
                @endforeach
            </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>
