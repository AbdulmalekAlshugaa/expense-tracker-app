import {
    View,
    Text,
   
    Image,
   
    ScrollView,
  } from "react-native";
  
  import React, { useRef, useEffect, useCallback } from "react";
  import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
  import * as Svg from "react-native-svg";
  import { VictoryPie } from "victory-native";
  import Header from "../components/Header";
  export interface HomeProps {
    navigation: any;
  }
  
  const ProfileScreen: React.FC<HomeProps> = (props) => {
   
  
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        
  
       
      </View>
    );
  };
  
  // create styles
  
  // export default Home;
  export default ProfileScreen;
  
  //
  