import {FlatList, Text, View} from 'react-native';
import JobRequestCard from '../../components/JobRequestCard/JobRequestCard';
import {colors} from '../../utils/theme';
import {getVerticalScale} from '../../utils/metrics';

const favouriteJobs = [
  {
    id: '1',
    name: 'John Doe',
    skills: ['Video Editing', 'Adobe Premier Pro'],
    description: '',
  },
  {
    id: '2',
    name: 'John Doe',
    skills: ['Video Editing', 'Adobe Premier Pro'],
    description: '',
  },
  {
    id: '3',
    name: 'John Doe',
    skills: ['Video Editing', 'Adobe Premier Pro'],
    description: '',
  },
  {
    id: '4',
    name: 'John Doe',
    skills: ['Video Editing', 'Adobe Premier Pro'],
    description: '',
  },
];
const FavouritesScreen = () => {
  const renderFavourites = ({item}) => {
    return <JobRequestCard item={item} isFavourite />;
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        paddingTop: getVerticalScale(20),
      }}>
      <FlatList
        data={favouriteJobs}
        renderItem={renderFavourites}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};
export default FavouritesScreen;
