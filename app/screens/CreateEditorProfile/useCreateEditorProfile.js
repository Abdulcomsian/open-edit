import React from 'react';
import KeyboardAwareScroll from '../../components/KeyboardAwareScrollComponent/KeyboardAwareScroll';
import InputComponent from '../../components/InputComponent/InputComponent';
import {View, Animated, ScrollView, StyleSheet, Platform} from 'react-native';
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
  LANGUAGES,
  PORTFOLIO_INPUTS,
  PROFILE_INFO_INPUTS,
  SERVICES_OFFERINGS,
  signupPages,
  skillsSetInputs,
  UNITS,
} from './constants';
import {
  SCREEN_WIDTH,
} from '../../utils/metrics';
import {logToConsole} from '../../configs/ReactotronConfig';
import {colors} from '../../utils/theme';
import ImageCropPicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import CloseCircle from '../../assets/svgs/CloseCircle';
import dayjs from 'dayjs';
import DatePicker from 'react-native-date-picker';
import ProfileIconLarge from '../../assets/svgs/ProfileIconLarge';
import {FONTS} from '../../utils/fonts';
import SearchIcon from '../../assets/svgs/SearchIcon';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import ReviewProfileThumbsUp from '../../assets/svgs/ReviewProfileThumbsUp';
import LocationPin from '../../assets/svgs/LocationPin';
import EditIcon from '../../assets/svgs/EditIcon';
import {images} from '../../assets';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/userSlice';

