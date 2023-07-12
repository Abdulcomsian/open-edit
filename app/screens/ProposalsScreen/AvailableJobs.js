import React from 'react';
import {getFontSize, getVerticalScale, SCREEN_WIDTH} from '../../utils/metrics';
import {FlatList, View} from 'react-native';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import {images} from '../../assets';
import TextComponent from '../../components/TextComponent/TextComponent';
import strings from '../../constants/strings';
import {colors} from '../../utils/theme';

const jobRequests = [
  {
    id: '1',
    title: 'I want to edit video for my birthday',
    price: 10,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et. ',
  },
  {
    id: '2',
    title: 'I want to edit video for my birthday',
    price: 10,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et. ',
  },
  {
    id: '3',
    title: 'I want to edit video for my birthday',
    price: 10,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et. ',
  },
  {
    id: '4',
    title: 'I want to edit video for my birthday',
    price: 10,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et. ',
  },
  {
    id: '5',
    title: 'I want to edit video for my birthday',
    price: 10,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit leo ullamcorper a et. ',
  },
];
const AvailableJobs = () => {
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
    return (
      <View
        style={{
          paddingVertical: 15,
          width: '95%',
          alignSelf: 'center',
          borderColor: '#56636F',
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <TextComponent
            font={'semiBold'}
            style={{fontSize: getFontSize(14), color: '#56636F'}}>
            {item.title}
          </TextComponent>
          <TextComponent
            font={'medium'}
            style={{fontSize: getFontSize(14), color: colors.primary}}>
            ${item.price}
          </TextComponent>
        </View>
        <TextComponent
          font={'medium'}
          style={{
            fontSize: getFontSize(12),
            color: '#56636F',
            marginTop: getVerticalScale(10),
          }}>
          {item.description}
        </TextComponent>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        width: SCREEN_WIDTH,
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        marginTop: getVerticalScale(20),
      }}>
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
export default React.memo(AvailableJobs);
