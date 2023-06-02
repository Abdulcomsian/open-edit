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
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import {images} from '../../assets';
import CalendarIconSmall from '../../assets/svgs/CalendarIconSmall';
import GoalIcon from '../../assets/svgs/GoalIcon';

const folders = [
  {
    id: 1,
    name: 'New Folder',
    type: 'new',
    items: [
      {
        id: '21',
        fileType: 'video',
        fileName: 'My Video',
      },
      {
        id: '212',
        fileType: 'image',
        fileName: 'My Image',
      },
      {
        id: '221',
        fileType: 'video',
        fileName: 'My Video',
      },
    ],
  },
];
const jobsPosted = [
  {
    id: '21',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 20,
    start: dayjs(new Date()),
    end: dayjs(new Date()).add(8, 'days'),
  },
  {
    id: '22',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 30,
    start: dayjs(new Date()),
    end: dayjs(new Date()).add(8, 'days'),
  },
  {
    id: '23',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 10,
    start: dayjs(new Date()),
    end: dayjs(new Date()).add(8, 'days'),
  },
  {
    id: '24',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 50,
    start: dayjs(new Date()),
    end: dayjs(new Date()).add(8, 'days'),
  },
];
const HomeScreen = () => {
  const [foldersData, setFoldersData] = useState(folders);
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const [searchValue, setSearchVal] = useState('');

  const showDialog = useCallback(() => setIsVisibleDialog(true), []);
  const closeDialog = useCallback(() => setIsVisibleDialog(false), []);

  const onAddNewFolder = name => {
    closeDialog();
    const dummyItem = {
      id: new Date(),
      name,
      type: 'new',
      items: [],
    };
    setFoldersData(prevState => [dummyItem, ...prevState]);
  };
  const renderFolderItems = ({item, index}) => {
    const {name, items, createdDate = new Date(), type} = item || {};
    return (
      <Touchable style={styles.itemParent}>
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
            {dayjs(createdDate).format('DD.MM.YYYY')} - {items.length} Items
          </TextComponent>
        </View>
        <ChevronForward />
      </Touchable>
    );
  };

  const renderJobsPosted = (item, index) => {
    const {id, price, description, start, end} = item || {};
    return (
      <View key={String(id)} style={styles.jobItemParent}>
        <View style={styles.profileAndPriceView}>
          <ImageComponent
            source={images.dummy_profile}
            style={styles.profileIcon}
          />
          <TextComponent font={'bold'} style={styles.priceText}>
            ${price}
          </TextComponent>
        </View>
        <TextComponent font={'semiBold'} style={styles.jobDescriptionText}>
          {description}
        </TextComponent>
        <View style={styles.jobDurationView}>
          <View style={styles.jobDurationPortion}>
            <CalendarIconSmall />
            <TextComponent style={styles.jobStartText}>
              Start:{' '}
              <TextComponent style={styles.jobStartTime}>
                {dayjs(start).format('DD MMM')}
              </TextComponent>
            </TextComponent>
          </View>
          <View style={styles.jobDurationPortion}>
            <GoalIcon />
            <TextComponent style={styles.jobStartText}>
              End:{' '}
              <TextComponent style={styles.jobStartTime}>
                {dayjs(end).format('DD MMM')}
              </TextComponent>
            </TextComponent>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.activeProgress} />
        </View>
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <View>
        <TextComponent font={'semiBold'} style={styles.listHeaderText}>
          {strings.jobs_posted}
        </TextComponent>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{flex: 1, paddingVertical: 20, paddingStart: 10}}>
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
        <Touchable
          onPress={showDialog}
          style={{
            position: 'absolute',
            right: 10,
            bottom: 20,
            zIndex: 22,
          }}>
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
