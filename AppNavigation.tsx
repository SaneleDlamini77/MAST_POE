import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FilterScreen from '../screens/FilterScreen';
import MenuSelectionScreen from '../screens/MenuSelectionScreen';
import FinalMenuScreen from '../screens/FinalMenuScreen';
import AddMenuItemScreen from '../screens/AddMenuItemScreen';
import { MenuItem } from '../types/MenuItem';

export type RootStackParamList = {
  Home: undefined;
  Filter: { menuItems: MenuItem[] };
  MenuSelection: { menuItems: MenuItem[] };
  FinalMenu: { menuItems: MenuItem[] };
  AddMenuItem: { addDish: (dish: MenuItem) => void };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Christo's Grill" }} />
        <Stack.Screen name="Filter" component={FilterScreen} options={{ title: "Filter Menu" }} />
        <Stack.Screen name="MenuSelection" component={MenuSelectionScreen} options={{ title: "Full Menu" }} />
        <Stack.Screen name="FinalMenu" component={FinalMenuScreen} options={{ title: "Final Menu" }} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} options={{ title: "Add Dish" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
