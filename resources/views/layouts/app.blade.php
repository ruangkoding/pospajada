<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Point Of Sale | {!! $title !!}</title>
    <link href="{!! asset(mix('css/app.css')) !!}" rel="stylesheet">
    <link rel="manifest" href="{!! asset('manifest.json') !!}" />
</head>
<body class="c-app">
    @include('layouts.sidebar')
    <div class="c-wrapper">
        @include('layouts.topmenu')
        <!-- <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6"><h2>{!! $title !!}</h2></div>
                        <div class="col-sm-6">
                            {!! $breadcrumb !!}
                        </div>
                    </div>
                </div>
            </section> -->
            <div class="c-body">
                <main class="c-main">
                    <div class="container-fluid">
                        @yield('content')
                    </div>
                </main>
            </div>
        <!-- </div> -->
        @include('layouts.footer')
    </div>
    <script src="{!! asset(mix('js/manifest.js')) !!}"></script>
    <script src="{!! asset(mix('js/vendor.js')) !!}"></script>
    <script src="{!! asset(mix('js/app.js')) !!}"></script>
    <script src="{!! asset(mix('js/coreui.js')) !!}"></script>
    <script src="{!! asset(mix('js/coreui-utils.js')) !!}"></script>
    <script src="{!! asset(mix('js/svg.js')) !!}"></script>
</body>
</html>
