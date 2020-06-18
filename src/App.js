import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import {MessagesContainer} from "./Components/Messages/MessagesContainer";
import {UsersContainer} from "./Components/Users/usersContainer";

function App() {
    return (
        <div className="appContainer">
            <Header/>
            <div className="mainBlocks">
                <div className="staticBlock">
                    <Navbar/>
                </div>
                <div className='dynamicBlock'>
                    <Route path='/Profile' render={() => <Profile/>}/>
                    <Route path='/Messages' render={() => <MessagesContainer/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
