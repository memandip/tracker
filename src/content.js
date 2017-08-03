import React, { Component } from 'react';
import * as firebase from 'firebase';

export class Content extends Component{

    constructor(){
        super();
        this.state = {
            data:[],
            users:[]
        };
    }

    componentDidMount(){
       
    }

    render(){
        // let users = this.state.users.map(function(user){});
        return (
            <div className="content-wrapper">
                {/*<ul>{users}</ul>*/}
            </div>
        );
    }

}