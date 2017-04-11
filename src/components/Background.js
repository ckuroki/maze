import React, { PropTypes } from 'react';

const Background = ({type}) => {
  if (type==="room") {
  return (
      <path d="M0 0 H 384 V 384 H 0 V 0 L 64 64 H 320 L 384 0 M 320 64 V 320 L 384 384 M 320 320 H 64 L 0 384 M 64 320 V 64  " fill="transparent" stroke="cyan"/>
    );
  } else {
  return (
      <path d="M64 0 H 320 L 384 64 V 320 L 320 384 H 64 L 0 320 V 64 L 64 0 M96 64 H 288 L 320 96 V 288 L 288 320 H 96 L 64 288 V 96 L 96 64 L 64 0 M 288 64 L 320 0 M 320 96 L 384 64 M 320 288 L 384 320 M 288 320 L 320 384 M 96 320 L 64 384 M 64 288 L 0 320 M 64 96 L 0 64" fill="transparent" stroke="white"/>
    );
  };
}

Background.propTypes = {
  type: PropTypes.string
}

export default Background;
