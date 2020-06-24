import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import s from "./Messages.module.css";

const Messages = (props) => {
    let dialogsElements = props.DialogsData.map(d => <Dialogs id={d.id} name={d.name} key={d.id}/>);
    let dialogsMessagesElements = props.DialogsMessagesData.map(d => <DialogsMessages id={d.id} messages={d.message}
                                                                                      key={d.id}/>)

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let currentText = e.target.value;
        props.updateMessageText(currentText)
    }

    return (
        <div className={s.Messages}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {dialogsMessagesElements}
            </div>

            <div><textarea
                placeholder='Enter your message'
                value={props.newMessageBody}
                onChange={onMessageChange}/></div>
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Messages;