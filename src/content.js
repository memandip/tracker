import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from './components/firebase.config';
import { fetchUser, activeUser } from './components/actions/userActions';
import Maps from './components/googlemaps.config';

class Content extends Component{

    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        let id = this.props.match.params.userId;
        let userDb = firebase.database().ref().child('users').child(id);
        let self = this;
        userDb.on('value', function(snap){
            self.props.activeUser(snap.val());
        });
    }

    componentWillReceiveProps(nextProps){
        let id = this.props.match.params.userId;
        if(id !== nextProps.match.params.userId){
            let id = nextProps.match.params.userId;
            this.updateUser(id);
        }
    }

    updateUserPosition(){
        let mapEl = document.getElementById('mapLoader');
        let position = {lat: this.props.user.latitude, lng: this.props.user.longitude};
        let self = this;
        Maps.load(function(google) {
            let map = new google.maps.Map(mapEl,{
                zoom:10,
                center:position
            });
            let marker = new google.maps.Marker({
                position:position,
                map:map,
                title:"Position of "+self.props.user.name
            });
            marker.setPosition(position);
            marker.setMap(map);
            map.setCenter(position);
        });
    }

    updateUser(id){
        let userDb = firebase.database().ref().child('users').child(id);
        let self = this;
        userDb.on('value', function(snap){
            self.props.activeUser(snap.val());
            // self.updateUserPosition();
        });
    }

    render(){
        let mapEl = document.getElementById('mapLoader');
        let position = {lat: this.props.user.latitude, lng: this.props.user.longitude};
        let self = this;
        Maps.load(function(google) {
            let map = new google.maps.Map(mapEl,{
                zoom:10,
                center:position
            });
            let marker = new google.maps.Marker({
                position:position,
                map:map,
                title:"Position of "+self.props.user.name
            });
            marker.setPosition(position);
            marker.setMap(map);
            map.setCenter(position);
        });
        return (
            <div className="content-wrapper" id="mapLoader"></div>
        );
    }

}

function mapStateToProps(state){
    return {
        user:state.activeUser
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        activeUser:activeUser
    },dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Content);