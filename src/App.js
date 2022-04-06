import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Link, Route, useHistory } from 'react-router-dom';
import Main from './views/Main';
import { useState } from 'react';
import axios from 'axios';
import Author from './views/Author';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/author">
          <Author />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
