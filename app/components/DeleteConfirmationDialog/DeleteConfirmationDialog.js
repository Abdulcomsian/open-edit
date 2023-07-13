import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import DeleteDialogIcon from '../../assets/svgs/DeleteDialogIcon';
import TextComponent from '../TextComponent/TextComponent';
import Button from '../Button/Button';
import {FONTS} from '../../utils/fonts';
import Dialog from '../Dialog/DialogComponent';

const DeleteConfirmationDialog = ({isVisible, onCancel, onConfirm}) => {
  return (
    <Dialog isVisible={isVisible} onClose={onCancel}>
      <View style={styles.parent}>
        <DeleteDialogIcon />
        <TextComponent font={'semiBold'} style={styles.message}>
          Do you want to delete?
        </TextComponent>
        <View style={styles.buttonContainer}>
          <Button
            title={'Delete'}
            onPress={onConfirm}
            titleStyle={styles.deleteButtonTitle}
            style={styles.deleteButton}
          />
          <Button
            title={'Cancel'}
            onPress={onCancel}
            titleStyle={styles.cancelButtonText}
            style={styles.cancelButton}
          />
        </View>
      </View>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: getVerticalScale(20),
    marginHorizontal: getMScale(10),
    alignItems: 'center',
  },
  message: {
    marginTop: getVerticalScale(10),
    fontSize: getFontSize(16),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getVerticalScale(18),
    width: '80%',
  },
  deleteButton: {width: getMScale(120), height: getVerticalScale(42)},
  cancelButton: {
    width: getMScale(120),
    height: getVerticalScale(42),
    backgroundColor: '#F1F1F1',
  },
  deleteButtonTitle: {fontFamily: FONTS.REGULAR},
  cancelButtonText: {fontFamily: FONTS.REGULAR, color: colors.black},
});
export default DeleteConfirmationDialog;
