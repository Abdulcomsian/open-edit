import {getFontSize, getMScale, getSafeAreaPadding} from '../../utils/metrics';
import {StyleSheet, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import {FONTS} from '../../utils/fonts';
import Touchable from '../../components/Touchable/Touchable';
import BellIcon from '../../assets/svgs/BellIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../utils/theme';
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const HomeScreenHeader = () => {
  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();

  return (
    <View style={[styles.parent, {paddingTop: getSafeAreaPadding(top)}]}>
      <View>
        <TextComponent style={{color: '#A2A2A2'}}>
          Good evening 🖐
        </TextComponent>
        <TextComponent
          style={{fontSize: getFontSize(29), fontFamily: FONTS.SEMI_BOLD}}>
          John Doe
        </TextComponent>
      </View>
      <Touchable onPress={() => dispatch(logout())}>
        <BellIcon />
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingHorizontal: getMScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
export default HomeScreenHeader;
