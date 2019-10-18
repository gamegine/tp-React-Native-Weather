import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Favorite extends React.Component {
  state = { input: '' }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeText(text)}
        />
        <Button title="Add" onPress={() => this.onAdd()}/>
      </View>
    );
  }
  onChangeText(text) {
    this.setState({ input: text })
  }
  onAdd(){
    console.log('add fav');
    this.props.navigation.goBack();
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