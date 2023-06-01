import {View} from 'react-native';
import {getVerticalScale } from "../../utils/metrics";
import {colors} from '../../utils/theme';

const HorizontalLine = () => {
  return (
    <View
      style={{
        width: '90%',
        height: 1,
        marginTop: getVerticalScale(35),
        backgroundColor: colors.lightGrey1,
      }}
    />
  );
};
export default HorizontalLine;
