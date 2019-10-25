import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class Loading extends React.Component {
  render()
  {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <Text>Loading ...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});