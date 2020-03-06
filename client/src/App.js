import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alerts from "./pages/Alerts";
import Detail from "./pages/Detail";
import Submit from "./pages/Submit";
import CTAAlerts from "./pages/CtaAlerts";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/alerts"]}>
            <Alerts />
          </Route>
          <Route exact path="/alerts/:id">
            <Detail />
          </Route>
          <Route exact path="/submit">
            <Submit />
          </Route>
          <Route exact path="/ctaAlerts">
            <CTAAlerts />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
