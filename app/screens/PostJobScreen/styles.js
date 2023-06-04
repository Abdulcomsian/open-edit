import {StyleSheet} from 'react-native';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: getMScale(15),
    backgroundColor: colors.white,
  },
  contentContainer: {paddingBottom: getVerticalScale(100)},
  skillsLabel: {
    fontSize: getFontSize(16),
    lineHeight: 21,
    marginVertical: getVerticalScale(10),
  },
  skillsWrapper: {flexWrap: 'wrap', flexDirection: 'row'},
  checkBoxView: {
    marginTop: getVerticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {marginTop: getVerticalScale(20)},
  priceInput: {marginTop: -20},
  quickDeliveryText: {fontSize: getFontSize(14), marginStart: 10}
});
export default styles;
