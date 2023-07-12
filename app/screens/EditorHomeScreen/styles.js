import {StyleSheet} from 'react-native';
import { getMScale, getVerticalScale } from "../../utils/metrics";

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: getMScale(15),
    paddingTop: getMScale(15),
    backgroundColor: '#FAFAFA',
  },
  listHeader: {
    marginTop: getVerticalScale(20),
    marginBottom: getVerticalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default styles;
