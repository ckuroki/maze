import React, { Component, PropTypes } from 'react';
import Background from './Background';
//import * as mapUtils from '../utils/map';

export default class Maze extends Component {

/*  static propTypes = {
    setValue: PropTypes.func.isRequired,
    bindRef: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
*/

  handleKeyPress(ev){
    ev.preventDefault();
    console.log(ev.which);
  }

  render() {
  return (
      <Background type="room"/>
    );
  }
}
