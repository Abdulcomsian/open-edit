import screens from '../constants/screens';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JobsScreen from '../screens/JobsScreen/JobsScreen';
import FavouritesScreen from '../screens/FavouritesScreen/FavouritesScreen';
import HomeTabActiveIcon from '../assets/svgs/HomeTabIconActive';
import HomeTabIconInactive from '../assets/svgs/HomeTabIconInactive';
import {colors} from '../utils/theme';
import {FONTS} from '../utils/fonts';
import MessageTabIconActive from '../assets/svgs/MessageTabIconActive';
import MessagesTabIconInactive from '../assets/svgs/MessagesTabIconInactive';
import JobsTabIconActive from '../assets/svgs/JobTabIconActive';
import JobsTabIconInActive from '../assets/svgs/JobsTabIconInActive';
import FavouritesTabIconActive from '../assets/svgs/FavouritesTabIconActive';
import FavouriteTabIconInActive from '../assets/svgs/FavouriteTabIconInActive';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform, View} from 'react-native';
import TextComponent from '../components/TextComponent/TextComponent';
import {getFontSize, getMScale} from '../utils/metrics';
import Touchable from '../components/Touchable/Touchable';
import BellIcon from '../assets/svgs/BellIcon';
import HomeScreenHeader from '../screens/HomeScreen/HomeScreenHeader';

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  const renderTabIcon = (isFocused, ActiveIcon, InActiveIcon) => {
    if (isFocused) {
      return <ActiveIcon />;
    }
    return <InActiveIcon />;
  };


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#40577D',
        tabBarLabelStyle: {fontFamily: FONTS.REGULAR, fontSize: 12},
      }}>
      <Tab.Screen
        name={screens.HOME}
        component={HomeScreen}
        options={{
          headerShown: true,
          header: () => <HomeScreenHeader />,
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              focused,
              () => <HomeTabActiveIcon />,
              () => <HomeTabIconInactive />,
            ),
        }}
      />
      <Tab.Screen
        name={screens.MESSAGES}
        component={MessagesScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              focused,
              () => <MessageTabIconActive />,
              () => <MessagesTabIconInactive />,
            ),
        }}
      />
      <Tab.Screen
        name={screens.JOBS}
        component={JobsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              focused,
              () => <JobsTabIconActive />,
              () => <JobsTabIconInActive />,
            ),
        }}
      />
      <Tab.Screen
        name={screens.FAVOURITES}
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              focused,
              () => <FavouritesTabIconActive />,
              () => <FavouriteTabIconInActive />,
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
