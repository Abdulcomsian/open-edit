import React from 'react';
import {useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import SearchBar from '../../components/SearchBar/SearchBar';
import MessageListCard from '../../components/MessageListCard/MessageListCard';
import styles from './styles';

const messagesList = [
  {
    id: '1',
    senderName: 'John Doe',
    lastMessage: 'That’s great, I look forward to hearing back',
    unreadCount: 1,
    isOnline: true,
  },
  {
    id: '2',
    senderName: 'John Doe',
    lastMessage: '@Ovo How is it going?',
    unreadCount: 0,
  },
  {
    id: '3',
    senderName: 'John Doe',
    lastMessage: 'image.png',
    unreadCount: 1,
  },
  {
    id: '4',
    senderName: 'JohnDoe',
    lastMessage: 'How is it going?',
    unreadCount: 0,
  },
];
const MessagesScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [messages, setMessages] = useState(messagesList);

  const renderMessagesItems = ({item}) => {
    return <MessageListCard item={item} />;
  };
  return (
    <View style={styles.parent}>
      <SearchBar value={searchValue} onChangeText={setSearchValue} />
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessagesItems}
        style={styles.list}
      />
    </View>
  );
};

export default MessagesScreen;
