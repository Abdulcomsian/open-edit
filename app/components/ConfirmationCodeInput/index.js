import React from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {FONTS} from '../../utils/fonts';

const ConfirmationCodeInput = ({
  value,
  setValue,
  cellCount,
  containerStyle,
  cellStyle,
  errorMessage,
}) => {
  const CELL_COUNT = cellCount;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      autoFocus={false}
      autoComplete={'sms-otp'}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={[styles.codeFieldRoot, containerStyle]}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[
            styles.cell,
            cellStyle,
            errorMessage && {borderColor: colors.error},
            // isFocused && styles.focusCell,
            symbol && {color: colors.textPrimary},
          ]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {marginTop: 30, alignItems: 'center'},
  cell: {
    width: getMScale(66),
    height: getVerticalScale(59),
    lineHeight: 59,
    fontSize: getFontSize(24),
    color: colors.textPrimary,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center',
    fontFamily: FONTS.MEDIUM,
    backgroundColor: colors.lightGrey3,
  },
  focusCell: {
    borderColor: colors.black,
  },
});
export default ConfirmationCodeInput;
