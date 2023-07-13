import React from 'react';
import {StyleSheet, View} from 'react-native';

import ImageComponent from '../ImageComponent/ImageComponent';
import {images} from '../../assets';
import {colors} from '../../utils/theme';
import TextComponent from '../TextComponent/TextComponent';
import { getFontSize, getVerticalScale } from "../../utils/metrics";
import dayjs from 'dayjs';
import ReadIndicator from '../../assets/svgs/ReadIndicator';
import { isIos } from "../../utils/sharedUtils";

const MessageListCard = ({item}) => {
  return (
    <View style={styles.parent}>
      <View style={styles.leftMostView}>
        <ImageComponent
          style={styles.senderImage}
          source={images.messages_image}
        />
        {item.isOnline ? <View style={styles.onlineIndicator} /> : null}
      </View>
      <View style={styles.rightView}>
        <View style={styles.nameAndTimeView}>
          <TextComponent font={'medium'} style={styles.nameText}>
            {item.senderName}
          </TextComponent>
          <TextComponent font={'medium'} style={styles.messageTimeText}>
            {dayjs().format('hh:mm:a')}
          </TextComponent>
        </View>
        <View style={styles.lastMessageAndCountView}>
          <TextComponent
            font={'medium'}
            numberOfLines={1}
            style={styles.lastMessageText}>
            {item.lastMessage}
          </TextComponent>
          {item.unreadCount > 0 ? (
            <View style={styles.unreadCountView}>
              <TextComponent font={'semiBold'} style={styles.unreadCountText}>
                {item.unreadCount}
              </TextComponent>
            </View>
          ) : (
            <ReadIndicator />
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    width: '97%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5,
  },
  leftMostView: {width: '15%'},
  senderImage: {width: 42, height: 42, borderRadius: 16},
  onlineIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.success,
    position: 'absolute',
    right: 10,
  },
  rightView: {
    width: '85%',
    alignItems: 'flex-start',
    marginStart: getVerticalScale(10),
  },
  nameAndTimeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameText: {fontSize: getFontSize(14), width: '85%'},
  messageTimeText: {
    fontSize: getFontSize(10),
    width: '15%',
    color: colors.neutralWeak,
    textAlign: 'right',
  },
  lastMessageAndCountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: isIos ? 5 : 0,
  },
  lastMessageText: {
    fontSize: getFontSize(12),
    color: colors.disabled,
    width: '90%',
  },
  unreadCountView: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary_30,
    borderRadius: 10,
  },
  unreadCountText: {color: colors.primary, fontSize: getFontSize(10)},
});
export default MessageListCard;
