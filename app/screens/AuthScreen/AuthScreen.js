import {Animated, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import styles from './styles';
import strings from '../../constants/strings';
import {useEffect, useRef, useState} from 'react';
import KeyboardAwareScroll from '../../components/KeyboardAwareScrollComponent/KeyboardAwareScroll';
import AuthTabBar from '../../components/AuthTabBar/AuthTabBar';
import {SCREEN_WIDTH} from '../../utils/metrics';
import {colors} from '../../utils/theme';
import {authOptions} from './constants';
import SigninTab from './SigninTab';
import SingUpTab from './SingupTab';
import {useRoute} from '@react-navigation/native';

const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const flatListRef = useRef(null);

  const handleTabPress = (key, index) => {
    setActiveTab(index);
    flatListRef?.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const route = useRoute();
  const {activeIndex} = route.params || {};

  useEffect(() => {
    setActiveTab(activeIndex);
  }, [activeIndex]);

  const renderTopBar = () => {
    return (
      <AuthTabBar
        tabItems={authOptions}
        onTabPress={handleTabPress}
        containerStyle={{marginHorizontal: 20}}
      />
    );
  };

  const renderInputSection = () => {
    return (
      <Animated.FlatList
        ref={flatListRef}
        scrollEnabled={false}
        data={authOptions}
        extraData={activeTab}
        keyExtractor={(item, index) => String(item.key || index)}
        showsHorizontalScrollIndicator={true}
        pagingEnabled
        keyboardShouldPersistTaps={'handled'}
        bounces={false}
        horizontal
        style={{flex: 1}}
        contentContainerStyle={{backgroundColor: colors.white}}
        decelerationRate={'fast'}
        scrollEventThrottle={32}
        renderItem={({item, index}) => {
          const {key} = item || {};
          return (
            <View
              style={{
                width: SCREEN_WIDTH,
                overflow: 'hidden',
                flexGrow: 1,
                paddingHorizontal: 5,
              }}>
              {renderPages(key)}
            </View>
          );
        }}
      />
    );
  };

  const renderPages = key => {
    if (key === 'signup') {
      return <SingUpTab />;
    }
    if (key === 'signin') {
      return <SigninTab />;
    }
    return null;
  };

  return (
    <KeyboardAwareScroll
      extraHeight={70}
      style={styles.parent}
      contentContainerStyle={{paddingBottom: 30}}>
      <TextComponent
        text={
          activeTab === 0
            ? strings.create_new_account
            : strings.login_to_continue
        }
        font={'semiBold'}
        style={styles.createNewAccText}
      />
      <TextComponent
        text={strings.get_great_experience}
        style={styles.descriptionText}
      />
      {renderTopBar()}
      {renderInputSection()}
    </KeyboardAwareScroll>
  );
};

export default AuthScreen;
