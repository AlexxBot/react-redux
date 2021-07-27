import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

import createMiddleware from "redux-saga";

//esta parte se hizo sin reduz saga
//const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/* export function createReduxStore() {
  const store = createStore(rootReducer, enableReduxDevTools);
  return store;
}
 */

//export const store = createStore(rootReducer, enableReduxDevTools)

//este parte es con redux saga

const sagaMiddleware = createMiddleware()




const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);





