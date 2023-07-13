import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {
  getFontSize,
  getMScale,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: getMScale(15),
  },
  folderInfo: {flexDirection: 'row', alignItems: 'center'},
  folderMetaView: {marginStart: getMScale(16)},
  folderName: {fontSize: getFontSize(20), lineHeight: 30},
  folderDateAndItems: {fontSize: getFontSize(12), color: colors.textSecondary},
  indicatorStyle: {
    position: 'absolute',
    bottom: -5,
    width: '100%',
    height: 2,
    backgroundColor: colors.primary,
  },
  tabsContentParent: {flex: 1, marginTop: getVerticalScale(15)},
  topTabsContainer: {flexDirection: 'row', marginTop: getVerticalScale(10)},
  tabItem: {
    width: getMScale(70),
    alignItems: 'center',
  },
  bottomView: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
