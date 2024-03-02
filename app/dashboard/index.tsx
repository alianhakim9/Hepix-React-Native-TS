import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { DashboardHeader } from "./(components)/Header";
import { WeatherCard } from "./(components)/WeatherCard";
import BottomBar from "./(components)/BottomBar";
import { Toggle } from "./(components)/Toggle";
import { Card } from "./(components)/Card";
import { AirMonitoring } from "./(components)/AirMonitoring";

export default function Dashboard() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.innerContainer}>
            <DashboardHeader />
            <WeatherCard />
            <View style={styles.rowContainer}>
              <Toggle
                title="Room"
                style={{
                  backgroundColor: "#383838",
                }}
              />
              <Toggle
                title="Devices"
                style={{
                  backgroundColor: "#018393",
                }}
              />
            </View>

            <View style={styles.rowContainer}>
              <Card
                title="Auto"
                iconName="flashlight"
                iconColor="#323232"
                style={{
                  backgroundColor: "#F65626",
                }}
              />
              <Card
                title="Manual"
                iconName="snow"
                iconColor="#323232"
                style={{
                  backgroundColor: "#6B6B6B",
                }}
              />
            </View>

            <AirMonitoring />
          </View>
        </ScrollView>
        <BottomBar />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#3e3e3e",
    justifyContent: "space-between",
  },
  innerContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    margin: 14,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 12,
    justifyContent: "space-evenly",
  },
});
