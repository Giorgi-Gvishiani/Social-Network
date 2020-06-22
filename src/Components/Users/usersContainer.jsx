import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../Redux/Reducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userID) => {dispatch(followAC(userID))},
        Unfollow: (userID) => {dispatch(unfollowAC(userID))},
        SetUsers: (users) => {dispatch(setUsersAC(users))},
        SetCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
        SetTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))}
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)