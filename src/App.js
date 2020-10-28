import React from 'react';
import './App.css';

import Header from "./components/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Clients from "./components/Clients";
import Login from "./components/Login";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route path="/" exact component={Login}/>
                <Route path="/clients" exact component={Clients}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
