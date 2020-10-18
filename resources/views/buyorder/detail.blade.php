@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <buyorder-detail
                :invoice='{!! json_encode($invoice) !!}'
                :invoicedetail='{!! json_encode($invoicedetail) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'
                :print_api='{!! json_encode($print_api) !!}'>
            </buyorder-detail>
        @endif
    </div>
@stop
