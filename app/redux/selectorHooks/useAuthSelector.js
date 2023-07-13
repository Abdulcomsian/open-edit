import {useSelector} from 'react-redux';

const useAuthSelector = () => {
  const {isLoggedIn, userType} = useSelector(state => state.auth);

  return {
    isLoggedIn,
    userType,
  };
};
export default useAuthSelector;
