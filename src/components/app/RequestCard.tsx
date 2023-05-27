import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../Globals/Colors";

import { Caption, IconButton, Text } from "react-native-paper";
import { Divider } from "react-native-elements";

type c = {
  time: Date;
  name: string;
  studentNo: string;
  phoneNo: string;
  guardianPhoneNo: string;
  onPress():void
};
const RequestCard = (props: c) => {
  return (
    <View style={styles.con}>
      <View style={styles.date}>
        <Caption style={styles.dt} numberOfLines={1} ellipsizeMode="tail">
          {props.time.toLocaleTimeString("en-SA", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </Caption>
      </View>
      <Text variant="titleMedium">{props.name}</Text>
      <Divider orientation="horizontal" width={1} />
      <Row>
        <Text variant="labelSmall">student Number</Text>
        <Caption>{props.studentNo}</Caption>
      </Row>
      <Row>
        <Text variant="labelSmall">Phone Number</Text>
        <Caption>+{props.phoneNo}</Caption>
      </Row>
      <Row>
        <Text variant="labelSmall">Guardian #no</Text>
        <Caption>
          +{props.guardianPhoneNo}
        </Caption>
      </Row>
      <View style={styles.icon}>
        <IconButton
          icon="chevron-right"
          iconColor={"#000"}
          size={20}
          onPress={props.onPress}
          style={styles.ic}
        />
      </View>
    </View>
  );
};

type row = {
  children: any;
};
export const Row = (props: row) => {
  return <View style={styles.row}>{props.children}</View>;
};
export default React.memo(RequestCard);

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary_1,
    marginHorizontal: 6,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 2,
  },
  dt: {
    textAlign: "right",
  },
  date: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  icon: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  ic: {
    backgroundColor: "#fff",
  },
});
