
<script>
import { differenceInMilliseconds } from 'date-fns';

export default {

    data() {

        return {
            hoursResult: '',
            startTime: '',
            endTime: '',
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
        },

        parseTime(timeString) {
            const [hours, minutes] = timeString.split(':');
            return new Date(0, 0, 0, hours, minutes);
        },

        calculateHours() {

            const start = this.parseTime(this.startTime);
            const end = this.parseTime(this.endTime);
            const millisecondsDifference = differenceInMilliseconds(end, start);
            const hours = Math.floor(millisecondsDifference / (1000 * 60 * 60));
            const minutes = Math.floor((millisecondsDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((millisecondsDifference % (1000 * 60)) / 1000);

            this.hoursResult = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    },
}
</script>

<template>
    <div class="flex items-center justify-center m-auto">
        <div class="
            font-bold 
            flex-col
            space-y-8
            h-auto w-auto
            rounded-xl
            p-14 ml-20 mb-16 mt-4
            ">

            <h1 class="text-3xl m-2 p-2">Calculate your hours</h1>

            <div>
                <div>
                    <label class="p-2 m-2">Start time:</label>
                    <input class="p-2 m-2" type="time" v-model="startTime" />
                </div>
                <div>
                    <label class="p-2 m-2">End time:</label>
                    <input class="p-2 m-2" type="time" v-model="endTime" />
                </div>
                <div>
                    <button class="flex-col m-4 ml-8 p-2 w-auto h-auto rounded-s-3xl space-x-2"
                        @click="calculateHours">
                        Calculate Hours
                    </button>
                    <button class="flex-col m-4 ml-8 p-2 w-auto h-auto rounded-s-3xl space-x-2" @click="close">
                        Close
                    </button>
                </div>
                <div>
                    <p class="p-4 ml-16"> Calculated: {{ hoursResult }} </p>
                </div>
            </div>
        </div>
    </div>
</template>
