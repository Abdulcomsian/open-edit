import {Platform, StyleSheet} from 'react-native';
import {
  getFontSize,
  getMScale,
  getVerticalScale,
  SCREEN_HEIGHT,
} from '../../utils/metrics';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: getMScale(20),
    paddingVertical: getMScale(10),
    backgroundColor: colors.white,
  },
  searchBarView: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 44,
    height: getVerticalScale(55),
    paddingHorizontal: 16,
  },
  searchInput: {marginStart: getMScale(6)},
  listHeaderParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listHeaderText: {
    fontSize: getFontSize(16),
    marginTop: getVerticalScale(20),
    marginBottom: getVerticalScale(10),
  },
  itemSeparatorView: {
    width: '100%',
    height: 1,
    backgroundColor: colors.black20,
    alignSelf: 'center',
  },
  listEmptyParent: {
    flex: 1,
    height: SCREEN_HEIGHT * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getMScale(34),
  },
  emptyListDescription: {
    textAlign: 'center',
    marginTop: getVerticalScale(18),
    color: colors.lightGrey2,
  },
  //Folder Item Styles
  itemParent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: getVerticalScale(15),
  },
  nameDescriptionView: {marginStart: getMScale(16), width: '82%'},
  nameView: {flexDirection: 'row', alignItems: 'center'},
  nameText: {fontSize: getFontSize(16), lineHeight: 24},
  newIndicatorView: {
    width: getMScale(35),
    borderRadius: 25,
    height: getVerticalScale(15),
    backgroundColor: 'rgba(122, 191, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: getMScale(16),
  },
  newText: {color: colors.white, fontSize: getFontSize(9)},
  dateAndItemsCount: {fontSize: getFontSize(12), color: colors.textLight},

  //Jobs Item Card
  jobItemParent: {
    paddingVertical: getVerticalScale(25),
    paddingHorizontal: getMScale(15),
    width: 330,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginEnd: 10,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 1,
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
