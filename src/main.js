import './main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Alarm from './Alarm.vue'
import AlarmInput from './AlarmInput.vue'
import ToDoList from './ToDoList.vue'
import HoursCalc from './HoursCalc.vue'

createApp(App).mount('#app');

createApp(ToDoList).mount('#todo');

createApp(Alarm).mount('#alarm');
createApp(AlarmInput).mount('#alarmInput');

createApp(HoursCalc).mount('#hoursCalc');