import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Profile;
