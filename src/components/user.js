import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationManager } from 'react-notifications';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import firebase from './firebase.config';
import { deleteUser, fetchUsers } from './actions/userActions';

class User extends Component {

  constructor(props){
    super(props);
    this.props = props;
  }

  handleDeleteUser(e){
    e.preventDefault();
    let self = this;
    let id = this.props.id;
    let user = firebase.database().ref().child('users/'+id);
    if(user){
      confirmAlert({
        title: 'Are you sure ???',
        message:'User will be permanently deleted.',
        confirmLabel: 'Yes',
        cancelLabel: 'No',
        onConfirm: () => {
          NotificationManager.info('User deleted.');
          user.remove();
        },
      })
    }
  }

  render(){
    return (
        <div className="col-md-4">
          <div className="box box-widget widget-user-2">
            <div className="widget-user-header bg-yellow">
              <div className="widget-user-image">
                <img className="img-circle" src="../dist/img/avatar5.png" alt="User Avatar" />
              </div>
              <h3 className="widget-user-username">
                <Link to={"/user/"+this.props.user.id}>{this.props.user.name}</Link>
                <a href="#" onClick={this.handleDeleteUser.bind(this)} className="btn btn-danger btn-xs pull-right">Delete</a>
              </h3>
              <h5 className="widget-user-desc">User</h5>
            </div>
          </div>
        </div>
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
      deleteUser: deleteUser,
      fetchUsers: fetchUsers
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(User);