import {
  View,
  Text,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
interface Style {
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  text: {
    color: COLORS.red,
    ...FONTS.body3,
  },
});

interface CustomErrorTextProps {
  error: string;
  visible: boolean;
}

const CustomErrorMessages: React.FC<CustomErrorTextProps> = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <Text style={styles.text}>{error}</Text>;
};

export default CustomErrorMessages;
