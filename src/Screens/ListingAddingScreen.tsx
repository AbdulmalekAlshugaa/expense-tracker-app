import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  FlatList,
  ScrollView,
  SafeAreaView
} from "react-native";

import React, { useRef, useEffect, useCallback } from "react";
import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
import * as Svg from "react-native-svg";
import { VictoryPie } from "victory-native";
import Header from "../components/Header";

export interface HomeProps {
  navigation: any;
}

const ListingAddingScreen: React.FC<HomeProps> = (props) => {

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
     <Header
        leftAction={() => console.log("Left Action")}
        rightAction={() => console.log("Right Action")}
        leftIcon={icons.back_arrow}
        rightIcon={icons.menu}
      />
      

      




    
    </View>
  );
};

// create styles

// export default Home;
export default ListingAddingScreen;

//
