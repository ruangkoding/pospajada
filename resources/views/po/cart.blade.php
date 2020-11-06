@extends('layouts.app')
@section('content')
    <div id="app">
        <po-cart
            :supplier='{!! json_encode($supplier) !!}'
            :item='{!! json_encode($item) !!}'
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :mobile='{!! json_encode($mobile) !!}'
            :access='{!! json_encode($access) !!}'>
        </po-cart>
    </div>
@stop
