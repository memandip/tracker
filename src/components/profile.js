import React, { Component } from 'react';
import { setloggedIn, activeAdmin, updateAdmin } from './actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Profile extends Component{

    constructor(){
        super();
        this.state = {
          messages:[
          {'successMessage':false},
          {'errorMessage':false}
          ]
        };
    }

    handleUpdate(e){
        e.preventDefault();
        let displayName = this.refs.displayName.value;
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let data = {
            displayName:displayName,
            email:email
        };
        let self = this;
        try{
          this.props.updateAdmin(data);
          NotificationManager.success('Your profile is updated.', 'Success Message');
          // self.setState({messages:[{successMessage:'Profile updated'}, {errorMessage:false}]});
        } catch(e){
          NotificationManager.error('Error message.', 'Unable to update your profile.');
          // self.setState({messages:[{successMessage:false}, {errorMessage:'Unable to updated profile.'}]});
        }
    }

    render(){
        // let message = $.map( this.state.messages, (message, key)  => {
        //   if(message.successMessage){
        //     return <div className="callout callout-success" key={key}>{message.successMessage}</div>;
        //   }
        //   if(message.errorMessage){
        //     return <div className="callout callout-error" key={key}>{message.errorMessage}</div>;
        //   }
        // });
        return (
            <div className="content-wrapper">
                <section className="content-header">
                  <h1>User Profile</h1>
                  <ol className="breadcrumb">
                    <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                    <li className="active">Profile</li>
                  </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-3">
                          <div className="box box-primary">
                            <div className="box-body box-profile">
                              <img className="profile-user-img img-responsive img-circle"
                                src="../dist/img/avatar5.png"
                                alt="User profile picture"/>
                              <h3 className="profile-username text-center">{this.props.admin.displayName}</h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-9">
                          <div className="nav-tabs-custom">
                            <ul className="nav nav-tabs">
                              <li className="active"><a href="#profile" data-toggle="tab">Profile</a></li>
                              <li><a href="#settings" data-toggle="tab">Settings</a></li>
                            </ul>
                            <div className="tab-content">
                              <div className="active tab-pane" id="profile">
                                <div className="post">
                                  <div className="panel panel-defaut">
                                    <div className="panel-header">
                                      <h4 className="panel-heading">Profile Details</h4>
                                    </div>
                                    <div className="panel-heading">
                                      <h5>Display name: {this.props.admin.displayName ? this.props.admin.displayName: '--' }</h5>
                                      <h5>Email: {this.props.admin.email ? this.props.admin.email : '--'}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tab-pane" id="settings">
                                <div className="post">
                                    <form onSubmit={this.handleUpdate.bind(this)}>
                                        <input type="text"
                                          ref="displayName"
                                          placeholder="Display name"
                                          className="form-control"/>
                                        <input type="email"
                                          ref="email"
                                          placeholder="Email"
                                          className="form-control"/>
                                        <input type="password"
                                          ref="password"
                                          placeholder="Password"
                                          className="form-control"/>
                                        <input type="submit" value="Update" />
                                    </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </section>
                <NotificationContainer />
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
        setLoggedIn:setloggedIn,
        activeAdmin:activeAdmin,
        updateAdmin:updateAdmin
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);