<aside class="main-sidebar sidebar-dark-purple elevation-2">
    <a href="#" class="brand-link logo-switch">
        <img src="{{ asset('img/logo-mini.png') }}" class="brand-image-xl logo-xs">
        <img src="{{ asset('img/logo-h.png') }}" class="brand-image-xs logo-xl">
    </a>
    <div class="sidebar">
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column nav-flat nav-compact mt-sm-4" data-widget="treeview" role="menu"
                data-accordion="false">
                <li class="nav-item">
                    <a @if($link=='dashboard') class="nav-link active" @else class="nav-link" @endif
                    href="{!! url('dashboard') !!}">
                        <i class="nav-icon fa fa-home"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li 
                    @if (in_array($link, ['buycart','sellcart'])) 
                        class="nav-item has-treeview menu-open" 
                    @else
                        class="nav-item has-treeview" 
                    @endif
                >
                    <a class="nav-link" href="#"><i class="nav-icon fa fa-shopping-bag"></i>
                        <p>Belanja <i class="fa fa-angle-left right"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a 
                                @if($link=='buycart') 
                                    class="nav-link active" 
                                @else 
                                    class="nav-link" 
                                @endif
                                href="{!! url('buycart') !!}"
                            >
                                <i class="nav-icon fa fa-circle-o"></i>
                                <p>Pembelian</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a 
                                @if($link=='sellcart') 
                                    class="nav-link active" 
                                @else 
                                    class="nav-link" 
                                @endif
                                href="{!! url('sellcart') !!}"
                            >
                                <i class="nav-icon fa fa-circle-o"></i>
                                <p>Penjualan</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li 
                    @if (in_array($link, ['buyorder','sellorder'])) 
                        class="nav-item has-treeview menu-open" 
                    @else
                        class="nav-item has-treeview" 
                    @endif
                >
                    <a class="nav-link" href="#"><i class="nav-icon fa fa-file-text"></i>
                        <p>Invoice <i class="fa fa-angle-left right"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a 
                                @if($link=='buyorder') 
                                    class="nav-link active" 
                                @else 
                                    class="nav-link" 
                                @endif
                                href="{!! url('buyorder') !!}"
                            >
                                <i class="nav-icon fa fa-circle-o"></i>
                                <p>Pembelian</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a 
                                @if($link=='sellorder') 
                                    class="nav-link active" 
                                @else 
                                    class="nav-link" 
                                @endif
                                href="{!! url('sellorder') !!}"
                            >
                                <i class="nav-icon fa fa-circle-o"></i>
                                <p>Penjualan</p>
                            </a>
                        </li>
                    </ul>
                </li>
                @if(Cookie::get('level') == 1)
                    <li 
                        @if (in_array($link, ['category','item'])) 
                            class="nav-item has-treeview menu-open" 
                        @else
                            class="nav-item has-treeview" 
                        @endif
                    >
                        <a class="nav-link" href="#"><i class="nav-icon fa fa-dropbox"></i>
                            <p>Katalog <i class="fa fa-angle-left right"></i></p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a 
                                    @if($link=='category') 
                                        class="nav-link active" 
                                    @else 
                                        class="nav-link" 
                                    @endif
                                    href="{!! url('category') !!}"
                                >
                                    <i class="nav-icon fa fa-circle-o"></i>
                                    <p>Jenis Barang</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a 
                                    @if($link=='item') 
                                        class="nav-link active" 
                                    @else 
                                        class="nav-link" 
                                    @endif
                                    href="{!! url('item') !!}"
                                >
                                    <i class="nav-icon fa fa-circle-o"></i>
                                    <p>Barang</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li 
                        @if (in_array($link, ['supplier','customer'])) 
                            class="nav-item has-treeview menu-open" 
                        @else
                            class="nav-item has-treeview" 
                        @endif
                    >
                        <a class="nav-link" href="#"><i class="nav-icon fa fa-database"></i>
                            <p>Master <i class="fa fa-angle-left right"></i></p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a 
                                    @if($link=='supplier') 
                                        class="nav-link active" 
                                    @else 
                                        class="nav-link" 
                                    @endif
                                    href="{!! url('supplier') !!}"
                                >
                                    <i class="nav-icon fa fa-circle-o"></i>
                                    <p>Supplier</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a 
                                    @if($link=='customer') 
                                        class="nav-link active" 
                                    @else 
                                        class="nav-link" 
                                    @endif
                                    href="{!! url('customer') !!}"
                                >
                                    <i class="nav-icon fa fa-circle-o"></i>
                                    <p>Customer</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a 
                                    @if($link=='user') 
                                        class="nav-link active" 
                                    @else 
                                        class="nav-link" 
                                    @endif
                                    href="{!! url('user') !!}"
                                >
                                    <i class="nav-icon fa fa-circle-o"></i>
                                    <p>User</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a 
                            @if($link=='report') 
                                class="nav-link active" 
                            @else 
                                class="nav-link" 
                            @endif
                            href="{!! url('report') !!}"
                        >
                            <i class="nav-icon fa fa-file-excel-o"></i>
                            <p>Laporan Transaksi</p>
                        </a>
                    </li>
                @endif
                <li class="nav-item">
                    <a 
                        @if($link=='profile') 
                            class="nav-link active" 
                        @else 
                            class="nav-link" 
                        @endif
                        href="{!! url('profile') !!}"
                    >
                        <i class="nav-icon fa fa-lock"></i>
                        <p>Ganti Password</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{!! url('logout') !!}">
                        <i class="nav-icon fa fa-sign-out"></i>
                        <p>Log Out</p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
