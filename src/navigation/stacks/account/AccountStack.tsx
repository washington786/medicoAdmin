import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../../screens/app/settings/Settings';

const AccountStacks = createStackNavigator();

const AccountStack = () => {
  return (
    <AccountStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='account'>
        <AccountStacks.Screen name='account' component={Settings}/>
    </AccountStacks.Navigator>
  )
}

export default AccountStack