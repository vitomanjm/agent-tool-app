<template>
    <form class=" m-8 absolute inset-0 flex items-center justify-center" @submit.prevent="tasksItem"> 

        <div class="
            font-bold 
            p-28
            bg-stone-300
            border-slate-800 
            flex-col
            space-y-8
            h-auto w-auto
            ">

            <h1 class="text-3xl">Add your tasks:</h1>

            <input v-model="tasksItem" type="text" :placeholder="placeHolder">

            <button class="ml-2 p-2 w-auto h-auto bg-slate-400 rounded-s-3xl" @click="addItem(tasksItem)">Add Item</button>

            <label class="ml-2 p-2 w-auto h-auto">
                Create alarm
                <input type="checkbox">

            </label>

            <p v-for="task in tasks" :key="task"> {{ tasks.join('') }}</p>

        <div class="flex flex-row items-center justify-center">
            <button class="m-4 p-2 w-auto h-auto bg-slate-400 rounded-s-3xl" @click="deleteItem()"
                v-if="tasks">
                Delete Item
            </button>

            <button class="m-4 p-2 w-auto h-auto bg-slate-400 rounded-s-3xl " @click="close">
                Close
            </button>

        </div>

        </div>



    </form>
</template>

<script>

export default {

    data() {
        return {

            tasksItem: '',
            tasks: [],
            placeHolder: "To Do",
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

        addItem(item) {

            this.tasks.push(item)
            this.placeHolder = 'To Do';

            console.log(this.tasks);

        },

        deleteItem() {

            this.tasks.pop()

            console.log(this.tasks);
        }
    }

}


</script>