import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { showMessage } from "react-native-flash-message";
import LoginApi from "../../api/LoginApi";
import CustomButton from "../../components/CustomButton";
import AppLocalStorage from "../../config/AppLocalStorage";

const LoginScreen: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await LoginApi.authenticateUser({
      username: "admin",
      password: "admin",
    });

    if (result) {
      if (result.ok) {
        AppLocalStorage.storeToken(result?.data?.id_token);
        props.navigation.navigate("AppNavigator");
      } else {
        showMessage({
          message: "Invalid Credentials",
          type: "danger",
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton
        style={{ width: 200 }}
        label="Login"
        onPressAction={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
