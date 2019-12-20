import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { connect } from 'react-redux';



const mapStateToProps = (state) => (state)
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(class FavoriteItem extends React.Component {
  prototype = {
    name: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    th: PropTypes.instanceOf.isRequired
  }

  state = { data: null };
  componentDidMount() {
    this.props.WeatherService.getWeather(this.props.name).then((response) => {this.setState({ data: response.data })})
  }


  render() {
    return (
      <Swipeout right={[{ text: 'Remove', backgroundColor: 'red', onPress: () => { this.props.onRemove(this.props.name, this.props.th) } }]}>
        <TouchableHighlight onPress={() => this.props.navigation.push('DetailFavorite', { "city": this.props.name,data:this.state.data })}>
          <View>
            <Text style={{ fontSize: 23 }}>{this.props.name}</Text>
            {this.state.data != null ? <Text style={{textAlign:"center"}}>temp: {this.state.data.main.temp}°</Text> : <Loading />}
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }
})