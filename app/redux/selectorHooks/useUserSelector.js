import {useSelector} from 'react-redux';

const useUserSelector = () => {
  const {user} = useSelector(state => state.user);

  return {
    user,
  };
};
export default useUserSelector;
