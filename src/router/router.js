import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/Home.vue";
import Alarm from '../views/Alarm.vue';
import ToDoList from '../views/ToDoList.vue';
import HoursCalculator from '../views/HoursCalc.vue';


const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Alarm',
        name: 'Alarm',
        component: Alarm,
    },
    {
        path: '/ToDoList',
        name: 'ToDoList',
        component: ToDoList,
    },
    {
        path: '/HoursCalculator',
        name: 'HoursCalculator',
        component: HoursCalculator,
    },

];

const router = createRouter({ 
    history: createWebHistory(),
    routes,
});


export default router;