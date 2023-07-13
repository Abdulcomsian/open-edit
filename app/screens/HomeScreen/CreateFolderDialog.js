import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils/theme';
import TextComponent from '../../components/TextComponent/TextComponent';
import {getVerticalScale} from '../../utils/metrics';
import strings from '../../constants/strings';
import InputComponent from '../../components/InputComponent/InputComponent';
import Touchable from '../../components/Touchable/Touchable';
import Dialog from '../../components/Dialog/DialogComponent';
import {useState} from 'react';

const CreateFolderDialog = ({
  isVisible,
  onClose,
  onConfirmPress,
  onCancelPress,
}) => {
  const [folderName, setFolderName] = useState('');

  const handleConfirmPress = () => {
    setFolderName('');
    onConfirmPress?.(folderName);
  };

  const handleCancelPress = () => {
    setFolderName('');
    onCancelPress?.();
  };
  return (
    <Dialog isVisible={isVisible} onClose={onClose}>
      <View style={styles.parent}>
        <TextComponent font={'semiBold'} style={styles.title}>
          {strings.create_folder}
        </TextComponent>
        <InputComponent
          label={strings.enter_folder_name}
          placeholder={strings.enter_folder_name}
          value={folderName}
          onChangeText={setFolderName}
          containerStyle={styles.inputContainer}
        />
        <View style={styles.buttonsView}>
          <Touchable onPress={handleCancelPress} style={styles.singleButton}>
            <TextComponent text={'Cancel'} style={{color: colors.black}} />
          </Touchable>
          <View style={styles.verticalLine} />
          <Touchable onPress={handleConfirmPress} style={styles.rightButton}>
            <TextComponent
              font={'semiBold'}
              style={styles.confirmButtontitle}
              text={'Save'}
            />
          </Touchable>
        </View>
      </View>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {marginTop: getVerticalScale(20)},
  inputContainer: {
    marginTop: getVerticalScale(30),
    paddingHorizontal: 10,
  },
  buttonsView: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getVerticalScale(40),
  },
  singleButton: {
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: getVerticalScale(11),
  },
  verticalLine: {height: '100%', width: 1, backgroundColor: colors.border},
  rightButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: getVerticalScale(11),
  },
  confirmButtontitle: {color: colors.primary},
});
export default CreateFolderDialog;
