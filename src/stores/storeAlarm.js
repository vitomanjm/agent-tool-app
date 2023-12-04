import { defineStore } from 'pinia';
import { format } from 'date-fns';
import { db } from '../dexieDataBase/db.js'
import { useStoreToDo } from '../stores/storeToDoList';

export const useStore = defineStore('alarmStore', {
    state: () => ({
        isOpen: false,
        toDoStore: useStoreToDo(),
        alarmSchedule: [],
        alarmSong: new Audio("https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/techno-dog-25297.mp3"),
        alarmName: "",
        dbPush: "",


    }),
    getters: {},
    actions: {
        async addAlarm(selectedAlarm) {

            try{                        
            this.dbPush = await db.alarm.add({
                alarms: this.alarmSchedule.push(selectedAlarm),
            })
            console.log(this.dbPush, this.alarmSchedule);
            }
            catch(error){console.log(error);}
        },
        async deleteAlarm(id) {
            try {
            clearTimeout(id);
            this.alarmPause();
            this.alarmSchedule = this.alarmSchedule.filter((x) => x.id != id)
            this.dbPush = await db.alarm.where('id').equals(alarms).delete();

            console.log(this.dbPush, this.alarmSchedule);
            }
            catch(error)
            {
                console.log(error)
            }
        },

        formatAlarm(date) {
            return format(date, 'HH:mm:ss');
        },
        alarmSound() {

            this.alarmSong.play();
        },
        alarmPause() {
            this.alarmSong.pause()
        },

        snooze()
        {
            this.alarmSchedule.date.setHours()
        },

        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false;
            //this.alarmPause();

        },
    },


})