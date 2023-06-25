import {StyleSheet} from 'react-native';
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

  listHeaderParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listHeaderText: {
    fontSize: getFontSize(16),
    marginTop: getVerticalScale(20),
  },
  horizontalScrollStyle: {flex: 1, paddingStart: getMScale(5)},
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
  nameDescriptionView: {marginStart: getMScale(16), width: '80%'},
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

  floatingAddButton: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    zIndex: 22,
  },
});
export default styles;
