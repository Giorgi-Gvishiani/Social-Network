import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormType} from "../../Utilities/FormControls";
import {maxLengthCreator, required} from "../../Utilities/Validators";

const maxLength50 = maxLengthCreator(50)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"messageForm"} placeholder={"enter your message"} component={FormType("textarea")}
                   validate={[required, maxLength50]}/>
            <button>send message</button>
        </form>
    )
}

const MessageFormContainer = reduxForm({form: "MessageForm"})(MessageForm)

export default MessageFormContainer;