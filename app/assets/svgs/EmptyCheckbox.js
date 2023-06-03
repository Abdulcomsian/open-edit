import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
const EmptyCheckbox = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={3.5}
      fill="white"
      stroke="#C2C2C2"
    />
  </Svg>
);
export default EmptyCheckbox;
