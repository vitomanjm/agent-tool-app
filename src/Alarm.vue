<script>
import { ref } from 'vue'
import AlarmInput from './AlarmInput.vue'

export default {

    components: {
        AlarmInput
    },

    data() {



        return {

            tituloBarra: 'ALARMA!',
            isOpen: false,
        }
    },

    methods: {

        alerta() {

            alert(this.tituloBarra),
                console.log(this.tituloBarra)

        },

        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        }

    },

    watch: {

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

        <AlarmInput :tituloBarra="tituloBarra" :isOpen="isOpen" @close="close">
        </AlarmInput>

    </div>
</template>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>



