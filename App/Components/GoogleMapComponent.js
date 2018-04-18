import React, { Component } from "react";

import PropTypes from "prop-types";

import Styles from "./Styles/GoogleMapComponentStyle";

import MapView, { Marker } from "react-native-maps";

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  View,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
  Item,
  Input
} from "native-base";

export default class GoogleMapComponent extends Component {
  static propTypes = {
    region: PropTypes.object,
    onConfirm: PropTypes.func
  };
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      markpoint: {
        latitude: this.props.region.latitude,
        longitude: this.props.region.longitude
      }
    };

    console.log("----google map----");
    console.log(props);
  }

  render() {
    return (
      <View style={Styles.Container}>
        <MapView
          style={Styles.Map}
          region={{
            latitude: this.state.markpoint.latitude,
            longitude: this.state.markpoint.longitude,
            latitudeDelta: this.props.region.latitudeDelta,
            longitudeDelta: this.props.region.longitudeDelta
          }}
          onPress={e => {
            console.log(e.nativeEvent);
            this.setState({ markpoint: e.nativeEvent.coordinate });
          }}
        >
          {
            <Marker
              key={this.state.markpoint}
              coordinate={this.state.markpoint}
              title={"目前位置"}
            />
          }
        </MapView>
        <Button
          block
          success
          style={Styles.ConfirmBtn}
          onPress={() => {
            this.props.onConfirm(this.state.markpoint);
            
          }}
        >
          <Text>確認地點</Text>
        </Button>
      </View>
    );
  }
}

