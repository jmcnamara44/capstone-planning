import React from 'react';
import PropTypes from 'prop-types';

function Result(props){
  const globalSpace = / /g;
  const globalComma = /,/g;
  let address1Search =  props.address1.replace(globalSpace, '+');
  let address2Search = props.address2.replace(globalSpace, '+');
  let address1Parsed =  address1Search.replace(globalComma, '');
  let address2Parsed = address2Search.replace(globalComma, '');
  let address1Directions = 'https://www.google.com/maps/dir/' + address1Parsed + '/' + address2Parsed;
  let address2Directions = 'https://www.google.com/maps/dir/' + address2Parsed + '/' + address1Parsed;

  return (
    <div>
      <p><a href={address1Directions} target='_blank'>Click here</a> to see directions from {props.address1} to {props.address2}.</p>
      <p><a href={address2Directions} target='_blank'>Click here</a> to see directions from {props.address2} to {props.address1}.</p>
    </div>
  );
}

Result.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string
};

export default Result;
