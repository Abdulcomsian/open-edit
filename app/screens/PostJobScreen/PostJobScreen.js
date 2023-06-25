import React from 'react';
import KeyboardAwareScroll from '../../components/KeyboardAwareScrollComponent/KeyboardAwareScroll';
import {INPUT_KEYS, inputs} from './constants';
import InputComponent from '../../components/InputComponent/InputComponent';
import {View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import Button from '../../components/Button/Button';
import strings from '../../constants/strings';
import {navigateTo} from '../../utils/navigationUtils';
import screens from '../../constants/screens';
import {useCallback, useMemo, useState} from 'react';
import EmptyCheckbox from '../../assets/svgs/EmptyCheckbox';
import Touchable from '../../components/Touchable/Touchable';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import {useRoute} from '@react-navigation/native';
import SkillsItem from '../../components/SkillsItemCard/SkillsItem';
import styles from './styles';

const PostJobScreen = () => {
  const [inputState, setInputState] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isVisibleDateModal, setIsVisibleDateModal] = useState(false);
  const [quickDelivery, setQuickDelivery] = useState(false);

  const {title, description, skills, price, deadline} = inputState || {};

  const route = useRoute();
  const {id: folderId = ''} = route.params || {};
  const showDateModal = useCallback(() => setIsVisibleDateModal(true), []);
  const hideDateModal = useCallback(() => setIsVisibleDateModal(false), []);

  const isButtonDisabled = useMemo(
    () =>
      !title?.trim() ||
      !description?.trim() ||
      (!skills && selectedSkills.length === 0) ||
      price <= 0 ||
      !deadline,
    [deadline, description, price, selectedSkills.length, skills, title],
  );
  const onChangeText = (text, key) => {
    setInputState(prevState => ({...prevState, [key]: text}));
  };

  const handleSkillsSelection = item => {
    const indexOfItem = selectedSkills.map(sk => sk.name).indexOf(item.name);
    if (indexOfItem > -1) {
      setSelectedSkills(prevState => prevState.filter(sk => sk.id !== item.id));
    } else {
      setSelectedSkills(prevState => [...prevState, item]);
    }
  };

  const handleButtonPress = () => {
    const jobData = {
      folderId,
      ...inputState,
      selectedSkills,
      quickDelivery,
    };
    navigateTo(screens.REVIEW_DETAILS, {jobData});
  };
  const renderDatePicker = () => {
    return (
      <DatePicker
        modal
        date={inputState[INPUT_KEYS.DEADLINE] || new Date()}
        open={isVisibleDateModal}
        onConfirm={date => {
          hideDateModal();
          setInputState(prevState => ({
            ...prevState,
            [INPUT_KEYS.DEADLINE]: date,
          }));
        }}
        onCancel={hideDateModal}
        mode={'date'}
        minimumDate={new Date()}
      />
    );
  };
  return (
    <KeyboardAwareScroll
      style={styles.parent}
      contentContainerStyle={styles.contentContainer}>
      {inputs.map(item => {
        if (item.key === INPUT_KEYS.SKILLS) {
          return (
            <>
              <TextComponent font={'medium'} style={styles.skillsLabel}>
                {item.skillsLabel}
              </TextComponent>
              <View style={styles.skillsWrapper}>
                {item.skills.map(skill => {
                  const isSelected = selectedSkills
                    .map(sk => sk.id)
                    .includes(skill.id);
                  return (
                    <SkillsItem
                      key={skill.id}
                      skill={skill}
                      isSelected={isSelected}
                      onPress={handleSkillsSelection}
                    />
                  );
                })}
              </View>
              <InputComponent
                {...item}
                value={inputState[item.key]}
                onChangeText={text => onChangeText(text, item.key)}
              />
            </>
          );
        }
        return (
          <InputComponent
            {...item}
            containerStyle={[
              item.key === INPUT_KEYS.PRICE && styles.priceInput,
            ]}
            value={
              item.key === INPUT_KEYS.DEADLINE && inputState[item.key]
                ? dayjs(inputState[item.key]).format('DD/MM/YYYY')
                : inputState[item.key]
            }
            onChangeText={text => onChangeText(text, item.key)}
            onInputPress={showDateModal}
          />
        );
      })}
      <Touchable
        onPress={() => setQuickDelivery(prevState => !prevState)}
        style={styles.checkBoxView}>
        <EmptyCheckbox />
        <TextComponent style={styles.quickDeliveryText}>
          {strings.i_want_quick_delivery}
        </TextComponent>
      </Touchable>
      <Button
        title={strings.continue}
        disabled={isButtonDisabled}
        onPress={handleButtonPress}
        style={styles.button}
      />
      {renderDatePicker()}
    </KeyboardAwareScroll>
  );
};
export default PostJobScreen;
