import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingFirst from '../screens/onBoarding/onBoardingFirst';
import AppRoutes from '../utils/routes';
import OnBoardingSecond from '../screens/onBoarding/onBoardingSecond';
import OnBoardingThird from '../screens/onBoarding/onBoardingThird';
import { ArrowRight } from 'iconsax-react-nativejs';
import TabNavigation from './tabNavigation';
import Login from '../screens/auth/login';
import ForgotPassword from '../screens/auth/forgotPassword';

import Register from '../screens/auth/register';
const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions = {{
      headerBackTitle:"Geri",
    }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={AppRoutes.ONBOARDINGFIRST}
        component={OnBoardingFirst}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={AppRoutes.ONBOARDINGSECOND}
        component={OnBoardingSecond}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(AppRoutes.TABMENU)}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{ fontSize: 18, marginRight: 5, paddingHorizontal: 10 }}
              >
                Atla
              </Text>
              <ArrowRight />
            </TouchableOpacity>
          ),
        })}
        name={AppRoutes.ONBOARDINGTHIRD}
        component={OnBoardingThird}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={AppRoutes.TABMENU}
        component={TabNavigation}
      />
           <Stack.Screen
        name={AppRoutes.LOGIN}
        component={Login}
      />
           <Stack.Screen
        name={AppRoutes.REGISTER}
        component={Register}
      />
           <Stack.Screen
        name={AppRoutes.FORGOTPASSWORD}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
