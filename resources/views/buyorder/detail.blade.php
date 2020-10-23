@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <buyorder-detail
                :invoice='{!! json_encode($invoice) !!}'
                :invoicedetail='{!! json_encode($invoicedetail) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :print_api='{!! json_encode($print_api) !!}'>
            </buyorder-detail>
        @endif
    </div>
@stop
