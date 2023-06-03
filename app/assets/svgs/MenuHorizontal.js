import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const MenuHorizontal = props => (
  <Svg
    width={20}
    height={6}
    viewBox="0 0 20 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.20002 3C5.20002 4.32548 4.12551 5.4 2.80002 5.4C1.47454 5.4 0.400024 4.32548 0.400024 3C0.400024 1.67452 1.47454 0.599998 2.80002 0.599998C4.12551 0.599998 5.20002 1.67452 5.20002 3Z"
      fill="#101418"
    />
    <Path
      d="M12.4 3C12.4 4.32548 11.3255 5.4 10 5.4C8.67454 5.4 7.60002 4.32548 7.60002 3C7.60002 1.67452 8.67454 0.599998 10 0.599998C11.3255 0.599998 12.4 1.67452 12.4 3Z"
      fill="#101418"
    />
    <Path
      d="M17.2 5.4C18.5255 5.4 19.6 4.32548 19.6 3C19.6 1.67452 18.5255 0.599998 17.2 0.599998C15.8745 0.599998 14.8 1.67452 14.8 3C14.8 4.32548 15.8745 5.4 17.2 5.4Z"
      fill="#101418"
    />
  </Svg>
);
export default MenuHorizontal;