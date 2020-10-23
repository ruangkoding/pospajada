@extends('layouts.app')
@section('content')
    <div id="app">
        <sellcart-index
            :customer='{!! json_encode($customer) !!}'
            :paymentmethod='{!! json_encode($paymentmethod) !!}'
            :mobile='{!! json_encode($mobile) !!}'
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :access='{!! json_encode($access) !!}'>
        </sellcart-index>
    </div>
@stop
