import React, { Component } from "react";
import { Root } from "native-base";
import { PermissionsAndroid } from "react-native";

//路由設定
import AppNavigation from "../Navigation/AppNavigation";
import TabNavigation from "../Navigation/TabNavigation";

//匯入redux-store 的標籤
import { Provider } from "react-redux";

//redux-store 設定
import StoreConfig from "../Config/StoreConfig";

import * as LocationService from "../Service/LocationService";

/**
 * 主要畫面
 *
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  render() {
    return (
      <Provider store={StoreConfig}>
        <Root>
          <AppNavigation />
        </Root>
      </Provider>
    );
  }

async componentWillMount() {

    //確認權限
    let permissions = [
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
    ];

    
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        permissions
      ).then(
        success => {
          console.log(success);
        },
        error => {
          console.log(error);
        }
      );
    } catch (err) {
      console.warn(err);
    }
  }
}
