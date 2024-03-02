import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import storage from "../../../utils/storage";
import ToSignIn from "../../../components/ToSignIn";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const onRegister = async () => {
    storage
      .save({
        key: "loginState",
        data: {
          name: name,
          email: email,
          password: password,
        },
      })
      .then(() => {
        router.replace("/auth/login");
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
              placeholder="Name"
              style={styles.input}
              placeholderTextColor={"#dedede"}
              inputMode="text"
              value={name}
              onChangeText={setName}
            />
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
            <TouchableOpacity style={styles.btn} onPress={onRegister}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <ToSignIn />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
      <Toast />
    </>
  );
}

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
    width: "100%",
    color: "#fff",
    textAlign: "center",
  },
});
