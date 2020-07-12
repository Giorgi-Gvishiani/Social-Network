import React from "react";
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"messageForm"} placeholder={"enter your message"} component={"textarea"} />
            <button>send message</button>
        </form>
    )
}

const MessageFormContainer = reduxForm({form: "MessageForm"})(MessageForm)

export default MessageFormContainer;