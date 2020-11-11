@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <so-detail
                :so='{!! json_encode($so) !!}'
                :sodetail='{!! json_encode($sodetail) !!}'
                :paymentmethod='{!! json_encode($paymentmethod) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :print_api='{!! json_encode($print_api) !!}'>
            </so-detail>
        @endif
    </div>
@stop
