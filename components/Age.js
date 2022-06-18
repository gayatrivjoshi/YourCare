import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import tw from "../lib/tailwind.js";
import React from "react";
import { UserContext } from "../context/UserContext.js";

const Age = ({ navigation }) => {
  const { user, setUser } = React.useContext(UserContext);
  const [age, setAge] = React.useState("");
  const [ageError, setAgeError] = React.useState(" ");

  const handleAgeError = (val) => {
    const regex = /^[0-9]+$/;
    if (val.length === 0) {
      setAgeError("Age must be entered");
    } else if (regex.test(val) === false) {
      setAgeError("Enter a valid age");
    } else {
      setAgeError("");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F9F9F9",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={styles.text}>
        <Text style={tw`text-xl text-primary-black`}>Hey {user.name}!</Text>
        <Text style={tw`p-6 text-primary-black`}>
          We are happy to see you here. We need a few details to take you
          through your journey.
        </Text>
      </View>
      <Text style={tw`text-xl text-primary-black`}>What is your age?</Text>
      <TextInput
        value={age}
        style={styles.input}
        placeholder="19"
        keyboardType="numeric"
        onChangeText={(value) => {
          setAge(value);
            setUser({ ...user, age: value });
          handleAgeError(value);
        }}
      />
      <Text style={tw`mt-2 text-secondary-red`}>{ageError}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (ageError === "") {
            navigation.navigate("Meals");
          } else {
            console.log("error");
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
    backgroundColor: "#C490E4",
    padding: 10,
    borderRadius: 10,
    marginTop: "80%",
    marginBottom: "20%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
  },
  text: {
    marginTop: "20%",
    marginBottom: "12%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#E8E8E8",
    marginTop: "5%",
    padding: 10,
    width: "60%",
    height: 40,
    textAlign: "center",
  },
});

export default Age;
