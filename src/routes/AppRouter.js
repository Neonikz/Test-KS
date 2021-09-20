import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { EditPatientForm } from "../components/EditPatientForm";
import { PatientsList } from "../components/PatientsList";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={PatientsList}/>
          <Route exact path="/editPatient" component={EditPatientForm} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
}