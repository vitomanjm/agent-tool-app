<template>

    <div class="absolute m-16">
        <div class="flex items-center justify-center">
            <AlarmInput v-if="alarmStore.isOpen" :isOpen="isOpen" @close="alarmStore.close"></AlarmInput>
        </div>
    </div>

    <div class="flex">
        <div class="flex-row">
            <div class="grow grid grid-rows-2 grid-flow-col gap-1">
                <div class="m-2" v-for="(alarm, index) in alarmStore.alarmSchedule" :key="index">
                    <div class="card w-48 bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Alarm #{{ index + 1 }}</h2>
                            <h2>  {{ alarm.name}} </h2>
                            <p class="text-xs"> Alarm schedule at: {{ alarmStore.formatAlarm(alarm.date) }}</p>
                            <div class="card-actions justify-center m-2">
                                <button class="btn btn-ghost" @click="alarmStore.deleteAlarm(alarm.id)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import AlarmInput from '../components/AlarmInput.vue';
import { useStoreAlarm } from '../stores/storeAlarm';

export default {

    components: {
        AlarmInput
    },

    setup() {
        const alarmStore = useStoreAlarm()
        return { alarmStore }
    },

}


</script>

<style>
</style>



