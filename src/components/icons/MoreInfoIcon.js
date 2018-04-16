import React from 'react';
import PropTypes from 'prop-types';

const MoreInfoIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24" overflow="visible" >
    <title>More Info Icon</title>
    <circle cx="3" cy="2" r="2"/>
    <circle cx="3" cy="8" r="2"/>
    <circle cx="3" cy="14" r="2"/>
  </svg>
);


MoreInfoIcon.propTypes = {
  size: PropTypes.string
};

export default MoreInfoIcon;
