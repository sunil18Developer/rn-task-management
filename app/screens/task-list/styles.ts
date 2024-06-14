import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {isIOS} from '../../utils/utils';

export const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createTaskButton: {
    borderWidth: isIOS ? 0.2 : 0.1,
    borderRadius: 2,
    padding: 8,
    margin: 8,
    borderColor: colors.brown,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
