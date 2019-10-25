import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
import PropTypes from 'prop-types';

export default class FavoriteItem extends React.Component {
  prototype = {
    name: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    th: PropTypes.instanceOf.isRequired
  }
  render() {
    return (
      <Swipeout right={[{ text: 'Remove', backgroundColor: 'red', onPress: () => { this.props.onRemove(this.props.name,this.props.th) } }]}>
        <TouchableHighlight onPress={() => this.props.navigation.push('DetailFavorite', { "city": this.props.name })}>
          <Text style={{ fontSize: 23 }}>{this.props.name}</Text>
        </TouchableHighlight>
      </Swipeout>
    );
  }
};