import * as React from 'react';
import Svg, {G, Circle, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const AddMedia = props => (
  <Svg
    width={49}
    height={48}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_68_1101)">
      <Circle cx={24.6} cy={24} r={24} fill="#0082CB" fillOpacity={0.1} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6 17C25.1523 17 25.6 17.4477 25.6 18V23H30.6C31.1523 23 31.6 23.4477 31.6 24C31.6 24.5523 31.1523 25 30.6 25H25.6V30C25.6 30.5523 25.1523 31 24.6 31C24.0478 31 23.6 30.5523 23.6 30V25H18.6C18.0478 25 17.6 24.5523 17.6 24C17.6 23.4477 18.0478 23 18.6 23L23.6 23V18C23.6 17.4477 24.0478 17 24.6 17Z"
        fill="#4B99E9"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_68_1101">
        <Rect
          width={48}
          height={48}
          fill="white"
          transform="translate(0.600037)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AddMedia;
