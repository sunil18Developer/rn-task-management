import {StyleSheet} from 'react-native';
import {isIOS} from '../../utils/utils';

export const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  inputContainer: {
    borderWidth: isIOS ? 0.2 : 0.1,
    borderRadius: 2,
    marginVertical: isIOS ? 2 : 0,
    padding: isIOS ? 8 : 0,
  },
});
