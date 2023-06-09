import {logToConsole} from '../../configs/ReactotronConfig';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {
  getFontSize,
  getMScale,
  getSafeAreaPadding,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import TextComponent from '../TextComponent/TextComponent';
import Touchable from '../Touchable/Touchable';
import ProfileIcon from '../../assets/svgs/ProfileIcon';
import {colors} from '../../utils/theme';

const CreateProfileHeader = ({route}) => {
  const {signupSteps, activeStep} = route.params || {};

  const {name} = route || {};
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: getSafeAreaPadding(top),
        width: SCREEN_WIDTH,
        paddingHorizontal: getMScale(20),
        alignItems: 'center',
        paddingBottom: 10,
      }}>
      <TextComponent font={'semiBold'} style={{fontSize: getFontSize(20)}}>
        {name}
      </TextComponent>
      <View
        style={{
          position: 'absolute',
          start: 20,
          top: getSafeAreaPadding(top),
        }}>
        <ProfileIcon />
      </View>
      <View
        style={{
          marginTop: getVerticalScale(20),
          width: '95%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {signupSteps?.map((item, index) => (
          <View
            style={{
              width: SCREEN_WIDTH / signupSteps.length - 20,
              height: 6,
              borderRadius: 30,
              backgroundColor:
                index <= activeStep ? colors.primary : '#C4C4C480',
            }}
          />
        ))}
      </View>
    </View>
  );
};
export default CreateProfileHeader;
