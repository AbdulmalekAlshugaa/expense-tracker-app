import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { useRoute } from "@react-navigation/native";
import LoginScreen from "../Screens/authScreens/LoginScreen";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={"Login"}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
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

export default AuthNavigator;
