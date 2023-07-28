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
space-y-24
text-sm
w-32 h-auto
bg-slate-300">



        <router-link to="/">
            <button class="btn btn-outline">Home</button>
        </router-link>

        <router-link to="/Alarm">
            <button class="btn btn-outline"  @click="Open">Alarm</button>
        </router-link>

        <router-link to="/ToDoList"> 
            <button class="btn btn-outline">To Do List</button>
        </router-link>

        <router-link to="/HoursCalculator">
            <button class="btn btn-outline">Hours calculator</button>
        </router-link>

    </div>
</template>

<script>
</script>
