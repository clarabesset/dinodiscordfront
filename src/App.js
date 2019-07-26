import React from "react";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Intro from "./pages/Intro";
import WhatsurName from "./pages/WhatsUrName";
import SignUp from "./pages/SignUp";
import Menu from "./pages/Menu";
import Game from "./pages/Game";
import Result from "./pages/Result";
import LeaderBoard from "./pages/LeaderBoard";
import Instructions from "./pages/Instructions";
import Profile from "./pages/Profile";
import ProtectedRoute from "./auth/ProtectedRoute";

function App({ location }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/intro" component={Intro} />
        <Route path="/whats-ur-name" component={WhatsurName} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute path="/menu" component={Menu} />
        <ProtectedRoute path="/game" component={Game} />
        <ProtectedRoute path="/result" component={Result} />
        <ProtectedRoute path="/leaderboard" component={LeaderBoard} />
        <ProtectedRoute path="/instructions" component={Instructions} />
        <ProtectedRoute path="/profile/:id" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
