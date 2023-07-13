import {View} from 'react-native';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import Video from 'react-native-video';
import {colors} from '../../utils/theme';
import TextComponent from '../../components/TextComponent/TextComponent';
import Touchable from '../../components/Touchable/Touchable';
import CrossIcon from '../../assets/svgs/CrossIcon';
import {useState} from 'react';
import Dialog from "../../components/Dialog/DialogComponent";

const MediaCard = ({item, onDeletePress}) => {
  const {path, name, type, duration} = item || {};

  const getTypeText = type => {
    switch (type) {
      case 'video':
        return 'Video';
      case 'image':
        return 'Image';
      case 'text':
        return 'Text';
      case 'audio':
        return 'Audio';
      default:
        return '';
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getVerticalScale(10),
      }}>
      <View style={{width: 57, height: 57, borderRadius: 10}}>
        {type === 'image' ? (
          <ImageComponent
            source={{uri: path}}
            resizeMode={'cover'}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              overflow: 'hidden',
            }}
          />
        ) : type === 'video' ? (
          <Video
            source={{uri: path}} // Can be a URL or a local file.
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
        ) : null}
        {type === 'video' ? (
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
              {new Date(duration).toISOString().slice(14, 19)}
            </TextComponent>
          </View>
        ) : null}
      </View>
      <View style={{marginStart: getMScale(15), width: '70%'}}>
        <TextComponent font={'semiBold'} style={{fontSize: getFontSize(16)}}>
          {name}
        </TextComponent>
        <TextComponent
          style={{fontSize: getFontSize(14), color: colors.textSecondary}}>
          {getTypeText(type)}
        </TextComponent>
      </View>
      <Touchable onPress={() => onDeletePress(item.id)}>
        <CrossIcon />
      </Touchable>
    </View>
  );
};
export default MediaCard;
