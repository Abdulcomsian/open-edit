import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import useAuthSelector from '../redux/selectorHooks/useAuthSelector';
import AppNavigator from './AppNavigator';
import {useRef} from 'react';
import { navigationRef } from "../utils/navigationUtils";
import { logNavigationToConsole } from "../configs/ReactotronConfig";

export const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const {isLoggedIn = false} = useAuthSelector();

  const routeNameRef = useRef(null);
  const onReady = () => {
    __DEV__ &&
      (routeNameRef.current = navigationRef.current?.getCurrentRoute?.()?.name);
    setTimeout(() => {
      // SplashScreen.hide();
    }, 3000);
  };

  const onStateChange = state => {
    if (__DEV__) {
      const previousRouteName = routeNameRef.current;
      const {name, params} = navigationRef?.current?.getCurrentRoute?.() || {};

      if (previousRouteName !== name) {
        logNavigationToConsole(
          {
            PreviousScreen: previousRouteName,
            CurrentScreen: name,
            Params: params,
          },
          'NAVIGATION',
        );
      }
      routeNameRef.current = name;
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            name={'Auth'}
            component={AuthNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name={'App'}
            component={AppNavigator}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
