import { View, Text } from "react-native";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import StartNewTrip from "@/components/MyTrips/startNewTrip";

export default function MyTrip() {
  const [userTrip, setUserTrip] = useState([]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 60,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 35, fontFamily: "RobotoSlab-Bold" }}>
          My Trip
        </Text>
        <MaterialIcons name="add-circle" size={45} color="black" />
      </View>
      {userTrip?.length === 0 ? <StartNewTrip /> : null}
    </View>
  );
}
