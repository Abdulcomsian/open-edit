import RootNavigator from './navigators/RootNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {StatusBar} from 'react-native';
import {isIos} from './utils/sharedUtils';
import {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    if (!isIos) {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setBarStyle('dark-content');
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;
