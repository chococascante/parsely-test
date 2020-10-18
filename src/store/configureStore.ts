import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, Store } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import { History } from "history";
import { combineReducers, compose } from "redux";
import { connectRouter } from "connected-react-router";
import * as reducers from "./reducers";

export const history = createBrowserHistory();

const createRootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export default function configureStore(): Store {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
      )
    )
  );
  return store;
}
