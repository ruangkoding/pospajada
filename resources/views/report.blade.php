@extends('layouts.app')
@section('content')
    <div id="app">
        <report
            :mobile='{!! json_encode($mobile) !!}'
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'>
        </report>
    </div>
@stop
