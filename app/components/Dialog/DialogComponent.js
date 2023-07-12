import Modal from 'react-native-modal';
import {forwardRef, useImperativeHandle, useRef} from 'react';
import { Dimensions } from "react-native";

const Dialog = forwardRef(({isVisible, onClose, children, ...rest}, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({}));

  return (
    <Modal
      ref={modalRef}
      statusBarTranslucent
      isVisible={isVisible}
      animationIn={'fadeIn'}
      useNativeDriver
      animationOut={'fadeOut'}
      hideModalContentWhileAnimating
      backdropOpacity={0.4}
      deviceHeight={Dimensions.get('screen').height}
      avoidKeyboard={true}
      {...rest}>
      {children}
    </Modal>
  );
});
export default Dialog;
