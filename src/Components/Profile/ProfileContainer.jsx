import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../Redux/Reducers/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 1049;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

let withRouterContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile, getStatus, updateStatus})(withRouterContainerComponent);