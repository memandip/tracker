import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    return (
        <div className="col-md-4">
          <div className="box box-widget widget-user-2">
            <div className="widget-user-header bg-yellow">
              <div className="widget-user-image">
                <img className="img-circle" src="../dist/img/avatar5.png" alt="User Avatar" />
              </div>
              <h3 className="widget-user-username">
                <Link to={"/user/"+props.user.id}>{props.user.name}</Link>
              </h3>
              <h5 className="widget-user-desc">User</h5>
            </div>
          </div>
        </div>
    );
}

export default User;