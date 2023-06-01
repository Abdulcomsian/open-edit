import React from 'react';
import {Keyboard, View} from 'react-native';
import styles from './styles';
import InputComponent from '../../components/InputComponent/InputComponent';
import Button from '../../components/Button/Button';
import strings from '../../constants/strings';
import {input_keys, inputs} from './constants';
import HorizontalLine from './HorizontalLine';
import TextComponent from '../../components/TextComponent/TextComponent';
import SocialAuthOptions from './SocialAuthOptions';
import {createRef, useEffect, useRef, useState} from 'react';
import {logToConsole} from '../../configs/ReactotronConfig';
import {navigateTo} from '../../utils/navigationUtils';
import screens from '../../constants/screens';
import {useRoute} from '@react-navigation/native';

const SingUpTab = () => {
  const [inputState, setInputState] = useState({});
  const inputsRef = useRef({});
  const route = useRoute();

  const {userType = ''} = route.params || {};

  useEffect(() => {
    Object.values(input_keys).forEach(
      key => (inputsRef.current[key] = createRef()),
      {},
    );
  }, []);

  const handleInputChange = (key, text) => {
    //apply validation on input value here
    setInputState(prevState => ({...prevState, [key]: text}));
  };

  const handleSubmitEditing = key => {
    let nextKey = '';
    switch (key) {
      case input_keys.fullName:
        nextKey = input_keys.phone;
        break;
      case input_keys.phone:
        nextKey = input_keys.password;
        break;
      case input_keys.password:
        //do signup api call here
        break;
      default:
        Keyboard.dismiss();
        break;
    }
    logToConsole({inputsRef});
    nextKey && inputsRef.current?.[nextKey]?.current?.focus?.();
  };

  const renderInputs = () => {
    return (
      <View style={styles.inputsContainer}>
        {inputs.map(item => {
          const {placeHolder, label, key, ...rest} = item || {};
          return (
            <View key={key}>
              <InputComponent
                ref={inputsRef?.current?.[key]}
                value={inputState?.[key]}
                label={label}
                placeholder={placeHolder}
                onChangeText={text => handleInputChange(key, text)}
                onSubmitEditing={() => handleSubmitEditing(key)}
                {...rest}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.tabParentStyle}>
      {renderInputs()}
      <Button
        title={strings.create_account}
        style={styles.buttonStyle}
        onPress={() => navigateTo(screens.VERIFICATION_SCREEN, {userType})}
      />
      <HorizontalLine />
      <TextComponent
        text={strings.or_signup_with}
        font={'medium'}
        style={styles.socialDescriptionText}
      />
      <SocialAuthOptions />
    </View>
  );
};
export default React.memo(SingUpTab);
