import {useSelector} from 'react-redux';

const useFoldersSelector = () => {
  const {folders} = useSelector(state => state.folders);
  const getFolderById = id => folders.filter(item => item.id === id)[0];
  return {
    folders,
    getFolderById,
  };
};
export default useFoldersSelector;
