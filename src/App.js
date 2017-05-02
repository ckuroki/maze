import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Maze from './components/Maze';
import ScoreBoard from './components/ScoreBoard';
import * as mazeActions from './actions/mazeActions';

class App extends Component {

  static propTypes = {
    player: PropTypes.object.isRequired,
    screen: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentDidMount() {
    const {actions,screen} = this.props;
    actions.loadScreen(screen);
  }

//        <ScoreBoard player={player} screen={screen}/>
  render() {
    let {player,screen} = this.props;
    return (
      <div className="flex justify-center">
        <Maze />
        <ScoreBoard player={player} screen={screen} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(mazeActions, dispatch)};
}

function mapStateToProps(state) {
  return {
    player: state.player,
    screen: state.screen
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
