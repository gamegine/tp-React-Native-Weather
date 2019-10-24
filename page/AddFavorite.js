import React from 'react';
import { StyleSheet, TextInput, View, Button, AsyncStorage } from 'react-native';

import Weather from '../service/Weather';

export default class Favorite extends React.Component {
  state = { input: '' }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeText(text)}
        />
        <Button title="Add" onPress={() => this.onAdd()} />
      </View>
    );
  }
  onChangeText(text) {
    this.setState({ input: text })
  }
  onAdd() {

    if (this.state.input != "") {
      new Weather().getWeather(this.state.input).then(() =>
        AsyncStorage.getItem('city').then(data => {
          console.log('add fav, current fav\n', data, '\nnew el', this.state.input)
          city = []
          if (data != null) { city = JSON.parse(data) }
          if (this.chk(city, this.state.input)) { console.log('el is already present') }
          else {
            city.push(this.state.input);
            AsyncStorage.setItem('city', JSON.stringify(city)).then(() => { this.props.navigation.goBack() })
          }
        })).catch((e)=>{console.log(e.response.data.message),alert(e.response.data.message)})
    }
  }

  chk(json, key) {
    i = false
    json.forEach(element => { if (element == key) { i = true } });
    return false
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 5
  },
});