import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "Pages/MainPage";
import PageNotFound from "Pages/404";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path = "/" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
