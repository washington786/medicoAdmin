import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../Globals/Colors";
import { Avatar, Caption, Text } from "react-native-paper";

type card={
  name:string;
  time:Date;
  last_message:string;
  has_message:boolean;
  onPress():void;
}
const ChatCard = (props:card) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.con} activeOpacity={0.5}>
      <View>
        <Avatar.Icon
          icon={"account"}
          size={30}
          color={colors.primary_10}
          style={styles.icon}
        />
      </View>
      <View style={styles.name}>
        <Text variant="titleSmall" numberOfLines={1} ellipsizeMode="tail">
         {`${props.name}`}
        </Text>
        <View>
          <Caption numberOfLines={1} ellipsizeMode="tail">
           {`${props.last_message}`}
          </Caption>
        </View>
      </View>
      <View style={styles.tmAv}>
        <Caption>{`${props.time}`}</Caption>
        <Avatar.Text label= {!props.has_message ?"•":"1"} size={20} style={styles.badge}/>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ChatCard);

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 5,
    paddingVertical: 6,
    backgroundColor: colors.primary_1,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical:8
  },
  icon: {
    backgroundColor: "#fff",
  },
  name: {
    textAlign: "left",
    alignItems: "flex-start",
    flex: 1,
    paddingHorizontal: 5,
  },
  tmAv:{
    alignItems:"flex-end",
    justifyContent:"flex-end"
  },
  badge:{
    backgroundColor:"red"
  }
});
