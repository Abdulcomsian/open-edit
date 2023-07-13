import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const LocationPin = props => (
  <Svg
    width={13}
    height={14}
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_446_2160)">
      <Path
        d="M6.5 1.23596C4.48145 1.23596 2.84375 2.79469 2.84375 4.71448C2.84375 6.92346 5.28125 10.4241 6.17627 11.6332C6.21342 11.6842 6.26211 11.7257 6.31838 11.7544C6.37464 11.783 6.43687 11.7979 6.5 11.7979C6.56313 11.7979 6.62536 11.783 6.68162 11.7544C6.73789 11.7257 6.78658 11.6842 6.82373 11.6332C7.71875 10.4246 10.1562 6.92524 10.1562 4.71448C10.1562 2.79469 8.51855 1.23596 6.5 1.23596Z"
        stroke="#AAABAF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.5 6.11096C7.1731 6.11096 7.71875 5.56531 7.71875 4.89221C7.71875 4.21911 7.1731 3.67346 6.5 3.67346C5.8269 3.67346 5.28125 4.21911 5.28125 4.89221C5.28125 5.56531 5.8269 6.11096 6.5 6.11096Z"
        stroke="#AAABAF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_446_2160">
        <Rect
          width={13}
          height={13}
          fill="white"
          transform="translate(0 0.0172119)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LocationPin;
