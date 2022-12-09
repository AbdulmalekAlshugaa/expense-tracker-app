import {
  View,
  
  StyleSheet,
  Button
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
import { BarCodeScanner } from 'expo-barcode-scanner';
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    alert(`Bar code with type ${type} and data ${data} has been scanned!, send data to the server`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


 
 

 

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* <Header
        leftAction={() => console.log("Left Action")}
        rightAction={() => console.log("Right Action")}
        leftIcon={icons.back_arrow}
        rightIcon={icons.menu}
      /> */}
     <View style={styles.container}>
  
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    </View>
  );
};

// create styles

// export default Home;
export default ListingAddingScreen;

//
