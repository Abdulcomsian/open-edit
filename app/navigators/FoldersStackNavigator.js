import {Stack} from './RootNavigator';
import HeadersMapper from './HeadersMapper';
import screens from '../constants/screens';
import FolderDetailScreen from '../screens/FolderDetailScreen/FolderDetailScreen';
import PostJobScreen from '../screens/PostJobScreen/PostJobScreen';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen/ReviewDetailsScreen';

const FoldersStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: ({route}) => <HeadersMapper route={route} />}}>
      <Stack.Screen
        name={screens.FOLDER_DETAIL}
        component={FolderDetailScreen}
      />
      <Stack.Screen name={screens.POST_JOB} component={PostJobScreen} />
      <Stack.Screen
        name={screens.REVIEW_DETAILS}
        component={ReviewDetailsScreen}
      />
    </Stack.Navigator>
  );
};
export default FoldersStackNavigator;
