import {FlatList, StyleSheet, View} from 'react-native';
import AddMedia from '../../assets/svgs/AddMedia';
import TextComponent from '../../components/TextComponent/TextComponent';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {colors} from '../../utils/theme';
import strings from '../../constants/strings';
import Touchable from '../../components/Touchable/Touchable';
import {useCallback, useState} from 'react';
import MediaSourceDialog from '../../components/SelectMediaSourceDialog/MediaSourceDialog';
import MediaCard from './MediaCard';

const AllTab = ({currentFolder, onDeleteItemPress}) => {
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);

  const {media: allMedia = [], id} = currentFolder || {};

  const showDialog = useCallback(() => setIsVisibleDialog(true), []);
  const closeDialog = useCallback(() => setIsVisibleDialog(false), []);

  const renderSourceDialog = () => {
    return (
      <MediaSourceDialog
        isVisible={isVisibleDialog}
        onClose={closeDialog}
        folderId={id}
      />
    );
  };

  const renderMediaItems = ({item}) => {
    return <MediaCard item={item} onDeletePress={onDeleteItemPress} />;
  };

  return (
    <View style={styles.parent}>
      <FlatList
        data={allMedia}
        ListHeaderComponent={() => (
          <Touchable style={styles.addMediaView} onPress={showDialog}>
            <AddMedia />
            <TextComponent font={'semiBold'} style={styles.addMediaText}>
              {strings.add_media}
            </TextComponent>
          </Touchable>
        )}
        style={{flexGrow: 1}}
        contentContainerStyle={{paddingBottom: 150}}
        showsVerticalScrollIndicator={false}
        renderItem={renderMediaItems}
        keyExtractor={item => String(item.id)}
      />
      {renderSourceDialog()}
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
export default AllTab;
