import React from 'react';
import Result from './Result';
import PropTypes from 'prop-types';
import PointsOfInterest from './PointsOfInterest';

function ResultList(props){
  return (
    <div>
      <Result address1={props.address1}
        address2={props.address2} />
      <PointsOfInterest />
    </div>
  );
}

ResultList.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string
};

export default ResultList;
