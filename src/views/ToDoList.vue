<script>
import { ref } from 'vue'
import ToDoListInput from '../components/ToDoListInput.vue'

export default {

    components: {
        ToDoListInput,
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
        <button @click="Open">To-Do List</button>
    </div>

    <div v-if="isOpen"> 
    
        <ToDoListInput :isOpen="isOpen" @close="close"></ToDoListInput> 
    
    </div>

</template>
