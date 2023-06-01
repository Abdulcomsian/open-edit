import Touchable from '../Touchable/Touchable';
import {Animated, StyleSheet, View} from 'react-native';
import TextComponent from '../TextComponent/TextComponent';
import {colors} from '../../utils/theme';
import {getMScale, getVerticalScale} from '../../utils/metrics';
import {useState} from 'react';
import {FONTS} from '../../utils/fonts';

const AuthTabBar = ({tabItems, onTabPress, containerStyle}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [focus] = useState(new Animated.Value(0));

  const handleTabPress = (key, index) => {
    Animated.spring(focus, {
      toValue: index,
      useNativeDriver: true,
    }).start();
    setActiveTabIndex(index);
    onTabPress(key, index);
  };
  return (
    <View style={[styles.topBarBackground, containerStyle]}>
      {tabItems.map((item, index) => {
        const isActive = index === activeTabIndex;
        const tabStyles = [
          styles.unfocusedTabItem,
          isActive && styles.focusedTabItem,
        ];
        const {text, key} = item || {};
        return (
          <Touchable
            key={key}
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => handleTabPress(key, index)}>
            <Animated.View
              style={[
                tabStyles,
                {
                  transform: [
                    {
                      translateX: focus.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [-50, 0, 50],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}
            />
            <TextComponent
              text={text}
              style={[
                styles.unfocusedItemText,
                index === activeTabIndex && styles.focusedItemText,
              ]}
            />
          </Touchable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  topBarBackground: {
    height: getVerticalScale(50),
    backgroundColor: colors.lightGrey3,
    borderRadius: 50,
    // width: getMScale(327),
    marginTop: getVerticalScale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getMScale(3),
  },
  unfocusedItemText: {
    fontFamily: FONTS.MEDIUM,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  focusedItemText: {
    color: colors.textPrimary,
  },
  unfocusedTabItem: {
    height: getVerticalScale(42),
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  focusedTabItem: {
    backgroundColor: colors.white,
    borderRadius: 50,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
});
export default AuthTabBar;
