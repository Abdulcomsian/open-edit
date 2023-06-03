import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ChevronLeft = props => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.0235 25.6933C20.2387 25.8918 20.5127 26 20.8356 26C21.4814 26 22 25.531 22 24.9357C22 24.6381 21.863 24.3675 21.638 24.1601L14.7886 17.991L21.638 11.8399C21.863 11.6325 22 11.3529 22 11.0643C22 10.469 21.4814 10 20.8356 10C20.5127 10 20.2387 10.1082 20.0235 10.3067L12.411 17.1612C12.137 17.3957 12.0098 17.6843 12 18C12 18.3157 12.137 18.5862 12.411 18.8298L20.0235 25.6933Z"
      fill="black"
    />
  </Svg>
);
export default ChevronLeft;
