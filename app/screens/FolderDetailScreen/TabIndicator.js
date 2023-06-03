import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import { getMScale } from "../../utils/metrics";
import { colors } from "../../utils/theme";

const tabWidth = getMScale(70);
const TabBarIndicator = ({activeTab}) => {
  const indicatorPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateIndicator(activeTab);
  }, [activeTab]);

  const animateIndicator = index => {
    Animated.spring(indicatorPosition, {
      toValue: index,
      useNativeDriver: true,
    }).start();
  };

  const renderIndicator = () => {
    const translateX = indicatorPosition.interpolate({
      inputRange: [0, 4],
      outputRange: [0, tabWidth * 4],
    });

    return (
      <Animated.View style={[styles.indicator, {transform: [{translateX}]}]} />
    );
  };

  return <View style={styles.container}>{renderIndicator()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 4,
    position: 'absolute',
    bottom: -5,
  },
  indicator: {
    position: 'absolute',
    height: 3,
    alignSelf: 'center',
    width: tabWidth, // Assuming 5 tabs
    backgroundColor: colors.primary, // Active tab indicator color
  },
});

export default TabBarIndicator;
