import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BehandlereStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} options={{ title: 'Behandlere' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Behandler Info' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const isWeb = Platform.OS === 'web';

  if (isWeb) {
    // På web: brug kun stack navigation med top-menu
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // På mobil: brug bottom tab navigation
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Startside" component={HomeScreen} />
        <Tab.Screen name="Behandlere" component={BehandlereStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
