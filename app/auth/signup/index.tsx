import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "@/configs/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const OnCreateAccount = () => {
    if (!email || !password || !fullName) {
      console.log("Please fill all fields");
      Alert.alert("Please fill all fields");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Successfully signed up", user);
        Alert.prompt("Signed up successfully");
        router.push("mytrip");
        // ...
      })
      .catch(async (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Alert.alert(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={30} color={Colors.BLACK} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 35,
          fontFamily: "RobotoSlab-Bold",
          marginTop: 40,
        }}
      >
        Create New Account!
      </Text>

      <View style={{ marginTop: 40, backgroundColor: Colors.WHITE }}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.GREY}
          placeholder="Enter Fullname"
          onChangeText={(text) => setFullName(text)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.GREY}
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.GREY}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          OnCreateAccount();
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
          Create Account
        </Text>
      </TouchableOpacity>

      {/* signup redirect to signup page */}
      <TouchableOpacity
        onPress={() => {
          router.push("auth/signin");
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
          Sign In
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
