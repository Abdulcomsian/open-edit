import {Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {useMemo} from 'react';
import {FONTS} from '../../utils/fonts';

const TextComponent = ({text, children, font, style, onPress, numberOfLines, ...rest}) => {
  const fontFamily = useMemo(() => {
    switch (font) {
      case 'regular':
        return {fontFamily: FONTS.REGULAR};
      case 'medium':
        return {fontFamily: FONTS.MEDIUM};
      case 'semiBold':
        return {fontFamily: FONTS.SEMI_BOLD};
      case 'bold':
        return {fontFamily: FONTS.BOLD};
      case 'outfit-regular':
        return {fontFamily: FONTS.OUTFIT_REGULAR};
      case 'outfit-medium':
        return {fontFamily: FONTS.OUTFIT_MEDIUM};
      default:
        return {fontFamily: FONTS.REGULAR};
    }
  }, [font]);

  return (
    <Text onPress={onPress} numberOfLines={numberOfLines} style={[styles.default, {...fontFamily}, style]} {...rest}>
      {text || children}
    </Text>
  );
};
const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    color: colors.textPrimary,
    fontFamily: FONTS.REGULAR,
  },
});
export default TextComponent;
