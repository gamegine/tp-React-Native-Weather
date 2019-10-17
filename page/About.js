import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon.Button name="logo-github" backgroundColor="#24292e">
          <Text style={{ fontSize: 15 }}>Github </Text>
        </Icon.Button>
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