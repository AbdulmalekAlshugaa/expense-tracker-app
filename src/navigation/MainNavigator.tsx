import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { useRoute } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName={"AuthNavigator"}>
      <Stack.Screen
        name="AuthNavigator"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
