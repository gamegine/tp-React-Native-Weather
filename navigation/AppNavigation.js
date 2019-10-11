import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from '../page/Home';
import About from '../page/About';

const AppNavigation = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: About
  }
});

export default createAppContainer(AppNavigation);