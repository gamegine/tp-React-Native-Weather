import React from 'react';
import { StyleSheet, TextInput, View, Button, AsyncStorage } from 'react-native';

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
    console.log('add fav', this.state.input);
    AsyncStorage.getItem('city').then(data=>{
      console.log('current fav :',data)
      city = []
      if(data!=null){city=JSON.parse(data)}
      city.push(this.state.input);
      console.log('new fav',city)
      AsyncStorage.setItem('city', JSON.stringify(city)).then(()=>{this.props.navigation.goBack()})
    })
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding:5
  },
});