import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React from "react";
import MainView from "../../../Globals/MainView";
import { Column } from "../settings/Settings";
import { Header } from "./Chat";
import ChatCard from "../../../components/app/ChatCard";
import { ChatData } from "../../../data/ChatData";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("screen").height;

const ClientsList = () => {
  const navigation = useNavigation();
  const handleOnpress = (name: string): void => {
    navigation.navigate("message", { name: name });
  };
  return (
    <MainView>
      <Header title="Chat List" is_on_chat={false}/>
      <Column>
        <View style={styles.con}>
          <FlatList
            data={ChatData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => {
              const { name, lastMessage, hasMessage, time } = item.item;
              let time_msg = time.toLocaleTimeString("en-SA", {
                hour: "numeric",
                minute: "numeric",
              });
              return (
                <ChatCard
                  has_message={hasMessage}
                  last_message={lastMessage}
                  name={name}
                  time={time_msg}
                  onPress={handleOnpress.bind(this, name)}
                />
              );
            }}
            contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
            style={{ flexGrow: 1, backgroundColor: "white" }}
          />
        </View>
      </Column>
    </MainView>
  );
};

export default React.memo(ClientsList);

const styles = StyleSheet.create({
  con:{
    flexGrow:1,
    backgroundColor:"white",
    height:height
  }
});
