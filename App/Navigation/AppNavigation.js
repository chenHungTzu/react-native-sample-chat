import { StackNavigator } from 'react-navigation';

import TabNav from "./TabNavigation";

export const AppNav = StackNavigator({  
    Home: { screen: TabNav },
},{
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Home',
      headerMode: 'screen',
      headerTitle: 'sampleChat',
      drawerLabel: 'sampleChat',
      headerStyle: { backgroundColor: '#0066FF' },
      headerTitleStyle: { color: 'white' },
    }),
  });

export default AppNav;