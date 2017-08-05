import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header.js';
import  Sidebar  from './sidebar.js';
import Content from './content.js';
import NotFoundContent from './notfoundcontent.js';
import Login from './login.js';

class App extends Component{

    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){

    }



    render(){
        return (
            <Router>
                <div>
                    <Header />
                    <Sidebar/>
                        <Switch>
                            <Route exact path={`/user/:userId`} component={Content} />
                            <Route exact path="/login" component={Login} />
                            <Route component={NotFoundContent} />
                        </Switch>
                </div>
            </Router>
        );
    }

}

export default App;