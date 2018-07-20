import React from 'react';

function Search(){
  return (
    <div>
      <form>
        <p>Enter your starting address</p>
        <input
          type='text'
          id='address1'
          placeholder='123 Main St. Anywhere, WA'
          ref={(input) => {_address1 = input;}}/>
        <p>Enter your friend's starting address</p>
        <input
          type='text'
          id='address2'
          placeholder='456 Fake St. Somewhere, WA'
          ref={(input) => {_address2 = input;}}/>
        <button type='submit'>GO!</button>
      </form>
    </div>
  );
}

export default Search;
