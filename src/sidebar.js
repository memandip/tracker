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
        let users = $.map(self.state.users, function(user, index){
            let icon = <i className="fa fa-dot-circle-o" aria-hidden="true"></i>;
            if(user.connection === true){
                icon = <i className="fa fa-dot-circle-o" aria-hidden="true" style={{color:'green'}}></i>;
            }
            return (
                <li key={index}>
                    <Link to={"/user/"+index}>
                        {icon}&nbsp;{user.name}
                    </Link>
                </li>
            );
        });
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
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
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-users"></i>
                            <span>Users</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            {users}
                        </ul>
                    </li>
                </ul>
                </section>
            </aside>
        );
    }
}

function mapStateToProps(state){
    return {users: state.users, activeUser: state.activeUser}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchUsers: fetchUsers,
        activeUser: activeUser
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);