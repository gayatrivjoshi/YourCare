import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const HomeCard = ({ key, title, image, buttonTitle, route, navigation }) => {
  return (
    <View
      style={{
        backgroundColor: '#FFE1F8',
        width: '80%',
        height: 150,
        marginTop: '8%',
        padding: '5%',
        borderRadius: 20,
        elevation: 5,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      key={key}
    >
      <View
        style={{
          width: '40%',
          backgroundColor: '#F9F9F9',
          height: '100%',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image source={image} />
      </View>
      <View
        style={{
          width: '60%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            fontFamily: 'SourceSansPro-Bold',
            marginLeft: '10%',
            color: '#4F4C4C',
          }}
        >
          {title}
        </Text>
        <TouchableOpacity
          style={{
            width: '80%',
            height: '30%',
            backgroundColor: '#C490E4',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
          }}
          onPress={() => navigation.navigate(route)}
        >
          <Text
            style={{
              fontSize: 14,
              color: '#F9F9F9',
              fontFamily: 'SourceSansPro-Regular',
              textAlign: 'center',
            }}
          >
            {buttonTitle}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeCard;
