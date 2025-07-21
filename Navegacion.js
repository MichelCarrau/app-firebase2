import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Importar screens principales
import ScreenHome from './src/screen/home/ScreenHome.jsx';
import ScreenLogin from './src/login/ScreenLogin.jsx';
import ScreenCrearCuenta from './src/login/ScreenCrearCuenta.jsx';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={ScreenLogin} />
      <Stack.Screen name="crearCuenta" component={ScreenCrearCuenta} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="home" component={ScreenHome} 
      options={{
        title: 'Dashboard',
        tabBarIcon:({color,size})=>
        <FontAwesome name="dashboard" size={24} color={color} />
      }}/>
    </Tabs.Navigator>
    
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
} 