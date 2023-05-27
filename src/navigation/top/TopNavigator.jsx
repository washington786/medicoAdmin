import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Requests from '../../screens/app/home/Requests';
import Awareness from '../../screens/app/home/Awareness';


const Top = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <Top.Navigator initialRouteName='requests' >
        <Top.Screen name='requests' component={Requests}/>
        <Top.Screen name='awareness' component={Awareness}/>
    </Top.Navigator>
  )
}

export default TopNavigator