import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../Redux/Reducers/usersReducer";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import Users from "./Users";
import {UsersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)