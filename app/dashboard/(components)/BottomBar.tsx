import { Pressable, StyleSheet, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const BottomBar = () => {
  const route = useRouter();
  return (
    <View style={styles.bottomBar}>
      <Pressable>
        <Ionicons name="home" size={24} />
      </Pressable>
      <Pressable onPress={() => route.push("/therapy")}>
        <Ionicons name="grid" size={24} />
      </Pressable>
      <Pressable>
        <Ionicons name="person" size={24} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: "#F6DBAC",
    marginVertical: 20,
    marginHorizontal: 12,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
  },
});

export default BottomBar;
