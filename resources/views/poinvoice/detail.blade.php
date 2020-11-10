@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <poinvoice-detail
                :invoice='{!! json_encode($invoice) !!}'
                :detail='{!! json_encode($detail) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :print_api='{!! json_encode($print_api) !!}'>
            </poinvoice-detail>
        @endif
    </div>
@stop
