@extends('layouts.app')
@section('content')
    <div id="app">
        <buyorder-index
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :access='{!! json_encode($access) !!}'>
        </buyorder-index>
    </div>
@stop