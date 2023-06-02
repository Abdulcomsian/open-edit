import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';
const EmptyListAddIcon = props => (
  <Svg
    width={147}
    height={148}
    viewBox="0 0 147 148"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G opacity={0.5}>
      <Circle cx={73.5} cy={74} r={69.0946} stroke="#D9D9D9" strokeWidth={8} />
    </G>
    <G opacity={0.5}>
      <Path
        d="M73.5 53.6554V94.1554"
        stroke="#D9D9D9"
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M94.0312 73.9054H52.9688"
        stroke="#D9D9D9"
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default EmptyListAddIcon;
