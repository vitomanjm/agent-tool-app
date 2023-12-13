import { expect, test } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import  { useStoreToDo } from '../stores/storeToDoList.js';
import indexeddb from 'fake-indexeddb';

globalThis.indexedDB = indexeddb;



test('addItem Test', async () => 
{ 
    setActivePinia(createPinia())
    const toDoStore = useStoreToDo();
    const toDo = {
        id: 1,
        name: 'toDo',
    }
    await toDoStore.addItem(toDo)
    expect(toDoStore.tasks).toContain(toDo) 
})

test('deleteItem Test', async () => 
{ 
    setActivePinia(createPinia())
    const toDoStore = useStoreToDo();
    const toDo = {
        id: 1,
        name: 'toDo',
    }
    await toDoStore.deleteItem(toDo)
    expect(toDoStore.tasks).toContain(!toDo) 
})
