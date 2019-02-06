import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Detail from '../screens/Detail';

const HomeStack = createStackNavigator({
     Home: HomeScreen,
     Details:Detail
   });

export default HomeStack;
