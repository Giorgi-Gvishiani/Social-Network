import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormType} from "../../Utilities/FormControls";
import {required} from "../../Utilities/Validators";

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
                <Field name={"login"} component={FormType("input")} placeholder={"Login"} validate={[required]}/>
            </div>

            <br/>

            <div>
                <Field name={"password"} component={FormType("input")} type={"password"} placeholder={"Password"}
                       validate={[required]}/>
            </div>

            <br/>

            <div>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"} validate={[required]}/> Remember me
            </div>

            <br/>

            <button>submit</button>
        </form>
    )
}

const LoginFormContainer = reduxForm({form: "Login"})(LoginForm)


export default Login;