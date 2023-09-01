<script>
import { ref } from 'vue'
import ToDoListInput from '../components/ToDoListInput.vue'
import { useStore } from '../stores/storeToDoList';

export default {

    components: {
        ToDoListInput,
    },

    data() {
        return {

            isOpen: true,
        }
    },

    setup()
    {
        const toDoStore = useStore();
        return{toDoStore,}
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
<div class="flex flex-row">
    <div class="grow grid grid-rows-2 grid-flow-col gap-1">

        <div class="m-4" v-for="(task, index) in toDoStore.tasks" :key="index">
            <div class="card w-auto bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">

                    <h2 class="card-title">Task #{{ index +1}}</h2>

                    <p class="text-sm"> {{ task.taskName }} </p>

                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Taskea</button>
                        <button class="btn btn-ghost" @click="toDoStore.deleteItem()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="rounded-sm">
        <div class="justify-items-end">
            <div class="m-2">
                <ToDoListInput v-if="isOpen" :isOpen="isOpen" @close="close"></ToDoListInput>
            </div>
        </div> 
    </div>
</div>
</template>
