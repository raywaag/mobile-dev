import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from '../screens/Landing';
import HomeScreen from '../screens/HomeScreen';
import Detail from '../screens/Detail';

const HomeStack = createStackNavigator({
      Landing: Landing,
      Home: HomeScreen,
      Details: Detail
   });

export default HomeStack;
