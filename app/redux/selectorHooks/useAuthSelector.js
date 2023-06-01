import {useSelector} from 'react-redux';

const useAuthSelector = () => {
  const {isLoggedIn} = useSelector(state => state.auth);

  return {
    isLoggedIn,
  };
};
export default useAuthSelector;
