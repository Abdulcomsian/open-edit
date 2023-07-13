import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const JobsActiveIcon = props => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.3636 3.20996C8.90722 3.20996 7.48354 3.64183 6.2726 4.45095C5.06167 5.26007 4.11786 6.41011 3.56052 7.75563C3.00319 9.10115 2.85737 10.5817 3.14149 12.0101C3.42562 13.4385 4.12693 14.7506 5.15675 15.7804C6.18657 16.8102 7.49863 17.5115 8.92703 17.7957C10.3554 18.0798 11.836 17.934 13.1815 17.3766C14.527 16.8193 15.6771 15.8755 16.4862 14.6645C17.2953 13.4536 17.7272 12.0299 17.7272 10.5736C17.7271 8.62065 16.9512 6.74776 15.5703 5.36685C14.1894 3.98593 12.3165 3.21009 10.3636 3.20996V3.20996Z"
      stroke="#FD683D"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <Path
      d="M15.8573 16.0673L21 21.2099"
      stroke="#FD683D"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);
export default JobsActiveIcon;
