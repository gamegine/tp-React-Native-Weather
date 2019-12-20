import React from 'react';
import Weather from '../component/Weather'

export default class DetailFavorite extends React.Component {
  render() {
    return (
      <Weather city={this.props.navigation.getParam("city")} data={this.props.navigation.getParam("data")} />
    );
  }
};