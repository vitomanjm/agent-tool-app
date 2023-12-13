import { expect, test } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import  { useStoreAlarm } from '../stores/storeAlarm.js';
import indexeddb from 'fake-indexeddb';

globalThis.indexedDB = indexeddb;



test('addAlarm Test', async () => 
{ 
    setActivePinia(createPinia())
    const alarmStore = useStoreAlarm();
    const alarma = {
        date: new Date(),
        id: 1,
        name: 'alarm',
    }
    await alarmStore.addAlarm(alarma)
    expect(alarmStore.alarmSchedule).toContain(alarma) 
})

test('deleteAlarm Test', async () => 
{ 
    setActivePinia(createPinia())
    const alarmStore = useStoreAlarm();
    const alarma = {
        date: new Date(),
        id: 1,
        name: 'alarm',
    }
    await alarmStore.deleteAlarm(alarma)
    alarmStore.alarmPause()
    expect(alarmStore.alarmSchedule).toBe(!alarma)
})
