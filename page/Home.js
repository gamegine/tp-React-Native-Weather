import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weather from '../service/Weather';

export default class Home extends React.Component {

  service = new Weather();
  data = this.service.getWeatherHome();

  render()
  {
    return (
      <View style={styles.container}>
            <Text>Hi !</Text>
            <View>
                <View>
                    <Text>{this.data.weather.main}</Text>
                    <Text>{this.data.weather.description}</Text>
                </View>
                <View>
                    <Text>{this.data.sys.sunrise}</Text>
                    <Text>{this.data.sys.sunset}</Text>
                </View>
                <View>
                    <Text>{this.data.main.temps_min}</Text>
                    <Text>{this.data.main.temps}</Text>
                    <Text>{this.data.main.temps_max}</Text>

                    <Text>{this.data.main.humidity}</Text>
                    <Text>{this.data.main.pressure}</Text>
                </View>
                <View>
                    <Text>{this.data.wind.speed}</Text>
                </View>
            </View>
        </View>
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