import React, { PropTypes, Component } from "react";
import * as UserAction from "../Redux/Actions/UserAction";
import SettingComponent from "../Components/SettingComponent";
import { connect } from "react-redux";
 
const mapDispatchToProps = dispatch => {
    return {
      login: UserName => dispatch(UserAction.LoginUser(UserName)),
      logout : ()=> dispatch(UserAction.LogoutUser()),
    };
  };
  const mapStateToProps = state => {

    return {
        UserName : state.UserStore.UserName
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SettingComponent);
  