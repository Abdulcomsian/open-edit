import {TouchableOpacity} from 'react-native';

const Touchable = ({children, style, onPress, ...rest}) => {
  return (
    <TouchableOpacity
      hitSlop={{left: 15, right: 15, top: 15, bottom: 15}}
      onPress={onPress}
      activeOpacity={0.7}
      style={style}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};
export default Touchable;
