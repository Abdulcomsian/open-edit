import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ImageComponent from '../ImageComponent/ImageComponent';
import {colors} from '../../utils/theme';
import Touchable from '../Touchable/Touchable';

const CircularIcon = ({
  style,
  type = 'image',
  onPress,
  imageSource,
  imageStyle,
  SVGComponent,
  countIndicator,
  withShadow = true,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (typeof onPress === 'function') {
      return onPress?.();
    }
  };

  const Image = type === 'svg' ? SVGComponent : ImageComponent;

  const ImageProps = {
    ...(type !== 'svg' && {source: imageSource, style: imageStyle}),
  };

  return (
    <Touchable
      onPress={handlePress}
      style={[styles.cartIconView, withShadow && styles.shadowStyle, style]}>
      {/*{countIndicator > 0 ? (*/}
      {/*  <View style={styles.basketCountIndicatorView}>*/}
      {/*    <TextComponent text={countIndicator} size={'xxs'} color={colors.white} />*/}
      {/*  </View>*/}
      {/*) : null}*/}
      <Image {...ImageProps} />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  cartIconView: {
    width: 46,
    height: 46,
    borderRadius: 30,
    backgroundColor: colors.white,
    borderColor: colors.lightGrey1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  shadowStyle: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.0,
        shadowColor: colors.black,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cartIcon: {width: 25, height: 25},
  basketCountIndicatorView: {
    position: 'absolute',
    top: -4,
    right: -8,
    minWidth: 25,
    minHeight: 25,
    borderRadius: 20,
    backgroundColor: '#E43E2B',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 22,
  },
});
export default CircularIcon;
