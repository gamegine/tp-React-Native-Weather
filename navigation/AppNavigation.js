import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../page/Home';
import About from '../page/About';

const AppNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: About
  }
});

export default createAppContainer(AppNavigation);