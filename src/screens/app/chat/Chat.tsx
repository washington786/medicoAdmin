import { StyleSheet, View } from "react-native";

import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import MainView from "../../../Globals/MainView";
import { IconButton, Text } from "react-native-paper";
import { colors } from "../../../Globals/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";

const Chat = () => {
  const route = useRoute();
  const { name } = route.params;

  const [messages, setMessages] = useState<Array<Object>>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hi, please feel free to chat with us regarding your health.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Private Consulter",
        },
        sent: true,
        received: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return ( 
    <MainView>
      <Header title={name} is_on_chat={true} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        isTyping={false}
        showUserAvatar={false}
      />
    </MainView>
  );
};

type h = {
  title: string;
  is_on_chat?: boolean;
};
export const Header = (props: h) => {
  const navigation = useNavigation();
  const goBack = (): void => {
    navigation.goBack();
  };
  return (
    <View style={styles.con}>
      {props.is_on_chat && (
        <IconButton
          icon={"arrow-left"}
          iconColor="white"
          size={30}
          onPress={goBack}
        />
      )}
      <Text variant="titleLarge" style={styles.tit}>
        {props.title}
      </Text>
    </View>
  );
};

export default React.memo(Chat);

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary_10,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row"
  },
  tit: {
    color: "#eee",
    flex:1,
    textAlign:"center"
  },
});
