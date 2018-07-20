import React from 'react';
import PropTypes from 'prop-types';

function Result(props){
  const globalSpace = / /g;
  const globalComma = /,/g;
  let address1Search =  props.address1.replace(globalSpace, '+');
  let address2Search = props.address2.replace(globalSpace, '+');
  address1Search =  address1Search.replace(globalComma, '');
  address2Search = address2Search.replace(globalComma, '');
  console.log(address1Search);
  console.log(address2Search);

  function handleTrimAddress() {
    address1Search = props.address1.replace(' ', '+');
    address2Search = props.address2.replace(' ', '+');
  }



  return (
    <div>
      <p><a href='https://www.google.com/maps' target='_blank'>Click here</a> to see directions from {props.address1}</p>
      <p><a href='https://www.google.com/maps' target='_blank'>Click here</a> to see directions from {props.address2}</p>
    </div>
  );
}

Result.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string
};

export default Result;
