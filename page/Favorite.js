import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Favorite extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Favorite',
      headerRight: (
        <Icon name="ios-add" size={25} style={{marginRight:20}} onPress={() => navigation.push('AddFavorite')}/>
      )
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>fav</Text>
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