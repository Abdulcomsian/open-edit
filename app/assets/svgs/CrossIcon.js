import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CrossIcon = props => (
  <Svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.2051 4.3064L4.20508 12.3064"
      stroke="#A7A9B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.20508 4.3064L12.2051 12.3064"
      stroke="#A7A9B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CrossIcon;
