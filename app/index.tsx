import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-gray-900">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/home" className="text-blue-500">Home</Link>
    </View>
  );
}

