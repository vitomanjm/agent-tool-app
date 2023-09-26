import { defineStore } from 'pinia';


export const useStoreToDo = defineStore('toDoStore', {
    state: () => ({ 
        isOpen: false,
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
                this.close()
                
            }
        },
        deleteItem() {
            this.tasks.pop()
            console.log(this.tasks);
        },
        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false;
        },
    },

})