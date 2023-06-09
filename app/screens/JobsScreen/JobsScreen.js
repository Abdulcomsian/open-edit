import React from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';
import useJobSelector from '../../redux/selectorHooks/useJobSelector';
import {getFontSize, SCREEN_WIDTH} from '../../utils/metrics';
import TextComponent from '../../components/TextComponent/TextComponent';
import {colors} from '../../utils/theme';
import Touchable from '../../components/Touchable/Touchable';
import TabIndicator from '../FolderDetailScreen/TabIndicator';
import {useRef, useState} from 'react';
import JobsPosted from './JobsPosted';
import JobsRequests from './JobsRequests';

const jobTabs = [
  {
    id: '1',
    title: 'Jobs',
    key: 'jobs',
    Page: JobsPosted,
  },
  {
    id: '2',
    title: 'Requests',
    key: 'requests',
    Page: JobsRequests,
  },
];

const JobsScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalTabWidth, setTotalTabWidth] = useState(0);
  const {jobsPosted} = useJobSelector();
  const flatListRef = useRef(null);

  const onTabPress = index => {
    setActiveIndex(index);
    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.x / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  const renderTabs = () => {
    return (
      <Animated.View
        onLayout={event => setTotalTabWidth(event?.nativeEvent?.layout?.width)}
        style={{
          width: '90%',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 2,
          borderBottomColor: '#C4C4C4',
        }}>
        {jobTabs.map((item, index) => {
          const isSelected = index === activeIndex;
          return (
            <Touchable
              key={String(item.id)}
              onPress={() => onTabPress(index)}
              style={{
                width: totalTabWidth / 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextComponent
                font={isSelected ? 'semiBold' : 'regular'}
                style={{
                  color: isSelected ? colors.primary : '#C4C4C4',
                  fontSize: getFontSize(14),
                }}>
                {item.title}
              </TextComponent>
              {item.key === 'requests' && jobsPosted?.length > 0 ? (
                <View
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    backgroundColor: colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    end: 30,
                  }}>
                  <TextComponent
                    style={{fontSize: getFontSize(9), color: colors.white}}>
                    {jobsPosted?.length}
                  </TextComponent>
                </View>
              ) : null}
            </Touchable>
          );
        })}
        <TabIndicator
          activeTab={activeIndex}
          totalTabs={jobTabs.length}
          tabWidth={totalTabWidth / 2}
          containerStyle={{bottom: -2}}
        />
      </Animated.View>
    );
  };

  const renderTabContent = () => {
    return (
      <Animated.FlatList
        ref={flatListRef}
        data={jobTabs}
        extraData={activeIndex}
        scrollEnabled={true}
        keyExtractor={(item, index) => String(item.key || index)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyboardShouldPersistTaps={'handled'}
        // onScroll={handleScroll}
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
        }}
        decelerationRate={'fast'}
        scrollEventThrottle={32}
        onMomentumScrollEnd={handleScroll}
        renderItem={({item, index}) => {
          const {Page} = item || {};
          return <Page />;
        }}
      />
    );
  };

  return (
    <View style={styles.parent}>
      {renderTabs()}
      {renderTabContent()}
    </View>
  );
};
export default JobsScreen;
