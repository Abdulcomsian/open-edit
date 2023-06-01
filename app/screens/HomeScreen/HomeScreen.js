import {Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/authSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Video Share</Text>
      <Button title={'Logout'} onPress={handleLogout} />
    </View>
  );
};
export default HomeScreen;
