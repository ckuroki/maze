import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutable from 'redux-immutable-state-invariant';
//import { persistState } from 'redux-devtools';
//import { hashHistory } from 'react-router';

export default function configureStore(initialState) {

  let enhancer;

  if (process.env.NODE_ENV!=='development') {
    enhancer= compose (applyMiddleware(reduxImmutable()),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else {
    enhancer= compose ( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  const store = createStore(rootReducer, initialState, enhancer);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

/*
function observeStore(store, select, onChange) {
let currentState;

  function handleChange() {
    let nextState = select({auth: store.getState().auth});
    if (nextState !== currentState) {
      onChange(currentState, nextState);
      currentState = nextState;
    }
  }

let unsubscribe = store.subscribe(handleChange);
handleChange();
return unsubscribe;
}
*/

//observeStore(store, (x) => x, function(curr, next){
//});

return store;
}
