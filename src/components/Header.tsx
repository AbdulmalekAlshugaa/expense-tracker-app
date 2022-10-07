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
import { COLORS, icons, SIZES } from "../../assets/constants";

interface Style {
  container: ViewStyle;
  imageStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  imageStyle: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
});

interface HeaderProps {
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;

  leftAction?: () => void;
  rightAction?: () => void;
  rightActionEnabled?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  leftAction,
  rightAction,
  leftIcon,
  rightIcon,
  rightActionEnabled = true,
}) => {
 

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ justifyContent: "center", width: 50 }}
        onPress={leftAction}
      >
        <Image source={leftIcon} style={styles.imageStyle} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          width: 50,
        }}
        onPress={rightAction}
      >
        <Image source={rightIcon} style={styles.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
