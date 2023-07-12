import React from 'react';
import {View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import {useRoute} from '@react-navigation/native';
import useFoldersSelector from '../../redux/selectorHooks/useFoldersSelector';
import {getVerticalScale} from '../../utils/metrics';
import Touchable from '../../components/Touchable/Touchable';
import dayjs from 'dayjs';
import SkillsItem from '../../components/SkillsItemCard/SkillsItem';
import Button from '../../components/Button/Button';
import strings from '../../constants/strings';
import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {createJob} from '../../redux/jobsPostedSlice';
import {navigateTo} from '../../utils/navigationUtils';
import screens from '../../constants/screens';
import styles from './styles';
import ConfirmationDialog from './ConfirmationDialog';

const ReviewDetailsScreen = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);

  const route = useRoute();
  const {jobData = {}} = route.params || {};

  const {folderId, title, description, price, deadline, selectedSkills} =
    jobData || {};
  const {getFolderById} = useFoldersSelector();

  const folder = getFolderById(folderId);
  const {name, media = []} = folder || {};

  const showDialog = useCallback(() => setVisibleDialog(true), []);
  const hideDialog = useCallback(() => setVisibleDialog(false), []);
  const dispatch = useDispatch();

  const handlePostJob = () => {
    const data = {
      id: new Date().getTime(),
      title,
      description,
      price,
      skills: selectedSkills,
      deadline,
      media,
    };
    dispatch(createJob(data));
    showDialog();
  };
  const renderConfirmationDialog = () => {
    return (
      <ConfirmationDialog
        isVisible={visibleDialog}
        closeDialog={hideDialog}
        onConfirmPress={() => {
          hideDialog();
          navigateTo('App', {screen: screens.HOME_STACK});
        }}
      />
    );
  };
  return (
    <View style={styles.parent}>
      <View style={styles.folderDetailsView}>
        <View>
          <TextComponent font={'bold'} style={styles.folderName}>
            {name}
          </TextComponent>
          <TextComponent style={styles.folderItems}>
            {media?.length} Items
          </TextComponent>
        </View>
        <Touchable>
          <TextComponent font={'medium'} style={styles.viewText}>
            View
          </TextComponent>
        </Touchable>
      </View>
      <View style={styles.jobDetailsView}>
        <TextComponent font={'bold'}>{title}</TextComponent>
        <TextComponent style={styles.descriptionText}>
          {description}
        </TextComponent>
        <View style={styles.budgetInfoView}>
          <TextComponent font={'medium'} style={styles.budgetText}>
            {strings.budget}
          </TextComponent>
          <TextComponent>${price}</TextComponent>
        </View>
        <View style={{marginTop: getVerticalScale(15)}}>
          <TextComponent font={'medium'} style={styles.budgetText}>
            {strings.deadline}
          </TextComponent>
          <TextComponent>{dayjs(deadline).format('DD/MM/YYYY')}</TextComponent>
        </View>
        <View style={styles.skillsView}>
          {selectedSkills.map(item => (
            <SkillsItem key={item.id} skill={item} isSelected />
          ))}
        </View>
      </View>
      <View style={styles.bottomButton}>
        <Button title={strings.post_job} onPress={handlePostJob} />
      </View>
      {renderConfirmationDialog()}
    </View>
  );
};
export default ReviewDetailsScreen;
