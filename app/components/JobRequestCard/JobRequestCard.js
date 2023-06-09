import React from 'react';
import { View, StyleSheet, Platform } from "react-native";

import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {colors} from '../../utils/theme';
import ImageComponent from '../ImageComponent/ImageComponent';
import {images} from '../../assets';
import TextComponent from '../TextComponent/TextComponent';
import Button from '../Button/Button';
import {FONTS} from '../../utils/fonts';
import strings from '../../constants/strings';
import FavouriteIcon from '../../assets/svgs/FavouriteIcon';

const JobRequestCard = ({item, isFavourite}) => {
  const {name, description, price, skills} = item || {};

  return (
    <View style={styles.parent}>
      <View style={styles.topView}>
        <View style={styles.editorImageView}>
          <ImageComponent
            source={images.dummy_profile}
            style={styles.editorImage}
          />
        </View>
        <View style={styles.nameAndSkillsView}>
          <TextComponent font={'semiBold'} style={styles.nameText}>
            {name}
          </TextComponent>
          <TextComponent style={styles.skillsText} numberOfLines={1}>
            {skills.join(' | ')}
          </TextComponent>
        </View>
        <View style={[styles.rightMostView, isFavourite && {width: '5%'} ]}>
          {isFavourite ? (
            <FavouriteIcon />
          ) : (
            <TextComponent font={'semiBold'}>$ {price}</TextComponent>
          )}
        </View>
      </View>
      <TextComponent style={styles.descriptionText}>
        Lorem ipsum dolor sit amet consectetur. Pellentesque ut risus et viverra
        nec orci conse pharetra euismod.
      </TextComponent>
      {!isFavourite ? (
        <View style={styles.buttonView}>
          <Button
            title={strings.hire}
            style={styles.confirmButtonStyle}
            titleStyle={styles.confirmButtonTitleStyle}
          />
          <Button
            title={strings.cancel}
            style={styles.cancelButtonStyle}
            titleStyle={styles.cancelButtonTitle}
          />
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    // marginHorizontal: getMScale(15),
    width: '95%',
    marginVertical: getVerticalScale(5),
    alignSelf: 'center',
    borderRadius: 18,
    paddingVertical: getVerticalScale(15),
    backgroundColor: colors.white,
    paddingHorizontal: getMScale(10),
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 2,
      }
    })
  },
  topView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  editorImageView: {width: '10%', alignItems: 'flex-start'},
  editorImage: {width: 40, height: 40, borderRadius: 20},
  nameAndSkillsView: {width: '70%', alignItems: 'flex-start'},
  nameText: {fontSize: getFontSize(14)},
  skillsText: {fontSize: getFontSize(14), width: '70%'},
  rightMostView: {width: '10%', alignItems: 'flex-start'},
  descriptionText: {
    marginTop: getVerticalScale(15),
    color: colors.textSecondary,
    fontSize: getFontSize(11),
  },
  buttonView: {
    marginTop: getVerticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirmButtonStyle: {width: '45%', height: 40},
  confirmButtonTitleStyle: {fontFamily: FONTS.REGULAR},
  cancelButtonStyle: {width: '45%', height: 40, backgroundColor: '#F1F1F1'},
  cancelButtonTitle: {color: colors.textPrimary, fontFamily: FONTS.REGULAR},
});
export default React.memo(JobRequestCard);
