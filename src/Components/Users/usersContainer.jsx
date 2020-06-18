import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../Redux/Reducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userID) => {dispatch(followAC(userID))},
        Unfollow: (userID) => {dispatch(unfollowAC(userID))},
        SetUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)