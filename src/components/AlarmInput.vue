<template>
    <section class="flex items-center justify-center bg-slate-800 border-2 rounded-box opacity-90">

        <div class="
        m-4
        p-auto
        flex-col
        space-y-8
        h-auto w-auto
        rounded-xl 
        ">
            <h2 class="ml-24 text-2xl">Set up your Alarm</h2>

            <h4 class="ml-8"> CDT Time Now: {{ timeNow }} </h4>

            <input type="time" v-model="alarmTime" class="text-base ml-20 pl-24">

            <h4 class="m-8  text-2xl" v-bind="selectedAlarm" v-if="selectedAlarm">You alarm is been set at: {{ alarmStore.formatAlarm(selectedAlarm) }}</h4>

            <div class="flex-row ml-20">

                <button class="m-2 p-1 btn btn-primary" @click="setAlarm">
                    Set Alarm
                </button>

                <button class="m-2 p-1 btn btn-ghost" @click="close">
                    Close Alarm
                </button>

            </div>

        </div>


    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { format, addSeconds } from 'date-fns';
import { useStore } from '../stores/storeAlarm';

export default {

    data() {

        return {
            alarmTime: '',
            selectedAlarm: '',
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

    props: {

        isOpen: {
            type: Boolean,
            required: true
        }

    },

    methods: {
        close() {
            this.$emit('close');
            this.alarmStore.alarmPause();
        },

        setAlarm() {

            const timeNow = new Date();
            const selectedTime = this.alarmTime;
            const [selectedHour, selectedMinutes] = selectedTime.split(':');
            const alarmDate = new Date();

            alarmDate.setHours(selectedHour);
            alarmDate.setMinutes(selectedMinutes);
            alarmDate.setSeconds(0);

            this.selectedAlarm = alarmDate;
            const timeUntilAlarm = alarmDate - timeNow;
            this.alarmStore.addAlarm(this.selectedAlarm)

            setTimeout(() => {
                this.alarmStore.alarmSound()
            },
                timeUntilAlarm);

            console.log(alarmDate);
            console.log(this.selectedAlarm);
            console.log(timeNow);
            console.log(timeUntilAlarm);
        },
    }
}
</script>