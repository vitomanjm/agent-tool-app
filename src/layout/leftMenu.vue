<template>
    <div class="flex ">
        <div class="h-auto w-32 bg-transparent">
            <ul class="menu w-auto rounded-box flex items-center justify-center">
                <li class="flex flex-column m-6">
                    <router-link to="/Alarm">
                        <button @click="alarmStore.Open">
                            <img class="avatar w-24 rounded" src="../icons/svg2/alarm-clock.svg" alt="alarm-icon">
                            <p class="m-1 p-1">Alarm</p>
                        </button>
                    </router-link>
                </li>
                <li class="m-6">
                    <router-link to="/ToDoList">
                        <button @click="toDoStore.Open">
                            <img class="avatar w-24 rounded" src="../icons/svg2/toDoList.svg" alt="toDoList-icon">
                            <p class="m-1 p-1">To Do List</p>
                        </button>
                    </router-link>
                </li>
                <li class="m-6">
                    <router-link to="/HoursCalculator">
                        <button @click="HoursCalcStore.Open">
                            <img class="avatar w-24 rounded" src="../icons/svg2/calculator.svg"
                                alt="hoursCalculator-icon">
                            <p class="m-1 p-1">Hours calculator</p>
                        </button>
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
import { useStoreAlarm } from '../stores/storeAlarm';
import { useStoreToDo } from '../stores/storeToDoList';
import { useStoreHoursCalc } from "../stores/storeHoursCalc";

export default {

    setup() {
        const alarmStore = useStoreAlarm()
        const toDoStore = useStoreToDo();
        const HoursCalcStore = useStoreHoursCalc();
        return { alarmStore, toDoStore, HoursCalcStore }
    },

}
</script>
