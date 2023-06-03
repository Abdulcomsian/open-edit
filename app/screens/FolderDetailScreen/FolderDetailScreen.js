import {Animated, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import styles from './styles';
import FolderIconLarge from '../../assets/svgs/FolderIconLarge';
import dayjs from 'dayjs';
import {getFontSize, getVerticalScale, SCREEN_WIDTH} from '../../utils/metrics';
import {useEffect, useRef, useState} from 'react';
import {colors} from '../../utils/theme';
import Touchable from '../../components/Touchable/Touchable';
import TabIndicator from './TabIndicator';
import AllTab from './AllTab';
import Button from '../../components/Button/Button';
import strings from '../../constants/strings';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useFoldersSelector from '../../redux/selectorHooks/useFoldersSelector';
import { goBack, navigateTo } from "../../utils/navigationUtils";
import VideosTab from './VideosTab';
import ImagesTab from './ImagesTab';
import TextsTab from './TextsTab';
import AudiosTab from './AudiosTab';
import {useDispatch} from 'react-redux';
import {deleteMediaFromFolder} from '../../redux/foldersSlice';
import DeleteConfirmationDialog from '../../components/DeleteConfirmationDialog/DeleteConfirmationDialog';
import screens from "../../constants/screens";

const tabOptions = [
  {
    id: '1',
    title: 'All',
    type: 'all',
  },
  {
    id: '2',
    title: 'Videos',
    type: 'video',
  },
  {
    id: '3',
    title: 'Audios',
    type: 'audio',
  },
  {
    id: '4',
    title: 'Images',
    type: 'image',
  },
  {
    id: '5',
    title: 'Txt',
    type: 'text',
  },
];
const FolderDetailScreen = ({route}) => {
  const {folder} = route.params || {};
  const {id, name = '', items = [], createdAt = new Date()} = folder || {};
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleDeleteDialog, setVisibleDeleteDialog] = useState(false);

  const itemToDeleteRef = useRef(null);

  const openDeleteDialog = () => setVisibleDeleteDialog(true);
  const closeDeleteDialog = () => setVisibleDeleteDialog(false);

  const {getFolderById} = useFoldersSelector();
  const dispatch = useDispatch();

  const currentFolder = getFolderById(id);

  const flatListRef = useRef();

  useEffect(() => {
    if (!currentFolder) {
      goBack();
    }
  }, [currentFolder]);

  const handleDeletePress = id => {
    itemToDeleteRef.current = id;
    openDeleteDialog();
  };

  const onDeleteConfirm = () => {
    closeDeleteDialog();
    dispatch(
      deleteMediaFromFolder({
        folderId: id,
        mediaId: itemToDeleteRef.current,
      }),
    );
  };
  const onTabPress = index => {
    setActiveIndex(index);
    flatListRef.current?.scrollToIndex({index, animated: true});
  };
  const {bottom} = useSafeAreaInsets();
  const renderTabs = () => {
    return (
      <View style={styles.topTabsContainer}>
        {tabOptions.map((item, index) => {
          return (
            <Touchable
              key={String(item.id)}
              onPress={() => onTabPress(index)}
              style={styles.tabItem}>
              <TextComponent
                font={'semiBold'}
                style={{
                  color:
                    index === activeIndex
                      ? colors.primary
                      : colors.textSecondary,
                  fontSize: getFontSize(14),
                }}>
                {item.title}
              </TextComponent>
            </Touchable>
          );
        })}
        <TabIndicator activeTab={activeIndex} />
      </View>
    );
  };

  const renderPages = type => {
    if (type === 'all') {
      return (
        <AllTab
          currentFolder={currentFolder}
          onDeleteItemPress={handleDeletePress}
        />
      );
    }
    if (type === 'video') {
      return (
        <VideosTab
          currentFolder={currentFolder}
          onDeleteItemPress={handleDeletePress}
        />
      );
    }
    if (type === 'image') {
      return (
        <ImagesTab
          currentFolder={currentFolder}
          onDeleteItemPress={handleDeletePress}
        />
      );
    }
    if (type === 'text') {
      return (
        <TextsTab
          currentFolder={currentFolder}
          onDeleteItemPress={handleDeletePress}
        />
      );
    }
    if (type === 'audio') {
      return (
        <AudiosTab
          currentFolder={currentFolder}
          onDeleteItemPress={handleDeletePress}
        />
      );
    }
    return null;
  };
  const renderTabContent = () => {
    return (
      <Animated.FlatList
        ref={flatListRef}
        scrollEnabled={false}
        data={tabOptions}
        extraData={activeIndex}
        keyExtractor={(item, index) => String(item.key || index)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyboardShouldPersistTaps={'handled'}
        bounces={false}
        horizontal
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, backgroundColor: colors.white}}
        decelerationRate={'fast'}
        scrollEventThrottle={32}
        renderItem={({item, index}) => {
          const {type} = item || {};
          return (
            <View
              style={{
                width: SCREEN_WIDTH - 20,
                flex: 1,
                alignItems: 'center',
              }}>
              {renderPages(type)}
            </View>
          );
        }}
      />
    );
  };

  const renderDeleteConfirmationDialog = () => {
    return (
      <DeleteConfirmationDialog
        isVisible={visibleDeleteDialog}
        onCancel={closeDeleteDialog}
        onConfirm={onDeleteConfirm}
      />
    );
  };
  return (
    <View style={styles.parent}>
      <View style={styles.folderInfo}>
        <FolderIconLarge />
        <View style={styles.folderMetaView}>
          <TextComponent font={'bold'} style={styles.folderName}>
            {name}
          </TextComponent>
          <TextComponent style={styles.folderDateAndItems}>
            {dayjs(createdAt).format('DD.MM.YYYY')} - {items.length} Items
          </TextComponent>
        </View>
      </View>
      <TextComponent
        style={{marginTop: getVerticalScale(30)}}
        font={'semiBold'}>
        Media Files
      </TextComponent>
      {renderTabs()}
      <View style={styles.tabsContentParent}>{renderTabContent()}</View>
      <View style={[styles.bottomView, {paddingBottom: bottom + 10}]}>
        <Button
          title={strings.post_job}
          onPress={() => navigateTo(screens.POST_JOB)}
          disabled={currentFolder?.media?.length === 0}
        />
      </View>
      {renderDeleteConfirmationDialog()}
    </View>
  );
};

export default FolderDetailScreen;
