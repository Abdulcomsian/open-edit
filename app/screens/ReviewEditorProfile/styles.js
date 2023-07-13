import {Platform, StyleSheet} from 'react-native';
import {
  getFontSize,
  getMScale, getScale,
  getVerticalScale,
  SCREEN_WIDTH,
} from "../../utils/metrics";
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  reviewProfileContainer: {flex: 1},
  reviewProfileScrollContentContainer: {
    flexGrow: 1,
    paddingBottom: getMScale(50),
    alignItems: 'center',
  },
  thumbsUpContainer: {marginTop: getVerticalScale(20)},
  thumbsUpIcon: {alignSelf: 'center'},
  descriptionView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: getVerticalScale(35),
  },
  nameText: {
    fontSize: getFontSize(16),
  },
  descriptionText: {lineHeight: 25},
  dividerView: {
    marginVertical: getVerticalScale(25),
    height: 10,
    backgroundColor: '#f1f1f1',
    width: SCREEN_WIDTH,
  },
  infoSection: {width: SCREEN_WIDTH, paddingHorizontal: getMScale(15)},
  infoSectionContainerRow: {flexDirection: 'row', alignItems: 'center'},
  reviewProfileImage: {width: 66, height: 66, borderRadius: 33},
  reviewProfileHorizontalLine: {
    height: 1,
    backgroundColor: '#f3f3f3',
    width: '90%',
    alignSelf: 'center',
    marginTop: getVerticalScale(20),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowRadius: 3,
        shadowOpacity: 0.1,
        shadowColor: colors.black,
        shadowOffset: {
          width: 1,
          height: 0,
        },
      },
      android: {
        elevation: 1,
      },
    }),
  },
  reviewProfileNameAndLocationView: {marginStart: getMScale(17)},
  reviewProfileName: {fontSize: getFontSize(16)},
  reviewProfileLocationInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getVerticalScale(5),
  },
  reviewProfileLocationText: {
    color: colors.textSecondary,
    fontSize: getFontSize(12),
    marginStart: getMScale(7),
  },
  addIconCircle: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSectionView: {
    width: SCREEN_WIDTH,
    paddingHorizontal: getMScale(20),
    marginTop: getMScale(13),
  },
  infoSectionRowView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sectionTitle: {fontSize: getFontSize(16)},
  sectionDescription: {marginTop: getMScale(10)},
  sectionDescriptionLightText: {
    marginTop: getMScale(10),
    color: colors.textSecondary,
  },
  reviewProfileSkillsWrapper: {
    marginTop: getMScale(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  reviewProfileEducationItem: {marginTop: getMScale(8)},
  reviewProfileDegreeNameText: {fontSize: getFontSize(14)},
  reviewProfileInstituteNameText: {fontSize: getFontSize(12)},
  reviewProfileDegreeDurationText: {
    color: colors.textSecondary,
    fontSize: getFontSize(12),
  },
  reviewProfileEDucationSectionEditIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowRadius: 3,
        shadowOpacity: 0.1,
        shadowColor: colors.black,
        shadowOffset: {
          width: 1,
          height: 0,
        },
      },
      android: {
        elevation: 2,
      },
    }),
  },
  skillItem: {
    paddingHorizontal: getMScale(8),
    paddingVertical: getVerticalScale(6),
    backgroundColor: colors.primary_30,
    borderRadius: getScale(20),
    borderWidth: 1,
    borderColor: colors.primary,
    flexDirection: 'row',
    margin: getScale(5),
    alignItems: 'center',
  },
  skillTitle: {color: colors.primary, fontSize: getFontSize(12)},
  crossText: {
    color: colors.primary,
    marginStart: 5,
    fontSize: getFontSize(12),
  },
  submitButton: {marginVertical: getVerticalScale(20), width: '90%'},
});
export default styles;
