<script>
import { ref } from 'vue'
import HoursCalcInput from './HoursCalcInput.vue'

export default {

    components: {
        HoursCalcInput,
    },

    data() {
        return {

            isOpen: false
        }
    },

    methods: {

        Open() {
            this.isOpen = !this.isOpen;
        },

        close() {
            this.isOpen = false
        }

    }


}

</script>

<template>
    <div>
        <button @click="Open">Hours Calculator</button>
    </div>

    <div v-if="isOpen">
        <HoursCalcInput :isOpen="isOpen" @close="close"></HoursCalcInput>

    </div>

</template>
