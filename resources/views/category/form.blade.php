@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <category-create
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'>
            </category-create>
        @else 
            <category-update 
                :category='{!! json_encode($category) !!}'
                :route='{!! json_encode($route) !!}'
                :api='{!! json_encode($api) !!}'>
            </category-update>
        @endif
    </div>
@stop