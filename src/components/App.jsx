import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import ResultList from './ResultList';
import UserPage from './UserPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address1: null,
      address2: null
    };
    this.handleUpdatingSearchAddresses = this.handleUpdatingSearchAddresses.bind(this);
  }

  handleUpdatingSearchAddresses(firstAddress, secondAddress){
    var newAddress1 = firstAddress;
    var newAddress2 = secondAddress;
    console.log(newAddress1);
    console.log(newAddress2);
    this.setState({address1: newAddress1});
    this.setState({address2: newAddress2});
    console.log(this.state.address1);
    console.log(this.state.address2);
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><Search onUpdatingSearchAddress={this.handleUpdatingSearchAddresses} />} />
          <Route path='/results' render={()=><ResultList />} />
          <Route path='/user' render={()=><UserPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
