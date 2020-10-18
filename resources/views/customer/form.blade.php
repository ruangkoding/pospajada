@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <customer-create
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'>
            </customer-create>
        @else 
            <customer-update 
                :customer='{!! json_encode($customer) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'>
            </customer-update>
        @endif
    </div>
@stop