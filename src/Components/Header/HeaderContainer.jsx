import React from "react";
import "./Header.css";
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../Redux/Reducers/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login)
                }
            )
    }

    render() {
        return  <Header {...this.props}/>
    }
}

let mapStateToProps= (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {setUserData})(HeaderContainer);