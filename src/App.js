import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './header.js';
import  Sidebar  from './sidebar.js';
import Content from './content.js';
import NotFoundContent from './notfoundcontent.js';
import Login from './login.js';
import { setloggedIn, activeAdmin } from './components/actions/userActions';
import Users from './components/users';
import firebase from './components/firebase.config';
import Profile from './components/profile';

class App extends Component{

    constructor(){
        super();
        this.state = {};
    }

    componentWillMount(){
        let self = this;
        firebase.auth().onAuthStateChanged( (user) => {
            if(user){
                self.props.activeAdmin(user);
                self.props.setLoggedIn(true);
            }
        });

    }

    render(){
        if(this.props.loggedIn === false || this.props.loggedIn === undefined){
           return (
                <Router>
                    <Route path="/" component={Login} />
                </Router>
            )
        }   else    {
             return (
                <Router>
                    <div>
                    <Header />
                    <Sidebar/>
                    <Switch>
                        <Route exact path="/" component={Users}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path={`/users`} component={Users} />
                        <Route exact path={`/user/:userId`} component={Content} />
                        <Route component={NotFoundContent} />
                    </Switch>
                    </div>
                </Router>
            )
        }

    }

}

function mapStateToProps(state){
    return {
        loggedIn: state.loggedIn
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        setLoggedIn: setloggedIn,
        activeAdmin: activeAdmin
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);