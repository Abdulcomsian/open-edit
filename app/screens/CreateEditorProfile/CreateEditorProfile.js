import React from 'react';
import {FlatList, View} from 'react-native';
import {useRef} from 'react';
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
        return <View />;
    }
  };
  const renderItem = ({item}) => {
    return <View style={styles.pageContainer}>{renderPages(item.key)}</View>;
  };
  return (
    <View style={styles.parent}>
      <FlatList
        ref={flatListRef}
        bounces={false}
        data={signupPages}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        // onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={handleScroll}
        accessibilityRole="list"
      />
    </View>
  );
};
export default CreateEditorProfile;
