import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import tw from "../lib/tailwind.js";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F9F9F9",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={tw`justify-start items-center`}>
        <Image
          style={tw`mt-30 w-80 h-70`}
          source={require("../assets/images/Welcome.png")}
        />
      </View>
      <View style={tw`mt-10 justify-start items-center`}>
        <Text style={tw`text-xl text-primary-black`}>Welcome to YourCare</Text>
        <Text style={tw`text-primary-black`}>
          Helping you live longer, healthier and better.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Sign Up");
        }}
      >
        <Text style={tw`text-lg text-primary-white`}>Getting Started</Text>
      </TouchableOpacity>
      <View style={tw`flex-row justify-center items-center`}>
        <Text style={tw`text-primary-black`}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
          <Text style={tw`text-secondary-purple`}> Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C490E4",
    padding: 10,
    borderRadius: 10,
    marginTop: 90,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
  },
});

export default Welcome;
