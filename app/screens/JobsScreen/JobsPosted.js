import useJobSelector from '../../redux/selectorHooks/useJobSelector';
import {FlatList, View} from 'react-native';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import {images} from '../../assets';
import TextComponent from '../../components/TextComponent/TextComponent';
import {
  getFontSize,
  getMScale,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import strings from '../../constants/strings';
import {colors} from '../../utils/theme';
import Button from '../../components/Button/Button';
import JobsItemCard from '../../components/JobsItemCard/JobsItemCard';

const JobsPosted = () => {
  const {jobsPosted} = useJobSelector();

  const renderListEmptyComponent = () => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
      }}>
      <ImageComponent
        source={images.empty_job_list_icon}
        style={{width: 200, height: 180, marginTop: 150}}
      />
      <TextComponent font={'medium'} style={{fontSize: getFontSize(18)}}>
        {strings.no_jobs_posted}
      </TextComponent>
      <TextComponent
        style={{
          color: colors.textSecondary,
          fontSize: getFontSize(14),
          width: '80%',
          textAlign: 'center',
          marginTop: getVerticalScale(13),
        }}>
        {strings.no_jobs_description}
      </TextComponent>
      <Button
        title={'Post Job'}
        style={{
          width: getMScale(140),
          height: getVerticalScale(42),
          marginTop: getVerticalScale(35),
        }}
      />
    </View>
  );

  const renderJobsPosted = ({item}) => {
    return <JobsItemCard item={item} containerStyle={{width: '99%'}} />;
  };

  return (
    <View style={{flex: 1, width: SCREEN_WIDTH, paddingHorizontal: 10}}>
      <FlatList
        data={jobsPosted}
        contentContainerStyle={{flex: 1}}
        renderItem={renderJobsPosted}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </View>
  );
};
export default JobsPosted;
