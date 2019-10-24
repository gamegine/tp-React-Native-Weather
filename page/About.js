import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>react native weather</Text>
        <Icon.Button name="logo-github" backgroundColor="#24292e" onPress={()=>{Linking.openURL('https://github.com/gamegine/React-Native-Weather#readme')}}>
          <Text style={{ fontSize: 15 }}>See onGithub </Text>
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