import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import store from './components/store';

export class Sidebar extends React.Component{

    constructor(){
        super();
        this.state = {
            users: []
        }
        connect( (store) => {
            console.log('store');
            return { user: store.user }
        });
    }

    componentDidMount(){
        let users = this.props.users;
        this.setState({users:users});
        // console.log(this.props.users);
    }

    render(){
        let users = $.map(this.state.users, function(user, index){
            return (
                <li>
                    <a href={"user/"+index}>
                        <i className="fa fa-user"></i> &nbsp;
                        {user.name}
                    </a>
                </li>
            );
        });
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                <ul className="sidebar-menu tree" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-dashboard"></i> 
                            <span>Dashboard</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li>
                                <a href="index.html">
                                    <i className="fa fa-circle-o"></i> 
                                    Dashboard v1</a>
                            </li>
                            <li>
                                <a href="index2.html">
                                    <i className="fa fa-circle-o"></i> 
                                    Dashboard v2</a>
                            </li>
                        </ul>
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