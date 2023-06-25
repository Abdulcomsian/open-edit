import {StyleSheet, View} from 'react-native';
import {getMScale, getVerticalScale} from '../../utils/metrics';
import CircularIcon from '../../components/CircularIcon/CircularIcon';
import GoogleLogo from '../../assets/svgs/GoogleLogo';
import FacebookLogo from '../../assets/svgs/FacebookLogo';
import AppleLogo from '../../assets/svgs/AppleLogo';
import {isIos} from '../../utils/sharedUtils';

const SocialAuthOptions = () => {
  return (
    <View style={styles.parent}>
      <CircularIcon
        type={'svg'}
        SVGComponent={() => <GoogleLogo />}
        style={styles.iconStyle}
      />
      <CircularIcon
        type={'svg'}
        SVGComponent={() => <FacebookLogo />}
        style={styles.iconStyle}
      />
      {isIos ? (
        <CircularIcon
          type={'svg'}
          SVGComponent={() => <AppleLogo />}
          style={styles.iconStyle}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: getMScale(327),
    marginTop: getVerticalScale(10),
    paddingVertical: getVerticalScale(20),
  },
  iconStyle: {
    width: getMScale(50),
    height: getMScale(50),
    borderRadius: 30,
    marginHorizontal: getMScale(13),
  },
});
export default SocialAuthOptions;
