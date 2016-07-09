import { createStore } from 'redux'

export default function configureStore(preloadedState) {
  const store = createStore(preloadedState)

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
