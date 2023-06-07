import styles from './styles';
import {View} from 'react-native';
import {images} from '../../assets';
import dayjs from 'dayjs';
import ImageComponent from '../ImageComponent/ImageComponent';
import TextComponent from '../TextComponent/TextComponent';
import CalendarIconSmall from '../../assets/svgs/CalendarIconSmall';
import GoalIcon from '../../assets/svgs/GoalIcon';

const JobsItemCard = ({item, containerStyle}) => {
  const {id, price, description, title, start, deadline: end} = item || {};
  return (
    <View key={String(id)} style={[styles.jobItemParent, containerStyle]}>
      <View style={styles.profileAndPriceView}>
        <ImageComponent
          source={images.dummy_profile}
          style={styles.profileIcon}
        />
        <TextComponent font={'bold'} style={styles.priceText}>
          ${price}
        </TextComponent>
      </View>
      <TextComponent font={'semiBold'} style={styles.jobDescriptionText}>
        {title}
      </TextComponent>
      <View style={styles.jobDurationView}>
        <View style={styles.jobDurationPortion}>
          <CalendarIconSmall />
          <TextComponent style={styles.jobStartText}>
            Start:{' '}
            <TextComponent style={styles.jobStartTime}>
              {dayjs(start).format('DD MMM')}
            </TextComponent>
          </TextComponent>
        </View>
        <View style={styles.jobDurationPortion}>
          <GoalIcon />
          <TextComponent style={styles.jobStartText}>
            End:{' '}
            <TextComponent style={styles.jobStartTime}>
              {dayjs(end).format('DD MMM')}
            </TextComponent>
          </TextComponent>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.activeProgress} />
      </View>
    </View>
  );
};
export default JobsItemCard;
