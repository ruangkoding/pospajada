<?php

namespace App\Libraries;

use Illuminate\Support\Facades\DB;

class Common
{
    protected $_bilangan = [
        '',
        'Satu',
        'Dua',
        'Tiga',
        'Empat',
        'Lima',
        'Enam',
        'Tujuh',
        'Delapan',
        'Sembilan',
        'Sepuluh',
        'Sebelas'
    ];

    /**
     * konversi angka menjadi format rupiah
     * @param integer $angka
     * @return string $rupiah
     */
    public function rupiah($angka)
    {
        return number_format($angka, 0, ',', '.');
    }

    /**
     * konversi format angka menjadi terbilang
     * @param int $angka
     * @return string $terbilang;
     */
    public function terbilang($angka) {
        $angka = floatval($angka);
        if ($angka < 12) {
            return $this->_bilangan[$angka];
        } else if ($angka < 20) {
            return $this->_bilangan[$angka - 10] . ' Belas';
        } else if ($angka < 100) {
            $hasil_bagi = (int)($angka / 10);
            $hasil_mod = $angka % 10;
            return trim(sprintf('%s Puluh %s', $this->_bilangan[$hasil_bagi], $this->_bilangan[$hasil_mod]));
        } else if ($angka < 200) {
            return sprintf('Seratus %s', self::terbilang($angka - 100));
        } else if ($angka < 1000) {
            $hasil_bagi = (int)($angka / 100);
            $hasil_mod = $angka % 100;
            return trim(sprintf('%s Ratus %s', $this->_bilangan[$hasil_bagi], self::terbilang($hasil_mod)));
        } else if ($angka < 2000) {
            return trim(sprintf('Seribu %s', self::terbilang($angka - 1000)));
        } else if ($angka < 1000000) {
            $hasil_bagi = intval($angka / 1000);
            $hasil_mod = $angka % 1000;
            return sprintf('%s Ribu %s', self::terbilang($hasil_bagi), self::terbilang($hasil_mod));
        } else if ($angka < 1000000000) {
            $hasil_bagi = intval($angka / 1000000);
            $hasil_mod = $angka % 1000000;
            return trim(sprintf('%s Juta %s', self::terbilang($hasil_bagi), self::terbilang($hasil_mod)));
        } else if ($angka < 1000000000000) {
            $hasil_bagi = intval($angka / 1000000000);
            $hasil_mod = fmod($angka, 1000000000);
            return trim(sprintf('%s Milyar %s', self::terbilang($hasil_bagi), self::terbilang($hasil_mod)));
        } else if ($angka < 1000000000000000) {
            $hasil_bagi = $angka / 1000000000000;
            $hasil_mod = fmod($angka, 1000000000000);
            return trim(sprintf('%s Triliun %s', self::terbilang($hasil_bagi), self::terbilang($hasil_mod)));
        } else {
            return false;
        }
    }

    /**
     * ekstrak tahun dari parameter date
     * @param string $date
     * @return string $year
     */
    public function generate_year_from_date($date)
    {
        $year = explode('-', $date);
        return $year[0];
    }

    /**
     * menampilkan daftar bulan
     * @return array $month
     */
    public function generate_integer_month()
    {
        $month = [];
        $month['01'] = 'Januari';
        $month['02'] = 'Februari';
        $month['03'] = 'Maret';
        $month['04'] = 'April';
        $month['05'] = 'Mei';
        $month['06'] = 'Juni';
        $month['07'] = 'Juli';
        $month['08'] = 'Agustus';
        $month['09'] = 'September';
        $month['10'] = 'Oktober';
        $month['11'] = 'November';
        $month['12'] = 'Desember';

        return $month;
    }

    /**
     * menampilkan daftar tahun dimulai dari tahun sekarang hingga 5 tahun berikutnya
     * @return array $year
     */
    public function generate_year()
    {
        $current_year = date('Y');
        $year = [];
        for ($i = $current_year; $i <= $current_year + 5; $i++) {
            array_push($year, $i);
        }
        return $year;
    }

    /**
     * convert mysql date to indonesia date format
     * @param string $date
     * @return string
     */
    public function generate_indonesia_date($date)
    {
        $bulan = self::generate_integer_month();
        $timestamp = strtotime($date);
        $indonesia_date = date('j', $timestamp) .' '. $bulan[date('n', $timestamp)] . date(' Y', $timestamp);
        return $indonesia_date;
    }

    /**
     * convert mysql month to indonesia month format
     * @param string $date
     * @return string
     */
    public function generate_indonesia_month($date)
    {
        $bulan = self::generate_integer_month();
        return $bulan[$date];
    }

    /**
     * generate breadcrumbs
     * @param string $date
     * @return string
     */
    public function generate_breadcrumbs($arr)
    {
        $breadcrumb = '<ol class="breadcrumb float-sm-right">';
        $total = count($arr);
        $i = 1;
        foreach($arr as $key=>$val) {
            if ($i == $total) {
                $breadcrumb .= '<li class="breadcrumb-item active"><span>'.$val.'</span></li>';
            } else {
                $breadcrumb .= '<li class="breadcrumb-item">'.$val.'</li>';
            }       
            $i++;
        }
        $breadcrumb .= '</ol>';
        return $breadcrumb;
    }
}
