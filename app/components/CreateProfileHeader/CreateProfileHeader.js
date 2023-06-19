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
import ProfileIcon from '../../assets/svgs/ProfileIcon';
import {colors} from '../../utils/theme';
import {logToConsole} from '../../configs/ReactotronConfig';

const CreateProfileHeader = ({route}) => {
  const {signupSteps, activeStep} = route.params || {};
  logToConsole({activeStep});
  const {name} = route || {};
  const {top} = useSafeAreaInsets();
  const isPreviewHeader = activeStep === 5;
  return (
    <View style={[styles.parent, {paddingTop: getSafeAreaPadding(top)}]}>
      <TextComponent font={'semiBold'} style={styles.title}>
        {isPreviewHeader ? 'Preview Profile' : name}
      </TextComponent>
      {!isPreviewHeader ? (
        <View style={[styles.profileIconView, {top: getSafeAreaPadding(top)}]}>
          <ProfileIcon />
        </View>
      ) : null}
      {!isPreviewHeader ? (
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
      ) : null}
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
