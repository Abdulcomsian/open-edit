import React from 'react';

import styles from './styles';
import {View} from 'react-native';
import Button from '../../components/Button/Button';
import {setUser} from '../../redux/userSlice';
import KeyboardAwareScroll from '../../components/KeyboardAwareScrollComponent/KeyboardAwareScroll';
import {useDispatch} from 'react-redux';
import Touchable from '../../components/Touchable/Touchable';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import {images} from '../../assets';
import ReviewProfileThumbsUp from '../../assets/svgs/ReviewProfileThumbsUp';
import TextComponent from '../../components/TextComponent/TextComponent';
import LocationPin from '../../assets/svgs/LocationPin';
import dayjs from 'dayjs';
import {logToConsole} from '../../configs/ReactotronConfig';
import EditIcon from '../../assets/svgs/EditIcon';

const EditIconView = ({onPress}) => {
  return (
    <Touchable style={styles.editIcon} onPress={onPress}>
      <EditIcon />
    </Touchable>
  );
};

const ReviewEditorProfile = ({route}) => {
  const {data} = route.params || {};
  // const [inputState, setInputState] = useState(JSON.parse(data));
  const inputState = JSON.parse(data);

  logToConsole({inputState});

  const {
    title = '',
    bio = '',
    serviceOfferings = [],
    skills = [],
    portfolioLink = '',
    portfolioVideo = {},
    hourlyRate = 0.0,
    educations = [],
    profileImage = '',
    country = {},
    address = '',
    city = '',
    language = {},
  } = inputState || {};

  // const handleSuggestedSkillsSelection = suggestedSkill => {
  //   const index = skills?.map(item => item?.id).indexOf(suggestedSkill.id);
  //   const isSelected = index > -1;
  //   if (!isSelected) {
  //     skills.push(suggestedSkill);
  //     return setInputState(prevState => ({
  //       ...prevState,
  //       skills,
  //     }));
  //   } else {
  //     skills.splice(index, 1);
  //     setInputState(prevState => ({
  //       ...prevState,
  //       skills,
  //     }));
  //   }
  // };

  const dispatch = useDispatch();
  const renderHorizontalLine = () => {
    return <View style={styles.reviewProfileHorizontalLine} />;
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
              source={{uri: profileImage || ''}}
              style={styles.reviewProfileImage}
            />
            <EditIconView />
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
          <EditIconView />
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
          <EditIconView />
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
          <EditIconView />
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
          <EditIconView />
        </View>
        <View style={styles.reviewProfileSkillsWrapper}>
          {skills.map(skill => {
            return (
              <View key={skill.id} style={styles.skillItem}>
                <TextComponent font={'medium'} style={styles.skillTitle}>
                  {skill?.title}
                </TextComponent>
                <Touchable
                // onPress={() => handleSuggestedSkillsSelection(skill)}
                >
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
        {educations.map((item, index) => {
          return (
            <View key={String(index)} style={styles.reviewProfileEducationItem}>
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
                <EditIconView />
              </Touchable>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <KeyboardAwareScroll
      style={styles.reviewProfileContainer}
      contentContainerStyle={styles.reviewProfileScrollContentContainer}>
      {renderCompletionMessageView()}
      <View style={styles.dividerView} />
      {renderProfileNameAndImageSection()}
      {renderHorizontalLine()}
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
export default ReviewEditorProfile;
