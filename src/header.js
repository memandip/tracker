import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { setloggedIn, activeAdmin } from './components/actions/userActions';
import firebase from 'firebase';

class Header extends Component{

    constructor(props){
        super(props);
    }

    handleLogout(e){
        e.preventDefault();
        this.props.setLoggedIn(false);
        this.props.activeAdmin(false);
        firebase.auth().signOut();
    }

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
                                <img className="img-circle user-image" src="../dist/img/avatar5.png" alt="User Avatar" />
                                <span className="hidden-xs">{this.props.admin.displayName}</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img className="img-circle user-image" src="../dist/img/avatar5.png" alt="User Avatar" />
                                        <p> {this.props.admin.displayName} - Admin</p>
                                    </li>

                                    <li className="user-footer">
                                        <div className="pull-left">
                                        <Link to="/profile" className="btn btn-default btn-flat">
                                            Profile
                                        </Link>
                                        </div>
                                        <div className="pull-right">
                                        <a
                                        onClick = {this.handleLogout.bind(this)}
                                        className="btn btn-default btn-flat">
                                            <i className="fa fa-sign-out"></i>
                                            &nbsp; Sign out
                                        </a>
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
        admin:state.activeAdmin
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        setLoggedIn:setloggedIn,
        activeAdmin:activeAdmin
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);