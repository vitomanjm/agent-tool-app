import { createRouter, createWebHistory } from 'vue-router';

import Home from "../layout/Home.vue";
import Alarm from '../views/Alarm.vue';
import ToDoList from '../views/ToDoList.vue';
import HoursCalculator from '../views/HoursCalc.vue';


const routes = [

    { path: '/', component: Home, name: 'Home' },
    { path: '/alarm', component: Alarm, name: 'Alarm' },
    { path: '/todolist', component: ToDoList, name: 'ToDoList' },
    { path: '/hourscalculator', component: HoursCalculator, name: 'HoursCalculator' },
        
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});


export default router;