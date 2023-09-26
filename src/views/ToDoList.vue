<script>
import ToDoListInput from '../components/ToDoListInput.vue'
import { useStoreToDo } from '../stores/storeToDoList';
import { useStore } from '../stores/storeAlarm';
import AlarmInput from '../components/AlarmInput.vue';

export default {

    components: {
        ToDoListInput,
        AlarmInput,
    },
    setup()
    {
        const toDoStore = useStoreToDo();
        const alarmStore = useStore()
        return{toDoStore, alarmStore}
    },
}

</script>


<template>

    <div class="absolute">
        <div class="flex items-center justify-center">
                <ToDoListInput v-if="toDoStore.isOpen" :isOpen="isOpen" @close="toDoStore.close"></ToDoListInput>
        </div>
    </div>
    
<div class="flex">
<div class="flex-row">
    <div class="grow grid grid-rows-2 grid-flow-col gap-1">
        <div class="m-2" v-for="(task, index) in toDoStore.tasks" :key="index">
            <div class="card w-48 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">

                    <h2 class="card-title">Task #{{ index +1}}</h2>

                    <p class="text-sm"> {{ task.taskName }} </p>

                    <div class="card-actions flex items-center justify-center">
                        <button class="btn btn-primary" @click="alarmStore.Open()">Set Alarm</button>
                        <button class="btn btn-ghost" @click="toDoStore.deleteItem()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                        <div v-if="alarmStore.isOpen">
                            <AlarmInput :isOpen="alarmStore.isOpen" @close="alarmStore.close"></AlarmInput>
                        </div>
</div>


</template>
