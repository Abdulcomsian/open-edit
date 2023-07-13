import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
const EmptyCheckbox = ({isChecked}) => {
  if (isChecked) {
    return (
      <Svg
        width={18}
        height={19}
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect y={0.0688477} width={18} height={18} rx={4} fill="#FD683D" />
        <Path
          d="M7.02398 11.3774L4.45084 8.88999L3.57141 9.73113L7.02398 13.0688L14.4286 5.90999L13.5583 5.06885L7.02398 11.3774Z"
          fill="white"
          stroke="white"
          strokeWidth={0.5}
        />
      </Svg>
    );
  }
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
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
};
export default EmptyCheckbox;
