import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils/theme';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import TextComponent from '../TextComponent/TextComponent';
import CameraIcon from '../../assets/svgs/CameraIcon';
import OpenGalleryIcon from '../../assets/svgs/OpenGalleryIcon';
import Dialog from '../Dialog/DialogComponent';
import Touchable from '../Touchable/Touchable';
import strings from '../../constants/strings';
import ImageCropPicker from 'react-native-image-crop-picker';
import {logToConsole} from '../../configs/ReactotronConfig';
import {useDispatch} from 'react-redux';
import {addMediaToFolder} from '../../redux/foldersSlice';

const MediaSourceDialog = ({isVisible, onClose, onSelectMedia, folderId}) => {
  const dispatch = useDispatch();

  const handleMediaSelection = async method => {
    await method({})
      .then(res => {
        onClose?.();
        const mediaItem = {
          id: new Date().getTime(),
          name: res?.filename || 'File',
          type: res?.mime === 'image/jpeg' ? 'image' : 'video',
          path: res?.path,
          duration: res?.duration,
        };
        const payload = {
          folderId,
          media: mediaItem,
        };
        dispatch(addMediaToFolder(payload));
        logToConsole({res});
      })
      .catch(e => {
        onClose?.();
        logToConsole({e: e.message});
      });
  };
  return (
    <Dialog isVisible={isVisible}>
      <View style={styles.parent}>
        <TextComponent font={'semiBold'} style={styles.title}>
          {strings.select_source}
        </TextComponent>
        <View style={styles.iconsView}>
          <Touchable
            style={styles.singleSideIconView}
            onPress={() => handleMediaSelection(ImageCropPicker.openCamera)}>
            <CameraIcon />
            <TextComponent style={styles.iconDescriptionText}>
              {strings.camera}
            </TextComponent>
          </Touchable>
          <Touchable
            style={styles.singleSideIconView}
            onPress={() => handleMediaSelection(ImageCropPicker.openPicker)}>
            <OpenGalleryIcon />
            <TextComponent style={styles.iconDescriptionText}>
              {strings.gallery}
            </TextComponent>
          </Touchable>
        </View>
      </View>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: getMScale(50),
    paddingVertical: getVerticalScale(10),
    borderRadius: 8,
    alignSelf: 'center',
    width: getMScale(260),
  },
  title: {fontSize: getFontSize(14)},
  iconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: getVerticalScale(20),
  },
  singleSideIconView: {alignItems: 'center'},
  iconDescriptionText: {
    marginTop: getVerticalScale(12),
    fontSize: getFontSize(12),
    color: colors.black,
  },
});
export default MediaSourceDialog;
