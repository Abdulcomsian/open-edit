import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const CalendarIconSmall = props => (
  <Svg
    width={11}
    height={12}
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_94_2236)">
      <Path
        d="M8.9375 1.92493H2.0625C1.49296 1.92493 1.03125 2.38663 1.03125 2.95618V9.14368C1.03125 9.71322 1.49296 10.1749 2.0625 10.1749H8.9375C9.50704 10.1749 9.96875 9.71322 9.96875 9.14368V2.95618C9.96875 2.38663 9.50704 1.92493 8.9375 1.92493Z"
        stroke="black"
        strokeLinejoin="round"
      />
      <Path
        d="M2.75 1.23743V1.92493"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 1.23743V1.92493"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.96875 3.64368H1.03125"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_94_2236">
        <Rect
          width={11}
          height={11}
          fill="white"
          transform="translate(0 0.206177)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CalendarIconSmall;
