import React from 'react';

const MoveIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    <title>Move Icon</title>
    <path d="M40.62,24 C39.5154305,24 38.62,24.8954305 38.62,26 C38.62,27.1045695 39.5154305,28 40.62,28 L55.8,28 L38,45.8 L40.83,48.63 L58.63,30.83 L58.63,46 C58.63,47.1045695 59.5254305,48 60.63,48 C61.7345695,48 62.63,47.1045695 62.63,46 L62.63,24 L40.63,24 L40.62,24 Z" transform="translate(50.315000, 36.315000) rotate(-45.000000) translate(-50.315000, -36.315000) "></path>
    <path d="M59.8,51 L42,68.8 L42,53.62 C42,52.5154305 41.1045695,51.62 40,51.62 C38.8954305,51.62 38,52.5154305 38,53.62 L38,75.62 L60,75.62 C61.1045695,75.62 62,74.7245695 62,73.62 C62,72.5154305 61.1045695,71.62 60,71.62 L44.83,71.62 L62.63,53.82 L59.8,51 Z" transform="translate(50.315000, 63.310000) rotate(-45.000000) translate(-50.315000, -63.310000) "></path>
  </svg>
);

export default MoveIcon;