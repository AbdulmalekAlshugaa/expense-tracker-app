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
  Platform,
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../assets/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { ErrorMessage, useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";


interface FormFieldProps {
  name: string;
  width?: string | number;
  otherProps: any;
}

const FormFiled: React.FC<FormFieldProps> = ({
  name,
  width = "100%",
  otherProps,
}) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormFiled;
