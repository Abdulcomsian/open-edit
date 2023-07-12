import {Platform, StyleSheet} from 'react-native';
import {
  getFontSize,
  getMScale,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: getMScale(15),
    backgroundColor: colors.white,
  },
  folderDetailsView: {
    paddingVertical: getVerticalScale(15),
    paddingHorizontal: getMScale(22),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    borderRadius: 6,
    marginTop: 5,
    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowColor: colors.black,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  folderName: {fontSize: getFontSize(20)},
  folderItems: {fontSize: getFontSize(12), color: colors.textSecondary},
  viewText: {color: colors.primaryBlue, fontSize: getFontSize(12)},
  jobDetailsView: {marginTop: getVerticalScale(20)},
  descriptionText: {
    fontSize: getFontSize(14),
    color: colors.textSecondary,
    marginTop: getVerticalScale(9),
  },
  budgetInfoView: {marginTop: getVerticalScale(15)},
  budgetText: {color: colors.textSecondary},
  skillsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: getVerticalScale(15),
  },
  bottomButton: {
    position: 'absolute',
    paddingVertical: 40,
    alignItems: 'center',
    width: SCREEN_WIDTH,
    bottom: 0,
  },
});
export default styles;
