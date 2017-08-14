import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import User from './user';

class Users extends Component{

    constructor(){
        super();
        this.state = {
            users:{}
        }
    }

    render(){
        let self = this;
        let users = $.map(self.props.users, function(user, index){
            return <User key={index} user={user}/>
        });
        return (
            <section className="content">
                <div className="content-wrapper">
                    <div className="row">{users}</div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Users);
