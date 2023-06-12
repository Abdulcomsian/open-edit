import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import useAuthSelector from '../redux/selectorHooks/useAuthSelector';
import AppNavigator from './AppNavigator';
import {useRef} from 'react';
import {navigationRef} from '../utils/navigationUtils';
import {logNavigationToConsole} from '../configs/ReactotronConfig';
import screens from '../constants/screens';

import FoldersStackNavigator from './FoldersStackNavigator';
import useUserSelector from '../redux/selectorHooks/useUserSelector';
import CreateEditorProfile from '../screens/CreateEditorProfile/CreateEditorProfile';
import CreateProfileHeader from '../components/CreateProfileHeader/CreateProfileHeader';

export const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const {isLoggedIn = false, userType = ''} = useAuthSelector();
  const {user} = useUserSelector();

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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn ? (
          <Stack.Screen name={'Auth'} component={AuthNavigator} />
        ) : (
          <>
            {userType === 'editor' && !user ? (
              <Stack.Screen
                name={screens.CREATE_PROFILE}
                component={CreateEditorProfile}
                options={{
                  headerShown: true,
                  header: ({route}) => <CreateProfileHeader route={route} />,
                }}
              />
            ) : (
              <>
                <Stack.Screen name={'App'} component={AppNavigator} />
                <Stack.Screen
                  name={screens.FOLDERS_STACK}
                  component={FoldersStackNavigator}
                />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
