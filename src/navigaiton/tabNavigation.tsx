
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Regions from '../screens/regions';
import Pokedex from '../screens/pokedex';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import AppRoutes from '../utils/routes';
import TabBarIcon from '../components/navigaton/tabBarIcon';
const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({focused,color,size})=><TabBarIcon focused={focused} name={route.name}/>
    })}>
      <Tab.Screen name={AppRoutes.POKEDEX} component={Pokedex} />
      <Tab.Screen name={AppRoutes.REGIONS} component={Regions} />
      <Tab.Screen name={AppRoutes.FAVORITES} component={Favorites} />
      <Tab.Screen name={AppRoutes.PROFILE} component={Profile} />
      
    </Tab.Navigator>
  )
}

export default TabNavigation

