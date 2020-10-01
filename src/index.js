import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import ProgramType from './programType';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div>
              <Header />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/series">
                      <ProgramType type="series"  />
                  </Route>
                  <Route path="/movies">
                      <ProgramType type="movie"  />
                  </Route>
              </Switch>
              <Footer className="footer"/>
          </div>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
