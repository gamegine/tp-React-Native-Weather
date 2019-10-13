import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weather from '../service/Weather';

import Loading from '../component/Loading';

export default class Home extends React.Component {

  service = new Weather();
  state = { data:null };
  
  componentDidMount(){
    this.service.getWeatherHome().then((response)=>this.setState({data:response.data}))
  }

  render()
  {
    return (
      this.state.data != null?
      <View style={styles.container}>
            <Text>Hi !</Text>
            <View>
                <View>
                    <Text>main: {this.state.data.weather[0].main}</Text>
                    <Text>description: {this.state.data.weather[0].description}</Text>
                </View>
                <View>
                    <Text>sunrise: {this.state.data.sys.sunrise}</Text>
                    <Text>sunset: {this.state.data.sys.sunset}</Text>
                </View>
                <View>
                    <Text>temp_min: {this.state.data.main.temp_min}</Text>
                    <Text>temp: {this.state.data.main.temp}</Text>
                    <Text>temp_max: {this.state.data.main.temp_max}</Text>

                    <Text>humidity: {this.state.data.main.humidity}</Text>
                    <Text>pressure: {this.state.data.main.pressure}</Text>
                </View>
                <View>
                    <Text>wind speed: {this.state.data.wind.speed}</Text>
                </View>
            </View>
        </View>
    :
      <Loading/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});