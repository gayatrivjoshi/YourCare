import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';

const WriteJournal = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <Text>WriteJournal</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default WriteJournal;
