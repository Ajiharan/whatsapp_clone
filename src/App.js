import React from "react";
import "./App.css";
import Chat from "./chat/Chat";
import Sidebar from "./side/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
