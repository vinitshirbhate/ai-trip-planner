import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchPlace() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              fontFamily: "RobotoSlab-Medium",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        padding: 25,
        paddingTop: 90,
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "YOUR API KEY",
          language: "en",
        }}
      />
    </View>
  );
}
