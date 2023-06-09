import React from 'react';
import {
  getFontSize,
  getVerticalScale,
  SCREEN_WIDTH,
} from '../../utils/metrics';
import {FlatList, View} from 'react-native';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import {images} from '../../assets';
import TextComponent from '../../components/TextComponent/TextComponent';
import strings from '../../constants/strings';
import {colors} from '../../utils/theme';
import JobRequestCard from '../../components/JobRequestCard/JobRequestCard';

const jobRequests = [
  {
    id: '1',
    name: 'John Doe',
    skills: ['Video Editing', 'Adobe Premier Pro', 'After Effect'],
    price: 10,
    description: '',
  },
  {
    id: '2',
    name: 'John Doe',
    skills: ['Video Editing', 'Adobe Premier Pro', 'After Effect'],
    price: 25,
    description: '',
  },
  {
    id: '3',
    name: 'John Doe',
    skills: ['Video Editing', 'Adobe Premier Pro', 'After Effect'],
    price: 20,
    description: '',
  },
];
const JobsRequests = () => {
  const listEmptyComponent = () => (
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
        {strings.no_job_requests}
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
    </View>
  );

  const renderJobRequestItem = ({item}) => {
    return <JobRequestCard item={item} />;
  };
  return (
    <View style={{flex: 1, width: SCREEN_WIDTH, paddingHorizontal: 10}}>
      <FlatList
        data={jobRequests}
        contentContainerStyle={{flex: 1}}
        renderItem={renderJobRequestItem}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
};
export default React.memo(JobsRequests);
