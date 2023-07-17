import Form from './Form';
import React from 'react';
import Table from './table';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/" >
            <Table />
          </Route>

          <Route path="/create" >
            <Form />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
