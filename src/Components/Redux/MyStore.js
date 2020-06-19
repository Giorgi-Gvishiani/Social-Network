// import profileReducer from "./Reducers/profileReducer";
// import messagesReducer from "./Reducers/messagesReducer";
//
// let store = {
//     _callSubscriber() {
//         console.log('State changed')
//     },
//
//     _state: {
//         MessagesPage: {
//             DialogsData: [
//                 {name: '', id: 1},
//                 {name: '', id: 2},
//                 {name: '', id: 3},
//                 {name: '', id: 4}
//             ],
//             DialogMessageData: [
//                 {id: 1, message: 'Hi, my name is '},
//                 {id: 2, message: 'Hi, my name is '},
//                 {id: 3, message: 'Hi, my name is '},
//                 {id: 4, message: 'Hi, my name is '}
//             ],
//             newMessageBody: ''
//         },
//         ProfilePage: {
//             PostsData: [
//                 {message: "Hi it is my first post!", likeCount: 32},
//                 {message: "Hi it is my second post!", likeCount: 49},
//                 {message: "Hi it is my third post!", likeCount: 24}
//             ],
//             newPostText: ''
//         }
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         profileReducer(this._state.ProfilePage, action);
//         messagesReducer(this._state.MessagesPage, action);
//         this._callSubscriber()
//     }
//
// }
//
// export default store;