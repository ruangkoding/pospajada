<?php

namespace App\Exports;

use App\Models\Anggaran;
use App\Models\Kegiatan;
use App\Models\Belanja;
use App\Models\Sp2d;
use App\Models\Pelimpahan;
use App\Models\Sp2t;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class AnggaranExport implements FromView, ShouldAutoSize
{
    protected $dari;

    function __construct($dari)
    {
        $this->dari = explode('-', $dari);
    }

    public function view(): View
    {
        $dari = $this->dari;
        return view('excel', ['dari' => $dari[1], 'tahun' => $dari[0]]);
    }
}
