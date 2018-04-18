import React, { PropTypes, Component } from "react";
import * as UserAction from "../Redux/Actions/UserAction";
import ChatComponent from "../Components/ChatComponent";
import { connect } from "react-redux";

//對應action
const mapDispatchToProps = dispatch => {
  return {
    pushMsg: pushed => dispatch(UserAction.PushMessage(pushed))
  };
};
//對應state
const mapStateToProps = state => {
  return {
    MessageList: state.UserStore.MessageList,
    LineState : state.UserStore.LineState
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
