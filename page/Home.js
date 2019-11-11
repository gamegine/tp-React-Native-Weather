import React from 'react';

import Weather from '../component/Weather';
import Loading from '../component/Loading'

export default class Home extends React.Component {
  state = { geoLoc: null, city: null }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      pos => this.setState({ geoLoc: pos }),
      err => this.setState({ city: "London,uk" })
    )
  }
  render() {
    if(this.state.geoLoc == null && this.state.city == null)
      return (<Loading/>)
    else
      return (this.state.geoLoc != null) ? (<Weather geoLoc={this.state.geoLoc.coords} />) : (<Weather city={this.state.city} />);
  }
};