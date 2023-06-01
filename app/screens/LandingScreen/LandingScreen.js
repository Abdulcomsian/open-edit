import {View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import Button from '../../components/Button/Button';
import styles from './styles';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import {images} from '../../assets';
import strings from '../../constants/strings';
import {colors} from '../../utils/theme';
import Touchable from '../../components/Touchable/Touchable';
import {navigateTo} from '../../utils/navigationUtils';
import screens from '../../constants/screens';

const LandingScreen = () => {
  const navigateToAuthScreen = (userType, activeIndex) => {
    navigateTo(screens.AUTH_SCREEN, {userType, activeIndex});
  };

  return (
    <View style={styles.parent}>
      <ImageComponent source={images.landing_image} style={styles.mainImage} />
      <TextComponent font={'bold'} style={styles.titleText}>
        {strings.welcome}
      </TextComponent>
      <TextComponent style={styles.getStartedText}>
        {strings.get_started}
      </TextComponent>
      <Button
        title={strings.i_am_client}
        variant={'outlined'}
        style={styles.clientButton}
        onPress={() => navigateToAuthScreen('client', 0)}
      />
      <Button
        title={strings.i_am_editor}
        backgroundColor={colors.white}
        titleColor={colors.primary}
        style={styles.button}
        onPress={() => navigateToAuthScreen('editor', 0)}
      />
      <Touchable style={styles.alreadyMemberView}>
        <TextComponent
          text={strings.already_member}
          font={'medium'}
          onPress={() => navigateToAuthScreen('client', 1)}
          style={styles.alreadyMemberText}
        />
      </Touchable>
    </View>
  );
};

export default LandingScreen;
