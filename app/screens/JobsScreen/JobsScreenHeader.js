import {View} from 'react-native';
import { getFontSize, getMScale, getSafeAreaPadding, SCREEN_WIDTH } from "../../utils/metrics";
import {colors} from '../../utils/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextComponent from '../../components/TextComponent/TextComponent';
import Touchable from '../../components/Touchable/Touchable';
import HelpCircle from '../../assets/svgs/HelpCircle';
import MenuHorizontal from '../../assets/svgs/MenuHorizontal';

const JobsScreenHeader = ({route}) => {
  const {name} = route || {};
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        backgroundColor: colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: getSafeAreaPadding(top),
        paddingBottom: 20,
        justifyContent: 'space-between',
        paddingHorizontal: getMScale(15),
      }}>
      <TextComponent font={'semiBold'} style={{fontSize: getFontSize(18), lineHeight: 30}}>{name}</TextComponent>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Touchable style={{width: 40}}>
          <HelpCircle />
        </Touchable>
        <Touchable>
          <MenuHorizontal />
        </Touchable>
      </View>
    </View>
  );
};
export default JobsScreenHeader;
