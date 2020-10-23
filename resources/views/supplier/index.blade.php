@extends('layouts.app')
@section('content')
    <div id="app">
        <supplier-index
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :mobile='{!! json_encode($mobile) !!}'
            :access='{!! json_encode($access) !!}'>
        </supplier-index>
    </div>
@stop
