
import * as UserAction from "../Redux/Actions/UserAction";
import Store from "../Config/StoreConfig";
import Global from "../Config/GlobelConfig";

class ChatService {

  static instance; //singleton

  constructor() {
    let Socket;
  }

  static GetInstance() {
    if (!this.instance) {
      this.instance = new ChatService();
    }

    return this.instance;
  }

  
  Connect = target => {
    this.Socket = new WebSocket(Global.SocketServerUrl);
    this.BundleCallbacks(target);
  };

  Close = target => {
    if (this.Socket) {
      Store.dispatch(UserAction.SetLineState(false));
      this.Send({
        Message: `${target}-離線了`,
        DateTime: new Date().toUTCString(),
        MessageType: 0,
        UserName: ""
      });
      this.Socket.close();
    }
  };

  Send = payload => {
    if (this.Socket) {
      this.Socket.send(JSON.stringify(payload));
    }
  };

  BundleCallbacks(target) {
    this.Socket.onopen = event => {
      Store.dispatch(UserAction.SetLineState(true));
      this.Send({
        Message: `${target}-上線了`,
        DateTime: new Date().toUTCString(),
        MessageType: 0,
        UserName: ""
      });
    };

    this.Socket.onmessage = event => {
    
      let received = JSON.parse(event.data);

      Store.dispatch(UserAction.ReceiveMessage(received));
     
    };

    this.Socket.onclose = event => {
      console.log("ws server onclose", event);
    };

    this.Socket.onerror = event => {
      // an error occurred
      console.log("ws server onerror", event.message);
    };
  }
}

export default ChatService;
