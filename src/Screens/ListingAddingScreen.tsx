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
import * as Yup from "yup";
import React, { useRef, useEffect, useCallback } from "react";
import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
import * as Svg from "react-native-svg";
import { VictoryPie } from "victory-native";
import Header from "../components/Header";
import AppForm from "../components/forms/AppForm";

import AppTextInput from "../components/AppTextInput";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  
});
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

      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}

      >

       <AppTextInput

          name="title"
          placeholder="Title"
          icon="format-title"
          width="100%"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          returnKeyType="next"
          returnKeyLabel="next"

       />
        

      </AppForm>
       
      

      




    
    </View>
  );
};

// create styles

// export default Home;
export default ListingAddingScreen;

//
