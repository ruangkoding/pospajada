@extends('layouts.app')
@section('content')
    <div id="app">
        <item-index
            :category_data='{!! json_encode($category) !!}'
            :route='{!! json_encode($route) !!}'
            :api='{!! json_encode($api) !!}'
            :mobile='{!! json_encode($mobile) !!}'
            :access='{!! json_encode($access) !!}'>
        </item-index>
    </div>
@stop
