import React from 'react';
import KeyboardAwareScroll from '../../components/KeyboardAwareScrollComponent/KeyboardAwareScroll';
import InputComponent from '../../components/InputComponent/InputComponent';
import {View, Animated, ScrollView} from 'react-native';
import Touchable from '../../components/Touchable/Touchable';
import TextComponent from '../../components/TextComponent/TextComponent';
import ChevronDown from '../../assets/svgs/ChevronDown';
import {useCallback, useMemo, useRef, useState} from 'react';
import EmptyCheckbox from '../../assets/svgs/EmptyCheckbox';
import Button from '../../components/Button/Button';
import strings from '../../constants/strings';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  EDUCATION_INPUTS,
  HOURLY_RATE_INPUTS,
  INPUT_KEYS,
  PORTFOLIO_INPUTS,
  SERVICES_OFFERINGS,
  signupPages,
  skillsSetInputs,
  UNITS,
} from './constants';
import {
  getFontSize,
  getMScale,
  getScale,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import {logToConsole} from '../../configs/ReactotronConfig';
import {colors} from '../../utils/theme';
import ImageCropPicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import CloseCircle from '../../assets/svgs/CloseCircle';
import dayjs from 'dayjs';
import DatePicker from 'react-native-date-picker';
import {isIos} from '../../utils/sharedUtils';

const useCreateEditorProfile = () => {
  const [activePage, setActivePage] = useState(0);
  const [isVisibleServiceOfferings, setIsVisibleServiceOfferings] =
    useState(false);
  const [isVisibleRateUnitsDD, setIsVisibleRateUnitsDD] = useState(false);

  const [inputState, setInputState] = useState({});
  const [isVisibleDateModal, setIsVisibleDateModal] = useState(false);

  const [selectedEducationDateKey, setSelectedEducationDateKey] = useState({});

  const inputsRef = useRef(null);
  const flatListRef = useRef(null);

  const dropDownHeight = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setParams({signupSteps: signupPages, activeStep: activePage});
  }, [activePage, navigation]);

  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.x / SCREEN_WIDTH);
    setActivePage(index);
  };

  const handleInputChange = (key, text) => {
    setInputState(prevState => ({...prevState, [key]: text}));
  };

  //--------------------------------------SKILLS SET CREATION----------------------------------

  const dropDownPlacement = useRef(null);

  const toggleServiceDD = useCallback(() => {
    Animated.timing(dropDownHeight, {
      toValue: isVisibleServiceOfferings ? 0 : 250, // Adjust the height as needed
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsVisibleServiceOfferings(prevState => !prevState);
  }, [dropDownHeight, isVisibleServiceOfferings]);

  const handleSkillsOfferingSelection = item => {
    setInputState(prevState => ({
      ...prevState,
      [INPUT_KEYS.SERVICE_OFFERINGS]: item,
    }));
  };

  const handleSuggestedSkillsSelection = suggestedSkill => {
    const {[INPUT_KEYS.SKILLS]: skills = []} = inputState;
    const index = skills?.map(item => item?.id).indexOf(suggestedSkill.id);
    const isSelected = index > -1;
    if (!isSelected) {
      skills.push(suggestedSkill);
      return setInputState(prevState => ({
        ...prevState,
        [INPUT_KEYS.SKILLS]: skills,
      }));
    } else {
      skills.splice(index, 1);
      setInputState(prevState => ({
        ...prevState,
        [INPUT_KEYS.SKILLS]: skills,
      }));
    }
  };

  const isSelectedSkill = item => {
    const {[INPUT_KEYS.SKILLS]: skills = []} = inputState || {};
    const index = skills.map(sk => sk.id).indexOf(item.id);
    return index > -1;
  };

  const checkIfSelected = useCallback(
    item => {
      const {[INPUT_KEYS.SERVICE_OFFERINGS]: serviceOfferings = {}} =
        inputState || {};
      const isSelected = serviceOfferings.id === item.id;
      return {
        isSelected: isSelected,
      };
    },
    [inputState],
  );

  const validateSkillSetInputs = useCallback(() => {
    const {
      [INPUT_KEYS.TITLE]: title = '',
      [INPUT_KEYS.BIO]: bio = '',
      [INPUT_KEYS.SKILLS]: skills = [],
      [INPUT_KEYS.SERVICE_OFFERINGS]: serviceOffering = {},
    } = inputState || {};
    return (
      title?.trim() && bio?.trim() && skills.length > 0 && serviceOffering?.name
    );
  }, [inputState]);

  const renderCreteSkillSetInputs = () => {
    return (
      <KeyboardAwareScroll contentContainerStyle={styles.scrollContainer}>
        {skillsSetInputs.map(item => {
          const {
            key,
            id,
            placeholder,
            type,
            label,
            servicesList,
            isDropDown,
            ...rest
          } = item || {};
          if (key === INPUT_KEYS.SUGGESTED_SKILLS) {
            return <>{renderSuggestedSkills(item)}</>;
          }
          return (
            <Animated.View
              key={item.key}
              style={styles.inputWrapperAnimatedView}
              onLayout={event => {
                if (key === INPUT_KEYS.SERVICE_OFFERINGS) {
                  dropDownPlacement.current =
                    event.nativeEvent.layout?.y +
                    event.nativeEvent.layout?.height;
                }
              }}>
              <InputComponent
                key={String(id)}
                placeholder={placeholder}
                label={label}
                onInputPress={() => {
                  if (key === INPUT_KEYS.SERVICE_OFFERINGS) {
                    toggleServiceDD();
                  }
                }}
                containerStyle={styles.inputContainer}
                RightIcon={() =>
                  key === INPUT_KEYS.SERVICE_OFFERINGS ? <ChevronDown /> : null
                }
                value={isDropDown ? inputState[key]?.name : inputState[key]}
                onChangeText={text => handleInputChange(key, text)}
                isCustomView={key === INPUT_KEYS.SKILLS}
                {...rest}>
                {renderCustomView()}
              </InputComponent>
            </Animated.View>
          );
        })}
        {renderDropDown()}
        {renderButtonJSX()}
      </KeyboardAwareScroll>
    );
  };

  const renderSuggestedSkills = item => {
    const {suggestedSkills = [], key, label} = item || {};
    return (
      <View key={key} style={styles.suggestedSkillContainer}>
        <TextComponent font={'medium'} style={styles.suggestedSkillLabel}>
          {label}
        </TextComponent>
        <View style={styles.suggestedSkillsView}>
          {suggestedSkills.map(sg => {
            if (!isSelectedSkill(sg)) {
              return (
                <Touchable
                  key={sg.id}
                  onPress={() => handleSuggestedSkillsSelection(sg)}
                  style={styles.skillItem}>
                  <TextComponent font={'medium'} style={styles.skillTitle}>
                    {sg.title}
                  </TextComponent>
                  <TextComponent font={'medium'} style={styles.addIcon}>
                    +
                  </TextComponent>
                </Touchable>
              );
            }
            return null;
          })}
        </View>
      </View>
    );
  };

  const renderCustomView = () => {
    return (
      <View style={styles.inputCustomViewWrapper}>
        <View style={styles.inputCustomView}>
          {inputState?.[INPUT_KEYS.SKILLS]?.map(skill => {
            return (
              <View key={skill.id} style={styles.skillItem}>
                <TextComponent font={'medium'} style={styles.skillTitle}>
                  {skill?.title}
                </TextComponent>
                <Touchable
                  onPress={() => handleSuggestedSkillsSelection(skill)}>
                  <TextComponent font={'medium'} style={styles.crossText}>
                    x
                  </TextComponent>
                </Touchable>
              </View>
            );
          })}
        </View>
        <Touchable style={styles.addSkillsView}>
          <TextComponent style={styles.addSkillsText}>Add Skills</TextComponent>
        </Touchable>
      </View>
    );
  };

  const renderDropDown = () => {
    return (
      <Animated.View
        style={[
          styles.dropDownParent,
          {height: dropDownHeight, top: dropDownPlacement.current},
        ]}>
        {isVisibleServiceOfferings ? (
          <ScrollView>
            {SERVICES_OFFERINGS.map(item => {
              const {isSelected} = checkIfSelected(item);
              return (
                <Touchable
                  onPress={() => handleSkillsOfferingSelection(item)}
                  key={item.id}
                  style={[
                    styles.checkBoxItem,
                    isSelected && styles.selectedCheckBoxItemStyle,
                  ]}>
                  <EmptyCheckbox isChecked={isSelected} />
                  <TextComponent style={styles.serviceOfferingsText}>
                    {item.name}
                  </TextComponent>
                </Touchable>
              );
            })}
          </ScrollView>
        ) : null}
      </Animated.View>
    );
  };

  //--------------------------------------PORTFOLIO----------------------------------

  const validatePortfolioSection = useCallback(() => {
    const {
      [INPUT_KEYS.PORTFOLIO_LINK]: portfolioLink = '',
      [INPUT_KEYS.PORTFOLIO_VIDEO]: portfolioVideo = {},
    } = inputState || {};
    return portfolioLink?.trim() || portfolioVideo?.path;
  }, [inputState]);

  const openVideoPicker = () => {
    ImageCropPicker.openPicker({
      mediaType: 'video',
    }).then(result => {
      setInputState(prevState => ({
        ...prevState,
        [INPUT_KEYS.PORTFOLIO_VIDEO]: result,
      }));
    });
  };

  const renderCreatePortfolio = () => {
    return (
      <View style={styles.portfolioContainer}>
        {PORTFOLIO_INPUTS.map(input => {
          const {key} = input || {};
          if (key === INPUT_KEYS.PORTFOLIO_VIDEO) {
            return <>{renderVideoContainer()}</>;
          }
          return (
            <InputComponent
              key={input.id}
              {...input}
              value={inputState[key]}
              onChangeText={text => handleInputChange(key, text)}
            />
          );
        })}
      </View>
    );
  };

  const renderVideoContainer = () => {
    const {path, duration} = inputState[INPUT_KEYS.PORTFOLIO_VIDEO] || {};
    return (
      <View>
        {inputState[INPUT_KEYS.PORTFOLIO_VIDEO] ? (
          <View style={styles.videoView}>
            <Video
              source={{
                uri: path || '',
              }}
              paused
              resizeMode={'cover'}
              style={styles.video}
            />
            <Touchable
              onPress={() =>
                setInputState(prevState => ({
                  ...prevState,
                  [INPUT_KEYS.PORTFOLIO_VIDEO]: null,
                }))
              }
              style={styles.closedCircleView}>
              <CloseCircle />
            </Touchable>
            <View style={styles.durationView}>
              <TextComponent style={styles.durationText}>
                {new Date(duration).toISOString().slice(14, 19)}
              </TextComponent>
            </View>
          </View>
        ) : null}
        <Button
          title={'+ Add Video'}
          onPress={openVideoPicker}
          titleColor={colors.primary}
          style={{
            backgroundColor: colors.primary_12,
            height: getVerticalScale(53),
            width: '90%',
            marginTop: getVerticalScale(19),
          }}
        />
      </View>
    );
  };

  //-----------------------------------EDUCATION_INFO----------------------------
  useEffect(() => {
    insertNewEducationItem();
  }, []);

  const handleEducationInputChange = (key, text, index) => {
    const {educations = []} = inputState;
    let temp = educations;
    let item = temp[index];
    item[key] = text;
    temp[index] = item;
    setInputState(prevState => ({
      ...prevState,
      educations: temp,
    }));
  };

  const validateEducationSection = useCallback(() => {
    const {educations = []} = inputState || {};
    const missingFields = educations.map(item => {
      return Object.keys(item).some(key => !String(item[key]).trim());
    });
    const hasSomeMissingFields = missingFields.some(item => item === true);
    return !hasSomeMissingFields;
  }, [inputState]);

  const openDateModal = useCallback((key, index) => {
    setSelectedEducationDateKey({key, index});
    setIsVisibleDateModal(true);
  }, []);

  const hideDateModal = useCallback(() => {
    setIsVisibleDateModal(false);
  }, []);

  const insertNewEducationItem = () => {
    const {educations = []} = inputState || {};
    educations.push({
      instituteName: '',
      degreeName: '',
      degreeStartDate: '',
      degreeEndDate: '',
    });
    setInputState(prevState => ({...prevState, educations}));
  };

  const renderEducationInfoSection = () => {
    const {educations = []} = inputState || {};
    return (
      <KeyboardAwareScroll
        contentContainerStyle={styles.keyboardScrollContentContainer}
        style={styles.keyboardScrollStyle}>
        {educations.map((eduItem, eduIndex) => {
          return (
            <View key={String(eduIndex)}>
              {renderEducationInfoItem(eduIndex)}
            </View>
          );
        })}
        <Button
          title={'+ Add Education'}
          onPress={insertNewEducationItem}
          titleColor={colors.primary}
          style={{
            backgroundColor: colors.primary_12,
            height: getVerticalScale(53),
            width: '90%',
            marginTop: getVerticalScale(19),
          }}
        />
        {renderDatePicker()}
      </KeyboardAwareScroll>
    );
  };

  const renderEducationInfoItem = eduIndex => {
    const {educations = []} = inputState || {};
    return (
      <>
        {EDUCATION_INPUTS.map(educationInput => {
          const {key, id} = educationInput || {};
          if (Array.isArray(educationInput)) {
            return (
              <View style={styles.rowItem}>
                {educationInput.map(innerInput => {
                  const {key: innerKey, id: innerId} = innerInput || {};
                  const value = educations?.[eduIndex][innerKey];
                  return (
                    <InputComponent
                      key={String(innerId)}
                      containerStyle={styles.rowItemInput}
                      value={value ? dayjs(value).format('DD/MM/YYYY') : ''}
                      onInputPress={() => openDateModal(innerKey, eduIndex)}
                      pointerEvents={'none'}
                      {...innerInput}
                    />
                  );
                })}
              </View>
            );
          }
          return (
            <InputComponent
              key={String(id)}
              value={educations?.[eduIndex][key]}
              onChangeText={text =>
                handleEducationInputChange(key, text, eduIndex)
              }
              {...educationInput}
            />
          );
        })}
        <View style={styles.horizontalLine} />
      </>
    );
  };

  const renderDatePicker = () => {
    let {educations = []} = inputState || {};
    const {key = '', index = 0} = selectedEducationDateKey || {};
    const selectedDate = educations?.[index]?.[key] ?? new Date();
    return (
      <DatePicker
        modal
        date={selectedDate || new Date()}
        open={isVisibleDateModal}
        onConfirm={date => {
          hideDateModal();
          handleEducationInputChange(key, date, index);
        }}
        onCancel={hideDateModal}
        mode={'date'}
        maximumDate={new Date()}
      />
    );
  };

  //----------------------------HOURLY_RATE_SETUP--------------------------------

  const [unitDDVOffset, setUnitDDVOffset] = useState();

  logToConsole({ddTop: unitDDVOffset, inputState});

  useEffect(() => {
    setInputState(prevState => ({...prevState, rateUnit: UNITS[0]}));
  }, []);

  const toggleUnitsDD = useCallback(() => {
    Animated.timing(dropDownHeight, {
      toValue: isVisibleRateUnitsDD ? 0 : 250, // Adjust the height as needed
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsVisibleRateUnitsDD(prevState => !prevState);
  }, [dropDownHeight, isVisibleRateUnitsDD]);

  const handleUnitSelection = item => {
    setInputState(prevState => ({...prevState, rateUnit: item}));
    toggleUnitsDD();
  };

  const checkIfUnitSelected = item => {
    const {rateUnit} = inputState || {};
    return rateUnit?.id === item.id;
  };
  const renderHourlyRateInputsSection = () => {
    return (
      <KeyboardAwareScroll style={{flex: 1}}>
        {HOURLY_RATE_INPUTS.map(hourlyRateInput => {
          const {key = ''} = hourlyRateInput || {};
          return (
            <Animated.View
              onLayout={event => {
                const {height, y} = event.nativeEvent.layout || {};
                logToConsole({height, y});
                setUnitDDVOffset(height + y);
              }}>
              <InputComponent
                value={inputState[key]}
                containerStyle={{
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: getVerticalScale(25),
                }}
                textInputStyle={{width: '50%'}}
                RightIcon={() => (
                  <Touchable
                    onPress={() => {
                      if (key === INPUT_KEYS.HOURLY_RATE) {
                        toggleUnitsDD();
                      }
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextComponent style={{marginEnd: 5}}>{inputState?.rateUnit?.label}</TextComponent>
                    <ChevronDown />
                  </Touchable>
                )}
                {...hourlyRateInput}
              />
            </Animated.View>
          );
        })}
        {renderHourlyRateUnitsDropDown()}
      </KeyboardAwareScroll>
    );
  };

  const renderHourlyRateUnitsDropDown = () => {
    return (
      <Animated.View
        style={[
          styles.dropDownParent,
          {height: dropDownHeight, top: unitDDVOffset},
        ]}>
        {isVisibleRateUnitsDD ? (
          <ScrollView>
            {UNITS.map(item => {
              const isSelected = checkIfUnitSelected(item);
              return (
                <Touchable
                  onPress={() => handleUnitSelection(item)}
                  key={item.id}
                  style={[
                    styles.checkBoxItem,
                    isSelected && styles.selectedCheckBoxItemStyle,
                  ]}>
                  <EmptyCheckbox isChecked={isSelected} />
                  <TextComponent style={styles.serviceOfferingsText}>
                    {item.label}
                  </TextComponent>
                </Touchable>
              );
            })}
          </ScrollView>
        ) : null}
      </Animated.View>
    );
  };

  //-------------------------------GLOBAL BUTTON COMPONENT--------------------------

  const isButtonEnabled = useMemo(() => {
    switch (activePage) {
      case 0:
        return validateSkillSetInputs();
      case 1:
        return validatePortfolioSection();
      case 2:
        return validateEducationSection();
    }
  }, [
    activePage,
    validatePortfolioSection,
    validateSkillSetInputs,
    validateEducationSection,
  ]);

  const handleOnPress = useCallback(() => {
    if (activePage < signupPages.length - 1) {
      flatListRef?.current?.scrollToIndex({
        index: activePage + 1,
        animated: true,
      });
    }
  }, [activePage]);

  const renderButtonJSX = () => {
    return (
      <Button
        title={strings.continue}
        style={styles.button}
        disabled={!isButtonEnabled}
        onPress={handleOnPress}
      />
    );
  };
  return {
    activePage,
    setActivePage,
    flatListRef,
    handleScroll,
    renderButtonJSX,
    renderCreteSkillSetInputs,
    renderCreatePortfolio,
    renderEducationInfoSection,
    renderHourlyRateInputsSection,
  };
};

export default useCreateEditorProfile;
