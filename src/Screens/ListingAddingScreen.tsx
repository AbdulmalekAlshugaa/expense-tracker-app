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
import expensesApi from "../api/expensesApi";
import { showMessage, hideMessage } from "react-native-flash-message";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  total: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),

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

const categories = [
  {
    color: COLORS.moneyLightGreen,
    name: "Education",
    id: 1,
  },
  {
    color: COLORS.lightBlue,

    name: "Nutrition",
    id: 2,
  },
  {
    color: COLORS.darkgreen,

    name: "Child",
    id: 3,
  },
  {
    color: COLORS.red,

    name: "Beauty & Care",
    id: 4,
  },
  {
    color: COLORS.purple,

    name: "Sports",
    id: 5,
  },
  {
    color: COLORS.red,

    name: "Clothing",
    id: 6,
  },
];

const ListingAddingScreen: React.FC<HomeProps> = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedCtr, setExpandedCtr] = React.useState(false);
  const [category, setCategory] = React.useState(categories);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handlePress = (element: any) => {
    setSelectedStatus(element);
    setExpanded(!expanded);
  };
  const handleCtrPress = (element: any) => {
    setExpandedCtr(!expandedCtr);
    setSelectedCategory(element);
  };

  const submit = async (values: any) => {
    setLoading(true);
    const apiRequest = await expensesApi.addPost({
      title: values.title,
      total: values.total,
      description: values.description,
      location: "Yemen Ibb",
      status: selectedStatus,
      id: selectedCategory.id,
    });

    if(apiRequest){
     setLoading(false);
      if (!apiRequest.ok) {
        showMessage({
          message: "Success",
          description: "Your post has been added successfully",
          type: "danger",
          icon: {
            name: "danger",
            type: "font-awesome",
            color: "#fff",
          },
          duration: 3000,
        });
      } else {
        showMessage({
          message: "Success",
          description: "Your post has been added successfully",
          type: "success",
          icon: {
            name: "success",
            type: "font-awesome",
            color: "#fff",
          },
          duration: 3000,
        });
      }

    }
    
  };

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
        validationSchema={validationSchema}
        onSubmit={(values) => submit(values)}
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
                keyboardType="numeric"
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
                  onPress={() => handlePress("INCOME")}
                  style={styles.dropDownList}
                  title="Income"
                />
                <List.Item
                  onPress={() => handlePress("EXPENSES")}
                  style={styles.dropDownList}
                  title="Expenses"
                />
              </List.Accordion>

              <List.Accordion
                style={styles.dropDownList}
                title="Category"
                expanded={expandedCtr}
                onPress={handleCtrPress}
              >
                {category.map((element) => {
                  return (
                    <List.Item
                      onPress={() => handleCtrPress(element)}
                      style={styles.dropDownList}
                      title={element.name}
                    />
                  );
                })}
                <List.Item style={styles.dropDownList} title="Expenses" />
              </List.Accordion>
            </ScrollView>

            <CustomButton
              label="Submit"
              onPressAction={handleSubmit}
              loading={loading}
              disabled={loading}
             
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
