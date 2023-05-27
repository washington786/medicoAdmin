import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../../screens/app/home/Dashboard';

const HomeStacks = createStackNavigator();
const HomeStack = () => {
  return (
    <HomeStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='dashboard'>
        <HomeStacks.Screen name='dashboard' component={Dashboard}/>
    </HomeStacks.Navigator>
  )
}

export default HomeStack