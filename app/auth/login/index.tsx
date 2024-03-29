import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import ToSignUp from "../../../components/ToSignUp";
import storage from "../../../utils/storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
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
          if (email === ret.email && password === ret.password) {
            storage
              .save({
                key: "isLoggedIn",
                data: {
                  isLoggedIn: true,
                },
              })
              .then(() => {
                router.replace("/dashboard");
              });
          }
        } else {
          Toast.show({
            type: "error",
            text1: "Please, sign up first",
            position: "bottom",
          });
        }
      })
      .catch((err) => {
        switch (err.name) {
          case "NotFoundError":
            // TODO;
            break;
          case "ExpiredError":
            // TODO
            break;
        }
      });
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.rootContainer}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.logo}>HEPIX</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor={"#dedede"}
              inputMode="email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor={"#dedede"}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.btn} onPress={onLogin}>
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <ToSignUp />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
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
  logo: {
    fontSize: 40,
    color: "#fff",
    letterSpacing: 12,
  },
  input: {
    height: 50,
    backgroundColor: "#5C5C5C",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    color: "#fff",
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

export default Login;
