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
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";

interface Style {
  container: ViewStyle;
  imageStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  imageStyle: {
    backgroundColor: COLORS.lightGray,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface CustomTitleProps {
  isIconEnable?: boolean;
  title?: string;
  subTitle?: string;
  onPressAction?: () => void;
}

const CustomTitle: React.FC<CustomTitleProps> = ({
  title,
  subTitle,
  isIconEnable,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: isIconEnable ? SIZES.padding : 0,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          alignItems: "center",
        }}
      >
        {isIconEnable ? (
          <View style={styles.imageStyle}>
            <Image
              source={icons.calendar}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightBlue,
              }}
            />
          </View>
        ) : null}

        <View style={{ marginLeft: SIZES.padding }}>
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{title}</Text>
          <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
            {subTitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomTitle;
