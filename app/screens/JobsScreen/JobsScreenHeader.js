import {StyleSheet, View} from 'react-native';
import {
  getFontSize,
  getMScale,
  getSafeAreaPadding,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextComponent from '../../components/TextComponent/TextComponent';
import Touchable from '../../components/Touchable/Touchable';
import HelpCircle from '../../assets/svgs/HelpCircle';
import MenuHorizontal from '../../assets/svgs/MenuHorizontal';
import screens from '../../constants/screens';
import {colors} from '../../utils/theme';
import NewChatIcon from '../../assets/svgs/NewChatIcon';

const JobsScreenHeader = ({route}) => {
  const {name} = route || {};
  const {top} = useSafeAreaInsets();

  const renderRightIcon = () => {
    if (name === screens.MESSAGES) {
      return <NewChatIcon />;
    } else {
      return <MenuHorizontal />;
    }
  };
  const isMessageScreen = screens.MESSAGES === name;
  return (
    <View
      style={[
        styles.parent,
        {paddingTop: getSafeAreaPadding(top)},
        isMessageScreen && styles.messagesScreenHeader,
      ]}>
      <TextComponent
        font={'semiBold'}
        style={{fontSize: getFontSize(18), lineHeight: 30}}>
        {name}
      </TextComponent>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {name === screens.JOBS ? (
          <Touchable style={{width: 40}}>
            <HelpCircle />
          </Touchable>
        ) : null}
        <Touchable>{renderRightIcon()}</Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
    justifyContent: 'space-between',
    paddingHorizontal: getMScale(15),
  },
  messagesScreenHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    paddingHorizontal: getMScale(25),
  },
});
export default JobsScreenHeader;
