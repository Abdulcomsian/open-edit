import {Dimensions, StatusBar} from 'react-native';
import {isIos} from './sharedUtils';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 897;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;

export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;

export const moderateScale = (size, factor = 0.4) =>
  size + (scale(size) - size) * factor;

export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export const getScale = (value = 10) => scale?.(value);
export const getVerticalScale = (value = 10) => verticalScale?.(value);
export const getMScale = (value = 10, factor) => moderateScale?.(value, factor);

export const getFontSize = val => (isIos ? val : val - 2);
