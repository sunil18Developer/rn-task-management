import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../config/route-config/route-name';
import {useStoreConfig} from '../../config/store-config';
import {useAlert} from '../../common-hooks/useAlert';

export const useTaskDetails = (props: any) => {
  const {item} = props?.route?.params;
  const {deleteAsyncTask} = useStoreConfig();
  const navigation = useNavigation();
  const {showAlert} = useAlert();
  const handleGoback = () => {
    navigation.goBack();
  };
  const handleDeletePress = async () => {
    await deleteAsyncTask(item.id);
    showAlert('Task deleted', 'Task deleted successfully');
    navigation.reset({
      index: 0,
      routes: [{name: ScreenNames.TaskList}],
    });
  };
  return {item, handleDeletePress, handleGoback};
};
