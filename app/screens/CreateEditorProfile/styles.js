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
  inputWrapperAnimatedView: {marginTop: getVerticalScale(isIos ? 12 : 22)},
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
  profileButtonContainer: {
    marginVertical: getMScale(20),
    width: '90%',
    alignSelf: 'center',
  },
});

export default styles;
