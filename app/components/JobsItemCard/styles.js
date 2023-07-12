import {Platform, StyleSheet} from 'react-native';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  //Jobs Item Card
  jobItemParent: {
    paddingVertical: getVerticalScale(25),
    marginVertical: 10,
    paddingHorizontal: getMScale(15),
    marginEnd: getMScale(10),
    width: 310,
    marginStart: 2,
    backgroundColor: colors.white,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  profileAndPriceView: {flexDirection: 'row', alignItems: 'center'},
  profileIcon: {width: 37, height: 37},
  priceText: {marginStart: getMScale(18), fontSize: getFontSize(14)},
  jobDescriptionText: {
    fontSize: getFontSize(14),
    marginTop: getVerticalScale(16),
  },
  jobDurationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getVerticalScale(10),
  },
  jobDurationPortion: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobStartText: {
    marginStart: 5,
    color: '#6A6A6A',
    fontSize: getFontSize(12),
  },
  jobStartTime: {fontSize: getFontSize(12)},
  progressBar: {
    width: '100%',
    marginTop: 15,
    height: 4,
    borderRadius: 15,
    backgroundColor: '#d9d9d9',
  },
  activeProgress: {
    position: 'absolute',
    backgroundColor: 'green',
    width: '40%',
    borderRadius: 15,
    height: '100%',
  },
});
export default styles;
