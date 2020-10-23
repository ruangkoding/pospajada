@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <sellorder-detail
                :invoice='{!! json_encode($invoice) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :invoicedetail='{!! json_encode($invoicedetail) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'
                :print_api='{!! json_encode($print_api) !!}'>
            </sellorder-detail>
        @endif
    </div>
@stop
