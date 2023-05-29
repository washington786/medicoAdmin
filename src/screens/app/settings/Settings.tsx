import { Platform, StyleSheet, View } from "react-native";
import React,{useEffect,useState} from "react";
import { colors, rgba } from "../../../Globals/Colors";
import Scroller from "../../../Globals/Scroller";
import { Avatar, Button, Paragraph, Text, TextInput } from "react-native-paper";
import { MainStyle } from "../../../styles/MainStyle";
import MainView from "../../../Globals/MainView";
import { db,auth } from "../../auth/firebase";
import { signOut } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
const isIos = Platform.OS === "ios";

const Settings = () => {
  return (
    <Scroller>
      <MainView>
        <Column>
          <ProfileWrap />
          <TextInputsWrapper />
        </Column>
      </MainView>
    </Scroller>
  );
};

type col = {
  children: any;
};
export const Column = (props: col) => {
  return <View style={styles.col}>{props.children}</View>;
};

const ProfileWrap = () => {
  const user = auth.currentUser?.uid
  const [Firstname, setFirname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  useEffect(() => {
    const StudentRef = ref(db, "/MedicoClient/" + user);
    onValue(StudentRef, snap => {
      setFirname(snap.val() && snap.val().Firstname);
      setLastname(snap.val() && snap.val().Lastname);
      setEmail(snap.val() && snap.val().email);
      setUid(snap.val() && snap.val().uid);
    });
  }, []);
  return (
    <View style={styles.con}>
      <Avatar.Text
        label="DM"
        size={70}
        color={"white"}
        labelStyle={styles.label}
        style={styles.avatar}
      />
      <Paragraph>{Firstname} {Lastname}</Paragraph>
      <Text variant="bodySmall" style={styles.email}>
       {email}
      </Text>
    </View>
  );
};

const TextInputsWrapper = () => {
  const navigation = useNavigation();
  const onLogoutUser=()=>{
   
    signOut(auth);
    navigation.navigate('login');
    
  }
  const user = auth.currentUser?.uid
  const [Firstname, setFirname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  useEffect(() => {
    const StudentRef = ref(db, "/MedicoClient/" + user);
    onValue(StudentRef, snap => {
      setFirname(snap.val() && snap.val().Firstname);
      setLastname(snap.val() && snap.val().Lastname);
      setEmail(snap.val() && snap.val().email);
      setUid(snap.val() && snap.val().uid);
    });
  }, []);
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={email}
        inputMode="email"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
      />
      <TextInput
        placeholder={Firstname}
        inputMode="text"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
      />
      <TextInput
        placeholder={Lastname}
        inputMode="text"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
      />

      <Button
        mode="contained"
        contentStyle={MainStyle.buttonGlobal}
        labelStyle={MainStyle.label}
        style={MainStyle.btn}
      >
        update profile
      </Button>

      <Button
        mode="outlined"
        contentStyle={[styles.outlined]}
        labelStyle={MainStyle.label}
        style={[styles.outlined]}
        onPress={onLogoutUser}
      >
        logout
      </Button>
    </View>
  );
};

export default React.memo(Settings);

const styles = StyleSheet.create({
  label: {
    fontStyle:"normal"
  },
  avatar: {
    backgroundColor: colors.primary_5,
    alignSelf: "center",
    elevation: 2,
  },
  con: {
    alignItems: "center",
    justifyContent: "center",
  },
  email: {
    // fontFamily: roboto.light,
    letterSpacing: 1,
  },
  inputWrapper: {
    paddingVertical: 10,
  },
  outlined: {
    borderRadius: 2,
    borderWidth: isIos ? 0.5 : 1,
    borderColor: isIos ? rgba.grey_2 : rgba.grey_1,
  },
  input: {
    marginVertical: 6,
  },
  col: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
