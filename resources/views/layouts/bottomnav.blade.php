<nav class="navbar navbar-dark navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
    <ul class="navbar-nav nav-justified w-100" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item">
            <a @if($link=='dashboard' ) class="nav-link active" @else class="nav-link" @endif
                href="{!! url('dashboard') !!}">
                <i class="nav-icon fa fa-home"></i>
            </a>
        </li>
        <li class="nav-item has-treeview">
            <a class="nav-link" href="#"><i class="nav-icon fa fa-shopping-bag"></i></a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a @if($link=='buycart' ) class="nav-link active" @else class="nav-link" @endif
                        href="{!! url('buycart') !!}">
                        <i class="nav-icon fa fa-circle-o"></i>
                        <p>Pembelian</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a @if($link=='sellcart' ) class="nav-link active" @else class="nav-link" @endif
                        href="{!! url('sellcart') !!}">
                        <i class="nav-icon fa fa-circle-o"></i>
                        <p>Penjualan</p>
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item has-treeview">
            <a class="nav-link" href="#"><i class="nav-icon fa fa-file-text"></i></a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a class="nav-link" href="{!! url('buyorder') !!}">
                        <i class="nav-icon fa fa-circle-o"></i>
                        <p>Pembelian</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{!! url('sellorder') !!}">
                        <i class="nav-icon fa fa-circle-o"></i>
                        <p>Penjualan</p>
                    </a>
                </li>
            </ul>
        </li>
        @if(Cookie::get('level') == 1)
          <li @if (in_array($link, ['category','item'])) class="nav-item has-treeview menu-open" @else
              class="nav-item has-treeview" @endif>
              <a class="nav-link" href="#"><i class="nav-icon fa fa-dropbox"></i>
                  <p><i class="fa fa-angle-left right"></i></p>
              </a>
              <ul class="nav nav-treeview">
                  <li class="nav-item">
                      <a @if($link=='category' ) class="nav-link active" @else class="nav-link" @endif
                          href="{!! url('category') !!}">
                          <i class="nav-icon fa fa-circle-o"></i>
                          <p>Jenis Barang</p>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a @if($link=='item' ) class="nav-link active" @else class="nav-link" @endif
                          href="{!! url('item') !!}">
                          <i class="nav-icon fa fa-circle-o"></i>
                          <p>Barang</p>
                      </a>
                  </li>
              </ul>
          </li>
          <li @if (in_array($link, ['supplier','customer'])) class="nav-item has-treeview menu-open" @else
              class="nav-item has-treeview" @endif>
              <a class="nav-link" href="#"><i class="nav-icon fa fa-database"></i>
                  <p><i class="fa fa-angle-left right"></i></p>
              </a>
              <ul class="nav nav-treeview">
                  <li class="nav-item">
                      <a @if($link=='supplier' ) class="nav-link active" @else class="nav-link" @endif
                          href="{!! url('supplier') !!}">
                          <i class="nav-icon fa fa-circle-o"></i>
                          <p>Supplier</p>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a @if($link=='customer' ) class="nav-link active" @else class="nav-link" @endif
                          href="{!! url('customer') !!}">
                          <i class="nav-icon fa fa-circle-o"></i>
                          <p>Customer</p>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a @if($link=='user' ) class="nav-link active" @else class="nav-link" @endif
                          href="{!! url('user') !!}">
                          <i class="nav-icon fa fa-circle-o"></i>
                          <p>User</p>
                      </a>
                  </li>
              </ul>
          </li>
        @endif
        <li class="nav-item">
            <a @if($link=='profile' ) class="nav-link active" @else class="nav-link" @endif
                href="{!! url('profile') !!}">
                <i class="nav-icon fa fa-lock"></i>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{!! url('logout') !!}">
                <i class="nav-icon fa fa-sign-out"></i>
            </a>
        </li>
    </ul>
</nav>
