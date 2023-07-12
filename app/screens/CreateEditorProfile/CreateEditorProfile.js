import React from 'react';
import { Animated, View} from 'react-native';
import useCreateEditorProfile from './useCreateEditorProfile';
import styles from './styles';
import {signupPages} from './constants';
import {getScale} from '../../utils/metrics';
import {colors} from '../../utils/theme';

const CreateEditorProfile = () => {
  const {
    renderCreteSkillSetInputs,
    renderCreatePortfolio,
    renderEducationInfoSection,
    renderHourlyRateInputsSection,
    handleScroll,
    renderButtonJSX,
    flatListRef,
    renderProfileSetupSection,
    renderReviewProfileSection,
  } = useCreateEditorProfile();

  const renderPages = key => {
    switch (key) {
      case 'skillsSet':
        return <>{renderCreteSkillSetInputs()}</>;
      case 'portfolio':
        return (
          <>
            {renderCreatePortfolio()}
            <View
              style={{
                position: 'absolute',
                bottom: getScale(0),
                width: '100%',
              }}>
              {renderButtonJSX()}
            </View>
          </>
        );
      case 'education':
        return (
          <>
            {renderEducationInfoSection()}
            <View
              style={{
                position: 'absolute',
                bottom: getScale(0),
                width: '100%',
                backgroundColor: colors.white,
              }}>
              {renderButtonJSX()}
            </View>
          </>
        );
      case 'hourlyRate':
        return (
          <>
            {renderHourlyRateInputsSection()}
            <View
              style={{
                position: 'absolute',
                bottom: getScale(0),
                width: '100%',
                backgroundColor: colors.white,
              }}>
              {renderButtonJSX()}
            </View>
          </>
        );
      case 'profile':
        return <>{renderProfileSetupSection()}</>;
      case 'reviewProfile':
        return <>{renderReviewProfileSection()}</>;
      default:
        return <View/>
    }
  };
  const renderItem = ({item}) => {
    return <View style={styles.pageContainer}>{renderPages(item.key)}</View>;
  };
  return (
    <View style={styles.parent}>
      <Animated.FlatList
        ref={flatListRef}
        bounces={false}
        data={signupPages}
        renderItem={renderItem}
        scrollEnabled={false}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        onMomentumScrollEnd={handleScroll}
        onScroll={handleScroll}
        accessibilityRole="list"
      />
    </View>
  );
};
export default CreateEditorProfile;
