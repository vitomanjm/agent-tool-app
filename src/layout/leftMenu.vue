<template>
    <div class="flex ">
        <div class="h-auto w-32 bg-transparent">
            <ul class="menu w-auto rounded-box flex items-center justify-center">
                <li class="m-8">
                    <router-link to="/Alarm">
                        <button class="btn btn-outline p-4" @click="alarmStore.Open">Alarm</button>
                    </router-link>
                </li>
                <li class="m-8">
                    <router-link to="/ToDoList">
                        <button class="btn btn-outline p-4" @click="toDoStore.Open">To Do List</button>
                    </router-link>
                </li>
                <li class="m-8">
                    <router-link to="/HoursCalculator">
                        <button class="btn btn-outline"  @click="HoursCalcStore.Open">Hours calculator</button>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="flex-none">
            <slot></slot>
        </div>
    </div>

</template>

<script>
import { useStore } from '../stores/storeAlarm';
import { useStoreToDo } from '../stores/storeToDoList';
import {useStoreHoursCalc} from "../stores/storeHoursCalc";

export default {

    setup() {
        const alarmStore = useStore()
        const toDoStore = useStoreToDo();
        const HoursCalcStore = useStoreHoursCalc();
        return { alarmStore, toDoStore, HoursCalcStore }
    },

}</script>