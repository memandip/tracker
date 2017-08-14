import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Profile extends Component{

    render(){
        return (
            <h1>User profile</h1>
        )
    }

}

function mapStateToProps(state){
    return {
        user:state.activeAdmin
    };
}

// matchDispatchToProps(dispatch){
//     return bindActionCreators({

//     }, dispatch);
// }

export default connect(mapStateToProps)(Profile);

