<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Point Of Sale</title>
    <link href="{!! asset(mix('css/app.css')) !!}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <app :mobile='{!! json_encode($mobile) !!}'></app>
    </div>
    <script src="{!! asset(mix('js/manifest.js')) !!}"></script>
    <script src="{!! asset(mix('js/vendor.js')) !!}"></script>
    <script src="{!! asset(mix('js/app.js')) !!}"></script>
    <script src="{!! asset(mix('js/coreui.js')) !!}"></script>
</body>
</html>
