import { defineStore } from 'pinia';
import { format } from 'date-fns';
import { differenceInMilliseconds } from 'date-fns';

export const useStoreHoursCalc = defineStore('HoursCalcStore', {
    state: () => ({ 
        isOpen: false,
        hoursResult: '',
        startTime: '',
        endTime: '',

    }),
    getters: {},
    actions: {

        parseTime(timeString) {
            const [hours, minutes] = timeString.split(':');
            return new Date(0, 0, 0, hours, minutes);
        },

        calculateHours() {

            const start = this.parseTime(this.startTime);
            const end = this.parseTime(this.endTime);
            const millisecondsDifference = differenceInMilliseconds(end, start);
            const hours = Math.floor(millisecondsDifference / (1000 * 60 * 60));
            const minutes = Math.floor((millisecondsDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((millisecondsDifference % (1000 * 60)) / 1000);
            this.hoursResult = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },

        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false;
        },
    },


})