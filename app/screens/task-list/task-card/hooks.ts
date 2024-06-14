import {useNavigation} from '@react-navigation/native';

export const useTaskCard = ({item}: any) => {
  const navigation = useNavigation();
  const handleTaskDetails = () => {
    navigation.navigate('TaskDetails', {item: item.item});
  };
  return {handleTaskDetails, item};
};
