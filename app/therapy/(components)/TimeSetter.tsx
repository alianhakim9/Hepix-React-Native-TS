import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ITimeStter {
  time: number;
  onDecrease: () => void;
  onIncrease: () => void;
  disabled?: boolean;
}

export default function TimeSetter({
  time,
  onDecrease,
  onIncrease,
  disabled,
}: ITimeStter) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={time === 30 || disabled ? styles.disableBtn : styles.btn}
        onPress={onDecrease}
        disabled={time === 30 || disabled}
      >
        <Text style={styles.btnTxt}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{time}</Text>
      <TouchableOpacity
        style={time === 45 || disabled ? styles.disableBtn : styles.btn}
        onPress={onIncrease}
        disabled={time === 45 || disabled}
      >
        <Text style={styles.btnTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
    color: "white",
    width: "30%",
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "lightblue",
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  btnTxt: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  disableBtn: {
    backgroundColor: "grey",
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
