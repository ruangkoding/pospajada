@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <sellcart-create
                :item='{!! json_encode($item) !!}'
                :mobile='{!! json_encode($mobile) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'>
            </sellcart-create>
        @endif
    </div>
@stop
