import {StyleSheet, TextInput, View} from 'react-native';
import TextComponent from '../TextComponent/TextComponent';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {forwardRef, useImperativeHandle, useRef} from 'react';
import {FONTS} from '../../utils/fonts';
import Touchable from '../Touchable/Touchable';

const InputComponent = forwardRef(
  (
    {
      containerStyle,
      value,
      inputStyle,
      textInputStyle,
      label,
      placeholder,
      onChangeText,
      LeftIcon,
      RightIcon,
      SkillComponent,
      editable = true,
      onInputPress,
      multiline = false,
      isDropDown,
      isVisibleDropDown,
      isCustomView,
      children,
      bottomMessage,
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

    const InputWrapper = !editable ? Touchable : View;
    const Input = isCustomView ? View : TextInput;

    return (
      <View
        style={[
          styles.defaultInputContainer,
          containerStyle,
          multiline && styles.multilineInputContainer,
          isCustomView && styles.customViewInputContainer,
        ]}>
        {label ? (
          <TextComponent font={'medium'} text={label} style={styles.label} />
        ) : null}
        <InputWrapper
          onPress={onInputPress}
          style={[
            styles.defaultInput,
            inputStyle,
            multiline && styles.multilineStyle,
            isCustomView && styles.customViewInputStyle,
          ]}>
          {LeftIcon ? <LeftIcon /> : null}
          <Input
            ref={inputRef}
            style={[
              styles.textInputStyle,
              textInputStyle,
              !LeftIcon && !RightIcon && {width: '100%'},
              multiline && {
                lineHeight: 25,
                width: '100%',
              },
            ]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.textSecondary}
            editable={editable}
            multiline={multiline}
            {...rest}>
            {isCustomView ? children : null}
          </Input>
          {RightIcon ? <RightIcon /> : null}
        </InputWrapper>
        {bottomMessage ? (
          <TextComponent style={styles.bottomMessage}>
            {bottomMessage}
          </TextComponent>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  defaultInputContainer: {
    height: getVerticalScale(81),
    marginVertical: getVerticalScale(10),
    width: '100%',
  },
  multilineInputContainer: {
    height: getVerticalScale(125),
  },
  customViewInputContainer: {
    minHeight: getVerticalScale(125),
    height: 'auto',
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
  multilineStyle: {
    height: getVerticalScale(96),
    alignItems: 'flex-start',
  },
  customViewInputStyle: {minHeight: getVerticalScale(96), height: 'auto'},
  label: {
    fontSize: getFontSize(16),
    lineHeight: 21,
  },
  textInputStyle: {
    fontFamily: FONTS.REGULAR,
    fontSize: getFontSize(14),
    width: '90%',
    color: colors.textPrimary,
  },
  bottomMessage: {
    color: colors.textSecondary,
    fontSize: getFontSize(12),
    marginVertical: getVerticalScale(5),
  },
});
export default InputComponent;
