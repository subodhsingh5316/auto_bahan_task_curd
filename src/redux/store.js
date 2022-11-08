import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "../utils/logger";
import monitorReducerEnhancer from "../utils/monitor";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, thunk, sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
const composedEnhancers = compose(...enhancers);
const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export { store, persistor };
