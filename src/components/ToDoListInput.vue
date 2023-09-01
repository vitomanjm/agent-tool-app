<template>
    <form class="flex items-center justify-center m-2" @submit.prevent="tasksItem">

        <div class="
            font-bold 
            p-12
            flex-col
            space-y-auto
            rounded-xl 
            border-2	
            ">

            <h1 class="text-3xl">Add your tasks:</h1>

            

            <div class="flex flex-row items-center justify-center">
            <input v-model="toDoStore.tasksItem" type="text" :placeholder="placeHolder">
            <button class="m-4 p-2 btn btn-primary" @click="toDoStore.addItem(tasksItem)">Add
                Item</button>
            </div>
            <div class="flex flex-row items-center justify-center">
                <button class="m-4 p-2 btn btn-ghost" @click="close">
                    Close
                </button>

            </div>

        </div>

    </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from '../stores/storeToDoList';


export default {

    data() {
        return {
            alarmOpen: false,
            placeHolder: "To Do",
        }
    },


    setup() {
        const toDoStore = useStore();

        return {
            toDoStore,
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
    }
}
</script>