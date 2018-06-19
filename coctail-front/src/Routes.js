import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import NewCocktail from "./containers/NewCocktail/NewCocktail";
// import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Cocktails from "./containers/Cocktails/Cocktails";
import OneCocktail from "./containers/OneCocktail/OneCocktail";

const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props}/> : <Redirect to="/login" />
);

const Routes = ({user}) => (
  <Switch>
    <Route path="/" exact component={Cocktails}/>
      <ProtectedRoute
          isAllowed={user}
          path="/cocktails/new"
          exact
          component={NewCocktail}
      />
    <Route path="/cocktails/:id" exact component={OneCocktail}/>
    {/*<Route path="/register" exact component={Register}/>*/}
    <Route path="/login" exact component={Login}/>
  </Switch>
);

export default Routes;