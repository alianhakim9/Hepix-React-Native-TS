import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PowerButton from "./(components)/PowerButton";
import WaterLevel from "./(components)/WaterLevel";
import SemiCircleProgress from "./(components)/SemiCircleProgress";

const Therapy = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headingContainer}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text style={styles.headingText}>Therapy</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.innerTxt}>Time Intensity</Text>
          <SemiCircleProgress
            percentage={30}
            minValue={30}
            maxValue={45}
            interiorCircleColor="#F6DBAC"
            progressColor="#00D1FF"
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
              >
                30 m
              </Text>
            </View>
          </SemiCircleProgress>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "70%",
            }}
          >
            <Text style={styles.labelDurationTxt}>Min</Text>
            <Text style={styles.labelDurationTxt}>Max</Text>
          </View>
          <PowerButton />
          <WaterLevel />
          <Pressable style={styles.btn}>
            <Text style={styles.btnTxt}>Add New Device</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#3e3e3e" style="light" />
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
  },
  labelDurationTxt: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Therapy;
