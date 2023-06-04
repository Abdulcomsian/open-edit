import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {getMScale} from '../../utils/metrics';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: getMScale(15),
  },
});
export default styles;
