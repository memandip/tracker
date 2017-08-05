import React, {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component{

    render(){
        return (
            <header className="main-header">
                <a href="#" className="logo">
                <span className="logo-mini"><b>M</b>LT</span>
                <span className="logo-lg"><b>Mobile</b>LT</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>

                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="/dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                                <span className="hidden-xs">Alexander Pierce</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                                        <p> Alexander Pierce - Web Developer</p>
                                    </li>

                                    <li className="user-footer">
                                        <div className="pull-left">
                                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

}

function mapStateToProps(state){
    return {
        users:state
    }
}

export default connect(mapStateToProps)(Header);