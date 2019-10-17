import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenHome from '../page/Home';
import ScreenAbout from '../page/About';

const AppNavigation = createMaterialBottomTabNavigator({
  Home: {
    screen: ScreenHome,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(<Icon style={tintColor} size={25} name={'ios-home'}></Icon>)
    }
  },
  About: {
    screen: ScreenAbout,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(<Icon style={tintColor} size={25} name={'md-information-circle-outline'}></Icon>)
    }
  }
});

export default createAppContainer(AppNavigation);

