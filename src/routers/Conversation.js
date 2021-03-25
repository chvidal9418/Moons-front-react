import React from 'react';
import {Switch, Route, useRouteMatch} from "react-router-dom";
import Conversation from "../screens/Conversation";
import EmptyScreen from "../screens/EmptyScreen";
import Configurations from "../screens/Configurations";
import Charts from "../components/Charts";

const Conversations = () => {
  let {path} = useRouteMatch()
  return (
    <Switch>
      <Route exact path={`${path}`}> <EmptyScreen/> </Route>
      <Route exact path={`${path}/config`}><Configurations/></Route>
      <Route exact path={`${path}/charts`}><Charts/></Route>
      <Route exact path={`${path}/:id`}> <Conversation/> </Route>

    </Switch>
  );
};

export default Conversations;
