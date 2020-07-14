import React from "react";
import s from '../Profile/MyPosts/MyPost.module.css'
import {Field, reduxForm} from "redux-form";
import {FormType} from "../../Utilities/FormControls";
import {required} from "../../Utilities/Validators";

let ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.formContainer}>
                <Field name={"profileForm"} component={FormType("textarea")}
                       validate={[required]}
                       placeholder={"enter your text"}/>
                <div>
                    <button>add post</button>
                </div>
            </div>
        </form>
    )
}

ProfileForm = reduxForm({form: "profileForm"})(ProfileForm)

export default ProfileForm;