import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {FONTS} from '../../components/TextComponent/TextComponent';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  mainImage: {
    width: getMScale(337),
    height: getVerticalScale(382),
  },
  titleText: {
    fontSize: getFontSize(28),
    lineHeight: 48,
    color: colors.white,
    marginTop: getVerticalScale(20),
  },
  getStartedText: {
    fontSize: getFontSize(16),
    color: colors.white,
    textAlign: 'center',
    lineHeight: 28.8,
  },
  clientButton: {
    marginTop: getVerticalScale(25),
  },
  button: {
    marginVertical: getVerticalScale(20),
  },
  alreadyMemberView: {
    marginTop: getMScale(31),
  },
  alreadyMemberText: {
    color: colors.white,
  },
});
export default styles;
