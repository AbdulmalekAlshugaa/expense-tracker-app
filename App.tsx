import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useCallback } from "react";
import { store } from "./src/store";
import { Provider } from "react-redux";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./src/Screens/HomeScreen";
import AppNavigator from "./src/navigation/AppNavigator";
import { COLORS } from "./assets/constants";
import { Provider as PaperProvider } from "react-native-paper";

export type RootParamList = {
  HomeStack: undefined;
};
const Stack = createNativeStackNavigator<RootParamList>();

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={"HomeStack"}
            screenOptions={{
              headerShown: false,
              headerStyle: {
                backgroundColor: COLORS.black,
              },
              gestureEnabled: true,
            }}
          >
            <Stack.Screen
              name="appTabs"
              component={AppNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
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
