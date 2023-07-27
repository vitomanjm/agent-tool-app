
<script>
import { format, differenceInMilliseconds } from 'date-fns';
import { ref } from 'vue';

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
    <div class=" m-2 absolute inset-0 flex items-center justify-center">

        <div class="
            font-bold 
            p-20
            bg-stone-300
            border-slate-800 
            flex-col
            space-y-8
            h-auto w-auto
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
                    <button class="p-2 m-6  items-center justify-center bg-slate-100" @click="calculateHours">
                        Calculate Hours
                    </button>
                    <button class="p-2 m-6  items-center justify-center bg-slate-100" @click="close">
                        Close
                    </button>
                </div>
                <div>
                    <p class="p-2 m-2">Calculated: {{ hoursResult }}</p>
                </div>
            </div>
        </div>



    </div>
</template>