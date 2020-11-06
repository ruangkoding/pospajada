@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <pocart-create
                :item='{!! json_encode($item) !!}'
                :route='{!! json_encode($route) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :api='{!! json_encode($api) !!}'>
            </pocart-create>
        @endif
    </div>
@stop
