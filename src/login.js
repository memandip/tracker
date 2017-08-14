import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeAdmin, setloggedIn } from './components/actions/userActions.js';
import firebase from './components/firebase.config';

class Login extends Component{

  constructor(){
    super();
    this.state = {
      errors:[]
    }
  }

    handleLogin(e){
      e.preventDefault();
      let self = this;
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user){
        if(user){
          self.props.activeAdmin(user);
          self.props.setloggedIn(true);
        }
      })
      .catch(function(err){
        self.setState({errors:err});
      })
    }

    render(){
        return (
            <div className="login-box">
              <div className="login-logo">MobileLT login page</div>
              <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form onSubmit={this.handleLogin.bind(this)}>
                  <span className="help-block" style={{color:'red'}}>{ this.state.errors ? this.state.errors.message : '' }</span>
                  <div className="form-group has-feedback">
                    <input ref="email" className="form-control" placeholder="Email" type="email" />
                    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                  </div>
                  <div className="form-group has-feedback">
                    <input ref="password" className="form-control" placeholder="Password" type="password" />
                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                  </div>
                  <div className="row">
                    <div className="col-xs-4">
                      <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
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
        admin:state.activeAdmin
    };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    activeAdmin:activeAdmin,
    setloggedIn: setloggedIn
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);