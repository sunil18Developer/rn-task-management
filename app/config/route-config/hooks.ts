import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAppRoutes = () => {
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await AsyncStorage.getItem('tasks');
      if (tasks === null) {
        await AsyncStorage.setItem('tasks', JSON.stringify({tasks: []}));
      }
    };
    getTasks();
  }, []);
};
