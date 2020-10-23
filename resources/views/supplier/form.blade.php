@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <supplier-create
                :route='{!! json_encode($route) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :api='{!! json_encode($api) !!}'>
            </supplier-create>
        @else
            <supplier-update
                :supplier='{!! json_encode($supplier) !!}'
                :route='{!! json_encode($route) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :api='{!! json_encode($api) !!}'>
            </supplier-update>
        @endif
    </div>
@stop
