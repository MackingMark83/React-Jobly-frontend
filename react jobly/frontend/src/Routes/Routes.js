import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import CompanyList from "../Companies/CompaniesList";
import JobList from "../Jobs/JobList";
import CompanyDetail from "../Companies/CompaniesDetail";
import LoginForm from "../Login/LoginForm";
import ProfileForm from "../Profiles/ProfileForm";
import SignupForm from "../Signup/SignupForm";
import PrivateRoute from "./PrivateRoute";


function Routes({ login, signup }) {
    return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <PrivateRoute exact path="/companies">
            <CompanyList />
          </PrivateRoute>

          <PrivateRoute exact path="/jobs">
            <JobList />
          </PrivateRoute>

          <PrivateRoute exact path="/companies/:handle">
            <CompanyDetail />
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <ProfileForm />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
