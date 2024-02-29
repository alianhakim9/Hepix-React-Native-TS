import { Image, StyleSheet, Text, View } from "react-native";

export const AirMonitoring = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kualitas udara dalam ruangan</Text>
      <Text style={styles.number}>{parseInt("80")}</Text>
      <Text style={styles.symbol}>Pm2.5 (μg/m3)</Text>
      <Text style={styles.caption}>Baik</Text>
      <Image
        source={require("../../../assets/images/blur-bg.png")}
        style={styles.blurBg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "white",
  },
  number: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#00D1FF",
  },
  symbol: {
    fontSize: 14,
    color: "white",
  },
  caption: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  blurBg: {
    position: "absolute",
    zIndex: -1,
  },
});
