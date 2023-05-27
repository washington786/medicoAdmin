import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";
import ResetPassword from "../../screens/auth/ResetPassword";

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login"
      >
        <AuthStack.Screen name="login" component={Login} />
        <AuthStack.Screen name="register" component={Register} />
        <AuthStack.Screen name="reset" component={ResetPassword} />
      </AuthStack.Navigator>
    </>
  );
};

export default React.memo(Auth);
