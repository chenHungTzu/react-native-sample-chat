//[redux相關設定]
//createStore      : 建立 store
//applyMiddleware  : 擴充 middleware
//compose          : 建立 store 與 middleware 橋接 , 並且與 reducer 組合
import { createStore, applyMiddleware, compose } from "redux";

//建立 saga API 
import createSagaMiddleware from "redux-saga";

//綁定後的 reducers 
import RootReducer from "../Redux/Stores";

//Bundle saga  
import RootSaga from "../Sagas";

//middlewares
import LoggerMiddleware from "../Redux/Middlewares/LoggerMiddleware";

//建立saga實例
const sagaMiddleware = createSagaMiddleware();

const storeFactory = compose(
    applyMiddleware(LoggerMiddleware, sagaMiddleware)
  )(createStore);


const store = storeFactory(RootReducer);

// saga 必須在store 建立完畢後 , 執行.run
sagaMiddleware.run(RootSaga);

export default store;