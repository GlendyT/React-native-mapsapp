import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoadingScreen} from '../screens/loading/LoadingScreen';
import {PermissionScreen} from '../screens/permissions/PermissionScreen';
import {MapScreen} from '../screens/maps/MapScreen';

export type RootStackParams = {
  LoadingScreen: undefined;
  PermissionScreen: undefined;
  MapScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      //initialRouteName="PermissionScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
    </Stack.Navigator>
  );
};
