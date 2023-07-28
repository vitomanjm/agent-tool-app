<script>
import { ref } from 'vue'
import ToDoListInput from '../components/ToDoListInput.vue'

export default {

    components: {
        ToDoListInput,
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

        <ToDoListInput :isOpen="isOpen" @close="close"></ToDoListInput>

    </div>
</template>
