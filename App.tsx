import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./src/store";
import { Provider } from "react-redux";
import Home from "./src/Screen/Home";
export default function App() {
  return (
    <Provider store={store}>
      <Home />

    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
