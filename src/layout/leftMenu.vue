<template>
    <div class="flex">
        <div class="h-auto w-auto bg-transparent">
            <ul class="menu w-auto rounded-box">
                <li>
                    <router-link to="/Alarm">
                        <button class="btn btn-outline">Alarm</button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/ToDoList">
                        <button class="btn btn-outline">To Do List</button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/HoursCalculator">
                        <button class="btn btn-outline">Hours calculator</button>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="flex-none">
            <slot></slot>
        </div>
    </div>

</template>