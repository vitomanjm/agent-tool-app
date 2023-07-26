<template>

<div class="
    rounded-xl
    bg-slate-400
    w-auto h-auto 
    text-2xl
    font-bold
    p-5
    place-items-center text-center
    space-x-4
    ">
        AGENT TOOL
    </div>
    
    <router-view></router-view>

    <div class="
rounded-xl 
pt-16 pb-16
flex
flex-col
place-items-center
text-center
space-y-32
text-sm
w-32 h-auto
bg-slate-300">

        <router-link to="/">Home</router-link>
        <router-link to="/Alarm">Alarm</router-link>
        <router-link to="/ToDoList"> To Do List</router-link>
        <router-link to="/HoursCalculator">Hours calculator</router-link>

    </div>
</template>

<script></script>
