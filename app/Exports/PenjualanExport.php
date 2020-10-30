<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class PenjualanExport implements FromView, ShouldAutoSize
{
    protected $dari;
    protected $sampai;

    function __construct($dari, $sampai)
    {
        $this->dari = $dari;
        $this->sampai = $sampai;
    }

    public function view(): View
    {
        $dari = $this->dari;
        $sampai = $this->sampai;
        return view('penjualan', ['dari' => $dari, 'sampai' => $sampai]);
    }
}
