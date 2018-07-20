import React from 'react';
import PropTypes from 'prop-types';

function PointsOfInterest(props){
  return (
    <div>
      <p>Placeholder for POIs</p>
    </div>
  );
}

PointsOfInterest.propTypes = {
  location: PropTypes.string
};

export default PointsOfInterest;
