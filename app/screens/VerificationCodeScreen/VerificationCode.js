import {View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import styles from './styles';
import strings from '../../constants/strings';
import ConfirmationCodeInput from '../../components/ConfirmationCodeInput';
import {useRef, useState} from 'react';
import CountDown from '../../components/CountDown/CountDown';
import Button from '../../components/Button/Button';
import {useDispatch} from 'react-redux';
import {setLoggedIn, setUserType} from '../../redux/authSlice';
import {useRoute} from '@react-navigation/native';

const VerificationCode = () => {
  const [code, setCode] = useState(null);
  const countDownRef = useRef(null);

  const resendVerificationCode = () => countDownRef?.current?.startCountDown();

  const dispatch = useDispatch();

  const verifyCodeAndSignup = () => {
    dispatch(setLoggedIn(true));
  };
  const renderCodeField = () => {
    return (
      <View style={styles.codeFieldContainer}>
        <ConfirmationCodeInput
          cellCount={4}
          value={code}
          setValue={value => {
            setCode(value);
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.parent}>
      <TextComponent
        text={strings.verification_code}
        style={styles.titleText}
        font={'semiBold'}
      />
      <TextComponent style={styles.description}>
        {strings.we_sent_verification_code}
        <TextComponent text={' +01 65841542265'} />
      </TextComponent>
      {renderCodeField()}
      <View style={styles.countDownContainer}>
        <CountDown ref={countDownRef} />
      </View>
      <Button
        title={strings.submit}
        onPress={verifyCodeAndSignup}
        style={{alignSelf: 'center', marginTop: 30}}
      />
      <TextComponent font={'outfit-regular'} style={styles.resendText}>
        {strings.did_nt_receive_code}
        <TextComponent
          onPress={resendVerificationCode}
          font={'outfit-medium'}
          text={strings.resend}
        />
      </TextComponent>
    </View>
  );
};
export default VerificationCode;
