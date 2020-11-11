@extends('layouts.app')
@section('content')
    <div id="app">
        <so-cart
            :customer='{!! json_encode($customer) !!}'
            :item='{!! json_encode($item) !!}'
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :mobile='{!! json_encode($mobile) !!}'
            :access='{!! json_encode($access) !!}'>
        </so-cart>
    </div>
@stop
