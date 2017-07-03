import React from "react";
import {connect} from "react-redux";
import UserService from "../../services/UserService";
import {addUsersList} from "../../actions/creators";
import {Link} from "react-router-dom";

import "./users-list.scss";

class UsersList extends React.Component {

    constructor(){
        super();

        UserService
            .getAllUsers()
            .then( this.onAllUsers.bind(this) );
    }

    onAllUsers(usersList){
        this.props.addUsers(usersList);
    }

    renderUser(user, i){
        return <li key={i}>
                    <Link to={`/users/${user.id}`}>{ user.name }</Link>
                </li>
    }

    render(){
        return (<nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.props.users.map( this.renderUser.bind(this) ) }
                    </ul>
                </nav>)
    }
}

function mapStateToProps(state){
    return {
        users: state.friends.usersList
    }
}

function mapDispatchToProps(dispatch){
    return {
        addUsers: (users) => dispatch( addUsersList(users) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
