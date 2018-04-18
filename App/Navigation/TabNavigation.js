import { TabNavigator } from "react-navigation";
import { Icon } from 'native-base';
import SettingContainer from "../Containers/SettingContainer";
import ChatContainer from "../Containers/ChatContainer";

const TabNav = TabNavigator(
  {
    Home: {
      screen: SettingContainer,
      navigationOptions: {
        tabBarLabel: "設定身分",   
      }
    },
    Profile: {
      screen: ChatContainer,
      navigationOptions: {
        tabBarLabel: "聊天室"
      }
    }
  },
  {
    tabBarPosition: "top"
  }
);

export default TabNav;