const useCreateEditorProfile = () => {
  const [activePage, setActivePage] = useState(0);
  const [isVisibleServiceOfferings, setIsVisibleServiceOfferings] =
    useState(false);

  const [inputState, setInputState] = useState({});
  const [isVisibleDateModal, setIsVisibleDateModal] = useState(false);

  const [selectedEducationDateKey, setSelectedEducationDateKey] = useState({});

  const inputsRef = useRef(null);
  const flatListRef = useRef(null);

  const dropDownHeight = useRef(new Animated.Value(0)).current;
  const {
    [INPUT_KEYS.TITLE]: title = '',
    [INPUT_KEYS.BIO]: bio = '',
    [INPUT_KEYS.SERVICE_OFFERINGS]: serviceOfferings,
    [INPUT_KEYS.SKILLS]: skills = [],
    [INPUT_KEYS.PORTFOLIO_LINK]: portfolioLink,
    [INPUT_KEYS.PORTFOLIO_VIDEO]: portfolioVideo,
    [INPUT_KEYS.HOURLY_RATE]: hourlyRate,
    [INPUT_KEYS.ACTUAL_HOURLY_RATE]: actualHourlyRate,
    educations = [],
    [INPUT_KEYS.PROFILE_IMAGE]: profileImage,
    [INPUT_KEYS.COUNTRY]: country,
    [INPUT_KEYS.ADDRESS]: address,
    [INPUT_KEYS.CITY]: city,
    [INPUT_KEYS.LANGUAGE]: language,
  } = inputState || {};

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setParams({
      signupSteps: signupPages.filter(item => item.id !== '6'),
      activeStep: activePage,
    });
  }, [activePage, navigation, signupPages]);

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
    return (
      title?.trim() &&
      bio?.trim() &&
      skills?.length > 0 &&
      serviceOfferings?.name
    );
  }, [bio, serviceOfferings, skills, title]);

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
    return portfolioLink?.trim() || portfolioVideo?.path;
  }, [portfolioLink, portfolioVideo]);

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
          style={styles.lightBackgroundButton}
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
          style={styles.lightBackgroundButton}
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

  const [isVisibleRateUnitsDD, setIsVisibleRateUnitsDD] = useState(false);
  const [unitDDVOffset, setUnitDDVOffset] = useState();

  useEffect(() => {
    setInputState(prevState => ({...prevState, rateUnit: UNITS[0]}));
  }, []);

  const validatedHourlyRateInputs = useCallback(() => {
    return actualHourlyRate && hourlyRate;
  }, [actualHourlyRate, hourlyRate]);

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
                setUnitDDVOffset(height + y);
              }}>
              <InputComponent
                value={inputState[key]}
                onChangeText={(masked, unmasked) =>
                  handleInputChange(key, unmasked)
                }
                containerStyle={styles.hourlyRateInputContainerStyle}
                textInputStyle={styles.hourlyRateInputStyle}
                RightIcon={() => (
                  <Touchable
                    onPress={() => {
                      if (key === INPUT_KEYS.HOURLY_RATE) {
                        toggleUnitsDD();
                      }
                    }}
                    style={styles.hourlyRateDropDownRightView}>
                    <TextComponent style={styles.hourLabel}>
                      {inputState?.rateUnit?.label}
                    </TextComponent>
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

  //-------------------------------PROFILE SETUP-----------------------------------

  const [countries, setCountries] = useState([]);
  const [isVisibleCountriesDD, setIsVisibleCountriesDD] = useState(false);
  const [isVisibleLanguagesDD, setIsVisibleLanguagesDD] = useState(false);

  const countriesDropDownHeight = useRef(new Animated.Value(0)).current;
  const languagesDropDownHeight = useRef(new Animated.Value(0)).current;

  const countriesDropDownPlacement = useRef(null);
  const languagesDropDownPlacement = useRef(null);

  const fetchCountriesList = () => {
    fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        const mappedResponse = json.map((c, i) => ({
          id: String(i + 1),
          name: c.name.common,
          flag: c.flags?.png,
        }));
        setCountries(mappedResponse);
      })
      .catch(e => {
        logToConsole({fetchCountriesList: e.message});
      });
  };

  useEffect(() => {
    fetchCountriesList();
  }, []);

  useEffect(() => {
    //Default Selections
    if (countries.length) {
      const defaultCountry = countries.filter(
        item => item?.name?.toLowerCase() === 'united states',
      )[0];
      setInputState(prevState => ({
        ...prevState,
        [INPUT_KEYS.COUNTRY]: defaultCountry,
      }));
    }
    const defaultLanguage = LANGUAGES.filter(
      lang => lang.name === 'English',
    )[0];
    setInputState(prevState => ({
      ...prevState,
      [INPUT_KEYS.LANGUAGE]: defaultLanguage,
    }));
  }, [countries]);
  const checkIfSelectedCountry = useCallback(
    item => {
      const {[INPUT_KEYS.COUNTRY]: country} = inputState || {};
      return {
        isSelected: country?.id === item.id,
      };
    },
    [inputState],
  );

  const checkIfSelectedLanguage = useCallback(
    item => {
      const {[INPUT_KEYS.LANGUAGE]: language} = inputState || {};
      return {
        isSelected: language.id === item.id,
      };
    },
    [inputState],
  );

  const validateProfileInputs = useCallback(() => {
    return profileImage && country?.name && address && city && language?.name;
  }, [address, city, country, language, profileImage]);

  const chooseProfilePhoto = () => {
    ImageCropPicker.openPicker({
      type: 'photo',
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(response => {
        handleInputChange(INPUT_KEYS.PROFILE_IMAGE, response?.path);
      })
      .catch(e => {
        logToConsole({chooseProfilePhoto: e.message});
      });
  };
  const toggleCountriesDD = useCallback(() => {
    Animated.timing(countriesDropDownHeight, {
      toValue: isVisibleCountriesDD ? 0 : 250, // Adjust the height as needed
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsVisibleCountriesDD(prevState => !prevState);
  }, [countriesDropDownHeight, isVisibleCountriesDD]);

  const toggleLanguagesDD = useCallback(() => {
    Animated.timing(languagesDropDownHeight, {
      toValue: isVisibleLanguagesDD ? 0 : 250, // Adjust the height as needed
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsVisibleLanguagesDD(prevState => !prevState);
  }, [isVisibleLanguagesDD, languagesDropDownHeight]);

  const handleLayout = (key, e) => {
    if (key === INPUT_KEYS.COUNTRY) {
      countriesDropDownPlacement.current =
        e.nativeEvent.layout?.y + e.nativeEvent.layout?.height;
    }
    if (key === INPUT_KEYS.LANGUAGE) {
      languagesDropDownPlacement.current =
        e.nativeEvent.layout?.y + e.nativeEvent.layout?.height;
    }
  };

  const handleInputPress = key => {
    if (key === INPUT_KEYS.COUNTRY) {
      toggleCountriesDD();
    } else if (key === INPUT_KEYS.LANGUAGE) {
      toggleLanguagesDD();
    }
  };
  const renderCountriesDropDown = () => {
    return (
      <>
        {isVisibleCountriesDD ? (
          <View
            onTouchStart={toggleCountriesDD}
            style={{
              ...StyleSheet.absoluteFillObject,
              zIndex: 999,
              backgroundColor: 'rgba(0,0,0,0)',
            }}
          />
        ) : null}
        <Animated.View
          style={[
            styles.dropDownParent,
            {
              height: countriesDropDownHeight,
              top: countriesDropDownPlacement.current,
            },
          ]}>
          {isVisibleCountriesDD ? (
            <ScrollView>
              {countries.map(item => {
                const {isSelected = false} = checkIfSelectedCountry(item);
                return (
                  <Touchable
                    onPress={() => {
                      handleInputChange(INPUT_KEYS.COUNTRY, item);
                      toggleCountriesDD();
                    }}
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
      </>
    );
  };
  const renderLanguagesDropDown = () => {
    return (
      <>
        {isVisibleLanguagesDD ? (
          <View
            onTouchStart={toggleLanguagesDD}
            style={{
              ...StyleSheet.absoluteFillObject,
              zIndex: 999,
              backgroundColor: 'rgba(0,0,0,0)',
            }}
          />
        ) : null}
        <Animated.View
          style={[
            styles.dropDownParent,
            {
              height: languagesDropDownHeight,
              top: languagesDropDownPlacement.current,
            },
          ]}>
          {isVisibleLanguagesDD ? (
            <ScrollView>
              {LANGUAGES.map(item => {
                const {isSelected} = checkIfSelectedLanguage(item);
                return (
                  <Touchable
                    onPress={() => {
                      handleInputChange(INPUT_KEYS.LANGUAGE, item);
                      toggleLanguagesDD();
                    }}
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
      </>
    );
  };
  const renderProfileSetupSection = () => {
    return (
      <>
        <KeyboardAwareScroll
          contentContainerStyle={styles.profileScrollContentContainer}>
          <View style={styles.profileInfoContainer}>
            {!inputState[INPUT_KEYS.PROFILE_IMAGE] ? (
              <ProfileIconLarge />
            ) : (
              <ImageComponent
                source={{uri: inputState[INPUT_KEYS.PROFILE_IMAGE]}}
                style={styles.profileImage}
                resizeMode={'cover'}
              />
            )}
          </View>
          <Button
            backgroundColor={colors.primary_12}
            titleColor={colors.primary}
            style={styles.uploadPhotoButton}
            title={'+ Upload Photo'}
            titleStyle={{fontFamily: FONTS.MEDIUM}}
            onPress={chooseProfilePhoto}
          />
          <View style={styles.profileInputsContainer}>
            {PROFILE_INFO_INPUTS.map(input => {
              const {key, id} = input || {};
              return (
                <Animated.View
                  key={String(id)}
                  style={key === INPUT_KEYS.CITY && styles.cityInputStyle}
                  onLayout={event => handleLayout(key, event)}>
                  <InputComponent
                    value={inputState[key]?.name || inputState[key]}
                    onChangeText={text => handleInputChange(key, text)}
                    RightIcon={() =>
                      key === INPUT_KEYS.COUNTRY ||
                      key === INPUT_KEYS.LANGUAGE ? (
                        <ChevronDown />
                      ) : null
                    }
                    onInputPress={() => handleInputPress(key)}
                    LeftIcon={() =>
                      key === INPUT_KEYS.CITY ? (
                        <SearchIcon />
                      ) : key === INPUT_KEYS.COUNTRY && inputState[key] ? (
                        <ImageComponent
                          source={{uri: inputState[key].flag}}
                          resizeMode={'contain'}
                          style={styles.countryFlag}
                        />
                      ) : null
                    }
                    {...input}
                  />
                </Animated.View>
              );
            })}
          </View>
          <View style={styles.profileButtonContainer}>{renderButtonJSX()}</View>
        </KeyboardAwareScroll>
        {renderCountriesDropDown()}
        {renderLanguagesDropDown()}
      </>
    );
  };

  //-----------------------------REVIEW PROFILE SECTION----------------------------

  const dispatch = useDispatch();
  const renderHorizontalLine = () => {
    return <View style={styles.reviewProfileHorizontalLine} />;
  };

  const EditIcon = ({onPress}) => {
    return (
      <Touchable style={styles.editIcon} onPress={onPress}>
        <EditIcon />
      </Touchable>
    );
  };
  const renderAddIcon = onPress => {
    return (
      <Touchable style={styles.addIconCircle}>
        <ImageComponent
          source={images.add_outline}
          style={{width: '100%', height: '100%'}}
        />
      </Touchable>
    );
  };

  const renderCompletionMessageView = () => {
    return (
      <View style={styles.thumbsUpContainer}>
        <View style={styles.thumbsUpIcon}>
          <ReviewProfileThumbsUp />
        </View>
        <View style={styles.descriptionView}>
          <TextComponent font={'bold'} style={styles.nameText}>
            {'Looking Good, John'}
          </TextComponent>
          <TextComponent style={styles.descriptionText}>
            Make any edits you want, then submit your profile. You can make more
            changes after it’s live
          </TextComponent>
        </View>
      </View>
    );
  };

  const renderProfileNameAndImageSection = () => {
    return (
      <View style={styles.infoSection}>
        <View style={styles.infoSectionContainerRow}>
          <View style={styles.reviewProfileImage}>
            <ImageComponent
              source={{uri: profileImage}}
              style={styles.reviewProfileImage}
            />
            <EditIcon />
          </View>
          <View style={styles.reviewProfileNameAndLocationView}>
            <TextComponent font={'semiBold'} style={styles.reviewProfileName}>
              John Doe
            </TextComponent>
            <View style={styles.reviewProfileLocationInfoView}>
              <LocationPin />
              <TextComponent style={styles.reviewProfileLocationText}>
                {address}, {city}
              </TextComponent>
            </View>
          </View>
        </View>
        {renderHorizontalLine()}
      </View>
    );
  };

  const renderBioSection = () => {
    return (
      <View style={styles.infoSectionView}>
        <View style={styles.infoSectionRowView}>
          <TextComponent font={'semiBold'} style={styles.sectionTitle}>
            {title}
          </TextComponent>
          <EditIcon />
        </View>
        <TextComponent style={styles.sectionDescription}>{bio}</TextComponent>
      </View>
    );
  };

  const renderHourlyRateSection = () => {
    return (
      <View style={styles.infoSectionView}>
        <View style={styles.infoSectionRowView}>
          <TextComponent font={'semiBold'} style={styles.sectionTitle}>
            Hourly Rate
          </TextComponent>
          <EditIcon />
        </View>
        <TextComponent style={styles.sectionDescriptionLightText}>
          ${hourlyRate}
        </TextComponent>
      </View>
    );
  };

  const renderLanguageSection = () => {
    return (
      <View style={styles.infoSectionView}>
        <View style={styles.infoSectionRowView}>
          <TextComponent font={'semiBold'} style={styles.sectionTitle}>
            language
          </TextComponent>
          <EditIcon />
        </View>
        <TextComponent style={styles.sectionDescriptionLightText}>
          {language?.name}
        </TextComponent>
      </View>
    );
  };

  const renderSkillsSection = () => {
    return (
      <View style={styles.infoSectionView}>
        <View style={styles.infoSectionRowView}>
          <TextComponent font={'semiBold'} style={styles.sectionTitle}>
            Skills
          </TextComponent>
          <EditIcon />
        </View>
        <View style={styles.reviewProfileSkillsWrapper}>
          {skills.map(skill => {
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
      </View>
    );
  };

  const renderEducationSection = () => {
    return (
      <View style={styles.infoSectionView}>
        <View style={styles.infoSectionRowView}>
          <TextComponent font={'semiBold'} style={styles.sectionTitle}>
            Education
          </TextComponent>
          {renderAddIcon()}
        </View>
        {educations.map(item => {
          return (
            <View style={styles.reviewProfileEducationItem}>
              <TextComponent
                font={'medium'}
                style={styles.reviewProfileDegreeNameText}>
                {item.degreeName}
              </TextComponent>
              <TextComponent style={styles.reviewProfileInstituteNameText}>
                {item.instituteName}
              </TextComponent>
              {item.degreeStartDate && item.degreeEndDate ? (
                <TextComponent
                  font={'medium'}
                  style={styles.reviewProfileDegreeDurationText}>
                  {dayjs(item.degreeStartDate).format('YYYY')} -{' '}
                  {dayjs(item.degreeEndDate).format('YYYY')}
                </TextComponent>
              ) : null}
              <Touchable style={styles.reviewProfileEDucationSectionEditIcon}>
                <EditIcon />
              </Touchable>
            </View>
          );
        })}
      </View>
    );
  };
  const renderReviewProfileSection = () => {
    return (
      <KeyboardAwareScroll
        style={styles.reviewProfileContainer}
        contentContainerStyle={styles.reviewProfileScrollContentContainer}>
        {renderCompletionMessageView()}
        <View style={styles.dividerView} />
        {renderProfileNameAndImageSection()}
        {renderBioSection()}
        {renderHorizontalLine()}
        {renderHourlyRateSection()}
        {renderHorizontalLine()}
        {renderLanguageSection()}
        {renderHorizontalLine()}
        {renderSkillsSection()}
        {renderHorizontalLine()}
        {renderEducationSection()}
        <Button
          title={'Submit Profile'}
          onPress={() => dispatch(setUser(inputState))}
          style={styles.submitButton}
        />
      </KeyboardAwareScroll>
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
      case 3:
        return validatedHourlyRateInputs();
      case 4:
        return validateProfileInputs();
    }
  }, [
    activePage,
    validatePortfolioSection,
    validateSkillSetInputs,
    validateEducationSection,
    validatedHourlyRateInputs,
    validateProfileInputs,
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
    renderProfileSetupSection,
    renderReviewProfileSection,
  };
};

export default useCreateEditorProfile;
