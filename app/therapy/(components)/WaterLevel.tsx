import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import RnRangeSlider from "rn-range-slider";
import Thumb from "./slider/Thumb";
import Label from "./slider/Label";
import Notch from "./slider/Notch";
import Rail from "./slider/Rail";
import RailSelected from "./slider/RailSelected";

type WaterLevelProps = {
  onValueChange: (value: number) => void;
};

const WaterLevel = () => {
  const renderThumb = useCallback(() => <Thumb name={"Water Level"} />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (value: unknown) => <Label text={value} />,
    []
  );
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Water Level (cm)</Text>
      <RnRangeSlider
        step={25}
        min={0}
        max={100}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
        disableRange
        allowLabelOverflow
        style={styles.slider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5B5B5B",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 18,
  },
  txt: {
    fontWeight: "bold",
    color: "#adadad",
    width: "100%",
  },
  slider: {
    marginVertical: 20,
  },
});

export default WaterLevel;
