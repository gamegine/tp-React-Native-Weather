import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    console.log('add fav', this.state.input);
    AsyncStorage.getItem('city').then(data=>{
      console.log('current fav :',data)
      this.setState({city:JSON.parse(data)})
    })
  }

  componentDidMount(){this.refreshData()}

  render() {
    return (
      <View style={styles.container}>
        {this.state.city.length != 0 ? (
          <FlatList data={this.state.city} renderItem={({ item }) => ( <Item title={item}/> )}/>
        ) : (
            <Text>no favorites</Text>
          )}
      </View>
    );
  }
};

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});