import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigationContainerRef } from '@react-navigation/native';
import HomeCard from '../components/HomeCard';
import personSleeping from '../assets/images/personSleeping.png';
import journal from '../assets/images/journal.png';

const Home = ({ navigation }) => {
  const salutation = ['Good morning', 'Good afternoon', 'Good evening'];
  const time = new Date().getHours();
  const greeting = salutation[time < 4 ? 2 : time < 12 ? 0 : time < 16 ? 1 : 2];
  const homecardinfo = [
    {
      title: 'Have at least 7-8 hours of sleep',
      image: personSleeping,
      buttonTitle: 'Track my sleep',
      route: 'Track Sleep',
    },
    {
      title: 'Write your thoughts in a journal',
      image: journal,
      buttonTitle: 'Write a journal',
      route: 'Write Journal',
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D7F9F3',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#D7F9F3',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '10%',
          height: 180,
        }}
      >
        <View
          style={{
            marginLeft: '10%',
          }}
        >
          <Text
            style={{
              flexWrap: 'wrap',
              fontSize: 18,
              fontWeight: 'bold',
              width: '50%',
              fontFamily: 'SourceSansPro-Bold',
              color: '#4F4C4C',
            }}
          >
            {greeting}, Gayatri Joshi
          </Text>
          <Text
            style={{
              flexWrap: 'wrap',
              fontSize: 15,
              width: '50%',
              marginTop: '5%',
              fontFamily: 'SourceSansPro-Regular',
              color: '#4F4C4C'
            }}
          >
            Drink at least 6 glasses of water everyday
          </Text>
        </View>
        <Image
          source={require('../assets/images/ladyDrinkingWater.png')}
          style={{
            width: '40%',
            marginRight: '20%',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f9f9f9',
          width: '100%',
          elevation: 10,
          shadowOpacity: 0.5,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#D7F9F3',
            width: '80%',
            height: 120,
            marginTop: '8%',
            padding: '5%',
            borderRadius: 20,
            elevation: 5,
            shadowOpacity: 0.5,
            shadowRadius: 5,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'SourceSansPro-Bold',
              color: '#4F4C4C',
            }}
          >
            How are you feeling today?
          </Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              width: '100%',
              marginTop: '5%',
            }}
          >
            <Image source={require('../assets/icons/happy.png')} />
            <Image source={require('../assets/icons/neutral.png')} />
            <Image source={require('../assets/icons/angry.png')} />
            <Image source={require('../assets/icons/sad.png')} />
          </View>
        </View>
        {homecardinfo.map((info, index) => (
          <HomeCard
            key={index}
            title={info.title}
            image={info.image}
            buttonTitle={info.buttonTitle}
            route={info.route}
            navigation={navigation}
          />
        ))}
      </View>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
