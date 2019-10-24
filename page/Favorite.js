import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from 'react-native-swipeout';

export default class Favorite extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Favorite',
      headerRight: (
        <Icon name="ios-add" size={25} style={{ marginRight: 20 }} onPress={() => navigation.push('AddFavorite')} />
      )
    }
  };

  state = { city: [] };
  refreshData() {
    console.log('fav refresh data');
    AsyncStorage.getItem('city').then(data => {
      console.log(data)
      if (!data) data = '[]'
      this.setState({ city: JSON.parse(data) })
    })
  }

  onRemove(el) {
    console.log('Remove : ',el)
    AsyncStorage.getItem('city').then(data => {
      city = []
      if (data != null) { city = JSON.parse(data) }
      for (var i = 0; i < city.length; i++) {
        if (city[i] == el) { city.splice(i, 1); i--; }
      }
      AsyncStorage.setItem('city', JSON.stringify(city)).then(()=>this.setState({city:city}))
    }
    )
  }
  componentDidMount() { this.refreshData() }

  render() {
    return (
      <View>
        <NavigationEvents onDidFocus={payload => this.refreshData()} />
        {this.state.city.length != 0 ? (
          <FlatList data={this.state.city} renderItem={({ item }) => this.Item(item, this)} />
        ) : (
            <Text>no favorites</Text>
          )}
      </View>
    );
  }
  Item(title) {
    return (
      <Swipeout right={[{ text: 'Remove', onPress: () => { this.onRemove(title) } }]}>
        <Text>{title}</Text>
      </Swipeout>
    );
  }
};