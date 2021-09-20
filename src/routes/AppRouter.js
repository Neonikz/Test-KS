import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { EditPatientForm } from "../components/EditPatientForm";
import { PatientsTable } from "../components/PatientsTable";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={PatientsTable}/>
          <Route exact path="/editPatient" component={EditPatientForm} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
}