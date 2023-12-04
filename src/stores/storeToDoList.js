import { useStore } from '../stores/storeAlarm';
import { defineStore } from 'pinia';
import { db } from '../dexieDataBase/db.js'


export const useStoreToDo = defineStore('toDoStore', {
    state: () => ({ 
        isOpen: false,
        tasks: [],
        tasksItem: "",
        taskName: "",
        alarmstore: useStore(),
        dbPush: "",
    }),
    getters: {},
    actions: {
        
        Open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false;
        },

        async addItem() {  

            try{
            if (this.tasksItem.trim() !== '') {
                this.tasks.push({
                    id: this.tasks.length + 1,
                    taskName: this.tasksItem.trim(),
                });
                this.dbPush = await db.toDo.add({
                    taskName: this.tasksItem.trim(),
                })
                this.tasksItem = '';
                this.placeHolder = 'To Do';
                console.log(this.dbPush, this.tasks);
                this.close()
                
            }
        }
            catch(error)
            {
                console.log(error)
            }
        },

        deleteItem(itemId) {
            this.tasks = this.tasks.filter((x) => x.id != itemId.id)
            this.alarmstore.deleteAlarm(itemId.alarmId);
            console.log(this.tasks);
            
        },

        updateItem(itemId, alarmId)
        {
            const a = this.tasks.find((x) => x.id == itemId)
            if(!a)
            {
                return 
            };
            a.alarmId = alarmId


        },

 
    },

})
