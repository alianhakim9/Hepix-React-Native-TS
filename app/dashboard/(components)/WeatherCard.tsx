import { Image, StyleSheet, Text, View } from "react-native";

export const WeatherCard = () => {
  return (
    <View style={styles.weatherCard}>
      <View style={styles.innerContainer}>
        <View style={styles.degreesContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.degreesTxt}>20°</Text>
            <Text
              style={[
                styles.weatherTxt,
                {
                  marginStart: 8,
                },
              ]}
            >
              Rainy
            </Text>
          </View>
          <Text
            style={{
              color: "#EBEBEB",
            }}
          >
            21, January 2024
          </Text>
        </View>
        <Image source={require("../../../assets/images/weather-example.png")} />
      </View>
      <View style={styles.temperatureContainer}>
        <View>
          <Text style={styles.temperatureTitle}>Temperature</Text>
          <Text>16°</Text>
        </View>
        <View>
          <Text style={styles.temperatureTitle}>Humidity</Text>
          <Text>42%</Text>
        </View>
        <View>
          <Text style={styles.temperatureTitle}>Air Quality</Text>
          <Text>Good</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherCard: {
    minHeight: 140,
    backgroundColor: "#018393",
    marginTop: 25,
    borderRadius: 16,
    padding: 8,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  degreesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  temperatureContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 12,
  },
  temperatureTitle: {
    fontWeight: "bold",
    color: "white",
  },
  degreesTxt: {
    margin: 0,
    padding: 0,
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  weatherTxt: {
    margin: 0,
    padding: 0,
    color: "white",
    alignSelf: "flex-end",
  },
});
