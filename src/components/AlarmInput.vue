<template>
    <Teleport to="#app">

        <div class="absolute mt-8 top-8 bottom-8 left-8 right-8">
        <div class="flex items-center justify-center">
            <div class="p-8 m-8 bg-slate-800 border-2 rounded-box opacity-100  w-96 h-auto">
                <div class="card">
                    <div class="card-body items-center text-center">
                        <h2 class="text-2xl text-white">Set up your Alarm</h2>
                        <h4 class="m-2 p-2 text-white"> CDT Time Now: {{ timeNow }} </h4>
                        <input type="time" v-model="alarmTime" class="select select-primary w-full max-w-xs text-base">
                        <input type="text" v-model="alarmName" class="input input-bordered input-primary w-full max-w-xs" :placeholder="placeHolder">

                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <button class="m-4 p-2 btn btn-primary" @click="setAlarm">
                        Set Alarm
                    </button>
                    <button class="m-4 p-2 btn" @click="alarmStore.close">
                        Close
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
import { useStoreAlarm } from '../stores/storeAlarm';

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


        const alarmStore = useStoreAlarm();
        const timeNow = ref(format(new Date(), 'HH:mm:ss', 'dd-mm-yyyy'));

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
            
            if (alarmDate <= timeNow) {
                alarmDate.setDate(alarmDate.getDate() + 1);
            }
            const timeUntilAlarm = alarmDate - timeNow;
            const a = setTimeout(() => {
                this.alarmStore.alarmSound()
            }, timeUntilAlarm);

            this.alarmStore.addAlarm({name: this.alarmName, date: alarmDate, id: a}); 
            this.$emit("created", a)
            this.alarmStore.close()
        },
    },

    emits: ["created" ]
}
</script>
<style>
</style>