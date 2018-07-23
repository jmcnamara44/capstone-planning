import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import ResultList from './ResultList';
import UserPage from './UserPage';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: ''
    };
    this.handleUpdatingSearchAddresses = this.handleUpdatingSearchAddresses.bind(this);
  }

  handleUpdatingSearchAddresses(firstAddress, secondAddress){
    var newAddress1 = firstAddress;
    var newAddress2 = secondAddress;
    this.setState({address1: newAddress1});
    this.setState({address2: newAddress2});
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><Search onUpdatingSearchAddress={this.handleUpdatingSearchAddresses} />} />
          <Route path='/results' render={()=><ResultList address1={this.state.address1} address2={this.state.address2} />} />
          <Route path='/user' render={()=><UserPage />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
