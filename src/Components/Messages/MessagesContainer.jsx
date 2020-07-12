import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import {sendMessage} from "../Redux/Reducers/messagesReducer";

const mapStateToProps = (state) => {
    return {
        DialogsData: state.messagesPage.DialogsData,
        DialogsMessagesData: state.messagesPage.DialogsMessagesData,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

export let MessagesContainer = connect(mapStateToProps, {sendMessage})(Messages)