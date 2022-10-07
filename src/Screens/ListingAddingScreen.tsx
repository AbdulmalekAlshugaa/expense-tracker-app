import {
  View,
  Animated,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  FlatList,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import * as Yup from "yup";
import React, { useRef, useEffect, useCallback } from "react";
import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
import * as Svg from "react-native-svg";
import { VictoryPie } from "victory-native";
import Header from "../components/Header";
import AppForm from "../components/forms/AppForm";
import { Formik } from "formik";
import { List } from "react-native-paper";
import { TextInput, Text } from "react-native-paper";
import CustomButton from "../components/CustomButton";
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
interface Style {
  container: ViewStyle;
  dropDownList: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    marginStart: SIZES.padding,
    marginEnd: SIZES.padding,
    marginTop: 5,
    borderRadius: 10,
  },
  dropDownList: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginStart: 15,
    marginEnd: 15,
  },
});



const ListingAddingScreen: React.FC<HomeProps> = (props) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        leftAction={() => console.log("Left Action")}
        rightAction={() => console.log("Right Action")}
        leftIcon={icons.back_arrow}
        rightIcon={icons.menu}
      />
      <Formik
        initialValues={{
          title: "",
          total: "",
          description: "",
          category: null,
          status: "",
        }}
    
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={{
              flex: 1,
            }}
          >
            <View style={styles.container}>
              <TextInput
                style={{
                  fontSize: 12,
                }}
                placeholderTextColor={COLORS.gray}
                mode="outlined"
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                outlineColor={COLORS.gray}
                activeOutlineColor={COLORS.moneyLightGreen}
                allowFontScaling={true}
                placeholder={"Title"}
              />
            </View>

            <View style={styles.container}>
              <TextInput
                style={{
                  fontSize: 12,
                }}
                placeholderTextColor={COLORS.gray}
                mode="outlined"
                onChangeText={handleChange("total")}
                onBlur={handleBlur("total")}
                value={values.total}
                outlineColor={COLORS.gray}
                activeOutlineColor={COLORS.moneyLightGreen}
                allowFontScaling={true}
                placeholder={"price"}
              />
            </View>

            <View style={styles.container}>
              <TextInput
                style={{
                  fontSize: 12,
                  borderRadius: 10,
                }}
                placeholderTextColor={COLORS.gray}
                mode="outlined"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                outlineColor={COLORS.gray}
                activeOutlineColor={COLORS.moneyLightGreen}
                allowFontScaling={true}
                placeholder={"Description"}
              />
            </View>

            <ScrollView>
              <List.Accordion
                style={styles.dropDownList}
                title="Status"
                expanded={expanded}
                onPress={handlePress}
              >
                <List.Item
                  onPress={handlePress}
                  onBlur={handleBlur("status")}
                  style={styles.dropDownList}
                  title="Income"
                />
                <List.Item style={styles.dropDownList} title="Expenses" />
              </List.Accordion>
            </ScrollView>

            <CustomButton
              label="Submit"
              onPressAction={handleSubmit}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.body4,
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

// create styles

// export default Home;
export default ListingAddingScreen;

//
