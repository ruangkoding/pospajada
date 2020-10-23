@extends('layouts.app')
@section('content')
    <div id="app">
        <buycart-index
            :supplier='{!! json_encode($supplier) !!}'
            :paymentmethod='{!! json_encode($paymentmethod) !!}'
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :mobile='{!! json_encode($mobile) !!}'
            :access='{!! json_encode($access) !!}'>
        </buycart-index>
    </div>
@stop
