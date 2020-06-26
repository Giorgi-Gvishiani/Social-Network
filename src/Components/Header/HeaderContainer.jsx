import React from "react";
import "./Header.css";
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../Redux/Reducers/authReducer";
import {AuthAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        AuthAPI.getAuth()
            .then(data => {
                let {id, email, login} = data;
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