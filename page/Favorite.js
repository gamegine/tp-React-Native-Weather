import React from 'react';
import { Text, View, FlatList, AsyncStorage } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoriteItem from '../component/FavoriteItem';

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
      if (!data) data = '[]'
      this.setState({ city: JSON.parse(data) })
    })
  }

  onRemove(el,th) {
    console.log('Remove : ', el)
    AsyncStorage.getItem('city').then(data => {
      city = []
      if (data != null) { city = JSON.parse(data) }
      for (var i = 0; i < city.length; i++) {
        if (city[i] == el) { city.splice(i, 1); i--; }
      }
      AsyncStorage.setItem('city', JSON.stringify(city)).then(() => th.setState({ city: city }))
    }
    )
  }
  componentDidMount() { this.refreshData() }

  render() {
    return (
      <View>
        <NavigationEvents onDidFocus={payload => this.refreshData()} />
        {this.state.city.length != 0 ? (
          <FlatList 
          keyExtractor={item => item}
          data={this.state.city} 
          renderItem={({ item }) => <FavoriteItem onRemove={this.onRemove} name={item} navigation={this.props.navigation} th={this}/>} 
          />
        ) : (
            <Text>no favorites</Text>
          )}
      </View>
    );
  }
};