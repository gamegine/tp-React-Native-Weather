import React from 'react';
import Weather from '../component/Weather'

export default class DetailFavorite extends React.Component {
  static navigationOptions = ({ navigation }) => ({title: navigation.getParam("city")});
  render() {
    return (
      <Weather city={this.props.navigation.getParam("city")} data={this.props.navigation.getParam("data")} />
    );
  }
};