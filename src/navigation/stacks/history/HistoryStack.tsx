import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import History from '../../../screens/app/history/History';

const HistoryStacks = createStackNavigator();
const HistoryStack = () => {
  return (
    <HistoryStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='history'>
        <HistoryStacks.Screen name='history' component={History}/>
    </HistoryStacks.Navigator>
  )
}

export default HistoryStack