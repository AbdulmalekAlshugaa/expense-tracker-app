import {
  View,
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
import { TextInput, Text } from "react-native-paper";
interface Style {
  container: ViewStyle;
  icon: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginStart: SIZES.padding,
    marginEnd: SIZES.padding,
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: COLORS.black,
    ...FONTS.body3,
  },
});

interface CustomTextInput {
  isIconEnable?: boolean;
  icon?: ImageSourcePropType;
  otherProps: any;
  width?: string | number;
  onPressAction?: () => void;
  error?: string;
  placeholder?: string;
  errorText?: string;
}

const AppTextInput: React.FC<CustomTextInput> = ({
  otherProps,
  placeholder,
  icon,
  width = "100%",
  isIconEnable,
  onPressAction,
  error,
  errorText,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          fontSize: 12,
        }}
        placeholderTextColor={COLORS.gray}
        mode="outlined"
        error={error}
        outlineColor={COLORS.gray}
        activeOutlineColor={COLORS.moneyLightGreen}
        allowFontScaling={true}
        placeholder={placeholder}
        fontFamily={"ArbFONTS-DroidKufi-Regular"}
        theme={{ fonts: { regular: "ArbFONTS-DroidKufi-Regular" } }}
        {...otherProps}
      />

      {error && (
        <Text
          style={{
            marginHorizontal: 10,
            marginBottom: -20,

            color: COLORS.red,
            ...FONTS.body3,
          }}
          variant="bodySmall"
        >
          {errorText}
        </Text>
      )}
    </View>
  );
};

export default AppTextInput;
