import React from 'react';
import {FlatList, ScrollView, TextInput, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import Touchable from '../../components/Touchable/Touchable';
import GalleryViewIcon from '../../assets/svgs/GalleryViewIcon';
import FolderIcon from '../../assets/svgs/FolderIcon';
import {colors} from '../../utils/theme';
import dayjs from 'dayjs';
import ChevronForward from '../../assets/svgs/ChevronForwards';
import strings from '../../constants/strings';
import EmptyListAddIcon from '../../assets/svgs/EmptyListAddIcon';
import SearchIcon from '../../assets/svgs/SearchIcon';
import {useCallback, useState} from 'react';
import FloatingAddIcon from '../../assets/svgs/AddIcon';
import styles from './styles';
import CreateFolderDialog from './CreateFolderDialog';
import {navigateTo} from '../../utils/navigationUtils';
import screens from '../../constants/screens';
import {useDispatch} from 'react-redux';
import {createFolder, deleteFolder} from '../../redux/foldersSlice';
import useFoldersSelector from '../../redux/selectorHooks/useFoldersSelector';
import useJobSelector from '../../redux/selectorHooks/useJobSelector';
import JobsItemCard from '../../components/JobsItemCard/JobsItemCard';

const HomeScreen = () => {
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const [searchValue, setSearchVal] = useState('');

  const showDialog = useCallback(() => setIsVisibleDialog(true), []);
  const closeDialog = useCallback(() => setIsVisibleDialog(false), []);

  const dispatch = useDispatch();
  const {folders: foldersData} = useFoldersSelector();
  const {jobsPosted} = useJobSelector();

  const onAddNewFolder = name => {
    closeDialog();
    const dummyItem = {
      id: new Date().getTime(),
      name,
      type: 'new',
      media: [],
    };
    dispatch(createFolder({...dummyItem}));
  };
  const renderFolderItems = ({item}) => {
    const {id, name, media, createdDate = new Date(), type} = item || {};
    return (
      <Touchable
        style={styles.itemParent}
        onPress={() =>
          navigateTo(screens.FOLDERS_STACK, {
            screen: screens.FOLDER_DETAIL,
            params: {folder: item},
          })
        }
        onLongPress={() => dispatch(deleteFolder(id))}>
        <FolderIcon />
        <View style={styles.nameDescriptionView}>
          <View style={styles.nameView}>
            <TextComponent style={styles.nameText}>{name}</TextComponent>
            {type === 'new' ? (
              <View style={styles.newIndicatorView}>
                <TextComponent style={styles.newText} text={strings.new} />
              </View>
            ) : null}
          </View>
          <TextComponent style={styles.dateAndItemsCount}>
            {dayjs(createdDate).format('DD.MM.YYYY')} - {media?.length} Items
          </TextComponent>
        </View>
        <ChevronForward />
      </Touchable>
    );
  };

  const renderJobsPosted = item => {
    return <JobsItemCard item={item} key={item.id} />;
  };

  const renderListHeader = () => {
    return (
      <View>
        {jobsPosted.length > 0 ? (
          <TextComponent font={'semiBold'} style={styles.listHeaderText}>
            {strings.jobs_posted}
          </TextComponent>
        ) : null}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScrollStyle}>
          {jobsPosted.map(renderJobsPosted)}
        </ScrollView>
        <View style={styles.listHeaderParent}>
          <TextComponent font={'semiBold'} style={styles.listHeaderText}>
            {strings.your_folders}
          </TextComponent>
          <Touchable>
            <GalleryViewIcon />
          </Touchable>
        </View>
      </View>
    );
  };

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparatorView} />;
  };
  const renderListEmptyComponent = () => {
    return (
      <Touchable onPress={showDialog} style={styles.listEmptyParent}>
        <EmptyListAddIcon />
        <TextComponent style={styles.emptyListDescription}>
          {strings.home_empty_list}
        </TextComponent>
      </Touchable>
    );
  };

  const renderAddFolderDialog = () => {
    return (
      <CreateFolderDialog
        isVisible={isVisibleDialog}
        onClose={closeDialog}
        onCancelPress={closeDialog}
        onConfirmPress={onAddNewFolder}
      />
    );
  };

  const renderFloatingIcon = () => {
    if (foldersData.length > 0) {
      return (
        <Touchable onPress={showDialog} style={styles.floatingAddButton}>
          <FloatingAddIcon />
        </Touchable>
      );
    }
    return null;
  };
  return (
    <View style={styles.parent}>
      <View style={styles.searchBarView}>
        <SearchIcon />
        <TextInput
          placeholder={'Search'}
          placeholderTextColor={colors.black50}
          style={styles.searchInput}
          value={searchValue}
          onChangeText={setSearchVal}
          returnKeyLabel={strings.search}
        />
      </View>
      <FlatList
        data={foldersData}
        showsVerticalScrollIndicator={false}
        renderItem={renderFolderItems}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={renderItemSeparator}
        ListEmptyComponent={renderListEmptyComponent}
        keyExtractor={item => String(item.id)}
      />
      {renderAddFolderDialog()}
      {renderFloatingIcon()}
    </View>
  );
};
export default HomeScreen;
