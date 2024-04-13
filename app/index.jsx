import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white text-red-200">
      <Text className="text-3xl">This is my first app</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        go to profile
      </Link>
    </View>
  );
}