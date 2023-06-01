import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

const KeyboardAwareScroll = ({
  extraHeight,
  style,
  contentContainerStyle,
  children,
}) => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      extraHeight={extraHeight}
      extraScrollHeight={extraHeight}
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      style={[styles.scrollStyle, style]}
      contentContainerStyle={[styles.innerStyle, contentContainerStyle]}>
      {children}
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1,
    flexGrow: 1,
  },
  innerStyle: {
    backgroundColor: colors.white,
  },
});
export default KeyboardAwareScroll;
