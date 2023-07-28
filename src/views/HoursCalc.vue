<script>

import HoursCalcInput from '../components/HoursCalcInput.vue'

export default {

    components: {
        HoursCalcInput,
    },

    data() {
        return {

            isOpen: true,
        }
    },

    methods: {

        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        }

    }

}

</script>

<template>

    <div v-if="isOpen">
        <HoursCalcInput :isOpen="isOpen" @close="close"></HoursCalcInput>

    </div>
</template>
