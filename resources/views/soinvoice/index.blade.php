@extends('layouts.app')
@section('content')
    <div id="app">
        <soinvoice-index
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :mobile='{!! json_encode($mobile) !!}'
            :access='{!! json_encode($access) !!}'>
        </soinvoice-index>
    </div>
@stop
