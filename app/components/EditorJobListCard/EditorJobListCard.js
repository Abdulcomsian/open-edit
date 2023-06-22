import {Platform, View} from 'react-native';
import {getFontSize, getMScale, getVerticalScale} from '../../utils/metrics';
import {colors} from '../../utils/theme';
import TextComponent from '../TextComponent/TextComponent';
import AttachIconSmall from '../../assets/svgs/AttachIconSmall';
import Touchable from '../Touchable/Touchable';
import { useState } from "react";

const EditorJobListCard = ({item, onApplyPress}) => {
  const {title, price, description, requiredSkills} = item || {};
  return (
    <View
      style={{
        width: '100%',
        padding: getMScale(20),
        backgroundColor: colors.white,
        marginVertical: getVerticalScale(6),
        borderRadius: 16,
        ...Platform.select({
          ios: {
            shadowColor: colors.black,
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowOffset: {width: 1, height: 0},
          },
          android: {
            elevation: 3,
          },
        }),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <TextComponent
          font={'semiBold'}
          style={{width: '80%', fontSize: getFontSize(14)}}>
          {title}
        </TextComponent>
        <TextComponent font={'semiBold'} style={{fontSize: getFontSize(14)}}>
          $ {price}
        </TextComponent>
      </View>
      <TextComponent
        style={{
          color: '#40577D',
          fontSize: getFontSize(12),
          marginTop: getVerticalScale(5),
        }}>
        {description}
      </TextComponent>
      <View style={{flexDirection: 'row', marginTop: getVerticalScale(7)}}>
        <AttachIconSmall />
        <TextComponent style={{fontSize: getFontSize(12), color: '#178AFF'}}>
          Folder Link
        </TextComponent>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: getVerticalScale(17),
        }}>
        {requiredSkills.map(item => {
          return (
            <View
              key={item.id}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 38,
                backgroundColor: 'rgba(196, 196, 196, 0.2)',
                marginEnd: getMScale(5),
              }}>
              <TextComponent
                style={{color: '#40577D', fontSize: getFontSize(12)}}>
                {item.name}
              </TextComponent>
            </View>
          );
        })}
        <Touchable
          onPress={onApplyPress}
          style={{
            paddingHorizontal: 23,
            paddingVertical: 8,
            borderRadius: 38,
            backgroundColor: colors.primary,
            marginEnd: getMScale(5),
          }}>
          <TextComponent
            font={'bold'}
            style={{color: colors.white, fontSize: getFontSize(12)}}>
            Apply
          </TextComponent>
        </Touchable>
      </View>
    </View>
  );
};
export default EditorJobListCard;
