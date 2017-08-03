import React, { Component } from 'react';
import { Header } from './header.js';
import  Sidebar  from './sidebar.js';
import { Content } from './content.js';
import  * as firebase  from 'firebase';

export default class App extends Component{

    constructor(){
        super();
        this.state = {
            loggedIn:false,
            users: []
        };
    }

    componentDidMount(){
        let db = firebase.database();
        let userData = db.ref().child('users');
        userData.once('value', (snap) => {
            this.setState({users:snap.val()});
        });
        // firebase.auth().onAuthStateChanged( (user) => {
        //     if(user){
        //     }   else    {
        //         // window.location.href='/login';
        //     }
        // });
        console.log(this.props);
    }



    render(){
        return (
            <div>
                <Header />
                <Sidebar/>
                <Content />
            </div>
        );
    }

}