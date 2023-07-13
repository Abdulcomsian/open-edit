import {Modal, StyleSheet, View} from 'react-native';
import {colors} from '../../utils/theme';
import {
  getFontSize,
  getMScale,
  getSafeAreaPadding,
  getScale,
  getVerticalScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import TextComponent from '../../components/TextComponent/TextComponent';
import Touchable from '../../components/Touchable/Touchable';
import ChevronLeft from '../../assets/svgs/ChevronLeft';
import Button from '../../components/Button/Button';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AddCircleBlue from '../../assets/svgs/AddCircleBlue';
import ImageCropPicker from 'react-native-image-crop-picker';
import {logToConsole} from '../../configs/ReactotronConfig';
import InputComponent from '../../components/InputComponent/InputComponent';
import KeyboardAwareScroll from '../../components/KeyboardAwareScrollComponent/KeyboardAwareScroll';
import VideoPlayer from 'react-native-video-controls';

const ShareVideoModal = ({isVisible, onClose, onShareVideoPress}) => {
  const {top, bottom} = useSafeAreaInsets();

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comment, setComment] = useState('');

  const openVideoPicker = () => {
    ImageCropPicker.openPicker({mediaType: 'video'})
      .then(result => {
        setSelectedVideo(result);
      })
      .catch(e => {
        console.warn(e.message);
        logToConsole({openVideoPickerError: e.message});
      });
  };
  const renderHeader = () => {
    return (
      <View
        style={[styles.headerParent, {paddingTop: getSafeAreaPadding(top)}]}>
        <TextComponent font={'semiBold'} style={styles.headerTitle}>
          Share Video
        </TextComponent>
        <Touchable
          onPress={onClose}
          style={[styles.backArrow, {top: getSafeAreaPadding(top - 5)}]}>
          <ChevronLeft />
        </Touchable>
      </View>
    );
  };

  const renderVideoPlayer = () => {
    if (selectedVideo) {
      return (
        <View>
          <VideoPlayer
            source={{uri: selectedVideo?.path}}
            style={styles.videoPlayer}
            resizeMode={'contain'}
            paused={true}
            scrubbing={1000}
            disableVolume
            disableFullscreen
            tapAnywhereToPause
            seekColor={colors.primary}
            disableBack
          />
          <InputComponent
            placeholder={'Add Comment'}
            value={comment}
            onChangeText={setComment}
            returnKeyType={'done'}
            containerStyle={styles.commentInput}
          />
        </View>
      );
    }
  };
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType={'slide'}
      statusBarTranslucent
      presentationStyle={'fullScreen'}>
      {renderHeader()}
      <KeyboardAwareScroll
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollView}>
        <View style={styles.modalBody}>
          {renderVideoPlayer()}
          <Touchable onPress={openVideoPicker} style={styles.addFileView}>
            <AddCircleBlue />
            <TextComponent style={styles.addFileText}>Add File</TextComponent>
          </Touchable>
        </View>
        <Button
          style={{position: 'absolute', bottom: bottom + 20}}
          onPress={() => {
            onShareVideoPress(selectedVideo, comment);
            setSelectedVideo(null);
            setComment('');
          }}
          title={'Share'}
        />
      </KeyboardAwareScroll>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerParent: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: getMScale(10),
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  headerTitle: {fontSize: getFontSize(20)},
  backArrow: {
    position: 'absolute',
    start: getMScale(20),
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContentContainer: {flexGrow: 1},
  modalBody: {
    marginTop: getMScale(20),
    paddingHorizontal: getMScale(15),
  },
  videoPlayer: {
    width: getScale(343),
    height: getScale(343),
    alignSelf: 'center',
  },
  commentInput: {
    marginTop: getMScale(20),
    width: getScale(343),
    alignSelf: 'center',
  },
  addFileView: {
    flexDirection: 'row',
    marginBottom: getMScale(20),
    alignItems: 'center',
  },
  addFileText: {marginStart: getMScale(16), color: colors.primaryBlue},
});
export default ShareVideoModal;
