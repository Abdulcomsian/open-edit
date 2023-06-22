import {Stack} from './RootNavigator';
import EditorHomeScreen from '../screens/EditorHomeScreen/EditorHomeScreen';
import HeadersMapper from './HeadersMapper';
import screens from '../constants/screens';

const EditorHomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: ({route}) => <HeadersMapper route={route} />}}>
      <Stack.Screen name={screens.EDITOR_HOME} component={EditorHomeScreen} />
    </Stack.Navigator>
  );
};
export default EditorHomeStackNavigator;
