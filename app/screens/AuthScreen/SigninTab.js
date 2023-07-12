import React, {createRef, useEffect, useRef, useState} from 'react';
import {Keyboard, View} from 'react-native';
import styles from './styles';
import InputComponent from '../../components/InputComponent/InputComponent';
import Button from '../../components/Button/Button';
import strings from '../../constants/strings';
import {input_keys, inputs} from './constants';
import HorizontalLine from './HorizontalLine';
import TextComponent from '../../components/TextComponent/TextComponent';
import SocialAuthOptions from './SocialAuthOptions';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../../redux/authSlice';

const SigninTab = () => {
  const [inputState, setInputState] = useState({});

  const inputsRef = useRef({});
  const dispatch = useDispatch();

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

  const handleLogin = () => dispatch(setLoggedIn(true));

  const handleSubmitEditing = key => {
    let nextKey = '';
    switch (key) {
      case input_keys.phone:
        nextKey = input_keys.password;
        break;
      case input_keys.password:
        //do signin api call here
        break;
      default:
        Keyboard.dismiss();
        break;
    }
    nextKey && inputsRef.current?.[nextKey]?.current?.focus?.();
  };

  const renderInputs = () => {
    return (
      <View style={styles.inputsContainer}>
        {inputs.map(item => {
          const {
            isSignin = false,
            placeHolder,
            label,
            key,
            ...rest
          } = item || {};
          if (!isSignin) {
            return null;
          }
          return (
            <View key={key}>
              <InputComponent
                ref={inputsRef?.current?.[key]}
                value={inputState[key]}
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
        title={strings.signin}
        style={styles.buttonStyle}
        onPress={handleLogin}
      />
      <HorizontalLine />
      <TextComponent
        text={strings.or_signin_with}
        font={'medium'}
        style={styles.socialDescriptionText}
      />
      <SocialAuthOptions />
    </View>
  );
};
export default React.memo(SigninTab);
