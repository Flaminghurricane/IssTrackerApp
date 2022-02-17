import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/ISSLocation";
import MeteorsScreen from "./screens/Meteors"; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack"; 
import 'react-native-gesture-handler' 

const Stack = createStackNavigator();
export default class App extends React.Component {
  render(){
    
  return ( 
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen}/> 
      <Stack.Screen name="Meteors" component={MeteorsScreen}/>
      <Stack.Screen name="ISSLocation" component={IssLocationScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
   
  ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
