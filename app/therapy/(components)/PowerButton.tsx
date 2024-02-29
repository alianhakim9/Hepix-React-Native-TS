import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const PowerButton = () => {
  return (
    <Pressable style={styles.powerBtn}>
      <Ionicons name="power-outline" size={28} color={"#323232"} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  powerBtn: {
    backgroundColor: "#C34B27",
    width: 80,
    height: 80,
    borderRadius: 16,
    padding: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PowerButton;
