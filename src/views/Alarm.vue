<script>
import { ref } from 'vue'
import AlarmInput from '../components/AlarmInput.vue'

export default {

    components: {
        AlarmInput
    },

    data() {

        return {

            isOpen: false,
        }
    },

    methods: {

        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        }

    },


}



</script>


<template>
    <div>

        <button @click="Open">
            Alarm
        </button>

    </div>

    <div v-if="isOpen">

        <AlarmInput :isOpen="isOpen" @close="close">
        </AlarmInput>

    </div>
</template>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>



