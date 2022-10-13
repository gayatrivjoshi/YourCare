import { createContext } from 'react';

export const UserContext = createContext({
  name: 'Harsh',
  email: '',
  password: '',
  age: '',
  meals: '',
  waterIntake: '',
  mealsOnTime: '',
  sleepScheduleScore: 0,
  journalEntries: 0,
});
