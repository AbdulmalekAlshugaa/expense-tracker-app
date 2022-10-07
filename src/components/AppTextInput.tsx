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
    Platform
  } from "react-native";
  import React from "react";
  import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { TextInput } from 'react-native-paper';
  interface Style {
    container: ViewStyle;
    icon: ViewStyle;
    text: TextStyle;
  }
  
  const styles = StyleSheet.create<Style>({
    container: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
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
  }
  
  const AppTextInput: React.FC<CustomTextInput> = ({
    otherProps,
    icon,
    width = "100%",
    isIconEnable,
  }) => {
    return (
        <View style={[styles.container, { width }]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={COLORS.lightGray}
            style={styles.icon}
          />
        )}
        <TextInput
          placeholderTextColor={COLORS.darkgray}
          style={styles.text}
          {...otherProps}
        />
      </View>
    );
  };
  
  export default AppTextInput;
  