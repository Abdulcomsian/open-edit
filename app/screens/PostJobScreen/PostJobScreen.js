import {colors} from '../../utils/theme';
import KeyboardAwareScroll from '../../components/KeyboardAwareScrollComponent/KeyboardAwareScroll';
import {INPUT_KEYS, inputs} from './constants';
import InputComponent from '../../components/InputComponent/InputComponent';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import Button from '../../components/Button/Button';
import strings from '../../constants/strings';
import {navigateTo} from '../../utils/navigationUtils';
import screens from '../../constants/screens';
import {useState} from 'react';
import EmptyCheckbox from '../../assets/svgs/EmptyCheckbox';
import Touchable from "../../components/Touchable/Touchable";

const PostJobScreen = () => {
  const [inputState, setInputState] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const onChangeText = (text, key) => {
    setInputState(prevState => ({...prevState, [key]: text}));
  };

  const handleSkillsSelection = (item) => {

  }
  return (
    <KeyboardAwareScroll
      style={{
        flex: 1,
        paddingHorizontal: getMScale(15),
        backgroundColor: colors.white,
      }}>
      {inputs.map(item => {
        if (item.key === INPUT_KEYS.SKILLS) {
          return (
            <>
              <TextComponent
                font={'medium'}
                style={{
                  fontSize: getFontSize(16),
                  lineHeight: 21,
                  marginVertical: getVerticalScale(10),
                }}>
                {item.skillsLabel}
              </TextComponent>
              <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                {item.skills.map(skill => {
                  return (
                    <Touchable
                      onPress={ () => handleSkillsSelection(item)}
                      style={{
                        padding: 10,
                        borderWidth: 1,
                        borderColor: colors.primary,
                        borderRadius: 50,
                        backgroundColor: colors.primary_30,
                        margin: 5,
                      }}>
                      <TextComponent
                        font={'medium'}
                        style={{
                          color: colors.primary,
                          fontSize: getFontSize(12),
                        }}>
                        {skill.name}
                      </TextComponent>
                    </Touchable>
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
            containerStyle={[item.key === INPUT_KEYS.PRICE && {marginTop: -20}]}
            value={inputState[item.key]}
            onChangeText={text => onChangeText(text, item.key)}
          />
        );
      })}
      <View
        style={{
          marginTop: getVerticalScale(20),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <EmptyCheckbox />
        <TextComponent style={{fontSize: getFontSize(14), marginStart: 10}}>
          I want quick delivery
        </TextComponent>
      </View>
      <Button
        title={strings.continue}
        onPress={() => navigateTo(screens.REVIEW_DETAILS)}
        style={{marginTop: getVerticalScale(20)}}
      />
    </KeyboardAwareScroll>
  );
};
export default PostJobScreen;
