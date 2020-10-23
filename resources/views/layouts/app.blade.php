<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Point Of Sale | {!! $title !!}</title>
    <link href="{!! asset(mix('css/app.css')) !!}" rel="stylesheet">
    <link rel="manifest" href="{!! asset('manifest.json') !!}" />
</head>
<body class="hold-transition sidebar-mini sidebar-expand">
    <div class="wrapper">
        @include('layouts.topmenu')
        @include('layouts.sidebar')
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6"><h2>{!! $title !!}</h2></div>
                        <div class="col-sm-6">
                            {!! $breadcrumb !!}
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="container-fluid">
                    @yield('content')
                </div>
            </section>
        </div>
        @include('layouts.footer')
    </div>
    <script src="{!! asset(mix('js/manifest.js')) !!}"></script>
    <script src="{!! asset(mix('js/vendor.js')) !!}"></script>
    <script src="{!! asset(mix('js/app.js')) !!}"></script>
    <script src="{!! asset(mix('js/adminlte.js')) !!}"></script>
</body>
</html>
