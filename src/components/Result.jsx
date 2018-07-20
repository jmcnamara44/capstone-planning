import React from 'react';
import PropTypes from 'prop-types';

function Result(props){
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
