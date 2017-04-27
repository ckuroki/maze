import React, { PropTypes } from 'react';
import Grid from './Grid';
const Background = ({type}) => {
  const [c1,c2,c3,c4,c5,c6] = [8,384,64,320,96,288];
  const [v1,v2,v3,v4] = [64,320,128,256];
  switch (type) {
    case "room":
      return (
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <Grid/>
      <path d={`M ${c1} ${c1} H ${c2} V ${c2} H ${c1} V ${c1} L ${c3} ${c3} H ${c4} L ${c2} ${c1} M ${c4} ${c3} V ${c4}  L ${c2} ${c2} M ${c4} ${c4} L ${c3} ${c4} L ${c1} ${c2} M ${c3} ${c4} L ${c3} ${c3} `} fill="transparent" stroke="cyan"/>
    </svg>
      );
      break;
    case "hall":
      return (
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <Grid/>
      <path d={`M ${c3} ${c1} H ${c4} L ${c2} ${c3} V ${c4} L ${c4} ${c2} H ${c3} L ${c1} ${c4} V ${c3} L ${c3} ${c1} M ${c5} ${c3} H ${c6} L ${c4} ${c5} V ${c6} L ${c6} ${c4} H ${c5} L ${c3} ${c6} V ${c5} L ${c5} ${c3} L ${c3} ${c1} M ${c6} ${c3} L ${c4} ${c1} M ${c4} ${c5} L ${c2} ${c3} M ${c4} ${c6} L ${c2} ${c4} M ${c6} ${c4} L ${c4} ${c2} M ${c5} ${c4} L ${c3} ${c2} M ${c3} ${c6} L ${c1} ${c4} M ${c3} ${c5} L ${c1} ${c3}`} fill="transparent" stroke="white"/>
    </svg>
      );
      break;
    case "vpass":
      return (
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <Grid/>
      <path d={`M ${v1} ${c1} H ${v2} V ${c2} H ${v1} V ${c1} L ${v3} ${c3} H ${v4} L ${v2} ${c1} M ${v4} ${c3} V ${c4}  L ${v2} ${c2} M ${v4} ${c4} L ${v3} ${c4} L ${v1} ${c2} M ${v3} ${c4} L ${v3} ${c3} `} fill="transparent" stroke="cyan"/>
    </svg>
      );
      break;
    case "hpass":
      return (
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <Grid/>
      <path d={`M ${c1} ${c1} H ${c2} V ${c2} H ${c1} V ${c1} L ${c3} ${c3} H ${c4} L ${c2} ${c1} M ${c4} ${c3} V ${c4}  L ${c2} ${c2} M ${c4} ${c4} L ${c3} ${c4} L ${c1} ${c2} M ${c3} ${c4} L ${c3} ${c3} `} fill="transparent" stroke="gray"/>
      <Grid/>
      <path d={`M ${c1} ${v1} H ${c2} V ${v2} H ${c1} V ${v1} L ${c3} ${v3} H ${c4} L ${c2} ${v1} M ${c4} ${v3} V ${v4}  L ${c2} ${v2} M ${c4} ${v4} L ${c3} ${v4} L ${c1} ${v2} M ${c3} ${v4} L ${c3} ${v3} `} fill="transparent" stroke="cyan"/>
    </svg>
      );
      break;
    default: 
      return (<div/>);
      break;
  }
}

Background.propTypes = {
  type: PropTypes.string
}

export default Background;
