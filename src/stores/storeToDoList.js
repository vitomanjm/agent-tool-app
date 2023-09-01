import { defineStore } from 'pinia';


export const useStore = defineStore('store', {
    state: () => ({ 
        tasks: [],
        tasksItem: '',
    }),
    getters: {},
    actions: {
        
        addItem() {

            if (this.tasksItem.trim() !== '') {
                this.tasks.push({
                    id: this.tasks.length + 1,
                    taskName: this.tasksItem.trim()
                });
                this.tasksItem = '';
                this.placeHolder = 'To Do';
                console.log(this.tasks);
                
            }
        },

        deleteItem() {
            this.tasks.pop()
            console.log(this.tasks);
        }
    },

})