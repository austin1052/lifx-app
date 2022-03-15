import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonApp } from "./src/components";
import styles from "./src/styles";
import { getAllLights, updateLight } from "./src/api";

const colors = { r: 50, g: 152, b: 30 };
const id = "d073d56f6851";

export default function App() {
  useEffect(() => {
    getAllLights();
    // updateLight(id, colors);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ButtonApp />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
