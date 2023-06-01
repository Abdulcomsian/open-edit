import {Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {useMemo} from 'react';
import {FONTS} from '../../utils/fonts';

const TextComponent = ({text, children, font, style, onPress}) => {
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
    <Text onPress={onPress} style={[styles.default, {...fontFamily}, style]}>
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
