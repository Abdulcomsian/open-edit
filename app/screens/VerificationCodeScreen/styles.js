import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: getMScale(20),
  },
  titleText: {
    marginTop: getVerticalScale(20),
    fontSize: getFontSize(20),
    lineHeight: 26,
  },
  description: {
    color: colors.textSecondary,
    marginTop: getVerticalScale(10),
  },
  codeFieldContainer: {
    width: '100%',
    marginTop: getVerticalScale(20),
  },
  countDownContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginTop: 30,
  },
  resendText: {
    color: colors.textSecondary,
    marginTop: getVerticalScale(10),
    textAlign: 'center',
    fontSize: getFontSize(14),
  },
});
export default styles;
