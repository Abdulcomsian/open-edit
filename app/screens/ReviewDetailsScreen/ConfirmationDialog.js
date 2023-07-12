import {View} from 'react-native';
import {getMScale, getVerticalScale} from '../../utils/metrics';
import {colors} from '../../utils/theme';
import ConfirmationTickIcon from '../../assets/svgs/ConfirmationTickIcon';
import TextComponent from '../../components/TextComponent/TextComponent';
import Button from '../../components/Button/Button';
import Dialog from '../../components/Dialog/DialogComponent';

const ConfirmationDialog = ({isVisible, onConfirmPress, closeDialog}) => {
  return (
    <Dialog isVisible={isVisible} onClose={closeDialog}>
      <View
        style={{
          marginHorizontal: getMScale(20),
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: getVerticalScale(40),
          backgroundColor: colors.white,
          borderRadius: 6,
        }}>
        <ConfirmationTickIcon />
        <TextComponent
          font={'semiBold'}
          style={{marginVertical: getVerticalScale(20)}}>
          Your job posted successfully
        </TextComponent>
        <Button
          variant={'outlined'}
          style={{width: 100, height: 31, borderColor: colors.primary}}
          title={'Ok'}
          titleStyle={{color: colors.primary}}
          onPress={onConfirmPress}
        />
      </View>
    </Dialog>
  );
};
export default ConfirmationDialog;
