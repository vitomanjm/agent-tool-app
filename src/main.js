import './main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Alarm from './Alarm.vue'
import AlarmInput from './AlarmInput.vue'
import ToDoList from './ToDoList.vue'
import ToDoListInput from './ToDoListInput.vue'
import HoursCalc from './HoursCalc.vue'
import HoursCalcInput from './HoursCalcInput.vue'

createApp(App).mount('#app');

createApp(ToDoList).mount('#todo');
createApp(ToDoListInput).mount('#todoinput');

createApp(Alarm).mount('#alarm');
createApp(AlarmInput).mount('#alarmInput');

createApp(HoursCalc).mount('#hoursCalc');
createApp(HoursCalcInput).mount('#hoursCalcInput');