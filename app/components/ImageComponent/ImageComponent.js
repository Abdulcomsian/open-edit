import {Image} from 'react-native';

const ImageComponent = ({source, resizeMode = 'contain', style}) => {
  return <Image source={source} resizeMode={resizeMode} style={style} />;
};
export default ImageComponent;
