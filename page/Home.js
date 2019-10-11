import React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render()
  {
    return (
      <View style={styles.container}>
        <Text>Hi !</Text>

        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('About')}/>
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