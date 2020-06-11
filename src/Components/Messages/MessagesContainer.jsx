import React from 'react';
import Messages from "./Messages";
import {connect} from "react-redux";
import {sendMessageAC, updateMessageTextAC} from "../Redux/Reducers/messagesReducer";

const mapStateToProps = (state) => {
    return {
        DialogsData: state.messagesPage.DialogsData,
        DialogsMessagesData: state.messagesPage.DialogsMessagesData,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (newMessageText) => {
            dispatch(updateMessageTextAC(newMessageText))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}


export let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)