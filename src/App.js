import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {MessagesContainer} from "./Components/Messages/MessagesContainer";
import UsersContainer from "./Components/Users/usersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
    return (
        <div className="appContainer">
            <HeaderContainer/>
            <div className="mainBlocks">
                <div className="staticBlock">
                    <Navbar/>
                </div>
                <div className='dynamicBlock'>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Messages' render={() => <MessagesContainer/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
