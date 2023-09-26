<template>

    <div class="absolute m-8 top-8 bottom-8 left-48 right-48">
    <div class="absolute w-96 h-72 bg-slate-800 border-2 rounded-box opacity-100" @submit.prevent="tasksItem">

        <h1 class="flex justify-center items-center text-3xl mt-8">Add your tasks:</h1>
        <div class="font-bold p-12 flex-col space-y-auto">
            <div class="flex flex-row items-center justify-center">
                <input class="input input-bordered input-primary w-auto max-w-xs" v-model="toDoStore.tasksItem" type="text" :placeholder="placeHolder">
                <button class="m-4 p-2 btn btn-primary" @click="toDoStore.addItem(tasksItem)">Add Item</button>
            </div>
            <div class="flex flex-row items-center justify-center">
                <button class="m-4 p-2 btn btn-ghost" @click="toDoStore.close"> Close </button>
            </div>

        </div>
    </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStoreToDo } from '../stores/storeToDoList';


export default {

    data() {
        return {
            alarmOpen: false,
            placeHolder: "To Do",
        }
    },


    setup() {
        const toDoStore = useStoreToDo();

        return {
            toDoStore
        }
    },
}
</script>