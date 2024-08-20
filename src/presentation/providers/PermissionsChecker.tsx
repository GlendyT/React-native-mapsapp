/* eslint-disable react-hooks/exhaustive-deps */
import React, {PropsWithChildren, useEffect} from 'react';
import {AppState} from 'react-native';
import {usePermissionStore} from '../store/permissions/usePermissionStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/StackNavigator';

export const PermissionsChecker = ({children}: PropsWithChildren) => {
  const {locationStatus, checkLocationPermission} = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.reset({
        routes: [{name: 'MapScreen'}],
      });
    } else if (locationStatus !== 'undertermined') {
      navigation.reset({
        routes: [{name: 'PermissionScreen'}],
      });
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);
  return <>{children}</>;
};
