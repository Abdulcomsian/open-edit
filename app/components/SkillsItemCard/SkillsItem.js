import {colors} from '../../utils/theme';
import TextComponent from '../TextComponent/TextComponent';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import Touchable from '../Touchable/Touchable';
import {StyleSheet} from 'react-native';

const SkillsItem = ({onPress, isSelected, skill}) => {
  return (
    <Touchable
      onPress={() => onPress?.(skill)}
      style={[
        styles.parent,
        {backgroundColor: isSelected ? colors.primary : colors.primary_30},
      ]}>
      <TextComponent
        font={'medium'}
        style={[
          styles.name,
          {color: isSelected ? colors.white : colors.primary},
        ]}>
        {skill?.name}
      </TextComponent>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingVertical: getVerticalScale(10),
    paddingHorizontal: getMScale(8),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 50,
    marginEnd: 10,
    marginVertical: 5,
  },
  name: {
    fontSize: getFontSize(12),
  },
});
export default SkillsItem;
