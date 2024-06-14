import {Alert} from 'react-native';

export const useAlert = () => {
  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message);
  };
  return {showAlert};
};
