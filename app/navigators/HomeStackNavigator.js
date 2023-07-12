import {Stack} from './RootNavigator';
import screens from '../constants/screens';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import HeadersMapper from './HeadersMapper';

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: ({route}) => <HeadersMapper route={route} />}}>
      <Stack.Screen name={screens.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
