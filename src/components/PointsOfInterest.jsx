import React from 'react';
import PropTypes from 'prop-types';

function PointsOfInterest(props){


  return (
    <div>
      <p>Attractions in your area:</p>
      <ul>
        // <li>Here will be a list of attractions from the google places api, most likely using latitude and longitude.  This is a placeholder, I am working and testing the results from the api</li>
      </ul>
    </div>
  );
}

PointsOfInterest.propTypes = {
  location: PropTypes.string
};

export default PointsOfInterest;
