import { StyleSheet } from 'react-native'

import {  Dimensions } from 'react-native'
//樣式設定
export default Styles =  StyleSheet.create({

    Container: {
        ...StyleSheet.absoluteFillObject,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      Map: {
        ...StyleSheet.absoluteFillObject,
      },
      ConfirmBtn:{
        backgroundColor:  'rgba(74,212,97, 0.8)',
        bottom:20
      }
});