import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const FloatingAddIcon = props => (
  <Svg
    width={51}
    height={50}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={0.178955}
      y={0.0000610352}
      width={50}
      height={50}
      rx={25}
      fill="#FD683D"
    />
    <Path
      d="M26.179 18.3334C26.179 17.7811 25.7312 17.3334 25.179 17.3334C24.6267 17.3334 24.179 17.7811 24.179 18.3334V24.0001H18.5123C17.96 24.0001 17.5123 24.4478 17.5123 25.0001C17.5123 25.5524 17.96 26.0001 18.5123 26.0001H24.179V31.6667C24.179 32.219 24.6267 32.6667 25.179 32.6667C25.7312 32.6667 26.179 32.219 26.179 31.6667V26.0001H31.8456C32.3979 26.0001 32.8456 25.5524 32.8456 25.0001C32.8456 24.4478 32.3979 24.0001 31.8456 24.0001H26.179V18.3334Z"
      fill="white"
    />
  </Svg>
);
export default FloatingAddIcon;
