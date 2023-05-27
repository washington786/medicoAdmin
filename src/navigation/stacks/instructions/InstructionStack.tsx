import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../../../screens/app/chat/Chat';
import ClientsList from '../../../screens/app/chat/ClientsList';

const InfoStacks = createStackNavigator();

const InstructionStack = () => {
  return (
    <InfoStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='list'>
        <InfoStacks.Screen name='list' component={ClientsList}/>
        <InfoStacks.Screen name='message' component={Chat}/>
    </InfoStacks.Navigator>
  )
}

export default InstructionStack