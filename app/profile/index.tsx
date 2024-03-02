import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomBar from "../dashboard/(components)/BottomBar";
import { useEffect, useState } from "react";
import storage from "../../utils/storage";
import { router } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");
  useEffect(() => {
    storage
      .load({
        key: "loginState",
        autoSync: true,
        syncInBackground: true,
        syncParams: {
          someFlag: true,
        },
      })
      .then((ret) => {
        if (ret) {
          setName(ret.name);
        }
      })
      .catch((err) => {
        console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            // TODO;
            break;
          case "ExpiredError":
            // TODO
            break;
        }
      });
  });

  const onLogout = async () => {
    storage
      .save({
        key: "isLoggedIn",
        data: {
          isLoggedIn: false,
        },
      })
      .then(() => {
        router.replace("/");
      });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.txt}>{name}</Text>
          <TouchableOpacity style={styles.logout} onPress={onLogout}>
            <Text style={styles.logoutTxt}>Logout</Text>
          </TouchableOpacity>
        </View>
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
    padding: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txt: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    flexGrow: 1,
  },
  logout: {
    backgroundColor: "#C34B27",
    padding: 8,
    borderRadius: 8,
    display: "flex",
    width: 100,
    alignItems: "center",
  },
  logoutTxt: {
    width: "100%",
    textAlign: "center",
  },
});
