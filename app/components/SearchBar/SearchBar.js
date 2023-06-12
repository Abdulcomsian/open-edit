import SearchIcon from '../../assets/svgs/SearchIcon';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../utils/theme';
import strings from '../../constants/strings';
import React from 'react';
import {getMScale, getVerticalScale} from '../../utils/metrics';
import {FONTS} from '../../utils/fonts';

const SearchBar = ({value, onChangeText}) => {
  return (
    <View style={styles.searchBarView}>
      <SearchIcon />
      <TextInput
        placeholder={'Search'}
        placeholderTextColor={colors.black50}
        style={styles.searchInput}
        value={value}
        onChangeText={onChangeText}
        returnKeyLabel={strings.search}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchBarView: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 12,
    height: getVerticalScale(55),
    paddingHorizontal: 16,
  },
  searchInput: {
    marginStart: getMScale(6),
    color: colors.textPrimary,
    width: '90%',
    top: 2,
    marginEnd: getMScale(10),
    fontFamily: FONTS.REGULAR,
  },
});
export default React.memo(SearchBar);
