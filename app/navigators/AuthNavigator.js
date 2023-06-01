import {Stack} from './RootNavigator';
import screens from '../constants/screens';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import CircularIcon from '../components/CircularIcon/CircularIcon';
import ArrowLeft from '../assets/svgs/ArrowLeft';
import {goBack} from '../utils/navigationUtils';
import {colors} from '../utils/theme';
import {getMScale} from '../utils/metrics';
import {isIos} from '../utils/sharedUtils';
import VerificationCode from '../screens/VerificationCodeScreen/VerificationCode';

const AuthNavigator = () => {
  const {top} = useSafeAreaInsets();
  const topInset = isIos ? top + 20 : top + 10;

  const renderHeader = () => {
    return (
      <View
        style={{
          paddingTop: topInset,
          backgroundColor: colors.white,
          paddingHorizontal: getMScale(20),
          paddingBottom: 10,
        }}>
        <CircularIcon
          type={'svg'}
          SVGComponent={() => <ArrowLeft />}
          onPress={goBack}
          withShadow={false}
        />
      </View>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true, header: () => renderHeader()}}>
      <Stack.Screen
        name={screens.LANDING_SCREEN}
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={screens.AUTH_SCREEN} component={AuthScreen} />
      <Stack.Screen
        name={screens.VERIFICATION_SCREEN}
        component={VerificationCode}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
