import {getFontSize, getMScale} from '../../utils/metrics';
import {Platform, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import {FONTS} from '../../utils/fonts';
import Touchable from '../../components/Touchable/Touchable';
import BellIcon from '../../assets/svgs/BellIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { colors } from "../../utils/theme";

const HomeScreenHeader = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingHorizontal: getMScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        ...Platform.select({
          ios: {
            paddingTop: top,
          },
          android: {
            paddingTop: top + 10,
          },
        }),
      }}>
      <View>
        <TextComponent style={{color: '#A2A2A2'}}>
          Good evening 🖐
        </TextComponent>
        <TextComponent
          style={{fontSize: getFontSize(29), fontFamily: FONTS.SEMI_BOLD}}>
          John Doe
        </TextComponent>
      </View>
      <Touchable>
        <BellIcon />
      </Touchable>
    </View>
  );
};

export default HomeScreenHeader;
