@extends('layouts.app')
@section('content')
    <div id="app">
        <dashboard :api='{!! json_encode($api) !!}' :mobile='{!! json_encode($mobile) !!}'></dashboard>
    </div>
@stop