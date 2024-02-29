import {
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  style?: StyleProp<ViewStyle>;
  title: string;
  iconName: "flashlight" | "snow";
  iconColor: string;
};

export const Card = ({ style, title, iconName, iconColor }: Props) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.innerContainer}>
        <Ionicons name={iconName} size={24} color={iconColor} />
        <Switch />
      </View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 125,
    minWidth: 150,
    padding: 16,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  innerContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
