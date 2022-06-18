import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';

const MentalHealth = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <Text>MentalHealth</Text>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default MentalHealth;
