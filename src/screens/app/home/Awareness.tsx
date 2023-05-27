import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

// image picker
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { MultipleSelectList } from "react-native-dropdown-select-list";
import { FlatList } from "react-native";
import { colors } from "../../../Globals/Colors";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import MainView from "../../../Globals/MainView";
import Scroller from "../../../Globals/Scroller";

const isIos = Platform.OS === "ios";

const Awareness = () => {
  const [selectedImage, setSelectedImages] = useState([]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      allowsEditing: false,
      quality: 1,
      selectionLimit: 8,
    });

    if (!result.canceled) {
      setSelectedImages(
        result.assets.map((asset) => {
          return asset.uri;
        })
      );
    }
  };
  return (
    <MainView>
      <Scroller>
        <View style={styles.con}>
          {selectedImage.length === 0 && <ImageCard onPress={pickImage} />}

          {selectedImage.length > 0 && (
            <ImageList selectedImage={selectedImage} />
          )}

          <InputWrapper />
          <Button
            mode="contained-tonal"
            style={styles.btn}
            buttonColor={colors.primary_10}
            labelStyle={styles.lbl}
          >
            submit
          </Button>
        </View>
      </Scroller>
    </MainView>
  );
};

type list = {
  selectedImage: [] | any;
};

const ImageCard = (props: img) => {
  return (
    <View style={styles.card}>
      <Button
        icon="camera"
        mode="contained"
        onPress={props.onPress}
        style={styles.icon}
        buttonColor={colors.primary_8}
      >
        upload
      </Button>
    </View>
  );
};

const InputWrapper = () => {
  return (
    <View>
      <TextInput
        value={""}
        mode="outlined"
        label={"Title"}
        style={styles.input}
        keyboardType="default"
        keyboardAppearance="light"
      />

      <TextInput
        value={""}
        mode="outlined"
        label={"Description"}
        style={styles.input}
        keyboardType="decimal-pad"
        keyboardAppearance="light"
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
};

type img = {
  onPress?(): void;
};

const ImageList = (props: list) => {
  return (
    <View style={styles.imagesCon}>
      <FlatList
        data={props.selectedImage}
        keyExtractor={(index) => {
          return index.toString();
        }}
        renderItem={(image) => {
          return (
            <Image
              source={{ uri: image.item }}
              containerStyle={styles.item}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode={isIos ? "center" : "cover"}
              resizeMethod={isIos ? "resize" : "auto"}
            />
          );
        }}
        horizontal={true}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};

export default Awareness;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  inputCon: {
    marginTop: 20,
  },
  input: {
    marginBottom: 8,
  },
  btn: {
    borderRadius: 0,
    marginTop: 20,
    paddingVertical: 3,
  },
  lbl: {
    color: "#fff",
    textTransform: "uppercase",
  },
  card: {
    maxHeight: 150,
    minHeight: 150,
    backgroundColor: colors.primary_1,
    borderRadius: 10,
    position: "relative",
    marginVertical: 10,
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  item: {
    aspectRatio: 5,
    width: "100%",
    height: "100%",
    flex: 1,
    maxHeight: isIos ? 120 : 150,
    minHeight: isIos ? 120 : 150,
  },
  imagesCon: {
    height: "100%",
    maxHeight: isIos ? 120 : 150,
    minHeight: isIos ? 120 : 150,
    backgroundColor: "#aeae",
    marginVertical: 10,
    flexGrow: 1,
  },
});
