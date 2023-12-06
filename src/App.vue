<template>
    <navBar></navBar>
    <leftMenu>
        <Home>
            <router-view></router-view>
        </Home>
    </leftMenu>
</template>

<!-- 
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log(`the component is now mounted.`);

    async function fetchToDo() {
            const a = await db.toDo.each(item => (this.toDoStore.tasks.push(item)))
            console.log('hola', a);}
    async function fetchAlarms() {
            const a = await db.alarm.each(item => (this.alarmStore.alarmSchedule.push(item)))
            console.log('hola', a);
        }

        return {fetchAlarms, fetchToDo}
   
});
</script>
-->


<script>
import navBar from './layout/navbar.vue'
import leftMenu from './layout/leftMenu.vue'
import footerr from './layout/footerr.vue'
import Home from './layout/Home.vue'

import { db } from './dexieDataBase/db.js'
import { useStoreToDo } from './stores/storeToDoList.js';
import { useStoreAlarm } from './stores/storeAlarm.js';

export default {
    async mounted() {
        {
            console.log('hola mounted')
            await this.fetchToDo();
            await this.fetchAlarms();

        }
    },

    setup() {
        const alarmStore = useStoreAlarm();
        const toDoStore = useStoreToDo();
        return { alarmStore, toDoStore }
    },


    methods: {
        async fetchAlarms() {
            console.log('hola fetch alarms')
            try {
                const a = await db.alarm.each(item => (this.alarmStore.alarmSchedule.push(item)))

            }
            catch (error) { error }

        },

        async fetchToDo() {
            console.log('hola fetch toDo')
            try {
                const a = await db.toDo.each(item => (this.toDoStore.tasks.push(item)))
            }
            catch (error) { error }


        }
    },



    components: {
        Home,
        navBar,
        leftMenu,
        footerr,

    },
}
</script>

