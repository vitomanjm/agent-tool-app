<script>
import { format } from 'date-fns';
import { ref } from 'vue'
import AlarmInput from '../components/AlarmInput.vue'

export default {

    components: {
        AlarmInput
    },

    data() {

        return {

            isOpen: false,
            alarmSchedule: [],
            selectedAlarm: null,
        }
    },

    methods: {

        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        },

        formatAlarm(date) {
            return format(date, 'HH:mm:ss');
        },

        handleAlarmSet(selectedAlarm) {
            this.selectedAlarm = selectedAlarm;
            this.alarmSchedule.push(selectedAlarm);
            console.log(this.alarmSchedule)
        },
        deleteAlarm(selectedAlarm) {
            this.alarmSchedule.pop(selectedAlarm)
        }

    }
}


</script>


<template>
    <button class="flex btn btn-primary m-8 mt-6 ml-20 end-2" @click="Open"> Open Alarm</button>

    <div class="flex rounded-sm">
        <div class="m-4" v-for="(alarm, index) in alarmSchedule" :key="index">

            <div class="card w-44 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">

                    <h2 class="card-title">Alarma #{{ index }}</h2>

                    <p class="text-xs"> Alarm schedule at: {{ formatAlarm(alarm) }}</p>

                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Snooze</button>
                        <button class="btn btn-ghost" @click="deleteAlarm(selectedAlarm)">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-auto">
        </div>

        <AlarmInput v-if="isOpen" :isOpen="isOpen" @close="close" @alarmSet="handleAlarmSet"></AlarmInput>
    </div>
</template>




