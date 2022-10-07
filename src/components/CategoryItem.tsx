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
        flex: 1,
        flexDirection: "row",
        margin: 5,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    imageStyle: {
      width: 30,
      height: 30,
      tintColor: COLORS.primary,
    },
  });
  
  interface CategoryProps {
    item?: any;
    onPressAction?: () => void;
    
  }
  
  const CategoryItem: React.FC<CategoryProps> = ({
   onPressAction,
   item,
  }) => {

    
   
    const itemIconById = (id: number) => {
      switch (id) {
        case 1:
          return icons.education;
        case 2:
          return icons.food;
        case 3:
          return icons.baby_car;
        case 4:
          return icons.healthcare;
        case 5:
          return icons.sports_icon;
        case 6:
          return icons.cloth_icon;
        
        default:
          return icons.more;
      }

      }
  
    return (
        <TouchableOpacity
        onPress={onPressAction}
        style={styles.container}
      >
        <Image
          source={itemIconById(item.id)}
          style={{
            width: 20,
            height: 20,
            tintColor: item.color,
          }}
        />
        <Text
          style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  
  export default CategoryItem;
  