@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <po-detail
                :po='{!! json_encode($po) !!}'
                :podetail='{!! json_encode($podetail) !!}'
                :paymentmethod='{!! json_encode($paymentmethod) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :print_api='{!! json_encode($print_api) !!}'>
            </po-detail>
        @endif
    </div>
@stop
