import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={()=><Search />} />
      </Switch>
    </div>
  );
}

export default App;
