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
import { TextInput, Text, Button } from "react-native-paper";

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

interface CustomButtonProps {
  isIconEnable?: boolean;
  icon?: ImageSourcePropType;
  otherProps: any;
  width?: string | number;
  onPressAction?: () => void;
  error?: string;
  placeholder?: string;
  errorText?: string;
  height?: string | number;
  label: string;
  loading: boolean;
  disabled: boolean;
  iconStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  otherProps,
  icon,
  width = "100%",
  onPressAction,
  height = 50,
  style,
  label,
  loading,
  disabled,
  labelStyle,
  iconStyle,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          borderColor: COLORS.moneyLightGreen,
          borderWidth: 1,
          borderRadius: 5,
        }}
        onPress={onPressAction}
      >
        <Button
          style={[
            {
              backgroundColor: COLORS.moneyLightGreen,
              borderRadius: 5,
              height: height,
              width: width,
              justifyContent: "center",
              alignContent: "center",
            },
            style,
          ]}
          {...otherProps}
          loading={loading}
          disabled={disabled}
          mode="contained"
          labelStyle={labelStyle}
          icon={({ size, color }) => <Image source={icon} style={iconStyle} />}
        >
          {label}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
