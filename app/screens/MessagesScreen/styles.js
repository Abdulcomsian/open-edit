import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {getMScale, getVerticalScale} from '../../utils/metrics';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: getVerticalScale(10),
    alignItems: 'center',
    paddingHorizontal: getMScale(15),
  },
  list: {marginTop: 10},
});
export default styles;
