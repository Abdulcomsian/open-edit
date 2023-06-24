import Video from 'react-native-video';
import {View} from 'react-native';
import {colors} from '../../utils/theme';
import TextComponent from '../TextComponent/TextComponent';
import {getFontSize} from '../../utils/metrics';
import Touchable from '../Touchable/Touchable';

const VideoThumbnail = ({video, style, onPress}) => {
  return (
    <Touchable
      onPress={onPress}
      activeOpacity={1}
      style={[{width: 57, height: 57, borderRadius: 10}, style]}>
      <Video
        source={{uri: video?.path}} // Can be a URL or a local file.
        resizeMode={'cover'}
        paused={true}
        ref={ref => {
          this.player = ref;
        }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
          overflow: 'hidden',
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          borderRadius: 15,
          start: 5,
          backgroundColor: colors.black50,
        }}>
        <TextComponent
          style={{
            color: colors.white,
            paddingHorizontal: 5,
            fontSize: getFontSize(10),
          }}>
          {new Date(video?.duration).toISOString().slice(14, 19)}
        </TextComponent>
      </View>
    </Touchable>
  );
};

export default VideoThumbnail;
