import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PowerButton from "./(components)/PowerButton";
import WaterLevel from "./(components)/WaterLevel";
import { CountdownTimer } from "./(components)/CountdownTimer";
import TimeSetter from "./(components)/TimeSetter";
// import SemiCircleProgress from "./(components)/SemiCircleProgress";

const Therapy = () => {
  const router = useRouter();
  const [time, setTime] = useState(30);
  const [waterLevel, setWaterLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fixTime, setFixTime] = useState(30);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headingContainer}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text style={styles.headingText}>Therapy</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <Text style={styles.innerTxt}>Time Intensity</Text>
            <View>
              <CountdownTimer
                time={fixTime}
                isPlaying={isPlaying}
                onStop={() => {
                  setIsPlaying(false);
                  setFixTime(30);
                }}
              />
            </View>
            {/* <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "70%",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.labelDurationTxt}>Min</Text>
              <Text style={styles.labelDurationTxt}>Max</Text>
            </View> */}
            <TimeSetter
              time={time}
              onDecrease={() => {
                if (time !== 30) {
                  setTime((prev) => prev - 5);
                }
              }}
              onIncrease={() => {
                if (time !== 45) {
                  setTime((prev) => prev + 5);
                }
              }}
              disabled={isPlaying}
            />
            <PowerButton
              onClick={() => {
                setFixTime(time);
                setIsPlaying((prev) => !prev);
              }}
              isOn={isPlaying}
            />
            <WaterLevel />
            <Pressable style={styles.btn}>
              <Text style={styles.btnTxt}>Add New Device</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#3e3e3e",
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
  },
  headingText: {
    color: "white",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 24,
    justifyContent: "space-between",
    gap: 16,
  },
  innerTxt: {
    color: "white",
    fontWeight: "500",
    width: "100%",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#018393",
    borderRadius: 16,
    padding: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
  },
  btnTxt: {
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  labelDurationTxt: {
    color: "white",
    textAlign: "auto",
  },
});

export default Therapy;
