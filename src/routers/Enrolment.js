import React from 'react';
import {Switch, Route, useRouteMatch} from "react-router-dom";
import ProfileType from "../screens/Enrolment/ProfileType";
import DoctorsList from "../screens/Enrolment/DoctorsList";
import Username from "../screens/Enrolment/Username";

const Enrolment = () => {
  let {path} = useRouteMatch()
  return (
    <Switch>
      <Route exact path={`${path}`}> <ProfileType/> </Route>
      <Route exact path={`${path}/configDoctorRole`}> <DoctorsList/> </Route>
      <Route exact path={`${path}/configUserName`}> <Username/> </Route>
    </Switch>
  );
};

export default Enrolment;
