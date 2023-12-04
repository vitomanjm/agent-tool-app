<template>
    <div class="flex items-center justify-center">
    <div class="m-8 top-8 bottom-8 z-50 card border-current left-56 right-24">
        <div class="w-auto h-auto bg-slate-800 border-2 rounded-box" @submit.prevent="tasksItem">

            <h1 class="flex justify-center items-center text-3xl mt-8 text-white">Add your tasks:</h1>
            <div class="font-bold p-12 flex-col space-y-auto">
                <div class="flex flex-row items-center justify-center">
                    <input class="input input-bordered input-primary w-auto max-w-xs text-gray-500" v-model="toDoStore.tasksItem"
                        type="text" :placeholder="placeHolder">
                    <button class="m-4 p-2 btn btn-primary" @click="toDoStore.addItem(tasksItem)">Add Item</button>
                    <div class="flex flex-row items-center justify-center">
                    <button class="m-4 p-2 btn" @click="toDoStore.close"> Close </button>
                </div>
                </div>
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