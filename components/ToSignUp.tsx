import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ToSignUp = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Doesn't have an account?</Text>
      <TouchableOpacity onPress={() => router.replace("/auth/register")}>
        <Text style={styles.registerBtnTxt}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,
    marginTop: 25,
  },
  text: {
    width: "100%",
    color: "#fff",
    textAlign: "center",
  },
  registerBtnTxt: {
    fontWeight: "bold",
    color: "#F6DBAC",
    width: "100%",
    textAlign: "center",
  },
});

export default ToSignUp;
