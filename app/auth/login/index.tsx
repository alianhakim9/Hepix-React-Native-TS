import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToSignUp from "../../../components/ToSignUp";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    if (
      email.toLowerCase() === "hepix@mail.com" &&
      password === "Rahasiabanget123"
    ) {
      router.push("/dashboard");
    } else {
      Toast.show({
        type: "error",
        text1: "Login failed, check your email and password",
        position: "bottom",
      });
    }
  };

  return (
    <>
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
        </View>
        <ToSignUp />
      </SafeAreaView>
      <StatusBar style="light" backgroundColor="#323232" />
      <Toast />
    </>
  );
};

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
