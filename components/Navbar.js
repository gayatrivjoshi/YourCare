import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const Navbar = ({ navigation }) => {
  const route = useRoute();
  const routeName = route.name;
  return (
    <SafeAreaView
      style={{
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 100,
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        position: 'absolute',
        bottom: '4%',
        left: '10%',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Image
          source={require('../assets/icons/home.png')}
          style={{
            width: 30,
            height: 30,
            opacity: routeName === 'Home' ? 1 : 0.5,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Mental Health');
        }}
      >
        <Image
          source={require('../assets/icons/mentalHealth.png')}
          style={{
            width: 30,
            height: 30,
            opacity: routeName === 'Mental Health' ? 1 : 0.5,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Badge');
        }}
      >
        <Image
          source={require('../assets/icons/badge.png')}
          style={{
            width: 30,
            height: 30,
            opacity: routeName === 'Badge' ? 1 : 0.5,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <Image
          source={require('../assets/icons/profile.png')}
          style={{
            width: 30,
            height: 30,
            opacity: routeName === 'Profile' ? 1 : 0.5,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Navbar;
