import { defineStore } from 'pinia';
import { format } from 'date-fns';

export const useStore = defineStore('alarmStore', {
    state: () => ({ 
        isOpen: false,
        alarmSchedule: [],
        alarmSong: new Audio("https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/techno-dog-25297.mp3"),
        alarmName: '',
        
    }),
    getters: {},
    actions: {
        addAlarm(selectedAlarm) {
            this.alarmSchedule.push(selectedAlarm);

        },
        deleteAlarm(selectedAlarm) {
            this.alarmSchedule.pop(selectedAlarm);
            this.alarmPause();
        },
        formatAlarm(date) {
            return format(date, 'HH:mm:ss');
        },
        alarmSound() {

            this.alarmSong.play();
        },
        alarmPause(){
            this.alarmSong.pause()
        },
        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false;
            this.alarmPause();

        },
    },


})