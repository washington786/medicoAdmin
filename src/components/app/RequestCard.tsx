import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../Globals/Colors";

import { Caption, IconButton, Text } from "react-native-paper";
import { Divider } from "react-native-elements";
import {db,auth} from '../../screens/auth/firebase'
import {ref,child,update} from 'firebase/database'
type c = {
  time: Date;
  Firstname: string;
  studentNo: string;
  phoneNo: string;
  guardianPhoneNo: string;
  status:string;
  key:string;
  onPress():void
};
const RequestCard = (props: c) => {
//   const editprofile=(key)=>{
  
//     const medicoRef=ref(db, "/MedicoClient/" )
//     const medicoChild = child(medicoRef,key)
// update(medicoChild,{Lastname:lastName,Firstname:firstName,
//   })
//     // .then(()=>medicoRef.once('value'))
//     // onValue(medicoChild)
//     // .then(snapshot=>snapshot.val())
//     // .catch(error => ({
//     //   errorCode: error.code,
//     //   errorMessage: error.message
//     // })); 
//     // navigation.navigate('Profile')
//   }
  return (
    <View style={styles.con}>
      <View style={styles.date}>
        {/* <Caption style={styles.dt} numberOfLines={1} ellipsizeMode="tail">
          {props.time.toLocaleTimeString("en-SA", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </Caption> */}
      </View>
      <Text variant="titleMedium">{props.Firstname}</Text>
      <Divider orientation="horizontal" width={1} />
      <Row>
        <Text variant="titleMedium">Address</Text>
        <Caption numberOfLines={5}>{props.studentNo}</Caption>
      </Row>
      <Row>
        <Text variant="titleMedium">Accessibility</Text>
        <Caption>{props.phoneNo}</Caption>
      </Row>
      <Row>
        <Text variant="labelSmall">Status</Text>
        <Caption> 
          {props.status}
        </Caption>
      </Row>
   
      <View style={styles.icon}>
        <IconButton
          icon="chevron-right"
          iconColor={"#000"}
          size={20}
          onPress={()=>props.onPress()}
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
