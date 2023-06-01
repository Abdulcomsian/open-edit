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
import {logToConsole} from '../configs/ReactotronConfig';
import MessageTabIconActive from '../assets/svgs/MessageTabIconActive';
import MessagesTabIconInactive from '../assets/svgs/MessagesTabIconInactive';
import JobsTabIconActive from '../assets/svgs/JobTabIconActive';
import JobsTabIconInActive from '../assets/svgs/JobsTabIconInActive';
import FavouritesTabIconActive from '../assets/svgs/FavouritesTabIconActive';
import FavouriteTabIconInActive from '../assets/svgs/FavouriteTabIconInActive';

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  const renderTabIcon = (isFocused, ActiveIcon, InActiveIcon) => {
    logToConsole({isFocused})
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
