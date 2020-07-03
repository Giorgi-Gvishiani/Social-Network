import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUsersProfile} from "../Redux/Reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {ProfileAPI} from "../../api/api";
import * as axios from "axios";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getProfile(userId);
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let withRouterContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile, getProfile})(withRouterContainerComponent);