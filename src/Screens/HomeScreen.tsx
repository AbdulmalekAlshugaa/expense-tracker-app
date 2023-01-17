import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  Platform,
  Button,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";

import React, { useRef, useEffect, useState } from "react";
import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
import * as Svg from "react-native-svg";
import { VictoryPie } from "victory-native";
import Header from "../components/Header";
import CategoryItem from "../components/CategoryItem";
import CustomTitle from "../components/CustomTitle";
import LottieView from "lottie-react-native";
import { fetchPosts } from "../feature/expenses/expensesSlice";
import animationsFile from "../../assets/constants/animations";
import { AppDispatch } from "../store";
import { Camera, CameraType } from "expo-camera";
export interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = (props) => {
  // run interval every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will run every 5 seconds!");
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef();

  const items = [
    {
      id: 1,
      title: "Request 1",
      description: "Description 1",
      status: "pending",
      date: "2021-01-01",
    },
    {
      id: 2,
      title: "Request 2",
      description: "Description 2",
      status: "pending",
      date: "2021-01-01",
    },
    {
      id: 3,
      title: "Request 3",
      description: "Description 3",
      status: "pending",
      date: "2021-01-01",
    },
    {
      id: 4,
      title: "Request 4",
      description: "Description 7",
      status: "pending",
      date: "2021-01-01",
    },
  ];

  const renderRequestItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            borderRadius: SIZES.radius,
            padding: SIZES.padding,
            backgroundColor: COLORS.blue,
            marginBottom: SIZES.padding,
            marginStart: SIZES.padding,
            marginEnd: SIZES.padding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={icons.cloth_icon}
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.white,
              }}
            />
            <Text>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        leftAction={() => console.log("Left Action")}
        rightAction={() => console.log("Right Action")}
        leftIcon={icons.back_arrow}
        rightIcon={icons.menu}
      />
      <FlatList
        data={items}
        renderItem={renderRequestItem}
        keyExtractor={(item) => `${item.id}`}
      />
      {/* <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=> takePicture()}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
// create styles

// export default Home;
export default HomeScreen;

//
