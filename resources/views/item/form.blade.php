@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <item-create 
                :category_data='{!! json_encode($category) !!}'
                :unit_data='{!! json_encode($unit) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'>
            </item-create>
        @else 
            <item-update 
                :item='{!! json_encode($item) !!}'
                :category_data='{!! json_encode($category) !!}'
                :unit_data='{!! json_encode($unit) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'>
            </item-update>
        @endif
    </div>
@stop