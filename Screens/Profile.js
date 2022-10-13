import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

const Profile = ({ navigation }) => {
  const { user } = React.useContext(UserContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F9F9F9',
          alignItems: 'center',
          padding: '5%',
          width: '100%',
        }}
      >
        <Image source={require('../assets/icons/profilepic.png')} style={{}} />
        <Text>Hello, {user.name}</Text>
      </View>

      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Profile;
