import {TouchableOpacity} from 'react-native';

const Touchable = ({children, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style}>
      {children}
    </TouchableOpacity>
  );
};
export default Touchable;
