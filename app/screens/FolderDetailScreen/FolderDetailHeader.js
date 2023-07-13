import {View} from 'react-native';
import { getMScale, getSafeAreaPadding, getVerticalScale, SCREEN_WIDTH } from "../../utils/metrics";
import {colors} from '../../utils/theme';
import Touchable from '../../components/Touchable/Touchable';
import {goBack} from '../../utils/navigationUtils';
import ArrowLeftBold from '../../assets/svgs/ArrowLeftBold';
import MenuHorizontal from '../../assets/svgs/MenuHorizontal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const FolderDetailHeader = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: getSafeAreaPadding(top),
        paddingBottom: getVerticalScale(20),
        width: SCREEN_WIDTH,
        backgroundColor: colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: getMScale(15),
      }}>
      <Touchable onPress={goBack}>
        <ArrowLeftBold />
      </Touchable>
      <Touchable>
        <MenuHorizontal />
      </Touchable>
    </View>
  );
};
export default FolderDetailHeader;
