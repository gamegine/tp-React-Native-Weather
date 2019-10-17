import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Weather from '../service/Weather';

import Loading from '../component/Loading';

export default class Home extends React.Component {

  service = new Weather();
  state = { data: null };

  componentDidMount() {
    this.service.getWeatherHome().then((response) => this.setState({ data: response.data }))
  }

  render() {
    return (
      this.state.data != null ?
        <View style={styles.container}>
          <Text>{this.state.data.name}</Text>
          <Text>main: {this.state.data.weather[0].main}</Text>
          <Text>description: {this.state.data.weather[0].description}</Text>
          <View style={{ flexDirection: 'row', margin: 10, }}>
            <View style={{ margin: 10 }}>
              <Text style={{ textAlign: 'center' }}>sunrise</Text>
              <Text style={{ textAlign: 'center' }}>{this.state.data.sys.sunrise}</Text>
            </View>
            <Icon style={{ margin: 10 }} size={30} name={'ios-sunny'}></Icon>
            <View style={{ margin: 10 }}>
              <Text style={{ textAlign: 'center' }}>sunset</Text>
              <Text style={{ textAlign: 'center' }}>{this.state.data.sys.sunset}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon size={60} style={{ margin: 10 }} name={'ios-thermometer'}></Icon>
            <View style={{ margin: 10 }}>
              <Text>max : {this.state.data.main.temp_max}</Text>
              <Text>temp: {this.state.data.main.temp}</Text>
              <Text>min : {this.state.data.main.temp_min}</Text>
            </View>
          </View>

          <Text>humidity: {this.state.data.main.humidity}</Text>
          <Text>pressure: {this.state.data.main.pressure}</Text>
          <Text>wind speed: {this.state.data.wind.speed}</Text>
        </View>
        :
        <Loading />
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