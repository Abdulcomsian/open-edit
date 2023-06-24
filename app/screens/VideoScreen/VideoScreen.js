import {StyleSheet, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import VideoPlayer from 'react-native-video-controls';
import {colors} from '../../utils/theme';
import InputComponent from '../../components/InputComponent/InputComponent';
import React from 'react';
import {
  getFontSize,
  getMScale,
  getSafeAreaPadding,
  getScale,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import {useState} from 'react';
import KeyboardAwareScroll from '../../components/KeyboardAwareScrollComponent/KeyboardAwareScroll';
import Touchable from '../../components/Touchable/Touchable';
import ChevronLeft from '../../assets/svgs/ChevronLeft';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { goBack } from "../../utils/navigationUtils";

const VideoScreen = ({route}) => {
  const {video = {}} = route.params || {};
  const [comment, setComment] = useState('');

  const {top} = useSafeAreaInsets();
  const renderHeader = () => {
    return (
      <View
        style={[styles.headerParent, {paddingTop: getSafeAreaPadding(top)}]}>
        <TextComponent font={'semiBold'} style={styles.headerTitle}>
          Video
        </TextComponent>
        <Touchable
          onPress={goBack}
          style={[styles.backArrow, {top: getSafeAreaPadding(top - 5)}]}>
          <ChevronLeft />
        </Touchable>
      </View>
    );
  };

  return (
    <>
      {renderHeader()}
      <KeyboardAwareScroll
        contentContainerStyle={{flexGrow: 1}}
        style={{flex: 1}}>
        <View>
          <VideoPlayer
            source={{uri: video?.path}}
            style={styles.videoPlayer}
            resizeMode={'contain'}
            disableVolume
            disableFullscreen
            tapAnywhereToPause
            seekColor={colors.primary}
            disableBack
          />
          <View style={{paddingHorizontal: getMScale(15)}}>
            {video?.comments?.length > 0 ? (
              <View style={{marginTop: getVerticalScale(20)}}>
                <TextComponent font={'semiBold'}>
                  Comments{' '}
                  <TextComponent
                    font={'semiBold'}
                    style={{color: '#AAABAF'}}
                    text={`(${video?.comments?.length})`}
                  />
                </TextComponent>
                {video?.comments?.map(item => {
                  return (
                    <View key={item.id}>
                      <TextComponent style={{color: '#40577D'}}>
                        {item.text}
                      </TextComponent>
                    </View>
                  );
                })}
              </View>
            ) : null}
            <InputComponent
              placeholder={'Add Comment'}
              value={comment}
              onChangeText={setComment}
              returnKeyType={'done'}
              containerStyle={styles.commentInput}
            />
          </View>
        </View>
      </KeyboardAwareScroll>
    </>
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
  videoPlayer: {
    width: '100%',
    height: getScale(343),
    alignSelf: 'center',
  },
  commentInput: {
    marginTop: getMScale(20),
    width: getScale(343),
    alignSelf: 'center',
  },
});
export default VideoScreen;
