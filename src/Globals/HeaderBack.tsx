import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/Feather";

import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const isAndroid = Platform.OS === "android";

const HeaderBack = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.con} onPress={goBack} activeOpacity={0.4}>
      {!isAndroid ? (
        <Icons name="chevron-left" size={25} color="blue" />
      ) : (
        <Icon name="arrow-back" size={25} color="blue" />
      )}
      {!isAndroid && <Text style={styles.txt}>Go Back</Text>}
    </TouchableOpacity>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: isAndroid ?10:0
  },
  txt: {
    paddingHorizontal: 6,
    color: "blue",
    fontSize: 18,
  },
});
