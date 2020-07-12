import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <LoginFormContainer onSubmit={onSubmit}/>
            </div>
        </div>
    )

}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} component={"input"} placeholder={"Login"}/>
            </div>

            <br/>

            <div>
                <Field name={"password"} component={"input"} type={"password"} placeholder={"Password"}/>
            </div>

            <br/>

            <div>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> Remember me
            </div>

            <br/>

            <button>submit</button>
        </form>
    )
}

const LoginFormContainer = reduxForm({form: "Login"})(LoginForm)


export default Login;