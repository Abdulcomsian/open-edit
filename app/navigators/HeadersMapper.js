import screens from '../constants/screens';
import HomeScreenHeader from '../screens/HomeScreen/HomeScreenHeader';
import FolderDetailHeader from '../screens/FolderDetailScreen/FolderDetailHeader';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';

const HeadersMapper = ({route}) => {
  const {name} = route || {};

  const renderHeadersAccordingly = () => {
    switch (name) {
      case screens.HOME:
        return <HomeScreenHeader />;
      case screens.FOLDER_DETAIL:
        return <FolderDetailHeader />;
      case screens.POST_JOB:
      case screens.REVIEW_DETAILS:
        return <ScreenHeader title={route?.name} />;
      default:
        return null;
    }
  };

  return <>{renderHeadersAccordingly()}</>;
};
export default HeadersMapper;
