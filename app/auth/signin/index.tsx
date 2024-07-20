import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

export default function SignIn() {
  const navigation = useNavigation();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    if (!email && !password) {
      console.log("Please fill all fields");
      Alert.alert("Please fill all fields");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Successfully signed in", user);
        Alert.alert("Signed in successfully");
        router.push("mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // Alert.alert(errorCode, errorMessage);
        if (errorCode === "auth/user-not-found") {
          Alert.alert("User not found");
        }
      });
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={30} color={Colors.BLACK} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 50,
          fontFamily: "RobotoSlab-Bold",
          marginTop: 30,
        }}
      >
        Sign In!
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "RobotoSlab-Medium",
          marginTop: 10,
          color: Colors.GREY,
        }}
      >
        Welcome to Ai Trip Planner! Sign in to start your journey.
      </Text>
      <View style={{ marginTop: 40, backgroundColor: Colors.WHITE }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
          placeholderTextColor={Colors.GREY}
          placeholder="Enter Email"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={(value) => setPassword(value)}
          style={styles.input}
          placeholderTextColor={Colors.GREY}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          onSignIn();
        }}
        style={{
          marginTop: 25,
          alignItems: "center",
          padding: 20,
          backgroundColor: Colors.BLACK,
          borderRadius: 25,
          shadowColor: Colors.BLACK,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "RobotoSlab-Medium",
            color: Colors.WHITE,
            fontSize: 20,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      {/* signup redirect to signup page */}
      <TouchableOpacity
        onPress={() => {
          router.push("auth/signup");
        }}
        style={{
          marginTop: 40,
          alignItems: "center",
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 25,
          borderWidth: 1,
          shadowColor: Colors.BLACK,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            fontFamily: "RobotoSlab-Regular",
            color: Colors.BLACK,
            fontSize: 20,
          }}
        >
          Create Account{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 15,
    marginVertical: 30,
    fontFamily: "RobotoSlab-Regular",
  },
  label: {
    fontFamily: "RobotoSlab-Medium",
    marginBottom: -20,
    paddingLeft: 5,
    fontSize: 20,
  },
});
