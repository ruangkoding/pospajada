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
<body class="hold-transition login-page">
    <div class="login-box" @if ($mobile == true) style="margin-top:40%;" @endif>
        <div class="card">
            <div class="card-body login-card-body">
                <div id="app">
                    <login 
                        :api='{!! json_encode($api) !!}' 
                        :redirect='{!! json_encode($redirect) !!}'>
                    </login>
                </div>
            </div>
        </div>
    </div>
    <script src="{!! asset(mix('js/manifest.js')) !!}"></script>
    <script src="{!! asset(mix('js/vendor.js')) !!}"></script>
    <script src="{!! asset(mix('js/app.js')) !!}"></script>
</body>
</html>
