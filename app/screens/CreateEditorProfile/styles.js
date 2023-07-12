import {Platform, StyleSheet} from 'react-native';
import {
  getFontSize,
  getMScale,
  getScale,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import {colors} from '../../utils/theme';
import {isIos} from '../../utils/sharedUtils';

const styles = StyleSheet.create({
  parent: {flex: 1},
  pageContainer: {
    width: SCREEN_WIDTH,
    paddingTop: getVerticalScale(10),
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {paddingBottom: getVerticalScale(50)},

  //-------------------------CREATE SKILLS SET----------------------------
  inputWrapperAnimatedView: {marginTop: getMScale(1)},
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  suggestedSkillContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: getVerticalScale(15),
  },
  suggestedSkillLabel: {fontSize: getFontSize(16), lineHeight: 21},
  suggestedSkillsView: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: getVerticalScale(10),
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
  addIcon: {
    marginStart: 5,
    color: colors.primary,
    fontSize: getFontSize(12),
  },
  inputCustomViewWrapper: {paddingTop: getVerticalScale(5)},
  inputCustomView: {flexDirection: 'row', flexWrap: 'wrap'},
  crossText: {
    color: colors.primary,
    marginStart: 5,
    fontSize: getFontSize(12),
  },
  addSkillsView: {marginVertical: 10},
  addSkillsText: {color: colors.textSecondary},
  dropDownParent: {
    width: '90%',
    backgroundColor: colors.white,
    alignSelf: 'center',
    opacity: 1,
    position: 'absolute',
    zIndex: 999,
    borderRadius: 6,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 5,
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  checkBoxItem: {
    paddingVertical: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingStart: getMScale(13),
    backgroundColor: colors.white,
  },
  selectedCheckBoxItemStyle: {
    backgroundColor: '#FFF6F3',
  },
  serviceOfferingsText: {marginStart: 10},
  button: {
    width: '90%',
    marginBottom: getVerticalScale(50),
    marginTop: getVerticalScale(10),
  },

  //-----------------------------PORTFOLIO--------------------------------

  portfolioContainer: {marginHorizontal: getVerticalScale(15)},
  videoView: {
    width: getScale(70),
    height: getScale(70),
    borderRadius: 10,
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  closedCircleView: {
    position: 'absolute',
    zIndex: 1,
    right: getScale(3),
    top: getScale(2),
  },
  durationView: {
    position: 'absolute',
    bottom: 5,
    borderRadius: 15,
    start: 5,
    backgroundColor: colors.black50,
  },
  durationText: {
    color: colors.white,
    paddingHorizontal: 5,
    fontSize: getFontSize(10),
  },
  lightBackgroundButton: {
    backgroundColor: colors.primary_12,
    height: getVerticalScale(53),
    width: '90%',
    marginTop: getVerticalScale(19),
  },
  //-------------------------------EDUCATION_SECTION----------------------------
  keyboardScrollContentContainer: {paddingBottom: getVerticalScale(150)},
  keyboardScrollStyle: {
    paddingTop: getVerticalScale(10),
    flex: 1,
    paddingHorizontal: getMScale(15),
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowItemInput: {width: '45%'},
  horizontalLine: {
    width: '100%',
    alignSelf: 'center',
    height: 1,
    marginTop: getVerticalScale(15),
    backgroundColor: '#F3F3F3',
  },

  //-------------------------------HOURLY_RATE_SECTION---------------------------

  hourlyRateInputContainerStyle: {
    width: '90%',
    alignSelf: 'center',
    marginTop: getVerticalScale(25),
  },
  hourlyRateInputStyle: {width: '50%'},
  hourlyRateDropDownRightView: {flexDirection: 'row', alignItems: 'center'},
  hourLabel: {marginEnd: 5},
  //-------------------------------PROFILE_INFO_SECTION--------------------------
  profileScrollContentContainer: {alignItems: 'center'},
  profileInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: getMScale(84),
    height: getMScale(84),
    borderRadius: getMScale(42),
    marginTop: getMScale(50),
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: getMScale(42),
  },
  uploadPhotoButton: {marginTop: getMScale(25), width: '90%'},
  profileInputsContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: getVerticalScale(25),
  },
  cityInputStyle: {marginTop: getVerticalScale(15)},
  profileButtonContainer: {
    marginVertical: getMScale(20),
    width: '90%',
    alignSelf: 'center',
  },
  countryFlag: {
    width: getMScale(16),
    height: getMScale(15),
    marginEnd: 10,
  },

  //--------------------------_REVIEW PROFILE SECTION------------------------

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
    width: '100%',
    marginTop: getVerticalScale(20),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
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
    paddingHorizontal: getMScale(15),
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
  submitButton: {marginVertical: getVerticalScale(20), width: '90%'},
});

export default styles;
