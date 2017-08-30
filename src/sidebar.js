import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import { fetchUsers, activeUser } from './components/actions/userActions';
import firebase from './components/firebase.config';

class Sidebar extends Component{

    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        let self = this;
        let userDb = firebase.database().ref().child('users');
        userDb.on('value', function(snap){
            self.props.fetchUsers(snap.val());
            self.setState({users:self.props.users});
        });
    }

    render(){
        let self = this;
        let onlineUsers = $.map(self.state.users, function(user, index){
            if(user.connection === 'online'){
                let icon = <i className="fa fa-dot-circle-o" aria-hidden="true" style={{color:'green'}}></i>;
                return (
                    <li key={index} style={{listStyle:'none'}}>
                        <Link to={"/user/"+index}>
                            {icon}&nbsp;{user.name}
                        </Link>
                    </li>
                );
            }
        });
        let offlineUsers = $.map(self.state.users, function(user, index){
            if(user.connection === 'offline'){
                let icon = <i className="fa fa-dot-circle-o" aria-hidden="true"></i>;
                return (
                <li key={index} style={{listStyle:'none'}}>
                    <Link to={"/user/"+index}>
                        {icon}&nbsp;{user.name}
                    </Link>
                </li>
            );
            }
        });
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                          <img src="../dist/img/avatar5.png" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                          <p>{this.props.admin.displayName}</p>
                          <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu tree" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li>
                            <Link to="/" >
                                <i className="fa fa-dashboard"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users">
                                <i className="fa fa-users"></i>&nbsp;
                                <span>Users</span>
                            </Link>
                        </li>
                        <li className="treeview active">
                            <a href="#">
                                <i className="fa fa-users"></i>
                                <span>Users</span>
                            </a>
                            <ul className="treeview-menu active">
                                <li className="treeview active">
                                     <a href="#">
                                        <i className="fa fa-users"></i>
                                        <span>Online Users</span>
                                    </a>
                                    <ul className="treeview">{onlineUsers}</ul>
                                </li>
                                <li className="treeview active">
                                    <a href="#">
                                        <i className="fa fa-users"></i>
                                        <span>Offline Users</span>
                                    </a>
                                    <ul className="treeview">{offlineUsers}</ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

function mapStateToProps(state){
    return {users: state.users, activeUser: state.activeUser, admin:state.activeAdmin}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchUsers: fetchUsers,
        activeUser: activeUser
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);