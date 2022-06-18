import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind.js';
import { UserContext } from '../context/UserContext.js';

const Meals = ({ navigation }) => {
  const { user, setUser } = React.useContext(UserContext);
  const [meal, setMeal] = React.useState('');
  const [mealError, setMealError] = React.useState(' ');

  const handleMealError = (val) => {
    const regex = /^[0-9]+$/;
    if (val.length === 0) {
      setMealError('Meal must be entered');
    } else if (regex.test(val) === false) {
      setMealError('Enter a valid meal');
    } else {
      setMealError('');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <Text style={tw`text-xl text-primary-black`}>How many meals you</Text>
      <Text style={tw`text-xl text-primary-black`}>have a day?</Text>
      <Text style={tw`mt-3 text-primary-black`}>
        This will help us give you reminders.
      </Text>
      <TextInput
        value={meal}
        style={styles.input}
        placeholder="1"
        keyboardType="numeric"
        onChangeText={(value) => {
          setMeal(value);
          setUser({ ...user, meal: value });
          handleMealError(value);
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (mealError === '') {
            setUser({ ...user, meal: meal });
            navigation.navigate('Home');
            setMeal('');
          } else {
            console.log('Meal error');
          }
        }}
      >
        <Text style={tw`text-lg text-primary-white`}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C490E4',
    padding: 10,
    borderRadius: 10,
    marginTop: '80%',
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
  },
  input: {
    backgroundColor: '#E8E8E8',
    marginTop: '5%',
    padding: 10,
    width: '60%',
    height: 40,
    textAlign: 'center',
  },
});

export default Meals;
