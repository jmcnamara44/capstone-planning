import React from 'react';
import PropTypes from 'prop-types';

function Search(props){
  let _address1 = null;
  let _address2 = null;

  function handleDirectionsSearch(event) {
    event.preventDefault();
    console.log(_address1.value);
    console.log(_address2.value);
    props.onUpdatingSearchAddress(_address1.value, _address2.value);
    _address1.value = '';
    _address2.value = '';
  }

  return (
    <div>
      <form onSubmit={handleDirectionsSearch}>
        <p>Enter your starting address</p>
        <input
          type='text'
          id='address1'
          placeholder='600 1st Ave, Seattle, WA'
          ref={(input) => {_address1 = input;}}/>
        <p>Enter your friend's starting address</p>
        <input
          type='text'
          id='address2'
          placeholder='400 SW 6th Ave #800, Portland, OR'
          ref={(input) => {_address2 = input;}}/>
        <br/>
        <button type='submit'>GO!</button>
      </form>
    </div>
  );
}

Search.propTypes = {
  onUpdatingSearchAddress: PropTypes.func
};

export default Search;
