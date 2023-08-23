import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({ 
        alarmSchedule: [''],
    }),
    getters: {},
    actions: {
        addAlarm(selectedAlarm) {
            this.alarmSchedule.push(selectedAlarm);
        },
        deleteAlarm(selectedAlarm) {
            this.alarmSchedule.pop(selectedAlarm)
        }
    },


})