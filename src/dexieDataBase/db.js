import Dexie from 'dexie';

export const db = new Dexie('myDatabase');

db.version(1).stores({
    alarm: '++id', 
    toDo: '++id',
  });