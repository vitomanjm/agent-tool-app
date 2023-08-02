<script>
import { ref } from 'vue'
import AlarmInput from '../components/AlarmInput.vue'

export default {

    components: {
        AlarmInput
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

    },

}



</script>


<template>

    <div v-if="isOpen">

        <AlarmInput  :isOpen="isOpen" @close="close">
        </AlarmInput>

    </div>
</template>




