import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import storage from "../../../utils/storage";

export const DashboardHeader = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    storage
      .load({
        key: "loginState",
        autoSync: true,
        syncInBackground: true,
        syncParams: {
          someFlag: true,
        },
      })
      .then((ret) => {
        if (ret) {
          setName(ret.name);
        }
      })
      .catch((err) => {
        console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            // TODO;
            break;
          case "ExpiredError":
            // TODO
            break;
        }
      });
  });
  return (
    <View style={styles.header}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingTxt}>Halo, {name}</Text>
        <Text style={styles.greetingSubTxt}>Ahlan wa sahlan, selamat pagi</Text>
      </View>
      <Pressable style={styles.notifBtn}>
        <Ionicons name="notifications" size={20} color="#3e3e3e" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  greetingTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  greetingSubTxt: {
    color: "#fff",
    fontWeight: "300",
  },
  notifBtn: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#F6DBAC",
  },
});
