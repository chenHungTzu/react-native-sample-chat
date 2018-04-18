import React, { Component } from "react";
import { Root } from "native-base";

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
}
