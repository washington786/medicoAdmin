import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import MainView from "../../../Globals/MainView";
import RequestCard, { Row } from "../../../components/app/RequestCard";
import {
  Button,
  Caption,
  Modal,
  Paragraph,
  Provider,
  RadioButton,
  Text,
  Title,
} from "react-native-paper";
import { RequestData } from "../../../data/RequestData";
import { Divider } from "react-native-elements";
import { colors } from "../../../Globals/Colors";
import { MainStyle } from "../../../styles/MainStyle";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const Requests = () => {
  const [isVisible, setVisible] = useState(false);

  const handleModal = (): void => {
    setVisible(true);
  };
  const handleModalClose = (): void => {
    setVisible(false);
  };
  let items: object;

  const [status, setStatus] = React.useState("Pending");

  return (
    <MainView>
      <Provider>
        <View style={styles.con}>
          <FlatList
            data={RequestData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => {
              items = item.item;
              const {
                name,
                phone,
                date,
                guardian,
                address,
                course,
                Faculty,
                yearOfStudy,
                studentNo,
              } = item.item;

              const { fullnames, phoneNo } = guardian;

              return (
                <RequestCard
                  guardianPhoneNo={phoneNo}
                  name={name}
                  phoneNo={phone}
                  studentNo={studentNo}
                  time={date}
                  onPress={handleModal}
                />
              );
            }}
            contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
            style={{ flexGrow: 1, backgroundColor: "white" }}
          />
        </View>
        <ModalWrapper
          isVisible={isVisible}
          onDismiss={handleModalClose}
          status={status}
          setStatus={(event) => setStatus(event)}
        />
      </Provider>
    </MainView>
  );
};

type m = {
  isVisible: boolean;
  onDismiss(): void;
  status: string;
  setStatus(event: any): void;
};
const ModalWrapper = (props: m) => {
  return (
    <Modal visible={props.isVisible} onDismiss={props.onDismiss}>
      <View style={styles.modal}>
        <Text variant="titleSmall" style={styles.title}>
          Request Information
        </Text>
        <Divider orientation="horizontal" />
        <View>
          <Title style={styles.rt}>Description</Title>
          <Caption numberOfLines={2} ellipsizeMode="tail" style={styles.dc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Caption>
        </View>
        <View>
          <Title style={styles.rt}>location</Title>
          <Caption numberOfLines={2} ellipsizeMode="tail" style={styles.dc}>
            23 forbidden str, location, yours
          </Caption>
        </View>
        <View>
          <Title style={styles.rt}>Accessibility</Title>
          <Caption numberOfLines={2} ellipsizeMode="tail" style={styles.dc}>
            locked-gate
          </Caption>
        </View>
        <Divider orientation="horizontal" />
        <Text variant="titleSmall" style={styles.title}>
          Student Details
        </Text>
        <Divider orientation="horizontal" />
        <Row>
          <Title style={styles.rt}>Faculty</Title>
          <Caption numberOfLines={2} ellipsizeMode="tail" style={styles.dc}>
            ICT
          </Caption>
        </Row>
        <Row>
          <Title style={styles.rt}>Course</Title>
          <Caption numberOfLines={2} ellipsizeMode="tail" style={styles.dc}>
            Computer Science
          </Caption>
        </Row>
        <Row>
          <Title style={styles.rt}>Guardian Name</Title>
          <Caption numberOfLines={2} ellipsizeMode="tail" style={styles.dc}>
            Hallen Zeeliesky
          </Caption>
        </Row>
        <Divider orientation="horizontal" />
        <Text variant="titleSmall" style={styles.title}>
          Update Status
        </Text>
        <Divider orientation="horizontal" />
        <RadioButton.Group onValueChange={props.setStatus} value={props.status}>
          <View>
            <RadioButton value="Pending" />
            <Text>Pending</Text>
          </View>
          <View>
            <RadioButton value="Sent" />
            <Text>Sent</Text>
          </View>
        </RadioButton.Group>
        <Button
          mode="contained"
          contentStyle={MainStyle.buttonGlobal}
          labelStyle={MainStyle.label}
          style={MainStyle.btn}
        >
          update Status
        </Button>
      </View>
    </Modal>
  );
};

export default React.memo(Requests);

const styles = StyleSheet.create({
  con: {
    flexGrow: 1,
    backgroundColor: "white",
    height: height,
    position: "relative",
  },
  modal: {
    height: "100%",
    maxHeight: height * 0.7,
    minHeight: height * 0.7,
    width: width,
    backgroundColor: "white",
    elevation: 0,
    position: "absolute",
    bottom: -400,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  title: {
    textTransform: "uppercase",
  },
  rt: {
    fontSize: 14,
  },
  dc: {
    fontSize: 12,
    marginTop: -10,
  },
  label: {
    fontStyle: "normal",
  },
  avatar: {
    backgroundColor: colors.primary_5,
    alignSelf: "center",
    elevation: 2,
  },
  email: {
    // fontFamily: roboto.light,
    letterSpacing: 1,
  },
  inputWrapper: {
    paddingVertical: 10,
  },

  input: {
    marginVertical: 6,
  },
  col: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
