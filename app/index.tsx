import LandingPage from "@/components/LandingPage";
import { Text, View } from "react-native";
import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const user = auth.currentUser;
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "RobotoSlab-Regular",
        }}
      >
        <StatusBar style="dark" />
        {user ? <Redirect href={"mytrip"} /> : <LandingPage />}
      </Text>
    </View>
  );
}
