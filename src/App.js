import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/main" component={ Main } />
          <Route exact path="/feedback" component={ Feedback } />
          <Route exact path="/ranking" component={ Ranking } />
        </Switch>
      </header>
    </div>
  );
}
