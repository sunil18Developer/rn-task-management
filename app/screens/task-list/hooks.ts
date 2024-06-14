import {useEffect, useState} from 'react';
import {useStoreConfig} from '../../config/store-config';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../config/route-config/route-name';

export const useTaskList = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const {getAsyncTasks} = useStoreConfig();

  useEffect(() => {
    const handleTasks = async () => {
      setIsLoading(true);
      const storeTasks = await getAsyncTasks();
      if (storeTasks?.tasks != null && storeTasks?.tasks?.length > 0) {
        setTasks(storeTasks.tasks);
      }
      setIsLoading(false);
    };
    handleTasks();
  }, []);

  const handleCreateTask = () => {
    navigation.navigate(ScreenNames.TaskCreate);
  };

  return {isLoading, tasks, handleCreateTask};
};
