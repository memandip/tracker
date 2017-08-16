import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from './components/firebase.config';
import { activeUser } from './components/actions/userActions';
import Maps from './components/googlemaps.config';

class Content extends Component{

    constructor(props){
        super(props);
        this.state = {
            position:{
                lat : 27.7089603,
                lng : 85.3261328
            },
            map:null
        };
    }

    componentWillMount(){
        // let id = this.props.match.params.userId;
        // let userDb = firebase.database().ref().child('users').child(id);
        // let self = this;
        // userDb.on('value', function(snap){
        //     self.props.activeUser(snap.val());
        // });
    }

    componentDidMount(){
        let id = this.props.match.params.userId;
        let userDb = firebase.database().ref().child('users').child(id);
        let self = this;
        // window.navigator.geolocation.getCurrentPosition(function(position){
        //     let pos = {lat:position.coords.latitude, lng:position.coords.longitude}
        //     console.log("Position: ", pos);
        // });
        let mapEl = document.getElementById('mapLoader');
        let position = {lat: this.state.position.lat, lng: this.state.position.lng};
        Maps.load(function(google) {
            let map = new google.maps.Map(mapEl,{
                zoom:10,
                center:position
            });
            self.setState({map:map});
        });

        userDb.on('value', function(snap){
            let user = snap.val();
            self.props.activeUser(user);
        });
    }

    componentWillReceiveProps(nextProps){
        let id = this.props.match.params.userId;
        if(id !== nextProps.match.params.userId){
            let id = nextProps.match.params.userId;
            this.updateUser(id);
        }
    }

    // updateUserPosition(){
    //     let mapEl = document.getElementById('mapLoader');
    //     let position = {lat: this.props.user.latitude, lng: this.props.user.longitude};
    //     let self = this;
    //     Maps.load(function(google) {
    //         let map = new google.maps.Map(mapEl,{
    //             zoom:10,
    //             center:position
    //         });
    //         let marker = new google.maps.Marker({
    //             position:position,
    //             map:map,
    //             title:"Position of "+self.props.user.name
    //         });
    //         marker.setPosition(position);
    //         marker.setMap(map);
    //         map.setCenter(position);
    //     });
    // }

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
        let self = this;
        let map = this.state.map;
        Maps.load(function(google) {
            if(map != null && self.props.user != null){
                let position = {lat: self.props.user.latitude, lng: self.props.user.longitude};
                let marker = new google.maps.Marker({
                    position:position,
                    map:map,
                    title:"Position of "+self.props.user.name
                });
                marker.setPosition(position);
                marker.setMap(map);
                map.setCenter(position);
            }
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