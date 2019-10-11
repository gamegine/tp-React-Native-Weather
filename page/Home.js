import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weather from '../service/Weather';

import Loading from '../component/Loading';

export default class Home extends React.Component {

  service = new Weather();
  state = { data:null };

  componentDidMount(){
    this.setState({data:this.service.getWeatherHome()})
  }

  render()
  {
    return (
      this.state.data != null?
      <View style={styles.container}>
            <Text>Hi !</Text>
            <View>
                <View>
                    <Text>{this.state.data.weather.main}</Text>
                    <Text>{this.state.data.weather.description}</Text>
                </View>
                <View>
                    <Text>{this.state.data.sys.sunrise}</Text>
                    <Text>{this.state.data.sys.sunset}</Text>
                </View>
                <View>
                    <Text>{this.state.data.main.temps_min}</Text>
                    <Text>{this.state.data.main.temps}</Text>
                    <Text>{this.state.data.main.temps_max}</Text>

                    <Text>{this.state.data.main.humidity}</Text>
                    <Text>{this.state.data.main.pressure}</Text>
                </View>
                <View>
                    <Text>{this.state.data.wind.speed}</Text>
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