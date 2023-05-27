import { Platform, SafeAreaView, StatusBar, View } from "react-native";
import React from "react";

const isAndroid=Platform.OS==='android';

interface safe {
    children: any;
  }
export const SafeView = (props: safe) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "blue",
          flexGrow: 1,
          paddingTop: isAndroid? StatusBar.currentHeight: 0
        }}
      >
        {props.children}
      </SafeAreaView>
    );
  };
  
export const Page=(props:safe)=>{
    return(
      <View style={{flex:1,backgroundColor:'#fff',flexGrow:1}}>
        {props.children}
      </View>
    )
  }
  