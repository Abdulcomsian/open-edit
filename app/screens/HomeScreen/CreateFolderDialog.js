import {View} from 'react-native';
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

  return (
    <Dialog isVisible={isVisible} onClose={onClose}>
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: colors.white,
          alignItems: 'center',
          borderRadius: 20,
        }}>
        <TextComponent
          font={'semiBold'}
          style={{marginTop: getVerticalScale(20)}}>
          {strings.create_folder}
        </TextComponent>
        <InputComponent
          label={strings.enter_folder_name}
          placeholder={strings.enter_folder_name}
          value={folderName}
          onChangeText={setFolderName}
          containerStyle={{
            marginTop: getVerticalScale(30),
            paddingHorizontal: 10,
          }}
        />
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: colors.border,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: getVerticalScale(40),
          }}>
          <Touchable
            onPress={onCancelPress}
            style={{
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: getVerticalScale(11),
            }}>
            <TextComponent text={'Cancel'} style={{color: colors.black}} />
          </Touchable>
          <View
            style={{height: '100%', width: 1, backgroundColor: colors.border}}
          />
          <Touchable
            onPress={() => onConfirmPress(folderName)}
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: getVerticalScale(11),
            }}>
            <TextComponent
              font={'semiBold'}
              style={{color: colors.primary}}
              text={'Save'}
            />
          </Touchable>
        </View>
      </View>
    </Dialog>
  );
};
export default CreateFolderDialog;
