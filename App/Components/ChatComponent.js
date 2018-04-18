import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  View,
  Item,
  Icon,
  Input,
  Button,
  Body,
  Right,
  Thumbnail,
  Text,
  Footer,
  Separator
} from "native-base";

import Styles from "./Styles/ChatComponentStyle";

import { Modal, TouchableOpacity } from "react-native";

import GoogleMapComponent from "./GoogleMapComponent";

/**
 * 聊天畫面
 *
 * @export
 * @class ChatComponent
 * @extends {Component}
 */
export default class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapModalVisible: false, //控制googleMap彈出視窗
      soundButtonVisible: false, //控制錄音按鈕
      isRecord: false, //控制是否錄音
      message: "" //送出的訊息
    };
  }
  onRegionChange(region) {
    this.setState({ region });
  }

  /**
   * 控制googleMap彈出視窗是否顯示
   *
   * @param {any} visible
   * @memberof ChatComponent
   */
  switchMapModel(visible) {
    this.setState({ mapModalVisible: visible });
  }
  /**
   * 控制錄音按鈕是否顯示
   *
   * @param {any} visible
   * @memberof ChatComponent
   */
  switchSoundButton(visible) {
    this.setState({ soundButtonVisible: visible });
  }
  /**
   * 是否錄音中
   *
   * @param {any} record
   * @memberof ChatComponent
   */
  setIsRecord(record) {
    this.setState({ isRecord: record });
  }

  /**
   * 渲染清單內容
   *
   * @param {any} element
   * @returns
   * @memberof ChatComponent
   */
  renderItem(element) {
    switch (element.MessageType) {
      case 0:
        return (
          <Separator bordered key={element.DateTime}>
            <Text>
              {element.Message} - {element.DateTime}
            </Text>
          </Separator>
        );
      case 1:
        return (
          <ListItem avatar key={element.DateTime}>
            <Left />
            <Body>
              <Text>{element.UserName}</Text>
              <Text note>{element.Message}</Text>
            </Body>
            <Right>
              <Text note>{element.DateTime}</Text>
            </Right>
          </ListItem>
        );
        break;
      case 2:
        return (
          <ListItem icon>
            <Left>
              <Icon name="ios-pin" />
            </Left>
            <Body>
              <Text>{element.Message}</Text>
            </Body>
          </ListItem>
        );
        break;
    }
  }
  /**
   * 渲染輸入內容
   *
   * @returns
   * @memberof ChatComponent
   */
  renderInput() {
    return (
      <View>
        {this.props.LineState ? (
          <Header searchBar rounded style={Styles.MessageBar}>
            <Item style={Styles.MessageInput}>
              <Icon
                name="ios-pin"
                onPress={() => {
                  this.switchMapModel(true);
                }}
              />
              <Icon
                name="ios-volume-up"
                onPress={() => {
                  this.switchSoundButton(!this.state.soundButtonVisible);
                }}
              />
              <Input
                placeholder="請輸入訊息..."
                value={this.state.message}
                onChangeText={text => {
                  this.setState({ message: text });
                }}
              />
              <Icon
                name="ios-paper-plane"
                onPress={() => {
                  this.props.pushMsg({
                    Message: this.state.message,
                    DateTime: new Date().toUTCString(),
                    MessageType: 1
                  });
                  this.setState({ message: "" });
                }}
              />
            </Item>
          </Header>
        ) : (
          <Header searchBar rounded style={Styles.DisConnectMessageBar}>
            <Text block danger style={Styles.DisConnectMessage}>
              尚未建立連線
            </Text>
          </Header>
        )}
      </View>
    );
  }

  /**
   * 渲染googleMap彈出視窗
   *
   * @returns
   * @memberof ChatComponent
   */
  renderMapModel() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.mapModalVisible}
        onRequestClose={() => {
          this.switchMapModel(false);
        }}
      >
        <View>
          <GoogleMapComponent
            region={{
              latitude: 12,
              longitude: -1,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            onConfirm={this.GetLocationHandle.bind(this)}
          />
        </View>
      </Modal>
    );
  }

  /**
   * 取得地理位址
   *
   * @param {any} location
   * @memberof ChatComponent
   */
  GetLocationHandle(location) {
    this.props.pushMsg({
      Message: `lat : ${location.latitude} , lng : ${location.longitude}`,
      DateTime: new Date().toUTCString(),
      MessageType: 2
    });
    this.switchMapModel(false);
  }

  /**
   * 渲染錄音按鈕
   *
   * @returns
   * @memberof ChatComponent
   */
  renderSoundButton() {
    return (
      <TouchableOpacity>
        <View>
          {this.state.isRecord ? (
            <Button
              iconLeft
              block
              warning
              onLongPress={() => {
                console.log("onLongPress");
                this.setIsRecord(true);
                console.log(this.state.isRecord);
              }}
              onPressOut={() => {
                console.log("onPressOut");
                this.setIsRecord(false);
                console.log(this.state.isRecord);
              }}
            >
              <Icon name="ios-volume-up" />
              <Text>錄音中</Text>
            </Button>
          ) : (
            <Button
              iconLeft
              block
              info
              onLongPress={() => {
                console.log("onLongPress");
                this.setIsRecord(true);
                console.log(this.state.isRecord);
              }}
              onPressOut={() => {
                console.log("onPressOut");
                this.setIsRecord(false);
                console.log(this.state.isRecord);
              }}
            >
              <Icon name="ios-volume-up" />
              <Text>長按開始錄音</Text>
            </Button>
          )}
        </View>
      </TouchableOpacity>
    );
  }

  /**
   * 渲染主畫面
   *
   * @returns
   * @memberof ChatComponent
   */
  render() {
    return (
      <Container>
        <Content>
          {this.renderMapModel()}

          <List>
            {this.props.MessageList.map(element => {
              return this.renderItem(element);
            })}
          </List>
        </Content>

        {this.state.soundButtonVisible ? this.renderSoundButton() : null}
        {this.renderInput()}
      </Container>
    );
  }
}
