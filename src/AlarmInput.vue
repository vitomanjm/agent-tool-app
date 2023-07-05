<template>
    <section class="fixed inset-0 flex items-center justify-center">

        <div class="
        font-bold 
        p-24
        h-96 w-auto
        bg-stone-300
        border-slate-800 
        flex-col
        space-y-9
        ">
            <h2 class="text-3xl">Set up your Alarm!</h2>

            <h3> CDT Time Now: {{ timeNow }} </h3>

            <input type="time" :tituloBarra="tituloBarra" class="text-3xl mb-4 ">

            <div class="p2 flex-row space-x-6">

                <button class="text-2xl" @click="setAlarm">Set</button>

                <button class="text-2xl" @click="close">Close</button>

            </div>



        </div>

    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { format, addSeconds } from 'date-fns';

export default {

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
        tituloBarra: {
            type: String,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: true
        }

    },

    methods: {
        close() {
            this.$emit('close');
        },
    },


}

</script>

