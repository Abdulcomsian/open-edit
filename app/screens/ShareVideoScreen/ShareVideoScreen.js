import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import {colors} from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import ShareVideoModal from './ShareVideoModal';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';
import {logToConsole} from '../../configs/ReactotronConfig';
import {getMScale} from '../../utils/metrics';
import { navigateTo } from "../../utils/navigationUtils";
import screens from "../../constants/screens";

const ShareVideoScreen = () => {
  const [sharedVideos, setSharedVideos] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const showModal = useCallback(() => setIsVisibleModal(true), []);
  const hideModal = useCallback(() => setIsVisibleModal(false), []);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setParams({title: 'Shared Videos', onRightIconPress: showModal});
  }, [navigation, showModal]);

  const handleShareVideoFromModal = (video, comment) => {
    let videoObj = video;
    if (comment) {
      videoObj.comments = [
        {
          id: '1',
          text: comment,
        },
      ];
    }
    setSharedVideos(prevState => [...prevState, videoObj]);
    hideModal();
  };
  const renderShareVideoModal = () => {
    return (
      <ShareVideoModal
        isVisible={isVisibleModal}
        onClose={hideModal}
        onShareVideoPress={handleShareVideoFromModal}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: getMScale(15),
      }}>
      <FlatList
        data={sharedVideos}
        numColumns={3}
        renderItem={({item}) => (
          <VideoThumbnail
            onPress={() => navigateTo(screens.VIDEO, {video: item})}
            video={item}
            style={{
              height: 96,
              width: 96,
              borderRadius: 8,
              marginEnd: getMScale(10),
              marginBottom: getMScale(10),
            }}
          />
        )}
        keyExtractor={(_, index) => String(index)}
      />
      {renderShareVideoModal()}
    </View>
  );
};
export default ShareVideoScreen;
