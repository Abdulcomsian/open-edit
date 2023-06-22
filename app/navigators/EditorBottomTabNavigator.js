import screens from '../constants/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../utils/theme';
import {FONTS} from '../utils/fonts';
import HeadersMapper from './HeadersMapper';
import EditorHomeStackNavigator from './EditorHomeStackNavigator';
import JobIconActive from '../assets/svgs/JobIconActive';
import JobIconInactive from '../assets/svgs/JobIconInactive';
import ProposalsScreen from '../screens/ProposalsScreen/ProposalsScreen';
import ProposalsActiveIcon from '../assets/svgs/ProposalsActiveIcon';
import ProposalsInActiveIcon from '../assets/svgs/ProposalsInActiveIcon';
import ShareVideoScreen from '../screens/ShareVideoScreen/ShareVideoScreen';
import ShareVideoActiveIcon from '../assets/svgs/ShareVideoActiveIcon';
import ShareVideoInactiveIcon from '../assets/svgs/ShareVideoInactiveIcon';
import EditorProfileScreen from '../screens/EditorProfileScreen/EditorProfileScreen';
import EditorProfileInactiveIcon from '../assets/svgs/EditorProfileInactiveIcon';

const EditorBottomTabsNavigator = () => {
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
        headerShown: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#40577D',
        tabBarLabelStyle: {fontFamily: FONTS.REGULAR, fontSize: 12},
        header: ({route}) => <HeadersMapper route={route} />,
      }}>
      <Tab.Screen
        name={screens.EDITOR_HOME_STACK}
        component={EditorHomeStackNavigator}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              focused,
              () => <JobIconActive />,
              () => <JobIconInactive />,
            ),
        }}
      />
      <Tab.Screen
        name={screens.PROPOSALS}
        component={ProposalsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              focused,
              () => <ProposalsActiveIcon />,
              () => <ProposalsInActiveIcon />,
            ),
        }}
      />
      <Tab.Screen
        name={screens.SHARE_VIDEO}
        component={ShareVideoScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              focused,
              () => <ShareVideoActiveIcon />,
              () => <ShareVideoInactiveIcon />,
            ),
        }}
      />
      <Tab.Screen
        name={screens.EDITOR_PROFILE}
        component={EditorProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              focused,
              () => <EditorProfileInactiveIcon />,
              () => <EditorProfileInactiveIcon />,
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default EditorBottomTabsNavigator;
