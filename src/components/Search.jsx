import React from 'react';

function Search(){
  let _address1 = null;
  let _address2 = null;



  return (
    <div>
      <form>
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

export default Search;
