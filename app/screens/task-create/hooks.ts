import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useStoreConfig} from '../../config/store-config';
import {ScreenNames} from '../../config/route-config/route-name';
import {useAlert} from '../../common-hooks/useAlert';

export const useTaskCreate = () => {
  const navigation = useNavigation();
  const {setAsyncTask, getAsyncTasks} = useStoreConfig();
  const {showAlert} = useAlert();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    titleError: '',
  });
  const handleCreate = async () => {
    if (!task?.title) {
      task.titleError = 'Task title should be empty';
      setTask({...task});
    } else {
      task.titleError = '';
      const tasks = await getAsyncTasks();
      await setAsyncTask([
        {
          title: task.title,
          description: task.description,
          dueDate: task.dueDate,
          id: tasks.tasks.length + 1,
        },
        ...tasks.tasks,
      ]);
      showAlert('Task created', 'Task created successfully');
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.TaskList}],
      });
    }
  };
  const handleTitle = (event: any) => {
    task.titleError = '';
    setTask({...task, title: event});
  };
  const handleDescription = (event: any) => {
    setTask({...task, description: event});
  };
  const handleDueDate = (event: any) => {
    setTask({...task, dueDate: event});
  };
  const handleGoback = () => {
    navigation.goBack();
  };
  return {
    task,
    handleCreate,
    handleTitle,
    handleDescription,
    handleDueDate,
    handleGoback,
  };
};
