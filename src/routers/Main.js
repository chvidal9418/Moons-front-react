import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Launcher, MainScreen} from "../screens";
import Enrolment from "../screens/Enrolment/index";
import Conversation from "../screens/Conversation";
import Configurations from "../screens/Configurations";
import Charts from "../components/Charts";

const Main = () => {


  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact>
          <Launcher/>
        </Route>

        <Route path="/enrolment">
          <Enrolment/>
        </Route>

        <Route path="/conversations">
          <MainScreen/>
        </Route>


        <Route path="/:id" exact>
          <Conversation/>
        </Route>


      </Switch>
    </BrowserRouter>
  )
}
export default Main
