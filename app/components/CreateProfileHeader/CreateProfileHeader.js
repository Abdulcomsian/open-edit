import {logToConsole} from '../../configs/ReactotronConfig';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import {
  getFontSize,
  getMScale,
  getSafeAreaPadding,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import TextComponent from '../TextComponent/TextComponent';
import Touchable from '../Touchable/Touchable';
import ProfileIcon from '../../assets/svgs/ProfileIcon';
import {colors} from '../../utils/theme';

const CreateProfileHeader = ({route}) => {
  const {signupSteps, activeStep} = route.params || {};

  const {name} = route || {};
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.parent, {paddingTop: getSafeAreaPadding(top)}]}>
      <TextComponent font={'semiBold'} style={styles.title}>
        {name}
      </TextComponent>
      <View style={[styles.profileIconView, {top: getSafeAreaPadding(top)}]}>
        <ProfileIcon />
      </View>
      <View style={styles.stepsView}>
        {signupSteps?.map((item, index) => (
          <View
            key={item.id}
            style={{
              width: SCREEN_WIDTH / signupSteps.length - 15,
              height: 6,
              borderRadius: 30,
              backgroundColor:
                index <= activeStep ? colors.primary : '#C4C4C480',
            }}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    width: SCREEN_WIDTH,
    paddingHorizontal: getMScale(15),
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  title: {fontSize: getFontSize(20)},
  profileIconView: {
    position: 'absolute',
    start: 20,
  },
  stepsView: {
    marginTop: getVerticalScale(20),
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default CreateProfileHeader;
