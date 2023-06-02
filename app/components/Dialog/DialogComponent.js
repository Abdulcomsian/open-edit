import Modal from 'react-native-modal';
import {forwardRef, useImperativeHandle, useRef} from 'react';

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
      avoidKeyboard={true}
      {...rest}>
      {children}
    </Modal>
  );
});
export default Dialog;
