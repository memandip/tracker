import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './header.js';
import  Sidebar  from './sidebar.js';
import Content from './content.js';
import NotFoundContent from './notfoundcontent.js';
import Login from './login.js';
import { setloggedIn } from './components/actions/userActions';
import Users from './components/users';
import firebase from './components/firebase.config';

class App extends Component{

    constructor(){
        super();
        this.state = {};
    }

    componentWillMount(){
        let self = this;
        firebase.auth().onAuthStateChanged( (user) => {
            if(user.length > 0){
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
        setLoggedIn: setloggedIn
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);