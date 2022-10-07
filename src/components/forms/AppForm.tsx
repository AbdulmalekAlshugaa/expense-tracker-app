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
import { Formik } from "formik";

interface AppFormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: any;
}

const AppForm: React.FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
