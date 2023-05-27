import React from 'react'
import Icon from "react-native-vector-icons/Feather";
import { Platform } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from '../../Globals/Colors';
import HomeStack from '../stacks/dash/HomeStack';
import HistoryStack from '../stacks/history/HistoryStack';
import AccountStack from '../stacks/account/AccountStack';
import InstructionStack from '../stacks/instructions/InstructionStack';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  dashboard: "home",
  history: "clock",
  add: "message-circle",
  settings: "user"
};

const isAndroid = Platform.OS==='android';

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary_10,
          tabBarHideOnKeyboard: true,
          tabBarStyle:{
            backgroundColor: !isAndroid?'#eee':'#fff'
          }
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.dashboard} size={20} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Message"
          component={InstructionStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.add} size={20} color={color} />
            ),
            tabBarLabel: "Chat",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={AccountStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.settings} size={20} color={color} />
            ),
            tabBarLabel: "Settings",
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default React.memo(BottomNavigation);