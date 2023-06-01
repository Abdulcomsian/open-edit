import strings from '../../constants/strings';
import InputProfileIcon from '../../assets/svgs/InputProfileIcon';
import InputPhoneIcon from '../../assets/svgs/InputPhoneIcon';
import InputPasswordIcon from '../../assets/svgs/InputPasswordIcon';

export const authOptions = [
  {text: strings.signup, key: 'signup'},
  {text: strings.signin, key: 'signin'},
];

export const input_keys = {
  fullName: 'fullName',
  phone: 'phone',
  password: 'password',
};

export const inputs = [
  {
    key: input_keys.fullName,
    placeHolder: strings.enter_your_name,
    label: strings.full_name,
    isSignin: false,
    LeftIcon: () => <InputProfileIcon />,
    blurOnSubmit: false,
    returnKeyType: 'next',
  },
  {
    key: input_keys.phone,
    placeHolder: strings.enter_your_number,
    label: strings.phone_number,
    isSignin: true,
    LeftIcon: () => <InputPhoneIcon />,
    blurOnSubmit: false,
    returnKeyType: 'done',
    keyboardType: 'number-pad',
  },
  {
    key: input_keys.password,
    placeHolder: strings.enter_your_password,
    label: strings.password,
    isSignin: true,
    LeftIcon: () => <InputPasswordIcon />,
    secureTextEntry: true,
    blurOnSubmit: true,
    returnKeyType: 'done',
  },
];
