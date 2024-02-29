import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.txt}>HEPIX</Text>
          <StatusBar style="light" backgroundColor="#323232" />
        </View>

        <Link href={"/auth/login"} asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Get Started</Text>
          </Pressable>
        </Link>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#323232",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 12,
    padding: 16,
  },
  innerContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 8,
  },
  txt: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 16,
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#018393",
    borderRadius: 12,
  },
  btnText: {
    color: "#fff",
  },
});
