import {StyleSheet, TextInput, View} from 'react-native';
import TextComponent from '../TextComponent/TextComponent';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {forwardRef, useImperativeHandle, useRef} from 'react';
import {FONTS} from '../../utils/fonts';

const InputComponent = forwardRef(
  (
    {
      containerStyle,
      value,
      inputStyle,
      label,
      placeholder,
      onChangeText,
      key,
      LeftIcon,
      SkillComponent,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef();

    const focus = () => inputRef?.current?.focus();
    const blur = () => inputRef?.current?.blur();

    useImperativeHandle(ref, () => ({
      focus,
      blur,
    }));

    return (
      <View style={[styles.defaultInputContainer, containerStyle]}>
        {label ? (
          <TextComponent font={'medium'} text={label} style={styles.label} />
        ) : null}
        <View style={[styles.defaultInput, inputStyle]}>
          {LeftIcon ? <LeftIcon /> : null}
          <TextInput
            ref={inputRef}
            style={{
              fontFamily: FONTS.REGULAR,
              fontSize: getFontSize(14),
              width: '90%',
              color: colors.textPrimary,
            }}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.textSecondary}
            {...rest}
          />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  defaultInputContainer: {
    height: getMScale(81),
    marginVertical: getVerticalScale(10),
    width: '100%',
  },
  defaultInput: {
    borderColor: colors.lightGrey1,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: getMScale(14),
    height: getMScale(52),
    width: '100%',
    marginTop: getVerticalScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconView: {},
  label: {
    fontSize: getFontSize(16),
    lineHeight: 21,
  },
});
export default InputComponent;
