import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigation from '../bottom/BottomNavigation';
import Auth from './Auth';

const appStack=createStackNavigator();

const MainStack = () => {
  return (
    <appStack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='auth'>
        <appStack.Screen name='auth' component={Auth}/>
        <appStack.Screen name='app' component={BottomNavigation}/>
    </appStack.Navigator>
  )
}

export default React.memo(MainStack)