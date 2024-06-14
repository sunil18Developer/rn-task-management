import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStoreConfig = () => {
  const setAsyncTask = async (tasks: any) => {
    await AsyncStorage.setItem('tasks', JSON.stringify({tasks: [...tasks]}));
  };
  const getAsyncTasks = async () => {
    const tasks: any = await AsyncStorage.getItem('tasks');
    return JSON.parse(tasks);
  };
  const deleteAsyncTask = async (id: any) => {
    const tasks: any = await AsyncStorage.getItem('tasks');
    const newTasks = JSON.parse(tasks).tasks.filter(
      (task: any) => task.id !== id,
    );
    await AsyncStorage.setItem('tasks', JSON.stringify({tasks: [...newTasks]}));
  };

  return {setAsyncTask, getAsyncTasks, deleteAsyncTask};
};
