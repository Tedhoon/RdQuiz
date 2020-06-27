import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "Pages/MainPage";
import PageNotFound from "Pages/404";
import ResultPage from "Pages/ResultPage";
import ReNewResultPage from "Pages/ReNewResultPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path = "/result/" component={ResultPage} />
          <Route exact path = "/renew_result/" component={ReNewResultPage} />
          <Route path = "/" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
