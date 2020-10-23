@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <buycart-create
                :item='{!! json_encode($item) !!}'
                :route='{!! json_encode($route) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :api='{!! json_encode($api) !!}'>
            </buycart-create>
        @endif
    </div>
@stop
