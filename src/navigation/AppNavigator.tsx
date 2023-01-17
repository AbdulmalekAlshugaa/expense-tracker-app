import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen, ListingAddingScreen } from "../Screens";
import { View, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/constants";
import ProfileScreen from "../Screens/ProfileScreen";
export type MainAppParamList = {
  profile: undefined;
  Listing: undefined;
  Home: undefined;
};
const Tab = createBottomTabNavigator<MainAppParamList>();
export function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Listing"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Listing"
        component={ListingAddingScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Listing")}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: COLORS.primary,
                  borderColor: COLORS.white,
                  borderRadius: 40,
                  borderWidth: 10,
                  bottom: 20,
                  height: 80,
                  justifyContent: "center",
                  width: 80,
                }}
              >
                <MaterialCommunityIcons
                  name="barcode-scan"
                  color={COLORS.white}
                  size={40}
                />
              </View>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="barcode-scan"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
