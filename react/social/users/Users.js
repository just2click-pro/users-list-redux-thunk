import React from "react";
import UserPage from "./userPage/UserPage";
import UsersList from "./usersList/UsersList";
import {Route} from "react-router";

import '../../main.scss';

class Users extends React.Component {

    render(){
        return (<div>
                    <UsersList/>
                    <Route path="/users/:id" component={UserPage}/>
                </div>)
    }
}

export default Users;
