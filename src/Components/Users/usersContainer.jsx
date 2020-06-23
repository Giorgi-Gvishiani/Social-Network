import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../Redux/Reducers/usersReducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";
import Preloader from "../../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.ToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.ToggleIsFetching(false);
                    this.props.SetUsers(response.data.items);
                    this.props.SetTotalUsersCount(response.data.totalCount);
                }
            )
    }

    onPageChanged = (pageNumber) => {
        this.props.ToggleIsFetching(true);
        this.props.SetCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleIsFetching(false);
                this.props.SetUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   Follow={this.props.Follow}
                   Unfollow={this.props.Unfollow}/>
        </>
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

const mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userID) => {
            dispatch(followAC(userID))
        },
        Unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        SetUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        SetCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        SetTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        ToggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)