import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ChevronDown = props => (
  <Svg
    width={14}
    height={9}
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.375 1.98438L7 7.60938L12.625 1.98438"
      stroke="#C4C4C4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ChevronDown;
