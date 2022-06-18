import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import tw from "../lib/tailwind.js";
import { UserContext } from "../context/UserContext.js";

const SignUp = ({ navigation }) => {
  const { user, setUser } = React.useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [emailValidError, setEmailValidError] = useState(" ");
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(" ");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(" ");

  const handleValidEmail = (val) => {
    let reg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (val.length === 0) {
      setEmailValidError("Email address must be entered");
    } else if (reg.test(val) === false) {
      setEmailValidError("Enter valid email address");
    } else if (reg.test(val) === true) {
      setEmailValidError("");
    }
  };

  const handleNameError = (val) => {
    if (val.length === 0) {
      setNameError("Name must be entered");
    } else {
      setNameError("");
    }
  };

  const handlePasswordError = (val) => {
    let regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{6,}$/;
    if (val.length === 0) {
      setPasswordError("Password must be entered");
    } else if (regex.test(val) === false) {
      setPasswordError("Enter a valid password.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F9F9F9",
        justifyContent: "flex-start",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={tw`mt-20 justify-start items-center`}>
        <Text style={tw`text-xl mb-5 text-primary-black`}>SignUp</Text>
        <Text style={tw`text-primary-black`}>
          Please fill the details and create account
        </Text>
      </View>
      <View style={tw`flex-col ml-10 py-3 mt-10 justify-start`}>
        <Text style={tw`text-primary-black`}>Name</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="John Doe"
            onChangeText={(value) => {
              setName(value);
              setUser({ ...user, name: value });
              handleNameError(value);
            }}
            value={name}
          />
          <Text style={tw`mt-3 text-secondary-red`}>{nameError}</Text>
        </View>
      </View>
      <View style={tw`flex-col ml-10 py-3 mt-5 justify-start`}>
        <Text style={tw`text-primary-black`}>Email</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="example@gmail.com"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
                setUser({ ...user, email: value });
              handleValidEmail(value);
            }}
            keyboardType="email-address"
          />
          <Text style={tw`mt-3 text-secondary-red`}>{emailValidError}</Text>
        </View>
      </View>
      <View style={tw`flex-col ml-10 mt-5 py-3 justify-start`}>
        <Text style={tw`text-primary-black`}>Password</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter a password"
            value={password}
            onChangeText={(value) => {
              setPassword(value);
                setUser({ ...user, password: value });
              handlePasswordError(value);
            }}
          />
          <Text style={tw`mt-3 text-secondary-red`}>{passwordError}</Text>
        </View>
      </View>
      <View style={tw`flex-col justify-start`}>
        <TouchableOpacity
          onPress={() => {
            if (
              emailValidError === "" &&
              nameError === "" &&
              passwordError === ""
            ) {
              navigation.navigate("Age");
            } else {
              console.log("Fill all the details");
            }
          }}
          style={styles.button}
        >
          <Text style={tw`text-lg text-primary-white`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row justify-center items-center`}>
        <Text style={tw`text-primary-black`}>Already have an account?</Text>
        <TouchableOpacity>
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
    marginTop: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginLeft: "10%",
    height: 50,
  },
  input: {
    backgroundColor: "#E8E8E8",
    padding: 10,
    marginTop: 10,
    width: "90%",
    height: 50,
  },
});

export default SignUp;
