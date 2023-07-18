
<script>
import { formatDistance, format } from 'date-fns';

export default {

    data() {

        hoursResult: new Date();
        startDate: new Date();
        endDate: new Date();

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

                const hours = formatDistance(this.startDate, this.endDate);
                this.hoursResult = format(hours);
                console.log(hoursResult);
            
            
        }

    },

}

</script>

<template>
    <div class=" m-8 absolute inset-0 flex items-center justify-center">

        <div class="
            font-bold 
            p-28
            bg-stone-300
            border-slate-800 
            flex-col
            space-y-8
            h-auto w-auto
            ">

            <h1 class="text-3xl m-2 p-2">Calculate your hours</h1>

            <div>
                <div>
                    <label class="p-2 m-2">Start Date:</label>
                    <input class="p-2 m-2" type="time" v-model="startDate" />
                </div>
                <div>
                    <label class="p-2 m-2">End Date:</label>
                    <input class="p-2 m-2" type="time" v-model="endDate" />
                </div>
                <div>
                    <button class="p-2 m-6  items-center justify-center bg-slate-100" @click="calculateHours">Calculate
                        Hours</button>
                </div>
                <div v-if="hoursResult">
                    <p class="p-2 m-2">{{ hoursResult }}</p>
                </div>
            </div>
        </div>



    </div>
</template>