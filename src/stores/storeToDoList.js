import { useStoreAlarm } from '../stores/storeAlarm';
import { defineStore } from 'pinia';
import { db } from '../dexieDataBase/db.js'


export const useStoreToDo = defineStore('toDoStore', {
    state: () => ({
        isOpen: false,
        isOpen: false,
        tasks: [],
        tasksItem: "",
        alarmstore: useStoreAlarm(),
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

            try {
                if (this.tasksItem.trim() == '') return

                const toDoId = await db.toDo.add({
                    taskName: this.tasksItem.trim(),
                })

                console.log('id dexie', toDoId);
                this.tasks.push({
                    id: toDoId,
                    taskName: this.tasksItem.trim(),
                });

                this.tasksItem = '';
                this.placeHolder = 'To Do';

                this.close()
            }
            catch (error) {
                console.log(error)
            }
        },

        async deleteItem(item) {

            try {
                if(item.alarmId)
                {
                    this.alarmstore.deleteAlarm(item.alarmId);
                }
                const a = await db.toDo.where('id').equals(item.id).delete();
                this.tasks = this.tasks.filter((x) => x.id != item.id)
                console.log(a);
            }
            catch { }


        },

        async updateItem(itemId, alarmId) {
            const a = this.tasks.find((x) => x.id == itemId)
            if (!a) {
                return
            };
            a.alarmId = alarmId
            await db.toDo.update(itemId, {alarmId: alarmId})
        },


    },

})
