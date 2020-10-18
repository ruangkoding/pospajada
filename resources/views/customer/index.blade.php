@extends('layouts.app')
@section('content')
    <div id="app">
        <customer-index
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :access='{!! json_encode($access) !!}'>
        </customer-index>
    </div>
@stop