import React from 'react';

const Grid = ({type}) => {
  let path="";
    for (let f=1;f<6 ; f++) {
      path=path+`M 8 ${f*64} H 384 `;
    }
    for (let f=1;f<6 ; f++) {
      path=path+`M ${f*64} 8 V 384 `;
    }
      return (
      <path d={path} fill="transparent" stroke="gray"/>
      );
}

export default Grid;
