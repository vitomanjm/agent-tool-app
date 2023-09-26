<template>
    <Teleport to="#app">

        <div class="absolute mt-8 top-8 bottom-8 left-8 right-8">
        <div class="flex items-center justify-center">
            <div class="p-8 m-8 bg-slate-800 border-2 rounded-box opacity-100  w-96 h-auto">
                <div class="card text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="text-2xl">Set up your Alarm</h2>
                        <h4> CDT Time Now: {{ timeNow }} </h4>
                        <input type="time" v-model="alarmTime" class="select select-primary w-full max-w-xs text-base">
                        <input type="text" v-model="alarmName" class="input input-bordered input-primary w-full max-w-xs" :placeholder="placeHolder">

                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <button class="m-4 p-2 btn btn-primary" @click="setAlarm">
                        Set Alarm
                    </button>
                    <button class="m-4 p-2 btn " @click="alarmStore.close">
                        Close Alarm
                    </button>
                </div>
            </div>
        </div>
    </div>

    </Teleport>

</template>

<script>
import { ref, onMounted } from 'vue';
import { format, addSeconds } from 'date-fns';
import { useStore } from '../stores/storeAlarm';

export default {

    components: {

    },

    data() {

        return {
            alarmTime: '',
            placeHolder: 'Add a label to the alarm',
            alarmName:  '',
        }
    },

    setup() {


        const alarmStore = useStore();
        const timeNow = ref(format(new Date(), 'HH:mm:ss'));

        onMounted(() => {
            setInterval(() => {
                timeNow.value = format(addSeconds(new Date(), 1), 'HH:mm:ss');
            }, 1000);
        })

        return {
            timeNow,
            alarmStore,
        }
    },

    methods: {

        setAlarm() {

            const timeNow = new Date();
            const selectedTime = this.alarmTime;
            const [selectedHour, selectedMinutes] = selectedTime.split(':');
            const alarmDate = new Date();
            alarmDate.setHours(selectedHour);
            alarmDate.setMinutes(selectedMinutes);
            alarmDate.setSeconds(0);
            const timeUntilAlarm = alarmDate - timeNow;

            this.alarmStore.addAlarm({name: this.alarmName, date: alarmDate});
            
            this.alarmStore.close()

            const a = setTimeout(() => {
                this.alarmStore.alarmSound()
            }, timeUntilAlarm);

            console.log(alarmDate);
            console.log(this.selectedAlarm);
            console.log(timeNow);
            console.log(timeUntilAlarm);
        },
    }
}
</script>
<style>
</style>