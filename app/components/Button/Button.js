import {StyleSheet} from 'react-native';
import Touchable from '../Touchable/Touchable';
import TextComponent from '../TextComponent/TextComponent';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';

const Button = ({
  title,
  onPress,
  style,
  titleStyle,
  backgroundColor = colors.primary,
  titleColor = colors.white,
  variant = 'filled',
}) => {
  const baseStyles = {
    filled: styles.defaultButton,
    outlined: [styles.defaultButton, styles.outlinedStyle],
  };
  return (
    <Touchable
      onPress={onPress}
      style={[{backgroundColor}, baseStyles[variant], style]}>
      <TextComponent
        text={title}
        font={'semiBold'}
        style={[styles.defaultTitle, {color: titleColor}, titleStyle]}
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    width: getMScale(327),
    height: getVerticalScale(61),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  outlinedStyle: {
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  defaultTitle: {
    fontSize: getFontSize(16),
  },
});
export default Button;
