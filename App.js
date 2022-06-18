import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import SignUp from './Screens/SignUp';
import Age from './components/Age';
import Home from './Screens/Home';
import MentalHealth from './Screens/MentalHealth';
import Badge from './Screens/Badge';
import Profile from './Screens/Profile';
import TrackSleep from './Screens/TrackSleep';
import WriteJournal from './Screens/WriteJournal';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
  });
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Mental Health" component={MentalHealth} />
        <Stack.Screen name="Badge" component={Badge} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Track Sleep" component={TrackSleep} />
        <Stack.Screen name="Write Journal" component={WriteJournal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
