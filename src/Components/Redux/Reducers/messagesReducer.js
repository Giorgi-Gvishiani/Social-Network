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
    ]
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE : {
            let newMessage = {
                id: 4,
                message: action.newMessageBody
            }
            return {
                ...state,
                DialogsMessagesData: [...state.DialogsMessagesData, newMessage],
            }
        }
        default:
            return state
    }

}

export const sendMessage = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody}
}

export default messagesReducer;