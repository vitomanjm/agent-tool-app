<template>
    <section class="fixed inset-0 flex items-center justify-center ">

        <div class="
        font-bold 
        p-28
        bg-stone-300
        border-slate-800 
        flex-col
        space-y-8
        h-auto w-auto
        ">
            <h2 class="text-3xl">Set up your Alarm!</h2>

            <h3> CDT Time Now: {{ timeNow }} </h3>

            <input type="time" v-model="alarmTime" class="text-3xl mb-4 ">

            <h4 v-bind="selectedAlarm" v-if="selectedAlarm">You alarm is been set at: {{ formatAlarm(selectedAlarm) }}</h4>

            <div class=" flex-row space-x-6">

                <button class="p-2 w-auto h-auto bg-slate-500 text-2xl rounded-2xl" @click="setAlarm">
                    Set Alarm
                </button>

                <button class="p-2 w-auto h-auto bg-slate-500 text-2xl rounded-2x1" @click="close">
                    Close Alarm
                </button>

            </div>

        </div>


    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { format, addSeconds } from 'date-fns';

export default {

    data() {

        return {
            alarmTime: '',
            selectedAlarm: '',
            alarmSong: new Audio("https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/techno-dog-25297.mp3"),

        }
    },

    setup() {



        const timeNow = ref(format(new Date(), 'HH:mm:ss'));

        onMounted(() => {
            setInterval(() => {
                timeNow.value = format(addSeconds(new Date(), 1), 'HH:mm:ss');
            }, 1000);
        })

        return { timeNow }
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
            this.alarmSong.pause();
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



            setTimeout(() => {
                this.alarmSound()
            },
                timeUntilAlarm);



            console.log(alarmDate);

            console.log(this.selectedAlarm);

            console.log(timeNow);

            console.log(timeUntilAlarm);




        },

        formatAlarm(date) {
            return format(date, 'HH:mm:ss');

        },


        alarmSound() {
            this.alarmSong.play();
            this.alarmSong.loop = true;
        },
    }
}
</script>

