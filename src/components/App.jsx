import React from 'react';
import Header from './Header';
import { Switch } from 'react-router-dom';

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
