import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import s from "./Messages.module.css";
import MessageFormContainer from "./MessagesForm";

const Messages = (props) => {
    let dialogsElements = props.DialogsData.map(d => <Dialogs id={d.id} name={d.name} key={d.id}/>);
    let dialogsMessagesElements = props.DialogsMessagesData.map(d => <DialogsMessages id={d.id} messages={d.message}
                                                                                      key={d.id}/>)

    const addNewMessage = (formData) => {
        props.sendMessage(formData.messageForm)
    }

    return (
        <div className={s.Messages}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {dialogsMessagesElements}
            </div>

            <div>
                <MessageFormContainer onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}

export default Messages;