@extends('layouts.app')
@section('content')
    <div id="app">
        @if ($act == 'create')
            <user-create
                :mobile='{!! json_encode($mobile) !!}'
                :route='{{ json_encode($route) }}'
                :api='{{ json_encode($api) }}'>
            </user-create>
        @else
            <user-update
                :user='{{ json_encode($user) }}'
                :route='{{ json_encode($route) }}'
                :mobile='{!! json_encode($mobile) !!}'
                :api='{{ json_encode($api) }}'
                :reset_password='{{ json_encode($reset_password) }}'>
            </user-update>
        @endif
    </div>
@stop
