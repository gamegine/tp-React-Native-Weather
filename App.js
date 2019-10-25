import React from 'react';
import AppNavigator from './navigation/AppNavigation';
import {Provider} from 'react-redux'
import Store from './store/configureStore'

export default class App extends React.Component {
  render() { return (<Provider store={Store}><AppNavigator/></Provider>); }
}
