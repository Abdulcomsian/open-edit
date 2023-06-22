import {getFontSize, getMScale, getSafeAreaPadding} from '../../utils/metrics';
import {StyleSheet, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import {FONTS} from '../../utils/fonts';
import Touchable from '../../components/Touchable/Touchable';
import BellIcon from '../../assets/svgs/BellIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../utils/theme';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/authSlice';
import screens from '../../constants/screens';

const HomeScreenHeader = ({screenName}) => {
  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();

  const isEditorHomeScreen = screens.EDITOR_HOME === screenName;
  return (
    <View
      style={[
        styles.parent,
        {paddingTop: getSafeAreaPadding(top)},
        isEditorHomeScreen && {backgroundColor: '#FAFAFA'},
      ]}>
      <View>
        <TextComponent
          font={isEditorHomeScreen ? 'medium' : 'regular'}
          style={{color: isEditorHomeScreen ? colors.textPrimary : '#A2A2A2'}}>
          {!isEditorHomeScreen ? ' Good evening 🖐' : 'Welcome!'}
        </TextComponent>
        <TextComponent
          style={{
            fontSize: getFontSize(isEditorHomeScreen ? 18 : 29),
            fontFamily: isEditorHomeScreen ? FONTS.BOLD : FONTS.SEMI_BOLD,
            lineHeight: isEditorHomeScreen ? 25 : 36,
          }}>
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
