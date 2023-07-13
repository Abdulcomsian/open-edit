import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ChevronForward = props => (
  <Svg
    width={9}
    height={14}
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.32285 6.70368C8.31532 6.44001 8.21738 6.21401 8.01398 6.0106L2.15293 0.277623C1.97966 0.111886 1.77625 0.0214844 1.52765 0.0214844C1.02291 0.0214844 0.631165 0.413226 0.631165 0.917969C0.631165 1.15904 0.7291 1.38504 0.90237 1.55831L6.17581 6.70368L0.90237 11.8491C0.7291 12.0223 0.631165 12.2408 0.631165 12.4894C0.631165 12.9941 1.02291 13.3859 1.52765 13.3859C1.76872 13.3859 1.97966 13.2955 2.15293 13.1297L8.01398 7.38923C8.22491 7.19336 8.32285 6.96736 8.32285 6.70368Z"
      fill="#7B7C7D"
    />
  </Svg>
);
export default ChevronForward;