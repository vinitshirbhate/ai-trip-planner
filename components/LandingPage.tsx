import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/Login.jpg")}
        style={{
          width: 450,
          height: 550,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "RobotoSlab-Bold",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Ai Trip Planner
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "RobotoSlab-Regular",
            textAlign: "center",
            color: Colors.GREY,
            marginTop: 10,
            padding: 10,
          }}
        >
          Unlock Your Next Adventure: Discover the Best Places to Visit with
          AI-Powered Travel Recommendations
        </Text>

        <TouchableOpacity
          onPress={() => {
            router.push("auth/signin");
          }}
          style={styles.Button}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 16,
              textAlign: "center",
              fontFamily: "RobotoSlab-Medium",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 15,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  Button: {
    backgroundColor: Colors.BLACK,
    marginTop: "25%",
    padding: 15,
    borderRadius: 99,
  },
});
