import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function StartNewTrip() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 40,
      }}
    >
      <Entypo name="location" size={30} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "RobotoSlab-Medium",
        }}
      >
        No Trips Yet
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "RobotoSlab-regular",
          textAlign: "center",
          color: Colors.GREY,
        }}
      >
        Start a new trip to explore the world!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.BLACK,
          padding: 10,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "RobotoSlab-Bold",
            fontSize: 20,
          }}
        >
          Start A New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
