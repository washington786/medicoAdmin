import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { AuthTop } from "./Login";
import { useNavigation } from "@react-navigation/native";
import { Page, SafeView } from "../../Globals/Mains";
import HeaderBack from "../../Globals/HeaderBack";

const Register = () => {
  const navigation = useNavigation();
  let title: string = "create account";
  let sub: string =
    "please enter valid credentials to register an account with us.";

  const handleLogin = () => {
    navigation.navigate("login");
  };

  const onHandleRegister = () => {
    console.log("register");
  };
  return (
    <SafeView>
      <Page>
        <HeaderBack />
        <KeyboardAvoidingView style={styles.con}>
          <AuthTop title={title} sub={sub} />
          <InputWrapper />
          <ButtonsWrapper
            onHandleLogin={handleLogin}
            onHandleRegister={onHandleRegister}
          />
        </KeyboardAvoidingView>
      </Page>
    </SafeView>
  );
};

const InputWrapper = (props: b) => {
  return (
    <View style={styles.inputsContainer}>
      <TextInput
        placeholder="First Name"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"First Name"}
        style={styles.input}
        keyboardType="default"
      />
      <TextInput
        placeholder="Last Name"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"Last Name"}
        style={styles.input}
        keyboardType="default"
      />

      <TextInput
        placeholder="Email address"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"email address"}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Phone Number"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"Phone Number"}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="password"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"password"}
        style={styles.input}
        keyboardType="default"
        secureTextEntry={true}
      />

      <TextInput
        placeholder="Confirm password"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"Confirm password"}
        style={styles.input}
        keyboardType="default"
        secureTextEntry={true}
      />

      <Button
        mode="contained-tonal"
        style={styles.button}
        labelStyle={styles.label}
        onPress={props.onHandleRegister}
      >
        create account
      </Button>
    </View>
  );
};

interface b {
  onHandleRegister?(): void;
  onHandleLogin?(): void;
}
const ButtonsWrapper = (props: b) => {
  return (
    <>
      {/* <Button
        mode="contained-tonal"
        style={styles.button}
        labelStyle={styles.label}
        onPress={props.onHandleRegister}
      >
        create account
      </Button> */}
      <Button
        mode="outlined"
        style={[
          styles.button,
          { backgroundColor: "none", borderColor: "blue" },
        ]}
        labelStyle={{ color: "blue" }}
        onPress={props.onHandleLogin}
      >
        sign in
      </Button>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "blue",
    textTransform: "uppercase",
  },
  cap: {
    color: "blue",
  },
  outline: {
    borderWidth: 0.2,
    borderColor: "rgba(0,0,0,0.4)",
  },
  inputsContainer: {
    marginTop: 30,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    borderRadius: 2,
    paddingVertical: 5,
    marginTop: 10,
    backgroundColor: "blue",
  },
  label: {
    textTransform: "uppercase",
    color: "white",
  },
});
