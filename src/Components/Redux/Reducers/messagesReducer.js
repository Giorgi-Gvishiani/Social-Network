const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    DialogsData: [
        {id: 1, name: 'James'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Alex'}
    ],

    DialogsMessagesData: [
        {id: 1, message: 'Hi, my name is James'},
        {id: 2, message: 'Hi, my name is John'},
        {id: 3, message: 'Hi, my name is Alex'},
    ],
    newMessageBody: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageBody: action.newMessageText
            }
        }
        case SEND_MESSAGE : {
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            return {
                ...state,
                DialogsMessagesData: [...state.DialogsMessagesData, newMessage],
                newMessageBody: ''
            }
        }
        default:
            return state
    }

}

export const updateMessageText = (newMessageText) => {
    return {type: UPDATE_MESSAGE_TEXT, newMessageText}
}

export const sendMessage = () => {
    return {type: SEND_MESSAGE}
}

export default messagesReducer;