import screens from '../constants/screens';
import HomeScreenHeader from '../screens/HomeScreen/HomeScreenHeader';
import FolderDetailHeader from '../screens/FolderDetailScreen/FolderDetailHeader';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import EditIcon from '../assets/svgs/EditIcon';
import {goBack} from '../utils/navigationUtils';
import JobsScreenHeader from '../screens/JobsScreen/JobsScreenHeader';
import CreateProfileHeader from '../components/CreateProfileHeader/CreateProfileHeader';

const HeadersMapper = ({route}) => {
  const {name} = route || {};

  const renderHeadersAccordingly = () => {
    switch (name) {
      case screens.HOME:
      case screens.EDITOR_HOME:
        return <HomeScreenHeader screenName={name} />;
      case screens.FOLDER_DETAIL:
        return <FolderDetailHeader />;
      case screens.POST_JOB:
      case screens.REVIEW_DETAILS:
        return (
          <ScreenHeader
            title={route?.name}
            RightIcon={() =>
              name === screens.REVIEW_DETAILS ? <EditIcon /> : null
            }
            onRightIconPress={goBack}
          />
        );
      case screens.JOBS:
      case screens.FAVOURITES:
      case screens.MESSAGES:
        return <JobsScreenHeader route={route} />;
      case screens.PROPOSALS:
        return <CreateProfileHeader route={route} />;
      default:
        return null;
    }
  };

  return <>{renderHeadersAccordingly()}</>;
};
export default HeadersMapper;
