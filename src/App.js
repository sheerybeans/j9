import React from 'react';
import WelcomePage from './components/WelcomePage';
import Intro from './components/Intro';
import Message from './components/Message';
import End from './components/End';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route exact path="/welcomeback">
            <WelcomePage />
          </Route>
          <Route exact path="/message">
            <Message />
          </Route>
          <Route exact path="/end">
            <End />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
export default App;