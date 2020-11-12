<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Point Of Sale</title>
    <link href="{!! asset('css/app.css') !!}" rel="stylesheet">
    <link rel="manifest" href="{!! asset('manifest.json') !!}" />
</head>
<body class="c-app flex-row align-items-center" style="background: #15202B;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card-group">
                    <div class="card">
                        <div class="card-body">
                            <div id="app">
                                <login :api='{!! json_encode($api) !!}' :redirect='{!! json_encode($redirect) !!}'></login>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{!! asset(mix('js/manifest.js')) !!}"></script>
    <script src="{!! asset(mix('js/vendor.js')) !!}"></script>
    <script src="{!! asset(mix('js/app.js')) !!}"></script>
</body>
</html>