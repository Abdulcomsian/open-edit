import {FlatList, StyleSheet, View} from 'react-native';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {colors} from '../../utils/theme';
import MediaCard from './MediaCard';

const VideosTab = ({currentFolder, onDeleteItemPress}) => {
  const {media: allMedia = []} = currentFolder || {};
  const images = allMedia.filter(item => item.type === 'image');

  const renderMediaItems = ({item}) => {
    return <MediaCard item={item} onDeletePress={onDeleteItemPress} />;
  };

  return (
    <View style={styles.parent}>
      <FlatList
        data={images}
        renderItem={renderMediaItems}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    paddingTop: getVerticalScale(10),
  },
  addMediaView: {flexDirection: 'row', alignItems: 'center'},
  addMediaText: {
    fontSize: getFontSize(14),
    marginStart: getMScale(15),
    color: colors.primaryBlue,
  },
});
export default VideosTab;
