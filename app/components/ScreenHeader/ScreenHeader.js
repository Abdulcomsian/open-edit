import {View} from 'react-native';
import {
  getFontSize,
  getMScale, getSafeAreaPadding,
  getVerticalScale,
  SCREEN_WIDTH,
} from "../../utils/metrics";
import {colors} from '../../utils/theme';
import Touchable from '../../components/Touchable/Touchable';
import {goBack} from '../../utils/navigationUtils';
import MenuHorizontal from '../../assets/svgs/MenuHorizontal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ChevronLeft from '../../assets/svgs/ChevronLeft';
import TextComponent from '../TextComponent/TextComponent';

const ScreenHeader = ({title, RightIcon, onRightIconPress}) => {
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
        <ChevronLeft />
      </Touchable>
      <TextComponent font={'semiBold'} style={{fontSize: getFontSize(18)}}>
        {title}
      </TextComponent>
      {RightIcon ? (
        <Touchable onPress={onRightIconPress}>
          <RightIcon />
        </Touchable>
      ) : (
        <Touchable style={{width: 30}} />
      )}
    </View>
  );
};
export default ScreenHeader;
