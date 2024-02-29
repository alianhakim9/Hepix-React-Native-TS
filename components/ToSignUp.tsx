import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ToSignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Doesn't have an account?</Text>
      <TouchableOpacity>
        <Text style={styles.registerBtnTxt}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  text: {
    color: "#fff",
  },
  registerBtnTxt: {
    color: "#F6DBAC",
    fontWeight: "bold",
  },
});

export default ToSignUp;
