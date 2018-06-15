import React, { Component } from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Login from "./containers/Login/Login";


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/*<Route path="/eventcalendar" exact component={EventCalendar}/>*/}
          <Route path="/login" exact component={Login}/>
        </Switch>

      </Layout>
    );
  }
}

export default App;
