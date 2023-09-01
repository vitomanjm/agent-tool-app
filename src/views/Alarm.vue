<script>
import { format } from 'date-fns';
import { ref } from 'vue';
import AlarmInput from '../components/AlarmInput.vue';
import { useStore } from '../stores/storeAlarm';

export default {

    components: {
        AlarmInput
    },

    data() {

        return {

            isOpen: false,
            selectedAlarm: null,
            
        }
    },

    setup() {
        const alarmStore = useStore()
        return {alarmStore}
    },

    methods: {

        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        },
    }
}


</script>


<template>

    <div class="ml-0">
    <button class="flex btn btn-primary m-2 ml-96 end-2" @click="Open"> Open Alarm</button>

    <div class="flex flex-row">
    <div class="grow grid grid-rows-2 grid-flow-col gap-1">

        <div class="m-2" v-for="(alarm, index) in alarmStore.alarmSchedule" :key="index">
            <div class="card w-auto bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">

                    <h2 class="card-title">Alarma #{{ index + 1 }}</h2>
                    <p class="text-xs"> Alarm schedule at: {{ alarmStore.formatAlarm(alarm) }}</p>
                    <div class="card-actions justify-end m-2">
                        <button class="btn btn-primary">Snooze</button>
                        <button class="btn btn-ghost" @click="alarmStore.deleteAlarm(selectedAlarm)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="flex flex-none absolute m-4">
        <div class="justify-items-center ml-52">
            <div class="items-center"><AlarmInput v-if="isOpen" :isOpen="isOpen" @close="close"></AlarmInput></div> 
        </div>
        </div>   
    </div>
</div>
</template>




