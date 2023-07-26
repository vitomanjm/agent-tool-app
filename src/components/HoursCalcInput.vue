
<script>
import { addSeconds, format, differenceInMilliseconds } from 'date-fns';
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

        calculateHours() {
            if (this.startTime && this.endTime) {

                
                

                this.hoursResult =  differenceInMilliseconds(
                    new Date(this.endTime), 
                    new Date(this.startTime)
                    );

                

            } else {
                this.hoursResult = null;
            }
        },

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
                <div v-if="hoursResult">
                    <p class="p-2 m-2">Calculated: {{ hoursResult }}</p>
                </div>
            </div>
        </div>



    </div>
</template>