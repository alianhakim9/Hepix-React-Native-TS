import React from "react";
import { StyleSheet, Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

interface ICountdownTimer {
  time: number;
  isPlaying: boolean;
  onStop: () => void;
}

export const CountdownTimer = ({
  time,
  isPlaying,
  onStop,
}: ICountdownTimer) => {
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={60 * time}
      colors={["#F9A826", "#00BFA6", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      strokeWidth={25}
      onComplete={onStop}
    >
      {({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return (
          <Text style={styles.text}>
            {minutes}m {seconds}dtk
          </Text>
        );
      }}
    </CountdownCircleTimer>
  );
};

const styles = StyleSheet.create({
  text: {
    width: "100%",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
