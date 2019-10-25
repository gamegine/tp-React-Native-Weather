import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenHome from '../page/Home';
import ScreenAbout from '../page/About';
import ScreenFavorite from '../page/Favorite';
import ScreenAddFavorite from '../page/AddFavorite';
import ScreenDetailFavorite from '../page/DetailFavorite'


const FavoriteNavigation = createStackNavigator({
  Favorite: {
    screen: ScreenFavorite
  },
  AddFavorite: {
    screen: ScreenAddFavorite
  },
  DetailFavorite: {
    screen: ScreenDetailFavorite
  }
});

export default createAppContainer(createMaterialBottomTabNavigator({
  Home: {
    screen: ScreenHome,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(<Icon style={tintColor} size={25} name={'ios-home'}></Icon>)
    }
  },
  Favorite: {
    screen: FavoriteNavigation,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(<Icon style={tintColor} size={25} name={'ios-star'}></Icon>)
    }
  },
  About: {
    screen: ScreenAbout,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(<Icon style={tintColor} size={25} name={'md-information-circle-outline'}></Icon>)
    }
  }
},
{
  initialRouteName: 'Home',
  barStyle: { backgroundColor: '#0039e6' },
}));