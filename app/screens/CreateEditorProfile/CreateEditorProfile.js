import {FlatList, View} from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import {SCREEN_WIDTH} from '../../utils/metrics';
import { colors } from "../../utils/theme";

const signupPages = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
];
const CreateEditorProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setParams({signupSteps: signupPages, activeStep: activeIndex});
  }, [activeIndex]);

  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.x / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  const flatListRef = useRef(null);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: SCREEN_WIDTH,
          alignItem: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: colors.white,
        }}>
        <TextComponent>{item.id}</TextComponent>
      </View>
    );
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        ref={flatListRef}
        bounces={false}
        data={signupPages}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={event => {
          const {contentOffset} = event.nativeEvent;
          const currentIndex = Math.round(contentOffset.x / SCREEN_WIDTH);
          setActiveIndex(currentIndex);
        }}
        accessibilityRole="list"
      />
    </View>
  );
};
export default CreateEditorProfile;
