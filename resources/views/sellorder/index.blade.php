@extends('layouts.app')
@section('content')
    <div id="app">
        <sellorder-index
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :mobile='{!! json_encode($mobile) !!}'
            :access='{!! json_encode($access) !!}'>
        </sellorder-index>
    </div>
@stop
