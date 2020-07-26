import {connect} from "react-redux";
import {
    follow,
    getUsers,
    unfollow
} from "../Redux/Reducers/usersReducer";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        if (this.props.isFetching) {
            return (<Preloader/>)
        } else {
            return (<Users users={this.props.users}
                           pageSize={this.props.pageSize}
                           totalUsersCount={this.props.totalUsersCount}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           Follow={this.props.follow}
                           Unfollow={this.props.unfollow}/>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, getUsers
})(UsersContainer)