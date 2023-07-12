import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: getMScale(20),
  },
  createNewAccText: {
    fontSize: getFontSize(20),
    lineHeight: 26,
    marginStart: getMScale(20),
    marginTop: getVerticalScale(20),
  },
  descriptionText: {
    color: colors.textSecondary,
    lineHeight: 25,
    marginStart: getMScale(20),
    marginTop: getVerticalScale(10),
  },
  inputsContainer: {
    marginTop: getVerticalScale(30),
    // width: getMScale(327),
    paddingHorizontal: getMScale(20),
  },
  tabParentStyle: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  buttonStyle: {marginTop: getMScale(40)},
  socialDescriptionText: {
    marginTop: getVerticalScale(10),
    color: colors.textSecondary,
    width: getMScale(327),
    textAlign: 'center',
    fontSize: getFontSize(14),
  },
});
export default styles;
