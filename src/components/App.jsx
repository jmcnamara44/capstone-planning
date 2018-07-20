import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import ResultList from './ResultList';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={()=><Search />} />
        <Route path='/results' render={()=><ResultList />} />
      </Switch>
    </div>
  );
}

export default App;
