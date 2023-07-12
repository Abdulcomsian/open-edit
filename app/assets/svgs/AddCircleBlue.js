import * as React from 'react';
import Svg, {G, Circle, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const AddCircleBlue = props => (
  <Svg
    width={48}
    height={49}
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_193_1608)">
      <Circle cx={24} cy={24.5} r={24} fill="#0082CB" fillOpacity={0.1} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 17.5C24.5523 17.5 25 17.9477 25 18.5V23.5H30C30.5523 23.5 31 23.9477 31 24.5C31 25.0523 30.5523 25.5 30 25.5H25V30.5C25 31.0523 24.5523 31.5 24 31.5C23.4477 31.5 23 31.0523 23 30.5V25.5H18C17.4477 25.5 17 25.0523 17 24.5C17 23.9477 17.4477 23.5 18 23.5L23 23.5V18.5C23 17.9477 23.4477 17.5 24 17.5Z"
        fill="#4B99E9"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_193_1608">
        <Rect
          width={48}
          height={48}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AddCircleBlue;
