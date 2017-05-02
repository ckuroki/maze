import React from 'react';

const ScoreBoard = ({player,screen}) => {
  let screenId= screen.id || 0;
  return (
    <div className="pa4 white">
      <div className="b pa2">Screen : {screenId} </div>
      <div className="b pa2">Exits : NESO</div>
      <pre>Use arrows keys to navigate map.</pre>
    </div>
    );
}

export default ScoreBoard;
