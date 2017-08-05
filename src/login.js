import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component{

    handleLogin(){

    }

    render(){
        return (
            <div class="login-box">
              <div class="login-logo">MobileLT login page</div>
              <div class="login-box-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <form action={this.handleLogin.bind(this)} method="post">
                  <div class="form-group has-feedback">
                    <input class="form-control" placeholder="Email" type="email" />
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                  </div>
                  <div class="form-group has-feedback">
                    <input class="form-control" placeholder="Password" type="password" />
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                  </div>
                  <div class="row">
                    <div class="col-xs-4">
                      <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        admin:state.admin
    };
}

export default connect(mapStateToProps)(Login);