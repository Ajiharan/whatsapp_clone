import React, { useState } from "react";
import "./App.css";
import Chat from "./chat/Chat";
import Sidebar from "./side/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Login from "./user/Login";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return user ? (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route exact path="/">
              {/* <Chat /> */}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  ) : (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
