import {FlatList, Platform, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import SearchBar from '../../components/SearchBar/SearchBar';
import {useEffect, useState} from 'react';
import {colors} from '../../utils/theme';
import Touchable from '../../components/Touchable/Touchable';
import TuneIcon from '../../assets/svgs/TuneIcon';
import EditorJobListCard from '../../components/EditorJobListCard/EditorJobListCard';
import Dialog from '../../components/Dialog/DialogComponent';
import InputComponent from '../../components/InputComponent/InputComponent';
import Button from '../../components/Button/Button';
import ConfirmationTickIcon from '../../assets/svgs/ConfirmationTickIcon';
import styles from './styles';

const jobsAvailable = [
  {
    id: '1',
    title: 'I want to edit video for my birthday',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et.',
    price: '20',
    folderLink: 'www.google.com',
    requiredSkills: [
      {id: '1', name: 'Video Editing'},
      {id: '2', name: 'Adobe Premier Pro'},
    ],
  },
  {
    id: '2',
    title: 'I am looking for editor to edit my wedding video',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et.',
    price: '10',
    folderLink: 'www.google.com',
    requiredSkills: [
      {id: '1', name: 'Video Editing'},
      {id: '2', name: 'Adobe Premier Pro'},
    ],
  },
  {
    id: '3',
    title: 'I want to edit video for my birthday ',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et.',
    price: '15',
    folderLink: 'www.google.com',
    requiredSkills: [
      {id: '1', name: 'Video Editing'},
      {id: '2', name: 'Adobe Premier Pro'},
    ],
  },
];
const EditorHomeScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [applyDescription, setApplyDescription] = useState('');
  const [applyAmount, setApplyAmount] = useState('');

  const renderAvailableJobs = ({item}) => {
    return (
      <EditorJobListCard
        item={item}
        onApplyPress={() => setVisibleDialog(true)}
      />
    );
  };

  useEffect(() => {
    if (!visibleDialog) {
      setIsApplied(false);
      setApplyAmount('');
      setApplyDescription('');
    }
  }, [visibleDialog]);
  const jobAppliedContent = () => {
    return (
      <View
        style={{
          paddingVertical: 45,
          backgroundColor: colors.white,
          borderRadius: 16,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Touchable
          onPress={() => {
            setVisibleDialog(false);
            // setIsApplied(false);
          }}
          style={{position: 'absolute', top: 15, end: 15}}>
          <TextComponent>X</TextComponent>
        </Touchable>
        <ConfirmationTickIcon />
        <TextComponent font={'semiBold'}>Job Submitted</TextComponent>
      </View>
    );
  };
  const ApplyJobDialogContent = () => {
    return (
      <View
        style={{
          padding: 15,
          backgroundColor: colors.white,
          borderRadius: 16,
          width: '100%',
        }}>
        <View style={{alignItems: 'center'}}>
          <TextComponent font={'semiBold'}>Make An Offer</TextComponent>
        </View>
        <Touchable
          onPress={() => {
            setVisibleDialog(false);
          }}
          style={{position: 'absolute', top: 15, end: 15}}>
          <TextComponent>X</TextComponent>
        </Touchable>
        <View style={{marginTop: 25}}>
          <TextComponent
            font={'semiBold'}
            style={{color: '#56636F', fontSize: getFontSize(14)}}>
            I want to edit video for my birthday
          </TextComponent>
          <TextComponent style={{color: '#56636F', fontSize: getFontSize(14)}}>
            Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et.
          </TextComponent>
          <TextComponent
            font={'medium'}
            style={{color: colors.primary, marginTop: getVerticalScale(7)}}>
            $ 20
          </TextComponent>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#E2E8F0',
            height: 1,
            marginTop: getVerticalScale(15),
          }}
        />
        <InputComponent
          label={'Description'}
          containerStyle={{marginTop: getVerticalScale(20)}}
          multiline
          value={applyDescription}
          onChangeText={setApplyDescription}
        />
        <InputComponent
          label={'Amount'}
          containerStyle={{marginTop: getVerticalScale(20)}}
          keyboardType={'decimal-pad'}
          value={applyAmount}
          onChangeText={setApplyAmount}
        />
        <Button
          title={'Apply'}
          disabled={!applyDescription || !applyAmount}
          onPress={() => {
            if (applyAmount && applyDescription) {
              setIsApplied(true);
            }
          }}
          style={{
            marginTop: getVerticalScale(20),
            width: getMScale(140),
            height: 42,
          }}
        />
      </View>
    );
  };
  const renderDialog = () => {
    return (
      <Dialog isVisible={visibleDialog} onClose={() => setVisibleDialog(false)}>
        {isApplied ? jobAppliedContent() : <ApplyJobDialogContent />}
      </Dialog>
    );
  };
  const renderListHeader = () => {
    return (
      <View style={styles.listHeader}>
        <TextComponent font={'bold'} style={{fontSize: getFontSize(16)}}>
          Jobs
        </TextComponent>
        <Touchable>
          <TuneIcon />
        </Touchable>
      </View>
    );
  };
  return (
    <View style={styles.parent}>
      <SearchBar value={searchValue} onChangeText={setSearchValue} />
      <FlatList
        data={jobsAvailable}
        renderItem={renderAvailableJobs}
        ListHeaderComponent={renderListHeader}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
      {renderDialog()}
    </View>
  );
};

export default EditorHomeScreen;
