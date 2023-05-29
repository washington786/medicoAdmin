import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import React from "react";


import {
  Title,
  Text as TextPaper,
  TextInput,
  Button,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import SafeView from "../../Globals/SafeView";
import MainView from "../../Globals/MainView";
import { auth,db } from "./firebase";
import { Formik } from "formik";
import * as yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const navigation = useNavigation();
  const onHandleRegister = () => {
    navigation.navigate("register");
  };
  const onHandleResetPassword = () => {
    navigation.navigate("reset");
  };
  const onHandleLogin = () => {
    navigation.navigate("app");
  };
  let title: string = "Welcome Back";
  let sub: string = "please enter your credentials to sign in to your account.";
  
  return (
    <SafeView>
      <MainView>
        {/* <HeaderBack /> */}
        <KeyboardAvoidingView style={styles.con}>
          <AuthTop title={title} sub={sub} />
          <InputWrapper />
          <ButtonsWrapper
            // onHandleLogin={onHandleLogin}
            onHandleRegister={onHandleRegister}
            onHandleResetPassword={onHandleResetPassword}
          />
        </KeyboardAvoidingView>
      </MainView>
    </SafeView>
  );
};

interface t {
  title: string;
  sub: string;
}

export const AuthTop = (props: t) => {
  return (
    <View>
      <Title style={styles.title}>{props.title}</Title>
      <TextPaper style={styles.cap}>{props.sub}</TextPaper>
    </View>
  );
};
const InputWrapper = () => {
  const navigation = useNavigation();
  // const Submit = () => {
  //   navigation.navigate("app");
  // };
  const ReviewSchem = yup.object({
    email: yup.string().required().min(6),
    password: yup.string().required().min(6),
  });
  const Submit = async (data) => {
 
    try {
        const { email, password } = data
      await 
            signInWithEmailAndPassword(
                auth,email.trim().toLowerCase(), password)
                .then(async res => {
  
                try {
  
                    const jsonValue = JSON.stringify(res.user)
                    await AsyncStorage.setItem("MedicoClient", res.user.uid)
                    navigation.navigate("app");
                } catch (e) {
                    // saving error
                    console.log('no data')
                }
            })
  
    }
    catch (error) {
  
        Alert.alert(
            error.name,
            error.message
        )
    }
  }
  return (
    <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={ReviewSchem}
    onSubmit={(values, action) => {
      action.resetForm();
      Submit(values);
    }}
  >
    {(props) => (
    <View style={styles.inputsContainer}>
      <TextInput
        placeholder="email address"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"email address"}
        style={styles.input}
        onChangeText={props.handleChange("email")}
              value={props.values.email}
              onBlur={props.handleBlur("email")}
      />
       <Text style={{ color: "red", marginTop: -15 }}>
              {props.touched.email && props.errors.email}
            </Text>

      <TextInput
        placeholder="password"
        outlineStyle={styles.outline}
        mode="outlined"
        label={"password"}
        secureTextEntry={true}
        style={styles.input}
        onChangeText={props.handleChange("password")}
        value={props.values.password}
        onBlur={props.handleBlur("password")}
      />
 <Text style={{ color: "red", marginTop: -15 }}>
              {props.touched.password && props.errors.password}
            </Text>
      <Button
        mode="contained-tonal"
        style={styles.button}
        labelStyle={styles.label}
        onPress={props.handleSubmit}
      >
        sign in
      </Button>
    </View>
    )}
    </Formik>
  );
};

interface b {
  onHandleLogin?(): void;
  onHandleRegister?(): void;
  onHandleResetPassword?(): void;
}
const ButtonsWrapper = (props: b) => {
  return (
    <>
      <Button
        mode="text"
        contentStyle={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
        labelStyle={{ color: "blue" }}
        onPress={props.onHandleResetPassword}
      >
        reset password
      </Button>
      {/* <Button
        mode="contained-tonal"
        style={styles.button}
        labelStyle={styles.label}
        onPress={props.onHandleLogin}
      >
        sign in
      </Button> */}
      <Button
        mode="outlined"
        style={[
          styles.button,
          { backgroundColor: "none", borderColor: "blue" },
        ]}
        labelStyle={{ color: "blue" }}
        onPress={props.onHandleRegister}
      >
        create account
      </Button>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,0.7)",
    textTransform: "uppercase",
  },
  cap: {
    color: "rgba(0,0,0,0.3)",
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
