import React from "react";
import {connect} from "react-redux";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"
import { getUser, getPosts } from "../../../actions/creators";

import "./user-page.scss";

class UserPage extends React.Component {

    constructor(props){
        super(props);

        if( props.match.params.id ){
            props.getUser(props.match.params.id);
            props.getPosts(props.match.params.id);
        }
    }

    componentWillReceiveProps( { match } ){
        if (match.params.id && match.params.id !== this.props.match.params.id) {
            this.props.getUser(match.params.id);
            this.props.getPosts(match.params.id);
        }
    }

    render() {
        if (this.props.isLoading) {
            return (<main className="user-page">Loading...</main>);
        }
        return (
            <main className="user-page">
                <UserDetails user={ this.props.user }/>
                <UserPosts posts={ this.props.posts }/>
            </main>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUser: (userId) => dispatch( getUser(userId) ),
        getPosts: (userId) => dispatch( getPosts(userId) )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.friends.selectedUser.isLoading,
        posts: state.friends.selectedUser.posts,
        user: state.friends.selectedUser.details
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);