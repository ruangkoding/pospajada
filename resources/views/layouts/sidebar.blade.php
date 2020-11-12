<div class="c-sidebar c-sidebar-dark bg-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand">
        <img class="c-sidebar-brand-minimized" src="{{ asset('img/logo-mini.png') }}" height="46">
        <img class="c-sidebar-brand-full" src="{{ asset('img/logo-h.png') }}" height="46">
    </div>
    <ul class="c-sidebar-nav ps ps--active-y">
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="{!! url('dashboard') !!}">
            <i class="c-sidebar-nav-icon fa fa-home"></i> Beranda</a>
        </li>
        <li class="c-sidebar-nav-dropdown">
            <a class="c-sidebar-nav-dropdown-toggle" href="#">
                <i class="c-sidebar-nav-icon fa fa-shopping-bag"></i> Transaksi   
            </a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{!! url('po') !!}">Purchase Order</a>
                </li>
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{!! url('so') !!}">Sales Order</a>
                </li>
            </ul>
        </li>

        <li class="c-sidebar-nav-dropdown">
            <a class="c-sidebar-nav-dropdown-toggle" href="#">
                <i class="c-sidebar-nav-icon fa fa-file-text-o"></i> Invoice
            </a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{!! url('poinvoice') !!}">Pembelian</a>
                </li>
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{!! url('soinvoice') !!}">Penjualan</a>
                </li>
            </ul>
        </li>

        @if(Cookie::get('level') == 1)
            <li class="c-sidebar-nav-item">
                <a class="c-sidebar-nav-link" href="{!! url('report') !!}"><i class="c-sidebar-nav-icon fa fa-print"></i> Cetak Laporan</a>
            </li>

            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#"><i class="c-sidebar-nav-icon fa fa-book"></i> Katalog</a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="{!! url('category') !!}">Jenis Barang</a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="{!! url('item') !!}">Barang</a>
                    </li>
                </ul>
            </li>

            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon fa fa-briefcase"></i> Master
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="{!! url('supplier') !!}">Supplier</a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="{!! url('customer') !!}">Customer</a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="{!! url('user') !!}">Pengguna</a>
                    </li>
                </ul>
            </li>
        @endif
        
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{!! url('profile') !!}">
                <i class="c-sidebar-nav-icon fa fa-user"></i> Ganti Password
            </a>
        </li>

        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{!! url('logout') !!}">
                <i class="c-sidebar-nav-icon fa fa-lock"></i> Keluar
            </a>
        </li>
    </ul>
</div>