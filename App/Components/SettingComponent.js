import React, { Component } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  View,
  Button,
  Icon,
  Item,
  Input
} from "native-base";

/**
 * 設定畫面
 * 
 * @export
 * @class SettingComponent
 * @extends {Component}
 */
export default class SettingComponent extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: "",     //設定名稱
    };

  }
  /**
   * 渲染輸入項目
   * 
   * @returns 
   * @memberof SettingComponent
   */
  renderInput() {
    return (
      <Input
        placeholder="輸入姓名"
        value={this.state.name}
        onChangeText={text => {
          this.setState({ name: text });
        }}
      />
    );
  }

  /**
   * 渲染確認按鈕
   * 
   * @returns 
   * @memberof SettingComponent
   */
  renderRegiestButton() {
    return (
      <Button
        block
        success
        disabled={this.state.name.length == 0}
        onPress={() => {
          this.props.login(this.state.name);
        }}
      >
        <Text>確認名稱</Text>
      </Button>
    );
  }

  /**
   * 選染退訂按鈕
   * 
   * @returns 
   * @memberof SettingComponent
   */
  renderUnsubscribeButton() {
    return (
      <Button block danger onPress={() => {
        this.props.logout();
      }}>
        <Text>取消名稱</Text>
      </Button>
    );
  }

  /**
   * 渲染畫面,當沒有註冊的情況下
   * 
   * @returns 
   * @memberof SettingComponent
   */
  renderNoIdentity() {
    return (
      <Card>
        <CardItem>
          <Text>設定身分</Text>
        </CardItem>
        <CardItem>
          {this.state.name.length > 0 ? (
            <Item success>
              {this.renderInput()}
              <Icon name="checkmark-circle" />
            </Item>
          ) : (
            <Item error>
              {this.renderInput()}
              <Icon name="close-circle" />
            </Item>
          )}
        </CardItem>
        {this.renderRegiestButton()}
      </Card>
    );
  }

  /**
   * 渲染畫面,當有註冊的情況下
   * 
   * @returns 
   * @memberof SettingComponent
   */
  renderHasIdentity() {
    return (
      <Card>
        <CardItem>
          <Text>取消身分</Text>
        </CardItem>
        <CardItem>
        <Text>目前設定姓名 : {this.props.UserName}</Text>
      </CardItem>
        {this.renderUnsubscribeButton()}
      </Card>
    );
  }

  /**
   * 渲染主畫面
   * 
   * @returns 
   * @memberof SettingComponent
   */
  render() {
    return (
      <Container>
        <Content>
          {this.props.UserName.length == 0
            ? this.renderNoIdentity()
            : this.renderHasIdentity()}
        </Content>
      </Container>
    );
  }
}
