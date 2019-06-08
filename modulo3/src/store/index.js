import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks'
import rootSaga from './sagas'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : () => {}
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const createAppropriateStore = __DEV__ ? console.tron.createEnhancer : createStore
const store = createStore(
  rootReducer,
  compose(
    createAppropriateStore(),
    applyMiddleware(sagaMiddleware),
  ),
)

sagaMiddleware.run(rootSaga)

export default store
