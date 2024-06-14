import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  leftSideContainer: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  item: {marginHorizontal: 8},
});
