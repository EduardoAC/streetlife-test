import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

export default function configureStore(preloadedState) {
    const store = createStore(
      preloadedState,
      applyMiddleware(thunkMiddleware, createLogger())
    )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const reducers = require('../reducers');
      const reducer = combineReducers(reducers);
      store.replaceReducer(reducer)
    })
  }

  return store
}
