import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

export const Toggle = ({ title, style }: Props) => {
  return (
    <Pressable style={[styles.btnContainer, style]}>
      <Text style={styles.txt}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 100,
    maxWidth: 150,
    minHeight: 40,
    padding: 12,
    backgroundColor: "red",
    flex: 1,
    alignItems: "center",
  },
  txt: {
    color: "white",
  },
});
