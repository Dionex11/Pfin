import React, { useState } from "react";
import { View,Text,Image,TextInput,ScrollView,StyleSheet, Button } from "react-native";
import Home from './Home'
import Datascreen from "./dataloadscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from "./navbar"
import Translog from "./translog"

const Stack = createNativeStackNavigator();
const app =()=>{
  const [currscreen,setscreen] = useState('H')
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="translog">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Excel" component={Datascreen}/>
      <Stack.Screen name="nav" component={Navbar}/>
      <Stack.Screen name="translog" component={Translog}/>
      </Stack.Navigator>
        

    </NavigationContainer>
  );

}
export default app;