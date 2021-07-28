import * as redux from "redux";
import reduxSaga from "redux-saga";
import { rootReducer } from "./reducer/rootReducers";
import rootSaga from "./saga/rootSaga";

export const getStore=()=>{
  const initialState={}
  const reduxSagaMiddleWare=reduxSaga();
  const store = redux.createStore(rootReducer,initialState, redux.applyMiddleware(reduxSagaMiddleWare));
  reduxSagaMiddleWare.run(rootSaga)
  return store;
}