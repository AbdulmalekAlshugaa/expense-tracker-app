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
    function renderHeader() {
      return (
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          <View>
            <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>
              My Expenses
            </Text>
            <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
              Summary (private)
            </Text>
          </View>
  
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.lightGray,
                height: 50,
                width: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.calendar}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.lightBlue,
                }}
              />
            </View>
  
            <View style={{ marginLeft: SIZES.padding }}>
              <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
                11 Nov, 2020
              </Text>
              <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
                18% more than last month
              </Text>
            </View>
          </View>
        </View>
      );
    }
  
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        {renderHeader()}
  
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}></ScrollView>
      </View>
    );
  };
  
  // create styles
  
  // export default Home;
  export default ProfileScreen;
  
  //
  